/*
 * grunt-tripple-semicolon
 * https://github.com/christophwitzko/grunt-tripple-semicolon
 *
 * Copyright (c) 2014 Christoph Witzko
 * Licensed under the MIT license.
 */

'use strict'

module.exports = function(grunt) {
  grunt.initConfig({
    clean: ['dest'],
    tripple_semicolon: {
      testing: {
        files: [{
          expand: true,
          cwd: 'test',
          src: '**/*.js',
          dest: 'dest'
        }]
      }
    }
  })

  grunt.loadTasks('tasks')
  grunt.loadNpmTasks('grunt-contrib-clean')
  
  grunt.registerTask('default', ['clean', 'tripple_semicolon'])
}
