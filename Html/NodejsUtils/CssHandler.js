/************************************************
 * CssHandler,CSS文件处理模块
 ************************************************/
var fs = require('fs-extra');
var findit = require('findit');
//引入配置
var Config = require("./Config");
//Config.css_dir
//var css_dir = "./Temp/css";
/**
 * 删除css map文件
 * @return {[type]} [description]
 */
exports.rmCssMap = function() {
    //获得finder对象
    var finder = findit(Config.css_dir);
    finder.on('file', function(file, stat) {
        if (/map$/i.test(file)) {
            fs.remove(file, function(err) {
                if (err) return console.error(err);
                console.log('成功删除css map文件：'+file);
            });
        }
    });

};
