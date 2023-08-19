import { Box, Button, Flex, HStack, Image, VStack, Text, Spacer, Select} from "@chakra-ui/react";
import { FC, useCallback, useContext, useEffect, useState } from "react";
import {
  useLoginMutation, 
  useCategoriesQuery,
  useGetProductsLazyQuery,
  Product,
} from "@src/shared/generated/graphql-schema";
import ProductComponent from './product-component';

const MarketPlaceComponent: FC = () => {

  const [fetchProducts2] = useGetProductsLazyQuery({})
  const [products, setProducts] = useState<Product[]>([]);
  const [login] = useLoginMutation({})
  const fetchCategory = useCategoriesQuery({})

  const getAllProducts = async () => {
    const products = await fetchProducts2({
      variables: {
        where: {
        }}
    });
    setProducts(products.data?.getProducts as Product[]);
  }

  const getProductByCategory = async (categoryIdVariable : number) => {
    const products = await fetchProducts2({
      variables: {
        where: {
          categoryId : categoryIdVariable
        }}
    });
    setProducts(products.data?.getProducts as Product[]);
  }
  const handleSelectChange = (e: React.ChangeEvent<HTMLSelectElement>) => {
    if (e.target.value === "All") {
      getAllProducts();
    } else {
      getProductByCategory(parseInt(e.target.value));
    }
  }

  useEffect(() => {
    getAllProducts();
  }, []);

  return (
    <>
      <Flex margin={0} marginLeft={0} paddingTop={0} >
        <HStack>
          <Image
            position={'absolute'}
            src='/img/fishTank.jpg'
            minH={'450px'}
            zIndex={-1}
            >
          </Image>

          <Select
          
            ml={8}
            mr={8}
            w={'200px'}
            h={'40px'}
            bg={'fishPalette.green4'}
            rounded={'lg'}
            boxShadow={'lg'}
            onChange={(e) => { handleSelectChange(e) }}
              >
              <option value="All">All</option>
                {fetchCategory.data?.categories?.map((category) => (
                    <option value={category.id!}> {category.name}</option>
                  ))}
            </Select>

            <VStack>
              <HStack justifyContent={'center'} justifyItems={'center'} mt={'150'} mb={'150'}>
                {products?.map((product) => (
                    <ProductComponent {...product}/>
                ))}
              </HStack>
            </VStack>
          </HStack>
      </Flex>
    </>
  );
};

export default MarketPlaceComponent;
