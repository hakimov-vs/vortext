<template>
    <div id="chat-side" v-if="store.selectedChat" :class="{ 'anime_deactivate_mobile': !store.selectedChat, 'anime_activate_mobile': store.selectedChat  }"> 
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
                            <img :src="store.selectedChat.photoUrl" alt="User profile">
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
                        <div class="function-list" @focusout="dropMenuState = false" tabindex="1" >
                            <div style="overflow: hidden; border-radius: 50%; height: 100%;">
                                <RippleEffect duration="0.4s" @click="dropMenuState = !dropMenuState" style="padding-top: 3px;">
                                    <span>
                                        <svg viewBox="0 0 16 16"><path fill="currentColor" d="M7 4c0-.139 0-.209.008-.267a.85.85 0 0 1 .724-.724c.059-.008.128-.008.267-.008s.21 0 .267.008a.85.85 0 0 1 .724.724c.008.058.008.128.008.267s0 .209-.008.267a.85.85 0 0 1-.724.724c-.058.008-.128.008-.267.008s-.209 0-.267-.008a.85.85 0 0 1-.724-.724C7 4.209 7 4.139 7 4m0 4c0-.139 0-.209.008-.267a.85.85 0 0 1 .724-.724c.059-.008.128-.008.267-.008s.21 0 .267.008a.85.85 0 0 1 .724.724c.008.058.008.128.008.267s0 .209-.008.267a.85.85 0 0 1-.724.724c-.058.008-.128.008-.267.008s-.209 0-.267-.008a.85.85 0 0 1-.724-.724C7 8.209 7 8.139 7 8m0 4c0-.139 0-.209.008-.267a.85.85 0 0 1 .724-.724c.059-.008.128-.008.267-.008s.21 0 .267.008a.85.85 0 0 1 .724.724c.008.058.008.128.008.267s0 .209-.008.268a.85.85 0 0 1-.724.724C8.208 13 8.138 13 8 13s-.209 0-.267-.008a.85.85 0 0 1-.724-.724C7 12.21 7 12.14 7 12"/></svg>
                                    </span>
                                </RippleEffect>
                            </div>
                            <div class="drop-down-vortex menu-chat-profile" :class="{'drop-down-vortex-open': dropMenuState}">
                                <div class="drop-down-menu">
                                    <div class="drop-menu-items">
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
                                    <!-- <div class="drop-menu-items">
                                        <div class="drop-menu-items-left w-auto">
                                            <div class="dr-menu-item-icon w-auto">
                                                <svg viewBox="0 0 24 24"><g fill="none"><path d="M24 0v24H0V0h24ZM12.593 23.258l-.011.002l-.071.035l-.02.004l-.014-.004l-.071-.035c-.01-.004-.019-.001-.024.005l-.004.01l-.017.428l.005.02l.01.013l.104.074l.015.004l.012-.004l.104-.074l.012-.016l.004-.017l-.017-.427c-.002-.01-.009-.017-.017-.018Zm.265-.113l-.013.002l-.185.093l-.01.01l-.003.011l.018.43l.005.012l.008.007l.201.093c.012.004.023 0 .029-.008l.004-.014l-.034-.614c-.003-.012-.01-.02-.02-.022Zm-.715.002a.023.023 0 0 0-.027.006l-.006.014l-.034.614c0 .012.007.02.017.024l.015-.002l.201-.093l.01-.008l.004-.011l.017-.43l-.003-.012l-.01-.01l-.184-.092Z"/><path fill="currentColor" d="M8.122 3.464c.665-.666 1.784-.24 1.872.662l.006.115V20a1 1 0 0 1-1.993.117L8 20V6.414L5.707 8.707a1 1 0 0 1-1.497-1.32l.083-.094l3.83-3.83ZM15 3a1 1 0 0 1 .993.883L16 4v13.586l2.293-2.293a1 1 0 0 1 1.497 1.32l-.083.094l-3.83 3.83c-.664.665-1.783.239-1.871-.663L14 19.759V4a1 1 0 0 1 1-1Z"/></g></svg>
                                            </div>
                                            <div class="dr-menu-item-text w-auto">
                                                <span>
                                                    Transfer
                                                </span>
                                            </div>
                                        </div>
                                        <div class="drop-menu-items-right w-auto">
                                            <svg viewBox="0 0 17 16"><path fill="currentColor" fill-rule="evenodd" d="M6.077 1.162c0 .225.062.45.196.65l4.156 6.229l-4.197 6.037a1.175 1.175 0 0 0 .328 1.629a1.174 1.174 0 0 0 1.63-.325l4.63-6.688c.264-.394.266-.908.002-1.304L8.233.51a1.178 1.178 0 0 0-2.156.652z"/></svg>
                                        </div>
                                    </div> -->
                                    <div class="drop-menu-items">
                                        <div class="drop-menu-items-left w-auto">
                                            <div class="dr-menu-item-icon w-auto">
                                                <svg viewBox="0 0 24 24"><g fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" color="currentColor"><path d="m21 3l-8 8.5m-3.554-.415c-2.48.952-4.463.789-6.446.003c.5 6.443 3.504 8.92 7.509 9.912c0 0 3.017-2.134 3.452-7.193c.047-.548.07-.821-.043-1.13c-.114-.309-.338-.53-.785-.973c-.736-.728-1.103-1.092-1.54-1.184c-.437-.09-1.007.128-2.147.565"/><path d="M4.5 16.446S7 16.93 9.5 15m-1-7.75a1.25 1.25 0 1 1-2.5 0a1.25 1.25 0 0 1 2.5 0M11 4v.1"/></g></svg>
                                            </div>
                                            <div class="dr-menu-item-text w-auto">
                                                <span>
                                                    Clean chat
                                                </span>
                                            </div>
                                        </div>
                                        <div class="drop-menu-items-right w-auto"></div>
                                    </div>
                                </div>
                            </div>
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
            <div class="message-block scrollbar-y-style" ref="messageContainer" style="display: flex; align-items: center; flex-direction: column;">
            <div class="message-bubbles">
                    <div class="m-bubble" v-for="message in messages" :key="message.from" 
                    :class="{'m-bubble-received':message.to == store.currentUser.uid, 
                    'm-bubble-sent': message.from == store.currentUser.uid }"
                    :messageid="message.id"
                    >
                        <p>
                            {{ message.text }}
                        </p>
                        <span> {{ 
                             message.createdAt?.toDate
                            ? message.createdAt.toDate().toLocaleString("en-US", {
                                month: "long",  
                                hour: "2-digit",
                                minute: "2-digit" 
                                })
                             : "" 
                            
                            }} 
                            <!-- <span style="margin-top: 3px;" v-if="message.to !== store.currentUser.uid">{{ 
                                message.status    
                            }}
                            </span> -->
                            
                        </span>
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
                            <input v-model.trim="messageText" type="text" name="message" placeholder="Message" @keyup.enter="sendMessage">
                        </div>
                        <span class="input-icon icon-paperclip" title="Filing is not functioning now."> 
                            <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="lucide lucide-paperclip-icon lucide-paperclip"><path d="m16 6-8.414 8.586a2 2 0 0 0 2.829 2.829l8.414-8.586a4 4 0 1 0-5.657-5.657l-8.379 8.551a6 6 0 1 0 8.485 8.485l8.379-8.551"/></svg>
                        </span>
                    </div>
                    <div class="input-right">
                        <span v-if="enabletosendtext" @click="sendMessage" class="input-icon" style="padding: 1px 0px 0px 3px;">
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
    <div class="message-section coverage" v-else>
    </div>
