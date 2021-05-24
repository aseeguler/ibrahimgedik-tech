const path = require('path');

module.exports = {
  sassOptions: {
    includePaths: [path.join(__dirname, 'styles')],
  },
  images: {
    domains: ['dl.airtable.com']
  },
  env:{
    id:'local'
  }
}

