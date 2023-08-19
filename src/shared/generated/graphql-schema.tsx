import { gql } from '@apollo/client';
import * as Apollo from '@apollo/client';
export type Maybe<T> = T | null;
export type InputMaybe<T> = Maybe<T>;
export type Exact<T extends { [key: string]: unknown }> = { [K in keyof T]: T[K] };
export type MakeOptional<T, K extends keyof T> = Omit<T, K> & { [SubKey in K]?: Maybe<T[SubKey]> };
export type MakeMaybe<T, K extends keyof T> = Omit<T, K> & { [SubKey in K]: Maybe<T[SubKey]> };
const defaultOptions = {} as const;
/** All built-in and custom scalars, mapped to their actual values */
export type Scalars = {
  ID: string;
  String: string;
  Boolean: boolean;
  Int: number;
  Float: number;
  DateTime: any;
};

export type Category = {
  __typename?: 'Category';
  id?: Maybe<Scalars['Float']>;
  name?: Maybe<Scalars['String']>;
  orders?: Maybe<Array<Order>>;
  uuid?: Maybe<Scalars['String']>;
};

export type CategoryCreateInput = {
  name: Scalars['String'];
};

export type CategoryCreateNestedOneWithoutProductsInput = {
  connect: CategoryWhereUniqueInput;
};

export type CategoryCreateNestedOneWithoutVendorProductsInput = {
  connect: CategoryWhereUniqueInput;
};

export type CategoryWhereUniqueInput = {
  id?: InputMaybe<Scalars['Float']>;
  name?: InputMaybe<Scalars['String']>;
  uuid?: InputMaybe<Scalars['String']>;
};

export type LoginOutput = {
  __typename?: 'LoginOutput';
  access_token: Scalars['String'];
  expiresAt: Scalars['DateTime'];
  user: User;
};

export type LoginUserInput = {
  email: Scalars['String'];
  password: Scalars['String'];
};

export type Mutation = {
  __typename?: 'Mutation';
  createCategory: Category;
  createOrder: Order;
  createProduct: Product;
  createProductOrder: ProductOrder;
  createUser: User;
  createVendor: Vendor;
  createVendorProduct: VendorProduct;
  login: LoginOutput;
  signup: User;
};


export type MutationCreateCategoryArgs = {
  data: CategoryCreateInput;
};


export type MutationCreateOrderArgs = {
  data: OrderCreateInput;
};


export type MutationCreateProductArgs = {
  data: ProductCreateInput;
};


export type MutationCreateProductOrderArgs = {
  data: ProductOrderCreateInput;
};


export type MutationCreateUserArgs = {
  data: UserCreateInput;
};


export type MutationCreateVendorArgs = {
  data: VendorCreateInput;
};


export type MutationCreateVendorProductArgs = {
  data: VendorProductCreateInput;
};


export type MutationLoginArgs = {
  data: LoginUserInput;
};


export type MutationSignupArgs = {
  data: SignUpInput;
};

export type Order = {
  __typename?: 'Order';
  createdAt?: Maybe<Scalars['DateTime']>;
  id?: Maybe<Scalars['Float']>;
  orderStatus: OrderStatus;
  productOrders?: Maybe<Array<ProductOrder>>;
  updatedAt?: Maybe<Scalars['DateTime']>;
  user: User;
  userId?: Maybe<Scalars['Float']>;
  uuid?: Maybe<Scalars['String']>;
};

export type OrderCreateInput = {
  productOrders: ProductOrderCreateNestedManyWithoutOrderInput;
};

export type OrderCreateNestedOneWithoutProductOrdersInput = {
  connect: OrderWhereUniqueInput;
};

export enum OrderStatus {
  Cancelled = 'CANCELLED',
  Completed = 'COMPLETED',
  InTransit = 'IN_TRANSIT',
  Placed = 'PLACED'
}

export type OrderWhereUniqueInput = {
  id?: InputMaybe<Scalars['Float']>;
  uuid?: InputMaybe<Scalars['String']>;
};

