'use strict';

changeNavTo('养殖管理', '动物档案');
var laydate, form, layer, laypage;
layui.use(['form', 'laydate', 'laypage', 'layer'], function () {
    laydate = layui.laydate;
    laypage = layui.laypage;
    form = layui.form;

    // 监听全选
    form.on('checkbox(checkAll)', function (data) {
        console.log(data.elem.checked); //是否被选中，true或者false
        if (data.elem.checked) {
            $("input[type='checkbox']").prop("checked", true);
            //重新渲染所有checkbox
            form.render('checkbox');
        } else {
            $("input[type='checkbox']").prop('checked', false);
            //重新渲染所有checkbox
            form.render('checkbox');
        }
    });
    // 监听单选
    form.on('checkbox(checked)', function (data) {
        console.log(data.elem); //得到select原始DOM对象
        console.log(data.elem.checked); //是否被选中，true或者false
        console.log(data.value); //得到被选中的值
        console.log(data.othis); //得到美化后的DOM对象
        form.render('checkbox');
    });

    laydate.render({
        elem: '.startTime'
    });
    laydate.render({
        elem: '.endTime'
    });
    laydate.render({
        elem: '.p1time'
    });
    laydate.render({
        elem: '.p2time'
    });
    laydate.render({
        elem: '.p3time'
    });
    laydate.render({
        elem: '.p4time'
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

//弹框
$('.antiepidemic').click(function () {
    layer.open({
        type: 1,
        title: '防疫操作',
        area: ['600px', '380px'],
        content: $('#popup1'),
        btn: ['确定', '取消']
    });
});
$('.died').click(function () {
    layer.open({
        type: 1,
        title: '病亡操作',
        area: ['600px', '300px'],
        content: $('#popup2'),
        btn: ['确定', '取消']
    });
});
$('.treat').click(function () {
    layer.open({
        type: 1,
        title: '新增诊疗',
        area: ['600px', '380px'],
        content: $('#popup3'),
        btn: ['确定', '取消']
    });
});
$('.inbar').click(function () {
    layer.open({
        type: 1,
        title: '换栏操作',
        area: ['600px', '400px'],
        content: $('#popup4'),
        btn: ['确定', '取消']
    });
});