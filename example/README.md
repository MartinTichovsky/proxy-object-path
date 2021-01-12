## Install packages

```bash
npm install
```

or

```bash
yarn
```

## Run

```bash
npm start
```

or

```bash
yarn start
```

## Build

```bash
npm run build
```

or

```bash
yarn build
```

# About `proxy-object-path`

**The goal is to make the programming code as safe as possible and use TypeScript capabilities as much as possible! and minimize chances to make a mistake.**

First, we need to understand **WHY**. I always try to make the programming codes as safe as possible. This means at first to minimize chances to make a mistake or a typo. So for example using a string in `t` function in i18next is not a good solution when you use TypeScript. Why? Imagine a big project with hundreds of files and too many places where you use `t("about")`, which means "get me translation for key 'about'". How can we be sure that this key really exists in our dictionary? We can not. We need to check it by ourselves and we need to write tests to check if our change did not mess up something.

But if we can connect this key with an existing type, it will be great. Why can not we use something like `nameof` expression? Because TypeScript does not have such an expression yet, so we need to use a different solution and that is `proxy-object-path` which is really simple and compact package.

Compare the images bellow:

![Comparing](https://github.com/MartinTichovsky/__sources__/raw/master/proxy-object-path-compare.png)

At the end of the day, the meaning is the same, but on the left side the string "shared:hello" is checked by nothing but on the right side we have some function called `i18ObjectPath`, which is doing only one thing and that is to transform lang.shared.hello to "shared:hello" but lang.shared.hello is an object and that is the big difference.

# About this example

This is very simple React example customized to show how to use `proxy-object-path` properly and how to use its power. 

In the example we have three dictionaries in src/translations/dictionary. Each is defined as Lang. So type Lang dictates what properties will a dictionary have and if a property will be missing, we will be notified. From type Lang we create an imaginary object using function `createProxy`. And now we have an object ready to use in functions `i18ObjectPath`, `lastObjectProperty` and `fullObjectPath`. These functions only do the transformation, so you can make your own transformation using function `getPath` which is returning an array.

# Forms

I created another simple example with form in src/components/Form/Form.tsx. With this example I would like to show you how you can pass a value from a component which have a property, in this case "name", and by this property will pass a value to an object.


Files `_Form.complex.tsx`, `_Form.unsafe.lodash.tsx` and `_Form.unsafe.tsx` in folder src/components/Form are there only to show you different aproach. You can compare other solutions with mine in Form.tsx.

So, compare the solutions and try to make a typo anywhere in Form.tsx component. Can you? **And that is the goal!**

Do not forget, this is only a simple example not to explain you how to make forms, but how you should use `proxy-object-path` and at the end of the day you can use it in your project anywhere you need to. Feel free to use it to improve your project!

# Issues

Proxy and Symbol are not supported by older browsers and by Internet Explorer. You can use polyfills from folder src-js but they do not work in Internet Explorer properly. So there is another solution and that is to replace all functions with strings. In file config/webpack.config.js find a text 'process.env.REPLACE' and see the part where are functions from `proxy-object-path` replaced by strings. This has one issue, if there is similar syntax in the code, it will be replaced too. So the text will be replaced and you can attach polyfills for IE to avoid errors and everything should work.

# Other commands in package.json

It is necessary to explain other commands in section "scripts" and what they do. It does not matter if you will choose npm or yarn. I will use yarn but do not forget use "npm run &lt;command&gt;" if you use npm.

```bash
yarn start:ie
```

This command will replace all functions from `proxy-object-path` by strings and it will attach polyfills in index.html.

```bash
yarn start:polyfills
```

This command will attach polyfills in index.html.

```bash
yarn start:replace
```

This command will replace all functions from `proxy-object-path` by strings.

Build commands have the same meanings as start, just only with the difference that they will produce files in build folder.

# Changes

I have improved this example for better performance. The render will be triggered only if it will be really neccesary. When you will need to use a validation in form inputs, the approch will be a bit different to prevent unnecessary renders on each key press.