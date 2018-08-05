'use strict';

changeNavTo('物料管理', '兽药管理');
var form, layer, laypage, laydate;
layui.use(['form', 'laypage', 'laydate', 'layer'], function () {
    laypage = layui.laypage;
    form = layui.form;
    layer = layui.layer;
    laydate = layui.laydate;
    laypage.render({
        elem: 'page',
        count: 100,
        layout: ['prev', 'page', 'next', 'skip'],
        jump: function jump(obj) {
            console.log(obj);
        }
    });
    laypage.render({
        elem: 'pagePurchase',
        count: 100,
        layout: ['prev', 'page', 'next', 'skip'],
        jump: function jump(obj) {
            console.log(obj);
        }
    });
    laypage.render({
        elem: 'pageUse',
        count: 100,
        layout: ['prev', 'page', 'next', 'skip'],
        jump: function jump(obj) {
            console.log(obj);
        }
    });
    $('.purchase').click(function () {
        layer.open({
            type: 1,
            title: '采购记录',
            area: ['800px', '570px'],
            content: $('#popPurchase'),
            btn: ['确定', '取消']
        });
    });
    $('.use').click(function () {
        layer.open({
            type: 1,
            title: '兽药使用记录',
            area: ['800px', '570px'],
            content: $('#popUse'),
            btn: ['确定', '取消']
        });
    });
    //新增采购弹窗
    $('body').on('click', '#popPurchase .add-btn,#popPurchase .fix', function () {
        layer.open({
            type: 1,
            title: '新增采购',
            zIndex: 19891020,
            area: ['500px', '450px'],
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
    laydate.render({
        elem: '.startTime'
    });
    laydate.render({
        elem: '.endTime'
    });
});