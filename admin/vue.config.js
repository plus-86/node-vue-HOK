module.exports = {
  // 项目打包后输出的位置
  outputDir: __dirname + '/../server/admin',
  // 部署应用路径(就是访问路径)，生产环境下为/admin路径，开发环境下路径为/  
  publicPath: process.env.NODE_ENV === 'production'
    ? '/admin/'
    : '/'
}