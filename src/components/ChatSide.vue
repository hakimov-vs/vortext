<template>
    <div id="chat-side" v-if="store.selectedChat" :class="{'open-chatside-mobile': store.selectedChat}">
        <div class="header">
           <div class="header-bar">
                <div class="chat-thumbnails">
                    <div class="chat-profile">
                        <div class="back-to-home" @click="store.unselecetChat()">
                            <RippleEffect duration="0.4s">
                                <span>
                                    <svg  viewBox="0 0 1024 1024"><path fill="currentColor" d="M224 480h640a32 32 0 1 1 0 64H224a32 32 0 0 1 0-64z"/><path fill="currentColor" d="m237.248 512l265.408 265.344a32 32 0 0 1-45.312 45.312l-288-288a32 32 0 0 1 0-45.312l288-288a32 32 0 1 1 45.312 45.312L237.248 512z"/></svg>
                                </span>
                            </RippleEffect>
                        </div>
                        <div class="chat-profile-image" v-if="hasImage">
                            <img :src="store.selectedChat.imgURL" alt="User profile">
                        </div>
                        <div class="no-image" v-else :style="{ backgroundColor: store.randomBgColor }">
                            <span>{{ firstLetter }}</span>
                        </div>
                        <div class="chat-profile-name-status">
                            <p class="chat-profile-name"><b>{{ store.selectedChat.name }}</b></p>
                            <p class="chat-profile-status" >{{ store.selectedChat.date }}</p>
                        </div>
                    </div>
                    <div class="chat-functions"> 
                        <div class="function-list">
                            <RippleEffect duration="0.4s">
                                <span>
                                    <svg viewBox="0 0 16 16"><path fill="currentColor" d="M7 4c0-.139 0-.209.008-.267a.85.85 0 0 1 .724-.724c.059-.008.128-.008.267-.008s.21 0 .267.008a.85.85 0 0 1 .724.724c.008.058.008.128.008.267s0 .209-.008.267a.85.85 0 0 1-.724.724c-.058.008-.128.008-.267.008s-.209 0-.267-.008a.85.85 0 0 1-.724-.724C7 4.209 7 4.139 7 4m0 4c0-.139 0-.209.008-.267a.85.85 0 0 1 .724-.724c.059-.008.128-.008.267-.008s.21 0 .267.008a.85.85 0 0 1 .724.724c.008.058.008.128.008.267s0 .209-.008.267a.85.85 0 0 1-.724.724c-.058.008-.128.008-.267.008s-.209 0-.267-.008a.85.85 0 0 1-.724-.724C7 8.209 7 8.139 7 8m0 4c0-.139 0-.209.008-.267a.85.85 0 0 1 .724-.724c.059-.008.128-.008.267-.008s.21 0 .267.008a.85.85 0 0 1 .724.724c.008.058.008.128.008.267s0 .209-.008.268a.85.85 0 0 1-.724.724C8.208 13 8.138 13 8 13s-.209 0-.267-.008a.85.85 0 0 1-.724-.724C7 12.21 7 12.14 7 12"/></svg>
                                </span>
                            </RippleEffect>
                        </div> 
                        <!-- <div class="function-list">
                            <span>
                                <svg viewBox="0 0 16 16"><path fill="currentColor" d="M7 4c0-.139 0-.209.008-.267a.85.85 0 0 1 .724-.724c.059-.008.128-.008.267-.008s.21 0 .267.008a.85.85 0 0 1 .724.724c.008.058.008.128.008.267s0 .209-.008.267a.85.85 0 0 1-.724.724c-.058.008-.128.008-.267.008s-.209 0-.267-.008a.85.85 0 0 1-.724-.724C7 4.209 7 4.139 7 4m0 4c0-.139 0-.209.008-.267a.85.85 0 0 1 .724-.724c.059-.008.128-.008.267-.008s.21 0 .267.008a.85.85 0 0 1 .724.724c.008.058.008.128.008.267s0 .209-.008.267a.85.85 0 0 1-.724.724c-.058.008-.128.008-.267.008s-.209 0-.267-.008a.85.85 0 0 1-.724-.724C7 8.209 7 8.139 7 8m0 4c0-.139 0-.209.008-.267a.85.85 0 0 1 .724-.724c.059-.008.128-.008.267-.008s.21 0 .267.008a.85.85 0 0 1 .724.724c.008.058.008.128.008.267s0 .209-.008.268a.85.85 0 0 1-.724.724C8.208 13 8.138 13 8 13s-.209 0-.267-.008a.85.85 0 0 1-.724-.724C7 12.21 7 12.14 7 12"/></svg>
                            </span>
                        </div>
                        <div class="function-list">
                            <span>
                                <svg viewBox="0 0 16 16"><path fill="currentColor" d="M7 4c0-.139 0-.209.008-.267a.85.85 0 0 1 .724-.724c.059-.008.128-.008.267-.008s.21 0 .267.008a.85.85 0 0 1 .724.724c.008.058.008.128.008.267s0 .209-.008.267a.85.85 0 0 1-.724.724c-.058.008-.128.008-.267.008s-.209 0-.267-.008a.85.85 0 0 1-.724-.724C7 4.209 7 4.139 7 4m0 4c0-.139 0-.209.008-.267a.85.85 0 0 1 .724-.724c.059-.008.128-.008.267-.008s.21 0 .267.008a.85.85 0 0 1 .724.724c.008.058.008.128.008.267s0 .209-.008.267a.85.85 0 0 1-.724.724c-.058.008-.128.008-.267.008s-.209 0-.267-.008a.85.85 0 0 1-.724-.724C7 8.209 7 8.139 7 8m0 4c0-.139 0-.209.008-.267a.85.85 0 0 1 .724-.724c.059-.008.128-.008.267-.008s.21 0 .267.008a.85.85 0 0 1 .724.724c.008.058.008.128.008.267s0 .209-.008.268a.85.85 0 0 1-.724.724C8.208 13 8.138 13 8 13s-.209 0-.267-.008a.85.85 0 0 1-.724-.724C7 12.21 7 12.14 7 12"/></svg>
                            </span>
                        </div> -->
                    </div>
                </div>
           </div>
        </div>
        <div class="message-section">
            <div class="message-block scrollbar-y-style" style="display: flex; align-items: center; flex-direction: column;">
               <div class="message-bubbles">
                    <div class="m-bubble" v-for="i in [1,2,3,4,5,6,7,8,9,10,11,12]" :key="i" :class="{'m-bubble-received':i % 2 == 0, 'm-bubble-sent': i % 2 == 1 }">
                        <p v-if="i % 2 == 1" >
                            Lorem ipsum dolor sit amet consectetur adipisicing elit. Ex iure in nulla non aperiam, dolore veniam quo iusto cum pariatur? Minima sed repudiandae temporibus tempore ratione quos libero exercitationem sequi?
                        </p>
                        <p v-else>
                            lorem
                        </p>
                        <span>20/20/2025</span>
                    </div>
               </div>
            </div>
            <div class="input-section">
                <div class="input-items">
                    <div class="input-input">
                        <span class="input-icon icon-smile" title="Emojies are not functioning now.">
                            <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="lucide lucide-smile-icon lucide-smile"><circle cx="12" cy="12" r="10"/><path d="M8 14s1.5 2 4 2 4-2 4-2"/><line x1="9" x2="9.01" y1="9" y2="9"/><line x1="15" x2="15.01" y1="9" y2="9"/></svg>
                        </span>
                        <div class="input-message">
                            <input v-model.trim="messageText" type="text" name="message" placeholder="Message">
                        </div>
                        <span class="input-icon icon-paperclip" title="Filing is not functioning now."> 
                            <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="lucide lucide-paperclip-icon lucide-paperclip"><path d="m16 6-8.414 8.586a2 2 0 0 0 2.829 2.829l8.414-8.586a4 4 0 1 0-5.657-5.657l-8.379 8.551a6 6 0 1 0 8.485 8.485l8.379-8.551"/></svg>
                        </span>
                    </div>
                    <div class="input-right">
                        <span v-if="enabletosendtext" class="input-icon" style="padding: 1px 0px 0px 3px;">
                           <svg viewBox="0 0 24 24"><path fill="currentColor" fill-rule="evenodd" d="M2.345 2.245a1 1 0 0 1 1.102-.14l18 9a1 1 0 0 1 0 1.79l-18 9a1 1 0 0 1-1.396-1.211L4.613 13H10a1 1 0 1 0 0-2H4.613L2.05 3.316a1 1 0 0 1 .294-1.071z" clip-rule="evenodd"/></svg>
                        </span>
                        <span v-else class="input-icon icon-mic" title="Voice mail is not functioning now.">
                            <svg viewBox="0 0 20 20"><path fill="currentColor" d="M9 18v-1.06A8 8 0 0 1 2 9h2a6 6 0 1 0 12 0h2a8 8 0 0 1-7 7.94V18h3v2H6v-2h3zM6 4a4 4 0 1 1 8 0v5a4 4 0 1 1-8 0V4z"/></svg>
                        </span>
                    </div>
                </div>
            </div>
        </div>
    </div>
    <div class="message-section" v-else>

    </div>
