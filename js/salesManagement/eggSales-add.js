'use strict';

changeNavTo('销售管理', '蛋产品销售');
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

//新增产品信息
$('body').on('click', '.addItem', function () {
    console.log($(this));
    $('.overflowAuto table tbody').append('<tr><td><span class="addItem" title="增加">+</span><span class="reduceItem" title="删除">-</span></td>' + '<td><select name = "" id = "">' + '<option value = "">请选择</option>' + '<option value = "0">牛 - 肉牛</option>' + '<option value = "1">猪 - 杜洛克猪</option>' + '</select></td>' + '<td><select name = "" id = "">' + '<option value = "">请选择</option>' + '<option value = "0">猪 - 杜洛克猪</option>' + '<option value = "1">牛 - 肉牛</option>' + '</select></td>' + '<td><input type="text" class="layui-input" value=""></td>' + '<td><input type="text" class="layui-input" value=""></td></tr>');
    form.render('select');
});
$('body').on('click', '.reduceItem', function () {
    console.log(12);
    if ($('.overflowAuto table tbody tr').length > 1) {
        $(this).parent().parent().remove();
    } else {
        layer.msg('只剩下一项了！');
    }
});