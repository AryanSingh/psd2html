module.exports = function(grunt){
  grunt.initConfig({
    sass: {                              // Task 
      dist: {                            // Target 
        files: {                         // Dictionary of files 
          'assets/stylesheets/common.css': 'assets/stylesheets/src/common.scss',
          'assets/stylesheets/land.css': 'assets/stylesheets/src/land.scss'       
        }
      }
    },
    watch: {
      css: {
        files: ['assets/stylesheets/src/*.scss'],
        tasks: ['sass']
        
      }
    }
    
  });
  // grunt.registerTask('speak',function() {
  //   console.log("Grunt is speaking!")
  // })
  // grunt.registerTask('shout',function(){
  //   console.log("Grunt is shouting!");
  // })
  grunt.loadNpmTasks('grunt-contrib-sass');
  grunt.loadNpmTasks('grunt-contrib-watch');
  //grunt.loadNpmTasks('grunt-http-server');
  grunt.registerTask('default',['sass', 'watch'])
};
        