module.exports = function(grunt) {
  grunt.initConfig({
    pkg: grunt.file.readJSON('package.json'),
    concat: {
      dist: {
        src: ['src/fairfield-style-6-9-15.less', 'src/variables.less','src/**/*.less'],
        dest: 'tmp/<%= pkg.name %>.less'
      }
    },
    less: {
      options: {
        compress: true,
        yuicompress: true,
        optimization: 2,
        paths: ['build']
      },
      files: {
        src: "tmp/style.less",
        dest: "build/style.css"
      }
    }
  });

  grunt.loadNpmTasks('grunt-contrib-concat');
  grunt.loadNpmTasks('grunt-contrib-less');

  grunt.registerTask('default', ['concat', 'less']);
};