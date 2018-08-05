'use strict';

changeNavTo('屠宰管理', '屠宰场信息');
layui.use(['form'], function () {
    var form = layui.form;
});

$('.cancel').click(function () {
    window.history.go(-1);
});