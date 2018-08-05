'use strict';

changeNavTo('采购管理', '动物采购');
layui.use(['form', 'laydate'], function () {
    var laydate = layui.laydate;
    var form = layui.form;
    laydate.render({
        elem: '.input-bg'
    });
});

$('.cancel').click(function () {
    window.history.go(-1);
});