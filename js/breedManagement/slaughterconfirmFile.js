'use strict';

changeNavTo('养殖管理', '动物档案');
var laydate, form, layer, laypage;
layui.use(['form', 'laydate', 'laypage', 'layer', 'upload'], function () {
  laydate = layui.laydate;
  laypage = layui.laypage;
  form = layui.form;
  var upload = layui.upload;

  laydate.render({
    elem: '.slaTime'
  });
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
    if (data.value == '动物A(省外)') {
      $('.anm-a').show();
      $('.anm-b').hide();
    }
    if (data.value == '动物B(省内)') {
      $('.anm-b').show();
      $('.anm-a').hide();
    }
  });
  form.on('radio(res-drc)', function (data) {
    console.log(data);
    if (data.value == '动物销售') {
      $('.der-a').show();
      $('.der-b').hide();
    }
    if (data.value == '动物屠宰') {
      $('.der-b').show();
      $('.der-a').hide();
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
//移除图片
function removeImg(dom) {
  //	console.log($(dom).parents('.imgWrap'));
  $(dom).parents('.imgWrap').remove();
}

//操作步骤

function showOne() {
  $('.steps.step_one').addClass('active').siblings().removeClass('active');
  $('.layui-form.sla-form').show().siblings('.layui-form').hide();
}
function showTwo() {
  $('.steps.step_two').addClass('active').siblings().removeClass('active');
  $('.layui-form.infor-form').show().siblings('.layui-form').hide();
  $('.steps.step_one').unbind().on('click', function () {
    showOne();
  }).css('cursor', 'pointer');
  $('.steps.step_two').unbind().on('click', function () {
    showTwo();
  }).css('cursor', 'pointer');
}
function showThree() {
  $('.steps.step_three').addClass('active').siblings().removeClass('active');
  $('.layui-form.direc-form').show().siblings('.layui-form').hide();
  $('.steps.step_one').unbind().on('click', function () {
    showOne();
  }).css('cursor', 'pointer');
  $('.steps.step_two').unbind().on('click', function () {
    showTwo();
  }).css('cursor', 'pointer');
  $('.steps.step_three').unbind().on('click', function () {
    showThree();
  }).css('cursor', 'pointer');
}
$('#slaughter_confirm').on('click', function () {
  showTwo();
});
$('#quarantine_confirm').on('click', function () {
  showThree();
});