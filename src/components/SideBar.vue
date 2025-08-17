<template>
    <div id="side-bar" v-show="checkIfMobile">
        <div class="header">
            <div class="header-bar">
                <div class="header-menu">
                    <div class="menu-items" v-if="!searchState" @focusout="dropMenuState = false" tabindex="0" >
                        <div class="pr-ripple" @click="dropMenuState = !dropMenuState">
                            <RippleEffect duration="0.4s"></RippleEffect>
                        </div>
                        <svg viewBox="0 0 24 24" stroke="currentColor" stroke-width="2"  stroke-linecap="round" ><path d="M3 12h18"/><path d="M3 18h18"/><path d="M3 6h18"/></svg>
                        <div class="drop-down-vortex menu-profile" :class="{'drop-down-vortex-open': dropMenuState}">
                            <div class="drop-down-menu">
                                <div class="drop-menu-items" title="Not functioning">
                                    <div class="drop-menu-items-left w-auto">
                                        <div class="dr-menu-item-icon w-auto">
                                            <svg  viewBox="0 0 24 24"><g fill="none" stroke="currentColor" stroke-width="2"><path stroke-linejoin="round" d="M4 18a4 4 0 0 1 4-4h8a4 4 0 0 1 4 4a2 2 0 0 1-2 2H6a2 2 0 0 1-2-2Z"/><circle cx="12" cy="7" r="3"/></g></svg>
                                        </div>
                                        <div class="dr-menu-item-text w-auto">
                                            <span>
                                                Profile
                                            </span>
                                        </div>
                                    </div>
                                    <div class="drop-menu-items-right w-auto">
                                        <svg viewBox="0 0 17 16"><path fill="currentColor" fill-rule="evenodd" d="M6.077 1.162c0 .225.062.45.196.65l4.156 6.229l-4.197 6.037a1.175 1.175 0 0 0 .328 1.629a1.174 1.174 0 0 0 1.63-.325l4.63-6.688c.264-.394.266-.908.002-1.304L8.233.51a1.178 1.178 0 0 0-2.156.652z"/></svg>
                                    </div>
                                </div>
                                <div class="drop-menu-items" title="Not functioning">
                                    <div class="drop-menu-items-left w-auto">
                                        <div class="dr-menu-item-icon w-auto">
                                            <svg viewBox="0 0 512 512"><path fill="currentColor" d="M489.972 119.059a23.839 23.839 0 0 0-17-7.059H456V72a24.027 24.027 0 0 0-24-24H86.627A70.628 70.628 0 0 0 16 118.627v274.746A70.628 70.628 0 0 0 86.627 464h385.4a24.047 24.047 0 0 0 24-23.923l.944-303.995a23.837 23.837 0 0 0-6.999-17.023ZM464.053 432H86.627A38.627 38.627 0 0 1 48 393.373V118.627A38.627 38.627 0 0 1 86.627 80H424v32H88v32h376.947Z"/><path fill="currentColor" d="M392 264h32v32h-32z"/></svg>
                                        </div>
                                        <div class="dr-menu-item-text w-auto">
                                            <span>
                                                Wallet
                                            </span>
                                        </div>
                                    </div>
                                    <div class="drop-menu-items-right w-auto">
                                        <svg viewBox="0 0 17 16"><path fill="currentColor" fill-rule="evenodd" d="M6.077 1.162c0 .225.062.45.196.65l4.156 6.229l-4.197 6.037a1.175 1.175 0 0 0 .328 1.629a1.174 1.174 0 0 0 1.63-.325l4.63-6.688c.264-.394.266-.908.002-1.304L8.233.51a1.178 1.178 0 0 0-2.156.652z"/></svg>
                                    </div>
                                </div>
                                <div class="drop-menu-items" @click="logout">
                                    <div class="drop-menu-items-left w-auto">
                                        <div class="dr-menu-item-icon w-auto">
                                            <svg viewBox="0 0 24 24"><g fill="currentColor"><path fill-rule="evenodd" d="M11 20a1 1 0 0 0-1-1H5V5h5a1 1 0 1 0 0-2H5a2 2 0 0 0-2 2v14a2 2 0 0 0 2 2h5a1 1 0 0 0 1-1z" clip-rule="evenodd"/><path d="M21.714 12.7a.996.996 0 0 0 .286-.697v-.006a.997.997 0 0 0-.293-.704l-4-4a1 1 0 1 0-1.414 1.414L18.586 11H9a1 1 0 1 0 0 2h9.586l-2.293 2.293a1 1 0 0 0 1.414 1.414l4-4l.007-.007z"/></g></svg>
                                        </div>
                                        <div class="dr-menu-item-text w-auto">
                                            <span>
                                                Log out
                                            </span>
                                        </div>
                                    </div>
                                    <div class="drop-menu-items-right w-auto"></div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div class="menu-items" @click="searchState = false" v-else>
                        <svg style="width: 22px; margin-left: 2px;" viewBox="0 0 57 46" xmlns="http://www.w3.org/2000/svg"><path d="M0.87868 20.8787C-0.292893 22.0503 -0.292893 23.9497 0.87868 25.1213L19.9706 44.2132C21.1421 45.3848 23.0416 45.3848 24.2132 44.2132C25.3848 43.0416 25.3848 41.1421 24.2132 39.9706L7.24264 23L24.2132 6.02944C25.3848 4.85786 25.3848 2.95837 24.2132 1.7868C23.0416 0.615224 21.1421 0.615224 19.9706 1.7868L0.87868 20.8787ZM56.5 20L3 20V26L56.5 26V20Z"></path></svg>
                    </div>
                </div>
                <div class="header-search">
                    <div class="search-items">
                        <svg :class="{'focus-search-icon': searchState}" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" ><path d="m21 21-4.34-4.34"/><circle cx="11" cy="11" r="8"/></svg>
                        <input name="search" type="text" placeholder="search" v-model="searchQuery" :class="{'focus-search-input': searchState}" @focus="searchState = true">
                    </div>
                </div>
            </div>
            <!-- <span>Unread</span>
            <span>Group</span>
            <span>Chanel</span> 
            <span>Custom</span> 
            When folders are available -->
        </div>
        <div class="chats-section scrollbar-y-style">
            <div class="chat-lists" v-if="!searchState" :class="{ 'anime_deactivate': !searchState }">
                <ChatBlock  v-for="(chat, index) in chatListData"
                :key="chat.userId"
                :imgURL="chat.imgURL"
                :name="chat.name"
                :date="chat.date"
                :lmessage="chat.lmessage"
                :unread="chat.unread"
                :userId="chat.userId"
                :selectedID="selectedIDData"
                @selectThisChatEmit="SelectThisChatEmitHandle"
                @click="selectChatHandle(chat)"
                />
            </div>
            <div class="chat-lists" v-else :class="{ 'anime_activate': searchState }">
                <ChatBlock  v-for="(chat, index) in ChatResultforSearch"
                :key="chat.userId"
                :imgURL="chat.imgURL"
                :name="chat.name"
                :date="chat.date"
                :lmessage="chat.lmessage"
                :unread="chat.unread"
                :userId="chat.userId"
                :selectedID="selectedIDData"
                @selectThisChatEmit="SelectThisChatEmitHandle"
                @click="selectChatHandle(chat)"
                />
                <div class="new-chat-selection">
                    <div class="adding-chat-header">
                        <span>Add a new chat +</span>
                    </div>
                </div>
                <ChatBlock  v-for="(chat, index) in chatListData"
                :key="chat.userId"
                :imgURL="chat.imgURL"
                :name="chat.name"
                :date="''"
                :lmessage="''"
                :unread="0"
                :userId="chat.userId"
                :selectedID="selectedIDData"
                @selectThisChatEmit="SelectThisChatEmitHandle"
                @click="selectChatHandle(chat)"
                />
            </div>
            <!-- <div class="chat-lists">
                <ChatBlock v-for="i in [1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1]"
                :key="i"/>
            </div> 
            When folders are available -->
        </div>
    </div>
