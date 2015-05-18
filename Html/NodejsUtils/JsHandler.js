/************************************************
 * JsHandler,JS文件处理模块
 ************************************************/
var fs = require('fs-extra');
var fs_raw = require('fs');
var findit = require('findit');
//删除注释模块
var strip = require('strip-comment');
//var normalizeNewline = require('normalize-newline');
//var newline = require('newline');
//newline
//var removeNewline = require('newline-remove');
//var streamNewline = require("stream-newline");
//var gulp = require('gulp');
//var removeEmptyLines = require('gulp-remove-empty-lines');
//引入配置
var Config = require("./Config");
//发布版的js文件存放路径:Config.js_dir
/**
 * 去除JS文件中的注释
 * 问题：删除注释后会产生空白行
 * @return {[type]} [description]
 */
exports.rmJsComments = function() {
    //获得finder对象
    var finder = findit(Config.js_dir);
    finder.on('file', function(file, stat) {
        if (/test.js$/i.test(file)) {
            var old_file_ctn = fs.readFileSync(file, {
                encoding: 'utf8'
            });
            //参数true:删除注释后是否保留该行
            //var new_file_ctn = strip.js(old_file_ctn, true);
            var new_file_ctn = strip.js(old_file_ctn);
            fs.writeFile(file, new_file_ctn, function(err) {
                if (err) {
                    console.log(err);
                }
                console.log("成功删除js文件中的注释。");
                //写入完毕之后
                //console.log("the the file is:"+new_file_ctn);
                /* 
                if(removeNewline(new_file_ctn)){
                        console.log("run");
                }
                */
                //统一换行符->\n
                //new_file_ctn = normalizeNewline(new_file_ctn);
                //new_file_ctn = newline.set(new_file_ctn, "LF");
                //console.log("now the the file is:"+removeNewline(new_file_ctn));
                //把反斜杠: Release\js\test.js替换成斜杠: Release/js/test.js
                //file.replace(/\\/,"\/");
                //new_file_ctn.replace(/\n\n\n/,"\n");
                //console.log("soga the file ctn is:" + new_file_ctn.replace(/[^\n]*.(\n+)[^\n]*/g, "\n"));

                /* 
                var result;
                var so_regexp=new RegExp("(\n){2,}","g");
                while ((result = so_regexp.exec(new_file_ctn)) != null) {
                    console.log(result);
                    console.log(so_regexp.lastIndex);
                }*/
                /* 
                var str_arr = new_file_ctn.split("\n+");
                new_file_ctn = str_arr.join("");
                console.log("the file ctn is:" + new_file_ctn);
                */
                //以下想使用Stream未实现
                //var r_stream = fs_raw.createReadStream(file);
                //var r_stream = fs_raw.createReadStream('Release/js/test.js');
                //r_stream.pipe(removeEmptyLines()).pipe(process.stdout);
            });
        }
    });
};
