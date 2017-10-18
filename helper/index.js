import fetch from 'isomorphic-fetch'

const serverEndpoint = 'http://localhost'

const header = {
    // 'Content-Type': 'application/json',
    'Accept': 'application/json',
    'X-BLUEWHALE-DEBUGGER': 1,
    // 'x-authentication-scope': 'Management',
}

const initialSetting = {
  serverEndpoint: 'http://localhost',
  header: header,
  token: '123456'
}

const generate = (setting) => {
  const {api, header, serverEndpoint} = setting
  fetch(`${serverEndpoint}${api}`, header)
    .then(res => {
      console.log(res.status + ' -- ' + res.statusText);
      if (res.ok) {
          res.json().then(json => {
            if (json.status === 'success') {
              // console.log(JSON.stringify(json))
              console.log('status: success')
            } else {}
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
    'X-Authentication-Token': token
  }
  const headerFull = {
    method: 'POST',
    headers: headerToken,
    body: (payload !== '') ? (JSON.stringify(payload)) : '',
  }
  const generateSetting = {...setting, header: headerFull, api}
  // console.log(generateSetting)
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
  GET,
  generate
}
