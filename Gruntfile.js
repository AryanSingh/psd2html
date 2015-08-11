module.exports = function(grunt){
  grunt.initConfig({
    sass: {                              // Task 
      dist: {                            // Target 
        files: {                         // Dictionary of files 
          'styles.css': 'styles.scss',       
        }
      }
    },
    watch: {
      css: {
        files: ['*.scss'],
        tasks: ['sass'],
        
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
  grunt.registerTask('default',['sass', 'watch'])
};
        