</template>

<script>
import { store } from '@/store/store.js';
export default{
    name:'ChatSide',
    data(){
        return{
            messageText:"",
            store
        }
    },
    computed:{
        enabletosendtext(){
            return true ? this.messageText != "" : false
        },
        hasImage() {
            return !!this.store.selectedChat.imgURL;
        },
        firstLetter() {
            return this.store.selectedChat.name ? this.store.selectedChat.name.charAt(0).toUpperCase() : '?';
        }
    }
}
</script>

<style scoped>
#chat-side{
    flex: 1;
    height: 100%;
    display: flex;
    flex-direction: column;
}

.chat-thumbnails{
    display: flex;
    justify-content: space-between;
    align-items: center;
}

.chat-profile, .chat-functions{
    width: auto;
    display: flex;
}

.back-to-home{
    display: none !important;
    width: 43px;
    height: 43px;
    border-radius: 50%;
    display: flex;
    justify-content: center;
    align-items: center;
    transition:all 0.2s ease;
    cursor: pointer;
    overflow: hidden;
    margin-right: 10px;
}

.back-to-home:hover{
    background-color:  #eceef1;
}

.back-to-home span svg{
    width: 25px;
    height: 25px;
    margin-top: 2px;
}


.chat-profile-image{
    width: 45px;
    height: 45px;
    border-radius: 50%;
    overflow: hidden;
    cursor: pointer;
}
.chat-profile-image img{
    width: 100%;
    height: 100%;
    object-fit: cover;
}

