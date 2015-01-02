# grunt-tripple-semicolon

[![forthebadge](http://forthebadge.com/badges/built-with-swag.svg)](http://forthebadge.com)

> Adds three semicolons at every JS line.

## Getting Started
This plugin requires Grunt `~0.4.5`

If you haven't used [Grunt](http://gruntjs.com/) before, be sure to check out the [Getting Started](http://gruntjs.com/getting-started) guide, as it explains how to create a [Gruntfile](http://gruntjs.com/sample-gruntfile) as well as install and use Grunt plugins. Once you're familiar with that process, you may install this plugin with this command:

```shell
npm install grunt-tripple-semicolon --save-dev
```

Once the plugin has been installed, it may be enabled inside your Gruntfile with this line of JavaScript:

```js
grunt.loadNpmTasks('grunt-tripple-semicolon')
```

## The "tripple_semicolon" task

### Overview
In your project's Gruntfile, add a section named `tripple_semicolon` to the data object passed into `grunt.initConfig()`.

```js
grunt.initConfig({
  tripple_semicolon: {
    testing: {
      files: [{
        expand: true,
        cwd: 'test',
        src: '**/*.js',
        dest: 'dest'
      }]
    }
  },
})
```
