'use strict';

changeNavTo('溯源码管理', '溯源码管理');
var form, laydate, laypage;
layui.use(['form', 'laypage', 'laydate'], function () {
    form = layui.form;
    laydate = layui.laydate;
    laypage = layui.laypage;
    //开始时间1
    laydate.render({
        elem: '.startTime'
    });
    //结束时间1
    laydate.render({
        elem: '.endTime'
    });
    //开始时间2
    laydate.render({
        elem: '.startTime1'
    });
    //结束时间2
    laydate.render({
        elem: '.endTime1'
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
//返回取消
$('.cancel').click(function () {
    window.history.go(-1);
});