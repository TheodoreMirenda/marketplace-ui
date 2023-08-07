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

export type Genre = {
  __typename?: 'Genre';
  createdAt?: Maybe<Scalars['DateTime']>;
  id?: Maybe<Scalars['Float']>;
  movies?: Maybe<Array<Movie>>;
  name?: Maybe<Scalars['String']>;
  updatedAt?: Maybe<Scalars['DateTime']>;
  uuid?: Maybe<Scalars['String']>;
};

export type GenreCreateInput = {
  name: Scalars['String'];
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

export type Movie = {
  __typename?: 'Movie';
  createdAt?: Maybe<Scalars['DateTime']>;
  description?: Maybe<Scalars['String']>;
  genre?: Maybe<Genre>;
  genreId?: Maybe<Scalars['Float']>;
  id?: Maybe<Scalars['Float']>;
  images?: Maybe<Array<Scalars['String']>>;
  name?: Maybe<Scalars['String']>;
  updatedAt?: Maybe<Scalars['DateTime']>;
  uuid?: Maybe<Scalars['String']>;
};

export type MovieCreateInput = {
  description?: InputMaybe<Scalars['String']>;
  genreId: Scalars['Float'];
  images: Array<Scalars['String']>;
  name: Scalars['String'];
};

export type MovieOrderByInput = {
  createdAt?: InputMaybe<OrderByArg>;
  description?: InputMaybe<OrderByArg>;
  id?: InputMaybe<OrderByArg>;
  name?: InputMaybe<OrderByArg>;
  updatedAt?: InputMaybe<OrderByArg>;
  uuid?: InputMaybe<OrderByArg>;
};

export type MovieWhereInput = {
  createdAt?: InputMaybe<Scalars['DateTime']>;
  description?: InputMaybe<Scalars['String']>;
  id?: InputMaybe<Scalars['Int']>;
  name?: InputMaybe<Scalars['String']>;
  updatedAt?: InputMaybe<Scalars['DateTime']>;
  uuid?: InputMaybe<Scalars['String']>;
};

export type MovieWhereUniqueInput = {
  id?: InputMaybe<Scalars['Int']>;
  uuid?: InputMaybe<Scalars['String']>;
};

export type Mutation = {
  __typename?: 'Mutation';
  createGenre: Genre;
  createMovie: Movie;
  createUser: User;
  login: LoginOutput;
  signup: User;
};


export type MutationCreateGenreArgs = {
  data: GenreCreateInput;
};


export type MutationCreateMovieArgs = {
  data: MovieCreateInput;
};


export type MutationCreateUserArgs = {
  data: UserCreateInput;
};


export type MutationLoginArgs = {
  data: LoginUserInput;
};


export type MutationSignupArgs = {
  data: SignUpInput;
};

export enum OrderByArg {
  Asc = 'ASC',
  Desc = 'DESC'
}

export type Query = {
  __typename?: 'Query';
  genres: Array<Genre>;
  movies: Array<Movie>;
  user: User;
};


export type QueryMoviesArgs = {
  cursor?: InputMaybe<MovieWhereUniqueInput>;
  orderBy?: InputMaybe<MovieOrderByInput>;
  search?: InputMaybe<SearchInput>;
  skip?: InputMaybe<Scalars['Int']>;
  take?: InputMaybe<Scalars['Int']>;
  where?: InputMaybe<MovieWhereInput>;
};


export type QueryUserArgs = {
  where: UserWhereUniqueInput;
};

export enum Role {
  Admin = 'ADMIN',
  User = 'USER'
}

export type SearchInput = {
  value: Scalars['String'];
};

export type SignUpInput = {
  email: Scalars['String'];
  lastName: Scalars['String'];
  name: Scalars['String'];
  password: Scalars['String'];
  username: Scalars['String'];
};

export type User = {
  __typename?: 'User';
  createdAt?: Maybe<Scalars['DateTime']>;
  email?: Maybe<Scalars['String']>;
  id?: Maybe<Scalars['Float']>;
  lastName?: Maybe<Scalars['String']>;
  name?: Maybe<Scalars['String']>;
  type?: Maybe<Role>;
  updatedAt?: Maybe<Scalars['DateTime']>;
  username?: Maybe<Scalars['String']>;
  uuid?: Maybe<Scalars['String']>;
};

export type UserCreateInput = {
  email: Scalars['String'];
  lastName: Scalars['String'];
  name: Scalars['String'];
  password: Scalars['String'];
  type: Role;
  username: Scalars['String'];
};

export type UserWhereUniqueInput = {
  email?: InputMaybe<Scalars['String']>;
  username?: InputMaybe<Scalars['String']>;
  uuid?: InputMaybe<Scalars['String']>;
};

export type GetMoviesQueryVariables = Exact<{
  cursor?: InputMaybe<MovieWhereUniqueInput>;
  skip: Scalars['Int'];
  take: Scalars['Int'];
  order: MovieOrderByInput;
  where?: InputMaybe<MovieWhereInput>;
  search?: InputMaybe<SearchInput>;
}>;


export type GetMoviesQuery = { __typename?: 'Query', payload: Array<{ __typename?: 'Movie', uuid?: string | null, name?: string | null, description?: string | null, images?: Array<string> | null }> };

export type LoginMutationVariables = Exact<{
  data: LoginUserInput;
}>;


export type LoginMutation = { __typename?: 'Mutation', login: { __typename?: 'LoginOutput', access_token: string, expiresAt: any, user: { __typename?: 'User', id?: number | null, uuid?: string | null, email?: string | null, username?: string | null, name?: string | null, type?: Role | null, lastName?: string | null, createdAt?: any | null, updatedAt?: any | null } } };

export type SignupMutationVariables = Exact<{
  data: SignUpInput;
}>;


export type SignupMutation = { __typename?: 'Mutation', signup: { __typename?: 'User', id?: number | null, uuid?: string | null, email?: string | null, username?: string | null, name?: string | null, type?: Role | null, lastName?: string | null, createdAt?: any | null, updatedAt?: any | null } };

export type UserQueryVariables = Exact<{
  where: UserWhereUniqueInput;
}>;


export type UserQuery = { __typename?: 'Query', user: { __typename?: 'User', id?: number | null, uuid?: string | null, email?: string | null, username?: string | null, name?: string | null, type?: Role | null, lastName?: string | null, createdAt?: any | null, updatedAt?: any | null } };


export const GetMoviesDocument = gql`
    query getMovies($cursor: MovieWhereUniqueInput, $skip: Int!, $take: Int!, $order: MovieOrderByInput!, $where: MovieWhereInput, $search: SearchInput) {
  payload: movies(
    cursor: $cursor
    skip: $skip
    take: $take
    orderBy: $order
    where: $where
    search: $search
  ) {
    uuid
    name
    description
    images
  }
}
    `;

/**
 * __useGetMoviesQuery__
 *
 * To run a query within a React component, call `useGetMoviesQuery` and pass it any options that fit your needs.
 * When your component renders, `useGetMoviesQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useGetMoviesQuery({
 *   variables: {
 *      cursor: // value for 'cursor'
 *      skip: // value for 'skip'
 *      take: // value for 'take'
 *      order: // value for 'order'
 *      where: // value for 'where'
 *      search: // value for 'search'
 *   },
 * });
 */
export function useGetMoviesQuery(baseOptions: Apollo.QueryHookOptions<GetMoviesQuery, GetMoviesQueryVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useQuery<GetMoviesQuery, GetMoviesQueryVariables>(GetMoviesDocument, options);
      }
export function useGetMoviesLazyQuery(baseOptions?: Apollo.LazyQueryHookOptions<GetMoviesQuery, GetMoviesQueryVariables>) {
          const options = {...defaultOptions, ...baseOptions}
          return Apollo.useLazyQuery<GetMoviesQuery, GetMoviesQueryVariables>(GetMoviesDocument, options);
        }
export type GetMoviesQueryHookResult = ReturnType<typeof useGetMoviesQuery>;
export type GetMoviesLazyQueryHookResult = ReturnType<typeof useGetMoviesLazyQuery>;
export type GetMoviesQueryResult = Apollo.QueryResult<GetMoviesQuery, GetMoviesQueryVariables>;
export const LoginDocument = gql`
    mutation login($data: LoginUserInput!) {
  login(data: $data) {
    access_token
    expiresAt
    user {
      id
      uuid
      email
      username
      name
      type
      lastName
      createdAt
      updatedAt
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
    name
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
    name
    type
    lastName
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