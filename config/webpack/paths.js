import path from 'path';

module.exports = {
  root: path.resolve(__dirname, '../', '../', 'frontend'),
  outputPath: path.resolve(__dirname, '../', '../', 'frontend', 'dist'),
  entryPath: path.resolve(__dirname, '../', '../', 'frontend', 'src/index.tsx'),
  templatePath: path.resolve(__dirname, '../', '../', 'frontend', 'public/index.html'),
  imagesFolder: 'images',
  fontsFolder: 'fonts',
  cssFolder: 'css',
  jsFolder: 'js',
};
