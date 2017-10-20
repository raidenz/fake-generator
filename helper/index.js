import fetch from 'isomorphic-fetch'

const serverEndpoint = 'http://localhost'

const header = {
  'Content-Type': 'application/json',
  'Accept': 'application/json',
}

const initialSetting = {
  serverEndpoint: 'http://localhost',
  header: header,
}

const generate = (setting) => {
  const {api, header, serverEndpoint} = setting
  fetch(`${serverEndpoint}${api}`, header)
    // improvement
    .then( resp => {
      console.log(`${resp.status} -- ${resp.statusText}`)
      return (resp.json())
    }) // Transform the data into json
    .then((data) => {
      console.log(data)
    })
    .catch(function(err) {
      console.log(new Error(err))
    });
}

// POST('/test', 'payload', 'setting')
const POST = (api, payload = '', setting = initialSetting) => {
  const {token, header} = setting
  const headerFull = {
    method: 'POST',
    headers: header,
    body: (payload !== '') ? (JSON.stringify(payload)) : '',
  }
  const generateSetting = {...setting, header: headerFull, api}
  // console.log(generateSetting)
  generate(generateSetting)
}

const PUT = (api, payload = '', setting = initialSetting) => {
  const {token, header} = setting
  const headerFull = {
    method: 'PUT',
    headers: header,
    body: (payload !== '') ? (JSON.stringify(payload)) : '',
  }
  const generateSetting = {...setting, header: headerFull, api}
  // console.log(generateSetting)
  generate(generateSetting)
}

const GET = (api, setting = initialSetting) => {
  const {token, header} = setting
  const headerFull = {
    method: 'GET',
    headers: header,
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
