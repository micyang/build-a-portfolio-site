module.exports = function(grunt) {

	grunt.initConfig({
		responsive_images: {
			dev: {
				options: {
					engine: 'im',
					sizes: [{
						name: "small",
						width: 320,
						height: 240
					}]
				},
				files: [{
					expand: true,
					src: ['*.{jpg,gif,png}'],
					cwd: 'img_src/',
					dest: 'img/'
				}]	
			}
		}
	});
	grunt.loadNpmTasks('grunt-responsive-images');
	grunt.registerTask('default', 'responsive_images');
}