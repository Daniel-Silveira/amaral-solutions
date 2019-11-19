export const getMarcas = (list, setList) => {
  fetch("http://fipeapi.appspot.com/api/1/carros/veiculos/marcas.json")
    .then(res => res.json())
    .then(res => setList({ ...list, marca: res }))
    .catch(err => console.log(err));
};
export const getModelo = (list, setList, id) => {
  fetch(`http://fipeapi.appspot.com/api/1/carros/veiculos/${id}.json`)
    .then(res => res.json())
    .then(res => setList({ ...list, modelo: res }))
    .catch(err => console.log(err));
};
