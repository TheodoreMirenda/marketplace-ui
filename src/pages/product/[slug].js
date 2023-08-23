import React from 'react';
import { Text } from "@chakra-ui/react"
import ProductPageComponent from '/src/modules/components/product-page'
import { useProductQuery } from "@src/shared/generated/graphql-schema";

const ProductPage = ({ slug }) => {
const fetchProduct = useProductQuery({
    variables: {
        where: {
            uuid: slug,
    }},
}) 
console.log(fetchProduct)
  return (
    <ProductPageComponent {...fetchProduct?.data?.product}/>
  );
}

export default ProductPage;

export const getServerSideProps = async ({ params }) => {
    const slug = params?.slug;
    return {
      props: {
        slug: slug,
      },
    };
  };