export type Product = {
  __typename?: 'Product';
  category?: Maybe<Category>;
  createdAt?: Maybe<Scalars['DateTime']>;
  description?: Maybe<Scalars['String']>;
  id?: Maybe<Scalars['Float']>;
  images: Array<Scalars['String']>;
  name?: Maybe<Scalars['String']>;
  price?: Maybe<Scalars['Float']>;
  productOrder?: Maybe<Array<ProductOrder>>;
  updatedAt?: Maybe<Scalars['DateTime']>;
  uuid?: Maybe<Scalars['String']>;
  vendorProduct?: Maybe<VendorProduct>;
};

export type ProductCreateInput = {
  category: CategoryCreateNestedOneWithoutProductsInput;
  description: Scalars['String'];
  images: Array<Scalars['String']>;
  name: Scalars['String'];
  price: Scalars['Float'];
  vendorProduct: VendorProductCreateNestedOneWithoutProductInput;
};

export type ProductCreateNestedOneWithoutProductOrderInput = {
  connect: ProductWhereUniqueInput;
};

export type ProductOrder = {
  __typename?: 'ProductOrder';
  order?: Maybe<Order>;
  orderId?: Maybe<Scalars['Float']>;
  product?: Maybe<Product>;
  productId?: Maybe<Scalars['Float']>;
  quantity?: Maybe<Scalars['Float']>;
};

export type ProductOrderCreateInput = {
  order: OrderCreateNestedOneWithoutProductOrdersInput;
  product: ProductCreateNestedOneWithoutProductOrderInput;
  quantity?: InputMaybe<Scalars['Float']>;
};

export type ProductOrderCreateManyOrderInput = {
  productId?: InputMaybe<Scalars['Float']>;
  quantity?: InputMaybe<Scalars['Float']>;
};

export type ProductOrderCreateManyOrderInputEnvelope = {
  data: Array<ProductOrderCreateManyOrderInput>;
};

export type ProductOrderCreateNestedManyWithoutOrderInput = {
  createMany: ProductOrderCreateManyOrderInputEnvelope;
};

export type ProductOrderWhereUniqueInput = {
  orderId: Scalars['Float'];
  productId: Scalars['Float'];
};

export type ProductWhereInput = {
  categoryId?: InputMaybe<Scalars['Float']>;
  id?: InputMaybe<Scalars['Float']>;
  uuid?: InputMaybe<Scalars['String']>;
  vendorProductId?: InputMaybe<Scalars['Float']>;
};

export type ProductWhereUniqueInput = {
  id: Scalars['Float'];
  uuid?: InputMaybe<Scalars['String']>;
  vendorProductId?: InputMaybe<Scalars['Float']>;
};

export type Query = {
  __typename?: 'Query';
  Product?: Maybe<Product>;
  ProductOrder?: Maybe<ProductOrder>;
  categories: Array<Category>;
  category?: Maybe<Category>;
  getProducts: Array<Product>;
  getProductsAll: Array<Product>;
  order?: Maybe<Order>;
  user?: Maybe<User>;
  vendor?: Maybe<VendorProduct>;
};


export type QueryProductArgs = {
  where: ProductWhereUniqueInput;
};


export type QueryProductOrderArgs = {
  where: ProductOrderWhereUniqueInput;
};


export type QueryCategoryArgs = {
  where: CategoryWhereUniqueInput;
};


export type QueryGetProductsArgs = {
  where: ProductWhereInput;
};


export type QueryOrderArgs = {
  where: OrderWhereUniqueInput;
};


export type QueryUserArgs = {
  where: UserWhereUniqueInput;
};


export type QueryVendorArgs = {
  where: VendorProductWhereUniqueInput;
};

export enum Role {
  Admin = 'ADMIN',
  User = 'USER',
  Vendor = 'VENDOR'
}

export type SignUpInput = {
  avatar: Scalars['String'];
  email: Scalars['String'];
  firstName: Scalars['String'];
  lastName: Scalars['String'];
  password: Scalars['String'];
  username: Scalars['String'];
};

export type User = {
  __typename?: 'User';
  avatar?: Maybe<Scalars['String']>;
  createdAt?: Maybe<Scalars['DateTime']>;
  email?: Maybe<Scalars['String']>;
  firstName?: Maybe<Scalars['String']>;
  id?: Maybe<Scalars['Float']>;
  lastName?: Maybe<Scalars['String']>;
  orders?: Maybe<Array<Order>>;
  type?: Maybe<Role>;
  updatedAt?: Maybe<Scalars['DateTime']>;
  username?: Maybe<Scalars['String']>;
  uuid?: Maybe<Scalars['String']>;
  vendor?: Maybe<Vendor>;
};

