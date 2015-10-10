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
                  'dist/js/easyReadmore.min.js': ['src/js/easyReadmore.js'],
                  'dist/js/easyReadmore.pack.min.js': ['src/js/helpers/jquery.easing.1.3.js','src/js/easyReadmore.js']
              }
            }
        },
        
        copy: {
            main: {
                files: [
                    {src: ['src/js/easyReadmore.js'], dest: 'dist/js/easyReadmore.js'},
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
    grunt.loadNpmTasks('grunt-contrib-copy');

    // Default task(s).
    grunt.registerTask('default', [
        'clean',
        'uglify',
        'copy'
    ]);

};