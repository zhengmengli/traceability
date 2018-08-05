'use strict';

changeNavTo('基础信息', '包装规格');
var form, layer, laypage, upload;
layui.use(['form', 'laypage', 'upload', 'layer'], function () {
    laypage = layui.laypage;
    form = layui.form;
    layer = layui.layer;
    upload = layui.upload;
    //分页
    laypage.render({
        elem: 'page',
        count: 100,
        layout: ['prev', 'page', 'next', 'skip'],
        jump: function jump(obj) {
            console.log(obj);
        }
    });
    //图片上传
    upload.render({
        elem: '#test2',
        url: '#',
        multiple: true,
        before: function before(obj) {
            //预读本地文件示例，不支持ie8
            obj.preview(function (index, file, result) {
                $('.picList').append('<li><img src="' + result + '" alt="' + file.name + '" class="layui-upload-img"><span class="delPic">x</span></li>');
            });
        },
        done: function done(res) {
            //上传完毕
        }
    });
});
//修改新增
$('body').on('click', '.add-btn,.fix', function () {
    layer.open({
        type: 1,
        title: '提示框',
        area: ['600px', '580px'],
        content: $('#addCover'),
        btn: ['确定', '取消']
    });
});
//删除图片
$('body').on('click', '.delPic', function () {
    $(this).parent().remove();
});
//查看
$('body').on('click', '.check', function () {
    layer.open({
        type: 1,
        title: '提示框',
        area: ['520px', '510px'],
        content: $('#checkCover'),
        btn: ['确定', '取消']
    });
});