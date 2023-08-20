import { SearchIcon } from '@chakra-ui/icons'
import { HStack, Text, Flex, Button, Image, Box, Divider, Link} from '@chakra-ui/react'
import { SearchBar } from './search-bar'
import { Category, useCategoriesQuery } from "@src/shared/generated/graphql-schema";
import { useEffect, useState } from 'react';
import NextLink from 'next/link'
import {BsCart4} from 'react-icons/bs'

export default function MainHeader() {

  const fetchCategory = useCategoriesQuery({})
  const [categories, setCategories] = useState<Category[]>([]);

  useEffect(() => {
    setCategories(fetchCategory.data?.categories as Category[]);
  }, [fetchCategory]);
  
  return (
    <>
    <Flex mt={0} height={'50px'} bg={'fishPalette.cyan'} padding={0} justifyContent={'space-between'} align={'center'} >
      <HStack minW={'300px'}>
        <Image
          ml={2}
          boxSize="45px"
          objectFit="cover"
          src='/img/fishStoreLogo.png'
          />
          <Link href="/">
            <Text fontSize="32" as='b' textColor="fishPalette.white" ml={2} marginTop={'auto'}>
              TheFishStore
            </Text>
          </Link>
      </HStack>
      <SearchBar />
      <HStack ml={4} mr={4} spacing={8}>
        <Link as={NextLink} color={'fishPalette.white'}href="/about">About</Link>
        <Link as={NextLink} color={'fishPalette.white'}href="/login">Log In</Link>
        <Button  h={'35px'} w={'55px'} pr={'10px'} leftIcon={<BsCart4/>}></Button>
      </HStack>
    </Flex>

    <Flex mt={0} height={'40px'} bg={'fishPalette.green'} justifyContent={'left'} padding={0} >
      <Link 
        as={NextLink} w='100px' h='40px' justifyContent='center' href="/marketplace"
        pt={2}
        bg= "fishPalette.green"
        color= "white"
        _hover= {{
          bg:"fishPalette.gray",
          color:"black",
          _disabled: { bg: "doenet.mainGrey" }
        }}
        verticalAlign={'center'}
        alignItems={'center'}
        textAlign={'center'}
        fontSize={'lg'}
        rounded={'lg'}
        >
        ALL</Link>
        <Divider orientation="vertical" w={2}/>
      {categories?.map((category) => (
        <>
        <Link 
        as={NextLink} w='100px' h='40px' justifyContent='center' href="/marketplace"
        pt={2}
        bg= "fishPalette.green"
        color= "white"
        _hover= {{
          bg:"fishPalette.gray",
          color:"black",
          _disabled: { bg: "doenet.mainGrey" }
        }}
        verticalAlign={'center'}
        alignItems={'center'}
        textAlign={'center'}
        fontSize={'lg'}
        rounded={'lg'}
        >
        {category.name?.toUpperCase()}
        </Link>
        <Divider orientation="vertical" w={2}/>
        </>
      ))}
    </Flex>
    </>
  )
}