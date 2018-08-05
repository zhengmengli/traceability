'use strict';

changeNavTo('物料管理', '饲料管理');
var form, layer;
layui.use(['form', 'layer'], function () {
    laypage = layui.laypage;
    form = layui.form;
    layer = layui.layer;
});
$('.cancel').click(function () {
    window.history.go(-1);
});