import Image from 'next/image'
import { prisma } from './db'
import Link from 'next/link'
// import { Flex, Button } from '@chakra-ui/react';
import { useState } from 'react';

// import ProductItem from './components/productItem'
 const GetProducts = async () => {
  return await prisma.product.findMany();
 }


 async function CreateUser() {
  "use server"//only ever run on the server, never on the client

  const user = await prisma.user.create({
    data: {
      username: 'tjm',
      email: 'tjm@gmail.com',
      password: '123456',
      firstName: 'TJ',
      lastName: 'M',
      avatar: 'https://avatars.githubusercontent.com/u/12028023?v=4',
    }
  })
  console.log(user);
  }
  

export default async function Home() {

  const products = await GetProducts();

  return (
    <>
    <header>
    {/* <nav>
      <h1>Home next</h1>

      <h1>About Page</h1>
      <h1> logo </h1>

        <a href="#">About Page</a>
        <a href="#">sign up</a>
        <a href="#">sign in</a>

      </nav> */}
    </header>


    <main>
      {/* <Flex>

      <Link 
        href="/about"
      >
        About Page
      </Link>
        </Flex>
      
      <Flex>
        <Button
          colorScheme="teal"
          variant="outline"
          onClick={() => alert('hello')}
        />
      </Flex> */}
      <form action={CreateUser}>
        <input type="text" name="" id="" placeholder="login"/>
        <button type="submit">login</button>
      </form>

      
      <section>
        <ul>
          {products.map((product) => (
            <li key={product.id}>
              <h2>{product.name}</h2>
              <p>{product.description}</p>
              <p>{product.price}</p>
            </li>
          ))}
        </ul>
      </section>
    </main>

    
    </>
    
  )
}
