# PNPM workspaces example

This repository is a sample pnpm workspace with two packages:

`bar` - exports an `add` function.
`foo` - imports `bar` and prints the sum of two numbers.

## Prerequisites

Install pnpm (https://pnpm.io/installation#using-npm)

```
npm install -g pnpm
```

## Running 

1. Install (`pnpm i` from root)
2. Run `start` to verify that the application works
    a. From project root: `pnpm run start -r`
    b. From the package: `cd packages/foo` `pnpm start`
3. Run `build` and see the project crash
    a. From project root: `pnpm run build -r`
    b. From the package: `cd packages/foo` `pnpm build`