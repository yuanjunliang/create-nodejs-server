const node_uuid = require('node-uuid')
const query = require('./db/query')

global.uuid = () => node_uuid.v1().replace(/-/g,'')
global.query = query