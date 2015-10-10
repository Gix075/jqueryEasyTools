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
                  'dist/js/easyGmap.min.js': ['src/js/easyGmap.js']
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
                    {src: ['src/css/easyGmap.css'], dest: 'dist/css/easyGmap.css'},
                    {src: ['src/js/easyGmap.js'], dest: 'dist/js/easyGmap.js'},
                    {src: ['src/js/dependencies/jquery-2.1.4.min.js'], dest: 'dist/js/dependencies/jquery-2.1.4.min.js'},
                    {src: ['src/js/dependencies/spin.min.js'], dest: 'dist/js/dependencies/spin.min.js'},
                    {src: ['src/demo.css'], dest: 'dist/demo.css'},
                    {src: ['src/demo.html'], dest: 'dist/demo.html'} 
                ]
            }
        }
    });

    // Load the plugin that provides the "uglify" task.
    grunt.loadNpmTasks('grunt-contrib-clean');
    grunt.loadNpmTasks('grunt-contrib-uglify');
    grunt.loadNpmTasks('grunt-contrib-cssmin');
    grunt.loadNpmTasks('grunt-contrib-copy');

    // Default task(s).
    grunt.registerTask('default', [
        'clean',
        'uglify',
        'cssmin',
        'copy'
    ]);

};