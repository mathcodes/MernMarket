const config = {
  env: process.env.NODE_ENV || 'production',
  port: process.env.PORT || 3000,
  jwtSecret: process.env.JWT_SECRET || "YOUR_secret_key",
  mongoUri: "mongodb+srv://JonMongoDB:JonMongoDB@devconnection.xzy3k.mongodb.net/mernMarket?retryWrites=true&w=majority",

  stripe_connect_test_client_id: 'acct_1HMuOIE0V7gUNOB0',
  stripe_test_secret_key: 'sk_test_51HMuOIE0V7gUNOB0znZMzbPQ6jOhfkibQhi5tjqMWva3dtC9fgRn0SBVIdpUJ4YFUoognZjggfsT0YyQdhSVMSPw00akGShqF2',
  stripe_test_api_key: 'pk_test_51HMuOIE0V7gUNOB0LbBWOvGjdXVUB8wDFKnMJeoPSfxi5IhLbZ6Zx8LlRo1srdYBji5AG6MLFadoWLPgKO5MLAyl00jOG2QjLM' 
}

export default config
