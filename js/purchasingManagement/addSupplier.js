'use strict';

var laypage;
var layer;
var form;
var laydate;
var totalPage;
var laytpl;
var map;
var areacod;
$(function () {
  changeNavTo('采购管理', '供应商信息');

  //分页，表单，日历
  layui.use(['laypage', 'layer', 'form', 'laydate', 'laytpl'], function () {

    layer = layui.layer;
    form = layui.form;
    laytpl = layui.laytpl;

    //点击保存按钮
    form.on('submit(*)', function (data) {
      // console.log(data.elem) //被执行事件的元素DOM对象，一般为button对象
      // console.log(data.form) //被执行提交的form对象，一般在存在form标签时才会返回
      //console.log(data.field) //当前容器的全部表单字段，名值对形式：{name: value}

      ajaxSave(); //提交表单内容

    });
  });

  // 百度地图API功能
  map = new BMap.Map("allmap");
  map.centerAndZoom(new BMap.Point(116.331398, 39.897445), 11);
  map.enableScrollWheelZoom(true);
});

function queryEntInfo() {
  var rpId = $("#rpId").val();
  if ($(".rph").val() != "") {
    $.ajax({
      url: "/sysCustomer/queryEnterpriselist",
      type: "post",
      dataType: "json",
      data: { "name": $(".rph").val() },
      success: function success(data) {
        if (data.page.list.length > 0) {
          console.log(data);
          $(".rph").val(data.page.list[0].entName);
          $("#rpId").val(data.page.list[0].id);
          $("#phone").val(data.page.list[0].phone);
          $("#principal").val(data.page.list[0].principal);
          $("#address").val(data.page.list[0].address);
          $("#latitude").val(data.page.list[0].latitude);
          $("#longitude").val(data.page.list[0].longitude);
          $("#businessEntity").val(data.page.list[0].businessEntity);
          $("#companiesThat").val(data.page.list[0].companiesThat);
          var areaname = "";
          var areacode = "";
          console.log(data.page.list);
          if (data.page.list[0].provinceName != null) {
            areaname = data.page.list[0].provinceName.areaname;
            areacode = data.page.list[0].provinceName.areacode;
          }

          if (data.page.list[0].cityName != null) {
            areaname = data.page.list[0].cityName.areaname;
            areacode = data.page.list[0].cityName.areacode;
          }

          if (data.page.list[0].countyName != null) {
            areaname = data.page.list[0].countyName.areaname;
            areacode = data.page.list[0].countyName.areacode;
          }
          $("#areaName").val(areaname);
          $("#areaCode").val(areacode);
        } else {
          //$(".rph").val("");
          $("#rpId").val("");
          $("#phone").val("");
          $("#principal").val("");
          $("#address").val("");
          $("#latitude").val("");
          $("#longitude").val("");
          $("#businessEntity").val("");
          $("#companiesThat").val("");
          $("#areaName").val("");
          $("#areaCode").val("");
        }
      }
    });
  }
}

function getProviderInfo() {
  var id = $("#id").val();
  $.ajax({
    type: "post",
    url: "/provider/info",
    //contentType : 'application/text;charset=utf-8', // 设置请求头信息
    //dataType : "text",
    data: { "id": id },
    success: function success(data) {
      var html = '';
      $.each(data.data.typeList, function (idx, obj) {
        html += '<option value=' + obj.id + '>' + obj.name + '</option>';
      });

      $("#entType").html(html);
      if (data.syBaseProvider != null) {
        //设置默认值
        $("#entType option").each(function (i, v) {
          if (data.syBaseProvider.type == $(v).val()) {
            $(v).attr("selected", "selected").siblings().removeAttr("selected");
          }
        });
      }

      form.render();

      map = new BMap.Map("allmap");
      map.centerAndZoom(new BMap.Point(116.331398, 39.897445), 11);
      map.enableScrollWheelZoom(true);
      if (data.syBaseProvider != null) {
        theLocation(data.syBaseProvider.longitude, data.syBaseProvider.latitude);
      }
    }
  });
}

