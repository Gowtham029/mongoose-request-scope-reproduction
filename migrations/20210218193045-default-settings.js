const settings = [];

const ShippingPage = {
  settingsName: 'Shipping Details',
  page: 'Shipping',
  values: {
    freeShipping: false,
    chargeShipping: true,
    enableShipping: false,
  },
};
settings.push(ShippingPage);

const BannerPage = {
  settingsName: 'Test Banner',
  page: 'Presentation',
  values: {
    themesSelect: false,
    loginPages: true,
    products: 'test',
  },
};

settings.push(BannerPage);

const GeneralPublic = {
  settingsName: 'Public Store',
  page: 'General',
  values: {
    isPublic: true,
  },
};

settings.push(GeneralPublic);

const GeneralPublicPrice = {
  settingsName: 'Display Prices to Public',
  page: 'General',
  values: {
    displayPrice: true,
  },
};

settings.push(GeneralPublicPrice);

const GeneralSelfRegistration = {
  settingsName: 'Allow Self Registration',
  page: 'General',
  values: {
    allowSelfRegistration: false,
  },
};

settings.push(GeneralSelfRegistration);

const GeneralTabName = {
  settingsName: 'Tab Name',
  page: 'General',
  values: {
    tabName: 'Antera Demo',
  },
};

settings.push(GeneralTabName);

const GeneralLogo = {
  settingsName: 'Public Store',
  page: 'General',
  values: {
    showLogo: true,
    logoHeight: 60,
  },
};

settings.push(GeneralLogo);

module.exports = {
  async up(db, client) {
    await db.collection('settings').insertMany(settings);
  },

  async down(db, client) {
  await db.collection('settings').deleteMany({ page: 'General' });
  await db.collection('settings').deleteMany({ page: 'Shipping' });
  await db.collection('settings').deleteMany({ page: 'Presentation' });
  },
};
