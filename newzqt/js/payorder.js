
$(function(){
    //支付方式选择 如果可以勾掉 就放开这个代码
    // $(".paytype").on("click","li",function () {
    //     if ($(this).hasClass('select')){
    //         $(this).removeClass("select").find(".iconfont").attr("class","f_right iconfont icon_select");
    //     }else {
    //         $(this).addClass("select").find(".iconfont").attr("class","f_right iconfont icon_continue_hover");
    //     }
    // });
    //模态框行为
    $(".quit_btn").click(function(){
        $(".model_fail").fadeIn(400);
    })
    $(".btn_close").click(function(){
        $(this).parents('.model').fadeOut(400);
    })
    //手机号正则
    var regr = /^1[3|4|5|7|8][0-9]{9}$/;
    //获取验证码
    $(".tel").click(function(){
        if(!regr.test($(".tel").val())){
            $(".tel").css({"border":"0","color":"#272727"}).val("");
        }
    })
    $(".tel").blur(function(){
        var phone=$(".tel").val() ;
        if(phone==""){
            $(".tel").css({"border":"2px solid red","color":"red"}).val("手机号不能为空");
        }else if(!regr.test(phone)){
            $(".tel").css({"border":"2px solid red","color":"red"}).val("手机号有误");
        }
    })
    $(".tel").keyup(function () {
        var phone=$(".tel").val() ;
        if (phone.length === 11&&regr.test(phone)) {
            $('#countdown').removeAttr('disabled')
        }
    })
    $("#countdown").click(function(){
        if($(".tel").val()!="手机号有误"&&$(".tel").val()!="手机号不能为空"&&$(".tel").val()!=""){
            settime();
        }
    })
    //倒计时
    var countdown=120;  //设置秒s
    function settime(){
        if (countdown == 0) {
            $("#countdown").removeAttr("disabled");
            $("#countdown").html("获取验证码");
            countdown = 120;
            return;
        } else {
            $("#countdown").attr("disabled","disabled");
            $("#countdown").html("重新发送(" + countdown + ")");
            countdown--;
        }
        setTimeout(function() {
                settime();
            },1000)
    }
    //服务协议
    $("#confirn").click(function(){
        if($(this).attr("data-select")=="true"){
            $(this).attr("data-select","false").attr("class","f_left iconfont icon_select")
        }else{
            $(this).attr("data-select","true").attr("class","f_left iconfont icon_continue_hover")
        }
    })
})