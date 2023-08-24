import { HStack, Image, VStack, Text, Select, SimpleGrid, Grid, GridItem, useBreakpointValue} from "@chakra-ui/react";
import { FC, useEffect, useState } from "react";
import { useCategoriesQuery, useProductsLazyQuery, Product } from "@src/shared/generated/graphql-schema";
import ProductComponent from './product-component';
import { OrderByArg, ProductOrderByWithRelationInput, ProductWhereInput} from "@src/shared/generated/graphql-schema";

const MarketPlaceComponent: FC = () => {

  const [fetchProducts] = useProductsLazyQuery({})
  const fetchCategory = useCategoriesQuery({})

  const columns = useBreakpointValue({ base: 1, md: 2, lg: 3, xl: 4});
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
        src='/img/fishTank.jpg'
        minH={'450px'}
        zIndex={-1}
        opacity={0.25}
        bgRepeat={'repeat'}
        />

      <Grid
        h='750px'
        gridTemplateRows={'50px 1fr 30px'}
        templateColumns='repeat(5, 1fr)'
        gap={4}
        mt={25}
      >
        <GridItem rowSpan={2} colSpan={1} paddingLeft={25}>
          <VStack h={'100%'} >
            <Text
              fontSize={'xl'}
              as={'b'}>
              Select Category
            </Text>
            <Select
              ml={8}
              mr={8}
              h={'40px'}
              bg={'fishPalette.cyan'}
              rounded={'lg'}
              boxShadow={'lg'}
              onChange={(e) => { handleSelectChange(e) }} >
                <option value="All">All</option>
                  {fetchCategory.data?.categories?.map((category) => (
                      <option value={category.id!}> {category.name}</option>
                    ))}
              </Select>
            </VStack>
        </GridItem>

        <GridItem colSpan={4} h={'25px'}>
          <HStack justifyItems={'left'} h={'50px'} w={'100%'}>
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
                <option value="Alpha">Alphabetical</option>
                <option value="Low">Price: Low to High</option>
                <option value="High">Price: High to Low</option>
            </Select>
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
                <option value="24">24</option>
                <option value="48">48</option>
                <option value="72">72</option>
            </Select>
          </HStack>
        </GridItem>

        <GridItem colSpan={4} h={'375px'} >
          <HStack justifyContent={'space-between'}>
            <SimpleGrid justifyContent={'center'} justifyItems={'center'} mb={'150'} columns={columns} spacing={6}>
              {products?.map((product) => (
                  <ProductComponent {...product}/>
              ))}
            </SimpleGrid>
          </HStack>
        </GridItem>
      </Grid>
    </>
  );
};

export default MarketPlaceComponent;
