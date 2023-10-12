const{ src, dest, watch, series} = require('gulp')
const sass = require('gulp-sass')(require('sass'))

function compile_to_css(){
    return src('scss/*.scss')
        .pipe(sass())
        .pipe(dest('css'))
}

function watch_sass(){
    watch(['scss/*.scss'], compile_to_css)
}

exports.default = series(compile_to_css, watch_sass)