</template>
<script>
import ChatBlock from '@/components/UI/ChatBlock.vue';
import RippleEffect from './UI/RippleEffect.vue';
import { store } from '@/store/store.js';
import { auth } from '@/firebase';
import { signOut } from 'firebase/auth';

export default{
    name:'SideBar',
    data(){
        return{
            selectedIDData: null,
            dropMenuState: false,
            isMobile: window.innerWidth <= 900,
            searchQuery: "",
            searchState: false,
            chatListData:[
                    { userId: 1,  imgURL: '', name: 'Emily',     date: '03/02/2025', lmessage: 'Let me know when you’re free.', unread: 5 },
                    { userId: 2,  imgURL: '/images/img2.jpg', name: 'Michael',   date: '03/03/2025', lmessage: 'I’ll call you back in 5 minutes.', unread: 65 },
                    { userId: 3,  imgURL: '/images/img2.jpg', name: 'Sofia',     date: '03/04/2025', lmessage: 'Thanks for your help today!', unread: 0 },
                    { userId: 4,  imgURL: '/images/img2.jpg', name: 'Liam',      date: '03/05/2025', lmessage: 'Meeting was postponed to Friday.', unread: 75 },
                    { userId: 5,  imgURL: '/images/img2.jpg', name: 'Olivia',    date: '03/06/2025', lmessage: 'Did you receive the documents?', unread: 13 },
                    { userId: 6,  imgURL: '/images/img2.jpg', name: 'Noah',      date: '03/07/2025', lmessage: 'Everything is going great!', unread: 25 },
                    { userId: 7,  imgURL: '', name: 'Isabella',  date: '03/08/2025', lmessage: 'Happy Birthday! 🎉', unread: 3 },
                    { userId: 8,  imgURL: '/images/img2.jpg', name: 'James',     date: '03/09/2025', lmessage: 'Check your inbox when you can.', unread: 0 },
                    { userId: 9,  imgURL: '/images/img2.jpg', name: 'Ava',       date: '03/10/2025', lmessage: 'I’m on my way now.', unread: 6 },
                    { userId: 10, imgURL: '/images/img2.jpg', name: 'William',   date: '03/11/2025', lmessage: 'Can we reschedule our meeting?', unread: 0 },
                    { userId: 11, imgURL: '/images/img2.jpg', name: 'Mia',       date: '03/12/2025', lmessage: 'Sure, let’s do it tomorrow.', unread: 3 },
                    { userId: 12, imgURL: '/images/img2.jpg', name: 'Ethan',     date: '03/13/2025', lmessage: 'Let’s grab coffee this weekend.', unread: 5 },
                    { userId: 13, imgURL: '', name: 'Charlotte', date: '03/14/2025', lmessage: 'Good luck with your exam!', unread: 9 },
                    { userId: 14, imgURL: '/images/img2.jpg', name: 'Lucas',     date: '03/15/2025', lmessage: 'I’ll be there in 10 minutes.', unread: 36 },
                    { userId: 15, imgURL: '/images/img2.jpg', name: 'Amelia',    date: '03/16/2025', lmessage: 'Don’t forget the meeting at 3.', unread: 15 },
                    { userId: 16, imgURL: '/images/img2.jpg', name: 'Benjamin',  date: '03/17/2025', lmessage: 'I’ve updated the file.', unread: 32 },
                    { userId: 17, imgURL: '/images/img2.jpg', name: 'Harper',    date: '03/18/2025', lmessage: 'Thank you so much!', unread: 14 },
                    { userId: 18, imgURL: '/images/img2.jpg', name: 'Henry',     date: '03/19/2025', lmessage: 'Talk to you later!', unread: 0 },
                    { userId: 19, imgURL: '', name: 'Evelyn',    date: '03/20/2025', lmessage: 'Hope you had a great weekend!', unread: 5 },
                    { userId: 20, imgURL: '/images/img2.jpg', name: 'Alexander', date: '03/21/2025', lmessage: 'Did you finish the report?', unread: 0 }

            ],
            ChatResultforSearch: [
               { userId: 1,  imgURL: '', name: 'Muslimbek', date: '03/02/2025', lmessage: 'Let me know when you’re free.', unread: 5 },
            ],
            store
        }
    },
    mounted(){
          this.chatListData.sort((a, b) => b.unread - a.unread);
          window.addEventListener('resize', this.checkScreen);

    },
    computed:{
        checkIfMobile(){
            if(this.isMobile){
                if(!this.store.selectedChat){
                    return true
                }
                else{
                    return false
                }
            }
            else{
                return true
            }
        },
    },
    methods:{
        selectChatHandle(chat) {
             store.selectThisChat(chat)
        },
        SelectThisChatEmitHandle(color, userId){
            store.setRandomBgColor(color)
            this.selectedIDData = userId
        },
        checkScreen() {
             this.isMobile = window.innerWidth <= 900;
        },
        logout(){
            signOut(auth)
        }
    },
    components:{
        ChatBlock
    }
}
</script>

