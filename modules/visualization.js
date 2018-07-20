module.exports = async function(browser, URL, page) {
    const systemsVisualization = './images/systemsPath/visualization/';

    console.log('Starting Visualization Module...'.inverse.green.bold);
    //Visualization : Filtering
    await page.waitFor(timeout);
    await page.goto(URL+ 'rhn/manager/visualization/virtualization-hierarchy');
    await page.click('.toggle-filter-button');
    const filterWrapper = await page.$('#visualization-filter-wrapper');
    await page.waitFor(timeout);
    await filterWrapper.screenshot({path: systemsVisualization + 'virtFiltering.png'});
    console.log('New screenshot generated in: '.bold + '/systemsPath/virtFiltering.png'.bgMagenta.bold);

    //Visualization : Partitioning Filter
    await page.waitFor(timeout);
    await page.goto(URL+ 'rhn/manager/visualization/virtualization-hierarchy');
    await page.click('.toggle-filter-button');
    await page.click('#partitioning-tab-selector');
    const virtFiltering = await page.$('#visualization-filter-wrapper');
    await page.waitFor(timeout);
    await virtFiltering.screenshot({path: systemsVisualization + 'partitionFiltering.png'});
    console.log('New screenshot generated in: '.bold + '/systemsPath/partitionFiltering.png'.bgMagenta.bold);

    // Visualization : Visualization Hierarchy
    await page.waitFor(timeout);
    await page.goto(URL + 'rhn/manager/visualization/virtualization-hierarchy');
    const virtualizationHierarchy = await page.$('#spacewalk-content');
    await virtualizationHierarchy.screenshot({path: systemsVisualization + 'visualizationHierarchy.png'});
    console.log('New screenshot generated in: '.bold + '/systemsPath/virtualizationHierarchy.png'.bgMagenta.bold);

    // Visualization : Proxy Hierarchy
    await page.waitFor(timeout);
    await page.goto(URL + 'rhn/manager/visualization/proxy-hierarchy');
    const proxyHierarchy = await page.$('#spacewalk-content');
    await proxyHierarchy.screenshot({path: systemsVisualization + 'proxyHierarchy.png'});
    console.log('New screenshot generated in: '.bold + '/systemsPath/proxyHierarchy.png'.bgMagenta.bold);

    // Visualization : Systems Grouping
    await page.waitFor(timeout);
    await page.goto(URL + 'rhn/manager/visualization/systems-with-managed-groups');
    const systemsWithManagedGroups = await page.$('#spacewalk-content');
    await systemsWithManagedGroups.screenshot({path: systemsVisualization + 'systems-with-managed-groups.png'});
    console.log('New screenshot generated in: '.bold + '/systemsPath/systemsWithManagedGroups.png'.bgMagenta.bold);
    console.log('Visualization Module Complete!'.inverse.blue.bold)
};