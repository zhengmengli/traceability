'use strict';

changeNavTo('销售管理', '客户信息');
var form, layer;
layui.use(['form', 'layer'], function () {
    laypage = layui.laypage;
    form = layui.form;
    layer = layui.layer;
});
$('.cancel').click(function () {
    window.history.go(-1);
});