//用经纬度设置地图中心点
function theLocation(x, y) {
  if (x != "" && y != "") {
    map.clearOverlays();
    var new_point = new BMap.Point(x, y);
    var marker = new BMap.Marker(new_point); // 创建标注
    map.addOverlay(marker); // 将标注添加到地图中
    map.panTo(new_point);
  }
}

/**
 * 获取经纬度 -企业地址
 */
$("body").delegate(".address", "blur", function () {
  var address = $(".address").val();
  var areaEnt = $(".areaEnt").val();
  getlonandlat(areaEnt + address);
});

/**
 * 根据地址获取经纬度方法
 */
function getlonandlat(address) {
  var param = { "address": address };
  $.ajax({
    type: "post",
    url: "/syBaseEnterprise/getLonAndLat",
    data: param,
    success: function success(data) {
      $(".longitude").val(data.data.lng);
      $(".latitude").val(data.data.lat);
      theLocation(data.data.lng, data.data.lat);
    }
  });
}

//$(".saveSubmit").on('click',function(){
//	ajaxSave();
//
//})
function ajaxSave() {
  var supplierObj = {};
  supplierObj.internalEntid = $("#rpId")[0].value;
  if ($("#rpId")[0].value == null || $("#rpId")[0].value == "") {
    supplierObj.innerFlag = "2";
  } else {
    supplierObj.innerFlag = "1";
  }
  supplierObj.id = $("#id")[0].value;
  supplierObj.name = $("#name")[0].value;
  supplierObj.businessEntity = $("#businessEntity")[0].value;
  supplierObj.principal = $("#principal")[0].value;
  supplierObj.address = $("#address")[0].value;
  supplierObj.longitude = $("#longitude")[0].value;
  supplierObj.latitude = $("#latitude")[0].value;
  supplierObj.phone = $("#phone")[0].value;
  supplierObj.type = $("#entType")[0].value;
  supplierObj.areaName = $("#areaName")[0].value;
  supplierObj.companiesThat = $("#companiesThat")[0].value;
  supplierObj.countyAreacode = areacod;
  supplierObj.cityAreacode = areacod;
  supplierObj.provinceAreacode = areacod;
  $.ajax({
    url: "/provider/save",
    type: "POST",
    contentType: 'application/json;charset=utf-8', // 设置请求头信息
    dataType: "json",
    data: JSON.stringify(supplierObj),
    //data : $('#customerForm').serialize(),
    success: function success(result) {
      if (result.tmp == 1) {
        layer.alert("企业名称已存在");
      } else {
        $("#providerid").val(result.providerId);
        if (result.code = '1') {
          layer.alert("保存成功");
          //window.location="/provider/view";
        } else {
          alert("添加失败");
        }
      }
    }
  });
}

function zizhi() {
  var providerid = $("#providerid").val();
  window.location = "../../html/purchasingManagement/zizhi.html";
  // if(providerid!=""){
  //   window.location="/providercert/zizhi?providerId="+providerid;
  // }else{
  //   layer.alert("请填写基本信息");
  // }
}

function getArea() {
  $.ajax({
    type: "post",
    url: "/syArea/getAllArea",
    success: function success(data) {
      showTree1(data.data);
    }
  });
}

/**
 * 树形下拉
 */
function showTree1(treeData) {
  var setting = {
    data: {
      key: {
        title: "t"
      },
      simpleData: {
        enable: true
      }
    },
    callback: {
      onClick: onClick
    }
  };

  var zNodes = treeData;

  function onClick(event, treeId, treeNode, clickFlag) {
    console.log(treeNode);
    $(".areaEnt").val(treeNode.name);
    areacod = treeNode.id + "";
    areaname = treeNode.name;
    $("#treess").hide();
  }

  $(document).ready(function () {
    $.fn.zTree.init($("#treess"), setting, zNodes);
  });
}
//清空产品分类input
//$(".areaEnt").val("");

/**
 * 点击产品分类文本框，展示产品分类树
 */
$("body").delegate(".areaEnt", "click", function () {
  getArea();
  $("#treess").show();
});