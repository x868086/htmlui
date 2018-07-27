<template>
    <div id="loading">
    </div>
</template>


<script>
    export default{

    }
</script>

<style scoped>
    body{
	background:lightblue;
}

@keyframes load{
  0%{}
	25%{transform:rotate(90deg)}
	50%{transform:rotate(180deg)}
	75%{transform:rotate(270deg)}
	100%{transform:rotate(360deg)}
}

#loading{
	width:100px;
	height:100px;
	background:lightblue;
	border:15px solid white;
	border-left-color:#ddd;
	border-radius:50%;
    position:absolute;
    left:50%;
    top:50%;
    margin-left:-50px;
    margin-top:-50px;
	animation:load 2s linear infinite;
}
</style>