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

First we need to understand **WHY?** On every project I'm trying to make the programming code as safe as possible, that means at first to minimize chances to make a mistake or a typo. So for example using string in `t` function in i18next isn't a good solution when you use TypeScript. Why? Imagine big project, where you have hundreds of files and at too many spaces you use `t("about")` which means "get me translation for key 'about'". How we can be sure that this key really exist in our dictionary? We can't. We need to check it by ourselfs and we need to write tests to check if our change didn't mess up something.

But if we can connect this key with existing type it would be awesome. Why can't use something like `nameof` expression? Because TypeScript doesn't have such expression (so far), then we need to use some different solution and that's `proxy-object-path` which is really simple and mini package.

Compare this image bellow:

![Comparing](https://github.com/MartinTichovsky/__sources__/raw/master/proxy-object-path-compare.png)

At the end of the day, the meaning is the same, but on the left side the string "shared:hello" is checked by nothing but on the right side we have some function called `i18ObjectPath`, which is doing only one thing and that's to transform lang.shared.hello to "shared:hello" but lang.shared.hello is an object and that's the big difference.

# About this example

This is very simple React example customized to show how to use `proxy-object-path` properly and how to use it's power. 

In the example we have three dictionaries in src/translations/dictionary. Each is defined as Lang. So type Lang dictates what properties will a dictionary have and if some property will be missing, we will be notified. From type Lang we create an imaginary object using function `createProxy`. And now we have an object ready to use in functions `i18ObjectPath`, `lastObjectProperty` and `fullObjectPath`. These functions do only transformation, so you can make your own transformation using function `getPath` which is returning an array.

# Forms

I created another simple example with form in src/components/Form/Form.tsx. With this example I would like to show you how you can pass a value from a component which have a property, in this case "name", and by this property will pass a value to an object.


Files `_Form.complex.tsx`, `_Form.unsafe.lodash.tsx` and `_Form.unsafe.tsx` in folder src/components/Form are only to show you different aproach. You can compare other solutions with mine in Form.tsx.

So, compare the solutions and try to make a typo anywhere in Form.tsx component. Can you? **And that's the goal!**

Don't forget, this is only a simple example not to explain you how to make forms, but how you should use `proxy-object-path` and at the end of the day you can use it in your project anywhere you need to. Feel free to use it and improve your project!

# Issues

Proxy and Symbol aren't supported by older browsers and by Internet Explorer. You can use polyfills from folder src-js but they don't work in Internet Explorer properly. So there is another solution and that's to replace all functions with strings. In file config/webpack.config.js find a text 'process.env.REPLACE' and see the part where are functions from `proxy-object-path` replaced by strings. This has one issue and that's if there will be similar syntax in the code, will be replaced too. So text will be replaced, you can attach polyfills for IE to avoid errors and everything should works.

# Other commands in package.json

It's need to explain other commands in section "scripts", what they do. Doesn't matter if you'll choose npm or yarn, I will use yarn but if you will use npm don't forget use "npm run &lt;command&gt;".

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