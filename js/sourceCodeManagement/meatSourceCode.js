'use strict';

changeNavTo('溯源码管理', '肉类溯源码打印');
var form, laypage;
layui.use(['form', 'laypage'], function () {
    form = layui.form;
    laypage = layui.laypage;
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