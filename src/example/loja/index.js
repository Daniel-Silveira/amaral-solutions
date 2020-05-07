import React, { useState, useEffect } from 'react'
import Products from './components/products'
import Navbar from './components/navbar'
import Cart from './components/cart'
import Overlay from '../../components/overlay'

const Loja = () => {
  const [data, setData] = useState([
    {
      name: 'Exemplo de produto',
      price: 99.9,
      description: 'Exemplo de produto de nossa loja',
      image: 'https://acacia-wood.com/themes/jtherczeg-multi//assets/images/acacia/empty-img.png',
    },
    {
      name: 'Exemplo de produto 2',
      price: 10.9,
      description: 'Exemplo de produto de nossa loja',
      image: 'https://acacia-wood.com/themes/jtherczeg-multi//assets/images/acacia/empty-img.png',
    },
    {
      name: 'Exemplo de produto 3',
      price: 69.9,
      description: 'Exemplo de produto de nossa loja',
      image: 'https://acacia-wood.com/themes/jtherczeg-multi//assets/images/acacia/empty-img.png',
    },
    {
      name: 'Exemplo de produto 4',
      price: 81.9,
      description: 'Exemplo de produto de nossa loja',
      image: 'https://acacia-wood.com/themes/jtherczeg-multi//assets/images/acacia/empty-img.png',
    },
    {
      name: 'Exemplo de produto 5',
      price: 758.9,
      description: 'Exemplo de produto de nossa loja',
      image: 'https://acacia-wood.com/themes/jtherczeg-multi//assets/images/acacia/empty-img.png',
    },
    {
      name: 'Exemplo de produto 6',
      price: 94.9,
      description: 'Exemplo de produto de nossa loja',
      image: 'https://acacia-wood.com/themes/jtherczeg-multi//assets/images/acacia/empty-img.png',
    },
    {
      name: 'Exemplo de produto 7',
      price: 93.9,
      description: 'Exemplo de produto de nossa loja',
      image: 'https://acacia-wood.com/themes/jtherczeg-multi//assets/images/acacia/empty-img.png',
    },
    {
      name: 'Exemplo de produto 8',
      price: 954.9,
      description: 'Exemplo de produto de nossa loja',
      image: 'https://acacia-wood.com/themes/jtherczeg-multi//assets/images/acacia/empty-img.png',
    },
    {
      name: 'Exemplo de produto 9',
      price: 99.9,
      description: 'Exemplo de produto de nossa loja',
      image: 'https://acacia-wood.com/themes/jtherczeg-multi//assets/images/acacia/empty-img.png',
    },
    {
      name: 'Exemplo de produto 10',
      price: 99.9,
      description: 'Exemplo de produto de nossa loja',
      image: 'https://acacia-wood.com/themes/jtherczeg-multi//assets/images/acacia/empty-img.png',
    },
    {
      name: 'Exemplo de produto 11',
      price: 99.9,
      description: 'Exemplo de produto de nossa loja',
      image: 'https://acacia-wood.com/themes/jtherczeg-multi//assets/images/acacia/empty-img.png',
    },
    {
      name: 'Exemplo de produto 12',
      price: 99.9,
      description: 'Exemplo de produto de nossa loja',
      image: 'https://acacia-wood.com/themes/jtherczeg-multi//assets/images/acacia/empty-img.png',
    },
    {
      name: 'Exemplo de produto 13',
      price: 99.9,
      description: 'Exemplo de produto de nossa loja',
      image: 'https://acacia-wood.com/themes/jtherczeg-multi//assets/images/acacia/empty-img.png',
    },
    {
      name: 'Exemplo de produto 14',
      price: 99.9,
      description: 'Exemplo de produto de nossa loja',
      image: 'https://acacia-wood.com/themes/jtherczeg-multi//assets/images/acacia/empty-img.png',
    },
    {
      name: 'Exemplo de produto 15',
      price: 99.9,
      description: 'Exemplo de produto de nossa loja',
      image: 'https://acacia-wood.com/themes/jtherczeg-multi//assets/images/acacia/empty-img.png',
    },
    {
      name: 'Exemplo de produto 16',
      price: 99.9,
      description: 'Exemplo de produto de nossa loja',
      image: 'https://acacia-wood.com/themes/jtherczeg-multi//assets/images/acacia/empty-img.png',
    },
    {
      name: 'Exemplo de produto 17',
      price: 159.9,
      description: 'Exemplo de produto de nossa loja',
      image: 'https://acacia-wood.com/themes/jtherczeg-multi//assets/images/acacia/empty-img.png',
    },
    {
      name: 'Exemplo de produto 18',
      price: 854.9,
      description: 'Exemplo de produto de nossa loja',
      image: 'https://acacia-wood.com/themes/jtherczeg-multi//assets/images/acacia/empty-img.png',
    },
    {
      name: 'Exemplo de produto 19',
      price: 359.9,
      description: 'Exemplo de produto de nossa loja',
      image: 'https://acacia-wood.com/themes/jtherczeg-multi//assets/images/acacia/empty-img.png',
    },
    {
      name: 'Exemplo de produto 20',
      price: 29.9,
      description: 'Exemplo de produto de nossa loja',
      image: 'https://acacia-wood.com/themes/jtherczeg-multi//assets/images/acacia/empty-img.png',
    },
    {
      name: 'Exemplo de produto 21',
      price: 659.9,
      description: 'Exemplo de produto de nossa loja',
      image: 'https://acacia-wood.com/themes/jtherczeg-multi//assets/images/acacia/empty-img.png',
    },
    {
      name: 'Exemplo de produto 22',
      price: 999.9,
      description: 'Exemplo de produto de nossa loja',
      image: 'https://acacia-wood.com/themes/jtherczeg-multi//assets/images/acacia/empty-img.png',
    },

    {
      name: 'Exemplo de produto 23',
      price: 70.9,
      description: 'Exemplo de produto de nossa loja',
      image: 'https://acacia-wood.com/themes/jtherczeg-multi//assets/images/acacia/empty-img.png',
    },
    {
      name: 'Exemplo de produto 24',
      price: 99.9,
      description: 'Exemplo de produto de nossa loja',
      image: 'https://acacia-wood.com/themes/jtherczeg-multi//assets/images/acacia/empty-img.png',
    },
    {
      name: 'Exemplo de produto 25',
      price: 59.9,
      description: 'Exemplo de produto de nossa loja',
      image: 'https://acacia-wood.com/themes/jtherczeg-multi//assets/images/acacia/empty-img.png',
    },
  ])
  const [cart, setCart] = useState([])
  const [open, setOpen] = useState(false)
  useEffect(() => {
    const localCart = localStorage.getItem('cart', cart)
    setCart(JSON.parse(localCart))
  }, [])
  useEffect(() => {
    localStorage.setItem('cart', JSON.stringify(cart))
  }, [cart])
  return (
    <>
      <Navbar cart={cart} setOpen={setOpen} />
      <Products cart={cart} setCart={setCart} data={data} />
      <Overlay open={open} setOpen={setOpen} />
      <Cart open={open} cart={cart} />
    </>
  )
}

export default Loja
