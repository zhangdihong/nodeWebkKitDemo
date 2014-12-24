/**
 * Created by zhangdihong on 2014/12/17.
 */
global.$=$;
var Users=require('../model/users');
var gui=require('nw.gui');
var win=gui.Window.get();
$(document).ready(function () {
    initComponent();
});
function initComponent() {
    var tray=new gui.Tray({title:'测试标题',icon:'/public/image/favicon.png'});
    tray.tooltip='点此打开';
    var menu=new gui.Menu();
    menu.append(new gui.MenuItem({type:'checkbox',label:'退出'}));
    tray.menu=menu;
    registerEvent(tray);
}
function registerEvent(tray) {
    $("#login").on("click", function () {
        var login=$('input[name="login"]').val();
        var pswd=$('input[name="password"]').val();
        if(!login.length){
            $("#error").html('登录名输入错误').show();
            return;
        }
        if(!pswd.length){
            $("#error").html('密码输入错误').show();
            return;
        }
        $(this).next("i").addClass('fa-refresh fa-spin');
        Users.getUser(login, function (err,user) {
            if(user.length){
                if(user[0].pswd==pswd){
                    var win=gui.Window.get();
                    win.close();
                    gui.Window.open("view/main.html?name="+user[0].name,{
                        position:'center',
                        width:800,
                        height:600
                    });
                }else{
                    $("#error").html('密码错误').show();
                }
            }else{
                $("#error").html('用户名不存在').show();
            }
        });
    });
    $('.close_button').on('click', function () {

        win.hide();
    });
    tray.on('click', function () {
            win.show();
    });
    tray.menu.items[0].click= function () {
        win.close();
    }
}