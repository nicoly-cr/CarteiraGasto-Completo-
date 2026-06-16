import AsyncStorage from '@react-native-async-storage/async-storage'

const CHAVE = '@gastos'

export async function buscarGastos() {
  const dados = await AsyncStorage.getItem(CHAVE)

  if (!dados) {
    return []
  }

  return JSON.parse(dados)
}

export async function salvarGastos(lista) {
  await AsyncStorage.setItem(
    CHAVE,
    JSON.stringify(lista)
  )
}   