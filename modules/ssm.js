
module.exports = async function(browser, URL, page) {
    const systemsSSM = './images/systemsPath/ssm/';

    console.log('Starting System Set Manager Module...'.inverse.green.bold);
    // Systems : SSM Overview
    await page.waitFor(timeout);
    await page.goto(URL + 'rhn/ssm/index.do');
    const ssmOverview = await page.$('#spacewalk-content');
    await ssmOverview.screenshot({path: systemsSSM + 'ssmOverview.png'});
    console.log('New screenshot generated in: '.bold + '/systemsPath/ssmOverview.png'.bgMagenta.bold);

    // Systems : SSM Systems
    await page.waitFor(timeout);
    await page.goto(URL + 'rhn/systems/ssm/ListSystems.do');
    const ssmSystems = await page.$('#spacewalk-content');
    await ssmSystems.screenshot({path: systemsSSM + 'ssmSystems.png'});
    console.log('New screenshot generated in: '.bold + '/systemsPath/ssmSystems.png'.bgMagenta.bold);


    // Systems : SSM Patches/Errata
    await page.waitFor(timeout);
    await page.goto(URL + 'rhn/systems/ssm/ListErrata.do');
    const ssmErrata = await page.$('#spacewalk-content');
    await ssmErrata.screenshot({path: systemsSSM + 'ssmErrata.png'});
    console.log('New screenshot generated in: '.bold + '/systemsPath/ssmErrata.png'.bgMagenta.bold);

    // Systems : SSM Packages
    await page.waitFor(timeout);
    await page.goto(URL + 'rhn/ssm/Packages.do');
    const ssmPackages = await page.$('#spacewalk-content');
    await ssmPackages.screenshot({path: systemsSSM + 'ssmPackages.png'});
    console.log('New screenshot generated in: '.bold + '/systemsPath/ssmPackages.png'.bgMagenta.bold);


    // Systems : SSM Packages Upgrade
    await page.waitFor(timeout);
    await page.goto(URL + 'rhn/ssm/PackageUpgrade.do');
    const ssmPackageUpgrade = await page.$('#spacewalk-content');
    await ssmPackageUpgrade.screenshot({path: systemsSSM + 'ssmPackageUpgrade.png'});
    console.log('New screenshot generated in: '.bold + '/systemsPath/ssmPackageUpgrade.png'.bgMagenta.bold);

    // Systems : SSM Packages Install
    await page.waitFor(timeout);
    await page.goto(URL + 'rhn/ssm/PackageInstall.do');
    const ssmPackageInstall = await page.$('#spacewalk-content');
    await ssmPackageInstall.screenshot({path: systemsSSM + 'ssmPackageInstall.png'});
    console.log('New screenshot generated in: '.bold + '/systemsPath/ssmPackageInstall.png'.bgMagenta.bold);

    // Systems : SSM Packages Remove
    await page.waitFor(timeout);
    await page.goto(URL + 'rhn/ssm/PackageRemove.do');
    const ssmPackageRemove = await page.$('#spacewalk-content');
    await page.waitFor(timeout);
    await ssmPackageRemove.screenshot({path: systemsSSM + 'ssmPackageRemove.png'});
    console.log('New screenshot generated in: '.bold + '/systemsPath/ssmPackageRemove.png'.bgMagenta.bold);

    // Systems : SSM Groups
    await page.waitFor(timeout);
    await page.goto(URL + 'rhn/systems/ssm/groups/Manage.do');
    const ssmGroups = await page.$('#spacewalk-content');
    await ssmGroups.screenshot({path: systemsSSM + 'ssmGroups.png'});
    console.log('New screenshot generated in: '.bold + '/systemsPath/ssmGroups.png'.bgMagenta.bold);

    // Systems : SSM Channels
    await page.waitFor(timeout);
    await page.goto(URL + 'rhn/channel/ssm/ChannelSubscriptions.do');
    const ssmChannels = await page.$('#spacewalk-content');
    await ssmChannels.screenshot({path: systemsSSM + 'ssmChannels.png'});
    console.log('New screenshot generated in: '.bold + '/systemsPath/ssmChannels.png'.bgMagenta.bold);

    // Systems : SSM Configuration
    await page.waitFor(timeout);
    await page.goto(URL + 'rhn/systems/ssm/config/Deploy.do');
    const ssmConfiguration = await page.$('#spacewalk-content');
    await ssmConfiguration.screenshot({path: systemsSSM + 'ssmConfiguration.png'});
    console.log('New screenshot generated in: '.bold + '/systemsPath/ssmConfiguration.png'.bgMagenta.bold);

    // Systems : SSM Configuration - Compare Files
    await page.waitFor(timeout);
    await page.goto(URL + 'rhn/systems/ssm/config/Diff.do');
    const ssmConfigurationCompare = await page.$('#spacewalk-content');
    await ssmConfigurationCompare.screenshot({path: systemsSSM + 'ssmConfigurationCompare.png'});
    console.log('New screenshot generated in: '.bold + '/systemsPath/ssmConfigurationCompare.png'.bgMagenta.bold);

    // Systems : SSM Configuration - Subscribe
    await page.waitFor(timeout);
    await page.goto(URL + 'rhn/systems/ssm/config/Subscribe.do');
    const ssmConfigurationSubscribe = await page.$('#spacewalk-content');
    await ssmConfigurationSubscribe.screenshot({path: systemsSSM + 'ssmConfigurationSubscribe.png'});
    console.log('New screenshot generated in: '.bold + '/systemsPath/ssmConfigurationSubscribe.png'.bgMagenta.bold);

    // Systems : SSM Configuration - Unsubscribe
    await page.waitFor(timeout);
    await page.goto(URL + 'rhn/systems/ssm/config/Unsubscribe.do');
    const ssmConfigurationUnsubscribe = await page.$('#spacewalk-content');
    await ssmConfigurationUnsubscribe.screenshot({path: systemsSSM + 'ssmConfigurationUnsubscribe.png'});
    console.log('New screenshot generated in: '.bold + '/systemsPath/ssmConfigurationUnsubscribe.png'.bgMagenta.bold);

    // Systems : SSM Configuration - Enable Config
    await page.waitFor(timeout);
    await page.goto(URL + 'rhn/systems/ssm/config/Enable.do');
    const ssmConfigurationEnableConfig = await page.$('#spacewalk-content');
    await ssmConfigurationEnableConfig.screenshot({path: systemsSSM + 'ssmConfigurationEnableConfig.png'});
    console.log('New screenshot generated in: '.bold + '/systemsPath/ssmConfigurationEnableConfig.png'.bgMagenta.bold);

    // Systems : SSM Configuration - Provisioning - Power management
    await page.waitFor(timeout);
    await page.goto(URL + 'rhn/systems/ssm/provisioning/PowerManagementConfiguration.do');
    const ssmProvisioningPowerManagementConf = await page.$('#spacewalk-content');
    await ssmProvisioningPowerManagementConf.screenshot({path: systemsSSM + 'ssmProvisioningPowerManagementConf.png'});
    console.log('New screenshot generated in: '.bold + '/systemsPath/ssmProvisioningPowerManagementConf.png'.bgMagenta.bold);

    // Systems : SSM Configuration - Provisioning - Power management
    await page.waitFor(timeout);
    await page.goto(URL + 'rhn/systems/ssm/provisioning/PowerManagementOperations.do');
    const ssmProvisioningPowerManagementOpts = await page.$('#spacewalk-content');
    await ssmProvisioningPowerManagementOpts.screenshot({path: systemsSSM + 'ssmProvisioningPowerManagementOps.png'});
    console.log('New screenshot generated in: '.bold + '/systemsPath/ssmProvisioningPowerManagementOps.png'.bgMagenta.bold);

    // Systems : SSM Configuration - States - Highstate
    await page.waitFor(timeout);
    await page.goto(URL + 'rhn/manager/systems/ssm/highstate');
    const ssmStatesHighstate = await page.$('#spacewalk-content');
    await ssmStatesHighstate.screenshot({path: systemsSSM + 'ssmStatesHighstate.png'});
    console.log('New screenshot generated in: '.bold + '/systemsPath/ssmStatesHighstate.png'.bgMagenta.bold);

    // Systems : SSM Configuration - Misc -Preferences
    await page.waitFor(timeout);
    await page.goto(URL + 'rhn/systems/ssm/misc/Index.do');
    const ssmMiscPreferences = await page.$('#spacewalk-content');
    await ssmMiscPreferences.screenshot({path: systemsSSM + 'ssmMiscPreferences.png'});
    console.log('New screenshot generated in: '.bold + '/systemsPath/ssmMiscPreferences.png'.bgMagenta.bold);


    // Systems : SSM Configuration - Misc - Hardware
    await page.waitFor(timeout);
    await page.goto(URL + 'rhn/systems/ssm/misc/HardwareRefresh.do');
    const ssmMiscHardware = await page.$('#spacewalk-content');
    await ssmMiscHardware.screenshot({path: systemsSSM + 'ssmMiscHardware.png'});
    console.log('New screenshot generated in: '.bold + '/systemsPath/ssmMiscHardware.png'.bgMagenta.bold);

    // Systems : SSM Configuration - Misc - Software
    await page.waitFor(timeout);
    await page.goto(URL + 'rhn/systems/ssm/misc/SoftwareRefresh.do');
    const ssmMiscSoftware = await page.$('#spacewalk-content');
    await ssmMiscSoftware.screenshot({path: systemsSSM + 'ssmMiscSoftware.png'});
    console.log('New screenshot generated in: '.bold + '/systemsPath/ssmMiscSoftware.png'.bgMagenta.bold);

    // Systems : SSM Configuration - Misc - Remote Command
    await page.waitFor(timeout);
    await page.goto(URL + 'rhn/systems/ssm/provisioning/RemoteCommand.do');
    const ssmMiscRemoteCommand = await page.$('#spacewalk-content');
    await ssmMiscRemoteCommand.screenshot({path: systemsSSM + 'ssmMiscRemoteCommand.png'});
    console.log('New screenshot generated in: '.bold + '/systemsPath/ssmMiscRemoteCommand.png'.bgMagenta.bold);

    // Systems : SSM Configuration - Misc - Custom values
    await page.waitFor(timeout);
    await page.goto(URL + 'rhn/systems/ssm/misc/CustomValue.do');
    const ssmMiscCustomValues = await page.$('#spacewalk-content');
    await ssmMiscCustomValues.screenshot({path: systemsSSM + 'ssmMiscCustomValues.png'});
    console.log('New screenshot generated in: '.bold + '/systemsPath/ssmMiscCustomValues.png'.bgMagenta.bold);

    // Systems : SSM Configuration - Misc - Reboot
    await page.waitFor(timeout);
    await page.goto(URL + 'rhn/systems/ssm/misc/RebootSystem.do');
    const ssmMiscReboot = await page.$('#spacewalk-content');
    await ssmMiscReboot.screenshot({path: systemsSSM + 'ssmMiscReboot.png'});
    console.log('New screenshot generated in: '.bold + '/systemsPath/ssmMiscReboot.png'.bgMagenta.bold);

    // Systems : SSM Configuration - Misc - Migrate
    await page.waitFor(timeout);
    await page.goto(URL + '/rhn/systems/ssm/MigrateSystems.do');
    const ssmMiscMigrate = await page.$('#spacewalk-content');
    await ssmMiscMigrate.screenshot({path: systemsSSM + 'ssmMiscMigrate.png'});
    console.log('New screenshot generated in: '.bold + '/systemsPath/ssmMiscMigrate.png'.bgMagenta.bold);

    // Systems : SSM Configuration - Misc - Delete
    await page.waitFor(timeout);
    await page.goto(URL + 'rhn/systems/ssm/DeleteConfirm.do');
    const ssmMiscDelete = await page.$('#spacewalk-content');
    await ssmMiscDelete.screenshot({path: systemsSSM + 'ssmMiscDelete.png'});
    console.log('New screenshot generated in: '.bold + '/systemsPath/ssmMiscDelete.png'.bgMagenta.bold);
    console.log('System Set Manager Module Complete!'.inverse.blue.bold)
};