export type UserCreateInput = {
  avatar: Scalars['String'];
  email: Scalars['String'];
  firstName: Scalars['String'];
  lastName: Scalars['String'];
  password: Scalars['String'];
  type: Role;
  username: Scalars['String'];
};

export type UserCreateNestedOneWithoutVendorInput = {
  connect: UserWhereUniqueInput;
};

export type UserWhereUniqueInput = {
  email?: InputMaybe<Scalars['String']>;
  username?: InputMaybe<Scalars['String']>;
  uuid?: InputMaybe<Scalars['String']>;
};

export type Vendor = {
  __typename?: 'Vendor';
  createdAt?: Maybe<Scalars['DateTime']>;
  id?: Maybe<Scalars['Float']>;
  name?: Maybe<Scalars['String']>;
  updatedAt?: Maybe<Scalars['DateTime']>;
  uuid?: Maybe<Scalars['String']>;
};

export type VendorCreateInput = {
  name: Scalars['String'];
  user: UserCreateNestedOneWithoutVendorInput;
};

export type VendorCreateNestedOneWithoutVendorProductsInput = {
  connect: VendorWhereUniqueInput;
};

export type VendorProduct = {
  __typename?: 'VendorProduct';
  category?: Maybe<Category>;
  categoryId?: Maybe<Scalars['Float']>;
  createdAt?: Maybe<Scalars['DateTime']>;
  id?: Maybe<Scalars['Float']>;
  name?: Maybe<Scalars['String']>;
  product?: Maybe<Product>;
  quantity?: Maybe<Scalars['Float']>;
  updatedAt?: Maybe<Scalars['DateTime']>;
  uuid?: Maybe<Scalars['String']>;
  vendor?: Maybe<Vendor>;
  vendorId?: Maybe<Scalars['Float']>;
};

export type VendorProductCreateInput = {
  category: CategoryCreateNestedOneWithoutVendorProductsInput;
  name: Scalars['String'];
  quantity: Scalars['Float'];
  vendor: VendorCreateNestedOneWithoutVendorProductsInput;
};

export type VendorProductCreateNestedOneWithoutProductInput = {
  connect: VendorProductWhereUniqueInput;
};

export type VendorProductWhereUniqueInput = {
  id?: InputMaybe<Scalars['Float']>;
  name?: InputMaybe<Scalars['String']>;
  uuid?: InputMaybe<Scalars['String']>;
};

export type VendorWhereUniqueInput = {
  id?: InputMaybe<Scalars['Float']>;
  userId?: InputMaybe<Scalars['String']>;
  uuid?: InputMaybe<Scalars['String']>;
  vendorName?: InputMaybe<Scalars['String']>;
};

export type CreateCategoryMutationVariables = Exact<{
  data: CategoryCreateInput;
}>;


export type CreateCategoryMutation = { __typename?: 'Mutation', createCategory: { __typename?: 'Category', id?: number | null } };

export type CreateProductMutationVariables = Exact<{
  data: ProductCreateInput;
}>;


export type CreateProductMutation = { __typename?: 'Mutation', createProduct: { __typename?: 'Product', id?: number | null } };

export type CreateUserMutationVariables = Exact<{
  data: UserCreateInput;
}>;


export type CreateUserMutation = { __typename?: 'Mutation', createUser: { __typename?: 'User', id?: number | null } };

export type CreateVendorProductMutationVariables = Exact<{
  data: VendorProductCreateInput;
}>;


export type CreateVendorProductMutation = { __typename?: 'Mutation', createVendorProduct: { __typename?: 'VendorProduct', id?: number | null } };

export type LoginMutationVariables = Exact<{
  data: LoginUserInput;
}>;


export type LoginMutation = { __typename?: 'Mutation', login: { __typename?: 'LoginOutput', access_token: string, expiresAt: any, user: { __typename?: 'User', uuid?: string | null, username?: string | null } } };

export type ProductQueryVariables = Exact<{
  where: ProductWhereUniqueInput;
}>;


