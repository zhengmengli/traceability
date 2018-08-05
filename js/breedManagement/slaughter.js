'use strict';

changeNavTo('养殖管理', '动物养殖');
var laydate, form, layer, laypage;
layui.use(['form', 'laydate', 'laypage', 'layer', 'upload'], function () {
  laydate = layui.laydate;
  laypage = layui.laypage;
  form = layui.form;
  var upload = layui.upload;

  laydate.render({
    elem: '.applyTime'
  });
  laydate.render({
    elem: '.signTime'
  });

  laypage.render({
    elem: 'page',
    count: 100,
    layout: ['prev', 'page', 'next', 'skip'],
    jump: function jump(obj) {
      console.log(obj);
    }
  });

  laydate.render({
    elem: '.maintainDate'
  });

  //单选框
  form.on('radio(res)', function (data) {
    console.log(data);
    if (data.value == '销售') {
      $('.sell').show();
      $('.sla').hide();
      $('.nxt').hide();
      $('.submitBtn').show();
      $('.nxtBtn').hide();
    }
    if (data.value == '屠宰/分割') {
      $('.sla').show();
      $('.sell').hide();
      $('.nxt').hide();
      $('.submitBtn').hide();
      $('.nxtBtn').show();
    }
  });

  //多图片上传
  upload.render({
    elem: '#imgUp',
    url: '/upload/',
    multiple: true,
    before: function before(obj) {
      //预读本地文件示例，不支持ie8
      obj.preview(function (index, file, result) {
        $('#imgList').append('<div class="imgWrap"><img src="' + result + '" alt="' + file.name + '" class="layui-upload-img"><i onclick="removeImg(this)" class="layui-icon close">&#x1006;</i></div>');
      });
    },
    done: function done(res) {
      //上传完毕
    }
  });
});

$('.nxtOne').on('click', function () {
  $('.nxt').show();
  $('.sla').hide();
  $('.sell').hide();
  $('.submitBtn').show();
  $('.nxtBtn').hide();
});
$('.cancel.true').click(function () {
  window.history.go(-1);
});
//移除图片
function removeImg(dom) {
  //	console.log($(dom).parents('.imgWrap'));
  $(dom).parents('.imgWrap').remove();
}