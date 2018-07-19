/**
 * ----------------------------------------------------------------------------------------------------------
 * '#######:'########:'##::: ##:'##::: ##:'########:'##:::'##:  '####:'####:
 *  #.....:: ##.....:: ###:: ##: ###:: ##: ##.....:: ##::'##::  . ##::. ##::
 *  #::::::: ##::::::: ####: ##: ####: ##: ##::::::: ##:'##:::  : ##::: ##::
 *  #####::: ######::: ## ## ##: ## ## ##: ######::: #####::::  : ##::: ##::
 *  #...:::: ##...:::: ##. ####: ##. ####: ##...:::: ##. ##:::  : ##::: ##::
 *  #::::::: ##::::::: ##:. ###: ##:. ###: ##::::::: ##:. ##::  : ##::: ##::
 *  #::::::: ########: ##::. ##: ##::. ##: ########: ##::. ##:  '####:'####:
 *..::::::::........::..::::..::..::::..::........::..::::..::  ....::....::
 *-----------------------------------------------------------------------------------------------------------
 *
 * Joseph Cayouette, SUSE Linux
 *
 * July 2018
 *
 * This app represents a much needed migration and update from phantomjs/casperjs to chrome headless
 * with the puppeteer API. This application runs using nodejs 6+, Puppeteer API and Chrome headless.
 * Fennek automatically logs into SUSE Manager/Uyuni, navigates and generates images of all important
 * page elements for our enterprise user manuals.
 *
 */

const puppeteer = require('puppeteer');

// SUSE Manager Server URL
const URL = 'https://headless-testingserver.tf.local/';

// Images are stored in the following paths. These paths match the WebUI.
const loginPath = './images/loginPath/';
const homePath = './images/homePath/';
const systemsPath = './images/systemsPath/';
const systemsSystems = './images/systemsPath/systems/';
const systemsSSM = './images/systemsPath/ssm/';
const systemsVisualization = './images/systemsPath/visualization/';
const systemsAutoinstallation = './images/systemsPath/autoinstallation';

/**
 * =============================================
 * GLOBAL CONFIGURATION
 * =============================================
  */

// User info for SUSE Manager/Uyuni
global.user = 'admin';
global.pass = 'admin';

// Adjust the timeouts if chrome hangs.
global.timeout = 3000;
global.big_timeout = 100000;

/**
 * Start browser and run chrome headless with the puppeteer API. You can run headless or via GUI.
 */

