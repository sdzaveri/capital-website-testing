/**
 * Implement Gatsby's Node APIs in this file.
 *
 * See: https://www.gatsbyjs.org/docs/node-apis/
 */

// You can delete this file if you're not using it

exports.onCreateWebpackConfig = ({ stage, rules, loaders, plugins, actions }) => {
  const { setWebpackConfig } = actions;
  const PRODUCTION = stage !== 'develop';
  const isSSR = stage.includes('html');

  const sassLoader = {
    loader: require.resolve('sass-loader'),
    options: {
      sourceMap: !PRODUCTION
    }
  };

  // const sassRule = {
  //   test: /\.s(a|c)ss$/,
  //   use: isSSR
  //     ? [loaders.null()]
  //     : [
  //         loaders.miniCssExtract(),
  //         loaders.css({ ...cssLoaderOptions, importLoaders: 2 }),
  //         loaders.postcss({ plugins: postCssPlugins }),
  //         sassLoader
  //       ]
  // };
  const sassRuleModules = {
    test: /\.scss$/,
    use: [
      !isSSR && loaders.miniCssExtract({ hmr: false }),
      loaders.css({ modules: true, importLoaders: 2 }),
      loaders.postcss(),
      sassLoader
    ].filter(Boolean)
  };

  let configRules = [];

  switch (stage) {
    case 'develop':
    case 'build-javascript':
    case 'build-html':
    case 'develop-html':
      configRules = configRules.concat([sassRuleModules]);
      break;
  }

  setWebpackConfig({
    module: {
      rules: configRules
    }
  });
};