</template>

<script>
import { 
  collection, query,getDoc, where, getDocs, addDoc, 
  updateDoc, doc, setDoc, serverTimestamp, orderBy, onSnapshot
} from "firebase/firestore";
import { db } from "@/firebase";
import { store } from '@/store/store.js';
export default{
    name:'ChatSide',
    data(){
        return{
            messages: [],
            unsubscribe: null,
            messageText:"",
            dropMenuState: false,
            store
        }
    },
    methods:{
        async sendMessage() {
            const currentUserId = store.currentUser.uid;
            const otherUserId = store.selectedChat.uid;
            const text = this.messageText?.trim();

            if (!text) return; 

            try {
                const chatRef = collection(db, "chats");
                const q = query(chatRef, where("members", "array-contains", currentUserId));
                const querySnapshot = await getDocs(q);

                let chatId = null;
                let chatData = null;

                // Find existing chat
                querySnapshot.forEach((docSnap) => {
                    const data = docSnap.data();
                    if (data.members.includes(otherUserId)) {
                        chatId = docSnap.id;
                        chatData = data;
                    }
                });

                // If chat doesn’t exist, create it
                let chatState = true;
                let chat = null;
                if (!chatId) {
                    chatState = false;
                    const newChatRef = await addDoc(chatRef, {
                        members: [currentUserId, otherUserId],
                        lastMessage: text,
                        lastMessageAt: serverTimestamp(),
                        unreadCounts: {
                            [currentUserId]: 0,
                            [otherUserId]: 1
                        }
                    });
                    chatId = newChatRef.id;
                    chat = newChatRef
                } else {
                    // Update lastMessage, lastMessageAt, unreadCounts
                    await updateDoc(doc(db, "chats", chatId), {
                        lastMessage: text,
                        lastMessageAt: serverTimestamp(),
                        [`unreadCounts.${otherUserId}`]: (chatData.unreadCounts?.[otherUserId] || 0) + 1
                    });
                }

                // Add message to messages subcollection
                const messagesRef = collection(db, "chats", chatId, "messages");
                await addDoc(messagesRef, {
                    from: currentUserId,
                    to: otherUserId,
                    text,
                    createdAt: serverTimestamp(),
                    status: "sent"
                });

                if (!chatState) {
                    const otherUserRef = doc(db, "users", otherUserId);
                    const otherUserSnap = await getDoc(otherUserRef);
                    const otherUserData = otherUserSnap.exists() ? otherUserSnap.data() : {};
                    const newChatRef = doc(db, "chats", chatId)
                    const newChatSnap = await getDoc(newChatRef)
                    const newChatData = newChatSnap.data();
                    const newChat = {
                        uid: otherUserId,
                        photoUrl: otherUserData.photoUrl || null,
                        name: otherUserData.name || "Unknown",
                        date: newChatData.lastMessageAt?.toDate
                        ? newChatData.lastMessageAt.toDate().toLocaleString("en-US", {
                                month: "long",  
                                hour: "2-digit",
                                minute: "2-digit" 
                                }) : "",
                        lmessage: newChatData.lastMessage,
                        unread: newChatData.unreadCounts?.[currentUserId] || 0,
                        chatId
                    }
                    store.selectThisChat(newChat)
                }

                this.messageText = ""; // clear input
            } catch (err) {
                console.error("❌ Error sending message:", err);
                this.error = "Something went wrong. Please try again.";
            }
        }

    },
    computed:{
        enabletosendtext(){
            return true ? this.messageText != "" : false
        },
        hasImage() {
            return !!this.store.selectedChat.photoUrl;
        },
        firstLetter() {
            return this.store.selectedChat.name ? this.store.selectedChat.name.charAt(0).toUpperCase() : '?';
        }
    },
    watch: {
        messages() {
        this.$nextTick(() => {
        const container = this.$refs.messageContainer;
        if (container) {
            container.scrollTop = container.scrollHeight;
        }
        });
    },
    "store.selectedChat": {
        immediate: true,
        handler(newChat) {
        if (this.unsubscribe) this.unsubscribe();
        this.messages = [];

        if (!newChat || !newChat.chatId) return;

        const chatId = newChat.chatId;
        const messagesRef = collection(db, "chats", chatId, "messages");
        const q = query(messagesRef, orderBy("createdAt", "asc"));

        this.unsubscribe = onSnapshot(q, (snapshot) => {
            this.messages = snapshot.docs.map((doc) => ({
            id: doc.id,
            ...doc.data(),
            }));
        });
        },
    },
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
    transition:all 0.2s ease;
    position: relative;
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
    scroll-behavior: smooth;
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

.menu-chat-profile{
    width: 200px;
    right: 0;
    top: 52px;
    /* transform: scale(0.8) translate(13%, -13%); */
    
}

@media (max-width: 900px) {
    #chat-side{
        min-width: 100%;
        flex: 1;
    }
    .coverage{
        display: none;
    }

    .openChat-enter-active, .openChat-leave-active{
        transition: opacity 0.3s ease;
    }
    .openChat-enter-to, .openChat-leave-from{
        opacity: 1;
    }
    .openChat-enter-from, .openChat-leave-to{
        opacity: 0;
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