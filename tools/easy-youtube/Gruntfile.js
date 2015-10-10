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
                  'dist/js/easyYouTube.min.js': ['src/js/easyYouTube.js']
              }
            }
        },
        copy: {
            main: {
                files: [
                    {src: ['src/js/easyYouTube.js'], dest: 'dist/js/easyYouTube.js'},
                    {src: ['src/js/dependencies/jquery-2.1.4.min.js'], dest: 'dist/js/dependencies/jquery-2.1.4.min.js'},
                    {src: ['src/js/dependencies/spin.min.js'], dest: 'dist/js/dependencies/spin.min.js'},
                    {src: ['src/demo.css'], dest: 'dist/demo.css'},
                    {src: ['src/demo.html'], dest: 'dist/demo.html'} 
                ]
            }
        }
    });


    grunt.loadNpmTasks('grunt-contrib-clean');
    grunt.loadNpmTasks('grunt-contrib-uglify');
    grunt.loadNpmTasks('grunt-contrib-copy');

    // Default task(s).
    grunt.registerTask('default', [
        'clean',
        'uglify',
        'copy'
    ]);

};