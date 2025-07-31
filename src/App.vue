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
  height: 100dvh;
  display: flex;
  overflow: auto;
}

.header{
    border-bottom: 1px solid #cccccc;
}

.header-bar{
    height: 60px;
    padding: 6px 15px;
    display: flex;
}
</style>
