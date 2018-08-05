'use strict';

changeNavTo('溯源码管理', '肉类溯源码打印');
var form, laypage, laydate;
layui.use(['form', 'laypage', 'laydate'], function () {
    form = layui.form;
    laypage = layui.laypage;
    laydate = layui.laydate;
    //时间
    laydate.render({
        elem: '.input-bg'
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