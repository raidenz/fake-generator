require('es6-promise').polyfill();
require('isomorphic-fetch');

const defaultHead = {
  method: 'GET',
  headers: {
    'X-Authentication-Token': '3917d80c-5344-4fef-85ad-eeccff0b1617',
    'Accept': 'application/json',
    'Accept-Encoding':' deflate, gzip',
    'X-Authentication-Scope':' Management',
  }
}
fetch('http://13.229.108.111:3030/v1.27.5/v1/man-power', defaultHead)
    .then(res => {
      console.log(res.status + ' -- ' + res.statusText);

        if (res.ok) {
          res.json().then(json => {
          if (json.status === 'success') {
            // console.log(JSON.stringify(json))
            console.log('status: success')
          } else {
          }
          });
      } else {
        // throw Error(res.status)
      }

    })
    .catch(function(err) {
      console.log(new Error(err))
    });
