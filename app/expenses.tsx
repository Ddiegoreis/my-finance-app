import React, { useState } from 'react';
import { View, Text, FlatList, StyleSheet, Pressable, ViewStyle, TextStyle, useColorScheme } from 'react-native';
import DateTimePicker from '@react-native-community/datetimepicker';
import { Picker } from '@react-native-picker/picker';
import { monthNames } from '../src/utils/months';
import { categories } from '../src/utils/categories';
import { theme, darkTheme } from '../src/utils/theme';

export default function ExpensesScreen() {
  const scheme = useColorScheme();
  const currentTheme = scheme === 'dark' ? darkTheme : theme;

  const gastos = [
    { id: '1', nome: 'McDonnalds', categoria: 'Alimentação', valor: 35.0, data: '10/08' },
    { id: '2', nome: 'Ida para o trabalho', categoria: 'Transporte', valor: 90.0, data: '09/08' },
    { id: '3', nome: 'Aluguel casa', categoria: 'Aluguel', valor: 1200.0, data: '01/08' },
  ];

  const now = new Date();

  const [selectedDate, setSelectedDate] = useState(now);
  const [showDatePicker, setShowDatePicker] = useState(false);
  const [selectedCategory, setSelectedCategory] = useState('Todas');

  const categoryOptions = ['Todas', ...categories.map(c => c.name)];

  const filteredGastos = gastos.filter(item => {
    if (selectedCategory !== 'Todas' && item.categoria !== selectedCategory)
      return false;
    const monthNum = parseInt(item.data.split('/')[1], 10);
    if (monthNum !== selectedDate.getMonth() + 1)
      return false;
    return true;
  });

  return (
    <View style={[styles.container, { backgroundColor: currentTheme.colors.background }]}>  
      <View style={styles.filtersContainer}>
        <Pressable onPress={() => setShowDatePicker(true)} style={[styles.datePickerButton, { backgroundColor: currentTheme.colors.background }] }>
          <Text style={[styles.datePickerText, { color: currentTheme.colors.text }]}>
            {`${monthNames[selectedDate.getMonth()]}/${selectedDate.getFullYear()}`}
          </Text>
        </Pressable>
        {showDatePicker && (
          <DateTimePicker
            value={selectedDate}
            mode="date"
            display="spinner"
            onChange={(event, date) => {
              setShowDatePicker(false);
              if (date) setSelectedDate(date);
            }}
          />
        )}
        <Picker
          selectedValue={selectedCategory}
          onValueChange={setSelectedCategory}
          style={[styles.picker, { color: currentTheme.colors.text }]}
        >
          {categoryOptions.map(cat => (
            <Picker.Item key={cat} label={cat} value={cat} />
          ))}
        </Picker>
      </View>
      <FlatList
        data={filteredGastos}
        keyExtractor={item => item.id}
        renderItem={({ item }) => (
          <View style={styles.card}>
            <Text style={[styles.cardText, { color: currentTheme.colors.text }] }>
              {categories.find(c => c.name === item.categoria)?.emoji} {item.nome} - R$ {item.valor.toFixed(2)}
            </Text>
            <Text style={{ color: currentTheme.colors.text }}>{item.data}</Text>
          </View>
        )}
      />
      {/* Botão customizado para adicionar gasto */}
      <Pressable style={[styles.addButton, { backgroundColor: currentTheme.colors.primary }]} onPress={() => {}}
        android_ripple={{ color: '#FFF' }}
      >
        <Text style={[styles.addButtonText, { color: currentTheme.colors.background }]}>Adicionar Gasto</Text>
      </Pressable>
    </View>
  );
}

const styles = StyleSheet.create<{ container: ViewStyle;
  filtersContainer: ViewStyle;
  picker: TextStyle;
  datePickerButton: ViewStyle;
  datePickerText: TextStyle;
  card: ViewStyle;
  cardText: TextStyle;
  addButton: ViewStyle;
  addButtonText: TextStyle;
}>({
  container: { flex: 1, padding: theme.layout.spacing * 2 },
  filtersContainer: { flexDirection: 'row', justifyContent: 'space-between', marginBottom: theme.layout.spacing },
  picker: { flex: 1 },
  datePickerButton: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    padding: theme.layout.spacing,
    borderRadius: theme.layout.borderRadius,
    marginRight: theme.layout.spacing,
  },
  datePickerText: { fontFamily: theme.typography.fontFamily, fontSize: theme.typography.fontSizes.body },
  card: {
    padding: theme.layout.spacing * 2,
    backgroundColor: '#fff',
    marginBottom: theme.layout.spacing * 2,
    borderRadius: theme.layout.borderRadius,
    ...theme.shadows.card,
  },
  cardText: { fontFamily: theme.typography.fontFamily, fontSize: theme.typography.fontSizes.body, marginBottom: theme.layout.spacing / 2 },
  addButton: {
    backgroundColor: theme.colors.primary,
    paddingVertical: theme.layout.spacing * 1.5,
    paddingHorizontal: theme.layout.spacing * 2,
    borderRadius: theme.layout.borderRadius,
    alignItems: 'center',
    justifyContent: 'center',
    marginTop: theme.layout.spacing * 2,
    marginBottom: theme.layout.spacing * 2
  },
  addButtonText: { color: '#fff', fontFamily: theme.typography.fontFamily, fontSize: theme.typography.fontSizes.body, fontWeight: theme.typography.fontWeights.semiBold as TextStyle['fontWeight'] },
});
