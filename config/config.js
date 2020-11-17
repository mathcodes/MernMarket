const config = {
  env: process.env.NODE_ENV || 'production',
  port: process.env.PORT || 3000,
  jwtSecret: process.env.JWT_SECRET || "YOUR_secret_key",
  mongoUri: 'JonMongoDB:JonMongoDB@devconnection.xzy3k.mongodb.net/mernMarket?retryWrites=true&w=majority' ||
    process.env.MONGO_HOST ||
    'mongodb://' + (process.env.IP || 'localhost') + ':' +
    (process.env.MONGO_PORT || '27017') +
    '/mernproject',
  stripe_connect_test_client_id: 'YOUR_stripe_connect_test_client',
  stripe_test_secret_key: 'YOUR_stripe_test_secret_key',
  stripe_test_api_key: 'YOUR_stripe_test_api_key'
}

export default config
