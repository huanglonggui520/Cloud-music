const path=require('path')
const lessPath=path.resolve(__dirname+'/src/styles/cover.less')
module.exports = {
    lintOnSave:false,  //关闭语法检查
    css: {
      loaderOptions: {
        less: {
          // 若 less-loader 版本小于 6.0，请移除 lessOptions 这一级，直接配置选项。
          
            modifyVars: {
              
              // 或者可以通过 less 文件覆盖（文件路径为绝对路径）
              hack: `true; @import "${lessPath}";`,
            },
          
        },
      },
    },
    devServer: {
    disableHostCheck: true
  }
  };