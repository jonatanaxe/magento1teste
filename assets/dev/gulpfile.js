const { series, parallel, src, dest, watch} = require('gulp');

const sass = require('gulp-sass');
const autoprefixer = require('gulp-autoprefixer');
const cleanCSS = require('gulp-clean-css');
const rename = require("gulp-rename");
const babel = require('gulp-babel');
const minify = require("gulp-babel-minify");
const del = require('delete');

function compileSass(done) {
    src('scss/*.scss')
        .pipe(sass({ indentWidth: 4, outputStyle: 'expanded' }).on('error', sass.logError))
        .pipe(autoprefixer())
        .pipe(cleanCSS({ level:2 }))
        .pipe(rename({ suffix: '.min' }))
        .pipe(dest('../css'));

    done();
}

function compileJs(done){
    src('js/*.js')
            .pipe(babel({ presets: ['@babel/preset-env'] }).on('error', (response) => console.error(response.message) ))
        .pipe(minify())
        .pipe(rename({ suffix: '.min' }))
        .pipe(dest('../js'));
    
    done();
}

function cleanFiles(done) {
    del(['tmp/css/*', '../css/*','tmp/js/*', '../js/*'], {force: true}, done);
}

function watchFiles() {
    watch('scss/**/*.scss', compileSass);
    watch('js/**/*.js', compileJs);
}

exports.compileSass = compileSass;
exports.compileJs = compileJs;

exports.cleanFiles = cleanFiles;
exports.init = series(cleanFiles,parallel(compileSass, compileJs));
exports.default = watchFiles;