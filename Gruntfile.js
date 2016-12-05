module.exports = function(grunt){

  grunt.initConfig({
    pkg: grunt.file.readJSON('package.json'),

    connect: {
      server: {
        options: {
          port: 9001,
          base: 'dist',
        }
      }
    },
    uglify: {
/*      dist: {
        src: 'src/scripts/*.js',
        dest: 'dist/scripts/script.min.js'
      },*/
      dev: {
        options: {
          beautify: true,
          mangle: false,
          compress: false,
          preserveComments: 'all'
        },
        files: {
          'dist/scripts/script.min.js': [
            // Include:
            'node_modules/jquery/dist/jquery.js',
            'src/scripts/*.js'
          ]
        }
      }
    },
    validation: {
      options: {
        reset: grunt.option('reset') || false,
        stoponerror: false,
        generateReport: true,
        reportpath: false
      },
      files: {
        src: ['dist/*.html'],
        tasks: ['validation']
      }
    },
    pug: {
      dev: {
        options: {
          pretty: true
        },
        files: [{
          expand: true, // setting to true enables the following options
          cwd: 'src/pug', // src matches are relative to this path
          src: ['*.pug'], // matches *.jade in cwd and 1 level down
          dest: 'dist', // destination prefix
          ext: '.html' // replace existing extensions with this value
        }]
      }
/*      dist: {
        options: {
          data: {
            debug: true
          }
        },
        files: [{
          expand: true, // setting to true enables the following options
          cwd: 'src/pug', // src matches are relative to this path
          src: ['*.pug'], // matches *.pug in cwd and 1 level down
          dest: 'dist', // destination prefix
          ext: '.html' // replace existing extensions with this value
        }]
      },*/
    },
    sass: {
      dev: {
        files: {
          'dist/styles/main.css': 'src/sass/main.scss'
        },
        options: {
          outputStyle: 'nested',
          precision: 5
        }
      }
/*      dist: {
        files: {
          'dist/styles/main.css': 'src/sass/main.scss'
        },
        options: {
          outputStyle: 'compressed',
          precision: 5
        }
      }*/
    },
    watch: {
        js: {
            files: ['src/scripts/*.js'],
            tasks: ['javascript']
        },
        pug: {
            files: ['src/pug/**/*.pug'],
            tasks: ['html']
        },
        css: {
            files: ['src/sass/**/*.scss'],
            tasks: ['css']
        }
    }

  });

  grunt.loadNpmTasks('grunt-contrib-uglify');
  grunt.loadNpmTasks('grunt-contrib-watch');
  grunt.loadNpmTasks('grunt-w3c-html-validation');
  grunt.loadNpmTasks('grunt-contrib-connect');
  grunt.loadNpmTasks('grunt-contrib-pug');
  grunt.loadNpmTasks('grunt-sass');

  grunt.registerTask('javascript',[
    'uglify'
  ]);

  grunt.registerTask('html',[
    'pug'
  ]);

  grunt.registerTask('css',[
    'sass'
  ]);

  grunt.registerTask('serve', [
      'connect',
      'javascript',
      'html',
      'css',
      'watch'
  ]);

  grunt.registerTask('validate', [
      'validation'
  ]);

};