export type ProductQuery = { __typename?: 'Query', Product?: { __typename?: 'Product', name?: string | null, description?: string | null, price?: number | null } | null };

export type ProductOrderQueryVariables = Exact<{
  where: ProductOrderWhereUniqueInput;
}>;


export type ProductOrderQuery = { __typename?: 'Query', ProductOrder?: { __typename?: 'ProductOrder', productId?: number | null, orderId?: number | null } | null };

export type CategoriesQueryVariables = Exact<{ [key: string]: never; }>;


export type CategoriesQuery = { __typename?: 'Query', categories: Array<{ __typename?: 'Category', id?: number | null, name?: string | null }> };

export type CategoryQueryVariables = Exact<{
  where: CategoryWhereUniqueInput;
}>;


export type CategoryQuery = { __typename?: 'Query', category?: { __typename?: 'Category', name?: string | null } | null };

export type GetProductsQueryVariables = Exact<{
  where: ProductWhereInput;
}>;


export type GetProductsQuery = { __typename?: 'Query', getProducts: Array<{ __typename?: 'Product', name?: string | null, description?: string | null, price?: number | null, category?: { __typename?: 'Category', name?: string | null } | null, vendorProduct?: { __typename?: 'VendorProduct', vendor?: { __typename?: 'Vendor', name?: string | null } | null } | null }> };

export type OrderQueryVariables = Exact<{
  where: OrderWhereUniqueInput;
}>;


export type OrderQuery = { __typename?: 'Query', order?: { __typename?: 'Order', id?: number | null, user: { __typename?: 'User', id?: number | null, email?: string | null } } | null };

export type SignupMutationVariables = Exact<{
  data: SignUpInput;
}>;


export type SignupMutation = { __typename?: 'Mutation', signup: { __typename?: 'User', id?: number | null, uuid?: string | null, email?: string | null, username?: string | null, firstName?: string | null, type?: Role | null, lastName?: string | null, createdAt?: any | null, updatedAt?: any | null } };

export type UserQueryVariables = Exact<{
  where: UserWhereUniqueInput;
}>;


export type UserQuery = { __typename?: 'Query', user?: { __typename?: 'User', id?: number | null, uuid?: string | null, email?: string | null, username?: string | null, firstName?: string | null, lastName?: string | null, type?: Role | null, createdAt?: any | null, updatedAt?: any | null } | null };

export type VendorQueryVariables = Exact<{
  where: VendorProductWhereUniqueInput;
}>;


export type VendorQuery = { __typename?: 'Query', vendor?: { __typename?: 'VendorProduct', name?: string | null } | null };


export const CreateCategoryDocument = gql`
    mutation createCategory($data: CategoryCreateInput!) {
  createCategory(data: $data) {
    id
  }
}
    `;
export type CreateCategoryMutationFn = Apollo.MutationFunction<CreateCategoryMutation, CreateCategoryMutationVariables>;

/**
 * __useCreateCategoryMutation__
 *
 * To run a mutation, you first call `useCreateCategoryMutation` within a React component and pass it any options that fit your needs.
 * When your component renders, `useCreateCategoryMutation` returns a tuple that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - An object with fields that represent the current status of the mutation's execution
 *
 * @param baseOptions options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
 *
 * @example
 * const [createCategoryMutation, { data, loading, error }] = useCreateCategoryMutation({
 *   variables: {
 *      data: // value for 'data'
 *   },
 * });
 */
export function useCreateCategoryMutation(baseOptions?: Apollo.MutationHookOptions<CreateCategoryMutation, CreateCategoryMutationVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useMutation<CreateCategoryMutation, CreateCategoryMutationVariables>(CreateCategoryDocument, options);
      }
export type CreateCategoryMutationHookResult = ReturnType<typeof useCreateCategoryMutation>;
export type CreateCategoryMutationResult = Apollo.MutationResult<CreateCategoryMutation>;
export type CreateCategoryMutationOptions = Apollo.BaseMutationOptions<CreateCategoryMutation, CreateCategoryMutationVariables>;
export const CreateProductDocument = gql`
    mutation createProduct($data: ProductCreateInput!) {
  createProduct(data: $data) {
    id
  }
}
    `;
