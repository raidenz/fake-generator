import fetch from 'isomorphic-fetch'

const serverEndpoint = 'http://localhost'

const header = {
    'Content-Type': 'application/json',
    'X-BLUEWHALE-DEBUGGER': 1,
}

const initialSetting = {
  serverEndpoint: 'http://localhost',
  header: header,
  token: ''
}

const generate = (setting) => {
  const {api, header, serverEndpoint} = setting
  fetch(`${serverEndpoint}${api}`, header)
    .then(res => {
      console.log(res.status + ' -- ' + res.statusText);
      // console.log(res)
      // ====================

          // res.json().then(json => {
          //   if (json.status === 'success') {
          //     // console.log('status: success')
          //   } else {
          //     console.log(JSON.stringify(json))
          //   }
          // });

      // ====================
      if (res.ok) {
          res.json().then(json => {
            if (json.status === 'success') {
              // console.log('status: success')
            } else {
              console.log(JSON.stringify(json))
            }
          });
      } else {
        // throw Error(res.status)
      }
    })
    .catch(function(err) {
      console.log(new Error(err))
    });
}

// POST('/test', 'payload', 'setting')
const POST = (api, payload = '', setting = initialSetting) => {
  const {token} = setting
  const headerToken = {
    ...header,
    'X-Authentication-Token': token,
    'Accept': 'application/json',
    'x-authentication-scope': 'Management', //
  }
  const headerFull = {
    method: 'POST',
    headers: headerToken,
    body: (payload !== '') ? (JSON.stringify(payload)) : '',
  }
  const generateSetting = {...setting, header: headerFull, api}
  // console.log(generateSetting)
  generate(generateSetting)
}

const PUT = (api, payload = '', setting = initialSetting) => {
  const {token} = setting
  const headerToken = {
    ...header,
    'X-Authentication-Token': token
  }
  const headerFull = {
    method: 'PUT',
    headers: headerToken,
    body: (payload !== '') ? (JSON.stringify(payload)) : '',
  }
  const generateSetting = {...setting, header: headerFull, api}
  // console.log(generateSetting)
  generate(generateSetting)
}

const GET = (api, setting = initialSetting) => {
  const {token} = setting
  const headerToken = {
    ...header,
    'X-Authentication-Token': token,
    'x-authentication-scope': 'Management'
  }
  const headerFull = {
    method: 'GET',
    headers: headerToken,
  }
  const generateSetting = {...setting, header: headerFull, api}
  // console.log(generateSetting)
  generate(generateSetting)
}

export {
  header,
  POST,
  PUT,
  GET,
  generate
}
