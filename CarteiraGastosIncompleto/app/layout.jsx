import { Stack } from 'expo-router'

export default function Layout() {
  return (
    <Stack
      screenOptions={{
        headerStyle: {
          backgroundColor: '#f321aa', 
        },
        headerTintColor: '#fff', 
        headerTitleStyle: {
          fontWeight: 'bold',
        },
      }}
    >
      <Stack.Screen 
        name="index" 
        options={{ 
          title: 'Minhas Despesas',
          headerShown: true 
        }} 
      />

      <Stack.Screen 
        name="cadastrar" 
        options={{ 
          title: 'Novo Gasto',
          headerShown: true,
          headerBackVisible: true 
        }} 
      />
    </Stack>
  )
}