const URL =
  'https://jsonplaceholder.typicode.com/posts'

export async function enviarGasto(gasto) {
  const response = await fetch(URL, {
    method: 'POST',

    headers: {
      'Content-Type': 'application/json'
    },

    body: JSON.stringify(gasto)
  })

  return await response.json()
}