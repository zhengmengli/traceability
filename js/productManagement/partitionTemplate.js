'use strict';

/**
 * Created by 九次方前端研发部-任传真 <rcz@jusfoun.com> on 2018/2/1.
 */
changeNavTo('产品管理', '分割模板管理');
var form, laypage, layer;
layui.use(['form', 'laypage', 'layer'], function () {
    form = layui.form;
    layer = layui.layer;
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