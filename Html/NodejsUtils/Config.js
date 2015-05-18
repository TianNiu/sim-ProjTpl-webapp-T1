/************************************************
 * 发布动作环境配置
 ************************************************/
module.exports = {
    global_destdir: "./Release/",//发布目录，没有会自动创建
    css_dir: "./Release/css",//发布目录下的css文件夹
    img_dir: "./Release/image/",//发布目录下的图片文件夹
    useless_dir_prefix: "SP_",//compass精灵图标无用缓存文件夹
    js_dir: "./Release/js/",//发布目录下的js文件夹
    page_dir: "./Release/page/",//发布目录下的子页面文件夹
    plugin_dir: "./Release/plugin/",//发布目录下的插件文件夹
    ignore_ls: [".sass-cache", "npm-debug.log", "config.rb", "gulpfile.js", "node_modules", "package.json"]//手工忽略列表
};
