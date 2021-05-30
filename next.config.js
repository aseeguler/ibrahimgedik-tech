const path = require('path');
const { PHASE_DEVELOPMENT_SERVER } = require('next/constants')
const withPWA = require('next-pwa');

const nextConfig = (phase) => {

  const isDev = phase === PHASE_DEVELOPMENT_SERVER

  return {
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
      disable:isDev
    }
  }
}

module.exports = (phase) => withPWA(nextConfig(phase))

// module.exports = {
//   sassOptions: {
//     includePaths: [path.join(__dirname, 'styles')],
//   },
//   images: {
//     domains: ['dl.airtable.com']
//   },
//   env:{
//     id:'local'
//   },
//   pwa:{
//     dest:'public',
//   }
// }

