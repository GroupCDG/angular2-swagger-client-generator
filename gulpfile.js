/**
* Licensed under the Apache License, Version 2.0 (the "License");
* Please note: This is not the original version of file. This has been modified by CDG.
*/
var gulp = require('gulp');
var fs = require("fs");

gulp.task('default', ['copyBin', 'copyLib']);

gulp.task('copyBin', function () {
    var stream = gulp.src('src/a2apigen.js').pipe(gulp.dest('bin'));
    return stream;
});

gulp.task('copyLib', function () {
    var stream = gulp.src('src/generator.js').pipe(gulp.dest('lib'));
    return stream;
});

