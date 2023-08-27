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
      price: 7.99,
      quantity: 10,
      vendorId:1,
      categoryId: 2,
      images: ["Java-Fern.jpg"]
    },
    {
      name:"Moss Ball",
      description:"The Moss Ball is a spongy velvet like green algae ball that in the wild is found around Japan and Northern Europe",
      price: 8.50,
      quantity: 10,
      vendorId:1,
      categoryId: 2,
      images: ["mossball.jpg"]
    },
    {
      name:"Twin Tail Betta",
      description:"This variety of Betta has a striking, elaborate tail that differentiates it from other Bettas. The Twin Tail has a split tail, almost giving the suggestion of having two tails.",
      price: 19.99,
      quantity: 12,
      vendorId:1,
      categoryId: 1,
      images: ["bettaFish.jpg"]
    },
    {
      name:"Neon Tetra",
      description:"The Neon Tetra is often described as the jewel of the aquarium hobby. It is easy to see why it is one of the most popular freshwater tropical fish.",
      price: 4.99,
      quantity: 5,
      vendorId:1,
      categoryId: 1,
      images: ["neonTetra.jpg"]
    },
    {
      name:"Red Wag Platy",
      description:"A sporty two-tone variety of Xiphophorus maculatus Platy.",
      price: 3.99,
      quantity: 5,
      vendorId:1,
      categoryId: 1,
      images: ["Red_Wag_Platy.jpg"]
    },
    {
      name:"Rosy Barb",
      description:"The Rosy Barb is one of the larger Barbs that can grow up to 6 inches in the wild. The male is red and gold with black spots near the rear and at the dorsal fin. The female lacks the red color and is mostly golden.",
      price: 13.99,
      quantity: 5,
      vendorId:1,
      categoryId: 1,
      images: ["Rosy_Barb.jpg"]
    }
  ]

  const handleCreateVendorProduct = async () => {
    if(!await CategoryExists(1)){
      await createCategory({
        variables:{
          data: {
            name: "Fish"
          }
        }
      })
    }
    if(!await CategoryExists(2)){
      await createCategory({
        variables:{
          data: {
            name: "Plants"
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
      let vendorProductCreated = await createVendorProduct({
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
        console.log(vendorProductCreated?.data?.createVendorProduct?.id);
        let productCreated = await createProduct({
        variables:{
          data: {
            name: product.name,
            description: product.description,
            price: product.price,
            vendorProduct: { connect: { id: vendorProductCreated?.data?.createVendorProduct?.id }},
            category: { connect: { id: product.categoryId } },
            images: [product.images[0]]
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