<template>
    <div id="container">
                <div class="alert">
                        <a href="">×</a>    
                        <h2>恭喜你</h2>
                        <p>注册成功</p>
                    </div>
                    
                    <div class="alert">
                        <a href="">×</a> 
                        <h2>通知</h2>
                        <p>收到一条信息</p>
                    </div>
                    
                    <div class="alert">
                        <a href="">×</a> 
                        <h2>警告</h2>
                        <p>查询信息错误</p>
                    </div>
                    
                    
                    <div class="alert">
                        <a href="">×</a> 
                        <h2>错误</h2>
                        <p>即将过期</p>
                    </div>
        </div>
</template>

<script>
    export default{}
</script>

<style scoped>
    html,body,div,h2,p,a{
        margin:0px;
        padding:0px;
    }

    a{
        text-decoration:none;
        float:right;
        color:white;
        font-weight:bold;
        font-size:20px;
    }

    h2{
        margin-bottom:20px;
    }

    #container{
        width:600px;
        margin:0 auto;
    }

    .alert{
        width:600px;
        height:80px;
        margin-top:30px;
        padding:20px 20px 10px;
        color:white;
        border-radius:5px;
        box-shadow:3px 2px 5px #ccc;
        opacity:0.8;
    }

    .alert:nth-child(1){
        background:#00BF53;
    }

    .alert:nth-child(2){
        background:#377DF5;
    }

    .alert:nth-child(3){
        background:#F29000;
    }

    .alert:nth-child(4){
        background:#FF0024;
    }

    .alert:hover{
        opacity:1;
        transition: all 0.5s;
        transform:scale(1.02,1.02);
    }

</style>