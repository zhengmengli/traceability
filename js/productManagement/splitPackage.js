'use strict';

/**
 * Created by 九次方前端研发部-任传真 <rcz@jusfoun.com> on 2018/2/1.
 */
changeNavTo('产品管理', '分割包装');
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