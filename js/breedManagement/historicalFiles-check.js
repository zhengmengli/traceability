'use strict';

changeNavTo('养殖管理', '历史档案');
layui.use(['form'], function () {
    var form = layui.form;
});

$('.cancel').click(function () {
    window.history.go(-1);
});