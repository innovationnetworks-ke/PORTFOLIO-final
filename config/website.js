const meta = {
  // Metadata
  siteTitle: 'Ngugi David- Full Stack software Developer',
  siteDescription:
    'Ngugi David - A Full stack software developer skilled in.',
  siteTitleAlt: 'Ngugi David',
  siteShortName: 'Ngugi david',
  siteUrl: 'https://innovationnetworks.github.io', // No trailing slash!
};

const social = {
  siteLogo: `src/static/logo.svg`,
  siteBanner: `${meta.siteUrl}/images/social-banner.png`,
  twitter: '@DavyVynes',
};

const website = {
  ...meta,
  ...social,
  disqusShortName: 'Ngugi-david',
  googleAnalyticsID: 'UA-119972196-1',
  // Manifest
  themeColor: '#6D83F2',
  backgroundColor: '#6D83F2',
};

module.exports = website;
