/**
 * Created by zhangdihong on 2014/12/17.
 */
var db=require('./db');
function Users(user){
    this.id=user.id;
    this.login=user.login;
    this.pswd=user.pswd;
    this.name=user.name;
    this.type=user.type;
};
module.exports=Users;
Users.getUser= function (login, callback) {
    db.getConnection(function (err,connection) {
        connection.query('select u.id,u.login,u.pswd,u.name,u.type from users u where u.type="T" and u.login='+connection.escape(login),function(err,user){
            if(err){
                callback(err);
            }
            callback('有什么错呀没错吧',user);
            connection.release();
        });
    });
}