module.exports = async function(browser, URL, page) {
    const homePath = './images/homePath/';
    const loginPath = './images/loginPath/';

    console.log('Starting Home Module...'.inverse.green.bold);
    // HOME Pages
    await page.waitFor(timeout);
    await page.screenshot({ path: loginPath + 'homePage.png' });
    console.log('New screenshot generated in: '.bold + '/homePath/homePage.png'.bgMagenta.bold);

    // Notification Messages
    await page.waitFor(timeout);
    await page.goto(URL + 'rhn/manager/notification-messages');
    const notificationMsg = await page.$('#spacewalk-content');
    await notificationMsg.screenshot({path: homePath + 'notification-messages.png'});
    console.log('New screenshot generated in: '.bold + '/homePath/notification-messages.png'.bgMagenta.bold);

    // Home : Your Account
    await page.waitFor(timeout);
    await page.goto(URL + 'rhn/account/UserDetails.do');
    const userDetails = await page.$('#spacewalk-content');
    await userDetails.screenshot({path: homePath + 'userDetails.png'});
    console.log('New screenshot generated in: '.bold + '/homePath/userDetails.png'.bgMagenta.bold);

    // Home : Addresses
    await page.waitFor(timeout);
    await page.goto(URL + 'rhn/account/Addresses.do');
    const addresses = await page.$('#spacewalk-content');
    await addresses.screenshot({path: homePath + 'addresses.png'});
    console.log('New screenshot generated in: '.bold + '/homePath/addresses.png'.bgMagenta.bold);

    // Home : Edit Address
    await page.waitFor(timeout);
    await page.goto(URL + '/rhn/account/EditAddress.do?type=M&uid=1');
    const editAddress = await page.$('#spacewalk-content');
    await editAddress.screenshot({path: homePath + 'editAddress.png'});
    console.log('New screenshot generated in: '.bold + '/homePath/editAddress.png'.bgMagenta.bold);

    // Home : Change Email
    await page.waitFor(timeout);
    await page.goto(URL + 'rhn/account/ChangeEmail.do');
    const changeEmail = await page.$('#spacewalk-content');
    await changeEmail.screenshot({path: homePath + 'changeEmail.png'});
    console.log('New screenshot generated in: '.bold + '/homePath/changeEmail.png'.bgMagenta.bold);

    // Home : Account Deactivation
    await page.waitFor(timeout);
    await page.goto(URL + 'rhn/account/AccountDeactivation.do');
    const accountDeactivation = await page.$('#spacewalk-content');
    await accountDeactivation.screenshot({path: homePath + 'accountDeactivation.png'});
    console.log('New screenshot generated in: '.bold + '/homePath/accountDeactivation.png'.bgMagenta.bold);

    // Home: User Preferences
    await page.waitFor(timeout);
    await page.goto(URL + 'rhn/account/UserPreferences.do');
    const userPreferences = await page.$('#spacewalk-content');
    await userPreferences.screenshot({path: homePath + 'userPreferences.png'});
    console.log('New screenshot generated in: '.bold + '/homePath/userPreferences.png'.bgMagenta.bold);

    // Organization:  Configuration Details
    await page.waitFor(timeout);
    await page.goto(URL + 'rhn/multiorg/OrgConfigDetails.do');
    const orgConfigDetails = await page.$('#spacewalk-content');
    await orgConfigDetails.screenshot({path: homePath + 'orgConfigDetails.png'});
    console.log('New screenshot generated in: '.bold + '/homePath/orgConfigDetails.png'.bgMagenta.bold);

    // Organizations : Trusts
    await page.waitFor(timeout);
    await page.goto(URL + 'rhn/multiorg/Organizations.do');
    const organizations = await page.$('#spacewalk-content');
    await organizations.screenshot({path: homePath + 'organizations.png'});
    console.log('New screenshot generated in: '.bold + '/homePath/organizations.png'.bgMagenta.bold);

    // Organization : Configuration Channels
    await page.waitFor(timeout);
    await page.goto(URL + 'rhn/manager/yourorg/custom');
    const orgConfigChannels = await page.$('#spacewalk-content');
    await orgConfigChannels.screenshot({path: homePath + 'orgConfigChannels.png'});
    console.log('New screenshot generated in: '.bold + '/homePath/orgConfigChannels.png'.bgMagenta.bold);
    console.log('Home Module Completed!'.inverse.blue.bold)
};