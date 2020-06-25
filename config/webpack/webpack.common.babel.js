import HtmlWebpackPlugin from 'html-webpack-plugin';
import CaseSensitivePathsPlugin from 'case-sensitive-paths-webpack-plugin';
import DotenvPlugin from 'dotenv-webpack';
import DuplicatePackageCheckerPlugin from 'duplicate-package-checker-webpack-plugin';
import MiniCssExtractPlugin from 'mini-css-extract-plugin';
import ProgressBarWebpackPlugin from 'progress-bar-webpack-plugin';
import ForkTsCheckerWebpackPlugin from 'fork-ts-checker-webpack-plugin';
import CopyWebpackPlugin from 'copy-webpack-plugin';

import paths from './paths';
import rules from './rules';

module.exports = {
  entry: paths.entryPath,
  module: {
    rules,
  },
  // Change how modules are resolved
  resolve: {
    // What directories should be searched when resolving modules
    modules: ['frontend/src', 'node_modules'],
    // Automatically resolve certain extensions (Ex. import 'folder/name(.ext)')
    extensions: ['.ts', '.tsx', '.js', '.jsx', '.json', '.css', '.scss'],
  },
  plugins: [
    // Enforces case sensitive paths.
    new CaseSensitivePathsPlugin(),
    // Supports dotenv file
    new DotenvPlugin(),
    // Warns when multiple versions of the same package exist in a build
    new DuplicatePackageCheckerPlugin(),
    // Extract css part from javascript bundle into separated file
    new MiniCssExtractPlugin({
      filename: '[name].[contenthash:10].css',
      chunkFilename: '[name].[contenthash:10].css',
    }),
    // Better building progress display
    new ProgressBarWebpackPlugin(),
    // Runs typescript type checker on a separate process
    new ForkTsCheckerWebpackPlugin(),
    // Generate html file to dist folder
    new HtmlWebpackPlugin({
      title: 'Boilerplate',
      template: paths.templatePath,
    }),
    new CopyWebpackPlugin({
      patterns: [
        {
          from: 'frontend/public',
          // ignore: ['index.html'],
        },
      ],
    }),
  ],
};
