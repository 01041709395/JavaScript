

let server = require('./server');
let router = require('./router');
let requestHandler = require('./requestHandler'); //request handler 모듈 생성, 모듈을 indet 소환 handle 값을 server에 넘김 start가 handle 값을 server에서 받을 수 있어야 함함

const mariadb = require('./database/connect/mariadb');
mariadb.connect();

server.start(router.route,requestHandler.handle);
