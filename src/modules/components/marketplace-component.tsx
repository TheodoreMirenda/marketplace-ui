import { Box, Button, Flex, HStack, Image, VStack, Text, Spacer} from "@chakra-ui/react";
import { FC, useCallback, useContext, useEffect, useState } from "react";
import {
  useLoginMutation, 
  useUserLazyQuery,
  useUserQuery,
  useProductLazyQuery,
  useCategoryLazyQuery,
  useCreateUserMutation,
  useProductsLazyQuery,
  useProductsQuery,
  Product,
  Role
} from "@src/shared/generated/graphql-schema";
import ProductComponent from './product-component';

const MarketPlaceComponent: FC = () => {

  const [fetchUser] = useUserLazyQuery({})
  const [fetchProduct] = useProductLazyQuery({})
  const [fetchCategory] = useCategoryLazyQuery({})
  // const [fetchProducts] = useProductsLazyQuery({})
  const fetchProducts = useProductsQuery({})

  const [login] = useLoginMutation({})
  const [createUser] = useCreateUserMutation({})
  const [products, setProducts] = useState<Product[]>([]);

  const handleProduct = async () => {
    const info = await fetchProduct({
      variables: {
        where: {
          id:1
        }
      }
    });
    console.log(info.data);
  }
  // const handleProducts = async () => {
  //   const info = await fetchProducts({
  //   });
  //   if(info.data?.Products){
  //     console.log(info.data?.Products);
  //     setProducts(info.data?.Products as Product[]);
  //   }
  // }
  const handleCategory = async () => {
    const info = await fetchCategory({
      variables: {
        where: {
          id:1
        }
      }
    });
    console.log(info.data);
  }

  useEffect(() => {
    setProducts(fetchProducts.data?.Products as Product[]);
  }, [fetchProducts]);

  return (
    <>
        <Flex mt={0} paddingTop={0} justifyContent={'center'} justifyItems={'center'} >
          <VStack minH={'850px'}>
          <Image
            position={'absolute'}
            src='/img/fishTank.jpg'
            minH={'450px'}
            zIndex={-1}
            >
            </Image>
            <Text
              fontSize={'5xl'}
              fontWeight={'bold'}
              color={'white'}
              >
              Products
            </Text>
          <HStack justifyContent={'center'} justifyItems={'center'} mt={'50'} mb={'0'}>
            {products?.map((product) => (
                <ProductComponent {...product}/>
            ))}
          </HStack>
          </VStack>
      </Flex>
    </>
  );
};

export default MarketPlaceComponent;
