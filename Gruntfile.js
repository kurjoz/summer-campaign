module.exports = function(grunt) {

    // Project configuration.
    grunt.initConfig({
        src: 'src',
        dist: 'dist',
        repo: 'git@github.com:kurjoz/summer-campaign.git',
        pkg: grunt.file.readJSON('package.json'),
        less:{
            options: {
                sourceMap: true
            },
            core:{
                options: {
                    sourceMapFilename: '<%= src %>/css/main.css.map',
                    sourceMapURL: 'main.css.map'
                },
                files: {
                    '<%= src %>/css/main.css': '<%= src %>/less/main.less'
                }
            },
            bootstrap:{
                options: {
                    sourceMapFilename: '<%= src %>/css/bootstrap.css.map',
                    sourceMapURL: 'bootstrap.css.map'
                },
                files: {
                    '<%= src %>/css/bootstrap.css': '<%= src %>/less/bootstrap.less'
                }
            }
        },
        import: {
            js: {
                src: '<%= src %>/js/main.js',
                dest: '<%= src %>/js/app.js'
            }
        },
        watch:{
            less: {
                files: ['<%= src %>/less/**/*.less'],
                tasks: ['less']
            },
            js: {
                files: ['<%= src %>/js/**/*.js'],
                tasks: ['import:js']
            },
            livereload: {
                options: {
                    livereload: true
                },
                files: [
                    '<%= src %>/*.html',
                    '<%= src %>/css/**/*.css',
                    '<%= src %>/im/**/*.*'
                ]
            }
        },
        connect: {
            src:{
                options:{
                    port:9006,
                    livereload: true,
                    hostname: '0.0.0.0',
                    base:'<%= src %>',
                    //keepalive:'true',
                    open:'http://localhost:' + 9006
                }
            }
        },
        clean: {
            dist: {
                src: ["<%= dist %>"]
            }
        },
        copy: {
            dist: {
                files: [
                    // includes files within path and its sub-directories
                    {
                        expand: true,
                        cwd: '<%= src %>/',
                        src: [
                            'js/app.js',
                            'css/**',
                            'fonts/**',
                            'im/**',
                            '*.html',
                            '*.txt'

                        ],
                        dest: '<%= dist %>/'
                    }
                ]
            }
        },
        buildcontrol: {
            options: {
                commit: true,
                push: true,
                remote: '<%= repo %>',
                message: 'update'
            },
            dist: {
                options: {
                    dir: '<%= dist %>',
                    branch: 'gh-pages'
                }
            }
        }
    });
    //  Loading Tasks
    grunt.loadNpmTasks('grunt-contrib-connect');
    grunt.loadNpmTasks('grunt-contrib-less');
    grunt.loadNpmTasks('grunt-contrib-watch');
    grunt.loadNpmTasks('grunt-contrib-copy');
    grunt.loadNpmTasks('grunt-build-control');
    grunt.loadNpmTasks('grunt-contrib-clean');
    grunt.loadNpmTasks('grunt-import');

    // Default task(s).
    grunt.registerTask('default', ['less', 'import:js','connect:src','watch']);
    grunt.registerTask('ghp', ['clean:dist','copy:dist','buildcontrol:dist']);

};