(async () => {
    const browser = await puppeteer.launch({headless: false, ignoreHTTPSErrors: true});
    const page = await browser.newPage();
    await page.setViewport({ width: 1920, height: 1080 });

    // Capture login Page
    await page.goto(URL);
    await page.screenshot({path: loginPath + 'loginPage.png'});
    console.log('New screenshot generated in: ' + '/loginPath/loginPage.png');

    // Login to SUSE Manager/Uyuni
    await page.type('#username-field', user);
    await page.type('#password-field', pass);
    await page.click('#login');


    /**
     * HOME
     */
    // Wait for page to load then capture home overview page
    await page.waitFor(timeout);
    await page.screenshot({ path: loginPath + 'homePage.png' });
    console.log('New screenshot generated in: ' + '/homePath/homePage.png');

    // Notification Messages
    await page.waitFor(timeout);
    await page.goto(URL + 'rhn/manager/notification-messages');
    const notificationMsg = await page.$('#spacewalk-content');
    await notificationMsg.screenshot({path: homePath + 'notification-messages.png'});
    console.log('New screenshot generated in: ' + '/homePath/notification-messages.png');

    // Home : Your Account
    await page.waitFor(timeout);
    await page.goto(URL + 'rhn/account/UserDetails.do');
    const userDetails = await page.$('#spacewalk-content');
    await userDetails.screenshot({path: homePath + 'userDetails.png'});
    console.log('New screenshot generated in: ' + '/homePath/userDetails.png');

    // Home : Addresses
    await page.waitFor(timeout);
    await page.goto(URL + 'rhn/account/Addresses.do');
    const addresses = await page.$('#spacewalk-content');
    await addresses.screenshot({path: homePath + 'addresses.png'});
    console.log('New screenshot generated in: ' + '/homePath/addresses.png');

    // Home : Edit Address
    await page.waitFor(timeout);
    await page.goto(URL + '/rhn/account/EditAddress.do?type=M&uid=1');
    const editAddress = await page.$('#spacewalk-content');
    await editAddress.screenshot({path: homePath + 'editAddress.png'});
    console.log('New screenshot generated in: ' + '/homePath/editAddress.png');

    // Home : Change Email
    await page.waitFor(timeout);
    await page.goto(URL + 'rhn/account/ChangeEmail.do');
    const changeEmail = await page.$('#spacewalk-content');
    await changeEmail.screenshot({path: homePath + 'changeEmail.png'});
    console.log('New screenshot generated in: ' + '/homePath/changeEmail.png');

    // Home : Account Deactivation
    await page.waitFor(timeout);
    await page.goto(URL + 'rhn/account/AccountDeactivation.do');
    const accountDeactivation = await page.$('#spacewalk-content');
    await accountDeactivation.screenshot({path: homePath + 'accountDeactivation.png'});
    console.log('New screenshot generated in: ' + '/homePath/accountDeactivation.png');

    // Home: User Preferences
    await page.waitFor(timeout);
    await page.goto(URL + 'rhn/account/UserPreferences.do');
    const userPreferences = await page.$('#spacewalk-content');
    await userPreferences.screenshot({path: homePath + 'userPreferences.png'});
    console.log('New screenshot generated in: ' + '/homePath/userPreferences.png');

    // Organization:  Configuration Details
    await page.waitFor(timeout);
    await page.goto(URL + 'rhn/multiorg/OrgConfigDetails.do');
    const orgConfigDetails = await page.$('#spacewalk-content');
    await orgConfigDetails.screenshot({path: homePath + 'orgConfigDetails.png'});
    console.log('New screenshot generated in: ' + '/homePath/orgConfigDetails.png');

    // Organizations : Trusts
    await page.waitFor(timeout);
    await page.goto(URL + 'rhn/multiorg/Organizations.do');
    const organizations = await page.$('#spacewalk-content');
    await organizations.screenshot({path: homePath + 'organizations.png'});
    console.log('New screenshot generated in: ' + '/homePath/organizations.png');

    // Organization : Configuration Channels
    await page.waitFor(timeout);
    await page.goto(URL + 'rhn/manager/yourorg/custom');
    const orgConfigChannels = await page.$('#spacewalk-content');
    await orgConfigChannels.screenshot({path: homePath + 'orgConfigChannels.png'});
    console.log('New screenshot generated in: ' + '/homePath/orgConfigChannels.png');



    /**
     * SYSTEMS
     */
    // Systems : Overview
    await page.waitFor(timeout);
    await page.goto(URL + 'rhn/systems/Overview.do');
    const systemsOverview = await page.$('#spacewalk-content');
    await systemsOverview.screenshot({path: systemsSystems + 'SystemsOverview.png'});
    console.log('New screenshot generated in: ' + '/systemsPath/systemsOverview.png');

    // Systems : Systems List : All
    await page.waitFor(timeout);
    await page.goto(URL + 'rhn/systems/SystemList.do');
    const systemsListAll = await page.$('#spacewalk-content');
    await systemsListAll.screenshot({path: systemsSystems + 'systemList.png'});
    console.log('New screenshot generated in: ' + '/systemsPath/systemList.png');

    // Systems : Systems List : Physical
    await page.waitFor(timeout);
    await page.goto(URL + 'rhn/systems/PhysicalList.do');
    const systemsListPhysical = await page.$('#spacewalk-content');
    await systemsListPhysical.screenshot({path: systemsSystems + 'physicalList.png'});
    console.log('New screenshot generated in: ' + '/systemsPath/physicalList.png');

    // Systems : Systems List : Virtual
    await page.waitFor(timeout);
    await page.goto(URL + 'rhn/systems/VirtualList.do');
    const systemsListVirtual = await page.$('#spacewalk-content');
    await systemsListVirtual.screenshot({path: systemsSystems + 'virtualList.png'});
    console.log('New screenshot generated in: ' + '/systemsPath/virtualList.png');

    // Systems : Systems List : Unprovisioned
    await page.waitFor(timeout);
    await page.goto(URL + 'rhn/systems/BootstrapSystemList.do');
    const systemsListBootstrap = await page.$('#spacewalk-content');
    await systemsListBootstrap.screenshot({path: systemsSystems + 'bootstrapList.png'});
    console.log('New screenshot generated in: ' + '/systemsPath/bootstrapList.png');

    // Systems : Systems List : Out of Date
    await page.waitFor(timeout);
    await page.goto(URL + 'rhn/systems/OutOfDate.do');
    const systemsListOutOfDate = await page.$('#spacewalk-content');
    await systemsListOutOfDate.screenshot({path: systemsSystems + 'outOfDateList.png'});
    console.log('New screenshot generated in: ' + '/systemsPath/outOfDateList.png');

    // Systems : Systems List : Requiring Reboot
    await page.waitFor(timeout);
    await page.goto(URL + 'rhn/systems/RequiringReboot.do');
    const systemsListRequiringReboot = await page.$('#spacewalk-content');
    await systemsListRequiringReboot.screenshot({path: systemsSystems + 'requiringRebootList.png'});
    console.log('New screenshot generated in: ' + '/systemsPath/requiringRebootList.png');

    // Systems : Systems List : Non Compliant Systems
    await page.waitFor(timeout);
    await page.goto(URL + 'rhn/systems/ExtraPackagesSystems.do');
    const systemsListExtraPackagesSystems = await page.$('#spacewalk-content');
    await systemsListExtraPackagesSystems.screenshot({path: systemsSystems + 'ExtraPackagesSystemsList.png'});
    console.log('New screenshot generated in: ' + '/systemsPath/ExtraPackagesSystemsList.png');

    // Systems : Systems List : Without System Type
    await page.waitFor(timeout);
    await page.goto(URL + 'rhn/systems/Unentitled.do');
    const systemsListUnintitled = await page.$('#spacewalk-content');
    await systemsListUnintitled.screenshot({path: systemsSystems + 'unentitledSystemsList.png'});
    console.log('New screenshot generated in: ' + '/systemsPath/unentitledSystemsList.png');

    // Systems : Systems List : Ungrouped
    await page.waitFor(timeout);
    await page.goto(URL + 'rhn/systems/Ungrouped.do');
    const systemsListUngrouped = await page.$('#spacewalk-content');
    await systemsListUngrouped.screenshot({path: systemsSystems + 'ungroupedSystemsList.png'});
    console.log('New screenshot generated in: ' + '/systemsPath/ungroupedSystemsList.png');

    // Systems : Systems List : Inactive
    await page.waitFor(timeout);
    await page.goto(URL + 'rhn/systems/Ungrouped.do');
    const systemsListInactive = await page.$('#spacewalk-content');
    await systemsListInactive.screenshot({path: systemsSystems + 'inactiveSystemsList.png'});
    console.log('New screenshot generated in: ' + '/systemsPath/inactiveSystemsList.png');

    // Systems : Systems List : Recently Registered
    await page.waitFor(timeout);
    await page.goto(URL + 'rhn/systems/Registered.do');
    const systemsListRegistered = await page.$('#spacewalk-content');
    await systemsListRegistered.screenshot({path: systemsSystems + 'registeredSystemsList.png'});
    console.log('New screenshot generated in: ' + '/systemsPath/registeredSystemsList.png');

    // Systems : Systems List : Proxy
    await page.waitFor(timeout);
    await page.goto(URL + 'rhn/systems/ProxyList.do');
    const systemsListProxy = await page.$('#spacewalk-content');
    await systemsListProxy.screenshot({path: systemsSystems + 'proxySystemsList.png'});
    console.log('New screenshot generated in: ' + '/systemsPath/proxySystemsList.png');

    // Systems : Systems List : Duplicate Systems
    await page.waitFor(timeout);
    await page.goto(URL + 'rhn/systems/DuplicateIPList.do');
    const systemsListDuplicate = await page.$('#spacewalk-content');
    await systemsListDuplicate.screenshot({path: systemsSystems + 'duplicateSystemsList.png'});
    console.log('New screenshot generated in: ' + '/systemsPath/duplicateSystemsList.png');

    // Systems : Systems List : System Currency Report
    await page.waitFor(timeout);
    await page.goto(URL + 'rhn/systems/SystemCurrency.do');
    const systemsListCurrency = await page.$('#spacewalk-content');
    await systemsListCurrency.screenshot({path: systemsSystems + 'currencySystemsList.png'});
    console.log('New screenshot generated in: ' + '/systemsPath/currencySystemsList.png');

    // Systems : Systems List : System Types
    await page.waitFor(timeout);
    await page.goto(URL + 'rhn/systems/SystemEntitlements.do');
    const systemsListEntitlements = await page.$('#spacewalk-content');
    await systemsListEntitlements.screenshot({path: systemsSystems + 'entitlementsSystemsList.png'});
    console.log('New screenshot generated in: ' + '/systemsPath/entitlementsSystemsList.png');

    // Systems : Systems List : System Groups
    await page.waitFor(timeout);
    await page.goto(URL + 'rhn/systems/SystemGroupList.do');
    const systemsListGroups = await page.$('#spacewalk-content');
    await systemsListGroups.screenshot({path: systemsPath + 'groupsSystemsList.png'});
    console.log('New screenshot generated in: ' + '/systemsPath/groupsSystemsList.png');

    // Systems : Systems List : Edit/create Group
    await page.waitFor(timeout);
    await page.goto(URL + 'rhn/groups/EditGroup.do');
    const editGroup = await page.$('#spacewalk-content');
    await editGroup.screenshot({path: systemsPath + 'editGroup.png'});
    console.log('New screenshot generated in: ' + '/systemsPath/editGroup.png');



    /**
     * SYSTEMS SSM
     */
    // Systems : Systems List : SSM Overview
    await page.waitFor(timeout);
    await page.goto(URL + 'rhn/ssm/index.do');
    const ssmOverview = await page.$('#spacewalk-content');
    await ssmOverview.screenshot({path: systemsSSM + 'ssmOverview.png'});
    console.log('New screenshot generated in: ' + '/systemsPath/ssmOverview.png');

    // Systems : Systems List : SSM Systems
    await page.waitFor(timeout);
    await page.goto(URL + 'rhn/systems/ssm/ListSystems.do');
    const ssmSystems = await page.$('#spacewalk-content');
    await ssmSystems.screenshot({path: systemsSSM + 'ssmSystems.png'});
    console.log('New screenshot generated in: ' + '/systemsPath/ssmSystems.png');

    // Systems : Systems List : SSM Patches/Errata
    await page.waitFor(timeout);
    await page.goto(URL + 'rhn/systems/ssm/ListErrata.do');
    const ssmErrata = await page.$('#spacewalk-content');
    await ssmErrata.screenshot({path: systemsSSM + 'ssmErrata.png'});
    console.log('New screenshot generated in: ' + '/systemsPath/ssmErrata.png');

    // Systems : Systems List : SSM Packages
    await page.waitFor(timeout);
    await page.goto(URL + 'rhn/ssm/Packages.do');
    const ssmPackages = await page.$('#spacewalk-content');
    await ssmPackages.screenshot({path: systemsSSM + 'ssmPackages.png'});
    console.log('New screenshot generated in: ' + '/systemsPath/ssmPackages.png');


    /**
     * SYSTEMS Visualization
     */
    //Visualization : Filtering
    await page.waitFor(timeout);
    await page.goto(URL+ 'rhn/manager/visualization/virtualization-hierarchy');
    await page.click('.toggle-filter-button');
    const filterWrapper = await page.$('#visualization-filter-wrapper');
    await page.waitFor(timeout);
    await filterWrapper.screenshot({path: systemsVisualization + 'virtFiltering.png'});
    console.log('New screenshot generated in: ' + '/systemsPath/virtFiltering.png');

    //Visualization : Partitioning Filter
    await page.waitFor(timeout);
    await page.goto(URL+ 'rhn/manager/visualization/virtualization-hierarchy');
    await page.click('.toggle-filter-button');
    await page.click('#partitioning-tab-selector');
    const virtFiltering = await page.$('#visualization-filter-wrapper');
    await page.waitFor(timeout);
    await virtFiltering.screenshot({path: systemsVisualization + 'partitionFiltering.png'});
    console.log('New screenshot generated in: ' + '/systemsPath/partitionFiltering.png');

    // Visualization : Visualization Hierarchy
    await page.waitFor(timeout);
    await page.goto(URL + 'rhn/manager/visualization/virtualization-hierarchy');
    const virtualizationHierarchy = await page.$('#spacewalk-content');
    await virtualizationHierarchy.screenshot({path: systemsVisualization + 'visualizationHierarchy.png'});
    console.log('New screenshot generated in: ' + '/systemsPath/virtualizationHierarchy.png');

    // Visualization : Proxy Hierarchy
    await page.waitFor(timeout);
    await page.goto(URL + 'rhn/manager/visualization/proxy-hierarchy');
    const proxyHierarchy = await page.$('#spacewalk-content');
    await proxyHierarchy.screenshot({path: systemsVisualization + 'proxyHierarchy.png'});
    console.log('New screenshot generated in: ' + '/systemsPath/proxyHierarchy.png');

    // Visualization : Systems Grouping
    await page.waitFor(timeout);
    await page.goto(URL + 'rhn/manager/visualization/systems-with-managed-groups');
    const systemsWithManagedGroups = await page.$('#spacewalk-content');
    await systemsWithManagedGroups.screenshot({path: systemsVisualization + 'systems-with-managed-groups.png'});
    console.log('New screenshot generated in: ' + '/systemsPath/systemsWithManagedGroups.png');







    browser.close();
    console.log('Image capture success!')





})();
