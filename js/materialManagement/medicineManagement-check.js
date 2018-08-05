'use strict';

changeNavTo('物料管理', '兽药管理');
var form, layer, laypage;
layui.use(['form', 'laypage', 'layer'], function () {
    laypage = layui.laypage;
    form = layui.form;
    layer = layui.layer;
});
$('.cancel').click(function () {
    window.history.go(-1);
});