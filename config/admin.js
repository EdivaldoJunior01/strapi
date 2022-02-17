module.exports = ({ env }) => ({
  auth: {
    secret: env('ADMIN_JWT_SECRET', '2823ec0348ada57256cd66e02ac5d23b'),
  },
});
