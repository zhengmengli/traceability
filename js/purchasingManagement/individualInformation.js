'use strict';

/**
 * Created by xw on 2018/1/31.
 */
changeNavTo('采购管理', '动物采购');
var laydate, form, layer, laypage;
layui.use(['form', 'laydate', 'laypage', 'layer'], function () {
  laydate = layui.laydate;
  laypage = layui.laypage;
  form = layui.form;
  layer = layui.layer;
  laydate.render({
    elem: '#start'
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

$('.maintain-btn').click(function () {
  layer.open({
    type: 1,
    title: '新增畜禽档案',
    area: ['600px', '400px'],
    shadeClose: false, //点击遮罩关闭
    content: $('#editLayer_box2')
  });
});
// 点击取消按钮关闭弹窗
$('.cancel').click(function () {
  layer.closeAll();
  $('#form input').each(function () {
    $(this).val('');
  });
});
//点击保存按钮关闭弹窗
$('.submit').click(function () {
  layer.closeAll();
});