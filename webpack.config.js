const MiniCssExtractPlugin = require('mini-css-extract-plugin');

module.exports = {
  plugins: [new MiniCssExtractPlugin()],
  module: {
    rules: [
      {
        test: /\.s[ac]ss$/i,
        use: [
          // Creates `style` nodes from JS strings
          process.env.NODE_ENV === 'production' ? MiniCssExtractPlugin.loader : 'style-loader',
          // Translates CSS into CommonJS
          "css-loader",
          // Compiles Sass to CSS
          "sass-loader", 
        ]
      },
    ],
  },
};

