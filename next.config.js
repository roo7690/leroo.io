///const NextLiveReload= require('next-live-reload').default

/** 
 * @type {import('next').NextConfig}
 */

module.exports = {
  distDir: 'dist/.next',
  reactStrictMode: true,
  webpack: (
    /**@type {import('webpack').Configuration} */
    config,
    options)=>{
    config.module.rules.push({
      test: /\.(glsl|vs|fs|vert|frag)$/,
      exclude: /node_modules/,
      use: [
        'raw-loader',
        'glslify-loader'
      ]
    });

    ([
      'bcrypt'
    ]).forEach(mod=>{
      config.resolve.alias[mod]=false
    })

    //config.plugins.push(new NextLiveReload(
    //  ["src/app/utils/background/shaders/**/*.{fs,vs}","assets/blogs/*"],
    //  {
    //    dir:options.dir,
    //    dev:options.dev
    //  }
    //))

    return config
  }

}