<template>
    <div id="chat-side">
        ChatSide
    </div>
</template>

<script>
export default{
    name:'ChatSide'
}
</script>

<style>
#chat-side{
    flex: 1;
    height: 100%;
    background-color: var(--success);
}

@media (max-width: 900px) {
    #chat-side{
        display: none;
    }
}
</style>