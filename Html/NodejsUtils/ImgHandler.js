/************************************************
 * ImgHandler,图像文件处理模块
 ************************************************/
var fs = require('fs-extra');
var findit = require('findit');
//引入配置
var Config = require("./Config");
//Config.img_dir
//var useless_dir_prefix = "SP_";
//var img_dir = "./Temp/image/";
/**
 * 去除使用compass产生精灵地图之后多余的缓存文件夹(这些应该删除的文件夹名称中带有特定前缀)
 * @return {[type]} [description]
 */
exports.rmCompassSpriteDir = function() {
    //获得finder对象
    var finder = findit(Config.img_dir);
    finder.on('directory', function(dir, stat, stop) {
        if (dir != Config.img_dir) {
            var regexp = new RegExp("(.*)?" + Config.useless_dir_prefix + "(.*)?");
            //如果是中间包含compass sprite前缀，删除该缓存文件夹
            if (regexp.test(dir)) {
                fs.remove(dir, function(err) {
                    if (err) return console.error(err);
                    console.log('compass精灵图标缓存文件夹删除成功。image中的剩余文件夹是有用的。');
                });
            } 
        }
    });
};
