module.exports = function (grunt) {
	var lrSnippet = require('grunt-contrib-livereload/lib/utils').livereloadSnippet;
	grunt.initConfig({

		nodemon: {
  				dev: {
   					script: './bin/www',
   					options: { 
   						livereload: true ,
   						watchedExtensions: ['js','html'],
   						callback: function (nodemon) {
        					nodemon.on('log', function (event) {
        						console.log(event.colour);
        					});
        					nodemon.on('restart', function () {
        						console.log('restart');
        					});	
        				},
   					}

  				}
  					
		},
 

/*		connect: {
		    options: {
		        port: 3000,
		        // change this to '0.0.0.0' to access the server from outside
		        hostname: 'localhost'
		    },
		    livereload: {
		        options: {
		            middleware: function (connect) {
		                return [
		                    lrSnippet,
		                    mountFolder(connect, '.tmp'),
		                    mountFolder(connect, 'app'),
		                    require('./server') // your server packaged as a nodejs module
		                ];
		            }
		        }
		    }
		}

*/



	});





	grunt.loadNpmTasks('grunt-contrib-watch');
	grunt.loadNpmTasks('grunt-contrib-livereload');
	grunt.loadNpmTasks('grunt-nodemon');

	//grunt.registerTask('default', ['nodemon', 'connect'])

	grunt.registerTask('default', [
    //'nodemon',
    'livereload-start',
    'nodemon'
   // 'connect:livereload'

]);

}





