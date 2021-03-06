module.exports = function(grunt) {

  // Project configuration.
    grunt.initConfig({
        pkg: grunt.file.readJSON('package.json'),
        meta: {
            banner: '/*! \n' +
                    ' *  <%= pkg.name %> | <%= pkg.description %> \n'+
                    ' *  Version <%= pkg.version %> - Date: <%= grunt.template.today("dd/mm/yyyy") %> \n' +
                    ' *  HomePage: <%= pkg.home %> \n'+
                    '*/ \n'
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
                  'dist/js/<%= pkg.name %>.min.js': ['src/js/<%= pkg.name %>.js']
              }
            }
        },
        concat: {
            options: {
                separator: ';',
                banner: '<%= meta.banner %>'
            },
            dist: {
                src: ['src/js/<%= pkg.name %>.js'],
                dest: 'dist/js/<%= pkg.name %>.js'
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
                    {src: ['src/css/<%= pkg.name %>.css'], dest: 'dist/css/<%= pkg.name %>.css'},
                    {src: ['src/demo.css'], dest: 'dist/demo.css'},
                    {src: ['src/demo.html'], dest: 'dist/demo.html'} 
                ]
            }
        }
    });

    // Load the plugin that provides the "uglify" task.
    grunt.loadNpmTasks('grunt-contrib-clean');
    grunt.loadNpmTasks('grunt-contrib-uglify');
    grunt.loadNpmTasks('grunt-contrib-concat');
    grunt.loadNpmTasks('grunt-contrib-cssmin');
    grunt.loadNpmTasks('grunt-contrib-copy');

    // Default task(s).
    grunt.registerTask('default', [
        'clean',
        'uglify',
        'concat',
        'cssmin',
        'copy'
    ]);

};