module.exports = function(grunt) {

  'use strict';
  // Project configuration.
  grunt.initConfig({
    pkg : grunt.file.readJSON('package.json'),
      
    meta: {
        banner: "/*!\n" +
            " *  <%= pkg.title %> - v<%= pkg.version %>\n" +
            " *  ========================================================== \n" +
            " *  (c) by <%= pkg.author %> | All righrs reserved! \n"
    },  

    clean : {
      dist : ["dist"]
    },

    uglify: {
        options: {
          banner: "<%= meta.banner_easyajaxspinner %>"
        },
        dist: {
           
            files: {
                'dist/js/jqueryEasyTools.pack.min.js': [
                    'tools/easy-ajax-spinner/src/js/dependencies/spin.min.js',
                    'tools/easy-readmore/src/js/helpers/jquery.easing.1.3.js',
                    'tools/easy-ajax-spinner/src/js/easyAjaxSpinner.js',
                    'tools/easy-gmap/src/js/easyGmap.js',
                    'tools/easy-youtube/src/js/easyYoutube.js',
                    'tools/easy-readmore/src/js/easyReadmore.js'
                ],
                'dist/js/jqueryEasyTools.min.js': [
                    'tools/easy-ajax-spinner/src/js/easyAjaxSpinner.js',
                    'tools/easy-gmap/src/js/easyGmap.js',
                    'tools/easy-youtube/src/js/easyYoutube.js',
                    'tools/easy-readmore/src/js/easyReadmore.js'
                ]
            }
        }
    },
      
    cssmin: {
        options: {
            shorthandCompacting: false,
            roundingPrecision: -1,
            banner: "<%= meta.banner %>"
        },
        dist: {
            files: {
                'dist/css/jqueryEasyTools.min.css': [
                    'tools/easy-ajax-spinner/src/css/easyAjaxSpinner.css',
                    'tools/easy-gmap/src/css/easyGmap.css'
                ]
            }   
        }
    },

    copy: {
      dist: {
        files: [
            // javascript
            {
              src: 'tools/easy-ajax-spinner/src/js/dependencies/spin.min.js',
              dest: 'dist/js/libs/spin.min.js'
            },
            {
                src: 'tools/easy-readmore/src/js/helpers/jquery.easing.1.3.js',
                dest: 'dist/js/libs/jquery.easing.1.3.js'
            }
        ]
      }
    },

    jshint : {
      dev : [
                'tools/easy-ajax-spinner/src/js/easyAjaxSpinner.js',
                'tools/easy-gmap/src/js/easyGmap.js',
                'tools/easy-youtube/src/js/easyYoutube.js',
                'tools/easy-readmore/src/js/easyReadmore.js'
            ]
    }/*,

    less : {
      development : {
        options : {
          sourceMap : true,
          sourceMapFileInline : true
        },
        files : [{
          "dev/tool/css/fdCookieLaw.css" : "dev/tool/less/fdCookieLaw.less"
        }]
      },
      production : {
        options : {
          banner: "<%= meta.banner %>"
        },
        files : [{
          "dist/tool/css/fdCookieLaw.css" : "dev/tool/less/fdCookieLaw.less"
        }]
      }
    },*/

//    watch : {
//      styles : {
//        files : ['**/*.less'], // which files to watch
//        tasks : ['less'],
//        options : {
//          nospawn : true
//        }
//      }
//    }

  });


  grunt.loadNpmTasks('grunt-contrib-clean');
  grunt.loadNpmTasks('grunt-contrib-jshint');
  //grunt.loadNpmTasks('grunt-contrib-less');
  grunt.loadNpmTasks('grunt-contrib-copy');
  //grunt.loadNpmTasks('grunt-contrib-watch');
  grunt.loadNpmTasks('grunt-contrib-cssmin');   
  grunt.loadNpmTasks('grunt-contrib-uglify');   
 // grunt.loadNpmTasks('grunt-contrib-concat');
  //grunt.loadNpmTasks('grunt-processhtml');

  // Default task(s).
  grunt.registerTask('default', [
    'clean:dist',
    'uglify:dist',
    'cssmin:dist', 
    'copy:dist'
  ]);

  grunt.registerTask('dev', [
    'jshint:dev' 
  ]);

};