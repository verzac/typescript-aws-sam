Note:
_Regarding dependency vulnerabilities (specifically lodash etc.): I know that this exists. However, I won't update the dependencies because **this project is not deployed, nor should it be deployed immediately, in production. If you want to use it in your project, remember to update the dependencies yourself.** After all, it's just a demo project!_

# TypeScript with AWS Serverless Application Model
This is a sample project based on AWS SAM's hello-world template project, which demonstrates how you can use TypeScript with SAM/Lambda (which is not currently supported by SAM/Lambda itself).

# Prerequisites
1. [AWS SAM CLI](https://aws.amazon.com/serverless/sam/)
2. [Node.js 8/10 or NPM](https://nodejs.org/en/)

# Usage
Two ways to do this:

Use my script that automatically watches and builds the TypeScript files; it also starts a local SAM instance:
```
cd hello-world
npm install
npm run start-api
```
or run the build process manually and use SAM CLI directly:
```
cd hello-world
npm install
npm run build
cd ..
sam local start-api
```
## Caveat
* You need to reload the script when either (1) template.yaml is modified, or (2) you have installed an extra dependency

# Running Tests
```
cd hello-world
npm install
npm run test
```

# Explanation
Since AWS Lambda does not natively support TypeScript (which is understandable because it is not a runtime), you need to: 
* manually compile your TS files into JS files.
* copy all dependencies to your /dist folder (which contains the built artefacts that are going to be deployed to Lambda).
* start a local SAM API instance (i.e. run `sam local start-api`)

## Difference between this project and AWS's official hello-world template
* Tests are contained in *.spec.ts
* TypeScript! (added tsconfig.json)
* A bit more sample code (e.g. example.service.ts) to demonstrate imports
* template.yaml points to /dist instead of /hello-world
* More dependencies to help automate the build process (tsc, ts-node, concurrently, cpx, mkdirp; all of which are listed under devDependencies)

# Questions or Issues?
Chuck them in as an issue! I'll try to help, but keep in mind that this is just a hobby project of mine.
