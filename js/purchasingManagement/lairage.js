'use strict';

changeNavTo('采购管理', '动物采购');
layui.use(['form', 'laydate'], function () {
  var laydate = layui.laydate;
  var form = layui.form;
  laydate.render({
    elem: '.input-bg'
  });
  // 监听全选
  form.on('checkbox(checkAllLeft)', function (data) {
    console.log(data.elem.checked); //是否被选中，true或者false
    if (data.elem.checked) {
      $("input[type='checkbox'][name='left']").prop("checked", true);
      //重新渲染所有checkbox
      form.render('checkbox', 'checkedLeft');
    } else {
      $("input[type='checkbox'][name='left']").prop('checked', false);
      //重新渲染所有checkbox
      form.render('checkbox', 'checkedLeft');
    }
  });
  form.on('checkbox(checkAllRight)', function (data) {
    console.log(data.elem.checked); //是否被选中，true或者false
    if (data.elem.checked) {
      $("input[type='checkbox'][name='right']").prop("checked", true);
      //重新渲染所有checkbox
      form.render('checkbox', 'checkedRight');
    } else {
      $("input[type='checkbox'][name='right']").prop('checked', false);
      //重新渲染所有checkbox
      form.render('checkbox', 'checkedRight');
    }
  });
  // 监听单选
  form.on('checkbox(checkLeft)', function (data) {

    form.render('checkbox', 'checkedLeft');
  });
  form.on('checkbox(checkRight)', function (data) {

    form.render('checkbox', 'checkedRight');
  });
});

$('.cancel').click(function () {
  window.history.go(-1);
});
//上箭头点击向右表格添加数据
$('#arrowUp').click(function () {
  var trEle = $('#tableLeft tr');
  var len = trEle.length;
  var html = '',
      nullHtml = '';
  for (var i = 0; i < len; i++) {
    if ($(trEle[i]).find('input')[0].checked) {
      $(trEle[i]).remove(); //删除该行
      $(trEle[i]).find('input')[0].name = 'right';
      var tdHtml = $(trEle[i]).find('td')[2];
      var removeHtml = $(trEle[i])[0].innerHTML;
      if ($(tdHtml).text()) {
        html += '<tr>' + removeHtml + '</tr>'; //耳标号不为空
      } else {
        nullHtml += '<tr>' + removeHtml + '</tr>'; //耳标号为空
      }
    }
  }
  $('#tableRight').prepend(html);
  $('#tableRight').append(nullHtml);
});
//下箭头点击向左表格添加数据
$('#arrowDown').click(function () {
  var trEle = $('#tableRight tr');
  var len = trEle.length;
  var html = '',
      nullHtml = '';
  for (var i = 0; i < len; i++) {
    if ($(trEle[i]).find('input')[0].checked) {
      $(trEle[i]).remove(); //删除该行
      $(trEle[i]).find('input')[0].name = 'left';
      var tdHtml = $(trEle[i]).find('td')[2];
      var removeHtml = $(trEle[i])[0].innerHTML;
      if ($(tdHtml).text()) {
        html += '<tr>' + removeHtml + '</tr>'; //耳标号不为空
      } else {
        nullHtml += '<tr>' + removeHtml + '</tr>'; //耳标号为空
      }
    }
  }
  $('#tableLeft').prepend(html);
  $('#tableLeft').append(nullHtml);
});