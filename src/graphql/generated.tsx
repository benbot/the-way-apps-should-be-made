import gql from 'graphql-tag';
import * as ApolloReactCommon from '@apollo/react-common';
import * as ApolloReactHooks from '@apollo/react-hooks';
export type Maybe<T> = T | null;
/** All built-in and custom scalars, mapped to their actual values */
export type Scalars = {
  ID: string,
  String: string,
  Boolean: boolean,
  Int: number,
  Float: number,
  /** A location in a connection that can be used for resuming pagination. */
  Cursor: any,
  /** 
 * A point in time as described by the [ISO
   * 8601](https://en.wikipedia.org/wiki/ISO_8601) standard. May or may not include a timezone.
 **/
  Datetime: any,
};

/** All input for the `adduser` mutation. */
export type AdduserInput = {
  /** 
 * An arbitrary string value with no semantic meaning. Will be included in the
   * payload verbatim. May be used to track mutations by the client.
 **/
  clientMutationId?: Maybe<Scalars['String']>,
  usrname: Scalars['String'],
  pswd: Scalars['String'],
};

/** The output of our `adduser` mutation. */
export type AdduserPayload = {
   __typename?: 'AdduserPayload',
  /** 
 * The exact same `clientMutationId` that was provided in the mutation input,
   * unchanged and unused. May be used by a client to track mutations.
 **/
  clientMutationId?: Maybe<Scalars['String']>,
  jwt?: Maybe<Jwt>,
  /** Our root query field type. Allows us to run any query from our mutation payload. */
  query?: Maybe<Query>,
};

/** All input for the create `Migration` mutation. */
export type CreateMigrationInput = {
  /** 
 * An arbitrary string value with no semantic meaning. Will be included in the
   * payload verbatim. May be used to track mutations by the client.
 **/
  clientMutationId?: Maybe<Scalars['String']>,
  /** The `Migration` to be created by this mutation. */
  migration: MigrationInput,
};

/** The output of our create `Migration` mutation. */
export type CreateMigrationPayload = {
   __typename?: 'CreateMigrationPayload',
  /** 
 * The exact same `clientMutationId` that was provided in the mutation input,
   * unchanged and unused. May be used by a client to track mutations.
 **/
  clientMutationId?: Maybe<Scalars['String']>,
  /** The `Migration` that was created by this mutation. */
  migration?: Maybe<Migration>,
  /** Our root query field type. Allows us to run any query from our mutation payload. */
  query?: Maybe<Query>,
  /** An edge for our `Migration`. May be used by Relay 1. */
  migrationEdge?: Maybe<MigrationsEdge>,
};


/** The output of our create `Migration` mutation. */
export type CreateMigrationPayloadMigrationEdgeArgs = {
  orderBy?: Maybe<Array<MigrationsOrderBy>>
};

/** All input for the create `User` mutation. */
export type CreateUserInput = {
  /** 
 * An arbitrary string value with no semantic meaning. Will be included in the
   * payload verbatim. May be used to track mutations by the client.
 **/
  clientMutationId?: Maybe<Scalars['String']>,
  /** The `User` to be created by this mutation. */
  user: UserInput,
};

/** The output of our create `User` mutation. */
export type CreateUserPayload = {
   __typename?: 'CreateUserPayload',
  /** 
 * The exact same `clientMutationId` that was provided in the mutation input,
   * unchanged and unused. May be used by a client to track mutations.
 **/
  clientMutationId?: Maybe<Scalars['String']>,
  /** The `User` that was created by this mutation. */
  user?: Maybe<User>,
  /** Our root query field type. Allows us to run any query from our mutation payload. */
  query?: Maybe<Query>,
  /** An edge for our `User`. May be used by Relay 1. */
  userEdge?: Maybe<UsersEdge>,
};


/** The output of our create `User` mutation. */
export type CreateUserPayloadUserEdgeArgs = {
  orderBy?: Maybe<Array<UsersOrderBy>>
};



/** All input for the `deleteMigrationById` mutation. */
export type DeleteMigrationByIdInput = {
  /** 
 * An arbitrary string value with no semantic meaning. Will be included in the
   * payload verbatim. May be used to track mutations by the client.
 **/
  clientMutationId?: Maybe<Scalars['String']>,
  id: Scalars['Int'],
};

