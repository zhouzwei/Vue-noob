<template>
  <div id="app">
  	<transition enter-active-class="animated bounceInLeft" leave-active-class="animated bounceOutRight">
  	<router-view>
    	
    </router-view>
    </transition>
  </div>
</template>

<script>
export default {
  name: 'App'
}
</script>

<style>
*{
	padding: 0;
	margin: 0;
}
#app{
	height: 100vh;
}













</style>
