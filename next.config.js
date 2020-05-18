const withCSS = require('@zeit/next-css')
const path = require('path')

module.exports = withCSS({
  webpack(config, options) {
    config.module.rules.push({
      test: /\.js$/,
      use: [
        {
          loader: 'linaria/loader',
          options: {
            sourceMap: process.env.NODE_ENV !== 'production',
          },
        },
      ],
    })

    config.resolve.alias['~'] = path.join(__dirname, 'src')

    return config
  },
})
