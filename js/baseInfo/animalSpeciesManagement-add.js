'use strict';

changeNavTo('基础信息', '动物品种管理');
var form, layer, upload;
layui.use(['form', 'upload', 'layer'], function () {
    upload = layui.upload;
    form = layui.form;
    layer = layui.layer;
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
//删除图片
$('body').on('click', '.delPic', function () {
    $(this).parent().remove();
});
//返回取消
$('.cancel').click(function () {
    window.history.go(-1);
});