/** All input for the `deleteMigration` mutation. */
export type DeleteMigrationInput = {
  /** 
 * An arbitrary string value with no semantic meaning. Will be included in the
   * payload verbatim. May be used to track mutations by the client.
 **/
  clientMutationId?: Maybe<Scalars['String']>,
  /** The globally unique `ID` which will identify a single `Migration` to be deleted. */
  nodeId: Scalars['ID'],
};

/** The output of our delete `Migration` mutation. */
export type DeleteMigrationPayload = {
   __typename?: 'DeleteMigrationPayload',
  /** 
 * The exact same `clientMutationId` that was provided in the mutation input,
   * unchanged and unused. May be used by a client to track mutations.
 **/
  clientMutationId?: Maybe<Scalars['String']>,
  /** The `Migration` that was deleted by this mutation. */
  migration?: Maybe<Migration>,
  deletedMigrationId?: Maybe<Scalars['ID']>,
  /** Our root query field type. Allows us to run any query from our mutation payload. */
  query?: Maybe<Query>,
  /** An edge for our `Migration`. May be used by Relay 1. */
  migrationEdge?: Maybe<MigrationsEdge>,
};


/** The output of our delete `Migration` mutation. */
export type DeleteMigrationPayloadMigrationEdgeArgs = {
  orderBy?: Maybe<Array<MigrationsOrderBy>>
};

/** All input for the `deleteUserById` mutation. */
export type DeleteUserByIdInput = {
  /** 
 * An arbitrary string value with no semantic meaning. Will be included in the
   * payload verbatim. May be used to track mutations by the client.
 **/
  clientMutationId?: Maybe<Scalars['String']>,
  id: Scalars['Int'],
};

/** All input for the `deleteUserByUsername` mutation. */
export type DeleteUserByUsernameInput = {
  /** 
 * An arbitrary string value with no semantic meaning. Will be included in the
   * payload verbatim. May be used to track mutations by the client.
 **/
  clientMutationId?: Maybe<Scalars['String']>,
  username: Scalars['String'],
};

/** All input for the `deleteUser` mutation. */
export type DeleteUserInput = {
  /** 
 * An arbitrary string value with no semantic meaning. Will be included in the
   * payload verbatim. May be used to track mutations by the client.
 **/
  clientMutationId?: Maybe<Scalars['String']>,
  /** The globally unique `ID` which will identify a single `User` to be deleted. */
  nodeId: Scalars['ID'],
};

/** The output of our delete `User` mutation. */
export type DeleteUserPayload = {
   __typename?: 'DeleteUserPayload',
  /** 
 * The exact same `clientMutationId` that was provided in the mutation input,
   * unchanged and unused. May be used by a client to track mutations.
 **/
  clientMutationId?: Maybe<Scalars['String']>,
  /** The `User` that was deleted by this mutation. */
  user?: Maybe<User>,
  deletedUserId?: Maybe<Scalars['ID']>,
  /** Our root query field type. Allows us to run any query from our mutation payload. */
  query?: Maybe<Query>,
  /** An edge for our `User`. May be used by Relay 1. */
  userEdge?: Maybe<UsersEdge>,
};


/** The output of our delete `User` mutation. */
export type DeleteUserPayloadUserEdgeArgs = {
  orderBy?: Maybe<Array<UsersOrderBy>>
};

export type Jwt = {
   __typename?: 'Jwt',
  role?: Maybe<Scalars['String']>,
  exp?: Maybe<Scalars['Int']>,
  personId?: Maybe<Scalars['Int']>,
};

export type Migration = Node & {
   __typename?: 'Migration',
  /** A globally unique identifier. Can be used in various places throughout the system to identify this single value. */
  nodeId: Scalars['ID'],
  id: Scalars['Int'],
  name: Scalars['String'],
  runOn: Scalars['Datetime'],
};

/** 
 * A condition to be used against `Migration` object types. All fields are tested
 * for equality and combined with a logical ‘and.’
 **/
export type MigrationCondition = {
  /** Checks for equality with the object’s `id` field. */
  id?: Maybe<Scalars['Int']>,
  /** Checks for equality with the object’s `name` field. */
  name?: Maybe<Scalars['String']>,
  /** Checks for equality with the object’s `runOn` field. */
  runOn?: Maybe<Scalars['Datetime']>,
};

