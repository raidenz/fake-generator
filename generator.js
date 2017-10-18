import fetch from 'isomorphic-fetch'
import faker from 'faker'

import { fakePost } from './schema'
import { header, GET, POST } from './helper'

const initialSetting = {
  serverEndpoint: 'http://localhost:3030',
  header: header,
  token: ''
}
// console.log(fakePost())
POST('/posts', fakePost(), initialSetting)

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
