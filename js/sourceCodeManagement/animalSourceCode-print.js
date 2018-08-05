'use strict';

changeNavTo('溯源码管理', '动物溯源码打印');
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
});
//返回取消
$('.cancel').click(function () {
    window.history.go(-1);
});