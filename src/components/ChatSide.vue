<template>
    <div id="chat-side">
        <div class="header">
           <div class="header-bar">
                
           </div>
        </div>
        ChatSide
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
}


@media (max-width: 900px) {
    #chat-side{
        display: none;
    }
}
</style>