<template>
  <div id="screen">
    <SideBar/>
    <ChatSide/>
  </div>
</template>

<script>
import SideBar from '@/components/SideBar.vue';
import ChatSide from '@/components/ChatSide.vue';

export default {
  name: 'App',
  components:{
    SideBar,
    ChatSide
  }

}
</script>

<style>
#screen {
  width: 100%;
  height: 100vh;
  display: flex;
  overflow: auto;
  position: relative;
}

.header{
  height: 60px;
  padding: 6px 15px;
}
.header-bar{
    height: 100%;
    display: flex;
}
</style>
