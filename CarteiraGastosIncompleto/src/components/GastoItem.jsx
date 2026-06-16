import { View, Text, Pressable, StyleSheet } from 'react-native'

import { formatarMoeda } from '../utils/formatador'

export default function GastoItem({
  gasto,
  onExcluir
}) {
  return (
    <View
      style={styles.container}
    >
      <Text style={styles.descricao}>{gasto.descricao}</Text>
      <Text style={styles.categoria}>{gasto.categoria}</Text>
      <Text style={styles.valor}>{formatarMoeda(gasto.valor)}</Text>
     
      <Pressable
        onPress={() => onExcluir(gasto.id)}
      >
        <Text
          style={styles.excluir}
        >
          Excluir
        </Text>
      </Pressable>
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    borderWidth: 1,
    padding: 15,
    marginBottom: 10,
    borderRadius: 10        
    },  
    descricao: {    
    },
    valor: {
      fontWeight: 'bold',       
    },
    categoria: {
      fontStyle: 'italic',
    },
    excluir: {
      color: 'red',
        marginTop: 10
    }
})