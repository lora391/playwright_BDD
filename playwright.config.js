// @ts-check
import { defineConfig, devices } from '@playwright/test';
import { trace } from 'console';



/**
 * @see https://playwright.dev/docs/test-configuration
 */
/*export default defineConfig({
  testDir: './tests',
  timeout: 40*1000, //40 sec, default is 30s
  expect:{
    timeout:40*1000, //expected time under which result should load
  },
  use:
  {
    browserName:'chromium',
  },

});*/
const config=({
  testDir: './tests',
  timeout: 30*1000, //40 sec, default is 30s
  
  //fullyParallel:true, //parallel mode off
  //workers:2, //run with one worker
 
  retries:1 , // retry failed test upto 2 times 
  
  expect:{
    timeout:20*1000, //expected time under which result should load
 
  },

 // reporter: [
 //   ['list'], // shows progress in terminal
 //   ['allure-playwright'], // generates Allure results
//['html',{ outputFolder: 'playwrightHtml-report'}], //generate html report
 // ],
  use:
  {
    browserName:'chromium',
    headless: false,
   // trace: 'retain-on-failure',
    //screenshot: 'retain-on-failure',
    //video:'retain-on-failure'
  },

});
module.exports=config;

