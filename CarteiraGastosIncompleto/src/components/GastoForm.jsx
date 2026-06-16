import { useState } from 'react'

import {
  View,
  TextInput,
  Pressable,
  Text,
  StyleSheet
} from 'react-native'

import { router } from 'expo-router'

export default function GastoForm({
  onSalvar
}) {
  const [descricao, setDescricao] =
    useState('')

  const [valor, setValor] =
    useState('')

  const [categoria, setCategoria] =
    useState('')

  function salvar() {
    if (
      !descricao ||
      !valor ||
      !categoria
    ) {
      return
    }

    onSalvar({
      id: Date.now().toString(),
      descricao,
      valor: Number(valor),
      categoria
    })

    setDescricao('')
    setValor('')
    setCategoria('')
  }

  return (
    <View>
      <TextInput
        placeholder="Descrição"
        value={descricao}
        onChangeText={setDescricao}
      />

      <TextInput
        placeholder="Valor"
        value={valor}
        onChangeText={setValor}
        keyboardType="numeric"
      />

      <TextInput
        placeholder="Categoria"
        value={categoria}
        onChangeText={setCategoria}
      />

      <Pressable onPress={salvar} style={styles.botaoSalvar}>
        <Text style={styles.textoBotao}>Salvar</Text>
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
      borderWidth: 1,
      borderColor: '#7d7d7d',
      padding: 15,
      borderRadius: 10,
      marginBottom: 10  
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
    },
    botaoSalvar: {
    backgroundColor: '#f321aa', 
    padding: 15,
    borderRadius: 10,
    alignItems: 'center',
    marginTop: 10
    },
    textoBotao: {
      color: '#fff',
      fontWeight: 'bold',
    }
})