import React, { useState } from 'react';
import { View, Text, FlatList, Button, StyleSheet, Pressable } from 'react-native';
import DateTimePicker from '@react-native-community/datetimepicker';
import { Picker } from '@react-native-picker/picker';
import { monthNames } from '../src/utils/months';
import { categories } from '../src/utils/categories';

export default function ExpensesScreen() {
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
    <View style={styles.container}>
      <View style={styles.filtersContainer}>
        <Pressable onPress={() => setShowDatePicker(true)} style={styles.datePickerButton}>
          <Text style={styles.datePickerText}>
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
          style={styles.picker}
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
            <Text style={styles.cardText}>
              {categories.find(c => c.name === item.categoria)?.emoji} {item.nome} - R$ {item.valor.toFixed(2)}
            </Text>
            <Text>{item.data}</Text>
          </View>
        )}
      />
      {/* Botão customizado para adicionar gasto */}
      <Pressable style={styles.addButton} onPress={() => {}}
        android_ripple={{ color: '#FFF' }}
      >
        <Text style={styles.addButtonText}>Adicionar Gasto</Text>
      </Pressable>
    </View>
  );
}

const styles = StyleSheet.create({
  container: { flex: 1, padding: 20 },
  filtersContainer: { flexDirection: 'row', justifyContent: 'space-between', marginBottom: 10 },
  picker: { flex: 1 },
  datePickerButton: { flex: 1, justifyContent: 'center', alignItems: 'center', padding: 8, backgroundColor: '#eaeaea', borderRadius: 5, marginRight: 8 },
  datePickerText: { fontSize: 16 },
  card: { padding: 15, backgroundColor: '#f5f5f5', marginBottom: 10, borderRadius: 10 },
  cardText: { fontSize: 16, marginBottom: 4 },
  addButton: { backgroundColor: '#4CAF50', paddingVertical: 12, paddingHorizontal: 16, borderRadius: 5, alignItems: 'center', justifyContent: 'center', marginTop: 10, marginBottom: 10 },
  addButtonText: { color: '#fff', fontSize: 16, fontWeight: '600' },
});
