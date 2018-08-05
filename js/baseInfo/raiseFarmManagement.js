'use strict';

changeNavTo('基础信息', '养殖场地管理');
var form, layer, laypage;
layui.use(['form', 'laypage', 'layer'], function () {
    laypage = layui.laypage;
    form = layui.form;
    layer = layui.layer;
    laypage.render({
        elem: 'page',
        count: 100,
        layout: ['prev', 'page', 'next', 'skip'],
        jump: function jump(obj) {
            console.log(obj);
        }
    });
});