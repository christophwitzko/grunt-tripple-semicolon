/*
 * grunt-tripple-semicolon
 * https://github.com/christophwitzko/grunt-tripple-semicolon
 *
 * Copyright (c) 2014 Christoph Witzko
 * Licensed under the MIT license.
 */

'use strict'

var fixmyjs = require('fixmyjs')

function addTrippleSemicolon(data){
  return fixmyjs.fix(data, {asi: false}).replace(/;(\r|\n)+/gm, ';;;\n')
}

module.exports = function(grunt) {
  grunt.registerMultiTask('tripple_semicolon', 'The best Grunt plugin ever.', function() {
    this.files.forEach(function(file) {
      grunt.verbose.write('tripple semicoloned ' + file.src[0])
      var out = file.src.map(grunt.file.read).join('');
      var result = addTrippleSemicolon(out)
      if(result !== null && typeof result === 'string') grunt.file.write(file.dest, result)
      grunt.log.ok('Wrote ' + file.dest)
    })
  })
}
