import { Box, Button, Flex, HStack, Image, VStack, Text, Spacer} from "@chakra-ui/react";
import { FC, useCallback, useContext, useEffect, useState } from "react";
import {
  useCreateVendorProductMutation,
  useCreateProductMutation,
    useCategoryLazyQuery,
    useCreateCategoryMutation
} from "@src/shared/generated/graphql-schema";

const DataCreator: FC = () => {

  const [createVendorProduct] = useCreateVendorProductMutation({})
  const [createProduct] = useCreateProductMutation({})
  const [fetchCategory] = useCategoryLazyQuery({})
  const [createCategory] = useCreateCategoryMutation({})

  const CategoryExists = async (categoryId: number) => {
    const info = await fetchCategory({
      variables: {
        where: {
          id:categoryId
        }
      }
    });
    return info.data?.category;
  }

  const VendorProductsToCreate = [
    {
      name:"Java Fern",
      description:"A Thin Leafed Plant",
      price: 10,
      quantity: 10,
      vendorId:1,
      categoryId: 1,
      images: []
    },
    {
      name:"Moss Ball",
      description:"A Ball of Moss",
      price: 10,
      quantity: 10,
      vendorId:1,
      categoryId: 1,
      images: []
    },
    {
      name:"Betta Fish",
      description:"A nice fish",
      price: 20,
      quantity: 12,
      vendorId:1,
      categoryId: 2,
      images: []
    },
    {
      name:"Neon Tetra",
      description:"A flahsy fish",
      price: 5,
      quantity: 5,
      vendorId:1,
      categoryId: 2,
      images: []
    }
  ]

  const handleCreateVendorProduct = async () => {
    if(!await CategoryExists(1)){
      await createCategory({
        variables:{
          data: {
            name: "plant"
          }
        }
      })
    }
    if(!await CategoryExists(2)){
      await createCategory({
        variables:{
          data: {
            name: "fish"
          }
        }
      })
    }
    // if(!await CategoryExists(3)){
    //   await createCategory({
    //     variables:{
    //       data: {
    //         name: "tank"
    //       }
    //     }
    //   })
    // }

    VendorProductsToCreate.forEach(async (product) => {

    const vendorProductCreated = await createVendorProduct({
      variables:{
        data: {
          name: product.name,
          quantity: product.quantity,
          vendor: { connect: { id: product.vendorId }},
          category: { connect: { id: product.categoryId } }
        }
      }
    }); 

    if(vendorProductCreated?.data?.createVendorProduct?.id){
      console.log('vendor product created');
      const productCreated = await createProduct({
        variables:{
          data: {
            name: product.name,
            description: product.description,
            price: product.price,
            vendorProduct: { connect: { id: vendorProductCreated?.data?.createVendorProduct?.id }},
            category: { connect: { id: product.categoryId } },
            images: []
          }
        }
      })

      if(productCreated?.data?.createProduct?.id){
        console.log('product created');
      }
    }
    else{
        console.log('vendor product not created');
    }
  })}

  return (
    <>
    {/* <Button
        onClick={() => CategoryExists(10)}
        >Check Category</Button> */}
    <Button
        onClick={handleCreateVendorProduct}
        >Create Product Data</Button>
    </>
  );
};

export default DataCreator;