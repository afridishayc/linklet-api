const env = process.env.NODE_ENV || 'development'

if (env === 'development') {
  require('dotenv').config()
  process.env.MONGO_URL = 'mongodb://localhost/links'
} else if (env === 'test') {
  require('dotenv').config()
  process.env.MONGO_URL = 'mongodb://localhost/links-test'
}

console.log(`**** Running in ${env} environment!. ****`)
