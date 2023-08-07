"use client"

type ProductProps = {
    id: number;
    name: string;
    description: string;
    price: number;
}

export function ProductItem({id, name, description, price  }: ProductProps ) {
  return (
    <li key={id}>
      <h2>{name}</h2>
      <p>{description}</p>
      <p>{price}</p>
    </li>
  )
}