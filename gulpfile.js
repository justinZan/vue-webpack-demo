const gulp = require("gulp");
const shell = require("gulp-shell")

const plumber = require("gulp-plumber") // 异常处理
const merge = require("gulp-merge-json") // 合并JSON


const commonPath = './src/' // 公共路径
const i18nPath = './src/lang' // 多语言路径

gulp.task("merage-language", function (cb) {
    gulp.src([commonPath + '**/*zh-in-CN.json'])
        .pipe(plumber())
        .pipe(merge({ "fileName": "zh-CN.json" }))
        .pipe(gulp.dest(i18nPath))
        .on('end', () => { 
            console.log("国际化合并完成")
            cb(null)
        })
})