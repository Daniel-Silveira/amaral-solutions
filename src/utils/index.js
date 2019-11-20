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
export const sendEmail = (data, setSend) => {
  fetch("https://api-amaral-solutions.herokuapp.com/api/v1/data", {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify(data)
  })
    .then(res => {
      console.log(res);
      return setSend('Enviado com sucesso');
    })
    .catch(err => {
      console.log(err);
      return setSend('Não enviado');
    });
};
