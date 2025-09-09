export default ({ env }) => ({
  'cloud-cronjob-runner': {
    enabled: true,
    config: {
      apiToken: env('CRONJOB_API_TOKEN', 'default-cronjob-token'),
      apiUrl: env('CRONJOB_API_URL', 'https://api.strapi.io'),
      firstRunWindow: env('CRONJOB_FIRST_RUN_WINDOW', 5), // minutes
    },
  },
});
