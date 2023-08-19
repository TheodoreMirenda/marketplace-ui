import { SearchIcon } from '@chakra-ui/icons'
import { HStack, Text, Flex, Button, Image, Box, Divider } from '@chakra-ui/react'
import Link from 'next/link'
import { SearchBar } from './search-bar'
import { Category, useCategoriesQuery } from "@src/shared/generated/graphql-schema";
import { useEffect, useState } from 'react';


export default function MainHeader() {

  const fetchCategory = useCategoriesQuery({})
  const [categories, setCategories] = useState<Category[]>([]);

  useEffect(() => {
    setCategories(fetchCategory.data?.categories as Category[]);
  }, [fetchCategory]);
  
  return (
    <>
    <Flex mt={0} height={'50px'} bg={'fishPalette.green5'} padding={0} justifyContent={'space-between'} align={'center'} >
      <HStack minW={'300px'}>
        <Image
          ml={2}
          boxSize="45px"
          objectFit="cover"
          src='/img/fishStoreLogo.png'
          />
          <Link href="/">
            <Text fontSize="32" as='b' textColor="fishPalette.green1" ml={2} marginTop={'auto'}>
              TheFishStore
            </Text>
          </Link>
      </HStack>
      <SearchBar />
      <HStack ml={4}>
        <Button bg={'fishPalette.green5'} onClick={() => "/about"}>About</Button>
        <Button bg={'fishPalette.green5'} onClick={() => "/login"}>Log In</Button>
      </HStack>
    </Flex>

    <Flex mt={0} height={'40px'} bg={'fishPalette.green4'} justifyContent={'left'} padding={0} >
      <Button w='100px'>ALL</Button>
        <Divider orientation="vertical" w={2}/>
      {categories?.map((category) => (
        <>
        <Button w='100px'>{category.name?.toUpperCase()}</Button> 
        <Divider orientation="vertical" w={2}/>
        </>
      ))}
    </Flex>
    </>
  )
}