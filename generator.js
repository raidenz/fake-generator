// require('es6-promise').polyfill();
// require('isomorphic-fetch');
import fetch from 'isomorphic-fetch'
import faker from 'faker'

import { header, fakeManpower } from './helper'

console.log(fakeManpower())

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