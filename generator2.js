import fetch from 'isomorphic-fetch'
import faker from 'faker'

import { fakePost, fakeManpower } from './schema'
import { header, GET, POST } from './helper'

const initialSetting = {
  serverEndpoint: 'http://13.229.108.111:3030/v1.27.5/v1',
  header: header,
  token: 'd1a26f50-9485-43bb-864f-4622a5455b83',
}

const adminHeader = {...initialSetting, header: { ...initialSetting.header, 'x-authentication-scope': 'Management'}}

// console.log(fakePost())
// GET('/man-power', adminHeader)

const defaultOption = `Choose Option:
1. fake data 1
2. fake data 2
`

switch(process.argv[2]){
  case '1':
    POST('/man-power', fakeManpower(), adminHeader)
		console.log('do 1')
	break;
	default:
	console.log(defaultOption)
}
