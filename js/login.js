$(function() {
    layui.use('form', function() {
        var form = layui.form;

        //监听提交
        // form.on('submit(loginSys)', function(data) {
        //     location.href = './purchasingManagement/purchasingManagement.html';
        // });
    });
});
$('.login').click(function() {
    // window.location.href = './purchasingManagement/purchasingManagement.html';
    window.location.href = './purchasingManagement/purchasingManagement.html';
})