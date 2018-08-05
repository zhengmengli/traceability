'use strict';

changeNavTo('物联网管理', '视频图片');
layui.use(['form', 'upload', 'laydate'], function () {
	var form = layui.form;
	var upload = layui.upload;
	var laydate = layui.laydate;

	laydate.render({
		elem: '#dateRange',
		range: true
	});

	form.on('radio(update)', function (data) {
		console.log(data.value); //被点击的radio的value值
		if (data.value == '视频') {
			$('.vedioBlock').show();
			$('.imgBlock').hide();
		}
		if (data.value == '图片') {
			$('.vedioBlock').hide();
			$('.imgBlock').show();
		}
	});

	upload.render({
		elem: '#vdoUp',
		url: '/upload/',
		accept: 'video', //视频
		done: function done(res) {
			console.log(res);
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

$('.cancel').click(function () {
	window.history.go(-1);
});