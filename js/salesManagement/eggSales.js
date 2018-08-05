'use strict';

changeNavTo('销售管理', '蛋产品销售');
var form, laydate, laypage;
layui.use(['form', 'laydate', 'laypage'], function () {
    laydate = layui.laydate;
    form = layui.form;
    laypage = layui.laypage;
    //开始时间
    laydate.render({
        elem: '.startTime'
    });
    //结束时间
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