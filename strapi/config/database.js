module.exports = ({ env }) => ({
  defaultConnection: 'default',
  connections: {
    default: {
      connector: 'mongoose',
      settings: {
        host: env('DATABASE_HOST', process.env.mongoDBHost),
        srv: env.bool('DATABASE_SRV', true),
        port: env.int('DATABASE_PORT', process.env.mongoDBPort),
        database: env('DATABASE_NAME', process.env.mongoDBStrapiDB),
        username: env('DATABASE_USERNAME', process.env.mongoDBUser),
        password: env('DATABASE_PASSWORD', process.env.mongoDBPass),
      },
      options: {
        authenticationDatabase: env('AUTHENTICATION_DATABASE', null),
        ssl: env.bool('DATABASE_SSL', true),
      },
    },
  },
});
