'use strict';

changeNavTo('销售管理', '肉产品销售');
var form, laydate;
layui.use(['form', 'laydate'], function () {
    laydate = layui.laydate;
    form = layui.form;
    laydate.render({
        elem: '.input-bg'
    });
});

$('.cancel').click(function () {
    window.history.go(-1);
});