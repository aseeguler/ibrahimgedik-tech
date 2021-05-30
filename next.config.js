const path = require('path');
const withPWA = require('next-pwa')

module.exports = {
  sassOptions: {
    includePaths: [path.join(__dirname, 'styles')],
  },
  images: {
    domains: ['dl.airtable.com']
  },
  env:{
    id:'local'
  },
  pwa:{
    dest:'public',
  }
}

