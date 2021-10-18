<p align="center">
  <img width="175px" alt="" src="https://i.imgur.com/6k7mL9G.png">
</p>
<p align="center">
  <i>Artwork by <a href=https://undraw.co/">Katerina Limpitsouni</a></i>
</p>

<h1 align="center">gatsby-plugin-reading-time</h1>
<p align="center">A Gatsby plugin to estimate your markdown files reading time.</p>

> _This plugin is sort of a fork from [`gatsby-remark-reading-time`](https://github.com/syntra/gatsby-remark-reading-time) update and with added configuration._ 

## ✨ Features

- Medium like reading time estimation (based on [`reading-time`](https://github.com/ngryman/reading-time)).
- Compatible with `Mdx` and `MarkdownRemark`.
- Configurable.

## ⚙️ Installing

For Yarn users:
```sh
yarn add gatsby-plugin-reading-time
```
For Npm users:
```sh
npm install gatsby-plugin-reading-time
```

## 🚀 Usage

### With `Mdx`

Add `gatsby-plugin-reading-time` as a plugin in `gatsby-config.js`:
```js
module.exports ={
  plugins: [
    // ...
    `gatsby-plugin-reading-time`,
    // ...
  ],
}
```

### With `MarkdownRemark`

Add `gatsby-plugin-reading-time` as a `MarkdownRemark` plugin in `gatsby-config.js`:
```js
module.exports ={
  plugins: [
    // ...
    {
      resolve: `gatsby-transformer-remark`,
      options: {
        plugins: [
          // ...
          `gatsby-plugin-reading-time`,
          //... 
        ]
      }
    },
    // ...
  ],
}
```

## 🔧 Configuration options

This plugin accepts 2 options following [`reading-time`](https://github.com/ngryman/reading-time) options: 
- `options.wordsPerMinute`: the words per minute an average reader can read (default: 200).
- `options.wordBound`: a function that returns a boolean value depending on if a character is considered as a word bound (default: spaces, new lines and tabs).

Resolve the plugin as follows to use them:

```js
{
  resolve: `gatsby-plugin-reading-time`,
  options: {
    wordsPerMinute: 200,
    wordBound: function(c) { return ' \n\r\t'.includes(c) },
  }
}
```

## 🤝 Contributing

Any contribution to the project is welome.  
Run into a problem? Open an [issue](https://github.com/prazdevs/gatsby-plugin-reading-time/issues/new/choose).  
Want to add some feature? PRs are welcome!

## 📝 Licence

Copyright © 2020 [Sacha Bouillez](https://github.com/prazdevs).<br />
This project is under [MIT](https://github.com/prazdevs/gatsby-plugin-reading-time/blob/main/LICENCE) license.