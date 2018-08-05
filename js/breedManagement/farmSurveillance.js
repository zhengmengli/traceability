'use strict';

changeNavTo('养殖管理', '养殖场监控');
var laydate, form, layer, laypage;
layui.use(['form', 'laydate', 'laypage', 'layer', 'element'], function () {
  var laydate = layui.laydate;
  var laypage = layui.laypage;
  var form = layui.form;
  var element = layui.element;

  element.on('tab(docDemoTabBrief)', function (data) {
    console.log(data);
    $('.basicInfo>.breedinfo').show();
    $('.basicInfo>.bar').hide();
    $('.columns').removeClass('active');
  });

  laydate.render({
    elem: '.maintainDate'
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

//新增
$('.addBtn').click(function () {
  layer.open({
    type: 1,
    title: '栏/舍维护',
    area: ['600px', '520px'],
    content: $('#popup'),
    btn: ['确定', '取消']
  });
});

//视屏监控树状图
$('.vb_left>h3').on('click', function () {
  var ifshow = $(this).children('i');
  if (ifshow.html() == '-') {
    ifshow.html('+');
  } else {
    ifshow.html('-');
  }
  $(this).next('ul').slideToggle();
});
$('.vb_left li').on('click', function () {
  $('.vb_left li').removeClass('active');
  $(this).addClass('active');
});

//查看栏舍
$('.columns').on('click', function () {
  console.log($(this));
  $('.basicInfo>.breedinfo').hide();
  $('.basicInfo>.bar').show();
  $(this).addClass('active').siblings().removeClass('active');
});

//编辑栏舍
$('.modifiBtn').on('click', function () {
  $('.modify').show();
  $('.show').hide();
});
$('.cancel').on('click', function () {
  $('.modify').hide();
  $('.show').show();
});