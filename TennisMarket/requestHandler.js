//화면바꾸기 
const fs = require('fs');
const main_view = fs.readFileSync('./main.html', 'utf-8');

const mariadb = require('./database/connect/mariadb');

function main(response) { // /경로로 가면 함수대로 일을 실행
    console.log('main');

    mariadb.query("SELECT * FROM product", function(err, row){
        console.log(rows);
    })

    response.writeHead(200, {'content-type' : 'text/html'});
    response.write(main_view);
    response.end();
}

function redRacket(response) {
    fs.readFile('./img/redRacket.png',function(err,data) {
    response.writeHead(200, {'content-type' : 'text/html'});
    response.write(data);
    response.end();
    })

 /*   function redRacket(response) {
        fs.readFile('./img/redRacket.png',function(err,data) {
        response.writeHead(200, {'content-type' : 'text/html'});
        response.write(data);
        response.end();
        })

        function redRacket(response) {
            fs.readFile('./img/redRacket.png',function(err,data) {
            response.writeHead(200, {'content-type' : 'text/html'});
            response.write(data);
             response.end();
            }) */
        }
    function order(response,product) {
    response.writeHead(200, {'content-Type' : 'text/html'});
    
    mariadb.query("INSERT INTO orderlist VALUES (" + productId + ",'" + new Date().toLocaleDateString() + "');", function(err, row){
        console.log(rows);
    })

    response.write('order page');
    response.end();    
 }

let handle = {}; // 중괄호 변수 key(이름) : value(홍석기) 변수 사전 상자 (json) 
handle['/'] = main; // /를 찾으면 main 만남
handle['/order'] = order;

/* image directory */
handle['/img/redRacket.png'] = redRacket;
//handle['/img/blueRacket.png'] = blueRacket; 
//handle['/img/blackRacket.png'] = blackRacket;
exports.handle = handle ; // 수출