/** An input for mutations affecting `Migration` */
export type MigrationInput = {
  id?: Maybe<Scalars['Int']>,
  name: Scalars['String'],
  runOn: Scalars['Datetime'],
};

/** Represents an update to a `Migration`. Fields that are set will be updated. */
export type MigrationPatch = {
  id?: Maybe<Scalars['Int']>,
  name?: Maybe<Scalars['String']>,
  runOn?: Maybe<Scalars['Datetime']>,
};

/** A connection to a list of `Migration` values. */
export type MigrationsConnection = {
   __typename?: 'MigrationsConnection',
  /** A list of `Migration` objects. */
  nodes: Array<Maybe<Migration>>,
  /** A list of edges which contains the `Migration` and cursor to aid in pagination. */
  edges: Array<MigrationsEdge>,
  /** Information to aid in pagination. */
  pageInfo: PageInfo,
  /** The count of *all* `Migration` you could get from the connection. */
  totalCount: Scalars['Int'],
};

/** A `Migration` edge in the connection. */
export type MigrationsEdge = {
   __typename?: 'MigrationsEdge',
  /** A cursor for use in pagination. */
  cursor?: Maybe<Scalars['Cursor']>,
  /** The `Migration` at the end of the edge. */
  node?: Maybe<Migration>,
};

/** Methods to use when ordering `Migration`. */
export enum MigrationsOrderBy {
  Natural = 'NATURAL',
  IdAsc = 'ID_ASC',
  IdDesc = 'ID_DESC',
  NameAsc = 'NAME_ASC',
  NameDesc = 'NAME_DESC',
  RunOnAsc = 'RUN_ON_ASC',
  RunOnDesc = 'RUN_ON_DESC',
  PrimaryKeyAsc = 'PRIMARY_KEY_ASC',
  PrimaryKeyDesc = 'PRIMARY_KEY_DESC'
}

/** The root mutation type which contains root level fields which mutate data. */
export type Mutation = {
   __typename?: 'Mutation',
  /** Creates a single `Migration`. */
  createMigration?: Maybe<CreateMigrationPayload>,
  /** Creates a single `User`. */
  createUser?: Maybe<CreateUserPayload>,
  /** Updates a single `Migration` using its globally unique id and a patch. */
  updateMigration?: Maybe<UpdateMigrationPayload>,
  /** Updates a single `Migration` using a unique key and a patch. */
  updateMigrationById?: Maybe<UpdateMigrationPayload>,
  /** Updates a single `User` using its globally unique id and a patch. */
  updateUser?: Maybe<UpdateUserPayload>,
  /** Updates a single `User` using a unique key and a patch. */
  updateUserById?: Maybe<UpdateUserPayload>,
  /** Updates a single `User` using a unique key and a patch. */
  updateUserByUsername?: Maybe<UpdateUserPayload>,
  /** Deletes a single `Migration` using its globally unique id. */
  deleteMigration?: Maybe<DeleteMigrationPayload>,
  /** Deletes a single `Migration` using a unique key. */
  deleteMigrationById?: Maybe<DeleteMigrationPayload>,
  /** Deletes a single `User` using its globally unique id. */
  deleteUser?: Maybe<DeleteUserPayload>,
  /** Deletes a single `User` using a unique key. */
  deleteUserById?: Maybe<DeleteUserPayload>,
  /** Deletes a single `User` using a unique key. */
  deleteUserByUsername?: Maybe<DeleteUserPayload>,
  adduser?: Maybe<AdduserPayload>,
};


/** The root mutation type which contains root level fields which mutate data. */
export type MutationCreateMigrationArgs = {
  input: CreateMigrationInput
};


/** The root mutation type which contains root level fields which mutate data. */
export type MutationCreateUserArgs = {
  input: CreateUserInput
};


/** The root mutation type which contains root level fields which mutate data. */
export type MutationUpdateMigrationArgs = {
  input: UpdateMigrationInput
};


/** The root mutation type which contains root level fields which mutate data. */
export type MutationUpdateMigrationByIdArgs = {
  input: UpdateMigrationByIdInput
};


/** The root mutation type which contains root level fields which mutate data. */
export type MutationUpdateUserArgs = {
  input: UpdateUserInput
};


/** The root mutation type which contains root level fields which mutate data. */
export type MutationUpdateUserByIdArgs = {
  input: UpdateUserByIdInput
};


