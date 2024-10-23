const fs = require("fs");
const http = require("http");
const url = require("url");
let  response=fs.readFileSync("./data.json","utf-8")
const data=response;
const dataObj=JSON.parse(response);

const server = http.createServer((req, res) => {
  res.setHeader('Access-Control-Allow-Origin', "*"); // Allow requests from your React app
  res.setHeader('Access-Control-Allow-Methods', 'GET, POST, PUT, DELETE, OPTIONS');
  const {query,pathname}=url.parse(req.url,true)


  if (pathname == "/product") {
    res.writeHead(200,
        {
            "content-type":"application/json",
            "my-header":"hello World"
        }
    )
    if(query)
    {
      console.log(typeof data)
      let productDetail=dataObj.find((product)=>product.id==query.id)
      let productData=JSON.stringify(productDetail)
      res.end(productData)
    }
    
  } else if (pathname == "/overview" || pathname=="/") {
    res.writeHead(200,
        {
            "content-type":"application/json",
            "my-header":"hello World"
        }
    );
    
    res.end(data)
  } else  {
    res.writeHead(404,
        {
            "content-type":"text/html",
            "my-header":"hello World"
        }
    );
    res.end("<h1>Page Not Found!!!</h1>")
  }
});
server.listen(8000, () => {
  console.log("listening on http://localhost:8000");
});