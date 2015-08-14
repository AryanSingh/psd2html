module.exports = function(grunt){
  grunt.initConfig({
    sass: {                              // Task 
      dist: {                            // Target 
        files: {                         // Dictionary of files 
          'assets/stylesheets/common.css': 'assets/stylesheets/src/common.scss',
          'assets/stylesheets/land.css': 'assets/stylesheets/src/land.scss',
          'assets/stylesheets/about.css': 'assets/stylesheets/src/about.scss',
          'assets/stylesheets/how_it_works.css':'assets/stylesheets/src/how_it_works.scss'     
        }
      }
    },
    watch: {
      css: {
        files: ['assets/stylesheets/src/*.scss'],
        tasks: ['sass' ,'cssmin']
        
      },
    },
    // concat: {
    //   css: {
    //     src: ['assets/stylesheets/common.css', 'assets/stylesheets/land.css'],
    //     dest: 'assets/stylesheets/app.css',
    //   }  
    // },
    cssmin: {
      
      target: {
        files: {
          'assets/stylesheets/app.min.css': 
          [
          'assets/stylesheets/common.css', 
          'assets/stylesheets/land.css',
          'assets/stylesheets/about.css',
          'assets/stylesheets/how_it_works.css'
          ]
        }
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
  // grunt.loadNpmTasks('grunt-contrib-concat');
  grunt.loadNpmTasks('grunt-contrib-cssmin');
  //grunt.loadNpmTasks('grunt-http-server');
  grunt.registerTask('default',['sass', 'cssmin', 'watch'])
};
        