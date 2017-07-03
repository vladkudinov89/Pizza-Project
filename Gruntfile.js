/**
 * Created by User on 10.05.2017.
 */

module.exports = function (grunt) {

    grunt.initConfig({

        pkg: grunt.file.readJSON('package.json'),

       /* concat: {

            dist: {

                src: [

                    'bower_components/jquery/dist/jquery.min.js',
                    'bower_components/owl.carousel/dist/owl.carousel.min.js',
                    'bower_components/fullpage.js/dist/jquery.fullpage.min.js',
                    'js/common.js'

                ],

                dest :  'js/production.js'

            }


        },//concat

        uglify:{

            my_target : {

                files: {

                    'js/production.min.js' : ['js/production.js']

                }

            }

        },*/

        cssmin: {

            with_banner: {
                options: {
                    banner: '/* My minified CSS */'
                },

                files: {
                    'style/style.min.css': [
                        'style/scss/style.css',
                        'style/flexboxgrid.css',
                        'style/fonts.css',
                        'style/normilize.css',
                        'style/owl.carousel.min.css',
                        'style/owl.theme.default.min.css'


                    ]
                }
            }
        }
    });

    /*grunt.loadNpmTasks('grunt-contrib-concat');*/
    /*grunt.loadNpmTasks('grunt-contrib-uglify');*/
    grunt.loadNpmTasks('grunt-contrib-cssmin');


    /*grunt.registerTask('default', ['concat']);*/
    /*grunt.registerTask('default', ['uglify']);*/
    grunt.registerTask('default', ['cssmin']);

};