import api from "../redux/api"

export const getMarcas = (list, setList) => {
  fetch('http://fipeapi.appspot.com/api/1/carros/veiculos/marcas.json')
    .then(res => res.json())
    .then(res => setList({ ...list, marca: res }))
    .catch(err => console.log(err))
}
export const getModelo = (list, setList, id) => {
  fetch(`http://fipeapi.appspot.com/api/1/carros/veiculos/${id}.json`)
    .then(res => res.json())
    .then(res => setList({ ...list, modelo: res }))
    .catch(err => console.log(err))
}
export const sendEmail = (data, setSend) => {
  fetch(`${api}/send`, {
    method: 'POST',
    headers: { 'Access-Control-Allow-Origin': '*', 'Content-Type': 'application/json' },
    body: JSON.stringify(data),
  })
    .then(res => {
      console.log(res)
      return setSend('send')
    })
    .catch(err => {
      console.log(err)
      return setSend('error')
    })
}