.chat-profile-name-status{
    width: auto;
    flex-direction: column;
    padding-left: 10px;
    align-content: center;
    cursor: pointer;
}

.chat-profile-name{
    font-size: 18px;
}

.chat-profile-status{
    font-size: 14px;
    color: #7d8286;
}

.function-list{
    width: 40px;
    height: 40px;
    display: flex;
    justify-content: center;
    align-items: center;
    margin-left: 10px;
    border-radius: 50%;
    cursor: pointer;
    padding-top: 3px;
    transition:all 0.2s ease;
    overflow: hidden;
}

.function-list:hover{
    background-color: #eceef1;
}

.function-list span svg{
    width: 30px;
}

.message-section{
    flex: 1 0 0;
    overflow: auto;
    display: flex;
    flex-direction: column;
    background-color: #2A7B9B;
    background-image: 
    linear-gradient(110deg,rgba(237, 221, 83, 0.7) 0%, rgba(87, 199, 133, 0.7) 50%, rgba(237, 221, 83, 0.7) 100%),
  url('@/assets/images/pattern.png');
    background-position: center;    
}

.message-block{
    flex: 1 0 0;
    overflow-y: auto;
    overflow-x: hidden;
}

.input-section{
    height: 75px;
    display: flex;
    justify-content: center;
}

.input-items{
    width: 90%;
    height: 100%;
    display: flex;
    align-items: center;
    padding: 10px 0px 12px 0px;
}

