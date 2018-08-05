'use strict';

changeNavTo('养殖管理', '动物养殖');
var laydate, form, layer, laypage;
layui.use(['form', 'laydate', 'laypage', 'layer', 'element'], function () {
	var laydate = layui.laydate;
	var laypage = layui.laypage;
	var element = layui.element;
	var form = layui.form;

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
	laypage.render({
		elem: 'page2',
		count: 100,
		layout: ['prev', 'page', 'next', 'skip'],
		jump: function jump(obj) {
			console.log(obj);
		}
	});
});

//防疫
$('.check').click(function () {
	layer.open({
		type: 1,
		title: '新增防疫记录',
		area: ['600px', '380px'],
		content: $('#popup'),
		btn: ['确定', '取消']
	});
});

//动物养殖切换
$('.pigFarmLink').on('click', function () {
	$('.pig-farm').show().siblings().hide();
});
$('.xFarmLink').on('click', function () {
	$('.xfarm').show().siblings().hide();
});
$('.eggFarm').on('click', function () {
	$('.egg-farm').show().siblings().hide();
});

$('.mytree>h3').on('click', function () {
	var ifshow = $(this).children('i');
	if (ifshow.html() == '-') {
		ifshow.html('+');
	} else {
		ifshow.html('-');
	}
	$(this).next('ul').slideToggle();
});
$('.mytree li').on('click', function () {
	$('.mytree li').removeClass('active');
	$(this).addClass('active');
});