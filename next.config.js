module.exports = {
  reactStrictMode: true,
}

// module.exports = withModernizr(
//   withCSS(
//     withOptimizedImages({
//       inlineImageLimit: 2048,
//       imagesFolder: 'images',
//       imagesName: '[name]-[hash].[ext]',
//       handleImages: ['jpeg', 'png', 'webp', 'svg'],
//       optimizeImages: true,
//       optipng: {
//         optimizationLevel: 7,
//       },
//       mozjpeg: {
//         quality: 75,
//       },
//       webp: {
//         preset: 'default',
//         quality: 75,
//       },
//       webpack(config, options) {
//         config.module.rules.push({
//           test: /\.(png|jpg|gif|svg|eot|ttf|woff|woff2|webp)$/,
//           use: {
//             loader: 'file-loader',
//             options: {
//               name: '[path][name].[ext]',
//             },
//           },
//         });
//         return config;
//       },
//       cssModules: true,
//       cssLoaderOptions: {
//         localIdentName: '[local]___[hash:base64:5]',
//       },
//     })
//   )
// );