<style >
#side-bar{
    width: 430px;
    height: 100%;
    border-right: 1px solid #cccccc;
    display: flex;
    flex-direction: column;
}

.header-menu{
    width: 43px;
    display: flex;
    align-items: center;
}

.menu-items{
    width: 43px;
    height: 43px;
    cursor: pointer;
    border-radius: 50%;
    padding: 9px;
    transition:all 0.2s ease;
    position: relative;
}

.pr-ripple{
    position: absolute;
    left: 0;
    top: 0;
    width: 100%;
    height: 100%;
    border-radius: 50%;
    overflow: hidden;
}

.menu-items:hover{
    background-color:  #eceef1;
}

.menu-items svg{
    width: 100%;
    height: 100%;
    color: #707579;
}


.header-search{
    display: flex;
    align-items: center;
    padding-left: 7.5px;
}

.search-items{
    flex-basis: 100%;
    height: 43px;
    position: relative;
}

.search-items svg{
    width: 23px;
    height: 23px;
    position:absolute;
    color: #6d6d6d;
    top: 9.8px;
    left: 10px;
    transition: color 0.2s ease;
}

.search-items input{
    height: 100%;
    width: 100%;
    border-radius: 25px;
    padding-left: 40px;
    padding-bottom: 4px;
    border: 1.5px solid #d4d4d4;
    font-size: 18px;
    transition: border 0.2s ease;
}

