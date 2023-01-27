# geninhocell ESLint config

## Whats included?

- Standard config base;
- React plugin;
- React Native plugin;
- React Hooks plugin;
- JSX a11y plugin;
- @typescript-eslint plugin;
- Prettier;

## Install the dependencies

```sh
$ npm i -D eslint @geninhocell/eslint-config
```

## Setup react

1. Create a `.eslintrc.json` file extending the config:
```json
{
  "extends": "@geninhocell/eslint-config/react"
}
```

## Setup react-native

1. Create a `.eslintrc.json` file extending the config:
```
{
  "extends": "@geninhocell/eslint-config/native"
}
```

## Setup NodeJS

1. Create a `.eslintrc.json` file extending the config:
```
{
  "extends": "@geninhocell/eslint-config/node"
}
```

> You can also use a `.eslintrc.js` instead of JSON if you prefer.

## License

[License MIT](https://andreasonny.mit-license.org/2019) © Andrea SonnY
