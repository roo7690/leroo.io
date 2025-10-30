const path=require('path')
const ESBuildPlugin=require('esbuild-loader').EsbuildPlugin
const tsconfig=require('./tsconfig.json')
const webpackNodeExternals=require('webpack-node-externals')

/**
 * @type {import('webpack').Configuration}
 */
 module.exports={
  entry:{
    index:'./src/server/index.ts'
  },
  devtool:'inline-source-map',
  target:'node',
  output:{
    path: path.resolve(__dirname,'dist/server'),
    filename: '[name].bundle.cjs',
    clean:true
  },
  module:{
    rules:[
      {
        test: /src[\/\\](server|function|data)[\/\\].*\.ts$/,
        use:[
          {
            loader:'ts-loader',
            options:{
              compilerOptions:(function (){
                const co=tsconfig.compilerOptions
                co.noEmit=false
                return co
              })()
            }
          }
        ],
        exclude: /node_modules/
      },
      {
        test: /\.js$/,
        use:{
          loader:'babel-loader',
          options:{
            presets:['@babel/preset-env']
          }
        },
        exclude: /node_modules/
      }
    ]
  },
  plugins:[],
  resolve:{
    extensions:['.ts','.js'],
    alias:(function(){
      const alias={}
      const _alias=tsconfig.compilerOptions.paths
      for(const key in _alias){
        alias[key]=path.resolve(__dirname,_alias[key][0])
      }
      return alias
    })()
  },
  externals:[
    {
      fs:'commonjs fs',
      path:'commonjs path',
      os:'commonjs os',
      stream:'commonjs stream',
      zlib:'commonjs zlib',
      http:'commonjs http',
      url:'commonjs url',
      querystring:'commonjs querystring',
      timers:'commonjs timers',
      crypto:'commonjs crypto',
      util:'commonjs util',
      net:'commonjs net',
      async_hooks:'commonjs async_hooks'
    },
    function({request},cb){
      if(request.startsWith('@components')||request.startsWith('@layouts')){
        return cb(null,'commonjs '+request)
      }
      cb()
    },
    webpackNodeExternals()
  ],
  optimization:{
    splitChunks:{
      chunks:'all'
    },
    minimize:true,
    minimizer:[
      new ESBuildPlugin({
        target:'es6'
      })
    ]
  },
  cache:{
    type:'filesystem'
  },
  stats:{
    all:false,
    colors:true,
    errors:true,
    errorsCount:true,
    errorDetails:true,
    warnings:true,
    warningsCount:true
  }
}