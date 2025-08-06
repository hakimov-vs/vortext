<template>
    <div id="side-bar">
        <div class="header">
            <div class="header-bar">
                <div class="header-menu">
                    <div class="menu-items">
                        <div class="pr-ripple">
                            <RippleEffect duration="0.4s"></RippleEffect>
                        </div>
                        <svg viewBox="0 0 24 24" stroke="currentColor" stroke-width="2"  stroke-linecap="round" ><path d="M3 12h18"/><path d="M3 18h18"/><path d="M3 6h18"/></svg>
                    </div>
                </div>
                <div class="header-search">
                    <div class="search-items">
                        <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" ><path d="m21 21-4.34-4.34"/><circle cx="11" cy="11" r="8"/></svg>
                        <input name="search" type="text" placeholder="search">
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
            <div class="chat-lists">
                <ChatBlock  v-for="(chat, index) in chatListData"
                :key="chat.userId"
                :imgURL="chat.imgURL"
                :name="chat.name"
                :date="chat.date"
                :lmessage="chat.lmessage"
                :unread="chat.unread"
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

export default{
    name:'SideBar',
    data(){
        return{
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

            ]
        }
    },
    mounted(){
          this.chatListData.sort((a, b) => b.unread - a.unread);
    },
    methods:{
        selectChatHandle(chat) {
             store.selectThisChat(chat)
        }
    },
    components:{
        ChatBlock
    },
    
}
</script>

<style scoped>
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
}

.search-items input{
    height: 100%;
    width: 100%;
    border-radius: 25px;
    padding-left: 40px;
    padding-bottom: 4px;
    border: 1.5px solid #d4d4d4;
    font-size: 18px;
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



@media (max-width: 1200px) {
    #side-bar{
        width: 400px;
    }
}

@media (max-width: 900px) {
    #side-bar{
        /* width: 100%; */
        display: none;
    }
}
</style>