export type CreateProductMutationFn = Apollo.MutationFunction<CreateProductMutation, CreateProductMutationVariables>;

/**
 * __useCreateProductMutation__
 *
 * To run a mutation, you first call `useCreateProductMutation` within a React component and pass it any options that fit your needs.
 * When your component renders, `useCreateProductMutation` returns a tuple that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - An object with fields that represent the current status of the mutation's execution
 *
 * @param baseOptions options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
 *
 * @example
 * const [createProductMutation, { data, loading, error }] = useCreateProductMutation({
 *   variables: {
 *      data: // value for 'data'
 *   },
 * });
 */
export function useCreateProductMutation(baseOptions?: Apollo.MutationHookOptions<CreateProductMutation, CreateProductMutationVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useMutation<CreateProductMutation, CreateProductMutationVariables>(CreateProductDocument, options);
      }
export type CreateProductMutationHookResult = ReturnType<typeof useCreateProductMutation>;
export type CreateProductMutationResult = Apollo.MutationResult<CreateProductMutation>;
export type CreateProductMutationOptions = Apollo.BaseMutationOptions<CreateProductMutation, CreateProductMutationVariables>;
export const CreateUserDocument = gql`
    mutation createUser($data: UserCreateInput!) {
  createUser(data: $data) {
    id
  }
}
    `;
export type CreateUserMutationFn = Apollo.MutationFunction<CreateUserMutation, CreateUserMutationVariables>;

/**
 * __useCreateUserMutation__
 *
 * To run a mutation, you first call `useCreateUserMutation` within a React component and pass it any options that fit your needs.
 * When your component renders, `useCreateUserMutation` returns a tuple that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - An object with fields that represent the current status of the mutation's execution
 *
 * @param baseOptions options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
 *
 * @example
 * const [createUserMutation, { data, loading, error }] = useCreateUserMutation({
 *   variables: {
 *      data: // value for 'data'
 *   },
 * });
 */
export function useCreateUserMutation(baseOptions?: Apollo.MutationHookOptions<CreateUserMutation, CreateUserMutationVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useMutation<CreateUserMutation, CreateUserMutationVariables>(CreateUserDocument, options);
      }
export type CreateUserMutationHookResult = ReturnType<typeof useCreateUserMutation>;
export type CreateUserMutationResult = Apollo.MutationResult<CreateUserMutation>;
export type CreateUserMutationOptions = Apollo.BaseMutationOptions<CreateUserMutation, CreateUserMutationVariables>;
export const CreateVendorProductDocument = gql`
    mutation createVendorProduct($data: VendorProductCreateInput!) {
  createVendorProduct(data: $data) {
    id
  }
}
    `;
export type CreateVendorProductMutationFn = Apollo.MutationFunction<CreateVendorProductMutation, CreateVendorProductMutationVariables>;

/**
 * __useCreateVendorProductMutation__
 *
 * To run a mutation, you first call `useCreateVendorProductMutation` within a React component and pass it any options that fit your needs.
 * When your component renders, `useCreateVendorProductMutation` returns a tuple that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - An object with fields that represent the current status of the mutation's execution
 *
 * @param baseOptions options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
 *
 * @example
 * const [createVendorProductMutation, { data, loading, error }] = useCreateVendorProductMutation({
 *   variables: {
 *      data: // value for 'data'
 *   },
 * });
 */
export function useCreateVendorProductMutation(baseOptions?: Apollo.MutationHookOptions<CreateVendorProductMutation, CreateVendorProductMutationVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useMutation<CreateVendorProductMutation, CreateVendorProductMutationVariables>(CreateVendorProductDocument, options);
      }
export type CreateVendorProductMutationHookResult = ReturnType<typeof useCreateVendorProductMutation>;
export type CreateVendorProductMutationResult = Apollo.MutationResult<CreateVendorProductMutation>;
export type CreateVendorProductMutationOptions = Apollo.BaseMutationOptions<CreateVendorProductMutation, CreateVendorProductMutationVariables>;
export const LoginDocument = gql`
    mutation login($data: LoginUserInput!) {
  login(data: $data) {
    access_token
    expiresAt
    user {
      uuid
      username
    }
  }
}
    `;
export type LoginMutationFn = Apollo.MutationFunction<LoginMutation, LoginMutationVariables>;

