

const mariadb = require('./database/connect/mariadb');

function main(response) { // /경로로 가면 함수대로 일을 실행
    console.log('main');

    mariadb.query("SELECT * FROM product", function(err, row) {
        console.log(rows);
    })
    response.writeHead(200, {'content-type' : 'text/html'});
    response.write('Main page');
    response.end();
}

function login(response) { // login 경로로 가면 함수대로 일을 실행
    console.log('login');

    response.writeHead(200, {'content-type' : 'text/html'});
    response.write('Login page');
    response.end();
}

let handle = {}; // 중괄호 변수 key(이름) : value(홍석기) 변수 사전 상자 (json) 
handle['/'] = main; // /를 찾으면 main 만남
handle['/login'] = login; 

exports.handle = handle ; // 수출   