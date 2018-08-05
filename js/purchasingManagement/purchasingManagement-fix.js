'use strict';

changeNavTo('采购管理', '动物采购');
var laydate, form;
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