
import { reactive } from 'vue'

export const store = reactive({
    selectedChat: null,
    randomBgColor: null,
    currentUser: null,
    selectThisChat(chat) {
        this.selectedChat = chat
    },
    closeThisChat() {
        this.selectedChat = null
    },
    setRandomBgColor(color){
        this.randomBgColor = color
    },
    unselecetChat(){
        this.selectedChat = null
    },
    setCurrentUser(user){
        this.currentUser = user
    }
})