.input-input{
    flex: 1 0 0;
    display: flex;
    background-color: #fff;
    position: relative;
    margin-right: 10px;
    height: 100%;
    border-bottom-left-radius: 15px;
    border-top-left-radius: 15px;
    border-top-right-radius: 15px;
}

.input-input::after{
    content: "";
    position: absolute;
    bottom: 0px;
    right: -15px;
    width: 20px;
    height: 20px;
    background: linear-gradient(150deg, #fff 0%, #fff 50%, transparent 50%, transparent);
    transform: rotate(-90deg);
}

.input-message{
    flex: 1 0 0;
}

.input-message input{
    width: calc(100% + 10px);
    height: 100%;
    border: none;
    font-size: 18px;
    margin-left: -5px;
    cursor:text;
}

.input-icon {
    width: 55px;
    height: 100%;
    display: flex;
    justify-content: center;
    align-items: center;
}

.icon-smile svg, .icon-paperclip svg{
    width: 30px;
    cursor: pointer;
    padding: 3px;
    border-radius: 50%;
    transition: all 0.2s ease;
}

.icon-smile svg:hover, .icon-paperclip svg:hover{
    background-color:#eceef1;
    color: var(--primary);
}

.input-right{
    width: 53px;
    height: 53px;
    background-color: var(--primary);
    border-radius: 50%;
    display: flex;
    justify-content: center;
    align-items: center;
    cursor: pointer;
}


.input-right span svg{
    color: #fff;
    width: 25px;
}

.icon-mic svg{
    max-width: 21px;
}

.rippleeffect{
    display: flex;
    justify-content: center;
    align-items: center;
}

.no-image{
    width: 45px;
    height: 45px;
    border-radius: 50%;
    display: flex;
    align-items: center;
    justify-content: center;
}

.no-image span {
    font-size: 20px;
    color: white;
}

.message-bubbles{
    display: flex;
    flex-direction: column;
}



.m-bubble{
    width: auto;
    max-width: 94%;
    display: inline-block;
    margin-top: 15px;
    padding: 12px;
    position: relative;
    border-radius: 10px;
    font-size: 17px;
}

.m-bubble span{
    display: block;
    margin-top: 8px;
    font-size: 0.8em;
    opacity: 0.7;
}

.m-bubble::after{
    content: "";
    position: absolute;
    width: 17px;
    height: 17px;
    
} 

.m-bubble-received {
    align-self: flex-start;
    margin-left: 3%;
    background-color: #fff;
    border-bottom-left-radius: 0px;
}

.m-bubble-sent{
    align-self: flex-end;
    margin-right: 3%;
    background-color: rgb(220, 248, 200);
    border-bottom-right-radius: 0px;
}

.m-bubble-sent span{
    text-align: right;
}

.m-bubble-sent::after{
    transform: rotate(-90deg);
    right: -13px;
    bottom: 0;
    background: linear-gradient(150deg, rgb(220, 248, 200) 0%, rgb(220, 248, 200) 50%, transparent 50%, transparent);
}

.m-bubble-received::after{
    left: -13px;
    bottom: 0;
    background: linear-gradient(300deg, #fff 0%, #fff 50%, transparent 50%, transparent);
}

@media (max-width: 900px) {
    #chat-side{
        display: none;
    }
    .open-chatside-mobile{
        width: 100% !important;
        flex: 1 !important;
        height: 100% !important;
        display: flex !important; 
        flex-direction: column !important;  
    }

    .back-to-home{
        display:inline !important;
    }
}

@media(max-width: 600px){
    .input-items{
        width: 97%;
    }
    .input-section{
        height: 65px;
    }
    .input-icon{
        width: 42px;
    }
    .input-right{
        width: 48px;
        height: 48px;
    }
    .icon-mic svg{
        max-width: 19px;
    }
    .icon-smile svg, .icon-paperclip svg{
        width: 28px;
    }
    .input-input::after{
        width: 17px;
        height: 17px;
        right: -12px;
    }
    .m-bubble{
        max-width: 90%;
    }
    .m-bubble-sent{
        margin-right: 5%;
    }
    .m-bubble-received{
        margin-left: 5%;
    }
    
}

</style>