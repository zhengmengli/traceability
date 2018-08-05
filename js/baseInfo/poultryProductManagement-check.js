'use strict';

changeNavTo('基础信息', '禽畜产品管理');
var form;
layui.use(['form'], function () {
    form = layui.form;
});
//返回取消
$('.cancel').click(function () {
    window.history.go(-1);
});