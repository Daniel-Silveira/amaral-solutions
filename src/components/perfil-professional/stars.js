import React, { useEffect, useState } from 'react'

const Stars = ({ amount }) => {
  const [array, setArray] = useState([])
  const countStars = []
  useEffect(() => {
    for (let index = 0; index < amount; index++) {
      countStars.push(index)
      index === (amount -1) && setArray(countStars)
    }
  }, [])
  return (
    <div>
      {array.map(i => (
        <svg
          style={{ margin: '0 1px' }}
          width="15"
          height="15"
          viewBox="0 0 25 25"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="M10.7301 0.834968L7.80076 7.04121L1.24676 8.03965C0.0714311 8.21777 -0.399596 9.73183 0.452739 10.599L5.19441 15.4271L4.07292 22.2474C3.87105 23.4803 5.11367 24.4037 6.15441 23.8271L12.0176 20.6068L17.8807 23.8271C18.9215 24.399 20.1641 23.4803 19.9622 22.2474L18.8407 15.4271L23.5824 10.599C24.4348 9.73183 23.9637 8.21777 22.7884 8.03965L16.2344 7.04121L13.3051 0.834968C12.7802 -0.27128 11.2594 -0.285343 10.7301 0.834968Z"
            fill="#F9B253"
          />
        </svg>
      ))}
    </div>
  )
}

export default Stars
