'use strict';

changeNavTo('基础信息', '标签种类');
var form;
layui.use(['form'], function () {
    form = layui.form;
});
//返回取消
$('.cancel').click(function () {
    window.history.go(-1);
});