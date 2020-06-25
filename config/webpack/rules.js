// cssnano takes your nicely formatted CSS and runs it through many focused optimisations,
// to ensure that the final result is as small as possible for a production environment.
import cssnano from 'cssnano';
// PostCSS Preset Env lets you convert modern CSS into something most browsers can understand
import postcssPresetEnv from 'postcss-preset-env';
// This plugin extracts CSS into separate files. It creates a CSS file per JS file which contains CSS.
// It supports On-Demand-Loading of CSS and SourceMaps
import MiniCssExtractPlugin from 'mini-css-extract-plugin';

const devMode = process.env.NODE_ENV !== 'production';

module.exports = [
  // Use babel-loader for ts(x) files
  {
    test: /\.tsx?$/,
    exclude: /node_modules/,
    use: [
      {
        loader: 'babel-loader',
        options: {
          cacheDirectory: true,
        },
      },
    ],
  },
  {
    test: /\.css$/,
    use: [
      devMode ? 'style-loader' : MiniCssExtractPlugin.loader,
      {
        loader: 'css-loader',
        options: {
          sourceMap: !devMode,
          modules: true,
          importLoaders: 1,
        },
      },
      {
        loader: 'postcss-loader',
        options: {
          sourceMap: true,
          plugins: () => [postcssPresetEnv, cssnano],
        },
      },
    ],
  },
  // Use a list of loaders to load scss files
  {
    test: /\.scss$/,
    use: [
      devMode ? 'style-loader' : MiniCssExtractPlugin.loader,
      {
        loader: 'css-loader',
        options: {
          sourceMap: !devMode,
          modules: true,
          importLoaders: 2,
        },
      },
      {
        loader: 'postcss-loader',
        options: {
          sourceMap: true,
          plugins: () => [postcssPresetEnv, cssnano],
        },
      },
      { loader: 'sass-loader', options: { sourceMap: true } },
    ],
  },
  {
    test: /\.eot(\?v=\d+\.\d+\.\d+)?$/,
    exclude: /node_modules/,
    loader: 'file-loader',
  },
  {
    test: /\.(woff|woff2)$/,
    exclude: /node_modules/,
    loader: 'url-loader?prefix=font/&limit=5000',
  },
  {
    test: /\.ttf(\?v=\d+\.\d+\.\d+)?$/,
    exclude: /node_modules/,
    loader: 'url-loader?limit=10000&mimetype=application/octet-stream',
  },
  {
    test: /\.(jpe?g|png|gif|svg)$/i,
    use: ['url-loader?limit=10000', 'img-loader'],
  },
];
