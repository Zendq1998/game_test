export default function Fetch(url, opt = {}, token) { 
    
    // 设置请求方法
    opt.method = opt.method || 'GET';
    // 处理要发送的数据
    if (opt.data) {
        if (/GET/i.test(opt.method)) {
        url = `${url}&${obj2query(opt.data)}`;
        } else {
        opt.headers = {
            'Accept': 'application/json',
            'Content-Type': 'application/json',
            'Access-Control-Allow-Origin': '*',
            'token': token
        };
        opt.body = JSON.stringify(opt.data);
        }
    }
    
        return fetch(url, opt)
        .then(res => {
            switch (res.status) {
                case 200:
                    return res;
                default:
                    return res;
                    throw res.message;
            }
        })//返回一个response
        // .then(response => {  
        // return response.json();
        // }).then(
        //     json => {
        //         switch (json.code) {
        //             case 200:
        //               return json;
        //             case 502:
        //               util.message(json.message, 'err');
        //               throw json.message;
        //           }
        //     }
        // )
    }