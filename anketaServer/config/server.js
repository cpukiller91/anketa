module.exports = ({ env }) => ({
  host: env('HOST', '92.53.104.150'),
  port: env.int('PORT', 1337),
  admin: {
    auth: {
      secret: env('ADMIN_JWT_SECRET', 'e1e89fa9c1e8800f05478f33e899258e'),
    },
  },
});
