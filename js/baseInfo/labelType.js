'use strict';

changeNavTo('基础信息', '标签种类');
var form, layer, laypage;
layui.use(['form', 'laypage', 'layer'], function () {
    laypage = layui.laypage;
    form = layui.form;
    layer = layui.layer;
    //分页
    laypage.render({
        elem: 'page',
        count: 100,
        layout: ['prev', 'page', 'next', 'skip'],
        jump: function jump(obj) {
            console.log(obj);
        }
    });
    //采购弹窗分页
    laypage.render({
        elem: 'page2',
        count: 100,
        layout: ['prev', 'page', 'next', 'skip'],
        jump: function jump(obj) {
            console.log(obj);
        }
    });
    //使用弹窗分页
    laypage.render({
        elem: 'pageUse',
        count: 100,
        layout: ['prev', 'page', 'next', 'skip'],
        jump: function jump(obj) {
            console.log(obj);
        }
    });
    //使用弹窗分页
    laypage.render({
        elem: 'page3',
        count: 100,
        layout: ['prev', 'page', 'next', 'skip'],
        jump: function jump(obj) {
            console.log(obj);
        }
    });
    //采购弹窗
    $('body').on('click', '.orange', function () {
        layer.open({
            type: 1,
            zIndex: 20,
            title: '采购',
            area: ['800px', '660px'],
            content: $('#orangeBox'),
            btn: ['确定', '取消'], //只是为了演示
            yes: function yes() {
                $(that).click();
            },
            btn2: function btn2() {
                layer.closeAll();
            },
            success: function success(layero) {
                layer.setTop(layero); //重点2
            }
        });
    });
    //新增采购弹窗
    $('body').on('click', '#orangeBox .add-btn,#orangeBox .fix', function () {
        layer.open({
            type: 1,
            title: '新增采购',
            zIndex: 19891020,
            area: ['500px', '400px'],
            content: $('#newOrangeBox'),
            btn: ['确定', '取消'], //只是为了演示
            yes: function yes() {
                $(that).click();
            },
            btn2: function btn2() {
                layer.closeAll();
            },
            success: function success(layero) {
                layer.setTop(layero);
            },
            cancel: function cancel(index, layero) {
                layer.closeAll();
            }
        });
    });
    //使用记录弹窗
    $('body').on('click', '.red', function () {
        layer.open({
            type: 1,
            title: '电子标签使用记录',
            area: ['800px', '560px'],
            content: $('#useCover'),
            btn: ['确定', '取消']
        });
    });
});