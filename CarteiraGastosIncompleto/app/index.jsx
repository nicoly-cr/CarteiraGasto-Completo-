import { View, FlatList, Text, Pressable, StyleSheet } from 'react-native';
import { useFocusEffect, router } from 'expo-router';
import { useState, useCallback } from 'react';
import GastoItem from '../src/components/GastoItem';
import { buscarGastos, salvarGastos } from '../src/storage/gastoStorage';

export default function Home() {
  const [gastos, setGastos] = useState([]);

  useFocusEffect(
    useCallback(() => {
      carregar();
    }, [])
  );

  async function carregar() {
    const lista = await buscarGastos();
    setGastos(lista);
  }

  async function excluir(id) {
    const novaLista = gastos.filter(item => item.id !== id);
    setGastos(novaLista);
    await salvarGastos(novaLista);
  }

  const total = gastos ? gastos.reduce((acumulador, item) => acumulador + Number(item.valor || 0), 0) : 0;

  return (
    <View style={styles.container}>
      <Pressable onPress={() => router.push('/cadastrar')}>
        <Text style={styles.novoGasto}>+ Adicionar Novo Gasto</Text>
      </Pressable>

      <Text style={styles.totalGastos}>
        Total de gastos: R$ {total.toFixed(2).replace('.', ',')}
      </Text>

      <FlatList
        data={gastos}
        keyExtractor={item => item.id.toString()}
        renderItem={({ item }) => (
          <GastoItem gasto={item} onExcluir={excluir} />
        )}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,    
    padding: 20
  },
  novoGasto: {
   backgroundColor: '#f321aa',
    marginTop: 30,
    padding: 15,
    borderRadius: 10,  
    color: '#fff',
    fontWeight: 'bold',
    marginBottom: 20,
    textAlign: 'center'
  },
  totalGastos: {
    fontSize: 16,
    marginBottom: 10,
    textAlign: 'center',
    fontWeight: 'bold'
  }
});