/**
 * __useLoginMutation__
 *
 * To run a mutation, you first call `useLoginMutation` within a React component and pass it any options that fit your needs.
 * When your component renders, `useLoginMutation` returns a tuple that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - An object with fields that represent the current status of the mutation's execution
 *
 * @param baseOptions options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
 *
 * @example
 * const [loginMutation, { data, loading, error }] = useLoginMutation({
 *   variables: {
 *      data: // value for 'data'
 *   },
 * });
 */
export function useLoginMutation(baseOptions?: Apollo.MutationHookOptions<LoginMutation, LoginMutationVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useMutation<LoginMutation, LoginMutationVariables>(LoginDocument, options);
      }
export type LoginMutationHookResult = ReturnType<typeof useLoginMutation>;
export type LoginMutationResult = Apollo.MutationResult<LoginMutation>;
export type LoginMutationOptions = Apollo.BaseMutationOptions<LoginMutation, LoginMutationVariables>;
export const ProductDocument = gql`
    query Product($where: ProductWhereUniqueInput!) {
  Product(where: $where) {
    name
    description
    price
  }
}
    `;

/**
 * __useProductQuery__
 *
 * To run a query within a React component, call `useProductQuery` and pass it any options that fit your needs.
 * When your component renders, `useProductQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useProductQuery({
 *   variables: {
 *      where: // value for 'where'
 *   },
 * });
 */
export function useProductQuery(baseOptions: Apollo.QueryHookOptions<ProductQuery, ProductQueryVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useQuery<ProductQuery, ProductQueryVariables>(ProductDocument, options);
      }
export function useProductLazyQuery(baseOptions?: Apollo.LazyQueryHookOptions<ProductQuery, ProductQueryVariables>) {
          const options = {...defaultOptions, ...baseOptions}
          return Apollo.useLazyQuery<ProductQuery, ProductQueryVariables>(ProductDocument, options);
        }
export type ProductQueryHookResult = ReturnType<typeof useProductQuery>;
export type ProductLazyQueryHookResult = ReturnType<typeof useProductLazyQuery>;
export type ProductQueryResult = Apollo.QueryResult<ProductQuery, ProductQueryVariables>;
export const ProductOrderDocument = gql`
    query ProductOrder($where: ProductOrderWhereUniqueInput!) {
  ProductOrder(where: $where) {
    productId
    orderId
  }
}
    `;

/**
 * __useProductOrderQuery__
 *
 * To run a query within a React component, call `useProductOrderQuery` and pass it any options that fit your needs.
 * When your component renders, `useProductOrderQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useProductOrderQuery({
 *   variables: {
 *      where: // value for 'where'
 *   },
 * });
 */
export function useProductOrderQuery(baseOptions: Apollo.QueryHookOptions<ProductOrderQuery, ProductOrderQueryVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useQuery<ProductOrderQuery, ProductOrderQueryVariables>(ProductOrderDocument, options);
      }
export function useProductOrderLazyQuery(baseOptions?: Apollo.LazyQueryHookOptions<ProductOrderQuery, ProductOrderQueryVariables>) {
          const options = {...defaultOptions, ...baseOptions}
          return Apollo.useLazyQuery<ProductOrderQuery, ProductOrderQueryVariables>(ProductOrderDocument, options);
        }
export type ProductOrderQueryHookResult = ReturnType<typeof useProductOrderQuery>;
export type ProductOrderLazyQueryHookResult = ReturnType<typeof useProductOrderLazyQuery>;
export type ProductOrderQueryResult = Apollo.QueryResult<ProductOrderQuery, ProductOrderQueryVariables>;
export const CategoriesDocument = gql`
    query categories {
  categories {
    id
    name
  }
}
    `;

/**
 * __useCategoriesQuery__
 *
 * To run a query within a React component, call `useCategoriesQuery` and pass it any options that fit your needs.
 * When your component renders, `useCategoriesQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useCategoriesQuery({
 *   variables: {
 *   },
 * });
 */
export function useCategoriesQuery(baseOptions?: Apollo.QueryHookOptions<CategoriesQuery, CategoriesQueryVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useQuery<CategoriesQuery, CategoriesQueryVariables>(CategoriesDocument, options);
      }
