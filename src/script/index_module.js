define([], function() {
    console.log(1)
    return{
        init: function(){
           $.ajax({
               url:'http://192.168.13.44/project/youpin/php/listdata.php',
               dataType:'json'
           }).done(function(data){
               console.log(data);
               let strhtml = '';
               $.each(data,function(index,value){
                //    console.log(value)
                   strhtml =`
                   <div class="sport">
                   <div class="sporttop"></div>
                   <div class="sportLeft"></div>
                   <div class="sportCenter">
                       <div class="sportCenterbox"></div>
                       <div class="sportCenterbox"></div>
                       <div class="sportCenterbox"></div>
                       <div class="sportCenterbox"></div>
                   </div>
                   <div class="sportRight"></div>
                   <div class="sportbottom"></div>
               </div>
                   `
               })
               $('.sport').append(strhtml);

           })
        }
    }  
});