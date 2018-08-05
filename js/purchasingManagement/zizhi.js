'use strict';

$(function () {
  changeNavTo('采购管理', '供应商信息');
  $('#tableWrap1').addClass('show-table');
  $('.add-block').addClass('hidSearchBox');
  // providercertList(1);
  layui.use('form', function () {
    var form = layui.form;
    form.on('radio(filter)', function (data) {
      console.log(data.elem); //得到radio原始DOM对象
      console.log(data.value); //被点击的radio的value值
    });
  });
});

layui.use(['layer', 'form'], function () {
  var layer = layui.layer,
      form = layui.form;
  form.on('radio', function (data) {
    if (data.value) {
      switch (data.value) {
        case "通用资质":
          $('.qualifica-search').removeClass('hidSearchBox');
          $('.add-block').addClass('hidSearchBox');
          $('.table-wrap').removeClass('show-table');
          $('#tableWrap1').addClass('show-table');

          // providercertList(1);
          break;
        case "无公害畜产品":
          $('.qualifica-search').addClass('hidSearchBox');
          $('.add-block').removeClass('hidSearchBox');
          $('.table-wrap').removeClass('show-table');
          $('#tableWrap2').addClass('show-table');
          $('#zizhiAdd').attr('href', './zizhi2-add.html');
          // providercertList(2);
          break;
        case "绿色畜产品":
          $('.qualifica-search').addClass('hidSearchBox');
          $('.add-block').removeClass('hidSearchBox');
          $('.table-wrap').removeClass('show-table');
          $('#tableWrap3').addClass('show-table');
          $('#zizhiAdd').attr('href', './zizhi3-add.html');
          // providercertList(3);
          break;
        case "有机畜产品":
          $('.qualifica-search').addClass('hidSearchBox');
          $('.add-block').removeClass('hidSearchBox');
          $('.table-wrap').removeClass('show-table');
          $('#tableWrap4').addClass('show-table');
          $('#zizhiAdd').attr('href', './zizhi4-add.html');
          // providercertList(4);
          break;
        case "动物防疫条件合格证":
          $('.qualifica-search').addClass('hidSearchBox');
          $('.add-block').removeClass('hidSearchBox');
          $('.table-wrap').removeClass('show-table');
          $('#tableWrap5').addClass('show-table');
          $('#zizhiAdd').attr('href', './zizhi5-add.html');
          // providercertList(5);
          break;
        default:
          break;
      }
    }
  });
  form.on('switch(filter)', function (data) {});
});

var currency = new Array();
var nuisanceless = new Array();
var green = {};
var organic = {};
var Geography = {};
function providercertList(type) {
  $("#qualificationslist").html('');
  var providerid = $("#providerid").val();
  if (type == "") {
    var type = $("#type").val();
  }
  var param = { "providerId": providerid, "type": type };
  //$("#customerList").html('');
}

function delObject(obj) {
  if (obj.length > 0) {
    for (var key in obj) {
      delete obj[key];
    }
  }
}

function del(id, type) {

  layer.confirm("您确定要删除吗？", function (index) {
    layer.closeAll('dialog');
    $.ajax({
      url: "/providercert/delete",
      type: "POST",
      contentType: 'application/text;charset=utf-8', // 设置请求头信息
      dataType: "text",
      data: id,
      success: function success(result) {
        if (result.code = '1') {
          providercertList(type);
        } else {
          layer.alert("删除失败");
        }
      }
    });
  });
}

function query() {
  $("#qualificationslist").html('');
  var providerid = $("#providerid").val();
  var zsName = $("#zsName").val();
  var type = $("#type").val();

  var param = { "providerId": providerid, "type": type, "zsName": zsName };
  //$("#customerList").html('');
  $.ajax({
    url: "/providercert/getProvidercertList",
    type: "POST",
    data: param,
    success: function success(data) {
      delObject(currency);
      delObject(nuisanceless);
      delObject(green);
      delObject(organic);
      delObject(Geography);
      //
      currency = data.data.currency;

      nuisanceless = data.data.nuisanceless;
      green = data.data.green;
      organic = data.data.organic;
      Geography = data.data.Geography;
      layui.use('laytpl', function () {
        var laytpl = layui.laytpl;
        // 使用方式跟独立组件完全一样
        var getTpl = $("#qualifications").html();
        if (currency.length > 0) {
          //	var update=$("#form1")
          //	update.find("input[type=radio][value='通用资质']").next().find("i").click();//将value是female的单
          laytpl(getTpl).render(currency, function (html) {
            $("#qualificationslist").html(html);
          });
        }
        if (nuisanceless.length > 0) {
          //var update=$("#form1")
          //update.find("input[type=radio][value='无公害农产品认证']").next().find("i").click();//将value是female的单
          laytpl(getTpl).render(nuisanceless, function (html) {
            $("#qualificationslist").html(html);
          });
        }
        if (green.length > 0) {
          //						var update=$("#update-form")
          //						update.find("input[type=radio][value='绿色食品认证']").next().find("i").click();//将value是female的单
          laytpl(getTpl).render(green, function (html) {
            $("#qualificationslist").html(html);
          });
        }
        if (organic.length > 0) {
          //var update=$("#update-form")
          //update.find("input[type=radio][value='有机产品认证']").next().find("i").click();//将value是female的单
          laytpl(getTpl).render(organic, function (html) {
            $("#qualificationslist").html(html);
          });
        }
        if (Geography.length > 0) {
          //var update=$("#update-form")
          //update.find("input[type=radio][value='农产品地理标识认证']").next().find("i").click();//将value是female的单
          laytpl(getTpl).render(Geography, function (html) {
            $("#qualificationslist").html(html);
          });
        }
      });
    }
  });
}
//新增资质信息-按类型跳转
$("body").delegate(".preview", "click", function () {
  var pic = $(this).attr("photos");
  var pics = pic.split(",");
  var phos = [];
  console.log(pics);
  $(pics).each(function (i, v) {
    var data1 = {
      "alt": "图片名",
      "pid": 666, //图片id
      "src": v, //原图地址
      "thumb": "" //缩略图地址
    };
    phos[i] = data1;
  });
  layer.photos({
    anim: 5, //0-6的选择，指定弹出图片动画类型，默认随机（请注意，3.0之前的版本用shift参数）
    photos: {
      "title": "", //相册标题
      "id": 123, //相册id
      "start": 0, //初始显示的图片序号，默认0
      "data": phos
    }
  });
});

function addSupplier() {

  var providerid = $("#providerid").val();
  window.location = "../purchasingManagement/addSupplier.html?providerid=" + providerid;
}

function baiseInfo() {

  var providerid = $("#providerid").val();
  window.location = "../purchasingManagement/supplierDetail?providerid=" + providerid;
}
//通用资质-新增
function zizhi1Add() {
  window.location = '../purchasingManagement/zizhi1-add.html';
}