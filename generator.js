import fetch from 'isomorphic-fetch'
import faker from 'faker'
import dotenv from 'dotenv/config'

import { fakePost, fakeManpower } from './schema'
import { header, GET, POST } from './helper'

// const config = dotenv.load()

const serverHeader = {
  ...header,
  'X-Authentication-Token': process.env.TOKEN_ADMIN,
  'x-authentication-scope': 'Management',
  'X-BLUEWHALE-DEBUGGER': 1,
}

const adminSetting = {
  serverEndpoint: process.env.API,
  header: serverHeader,
}

// console.log(process.env.TOKEN_ADMIN)
// POST('/man-power', fakeManpower(), adminSetting)
POST('/posts', fakePost(), adminSetting)
// GET('/posts', adminSetting)

// Start logic menu here.
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
