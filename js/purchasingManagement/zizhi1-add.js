'use strict';

var URLS = "";
$(function () {
  changeNavTo('采购管理', '供应商信息');
  layui.use(['form', 'tree', 'laydate'], function () {
    var form = layui.form;
    var laydate = layui.laydate;

    laydate.render({
      elem: '#awardDate'
    });
    laydate.render({
      elem: '#startTime'
    });
    laydate.render({
      elem: '#endTime'
    });
    form.verify({});

    //点击保存按钮
    form.on('submit(*)', function (data) {

      ajaxSave(); //提交表单内容

    });
  });
});

/**
 * 点击上传按钮上传图片
 */
function ajaxFileUpload() {
  $.ajaxFileUpload({
    url: '/ueditor/dispatch?action=uploadimage&type=enterprise', //用于文件上传的服务器端请求地址
    //	url:'/yangZhiHuController/insertExcel',
    secureuri: false, //一般设置为false
    fileElementId: 'file1', //文件上传空间的id属性  <input type="file" id="file" name="file" />
    //dataType: 'json', //返回值类型 一般设置为json
    success: function success(data) //服务器成功响应处理函数
    {
      var objs = $.parseJSON($(data.body).html());
      console.log(objs);
      if (objs.state == "SUCCESS") {
        layer.msg("图片上传成功");
        //URLS=objs.url;
        //展示到页面上
        str = "";
        var urls = objs.url.split(",");
        $(urls).each(function (i, v) {
          v = "/enterprise" + v;
          str += '<li class="alreadyUpload">';
          str += '<div class="delFJ"></div>';
          str += '<div class="imgCon"><img width="120" height="152" src="' + v + '"/></div></li>';
          //                		if(i==(urls.length-1)){
          //                			URLS+=v;
          //                		}else{
          //                			URLS+=v+",";
          //                		}
          URLS += v + ",";
        });
        $("#edit2").prepend(str);
      } else {
        layer.msg("图片上传失败");
      }
    }
  });
}

/**
 * 点击图片上的x号
 */
$("body").delegate(".alreadyUpload", "click", function () {
  $(this).remove();
});

/**
 * 点击上传按钮
 */
$("body").delegate("#file1", "change", function () {
  if ($("#file1").val().length > 0) {
    ajaxFileUpload();
  } else {
    alert("请选择图片");
  }
});

function ajaxSave() {
  //private String type;   //证书类型  1：通用资质  2：无公害认证  3：绿色食品认证  4：有机产品认证  5：农产品地理标识
  if (URLS.substr(URLS.length - 1) == ",") {
    URLS = URLS.substr(0, URLS.length - 1);
  }
  var providercertObj = {};
  providercertObj.type = "1";
  providercertObj.id = $("#id")[0].value;
  providercertObj.providerId = $("#providerid")[0].value;
  providercertObj.zsName = $("#zsName")[0].value;
  providercertObj.awardDate = $("#awardDate")[0].value;
  providercertObj.validityPeriodStart = $("#startTime")[0].value;
  providercertObj.validityPeriodEnd = $("#endTime")[0].value;
  providercertObj.accessoryUrl = URLS;
  providercertObj.licenceIssuingAuthority = $("#licenceIssuingAuthority")[0].value;
  //providercertObj.url = $("#url")[0].value;//图片路径
  $.ajax({
    url: "/providercert/save",
    type: "POST",
    contentType: 'application/json;charset=utf-8', // 设置请求头信息
    dataType: "json",
    data: JSON.stringify(providercertObj),
    //data : $('#customerForm').serialize(),
    success: function success(result) {
      if (result.code = '1') {
        window.location = "/providercert/zizhi?providerId=" + result.providerId + '&type=' + result.type;
      } else {
        alert("添加失败");
      }
    }
  });
}