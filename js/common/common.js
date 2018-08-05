'use strict';

/**
 * Created by 九次方前端研发部-任传真 <rcz@jusfoun.com> on 2018/1/22.
 */
//切换导航菜单
function changeNavTo(navTxt, lb1, lb2) {
    $('.left-bar>ul>li').each(function () {
        if ($(this).find('span').text() === navTxt) {
            $(this).addClass('active').siblings().removeClass('active');
            $(this).children('.listText').slideDown('200').siblings().find('.listText').hide();
        }
    });
    $('.left-bar .listText>li').each(function () {
        if ($(this).find('a').text() === lb1) {
            $(this).addClass('active').siblings().removeClass('active');
        }
    });

    // if (lb2) {
    //     $('.itemTitle li').each(function() {
    //         if ($(this).find('a').text() === lb2) {
    //             $(this).addClass('active').siblings().removeClass('active');
    //         }
    //     })
    // }
}

$('.del').click(function () {
    layer.open({
        type: 1,
        title: '删除',
        content: '<div style="padding: 20px 100px;">你确定要删除吗？</div>',
        btn: ['确定', '取消']
    });
});