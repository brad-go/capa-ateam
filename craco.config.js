const path = require('path');
const CracoAlias = require('craco-alias');

module.exports = {
  reactScriptsVersion: 'react-scripts',
  plugins: [
    {
      plugin: CracoAlias,
      options: {
        source: 'tsconfig',
        baseUrl: './src',
        tsConfigPath: './tsconfig.path.json',
      },
    },
  ],
  typescript: {
    enableTypeChecking: true,
  },
  webpack: {
    alias: {
      '~api': path.resolve(__dirname, 'src/api'),
      '~assets': path.resolve(__dirname, 'src/assets'),
      '~components': path.resolve(__dirname, 'src/components'),
      '~constants': path.resolve(__dirname, 'src/constants'),
      '~hooks': path.resolve(__dirname, 'src/hooks'),
      '~styles': path.resolve(__dirname, 'src/styles'),
      '~types': path.resolve(__dirname, 'src/types'),
      '~utils': path.resolve(__dirname, 'src/utils'),
    },
  },
};
