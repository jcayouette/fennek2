module.exports = async function(browser, URL, page) {

    const systemsPath = './images/systemsPath/';
    const systemsSystems = './images/systemsPath/systems/';

    console.log('Starting Systems Module...'.inverse.green.bold);
    // Systems : Overview
    await page.waitFor(timeout);
    await page.goto(URL + 'rhn/systems/Overview.do');
    const systemsOverview = await page.$('#spacewalk-content');
    await systemsOverview.screenshot({path: systemsSystems + 'SystemsOverview.png'});
    console.log('New screenshot generated in: '.bold + '/systemsPath/systemsOverview.png'.bgMagenta.bold);

    // Systems : Systems List : All
    await page.waitFor(timeout);
    await page.goto(URL + 'rhn/systems/SystemList.do');
    const systemsListAll = await page.$('#spacewalk-content');
    await systemsListAll.screenshot({path: systemsSystems + 'systemList.png'});
    console.log('New screenshot generated in: '.bold + '/systemsPath/systemList.png'.bgMagenta.bold);

    // Systems : Systems List : Physical
    await page.waitFor(timeout);
    await page.goto(URL + 'rhn/systems/PhysicalList.do');
    const systemsListPhysical = await page.$('#spacewalk-content');
    await systemsListPhysical.screenshot({path: systemsSystems + 'physicalList.png'});
    console.log('New screenshot generated in: '.bold + '/systemsPath/physicalList.png'.bgMagenta.bold);

    // Systems : Systems List : Virtual
    await page.waitFor(timeout);
    await page.goto(URL + 'rhn/systems/VirtualList.do');
    const systemsListVirtual = await page.$('#spacewalk-content');
    await systemsListVirtual.screenshot({path: systemsSystems + 'virtualList.png'});
    console.log('New screenshot generated in: '.bold + '/systemsPath/virtualList.png'.bgMagenta.bold);

    // Systems : Systems List : Unprovisioned
    await page.waitFor(timeout);
    await page.goto(URL + 'rhn/systems/BootstrapSystemList.do');
    const systemsListBootstrap = await page.$('#spacewalk-content');
    await systemsListBootstrap.screenshot({path: systemsSystems + 'bootstrapList.png'});
    console.log('New screenshot generated in: '.bold + '/systemsPath/bootstrapList.png'.bgMagenta.bold);

    // Systems : Systems List : Out of Date
    await page.waitFor(timeout);
    await page.goto(URL + 'rhn/systems/OutOfDate.do');
    const systemsListOutOfDate = await page.$('#spacewalk-content');
    await systemsListOutOfDate.screenshot({path: systemsSystems + 'outOfDateList.png'});
    console.log('New screenshot generated in: '.bold + '/systemsPath/outOfDateList.png'.bgMagenta.bold);

    // Systems : Systems List : Requiring Reboot
    await page.waitFor(timeout);
    await page.goto(URL + 'rhn/systems/RequiringReboot.do');
    const systemsListRequiringReboot = await page.$('#spacewalk-content');
    await systemsListRequiringReboot.screenshot({path: systemsSystems + 'requiringRebootList.png'});
    console.log('New screenshot generated in: '.bold + '/systemsPath/requiringRebootList.png'.bgMagenta.bold);

    // Systems : Systems List : Non Compliant Systems
    await page.waitFor(timeout);
    await page.goto(URL + 'rhn/systems/ExtraPackagesSystems.do');
    const systemsListExtraPackagesSystems = await page.$('#spacewalk-content');
    await systemsListExtraPackagesSystems.screenshot({path: systemsSystems + 'ExtraPackagesSystemsList.png'});
    console.log('New screenshot generated in: '.bold + '/systemsPath/ExtraPackagesSystemsList.png'.bgMagenta.bold);

    // Systems : Systems List : Without System Type
    await page.waitFor(timeout);
    await page.goto(URL + 'rhn/systems/Unentitled.do');
    const systemsListUnintitled = await page.$('#spacewalk-content');
    await systemsListUnintitled.screenshot({path: systemsSystems + 'unentitledSystemsList.png'});
    console.log('New screenshot generated in: '.bold + '/systemsPath/unentitledSystemsList.png'.bgMagenta.bold);

    // Systems : Systems List : Ungrouped
    await page.waitFor(timeout);
    await page.goto(URL + 'rhn/systems/Ungrouped.do');
    const systemsListUngrouped = await page.$('#spacewalk-content');
    await systemsListUngrouped.screenshot({path: systemsSystems + 'ungroupedSystemsList.png'});
    console.log('New screenshot generated in: '.bold + '/systemsPath/ungroupedSystemsList.png'.bgMagenta.bold);

    // Systems : Systems List : Inactive
    await page.waitFor(timeout);
    await page.goto(URL + 'rhn/systems/Ungrouped.do');
    const systemsListInactive = await page.$('#spacewalk-content');
    await systemsListInactive.screenshot({path: systemsSystems + 'inactiveSystemsList.png'});
    console.log('New screenshot generated in: '.bold + '/systemsPath/inactiveSystemsList.png'.bgMagenta.bold);

    // Systems : Systems List : Recently Registered
    await page.waitFor(timeout);
    await page.goto(URL + 'rhn/systems/Registered.do');
    const systemsListRegistered = await page.$('#spacewalk-content');
    await systemsListRegistered.screenshot({path: systemsSystems + 'registeredSystemsList.png'});
    console.log('New screenshot generated in: '.bold + '/systemsPath/registeredSystemsList.png'.bgMagenta.bold);

    // Systems : Systems List : Proxy
    await page.waitFor(timeout);
    await page.goto(URL + 'rhn/systems/ProxyList.do');
    const systemsListProxy = await page.$('#spacewalk-content');
    await systemsListProxy.screenshot({path: systemsSystems + 'proxySystemsList.png'});
    console.log('New screenshot generated in: '.bold + '/systemsPath/proxySystemsList.png'.bgMagenta.bold);

    // Systems : Systems List : Duplicate Systems
    await page.waitFor(timeout);
    await page.goto(URL + 'rhn/systems/DuplicateIPList.do');
    const systemsListDuplicate = await page.$('#spacewalk-content');
    await systemsListDuplicate.screenshot({path: systemsSystems + 'duplicateSystemsList.png'});
    console.log('New screenshot generated in: '.bold + '/systemsPath/duplicateSystemsList.png'.bgMagenta.bold);

    // Systems : Systems List : System Currency Report
    await page.waitFor(timeout);
    await page.goto(URL + 'rhn/systems/SystemCurrency.do');
    const systemsListCurrency = await page.$('#spacewalk-content');
    await systemsListCurrency.screenshot({path: systemsSystems + 'currencySystemsList.png'});
    console.log('New screenshot generated in: '.bold + '/systemsPath/currencySystemsList.png'.bgMagenta.bold);

    // Systems : Systems List : System Types
    await page.waitFor(timeout);
    await page.goto(URL + 'rhn/systems/SystemEntitlements.do');
    const systemsListEntitlements = await page.$('#spacewalk-content');
    await systemsListEntitlements.screenshot({path: systemsSystems + 'entitlementsSystemsList.png'});
    console.log('New screenshot generated in: '.bold + '/systemsPath/entitlementsSystemsList.png'.bgMagenta.bold);

    // Systems : Systems List : System Groups
    await page.waitFor(timeout);
    await page.goto(URL + 'rhn/systems/SystemGroupList.do');
    const systemsListGroups = await page.$('#spacewalk-content');
    await systemsListGroups.screenshot({path: systemsPath + 'groupsSystemsList.png'});
    console.log('New screenshot generated in: '.bold + '/systemsPath/groupsSystemsList.png'.bgMagenta.bold);

    // Systems : Systems List : Edit/create Group
    await page.waitFor(timeout);
    await page.goto(URL + 'rhn/groups/EditGroup.do');
    const editGroup = await page.$('#spacewalk-content');
    await editGroup.screenshot({path: systemsPath + 'editGroup.png'});
    console.log('New screenshot generated in: '.bold + '/systemsPath/editGroup.png'.bgMagenta.bold);
    // Success log
    console.log('Systems Module Completed!'.inverse.blue.bold)
};