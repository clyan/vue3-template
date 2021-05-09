const path = require('path');
let mockRouteMap = {};
function createRoute(mockConfList) {
    mockConfList.forEach(mockConf => {
        let method = mockConf.type || 'get'
        let path = mockConf.url;
        let handler = mockConf.response;
        let route = { 
            path,
            method: method.toLowerCase(),
            handler
         }
         if(!mockRouteMap[method]) {
            mockRouteMap[method] = []
         }
         mockRouteMap[method].push(route)
    });
}

function matchRoute(req) {
    let url = req.url;
    let method = req.method.toLowerCase();
    let routeList = mockRouteMap[method];
    return routeList && routeList.find((item) => item.path === url)
}
// function send(body) {
//     let chunk = JSON.stringify(body);
//     if(chunk) {
//         chunk = Buffer.from(chunk, 'utf-8');
//         this.setHeader('Content-Length', chunk.length);
//     }
//     this.setHeader('Content-type', 'application/json');
//     this.statusCode = 200;
//     this.end(chunk, 'utf-8');
// }

export default function(options = {}){
    const defaultOptions = {
        entry: path.resolve(__dirname, './mock/index.js')
    }
    options = Object.assign(defaultOptions, options)
    return {
        configureServer: function({ app }) {
            // 定义路由表
            const mockObj = require(options.entry);
            createRoute(mockObj);
            const middleware = (req, res, next) => {
                let route = matchRoute(req);
                if(route) {
                    const data = route.handler(req, res)
                    res.end(JSON.stringify(data));
                } else {
                    next();
                }
            }
            app.use(middleware)
        }
    }
}