# Eigen Test Case

This project was based on Eigen Test Case.

Structure and libraries added:

- Prisma (for data modeling and seeding from mock data)
- mitata (for benchmarking)

# Algorithm

```bash
$ bun -v
1.1.8

$ bun install
$ bun run benchmark
```

# Backend

## Installation

```bash
$ bun -v
1.1.8

$ bun install
```

## Running the app

In this example we're using `bun`, but you can use latest version of `pnpm` or `yarn` too.

```bash
# generate low level technical layer model
bun run prisma:generate

# deploy sqlite db
bun run prisma:deploy

# seed sqlite db
bun run prisma:seed

# development
$ bun run start

# watch mode
$ bun run dev

# production mode
$ bun run prod
```

## Test

```bash
# unit tests
$ bun run test

# e2e tests
$ bun run test:e2e

# test coverage
$ bun run test:cov
```

## Swagger

Swagger is generated by API on server start, to access Swagger Documentation, you can access from `localhost:port/api` path.
