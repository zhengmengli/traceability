'use strict';

changeNavTo('销售管理', '肉产品销售');
var form, laydate, laypage;
layui.use(['form', 'laydate', 'laypage'], function () {
    laydate = layui.laydate;
    form = layui.form;
    laypage = layui.laypage;
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
});

$('.cancel').click(function () {
    window.history.go(-1);
});