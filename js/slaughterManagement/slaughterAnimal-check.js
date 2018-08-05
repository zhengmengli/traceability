'use strict';

changeNavTo('屠宰管理', '动物屠宰');
layui.use(['form', 'element', 'upload', 'laypage'], function () {
	var form = layui.form;
	var upload = layui.upload;
	var element = layui.element;
	var laypage = layui.laypage;

	element.on('tab(docDemoTabBrief)', function (data) {
		console.log(data);
	});

	//表格下拉框事件
	form.on('select(hege)', function (data) {
		console.log(data);
		if (data.value == '不合格') {
			data.othis.parents('tr').addClass('gray').find('.weightIpt').val('0');
		}
		if (data.value == '合格') {
			data.othis.parents('tr').removeClass('gray');
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

	upload.render({
		elem: '#imgUp2',
		url: '/upload/',
		multiple: true,
		before: function before(obj) {
			//预读本地文件示例，不支持ie8
			obj.preview(function (index, file, result) {
				$('#imgList2').append('<div class="imgWrap"><img src="' + result + '" alt="' + file.name + '" class="layui-upload-img"><i onclick="removeImg(this)" class="layui-icon close">&#x1006;</i></div>');
			});
		},
		done: function done(res) {
			//上传完毕
		}
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

//移除图片
function removeImg(dom) {
	//	console.log($(dom).parents('.imgWrap'));
	$(dom).parents('.imgWrap').remove();
}

$('.cancel').click(function () {
	window.history.go(-1);
});