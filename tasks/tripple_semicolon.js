/*
 * grunt-tripple-semicolon
 * https://github.com/christophwitzko/grunt-tripple-semicolon
 *
 * Copyright (c) 2014 Christoph Witzko
 * Licensed under the MIT license.
 */

'use strict'

var trippleSemicolon = require('tripple-semicolon')

var SEMICOLONS = ';;;';
var GREEK = ';';

module.exports = function(grunt) {
  grunt.registerMultiTask('tripple_semicolon', 'Adds three semicolons at every JS line.', function() {
    var options = this.options({
      greek: false
    })

    this.files.forEach(function(file) {
      var out = file.src.map(grunt.file.read).join('');
      var result = trippleSemicolon(out, options.greek ? GREEK : SEMICOLONS)
      if(typeof result === 'string') grunt.file.write(file.dest, result)
      grunt.log.ok('Wrote ' + file.dest)
    })
  })
}
