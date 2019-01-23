$(function(){
   // alert(1);
    $('#bannerAdd').click(function(){
        alert('ajax提交');

        //添加之后自动关闭模态框   关闭之前单击事件还没有结束，所以不能写在单击事件外面
        $('#myModal').modal('hide');
    });
   

})