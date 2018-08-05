'use strict';

changeNavTo('养殖管理', '动物养殖');
var laydate, form, layer, laypage;
layui.use(['form', 'laydate'], function () {
    laydate = layui.laydate;
    laypage = layui.laypage;
    form = layui.form;

    laydate.render({
        elem: '.applyTime'
    });
});

$('.cancel').click(function () {
    window.history.go(-1);
});