/************************************************
 * ReadMeHandler,readme.txt文件处理模块
 ************************************************/
var fs = require('fs-extra');
var findit = require('findit');
//引入配置
var Config = require("./Config");
//这些目录下的readme.txt文件需要删除
var paths_to_rm = [Config.page_dir, Config.plugin_dir];
/**
 * 删除指定目录下的readme.txt文件
 * @return {[type]} [description]
 */
exports.rmReadmeFile = function() {
    paths_to_rm.forEach(function(path, index) {
        //根据path获得finder对象
        var finder = findit(path);
        finder.on('file', function(file, stat) {
            //是否是readme.txt文件(不区分大小写)
            if (/readme\.txt$/i.test(file)) {
                fs.remove(file, function(err) {
                    if (err) return console.error(err);
                    console.log("成功删除readme.txt文件：" + file);
                });
            }
        });
    });
};
