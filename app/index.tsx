import { View, Text, StyleSheet, Button } from 'react-native';

export default function HomeScreen() {
  return (
    <View style={styles.container}>
      <Text style={styles.saldo}>Saldo Atual</Text>
      <Text style={styles.valor}>R$ 2.500,00</Text>

      <View style={styles.row}>
        <Text>Receitas: R$ 4.000,00</Text>
        <Text>Despesas: R$ 1.500,00</Text>
      </View>

      <Button title="Adicionar Gasto" onPress={() => {}} />
      <Button title="Adicionar Receita" onPress={() => {}} />
    </View>
  );
}

const styles = StyleSheet.create({
  container: { flex: 1, paddingTop: 10, paddingHorizontal: 20, paddingBottom: 20, backgroundColor: '#fff' },
  saldo: { fontSize: 18, fontWeight: '600' },
  valor: { fontSize: 32, fontWeight: 'bold', marginVertical: 10 },
  row: { flexDirection: 'row', justifyContent: 'space-between', marginVertical: 20 },
});