/** The root mutation type which contains root level fields which mutate data. */
export type MutationUpdateUserByUsernameArgs = {
  input: UpdateUserByUsernameInput
};


/** The root mutation type which contains root level fields which mutate data. */
export type MutationDeleteMigrationArgs = {
  input: DeleteMigrationInput
};


/** The root mutation type which contains root level fields which mutate data. */
export type MutationDeleteMigrationByIdArgs = {
  input: DeleteMigrationByIdInput
};


/** The root mutation type which contains root level fields which mutate data. */
export type MutationDeleteUserArgs = {
  input: DeleteUserInput
};


/** The root mutation type which contains root level fields which mutate data. */
export type MutationDeleteUserByIdArgs = {
  input: DeleteUserByIdInput
};


/** The root mutation type which contains root level fields which mutate data. */
export type MutationDeleteUserByUsernameArgs = {
  input: DeleteUserByUsernameInput
};


/** The root mutation type which contains root level fields which mutate data. */
export type MutationAdduserArgs = {
  input: AdduserInput
};

/** An object with a globally unique `ID`. */
export type Node = {
  /** A globally unique identifier. Can be used in various places throughout the system to identify this single value. */
  nodeId: Scalars['ID'],
};

/** Information about pagination in a connection. */
export type PageInfo = {
   __typename?: 'PageInfo',
  /** When paginating forwards, are there more items? */
  hasNextPage: Scalars['Boolean'],
  /** When paginating backwards, are there more items? */
  hasPreviousPage: Scalars['Boolean'],
  /** When paginating backwards, the cursor to continue. */
  startCursor?: Maybe<Scalars['Cursor']>,
  /** When paginating forwards, the cursor to continue. */
  endCursor?: Maybe<Scalars['Cursor']>,
};

/** The root query type which gives access points into the data universe. */
export type Query = Node & {
   __typename?: 'Query',
  /** 
 * Exposes the root query type nested one level down. This is helpful for Relay 1
   * which can only query top level fields if they are in a particular form.
 **/
  query: Query,
  /** The root query type must be a `Node` to work well with Relay 1 mutations. This just resolves to `query`. */
  nodeId: Scalars['ID'],
  /** Fetches an object given its globally unique `ID`. */
  node?: Maybe<Node>,
  /** Reads and enables pagination through a set of `Migration`. */
  allMigrations?: Maybe<MigrationsConnection>,
  /** Reads and enables pagination through a set of `User`. */
  allUsers?: Maybe<UsersConnection>,
  migrationById?: Maybe<Migration>,
  userById?: Maybe<User>,
  userByUsername?: Maybe<User>,
  /** Reads a single `Migration` using its globally unique `ID`. */
  migration?: Maybe<Migration>,
  /** Reads a single `User` using its globally unique `ID`. */
  user?: Maybe<User>,
};


/** The root query type which gives access points into the data universe. */
export type QueryNodeArgs = {
  nodeId: Scalars['ID']
};


/** The root query type which gives access points into the data universe. */
export type QueryAllMigrationsArgs = {
  first?: Maybe<Scalars['Int']>,
  last?: Maybe<Scalars['Int']>,
  offset?: Maybe<Scalars['Int']>,
  before?: Maybe<Scalars['Cursor']>,
  after?: Maybe<Scalars['Cursor']>,
  orderBy?: Maybe<Array<MigrationsOrderBy>>,
  condition?: Maybe<MigrationCondition>
};


/** The root query type which gives access points into the data universe. */
export type QueryAllUsersArgs = {
  first?: Maybe<Scalars['Int']>,
  last?: Maybe<Scalars['Int']>,
  offset?: Maybe<Scalars['Int']>,
  before?: Maybe<Scalars['Cursor']>,
  after?: Maybe<Scalars['Cursor']>,
  orderBy?: Maybe<Array<UsersOrderBy>>,
  condition?: Maybe<UserCondition>
};


/** The root query type which gives access points into the data universe. */
export type QueryMigrationByIdArgs = {
  id: Scalars['Int']
};


/** The root query type which gives access points into the data universe. */
export type QueryUserByIdArgs = {
  id: Scalars['Int']
};


/** The root query type which gives access points into the data universe. */
export type QueryUserByUsernameArgs = {
  username: Scalars['String']
};