export function useCategoriesLazyQuery(baseOptions?: Apollo.LazyQueryHookOptions<CategoriesQuery, CategoriesQueryVariables>) {
          const options = {...defaultOptions, ...baseOptions}
          return Apollo.useLazyQuery<CategoriesQuery, CategoriesQueryVariables>(CategoriesDocument, options);
        }
export type CategoriesQueryHookResult = ReturnType<typeof useCategoriesQuery>;
export type CategoriesLazyQueryHookResult = ReturnType<typeof useCategoriesLazyQuery>;
export type CategoriesQueryResult = Apollo.QueryResult<CategoriesQuery, CategoriesQueryVariables>;
export const CategoryDocument = gql`
    query category($where: CategoryWhereUniqueInput!) {
  category(where: $where) {
    name
  }
}
    `;

/**
 * __useCategoryQuery__
 *
 * To run a query within a React component, call `useCategoryQuery` and pass it any options that fit your needs.
 * When your component renders, `useCategoryQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useCategoryQuery({
 *   variables: {
 *      where: // value for 'where'
 *   },
 * });
 */
export function useCategoryQuery(baseOptions: Apollo.QueryHookOptions<CategoryQuery, CategoryQueryVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useQuery<CategoryQuery, CategoryQueryVariables>(CategoryDocument, options);
      }
export function useCategoryLazyQuery(baseOptions?: Apollo.LazyQueryHookOptions<CategoryQuery, CategoryQueryVariables>) {
          const options = {...defaultOptions, ...baseOptions}
          return Apollo.useLazyQuery<CategoryQuery, CategoryQueryVariables>(CategoryDocument, options);
        }
export type CategoryQueryHookResult = ReturnType<typeof useCategoryQuery>;
export type CategoryLazyQueryHookResult = ReturnType<typeof useCategoryLazyQuery>;
export type CategoryQueryResult = Apollo.QueryResult<CategoryQuery, CategoryQueryVariables>;
export const GetProductsDocument = gql`
    query getProducts($where: ProductWhereInput!) {
  getProducts(where: $where) {
    name
    description
    price
    category {
      name
    }
    vendorProduct {
      vendor {
        name
      }
    }
  }
}
    `;

/**
 * __useGetProductsQuery__
 *
 * To run a query within a React component, call `useGetProductsQuery` and pass it any options that fit your needs.
 * When your component renders, `useGetProductsQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useGetProductsQuery({
 *   variables: {
 *      where: // value for 'where'
 *   },
 * });
 */
export function useGetProductsQuery(baseOptions: Apollo.QueryHookOptions<GetProductsQuery, GetProductsQueryVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useQuery<GetProductsQuery, GetProductsQueryVariables>(GetProductsDocument, options);
      }
export function useGetProductsLazyQuery(baseOptions?: Apollo.LazyQueryHookOptions<GetProductsQuery, GetProductsQueryVariables>) {
          const options = {...defaultOptions, ...baseOptions}
          return Apollo.useLazyQuery<GetProductsQuery, GetProductsQueryVariables>(GetProductsDocument, options);
        }
export type GetProductsQueryHookResult = ReturnType<typeof useGetProductsQuery>;
export type GetProductsLazyQueryHookResult = ReturnType<typeof useGetProductsLazyQuery>;
export type GetProductsQueryResult = Apollo.QueryResult<GetProductsQuery, GetProductsQueryVariables>;
export const OrderDocument = gql`
    query order($where: OrderWhereUniqueInput!) {
  order(where: $where) {
    id
    user {
      id
      email
    }
  }
}
    `;

/**
 * __useOrderQuery__
 *
 * To run a query within a React component, call `useOrderQuery` and pass it any options that fit your needs.
 * When your component renders, `useOrderQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useOrderQuery({
 *   variables: {
 *      where: // value for 'where'
 *   },
 * });
 */
export function useOrderQuery(baseOptions: Apollo.QueryHookOptions<OrderQuery, OrderQueryVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useQuery<OrderQuery, OrderQueryVariables>(OrderDocument, options);
      }
