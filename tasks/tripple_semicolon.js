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
  grunt.registerMultiTask('tripple_semicolon', 'Adds three semicolons at every JS line.', function() {
    this.files.forEach(function(file) {
      var out = file.src.map(grunt.file.read).join('');
      var result = addTrippleSemicolon(out)
      if(typeof result === 'string') grunt.file.write(file.dest, result)
      grunt.log.ok('Wrote ' + file.dest)
    })
  })
}
