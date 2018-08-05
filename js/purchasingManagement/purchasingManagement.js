'use strict';

changeNavTo('采购管理', '动物采购');
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
});