/** The root query type which gives access points into the data universe. */
export type QueryMigrationArgs = {
  nodeId: Scalars['ID']
};


/** The root query type which gives access points into the data universe. */
export type QueryUserArgs = {
  nodeId: Scalars['ID']
};

/** All input for the `updateMigrationById` mutation. */
export type UpdateMigrationByIdInput = {
  /** 
 * An arbitrary string value with no semantic meaning. Will be included in the
   * payload verbatim. May be used to track mutations by the client.
 **/
  clientMutationId?: Maybe<Scalars['String']>,
  /** An object where the defined keys will be set on the `Migration` being updated. */
  migrationPatch: MigrationPatch,
  id: Scalars['Int'],
};

/** All input for the `updateMigration` mutation. */
export type UpdateMigrationInput = {
  /** 
 * An arbitrary string value with no semantic meaning. Will be included in the
   * payload verbatim. May be used to track mutations by the client.
 **/
  clientMutationId?: Maybe<Scalars['String']>,
  /** The globally unique `ID` which will identify a single `Migration` to be updated. */
  nodeId: Scalars['ID'],
  /** An object where the defined keys will be set on the `Migration` being updated. */
  migrationPatch: MigrationPatch,
};

/** The output of our update `Migration` mutation. */
export type UpdateMigrationPayload = {
   __typename?: 'UpdateMigrationPayload',
  /** 
 * The exact same `clientMutationId` that was provided in the mutation input,
   * unchanged and unused. May be used by a client to track mutations.
 **/
  clientMutationId?: Maybe<Scalars['String']>,
  /** The `Migration` that was updated by this mutation. */
  migration?: Maybe<Migration>,
  /** Our root query field type. Allows us to run any query from our mutation payload. */
  query?: Maybe<Query>,
  /** An edge for our `Migration`. May be used by Relay 1. */
  migrationEdge?: Maybe<MigrationsEdge>,
};


/** The output of our update `Migration` mutation. */
export type UpdateMigrationPayloadMigrationEdgeArgs = {
  orderBy?: Maybe<Array<MigrationsOrderBy>>
};

/** All input for the `updateUserById` mutation. */
export type UpdateUserByIdInput = {
  /** 
 * An arbitrary string value with no semantic meaning. Will be included in the
   * payload verbatim. May be used to track mutations by the client.
 **/
  clientMutationId?: Maybe<Scalars['String']>,
  /** An object where the defined keys will be set on the `User` being updated. */
  userPatch: UserPatch,
  id: Scalars['Int'],
};

/** All input for the `updateUserByUsername` mutation. */
export type UpdateUserByUsernameInput = {
  /** 
 * An arbitrary string value with no semantic meaning. Will be included in the
   * payload verbatim. May be used to track mutations by the client.
 **/
  clientMutationId?: Maybe<Scalars['String']>,
  /** An object where the defined keys will be set on the `User` being updated. */
  userPatch: UserPatch,
  username: Scalars['String'],
};

/** All input for the `updateUser` mutation. */
export type UpdateUserInput = {
  /** 
 * An arbitrary string value with no semantic meaning. Will be included in the
   * payload verbatim. May be used to track mutations by the client.
 **/
  clientMutationId?: Maybe<Scalars['String']>,
  /** The globally unique `ID` which will identify a single `User` to be updated. */
  nodeId: Scalars['ID'],
  /** An object where the defined keys will be set on the `User` being updated. */
  userPatch: UserPatch,
};

/** The output of our update `User` mutation. */
export type UpdateUserPayload = {
   __typename?: 'UpdateUserPayload',
  /** 
 * The exact same `clientMutationId` that was provided in the mutation input,
   * unchanged and unused. May be used by a client to track mutations.
 **/
  clientMutationId?: Maybe<Scalars['String']>,
  /** The `User` that was updated by this mutation. */
  user?: Maybe<User>,
  /** Our root query field type. Allows us to run any query from our mutation payload. */
  query?: Maybe<Query>,
  /** An edge for our `User`. May be used by Relay 1. */
  userEdge?: Maybe<UsersEdge>,
};


/** The output of our update `User` mutation. */
export type UpdateUserPayloadUserEdgeArgs = {
  orderBy?: Maybe<Array<UsersOrderBy>>
};

