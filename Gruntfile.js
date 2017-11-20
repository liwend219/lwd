module.exports = function(grunt) {
    var path = require('path');
// 基础位置
    grunt.initConfig({
        pkg: grunt.file.readJSON('package.json'),
        uglify: {//压缩js 
            compressjs: {
                files: {
                    './build/main.min.js': ['./test/main.js']
                }
            }
        },
        less: {// 编译less
            output : {
                options: {
                    paths: ['./src/less'],
                    style: 'expanded',
                },
                files:  [{
                    expand: true,
                    cwd: './src/less',
                    src: ['*.less'],
                    dest: './src/styles',
                    ext: '.css'
                }]
            }
        },
        cssmin: {  //压缩less
            options: {  
                keepSpecialComments: 0  
            },  
            compress: {  
                files: {  
                    './build/style.min.css': ['./test/style.css'] 
                }  
            }  
        },
        concat: {
            options: {
                separator: '\n',
                sourceMap: true
            },
            concatjs: {// 合并js
                src: './src/js/*.js',
                dest: './test/main.js',
            },
            concatstyle: {// 合并css
                src: './src/styles/*.css',
                dest: './test/style.css',
            }
        },
        jshint: {
            all: ['./test/main.js']
        },
        watch: {
            scripts: {
              files: ['./src/js/*.js'],
              tasks: ['concat:concatjs','jshint']
            },
            less: {
              files: ['./src/less/*.less'],
              tasks: ['less','concat:concatstyle']
            },
            livereload: {
                options: {
                    livereload: '<%= connect.options.livereload %>'
                },
                files: [
                    'index.html',
                    './src/less/*.less',
                    './test/*.css',
                    './test/*.js',
                    './test/{,*/}*.{png,jpg,jpeg,gif,webp,svg}'
                ]
            }
          },
          connect: {
            options: {
                port: 9000,
                open: true,
                livereload: 35729,
                // Change this to '0.0.0.0' to access the server from outside
                hostname: '*'
            },
            server: {
              options: {
                port: 9005,
                base: './'
              }
            }
          },
          wiredep: {
              test: {
                src: 'index.html' // point to your HTML file.
              },
              build: {
                src: 'index_pro.html' // point to your HTML file.
              },            
          }
    });

// 加载插件
    grunt.loadNpmTasks('grunt-contrib-uglify');
    grunt.loadNpmTasks('grunt-contrib-less');
    grunt.loadNpmTasks('grunt-contrib-concat');
    grunt.loadNpmTasks('grunt-contrib-jshint');
    grunt.loadNpmTasks('grunt-contrib-cssmin'); 
    grunt.loadNpmTasks('grunt-contrib-watch');
    grunt.loadNpmTasks('grunt-contrib-connect');
    grunt.loadNpmTasks('grunt-wiredep');
    grunt.loadNpmTasks('grunt-contrib-copy');

// 注册任务
    // 合并js
    grunt.registerTask('concatjs',['concat:concatjs']);
    // 合并less
    grunt.registerTask('concatless',['concat:concatstyle']);
    //压缩js 
    grunt.registerTask('compressjs', ['concat:concatjs','jshint','uglify']);
    // 编译less为css
    // grunt.registerTask('compileless',['concat:concatstyle','less']);
    grunt.registerTask('compileless',['less']);
    //压缩css
    grunt.registerTask('compressless', ['concat:concatstyle','less','cssmin']);
    // 代码检查
    grunt.registerTask('testjs', ['jshint']);
    // 打包依赖
    grunt.registerTask('savedev', ['wiredep:test']);
    // 打包生产
    grunt.registerTask('build', ['jshint','uglify','cssmin','wiredep:build']);    
    
    grunt.registerTask('default', ['connect:server','watch']);
};
