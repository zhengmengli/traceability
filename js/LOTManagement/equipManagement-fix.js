'use strict';

changeNavTo('物联网管理', '设备管理');
layui.use(['form'], function () {
    var form = layui.form;
});

$('.cancel').click(function () {
    window.history.go(-1);
});