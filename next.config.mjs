/** @type {import('next').NextConfig} */
import withPlugins from 'next-compose-plugins';
import withImages from 'next-images';

const nextConfig = {
  webpack(config, options) {
    config.module.rules.push({
      test: /\.(pdf)$/,
      use: [
        {
          loader: 'file-loader',
          options: {
            name: '[path][name].[ext]',
          },
        },
      ],
    });

    return config;
  },
};

export default withPlugins([[withImages]], nextConfig);