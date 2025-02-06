

let http = require('http'); // node.js가 가지고 있는 모듈 (require 함수)
let url = require('url'); //url 모듈 담기

function start(route, handle) { // 서버도 밖에서 route 받기
    function onRequest(request, response) { //node.js가 알아서 넣어줌
        let pathname = url.parse(request.url).pathname; //url 읽어서 경로확인
        route(pathname, handle, response); //서버에서 route한테 pathname 전달

    }
    
    http.createServer(onRequest).listen(8888); // 서버는 들을 수 있음 
    
}
exports.start = start;