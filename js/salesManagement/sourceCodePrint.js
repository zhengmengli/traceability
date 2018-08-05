'use strict';

changeNavTo('销售管理', '活畜禽销售');
var form, laydate, laypage;
layui.use(['form', 'laydate', 'laypage'], function () {
    laydate = layui.laydate;
    form = layui.form;
    laypage = layui.laypage;
});

$('.cancel').click(function () {
    window.history.go(-1);
});