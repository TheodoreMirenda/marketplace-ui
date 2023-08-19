import { SearchIcon } from '@chakra-ui/icons'
import { HStack, Text, Flex, Button, Image, Box, Divider, Link} from '@chakra-ui/react'
import { SearchBar } from './search-bar'
import { Category, useCategoriesQuery } from "@src/shared/generated/graphql-schema";
import { useEffect, useState } from 'react';
import NextLink from 'next/link'

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
      <HStack ml={4} mr={4} spacing={8}>
        <Link as={NextLink} color={'fishPalette.green1'}href="/about">About</Link>
        <Link as={NextLink} color={'fishPalette.green1'}href="/login">Log In</Link>
      </HStack>
    </Flex>

    <Flex mt={0} height={'40px'} bg={'fishPalette.green4'} justifyContent={'left'} padding={0} >
      <Link 
        as={NextLink} w='100px' h='40px' justifyContent='center' href="/marketplace"
        pt={2}
        bg= "fishPalette.green4"
        color= "white"
        _hover= {{
          bg:"fishPalette.green1",
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
        bg= "fishPalette.green4"
        color= "white"
        _hover= {{
          bg:"fishPalette.green1",
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