# proxy-object-path

[![NPM](https://img.shields.io/npm/v/proxy-object-path.svg)](https://www.npmjs.com/package/proxy-object-path)

## Install

```bash
npm install proxy-object-path
yarn add proxy-object-path
```

## About

This micro project was inspired by [`ts-object-path`](https://github.com/Taras-Tymchiy/ts-object-path) and its solution. My solution is more easier and a major idea is to make code more safer. Instead of using strings in inputs, i18next, etc. we would like to connect them with names generated from a Type (because of typescript checking = less mistakes).

If we have an object which is declared as type ExampleType and then we have some function, component, etc. which is accepts a parameter 'key' and by this key will pass a value into that object with this expression `object[key] = value`, providing string as a name is not good practice in TypeScript, because programmers can easily make a typo. See a [React example](https://github.com/MartinTichovsky/proxy-object-path/tree/master/example).

![Example of using](https://github.com/MartinTichovsky/__sources__/raw/master/ezgif-7-5e8c2990f28b.gif)

## Example

```ts
type ExampleType = {
  username: string;
  password: string;
}

const example: ExampleType = {} as ExampleType;

function passValue(key: string, value: string) {
  example[key] = value;
}

passValue("username", "martin");
```

This example is not too safe, more safer will be this:

```ts
type ExampleType = {
  username: string;
  password: string;
}

const exampleProxy = createProxy<ExampleType>();
const example: ExampleType = {} as ExampleType;

function passValue(key: string, value: string) {
  example[key] = value;
}

passValue(fullObjectPath(exampleProxy.username), "martin");
```

Because `fullObjectPath(exampleProxy.username)` will be checked by typescript and you can't make a mistake in the name "username".

**Note:** This is very dummy example, of course nobody will do such thinks like above, but the major think is an idea, when you have some components, functions or whatever, what receives a name and by this name will pass a value to your existing object, is better to have full control.

## Usage

```ts
type ExampleType = {
  property: string;
  secret: {
    password: string;
  }
}

const exampleProxy = createProxy<ExampleType>();

const last = lastObjectProperty(exampleProxy.secret.password)
// last = "password" 

const full = fullObjectPath(exampleProxy.secret.password)
// full = "secret.password"

const i18 = i18ObjectPath(exampleProxy.secret.password)
// i18 = "secret:password"
```

If you want to use full control of object path, you can use function `set` and `get` from [`lodash`](https://github.com/lodash/lodash).

## License

MIT © [MartinTichovsky](https://github.com/MartinTichovsky)
