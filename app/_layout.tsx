import { Drawer } from 'expo-router/drawer';
import { Ionicons } from '@expo/vector-icons';
import { Pressable, View } from 'react-native';
import { StatusBar } from 'expo-status-bar';

export default function Layout() {
  return (
    <>
      <StatusBar style="dark"/>
      <Drawer
        screenOptions={{
          headerStyle: { backgroundColor: '#fff', elevation: 0, shadowOpacity: 0 },
          headerTintColor: '#000',
          drawerActiveTintColor: '#4CAF50',
          drawerLabelStyle: { fontSize: 15 },
          swipeEnabled: true,
          drawerType: 'front',
          sceneStyle: { backgroundColor: '#f8f9fa' },
        }}
      >
        <Drawer.Screen
          name="index"
          options={{
            title: '',
            drawerLabel: 'Home',
            drawerIcon: ({ color, size }: { color: string; size: number }) => (
              <Ionicons name="home-outline" size={size} color={color} />
            ),
          }}
        />
        <Drawer.Screen
          name="expenses"
          options={{
            title: 'Gastos',
            drawerLabel: 'Gastos',
            drawerIcon: ({ color, size }: { color: string; size: number }) => (
              <Ionicons name="wallet-outline" size={size} color={color} />
            ),
            headerRight: () => (
              <View style={{ flexDirection: 'row', gap: 12, paddingRight: 8 }}>
                <Pressable
                  hitSlop={8}
                  onPress={() => {
                    // TODO: abrir modal de novo gasto
                  }}
                >
                  {({ pressed }) => (
                    <Ionicons
                      name="add-circle-outline"
                      size={24}
                      color="#fff"
                      style={{ opacity: pressed ? 0.6 : 1 }}
                    />
                  )}
                </Pressable>
              </View>
            ),
          }}
        />
        <Drawer.Screen
          name="categories"
          options={{
            title: 'Categorias',
            drawerLabel: 'Categorias',
            drawerIcon: ({ color, size }: { color: string; size: number }) => (
              <Ionicons name="pricetags-outline" size={size} color={color} />
            ),
            headerRight: () => (
              <View style={{ flexDirection: 'row', gap: 12, paddingRight: 8 }}>
                <Pressable
                  hitSlop={8}
                  onPress={() => {
                    // TODO: abrir modal de nova categoria
                  }}
                >
                  {({ pressed }) => (
                    <Ionicons
                      name="add-circle-outline"
                      size={24}
                      color="#fff"
                      style={{ opacity: pressed ? 0.6 : 1 }}
                    />
                  )}
                </Pressable>
              </View>
            ),
          }}
        />
      </Drawer>
    </>
  );
}