export function useOrderLazyQuery(baseOptions?: Apollo.LazyQueryHookOptions<OrderQuery, OrderQueryVariables>) {
          const options = {...defaultOptions, ...baseOptions}
          return Apollo.useLazyQuery<OrderQuery, OrderQueryVariables>(OrderDocument, options);
        }
export type OrderQueryHookResult = ReturnType<typeof useOrderQuery>;
export type OrderLazyQueryHookResult = ReturnType<typeof useOrderLazyQuery>;
export type OrderQueryResult = Apollo.QueryResult<OrderQuery, OrderQueryVariables>;
export const SignupDocument = gql`
    mutation signup($data: SignUpInput!) {
  signup(data: $data) {
    id
    uuid
    email
    username
    firstName
    type
    lastName
    createdAt
    updatedAt
  }
}
    `;
export type SignupMutationFn = Apollo.MutationFunction<SignupMutation, SignupMutationVariables>;

/**
 * __useSignupMutation__
 *
 * To run a mutation, you first call `useSignupMutation` within a React component and pass it any options that fit your needs.
 * When your component renders, `useSignupMutation` returns a tuple that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - An object with fields that represent the current status of the mutation's execution
 *
 * @param baseOptions options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
 *
 * @example
 * const [signupMutation, { data, loading, error }] = useSignupMutation({
 *   variables: {
 *      data: // value for 'data'
 *   },
 * });
 */
export function useSignupMutation(baseOptions?: Apollo.MutationHookOptions<SignupMutation, SignupMutationVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useMutation<SignupMutation, SignupMutationVariables>(SignupDocument, options);
      }
export type SignupMutationHookResult = ReturnType<typeof useSignupMutation>;
export type SignupMutationResult = Apollo.MutationResult<SignupMutation>;
export type SignupMutationOptions = Apollo.BaseMutationOptions<SignupMutation, SignupMutationVariables>;
export const UserDocument = gql`
    query user($where: UserWhereUniqueInput!) {
  user(where: $where) {
    id
    uuid
    email
    username
    firstName
    lastName
    type
    createdAt
    updatedAt
  }
}
    `;

/**
 * __useUserQuery__
 *
 * To run a query within a React component, call `useUserQuery` and pass it any options that fit your needs.
 * When your component renders, `useUserQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useUserQuery({
 *   variables: {
 *      where: // value for 'where'
 *   },
 * });
 */
export function useUserQuery(baseOptions: Apollo.QueryHookOptions<UserQuery, UserQueryVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useQuery<UserQuery, UserQueryVariables>(UserDocument, options);
      }
export function useUserLazyQuery(baseOptions?: Apollo.LazyQueryHookOptions<UserQuery, UserQueryVariables>) {
          const options = {...defaultOptions, ...baseOptions}
          return Apollo.useLazyQuery<UserQuery, UserQueryVariables>(UserDocument, options);
        }
export type UserQueryHookResult = ReturnType<typeof useUserQuery>;
export type UserLazyQueryHookResult = ReturnType<typeof useUserLazyQuery>;
export type UserQueryResult = Apollo.QueryResult<UserQuery, UserQueryVariables>;
export const VendorDocument = gql`
    query vendor($where: VendorProductWhereUniqueInput!) {
  vendor(where: $where) {
    name
  }
}
    `;

/**
 * __useVendorQuery__
 *
 * To run a query within a React component, call `useVendorQuery` and pass it any options that fit your needs.
 * When your component renders, `useVendorQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useVendorQuery({
 *   variables: {
 *      where: // value for 'where'
 *   },
 * });
 */
export function useVendorQuery(baseOptions: Apollo.QueryHookOptions<VendorQuery, VendorQueryVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useQuery<VendorQuery, VendorQueryVariables>(VendorDocument, options);
      }
export function useVendorLazyQuery(baseOptions?: Apollo.LazyQueryHookOptions<VendorQuery, VendorQueryVariables>) {
          const options = {...defaultOptions, ...baseOptions}
          return Apollo.useLazyQuery<VendorQuery, VendorQueryVariables>(VendorDocument, options);
        }
export type VendorQueryHookResult = ReturnType<typeof useVendorQuery>;
export type VendorLazyQueryHookResult = ReturnType<typeof useVendorLazyQuery>;
export type VendorQueryResult = Apollo.QueryResult<VendorQuery, VendorQueryVariables>;