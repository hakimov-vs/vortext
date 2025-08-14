<template>
  <div id="screen">
    <template v-if="userLoggedIn">
      <SideBar/>
      <ChatSide/>
    </template>
    <InitialView v-else/>
  </div>
</template>

<script>
import SideBar from '@/components/SideBar.vue';
import ChatSide from '@/components/ChatSide.vue';
import InitialView from '@/components/InitialView.vue';

export default {
  name: 'App',
  data(){
    return{
      userLoggedIn: true
    }
  },
  components:{
    SideBar,
    ChatSide,
    InitialView
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

@media(max-width: 600px){
  .header-bar{
    padding: 6px;
  }  
}
</style>
