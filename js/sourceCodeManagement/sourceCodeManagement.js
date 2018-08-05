'use strict';

changeNavTo('溯源码管理', '溯源码管理');
var form, laydate, laypage, layer;
layui.use(['form', 'laydate', 'laypage', 'layer'], function () {
    form = layui.form;
    laydate = layui.laydate;
    laypage = layui.laypage;
    //开始时间
    laydate.render({
        elem: '.startTime'
    });
    //结束时间
    laydate.render({
        elem: '.endTime'
    });
    //分页
    laypage.render({
        elem: 'page',
        count: 100,
        layout: ['prev', 'page', 'next', 'skip'],
        jump: function jump(obj) {
            console.log(obj);
        }
    });
});
//新增
$('.add-btn').click(function () {
    layer.open({
        type: 1,
        title: '新增溯源码',
        area: ['450px', '280px'],
        content: $('#popup'),
        btn: ['确定', '取消']
    });
});