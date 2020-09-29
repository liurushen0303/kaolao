var t=null;
let index=0;
//自动播放
t=setInterval(auto, 2000);
function auto(){
    index++;
    if(index>4){
        index=0;
    }
    $('.slideshow ul li').eq(index).fadeIn(300).siblings().fadeOut(300);
};
//点击底部按钮图片切换
$(".slideshow ol li").click(function() {
    var index = $(this).index(); //获取索引 图片索引与按钮的索引是一一对应的
    // console.log(index);
    $(".slideshow ul li").eq(index).fadeIn(300).siblings().fadeOut(300); // siblings  找到 兄弟节点(不包括自己）
});
//上一张、下一张切换
$("#left").click(function() {
    index--;
    if (index <0){
        index = 4
    }
    // console.log(index);
     $(".slideshow ul li").eq(index).fadeIn(300).siblings().fadeOut(300); // siblings  找到 兄弟节点(不包括自己）必须要写
}); // $(".bannerpic")获取到的是一个数组集合 。所以可以用index来控制
$("#right").click(function() {
    index++;
    if (index > 4) {
        index = 0
    }
    // console.log(index);
    $(".slideshow ul li").eq(index).fadeIn(300).siblings().fadeOut(300); 
});
//鼠标移入轮播图，暂停
// $('#banner').mouseover(function(){
//     clearInterval(t);
// })
//鼠标移入移出轮播图，播放
$('.slideshow').hover(
    //移入
    function(){
    clearInterval(t);
    },
    //移出
    function(){
        t=setInterval(auto, 2000);
        function auto(){
            index++;
            if(index>4){
                index=0;
            }
            $('.slideshow ul li').eq(index).fadeIn(300).siblings().fadeOut(300);
        };
    }
);

