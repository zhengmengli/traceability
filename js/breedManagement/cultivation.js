'use strict';

changeNavTo('养殖管理', '动物档案');
layui.use(['form', 'element', 'laydate'], function () {
    var form = layui.form;
    var element = layui.element;
    var laydate = layui.laydate;

    laydate.render({
        elem: '.p1time'
    });
    laydate.render({
        elem: '.p2time'
    });
    element.on('tab(docDemoTabBrief)', function (data) {
        //console.log(data);
    });
});

$('.cancel').click(function () {
    window.history.go(-1);
});

$('.fix1').click(function () {
    layer.open({
        type: 1,
        title: '修改防疫记录',
        area: ['600px', '380px'],
        content: $('#popup1'),
        btn: ['确定', '取消']
    });
});
$('.fix2').click(function () {
    layer.open({
        type: 1,
        title: '修改诊疗',
        area: ['600px', '400px'],
        content: $('#popup2'),
        btn: ['确定', '取消']
    });
});