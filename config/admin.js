module.exports = ({ env }) => ({
  auth: {
    secret: env('ADMIN_JWT_SECRET', 'default-admin-jwt-secretqKINuec2IOMRktvEKY4+Fb7o93EUlKDXqZDtOa+dTjc='),
  },
  apiToken: {
    salt: env('API_TOKEN_SALT', 'default-api-token-salth9tRa6+90EcyEnkL79qB2er5deskbGqxvgH8RSm6ld8='),
  },
  transfer: {
    token: {
      salt: env('TRANSFER_TOKEN_SALT', 'default-transfer-token-saltwEs9nX826J34jEPpudA9td7Chel06Jg0AOal3l1FKJ4='),
    },
  },
  flags: {
    nps: env.bool('FLAG_NPS', true),
    promoteEE: env.bool('FLAG_PROMOTE_EE', true),
  },
});
