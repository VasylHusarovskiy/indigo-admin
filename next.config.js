const withImages = require('next-images')

module.exports = withImages()
module.exports = {
  env: {
    API_KEY: 'AIzaSyCQrExkLx42jowogbpXVr-JFA7O5YfqWYY',
    AUTH_DOMAIN: 'usus-af814.firebaseapp.com',
    DATABASE_URL: 'https://usus-af814.firebaseio.com',
    PROJECT_ID: 'usus-af814',
    STORAGE_BUCKET: 'usus-af814.appspot.com',
    MESSAGING_SENDING_ID: '809019806662',
    APP_ID: '1:809019806662:web:71a924e5d16c49335318c7',
    MEASUREMENT_ID: 'G-DZVW88E5KY'
  }
}
// module.exports = {
//   webpack: (config, { isServer }) => {
//     if (isServer) {
//       require('./scripts/siteMapCreator')
//     }
//     return config;
//   }
// };
