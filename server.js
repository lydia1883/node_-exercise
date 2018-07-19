var http = require("http");
var url = require("url");

const start = (route, handle) => {
  const onRequest = (request, response) => {
    // var postData = "";
    const pathname = url.parse(request.url).pathname;
    console.log("Request for " + pathname + " received.");
    var method = request.method.toLowerCase();
    console.log(method,"method")
    route(handle, pathname, response, request);

    // request.setEncoding('utf8');
    // request.addListener("data",function(postDataChunk){
    //   postData += postDataChunk;
    //   console.log("Received POST data chunk '" +postDataChunk + "'.")
    // });

    // request.addListener("end",function(){
    //   route(handle, pathname, response, postData);
    // });

    // response.writeHead(200, {"Content-Type": "text/plain"});
    // // const content = 
    // route(handle, pathname, response);
    // response.write(content);
    // response.end();
  }
  http.createServer(onRequest).listen(8888);
  console.log("Server has started.")
}

exports.start = start;
