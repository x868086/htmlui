<template>
    <div id="container">
        <div class="btn btn1">
        <a href="#">download</a>
        <p class="alert">1.2MB Zip</p>
        </div>
        
        <div class="btn">
        <div class="btn2">
        <div class="ac"><a href="#">Home</a></div>
        <div class="sta"><a href="#">See Us</a></div>
        </div>
        <div class="btn btn2">
        <div class="ac"><a href="#">About</a></div>
        <div class="sta"><a href="#">Meet Us</a></div>
        </div>
        </div>
        
        <div class="btn">
        <div class="sm"><i class="fas fa-home fa-lg"></i>
            <a href="#">HOME</a>
        </div>
        <div class="sm"><i class="fas fa-info-circle fa-lg"></i>
            <a href="#">ABOUT</a>
        </div>
        <div class="sm"><i class="fas fa-phone-volume fa-lg"></i>
            <a href="#">SERVICE</a>
        </div>
        </div>
        
        <div class="btn">
        <div class="down">
            <a href="#">download</a>
        </div>
        </div>
        
    </div>
</template>


<script>
    import fontstyle from './js/all.js'; //引入第三方js库
    export default {
    }
</script>

<style scoped>
    div,a,p{
    margin:0px;
    padding:0px;
    font-family:Arial;
    }

    a{
        text-decoration:none;
        color:white;
    }

    .btn{
    margin-top:30px;
    }

    #container{
    width:500px;
    margin:0 auto;
    text-align:center;
    }


    .btn1{
    margin:0 auto;
    width:200px;
    border:1px solid #ccc;
    border-radius:8px;
    padding:10px;
    text-align:center;
    vertical-align:middle;
    background:#00A8D3;
    font-size:20px;
    position:relarive;
    }

    .alert{
    width:150px;
    background:#1F1F1F;
    color:white;
    font-size:12px;
    padding:5px;
    border-radius:8px;
    position:absolute;
    margin-left:20px;
    top:25px;
    z-index:-2;
    transition:all 0.5s;
    }

    .btn1:hover .alert{
    top:50px;
    z-index:-2;
    }

    .btn1:hover a{
    color:#ccc;
    text-decoration:underline;
    }



    .sta:before,.ac:before{
    content:"";
    display:inline-block;
    height:100%;
    vertical-align:middle;
    }

    .btn2 .sta{
    width:200px;
    height:100px;
    background:#1F1F1F;
    text-align:center;
    vertical-align:middle;
    font-size:26px;
    }

    .btn2{
    display:inline-block;
    position:relative;
    overflow:hidden;
    }

    .btn2 .ac{
    width:200px;
    height:100px;
    background:#E70F23;
    text-align:center;
    vertical-align:middle;
    font-size:26px;
    position:absolute;
    top:0px;
    transition:all 0.5s;
    }

    .btn2:hover .ac{
    top:-100px;
    }



    .btn .sm{
    margin-left:auto;
    margin-right:auto;
    }


    .sm{
    width:40px;
    height:40px;
    background:#CC3300;
    margin:20px;
    cursor:pointer;
    position:relative;
    text-align:center;
    overflow:hidden;
    }

    .sm a{
    display:inline-block;
    line-height:40px;
    width:100px;
    height:40px;
    position:absolute;
    left:0px;
    font-size:20px;
    color:#ddd;
    z-index:-2;
    }

    .btn .sm:nth-child(1) a{
        background:#64B40A;
    }

    .btn .sm:nth-child(2) a{
        background:#0A939D;
    }

    .btn .sm:nth-child(3) a{
        background:#6A0D27;
    }

    .sm:hover>a{
    transition:all 1s;
    position:absolute;
    left:40px;
    }


    .sm:hover{
    overflow:visible;
    }

    .sm{
    color:#fff;
    text-align:center;
    line-height:40px;
    }

    .down{
    width:120px;
    height:40px;
    line-height:40px;
    background:#2878E5;
    margin-left:auto;
    margin-right:auto;
    margin-bottom:15px;
    cursor:pointer;
    border-radius:9px;
    box-shadow:0px 9px 1px #1E4766;
    position:relative;
    }

    .down:active{
    background:#2878E5;
    box-shadow:0px 5px 1px #1E4766;
    top:4px;
    }

</style>