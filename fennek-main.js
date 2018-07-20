/**
 *
 * '#######:'########:'##::: ##:'##::: ##:'########:'##:::'##:  '####:'####:
 *  #.....:: ##.....:: ###:: ##: ###:: ##: ##.....:: ##::'##::  . ##::. ##::
 *  #::::::: ##::::::: ####: ##: ####: ##: ##::::::: ##:'##:::  : ##::: ##::
 *  #####::: ######::: ## ## ##: ## ## ##: ######::: #####::::  : ##::: ##::
 *  #...:::: ##...:::: ##. ####: ##. ####: ##...:::: ##. ##:::  : ##::: ##::
 *  #::::::: ##::::::: ##:. ###: ##:. ###: ##::::::: ##:. ##::  : ##::: ##::
 *  #::::::: ########: ##::. ##: ##::. ##: ########: ##::. ##:  '####:'####:
 *..::::::::........::..::::..::..::::..::........::..::::..::  ....::....::
 *
 * Joseph Cayouette, SUSE Linux
 * July 2018
 * This app represents a much needed migration and update from phantomjs/casperjs to chrome headless
 * with the puppeteer API. This application runs using nodejs 6+, Puppeteer API and Chrome headless.
 * Fennek automatically logs into SUSE Manager/Uyuni, navigates and generates images of all important
 * page elements for our enterprise user manuals.
 */

const puppeteer = require('puppeteer');
const ssm = require('./modules/ssm.js');
const home = require('./modules/home.js');
const systems = require('./modules/systems.js');
const visualization = require('./modules/visualization');

// SUSE Manager Server URL
const URL = 'https://headless-testingserver.tf.local/';

// Images are stored in the following paths. These paths match the WebUI.
const loginPath = './images/loginPath/';

const systemsAutoinstallation = './images/systemsPath/autoinstallation';


/**
 * Global configuration options.
  */

// User info for SUSE Manager/Uyuni
global.user = 'admin';
global.pass = 'admin';

// Adjust the timeouts if chrome hangs.
global.timeout = 3000;
global.big_timeout = 100000;

// Terminal Colors
const colors = require('colors');

// Start Headless using Puppeteer API
(async () => {

    const browser = await puppeteer.launch({headless: true, ignoreHTTPSErrors: true});
    const page = await browser.newPage();
    await page.setViewport({ width: 1920, height: 1200 });
    console.log('Starting Capture...'.inverse.blue.bold);

    // Capture login Page
    console.log('Following the global URL setting for SUSE Manager/Uyuni...'.inverse.green.bold);
    await page.goto(URL);
    await page.screenshot({path: loginPath + 'loginPage.png'});
    console.log('New screenshot generated in: '.bold + '/loginPath/loginPage.png'.bgMagenta.bold);


    // Login to SUSE Manager/Uyuni
    console.log('Logging into SUSE Manager/Uyuni...'.inverse.blue.bold);
    await page.type('#username-field', user);
    await page.type('#password-field', pass);
    await page.click('#login');

    await home(browser, URL, page);
    await systems(browser, URL, page);
    await ssm(browser, URL, page);
    await visualization(browser, URL, page);

    browser.close();
    console.log('Image capture complete!'.inverse.green.bold);

})();
