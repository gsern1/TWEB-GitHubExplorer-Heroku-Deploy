// Grunt tasks

module.exports = function (grunt) {
	"use strict";

	// Project configuration.
	grunt.initConfig({

		pkg: grunt.file.readJSON('package.json'),
		banner: '/*!\n' +
		'* <%= pkg.name %> - v<%= pkg.version %> - MIT LICENSE <%= grunt.template.today("yyyy-mm-dd") %>. \n' +
		'* @author <%= pkg.author %>\n' +
		'*/\n',

		clean: {
			dist: ['public/src']
		},

		jshint: {
			options: {
				jshintrc: '.jshintrc'
			},
			gruntfile: {
				src: 'Gruntfile.js'
			},
			app: {
				src: ['public/app/modules/**/*.js']
			}
		},

		exec: {
			bowerInstaller: 'bower-installer',
			startServer: 'node index.js'
		},

		concat: {
			options: {
				banner: '<%= banner %>',
				stripBanners: false
			},
			base: {
				src: [
					// Angular Project Dependencies,
					'public/app/app.js',
					'public/app/app.config.js',
					'public/app/modules/**/*Module.js',
					'public/app/modules/**/*Route.js',
					'public/app/modules/**/*Ctrl.js',
					'public/app/modules/**/*Service.js',
					'public/app/modules/**/*Directive.js',
					'public/app/lib/Chart.js',
					'public/app/lib/angular-chart.js'

				],
				dest: 'public/app/assets/js/<%= pkg.name %>-appbundle.js'
			},
			build: {
				src: [
					// Angular Project Dependencies,
					'public/app/assets/libs/angular/angular.js',
					'public/app/assets/libs/**/*.js'

				],
				dest: 'public/app/assets/js/<%= pkg.name %>-angularbundle.js'
			}
		},

		uglify: {
			options: {
				banner: '<%= banner %>',
				report: 'min'
			},
			base: {
				src: ['<%= concat.base.dest %>'],
				dest: 'public/app/assets/js/<%= pkg.name %>-angscript.min.js'
			},
			basePlugin: {
				src: ['public/src/plugins/**/*.js'],
				dest: 'public/app/assets/js/plugins/',
				expand: true,
				flatten: true,
				ext: '.min.js'
			}
		},
		concurrent: {
			tasks: ['exec:startServer', 'watch'],
			options: {
				logConcurrentOutput: true
			}
		},

		watch: {
			app: {
				files: ['public/app/**/*'],
				tasks: ['jshint:app'],
				options: {
					livereload: true
				}
			}
		},

		injector: {
			options: {
				ignorePath: "public"
			},
			dev: {
				files: {
					'views/pages/index.ejs': [
						'bower.json',
						'public/app/app.js',
						'public/app/app.config.js',
						'public/app/**/*Module.js',
						'public/app/**/*Route.js',
						'public/app/**/*Ctrl.js',
						'public/app/**/*Service.js',
						'public/app/**/*Directive.js',
						'public/app/lib/Chart.js',
						'public/app/lib/angular-chart.js'
					]
				}
			},
			production: {
				files: {
					'index.html': [
						'bower.json',
						'public/app/assets/css/**/*.css',
						'public/app/assets/js/*.js'
					]

				}
			}
		},

		ngtemplates: {
			app: {
				src: 'public/app/modules/**/*.html',
				dest: 'public/app/assets/js/templates.js',
				options: {
					module: '<%= pkg.name %>',
					root: 'public/app/',
					standAlone: false
				}
			}
		}



	});

	require('time-grunt')(grunt);
	require('load-grunt-tasks')(grunt);

	// Making grunt default to force in order not to break the project if something fail.
	grunt.option('force', true);

	// Register grunt tasks
	grunt.registerTask("build", [
		"jshint",
		"exec:bowerInstaller",
		"concat",
		"ngtemplates",
		"injector:production",
		"concurrent",
		"clean"
	]);

	// Development task(s).
	grunt.registerTask('dev', ['injector:dev', 'concurrent']);

};
