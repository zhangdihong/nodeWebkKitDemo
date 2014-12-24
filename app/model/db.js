/**
 * Created by zhangdihong on 2014/12/17.
 */
var mysql =require('mysql');
var config=require('../config');
var pool =mysql.createPool(config.db);
module.exports=pool;