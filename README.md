# Graphql-server-and-interface-for-my-crowd-funding-smart-contract

Graphql-server-and-interface-for-my-crowd-funding-smart-contract

## Table of Contents

- [Query](#Query)
- [Mutation](#Mutation)

## Query

1. GetAllFundings query

```bash
query GetAllFundings {
  getAllFundings {
    creator
    fundingName
    target
    unlockTime
    minimumAmount
  }
}
```

2. GetAllUsers query

```bash
query GetAllUsers {
  getAllUsers {
    id
    name
    email
    address
  }
}
```

4. GetFunding for a particular address query

```bash
query GetFunding($address: String!) {
  getFunding(address: $address) {
    creator
    fundingName
    target
    unlockTime
    minimumAmount
  }
}
```

5. GetUser with an address query

```bash
query GetUser($address: String!) {
  getUser(address: $address) {
    id
    name
    email
    address
  }
}
```

6. GetUser with an address query

```bash
query GetUser($address: String!) {
  getUser(address: $address) {
    id
    name
    email
    address
  }
}
```

## Mutation

1. CreateUser mutation

```bash
mutation CreateUser($name: String!, $email: String!, $address: String!) {
  createUser(name: $name, email: $email, address: $address) {
    id
    name
    email
    address
  }
}
```
