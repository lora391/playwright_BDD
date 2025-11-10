module.exports= {
  default: {
    require: [
      'stepDefinitions/*.js', // <-- your step definition files
      'hooks/*.js'             // ✅ include all hooks
    ],
    paths: ['features/*.feature'], // <-- your feature 
    // paths:['features/login.feature'], // only run login feature
   
    format: ['progress', // 'progress' = simple console report
            'rerun:@rerun.txt',// ✅ this saves failed scenarios in @rerun.
            'json:reports/cucumber_report.json'     // ✅ Save JSON report here
    ],          
    publishQuiet: true
  },
  rerun: {
    require: [
      'stepDefinitions/*.js',
      'hooks/*.js'
    ],
    format: [
      'progress',
      'json:reports/cucumber_report.json'
    ],
    publishQuiet: true
  }

};
