const mariadb = require('mysql');

const conn = mariadb.createConnection(// 연결 통로 만들기
    {
        host: '172.17.0.2',
        port: 3306,
        user: 'root',
        password: 'root',
        database: 'tennis'
    }
) ;

module.exports = conn; // 연결 통로 밖에서 이용