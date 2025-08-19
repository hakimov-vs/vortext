<template>
  <div id="screen">
    <div class="loader-container" v-if="loading">
      <div class="loader"></div>
    </div>
    <template v-if="store.currentUser">
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
import { auth } from "./firebase";
import { onAuthStateChanged } from "firebase/auth";
import { store } from '@/store/store';

export default {
  name: 'App',
  data(){
    return{
      loading: true,
      currentUser: null,
      store
    }
  },
  components:{
    SideBar,
    ChatSide,
    InitialView
  },
  beforeMount(){
     this.loading = true
  },
  mounted(){
    onAuthStateChanged(auth, user=>{
      if(user){
        store.setCurrentUser(user)
        this.loading = false;
      }
      else{
        store.setCurrentUser(null)
        this.loading = false;
      }
    });
  }

}
</script>

<style>

#screen {
  width: 100%;
  height: 100dvh;
  display: flex;
  overflow: hidden;
}

.header{
  border-bottom: 1px solid #cccccc;
}

.header-bar{
  height: 60px;
  padding: 6px 15px;
  display: flex;
}

.anime_activate {
    transform-origin: center;
    animation: anime_activate .2s ease-in-out;
}


.anime_deactivate {
    transform-origin: center;
    animation: anime_deactivate .2s ease-in-out;
}

.loader-container{
  position: absolute;
  width: 100%;
  height: 100%;
  top: 0;
  left: 0;
  z-index: 100;
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: #fff;
}

.loader {
  width: 40px;
  aspect-ratio: 1;
  color: var(--primary);
  position: relative;
  background:
    conic-gradient(from 134deg at top   ,currentColor 92deg,#0000 0) top,
    conic-gradient(from -46deg at bottom,currentColor 92deg,#0000 0) bottom;
  background-size: 100% 50%;
  background-repeat: no-repeat;
}
.loader:before {
  content:'';
  position: absolute;
  inset: 0;
  --g:currentColor 14.5px,#0000 0 calc(100% - 14.5px),currentColor 0;
  background:
    linear-gradient( 45deg,var(--g)),
    linear-gradient(-45deg,var(--g));
   animation: l7 1.5s infinite cubic-bezier(0.3,1,0,1);
}
@keyframes l7 {
   33%  {inset:-10px;transform: rotate(0deg)}
   66%  {inset:-10px;transform: rotate(90deg)}
   100% {inset:0    ;transform: rotate(90deg)}
}



@media(max-width: 600px){
  .header-bar{
    padding: 6px;
  }  
}

@media(max-width: 900px){
    .anime_activate_mobile {
        transform-origin: center;
        animation: anime_activate .3s ease-in-out;
    }
    .anime_deactivate_mobile {
        transform-origin: center;
        animation: anime_deactivate .3s ease-in-out;
    }

}

@keyframes anime_activate {
    from {
        transform: scale(1.1) translate3d(0px, -30px, 0px);
        opacity: 0;
    }

    to {
        transform: scale(1) translate3d(0px, 0px, 0px);
        opacity: 1;
    }
}

@keyframes anime_deactivate {
    from {
        transform: scale(.9) translate3d(0px, 30px, 0px);
        opacity: 0;
    }

    to {
        transform: scale(1) translate3d(0px, 0px, 0px);
        opacity: 1;
    }
}
</style>
