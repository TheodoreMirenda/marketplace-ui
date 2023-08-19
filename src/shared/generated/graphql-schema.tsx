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

export type ProductWhereUniqueInput = {
  id: Scalars['Float'];
  uuid?: InputMaybe<Scalars['String']>;
  vendorProductId?: InputMaybe<Scalars['Float']>;
};

export type Query = {
  __typename?: 'Query';
  Product?: Maybe<Product>;
  ProductOrder?: Maybe<ProductOrder>;
  category?: Maybe<Category>;
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

export type ProductQueryVariables = Exact<{
  where: ProductWhereUniqueInput;
}>;


export type ProductQuery = { __typename?: 'Query', Product?: { __typename?: 'Product', name?: string | null, description?: string | null, price?: number | null } | null };

export type LoginMutationVariables = Exact<{
  data: LoginUserInput;
}>;


export type LoginMutation = { __typename?: 'Mutation', login: { __typename?: 'LoginOutput', access_token: string, user: { __typename?: 'User', uuid?: string | null, username?: string | null, orders?: Array<{ __typename?: 'Order', uuid?: string | null }> | null } } };

export type SignupMutationVariables = Exact<{
  data: SignUpInput;
}>;


export type SignupMutation = { __typename?: 'Mutation', signup: { __typename?: 'User', id?: number | null, uuid?: string | null, email?: string | null, username?: string | null, firstName?: string | null, type?: Role | null, lastName?: string | null, createdAt?: any | null, updatedAt?: any | null } };

export type UserQueryVariables = Exact<{
  where: UserWhereUniqueInput;
}>;


export type UserQuery = { __typename?: 'Query', user?: { __typename?: 'User', id?: number | null, uuid?: string | null, email?: string | null, username?: string | null, firstName?: string | null, lastName?: string | null, type?: Role | null, createdAt?: any | null, updatedAt?: any | null } | null };


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
export const LoginDocument = gql`
    mutation login($data: LoginUserInput!) {
  login(data: $data) {
    access_token
    user {
      uuid
      username
      orders {
        uuid
      }
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