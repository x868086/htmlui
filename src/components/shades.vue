<template>
    <div id="container">
    <ul class="nav-list">
        <li>
                <a href="#" class="title">产品管理</a>
                    <ul class="nav-sub">
                        <li><a href="#">产看店铺</a></li>
                        <li><a href="#">发布产品</a></li>
                        <li><a href="#">查看产品</a></li>
                        <li><a href="#">已卖出产品</a></li>
                    </ul>
            </li>
            
        <li>
                <a href="#" class="title">采购管理</a>
                <ul class="nav-sub">
                        <li><a href="#">发布采购</a></li>
                        <li><a href="#">查看采购</a></li>
                        <li><a href="#">已收到的报价单</a></li>
                        <li><a href="#">我的报价单</a></li>
                        <li><a href="#">已关注的店铺</a></li>
                        <li><a href="#">已关注的商品</a></li>
                    </ul>
        </li>
            
            <li>
                <a href="#" class="title">订单管理</a>
                <ul class="nav-sub">
                        <li><a href="#">我的订单</a></li>
                        <li><a href="#">退单申请</a></li>
                    </ul>
        </li>
            
            <li>
                <a href="#" class="title">金融管理</a>
                <ul class="nav-sub">
                        <li><a href="#">需求申请</a></li>
                        <li><a href="#">我的申请</a></li>
                        <li><a href="#" class="flag">额度变更</a></li>
                    </ul>
        </li>
            
            
    </ul>
    </div>
</template>


<script>
// $(document).ready(function(){
// 	$(".nav-list").on("click","li>a",function(event){
// 		var $activeNode=$(event.target)
// 	  if($activeNode.hasClass("title")){
// 			$activeNode.addClass("active")
// 			          .parent().siblings().find("a")
// 			        .removeClass("active")
// 	  }
// 		$activeNode.siblings().slideToggle(800);
// 		$activeNode.parent().siblings().find(".nav-sub").hide(800);
// 	});
// });
import $ from 'jquery';
var init=(
    function(){
        function render(){
                $(document).ready(function(){
                    $(".nav-list").on("click","li>a",function(event){
                    var $activeNode=$(event.target)
                    if($activeNode.hasClass("title")){
                        $activeNode.addClass("active")
                                    .parent().siblings().find("a")
                                .removeClass("active")
                    }
                    $activeNode.siblings().slideToggle(800);
                    $activeNode.parent().siblings().find(".nav-sub").hide(800);
                    })

                })
        }
            return {
                render:render
            }
    }
)()


    export default{
        methods:{
            load:function(){
                init.render()
            }
        },
        //操作DOM必须在mouted生命周期中进行
        mounted:function(){
            this.load()
        }
    }
</script>

<style scoped>
    html,body,div,ul,li,a{
        margin:0px;
        padding:0px;
    }

    a{
        text-decoration:none;
        line-height:16px;
    }

    ul,li{
        list-style:none;
    }


    .nav-list>li>a{
    font-size:16px;
        color:#333;
        font-weight:bold;
    display:inline-block;
        border-top:1px solid #ccc;
        border-left:1px solid #ccc;
        border-right:1px solid #ccc;
        width:120px;
        padding:20px 50px;
        text-align:center;
    }


    .nav-sub>li>a{
    font-size:15px;
        color:black;
    display:inline-block;
        width:120px;
        border-top:1px solid #ccc;
        border-left:1px solid #ccc;
        border-right:1px solid #ccc;
        padding:10px 50px;
        text-align:center;
        background:#eee;
    }

    .nav-sub>li>a:hover{
        background:#ffcc00;
    }

    .nav-list>li:last-child >a{
        border-bottom:1px solid #ccc;
    }

    .nav-list>li:last-child >.nav-sub>li:first-child >a{
        border-top:none;
    }

    .flag{
        border-bottom:1px solid #ccc;
    }

    .nav-sub{
        display:none;
    }

    .active{
        color:#ff6633 !important;
    }

</style>