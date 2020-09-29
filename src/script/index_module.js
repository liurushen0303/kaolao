define([], function () {
    console.log(1)
    return {
        init: function () {
            $.ajax({
                url: 'http://192.168.13.44/project/youpin/php/listdata.php',
                dataType: 'json'
            }).done(function (data) {
                //    console.log(data);
                let strhtml = '';
                $.each(data, function (index, value) {
                    //    console.log(index)s
                    console.log(value)
                    strhtml = `
                   <div class="sportLeft" style="background-image: url();">
                       <ul>
                           <li>
                               <a href=""><span>爆款清单</span> </a>
                           </li>
                           <li>
                               <a href=""><span>童装童鞋</span> </a>
                           </li>
                           <li>
                               <a href=""><span>连衣裙</span> </a>
                           </li>
                           <li>
                               <a href=""><span>卫衣</span> </a>
                           </li>
                           <li>
                               <a href=""><span>文胸</span> </a>
                           </li>
                           <li>
                               <a href=""><span>外套</span> </a>
                           </li>
                       </ul>
                   </div>
                   <div class="sportCenter">
                       <div class="sportCenterbox"></div>
                       <div class="sportCenterbox"></div>
                       <div class="sportCenterbox"></div>
                       <div class="sportCenterbox"></div>
                   </div>
                   <div class="sportRight">
                       <h3 class="sportRighttop">最新热卖
                           <table class="pagebox">
                               <tbody>
                                   <tr>
                                       <td>
                                           <a href="" class="icon"></a>
                                           <a href="" class="icon"></a>
                                           <a href="" class="icon"></a>
                                       </td>
                                   </tr>
                               </tbody>
                           </table>
                       </h3>
                       <div class="tab_box">
                           <div class="tab_content" style="display: block;">
                               <div class="item">
                                   <a href=""></a>
                               </div>
                               <div class="item">
                                   <a href=""></a>
                               </div>
                               <div class="item">
                                   <a href=""></a>
                               </div>
                               <div class="item">
                                   <a href=""></a>
                               </div>
                           </div>
                           <div class="tab_content" >
                               <div class="item">
                                   <a href=""></a>
                               </div>
                               <div class="item">
                                   <a href=""></a>
                               </div>
                               <div class="item">
                                   <a href=""></a>
                               </div>
                               <div class="item">
                                   <a href=""></a>
                               </div>
                           </div>
                           <div class="tab_content">
                               <div class="item">
                                   <a href=""></a>
                               </div>
                               <div class="item">
                                   <a href=""></a>
                               </div>
                               <div class="item">
                                   <a href=""></a>
                               </div>
                               <div class="item">
                                   <a href=""></a>
                               </div>
                           </div>
                       </div>
                   </div>
                   <div class="sportbottom">
                       <div class="sportbottomtop">
                           <span>热卖品牌</span>
                       </div>
                       <div class="sportbottombox">
                           <a href="" class="pic1"></a>
                           <a href="" class="pic"></a>
                           <a href="" class="pic"></a>
                           <a href="" class="pic"></a>
                           <a href="" class="pic"></a>
                       </div>
                   </div>
                   `
                })
                $('.sport').append(strhtml);

            })
            const $menuli = $('.list li'); //18个li
            const $item = $('.secondarycats .secondarbox'); //18块内容
            const $cartlist = $('.secondarycats'); //右边的内容框
            //鼠标移入，添加类名，显示右边的内容框
            $menuli.on('mouseover', function () {
                $(this).addClass('active').siblings().removeClass('active');
                $item.eq($(this).index()).show().siblings('.secondarbox').hide(); //当前和li匹配的item显示，其他的隐藏
                $cartlist.show();
            });
            $menuli.on('mouseout', function () {
                $cartlist.hide();
                $('.list').show();     
            });
        }
    }
});
