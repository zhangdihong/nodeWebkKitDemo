/**
 * Created by zhangdihong on 2014/12/18.
 */

var i = 0;
exports.callback0 = function () {
    console.log(i + ": " + window.location);
    window.alert ("i = " + i);
    i = i + 1;
}

