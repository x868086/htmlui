<template>
    <div id="container">
        <div id="load">
        </div>
    </div>

</template>

<script>
    export default{

    }
</script>

<style scoped>
    #container{
        background:lightblue;
        width:500px;
        height:500px;
        position:relative;
    }

    #load{
        width:10px;
        height:50px;
        background:white;
        position:relative;
        left:50%;
        top:100px;
        animation:load 1s ease-in-out 0.16s infinite;
        animation-direction:alternate;
    }

    #load:before{
        content:"";
        display:inline-block;
        width:10px;
        height:50px;
        background:white;
        position:absolute;
        left:-20px;
        animation:load 1s ease-in-out infinite;
        animation-direction:alternate;
    }

    #load:after{
        content:"";
        display:inline-block;
        width:10px;
        height:50px;
        background:white;
        position:absolute;
        left:20px;
        animation:load 1s ease-in-out 0.32s infinite;
        animation-direction:alternate;
    }

    @keyframes load{
        0%{box-shadow:0 0 white;}
        100%{box-shadow:0 -10px white;height:60px;}
    }
</style>