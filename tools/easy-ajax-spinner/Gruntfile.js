module.exports = function(grunt) {

  // Project configuration.
    grunt.initConfig({
        pkg: grunt.file.readJSON('package.json'),
        meta: {
            banner: '   /*! \n' +
                    '    *  <%= pkg.name %> | <%= pkg.description %> \n'+
                    '    *  Version <%= pkg.version %> - <%= grunt.template.today("yyyy-mm-dd") %> \n' +
                    '    *  HomePage: <%= pkg.homepage %> \n'+
                    '   */ \n'
        },
        clean: {
            build: {
                src: ["dist"]
            }
        },
        uglify: {
            options: {
                banner: '<%= meta.banner %>'
            },
            my_target: {
              files: {
                  'dist/js/easyAjaxSpinner.min.js': ['src/js/easyAjaxSpinner.js'],
                  'dist/js/easyAjaxSpinner.pack.min.js': ['src/js/dependencies/spin.min.js','src/js/easyAjaxSpinner.js']
              }
            }
        },
        cssmin: {
            target: {
                options: {
                    banner: '<%= meta.banner %>'
                },
                files: [{
                        expand: true,
                        cwd: 'src/css',
                        src: ['*.css', '!*.min.css'],
                        dest: 'dist/css',
                        ext: '.min.css'
                }
                ]
            }
        },
        copy: {
            main: {
                files: [
                    {src: ['src/css/easyAjaxSpinner.css'], dest: 'dist/css/easyAjaxSpinner.css'},
                    {src: ['src/js/easyAjaxSpinner.js'], dest: 'dist/js/easyAjaxSpinner.js'},
                    {src: ['src/js/dependencies/jquery-2.1.4.min.js'], dest: 'dist/js/dependencies/jquery-2.1.4.min.js'},
                    {src: ['src/js/dependencies/spin.min.js'], dest: 'dist/js/dependencies/spin.min.js'},
                    {src: ['demo/demo.css'], dest: 'dist/demo.css'} 
                ]
            }
        },
        processhtml: {
            dist: {
                files: {
                    'dist/demo.html': ['demo/demo.html']
                }
            }
        }
    });

    // Load the plugin that provides the "uglify" task.
    grunt.loadNpmTasks('grunt-contrib-clean');
    grunt.loadNpmTasks('grunt-contrib-uglify');
    grunt.loadNpmTasks('grunt-contrib-cssmin');
    grunt.loadNpmTasks('grunt-contrib-copy');
    grunt.loadNpmTasks('grunt-processhtml');

    // Default task(s).
    grunt.registerTask('default', [
        'clean',
        'uglify',
        'cssmin',
        'copy',
        'processhtml'
    ]);

};