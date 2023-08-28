import { HStack, Image, VStack, Text, Select, SimpleGrid, Grid, GridItem, useBreakpointValue} from "@chakra-ui/react";
import { FC, useEffect, useState } from "react";
import { useCategoriesQuery, useProductsLazyQuery, Product } from "@src/shared/generated/graphql-schema";
import ProductComponent from './product-component';
import { OrderByArg, ProductOrderByWithRelationInput, ProductWhereInput} from "@src/shared/generated/graphql-schema";

const MarketPlaceComponent: FC = () => {

  const [fetchProducts] = useProductsLazyQuery({})
  const fetchCategory = useCategoriesQuery({})

  const isMobile = useBreakpointValue({ base: true, md: false });

  const [orderByFiler, setOrderByFilter] = useState<ProductOrderByWithRelationInput>({name: OrderByArg.Asc});
  const [categoryFilter, setCategoryFilter] = useState<ProductWhereInput>({});
  const [products, setProducts] = useState<Product[]>([]);

  const getProducts = async () => {
    const products = await fetchProducts({ variables: { where: categoryFilter, orderBy: orderByFiler } });
    setProducts(products.data?.products as Product[]);
  }

  const handleSelectChange = (e: React.ChangeEvent<HTMLSelectElement>) => {
    if (e.target.value === "All") {
      setCategoryFilter({});
    } else {
      setCategoryFilter({categoryId: parseInt(e.target.value)});
    }
  }
  const handleSort = (e: React.ChangeEvent<HTMLSelectElement>) => {
    if (e.target.value === "Alpha") {
      setOrderByFilter({name: OrderByArg.Asc})
    } else if (e.target.value === "Low") {
      setOrderByFilter({price: OrderByArg.Asc})
    } else if (e.target.value === "High") {
      setOrderByFilter({price: OrderByArg.Desc})
    }
  }
  const handlePagination = (e: React.ChangeEvent<HTMLSelectElement>) => {
    // console.log(e.target.value);
  }

  useEffect(() => {
    getProducts(); 
  }, [orderByFiler, categoryFilter]);

  useEffect(() => {
    // console.log(products);
  }, [products]);

  return (
    <>
      <Image
        position={'absolute'}
        src='img/fishTank.jpg'
        h={{base:"100vh-80px", md:"100vh-80px"}}
        zIndex={-1}
        opacity={0.25}
        bgRepeat={'repeat'}
        />

      <Grid
        // minH='1920px'
        gridTemplateRows={{base:'85px 60px 600px', md:'50px 1fr 30px'}}
        templateColumns={{base:'repeat(1,1fr)', md:'repeat(5, 1fr)'}}
        justifySelf={'center'}
        // gap={4}
        mt={25}
      >
        <GridItem rowSpan={{base:1, md:2}} colSpan={1}  justifySelf={'center'} justifyContent={'center'} justifyItems={'center'}>
          <VStack justifyContent={'center'} >
            <Text fontSize={'2xl'} as={'b'} textAlign={'center'}>Select Category </Text>
            <Select
              w={'300px'}
              // ml={8}
              // mr={8}
              h={'40px'}
              bg={'fishPalette.cyan'}
              rounded={'lg'}
              boxShadow={'lg'}
              onChange={(e) => { handleSelectChange(e) }} >
                <option key='all'  value="All">All</option>
                  {fetchCategory.data?.categories?.map((category) => (
                      <option key={category.id} value={category.id!}> {category.name}</option>
                    ))}
              </Select>
            </VStack>
        </GridItem>

        <GridItem colSpan={4} h={'40px'} justifySelf={'center'} >
          <HStack justifyItems={{base:'center', md:'left'}} h={'50px'} w={'100%'}>
            <Text
              w={'75px'}
              fontSize={'sm'}
              textColor={'fishPalette.gray'}
              >
              {products?.length} Results </Text>
            <Text
              w={'50px'}
              fontSize={'sm'}
              textColor={'fishPalette.gray'}
              >
              Sort by </Text>
            <Select
              h={'30px'}
              w={'200px'}
              bg={'fishPalette.cyan'}
              rounded={'md'}
              boxShadow={'lg'}
              onChange={(e) => { handleSort(e)}} >
                <option key='Alpha' value="Alpha">Alphabetical</option>
                <option key='Low' value="Low">Price: Low to High</option>
                <option key='High' value="High">Price: High to Low</option>
            </Select>
            
            {isMobile ? <> </> : <>
            <Text
            w={'100px'}
            fontSize={'sm'}
            textColor={'fishPalette.gray'}
            >
            Show per page: </Text>
            <Select
              h={'30px'}
              w={'75px'}
              bg={'fishPalette.cyan'}
              rounded={'md'}
              boxShadow={'lg'}
              onChange={(e) => { handlePagination(e)}} >
                <option key='24' value="24">24</option>
                <option key='48' value="48">48</option>
                <option key='72' value="72">72</option>
            </Select>
            </>}

          </HStack>
        </GridItem>

        <GridItem colSpan={{base:1,md:4}} h={'100%'} >
          <HStack justifyContent={'center'}>
            <SimpleGrid justifyContent={'center'} justifyItems={'center'} mb={'150'} columns={{base: 1, md: 2, lg: 3, xl: 4}} spacing={6}>
              {products?.map((product) => (
                  <ProductComponent key={product.id} {...product}/>
              ))}
            </SimpleGrid>
          </HStack>
        </GridItem>
      </Grid>
    </>
  );
};

export default MarketPlaceComponent;
