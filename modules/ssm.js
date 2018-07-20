

export default async function ssmPages() {
    // Systems : SSM Overview
    await page.waitFor(timeout);
    await page.goto(URL + 'rhn/ssm/index.do');
    const ssmOverview = await page.$('#spacewalk-content');
    await ssmOverview.screenshot({path: systemsSSM + 'ssmOverview.png'});
    console.log('New screenshot generated in: ' + '/systemsPath/ssmOverview.png');

    // Systems : SSM Systems
    await page.waitFor(timeout);
    await page.goto(URL + 'rhn/systems/ssm/ListSystems.do');
    const ssmSystems = await page.$('#spacewalk-content');
    await ssmSystems.screenshot({path: systemsSSM + 'ssmSystems.png'});
    console.log('New screenshot generated in: ' + '/systemsPath/ssmSystems.png');
}

