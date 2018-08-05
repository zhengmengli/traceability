'use strict';

changeNavTo('养殖管理', '动物养殖');
var laydate, form, layer, laypage;
layui.use(['form', 'laydate', 'laypage', 'layer'], function () {
    laydate = layui.laydate;
    laypage = layui.laypage;
    form = layui.form;
    laydate.render({
        elem: '.startTime'
    });
    laydate.render({
        elem: '.endTime'
    });
    laypage.render({
        elem: 'page',
        count: 100,
        layout: ['prev', 'page', 'next', 'skip'],
        jump: function jump(obj) {
            console.log(obj);
        }
    });

    laydate.render({
        elem: '.maintainDate'
    });
});

//新增
$('.add-btn').click(function () {
    layer.open({
        type: 1,
        title: '新增防疫记录',
        area: ['600px', '380px'],
        content: $('#popup'),
        btn: ['确定', '取消']
    });
});
$('.fix').click(function () {
    layer.open({
        type: 1,
        title: '修改防疫记录',
        area: ['600px', '380px'],
        content: $('#popup'),
        btn: ['确定', '取消']
    });
});