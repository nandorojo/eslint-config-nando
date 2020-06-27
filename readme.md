# Fernando Rojo's eslint config 🏋🏻‍♂️

```sh
npx @nandorojo/lint-expo
```


Meant for react native projects using Typescript.

```sh
yarn add --dev eslint-config-nando
```

If you're using typescript, do this too:

```sh
yarn add --dev typescript
```

Create the following two files at the root of your react native project:

**`.eslintrc`**

```json
{
  "extends": ["nando"]
}
```

**`.prettierrc.js`**

```js
module.exports = require('eslint-config-nando/prettier')
```
