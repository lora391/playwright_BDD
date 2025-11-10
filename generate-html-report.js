const reporter = require('cucumber-html-reporter');
const fs = require('fs');

const reportOptions = {
  theme: 'bootstrap', // other options: 'hierarchy', 'foundation', 'simple'
  jsonFile: 'reports/cucumber_report.json',
  output: 'reports/cucumber_report.html',
  reportSuiteAsScenarios: true,
  launchReport: true, // automatically open in browser
  metadata: {
    "App Version": "1.0.0",
    "Test Environment": "STAGING",
    "Browser": "Chromium",
    "Platform": process.platform,
    "Executed": "Local"
  }
};

// Ensure the report file exists before trying to generate
if (fs.existsSync('reports/cucumber_report.json')) {
  reporter.generate(reportOptions);
  console.log('✅ HTML report generated: reports/cucumber_report.html');
} else {
  console.error('❌ JSON report not found. Run tests first!');
}
