<template>
    <div id="chat-side">
        <div class="header">
           <div class="header-bar">
                items
           </div>
        </div>
        <div class="message-section">
            <div class="message-block scrollbar-y-style">
               
            </div>
            <div class="input-message">
                <div class="input-items">
                    <div class="input-emoji">
                        <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="lucide lucide-smile-icon lucide-smile"><circle cx="12" cy="12" r="10"/><path d="M8 14s1.5 2 4 2 4-2 4-2"/><line x1="9" x2="9.01" y1="9" y2="9"/><line x1="15" x2="15.01" y1="9" y2="9"/></svg>
                    </div>
                    <div class="input-input">
                        <svg  width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="lucide lucide-paperclip-icon lucide-paperclip"><path d="m16 6-8.414 8.586a2 2 0 0 0 2.829 2.829l8.414-8.586a4 4 0 1 0-5.657-5.657l-8.379 8.551a6 6 0 1 0 8.485 8.485l8.379-8.551"/></svg>
                        <input type="text">
                    </div>
                    <div class="input-right">
                        <svg  width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="lucide lucide-send-horizontal-icon lucide-send-horizontal"><path d="M3.714 3.048a.498.498 0 0 0-.683.627l2.843 7.627a2 2 0 0 1 0 1.396l-2.842 7.627a.498.498 0 0 0 .682.627l18-8.5a.5.5 0 0 0 0-.904z"/><path d="M6 12h16"/></svg>
                        <svg  width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="lucide lucide-mic-icon lucide-mic"><path d="M12 19v3"/><path d="M19 10v2a7 7 0 0 1-14 0v-2"/><rect x="9" y="2" width="6" height="13" rx="3"/></svg>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
export default{
    name:'ChatSide'
}
</script>

<style scoped>
#chat-side{
    flex: 1;
    height: 100%;
    display: flex;
    flex-direction: column;
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

.input-message{
    height: 70px;
    display: flex;
    justify-content: center;
}

.input-items{
    width: 90%;
    background-color: green;
    display: flex;
}


@media (max-width: 900px) {
    #chat-side{
        display: none;
    }
}
</style>