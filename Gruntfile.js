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
    },
     'http-server': {
 
        'dev': {
            root: './',
 
            // the server port 
            // can also be written as a function, e.g. 
            // port: function() { return 8282; } 
            port: 8282,
 
            // the host ip address 
            // If specified to, for example, "127.0.0.1" the server will 
            // only be available on that ip. 
            // Specify "0.0.0.0" to be available everywhere 
            host: "0.0.0.0",
 
            
            showDir : true,
            autoIndex: true,
 
            // server default file extension 
            ext: "html",
 
            // run in parallel with other tasks 
            runInBackground: false,
 
            // specify a logger function. By default the requests are 
            // sent to stdout. 
            logFn: function(req, res, error) { },
 
            /// Use 'https: true' for default module SSL configuration 
            /// (default state is disabled) 
            
 
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
  grunt.loadNpmTasks('grunt-http-server');
  grunt.registerTask('default',['sass', 'watch'])
};
        