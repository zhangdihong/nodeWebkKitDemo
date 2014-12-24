/**
 * Created by zhangdihong on 2014/12/16.
 */
module.exports={
    db:{
        host:'localhost',
        user:'root',
        password:'123456',
        database:'awebkit',
        waitForConnections:true,//如果连接超过最大连接数就加入等待队列,false返回一个错误
        connectionLimit:40,//连接数的最大数是40，默认是10
        queueLimit:0//最大队列限制，如果超过最大连接数，就加入到队列，0表示队列无限制，默认0
    }
}
