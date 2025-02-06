function route(pathname, handle, response,productId) {
    console.log('pathname : ' + pathname); //콘솔에 발자국 남기기,pathname은 서버에서

    if (typeof handle[pathname] == 'function') {
        handle[pathname](response, productId);
    }else{
        response.writeHead(404, {'content-type' : 'text/html'});
        response.write('Not Found');
        response.end();

    }
}
exports.route = route; // 밖에서도 사용 가능