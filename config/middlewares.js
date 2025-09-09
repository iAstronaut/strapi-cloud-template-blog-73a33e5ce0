export default [
  'strapi::errors',
  {
    name: 'strapi::favicon',
    config: {
      path: './public/uploads/favicon.ico',
    },
  },
  'strapi::public',
  {
    name: 'strapi::cors',
    config: {
      enabled: true,
      headers: '*',
    },
  },
  'strapi::poweredBy',
  'strapi::logger',
  'strapi::query',
  'strapi::body',
  'strapi::session',
  'strapi::security',
];