.focus-search-input{
    border: 1px solid var(--primary) !important;
}

.focus-search-icon {
    color: var(--primary) !important;
}

.chats-section{
    flex: 1 0 0;
    display: flex;
    flex-direction: row;
    align-items: flex-start;
    overflow-y: scroll;
    overflow-x: hidden; /* auto or scroll When folders are available */
}

.chat-lists{
    min-width: 100%;
    max-width: 100%; 
    height: auto;
    padding: 4px 6px;
}

.drop-down-vortex{
    position: absolute;
    height: auto;
    background-color: hsla(0, 0%, 100%, 0.9);
    backdrop-filter: blur(50px);
    -webkit-backdrop-filter: blur(50px);
    padding: 5px;
    box-shadow: 0 0 10px rgba(0, 0, 0, .15);
    border-radius: 10px;
    z-index: 1;
    transition: opacity .2s ease, transform .2s ease, visibility .2s ease-out;
    opacity: 0;
    visibility: hidden;
}

.menu-profile{
    width: 300px;
    left: 0px;
    top: 52px;

}

.drop-menu-items{
    font-family: roboto-medium;
    font-size: 18px;
    padding: 7px 15px 8.5px 15px;
    border-radius: 10px;
    display: flex;
    align-items: center;
    justify-content: space-between;
}

.drop-menu-items:hover{
    background-color: #f0f0f0;
}

.drop-menu-items-left{
    display: flex;
    justify-content: center;
    align-items: center;
}

.dr-menu-item-icon {
    padding-top: 3.5px;
    padding-right: 8px;
}

.drop-menu-items svg{
    width: 25px;
}

.drop-menu-items-right svg{
    width: 15px;
    margin-top: 7px;
}

.drop-down-vortex-open{
    visibility: visible;
    opacity: 1;
    transform: unset;
}

.new-chat-selection{
    margin: 20px 0px 5px 0px;
    padding: 5px 15px;
    background-color: #eceef1;
}

.adding-chat-header{
    font-size: 20px;
}


@media (max-width: 1200px) {
    #side-bar{
        width: 400px;
    }
}

@media (max-width: 900px) {
    #side-bar{
        min-width: 100%;
        height: 100%;
        flex: 1;
        overflow: hidden;
    }
     
    .closeChat-enter-active, .closeChat-leave-active{
        transition: opacity 0.5s ease;
    }
    .closeChat-enter-to, .closeChat-leave-from{
        /* opacity: 1; */
    }
    .closeChat-enter-from, .closeChat-leave-to{
        /* opacity: 0; */
        
    }
     
}
</style>