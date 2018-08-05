'use strict';

$(function () {
  changeNavTo('采购管理', '供应商信息');
  $(".ztree").hover(function () {
    $(this).show();
  }, function () {
    var that = this;
    setTimeout(function () {
      $(that).hide();
    }, 1000);
  });

  layui.use(['form', 'tree'], function () {
    var form = layui.form;

    // getArea();
  });
});

function del() {
  layer.confirm("您确定要删除吗？", function (index) {
    layer.closeAll('dialog');
  });
}

function addSupplier() {
  window.location = "../purchasingManagement/addSupplier.html";
}

function supplierDetail(id) {
  window.location = "/provider/supplierDetail?id=" + id;
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