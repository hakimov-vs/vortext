<template>
    <div id="side-bar">
        <div class="header">
            <div class="header-bar">
                <div class="header-menu">
                    <div class="menu-items">
                        <svg viewBox="0 0 24 24" stroke="currentColor" stroke-width="2"  stroke-linecap="round" ><path d="M3 12h18"/><path d="M3 18h18"/><path d="M3 6h18"/></svg>
                    </div>
                </div>
                <div class="header-search">
                    <div class="search-items">
                        <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" ><path d="m21 21-4.34-4.34"/><circle cx="11" cy="11" r="8"/></svg>
                        <input type="text" placeholder="search">
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
                <template v-for="i in [1,1,5,1,5,1,5,1,1,5,1,1,5,1,1,5,1,1,5,1,5,1,1,1,5,1,1,1,5,1,5,1,1,5,1,1,1,5,1,1,5,1]"
                :key="i">
                     <ChatBlock v-if="i == 1" imgURL="/images/img2.jpg" username="Jackson"/>
                     <ChatBlock v-else username="Jackson"/>
                </template>
                <!-- !!! Later change <ChatBlock v-for="i in [1,1,5,1,1,1,1,1,1,5,1,1,1,1,1,1,1,1,5,1,1,1,1,1,1,1,1,1,1,1,5,1,1,1,1,1,1,1,1,1,1,1]"
                :key="i"/> -->

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

export default{
    name:'SideBar',
    components:{
        ChatBlock
    }
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