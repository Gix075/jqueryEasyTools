module.exports = function(grunt) {

  'use strict';
  // Project configuration.
  grunt.initConfig({
    pkg : grunt.file.readJSON('package.json'),
      
    meta: {
        banner: "/*!\n" +
            " *  <%= pkg.title %> - v<%= pkg.version %>\n" +
            " *  ========================================================== \n" +
            " *  Date: <%= grunt.template.today('dd/mm/yyyy') %> \n" +
            " *  Home: <%= pkg.homepage %> \n" +
            " *  (c) by <%= pkg.author %> | All righrs reserved! \n" +
            "*/\n" +
            ""
    },  

    clean : {
      dist : ["dist"]
    },
      
    concat: {
        options: {
            //separator: ';',
            banner: '<%= meta.banner %>'
        },
        dist: {
            src: [
                'tools/easy-ajax-spinner/dist/js/easyAjaxSpinner.js',
                'tools/easy-cookies/dist/js/easyCookies.js',
                'tools/easy-gmap/dist/js/easyGmap.js',
                'tools/easy-readmore/dist/js/easyReadmore.js',
                'tools/easy-smooth-scroll/dist/js/easySmoothScroll.js',
                'tools/easy-youtube/dist/js/easyYoutube.js',
                'tools/easy-recaptcha-validator/dist/js/easyReCaptchaValidator.js',
                'tools/easy-height-equalizer/dist/js/easyHeightEqualizer.js'
            ],
            dest: 'dist/js/jqueryEasyTools.js'
        }
    },  

    uglify: {
        options: {
          banner: "<%= meta.banner %>"
        },
        dist: {
           
            files: {
                'dist/js/jqueryEasyTools.pack.min.js': [
                    'tools/easy-ajax-spinner/src/js/dependencies/spin.min.js',
                    'tools/easy-readmore/src/js/helpers/jquery.easing.1.3.js',
                    'dist/js/jqueryEasyTools.js'
                ],
                'dist/js/jqueryEasyTools.min.js':'dist/js/jqueryEasyTools.js'
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
                    'tools/easy-ajax-spinner/dist/css/easyAjaxSpinner.css',
                    'tools/easy-gmap/src/dist/easyGmap.css'
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
            },
            // Single Tools
            // ====================================
            {
              src: 'tools/easy-ajax-spinner/dist/js/easyAjaxSpinner.min.js',
              dest: 'dist/js/tools/easy-ajax-spinner/easyAjaxSpinner.min.js'
            },
            {
              src: 'tools/easy-ajax-spinner/dist/js/easyAjaxSpinner.pack.min.js',
              dest: 'dist/js/tools/easy-ajax-spinner/easyAjaxSpinner.pack.min.js'
            },
            
            {
              src: 'tools/easy-cookies/dist/js/easyCookies.min.js',
              dest: 'dist/js/tools/easy-cookies/easyCookies.min.js'
            },
            
            {
              src: 'tools/easy-gmap/dist/js/easyGmap.min.js',
              dest: 'dist/js/tools/easy-gmap/easyGmap.min.js'
            },
            
            {
              src: 'tools/easy-readmore/dist/js/easyReadmore.min.js',
              dest: 'dist/js/tools/easy-readmore/easyReadmore.min.js'
            },  
            {
              src: 'tools/easy-readmore/dist/js/easyReadmore.pack.min.js',
              dest: 'dist/js/tools/easy-readmore/easyReadmore.pack.min.js'
            },
            
            {
              src: 'tools/easy-recaptcha-validator/dist/js/easyReCaptchaValidator.min.js',
              dest: 'dist/js/tools/easy-recaptcha-validator/easyReCaptchaValidator.min.js'
            },     
            {
              src: 'tools/easy-recaptcha-validator/dist/php/easyReCaptchaValidator.php',
              dest: 'dist/php/easy-recaptcha-validator/easyReCaptchaValidator.php'
            },
            
            {
              src: 'tools/easy-smooth-scroll/dist/js/easySmoothScroll.min.js',
              dest: 'dist/js/tools/easy-smooth-scroll/easySmoothScroll.min.js'
            },
            
            {
              src: 'tools/easy-youtube/dist/js/easyYouTube.min.js',
              dest: 'dist/js/tools/easy-youtube/easyYouTube.min.js'
            },
            
            {
              src: 'tools/easy-height-equalizer/dist/js/easyHeightEqualizer.min.js',
              dest: 'dist/js/tools/easy-height-equalizer/easyHeightEqualizer.min.js'
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
  grunt.loadNpmTasks('grunt-contrib-concat');
  grunt.loadNpmTasks('grunt-contrib-jshint');
  //grunt.loadNpmTasks('grunt-contrib-less');
  grunt.loadNpmTasks('grunt-contrib-copy');
  //grunt.loadNpmTasks('grunt-contrib-watch');
  grunt.loadNpmTasks('grunt-contrib-cssmin');   
  grunt.loadNpmTasks('grunt-contrib-uglify');   
  //grunt.loadNpmTasks('grunt-processhtml');

  // Default task(s).
  grunt.registerTask('default', [
    'clean:dist',
    'concat:dist',  
    'uglify:dist',
    'cssmin:dist', 
    'copy:dist'
  ]);

  grunt.registerTask('dev', [
    'jshint:dev' 
  ]);

};