export type User = Node & {
   __typename?: 'User',
  /** A globally unique identifier. Can be used in various places throughout the system to identify this single value. */
  nodeId: Scalars['ID'],
  id: Scalars['Int'],
  username?: Maybe<Scalars['String']>,
  pass?: Maybe<Scalars['String']>,
  salt?: Maybe<Scalars['String']>,
};

/** A condition to be used against `User` object types. All fields are tested for equality and combined with a logical ‘and.’ */
export type UserCondition = {
  /** Checks for equality with the object’s `id` field. */
  id?: Maybe<Scalars['Int']>,
  /** Checks for equality with the object’s `username` field. */
  username?: Maybe<Scalars['String']>,
  /** Checks for equality with the object’s `pass` field. */
  pass?: Maybe<Scalars['String']>,
  /** Checks for equality with the object’s `salt` field. */
  salt?: Maybe<Scalars['String']>,
};

/** An input for mutations affecting `User` */
export type UserInput = {
  id?: Maybe<Scalars['Int']>,
  username?: Maybe<Scalars['String']>,
  pass?: Maybe<Scalars['String']>,
  salt?: Maybe<Scalars['String']>,
};

/** Represents an update to a `User`. Fields that are set will be updated. */
export type UserPatch = {
  id?: Maybe<Scalars['Int']>,
  username?: Maybe<Scalars['String']>,
  pass?: Maybe<Scalars['String']>,
  salt?: Maybe<Scalars['String']>,
};

/** A connection to a list of `User` values. */
export type UsersConnection = {
   __typename?: 'UsersConnection',
  /** A list of `User` objects. */
  nodes: Array<Maybe<User>>,
  /** A list of edges which contains the `User` and cursor to aid in pagination. */
  edges: Array<UsersEdge>,
  /** Information to aid in pagination. */
  pageInfo: PageInfo,
  /** The count of *all* `User` you could get from the connection. */
  totalCount: Scalars['Int'],
};

/** A `User` edge in the connection. */
export type UsersEdge = {
   __typename?: 'UsersEdge',
  /** A cursor for use in pagination. */
  cursor?: Maybe<Scalars['Cursor']>,
  /** The `User` at the end of the edge. */
  node?: Maybe<User>,
};

/** Methods to use when ordering `User`. */
export enum UsersOrderBy {
  Natural = 'NATURAL',
  IdAsc = 'ID_ASC',
  IdDesc = 'ID_DESC',
  UsernameAsc = 'USERNAME_ASC',
  UsernameDesc = 'USERNAME_DESC',
  PassAsc = 'PASS_ASC',
  PassDesc = 'PASS_DESC',
  SaltAsc = 'SALT_ASC',
  SaltDesc = 'SALT_DESC',
  PrimaryKeyAsc = 'PRIMARY_KEY_ASC',
  PrimaryKeyDesc = 'PRIMARY_KEY_DESC'
}

export type CreateUserMutationVariables = {
  username: Scalars['String'],
  pass: Scalars['String']
};


export type CreateUserMutation = (
  { __typename?: 'Mutation' }
  & { adduser: Maybe<(
    { __typename?: 'AdduserPayload' }
    & { jwt: Maybe<(
      { __typename?: 'Jwt' }
      & Pick<Jwt, 'role'>
    )> }
  )> }
);


export const CreateUserDocument = gql`
    mutation CreateUser($username: String!, $pass: String!) {
  adduser(input: {usrname: $username, pswd: $pass}) {
    jwt {
      role
    }
  }
}
    `;
export type CreateUserMutationFn = ApolloReactCommon.MutationFunction<CreateUserMutation, CreateUserMutationVariables>;

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
 *      username: // value for 'username'
 *      pass: // value for 'pass'
 *   },
 * });
 */
export function useCreateUserMutation(baseOptions?: ApolloReactHooks.MutationHookOptions<CreateUserMutation, CreateUserMutationVariables>) {
        return ApolloReactHooks.useMutation<CreateUserMutation, CreateUserMutationVariables>(CreateUserDocument, baseOptions);
      }
export type CreateUserMutationHookResult = ReturnType<typeof useCreateUserMutation>;
export type CreateUserMutationResult = ApolloReactCommon.MutationResult<CreateUserMutation>;
export type CreateUserMutationOptions = ApolloReactCommon.BaseMutationOptions<CreateUserMutation, CreateUserMutationVariables>;