import fetch from 'isomorphic-fetch'
import faker from 'faker'

import { header, GET } from './helper'

const initialSetting = {
  serverEndpoint: 'http://13.229.108.111:3030/v1.27.5/v1',
  header: header,
  token: '410c1e79-b608-48de-bf1c-3f1ac0ffeabe'
}

const adminHeader = {...initialSetting, token: '3917d80c-5344-4fef-85ad-eeccff0b1617', header: { ...initialSetting.header, 'x-authentication-scopeManagement': 'Management'}}
// console.log(adminHeader)
GET('/man-power', adminHeader)

const defaultOption = `Choose Option:
1. fake data 1
2. fake data 2
`

switch(process.argv[2]){
	case '1':
		console.log('do 1')
	break;
	default:
	console.log(defaultOption)
}
