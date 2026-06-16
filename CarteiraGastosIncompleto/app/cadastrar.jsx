import { View, StyleSheet} from 'react-native'

import { router } from 'expo-router'

import GastoForm from '../src/components/GastoForm'

import {
  buscarGastos,
  salvarGastos
} from '../src/storage/gastoStorage'

import {
  enviarGasto
} from '../src/services/gastoService'

export default function Cadastro() {
  async function salvar(gasto) {
    const lista =
      await buscarGastos()

    lista.push(gasto)

    await salvarGastos(lista)

    try {
      await enviarGasto(gasto)
    } catch (error) {
      console.log(error)
    }

    router.back()
  }

  return (
    <View
      style={styles.container}
    >
      <GastoForm
        onSalvar={salvar}
      />
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,    
    padding: 20
  }
})