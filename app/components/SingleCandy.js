import React from 'react'

export default function SingleCandy(props) {
  return (
    <div key={props.candy.id}>
      <h1>{props.candy.name}</h1>
      <p>{props.candy.description}</p>
      <h2>{props.candy.quantity}</h2>
      <img src={props.candy.imageUrl} />
    </div>
  )
}
