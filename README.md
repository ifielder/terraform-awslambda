# terraform-awslambda

Creates a lambda function and uses github actions to deploy

### Github actions

- build lambda function from source
- check if terraform plan is valid and formatted
- deploy infrastructure

### Terraform

- lambda function
- assign base execution role to lambda function
- uses compiled bundle for source

### Tech

- Prettier
- Husky
- Typescript
- Eslint
