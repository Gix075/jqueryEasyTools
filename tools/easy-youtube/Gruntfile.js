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
        concat: {
            options: {
                separator: ';',
                banner: '<%= meta.banner %>'
            },
            dist: {
                src: ['src/js/easyYouTube.js'],
                dest: 'dist/js/easyYouTube.js'
            }
        },
        uglify: {
            options: {
                banner: '<%= meta.banner %>'
            },
            my_target: {
              files: {
                  'dist/js/easyYouTube.min.js': ['src/js/easyYouTube.js']
              }
            }
        },
        copy: {
            main: {
                files: [
                    {src: ['src/demo.css'], dest: 'dist/demo.css'},
                    {src: ['src/demo.html'], dest: 'dist/demo.html'} 
                ]
            }
        }
    });


    grunt.loadNpmTasks('grunt-contrib-clean');
    grunt.loadNpmTasks('grunt-contrib-concat');
    grunt.loadNpmTasks('grunt-contrib-uglify');
    grunt.loadNpmTasks('grunt-contrib-copy');

    // Default task(s).
    grunt.registerTask('default', [
        'clean',
        'concat',
        'uglify',
        'copy'
    ]);

};