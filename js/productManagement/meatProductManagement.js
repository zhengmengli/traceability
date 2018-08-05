'use strict';

/**
 * Created by 九次方前端研发部-任传真 <rcz@jusfoun.com> on 2018/2/1.
 */
changeNavTo('产品管理', '肉产品管理');
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