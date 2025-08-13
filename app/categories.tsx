import { View, Text, FlatList, Button, StyleSheet } from 'react-native';

const categorias = [
  { id: '1', nome: 'Alimentação' },
  { id: '2', nome: 'Transporte' },
  { id: '3', nome: 'Lazer' },
  { id: '4', nome: 'Casa' },
];

export default function CategoriesScreen() {
  return (
    <View style={styles.container}>
      <FlatList
        data={categorias}
        keyExtractor={(item) => item.id}
        renderItem={({ item }) => (
          <View style={styles.card}>
            <Text>{item.nome}</Text>
          </View>
        )}
      />
      <Button title="Criar Categoria" onPress={() => {}} />
    </View>
  );
}

const styles = StyleSheet.create({
  container: { flex: 1, padding: 20 },
  card: { padding: 15, backgroundColor: '#f5f5f5', marginBottom: 10, borderRadius: 10 },
});
