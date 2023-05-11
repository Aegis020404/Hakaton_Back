module.exports = ({ env }) => ({
  // host: env('HOST', '0.0.0.0'),
  // port: env.int('PORT', 1337),
  "users-permissions": {
    jwtSecret: env("JWT_SECRET", "defaultSecret"),
    // Other configuration options...
  },
  app: {
    // keys: env.array('APP_KEYS'),
    keys: ['myKeyA', 'myKeyB'],
  },
  webhooks: {
    populateRelations: env.bool('WEBHOOKS_POPULATE_RELATIONS', false),
  },
});
