//let ipUrl = 'http://127.0.0.1:7001/default/'
let ipUrl = 'http://www.hunt.org.cn:7001/default/'

let serveicePath = {
    getArticleList: ipUrl + 'getArticleList', //首页接口
    getArticleById: ipUrl + 'getArticleById/',  //详情接口
    getTypeInfo: ipUrl + 'getTypeInfo', //总目录
    getListById:ipUrl + 'getListById/',   // 根据类别ID获得文章列表
}


export default serveicePath