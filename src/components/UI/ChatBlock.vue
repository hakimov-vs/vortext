<template>
  <div class="chats">
    <div class="chat-profile">
        <template v-if="hasImage">
            <img :src="imgURL" alt="Profile picture" />
        </template>
        <template v-else>
            <div  class="no-image" :style="{ backgroundColor: randomColor }">
                <span>
                    {{ firstLetter }}
                </span>
            </div>
        </template>
    </div>
    <div class="chat-items">
        <div class="chat-title-time">
            <div class="chat-title">
                <p>
                    <b>
                        Lorem ipsum dolor sit amet, consectetur adipisicing elit. Nisi rem assumenda tempora distinctio dolores iure velit non hic nemo. Vel modi fuga veniam repudiandae animi dolores cumque sint illo accusantium!
                    </b>
                </p>
            </div>
            <div class="chat-time">
                <span>2025/03/25</span>
            </div>
        </div>
        <div class="chat-lmessage-badge">
            <div class="chat-lmessage">
                <p>
                    Lorem ipsum dolor sit amet consectetur adipisicing elit. Quis ad fuga rerum quas, velit vel veritatis perspiciatis, voluptate sunt, quam enim illo nostrum sequi voluptas non quibusdam. Laborum, nemo repellendus? 
                </p>
            </div>
            <div class="chat-badge">
                <BadgeUI value="1"/>
            </div>
        </div>
    </div>
  </div>
</template>

<script>
export default{
    name:'ChatBlock',
    props:{
        username: {
            type: String,
            required: true
        },
        imgURL:{
            type: String,
            default: ""
        }
    },
    computed:{
        hasImage() {
            return !!this.imgURL;
        },
        firstLetter() {
            return this.username ? this.username.charAt(0).toUpperCase() : '?';
        },
         randomColor() {
            const colors = [
            '#4169E1', '#483D8B', '#008B8B', '#4682B4',
            '#C71585', '#3CB371', '#708090', '#B22222',
            '#8B4513', '#556B2F'
            ];
            const index = Math.floor(Math.random() * colors.length)
            return colors[index];
        }
    }
}
</script>

<style scoped>
.chats {
  padding: 0 9px;
  height: 80px;
  border-radius: 7px;
  width: 100%;
  transition: background-color 0.3s ease;
  display: flex;
  flex-direction: row;
  align-items: center;
}

.chats:hover{
    background-color:  #eceef1;
}

.chat-profile{
    flex: 0 0 60px;
    height: 60px;
    border-radius: 50%;
    overflow: hidden;
}

.chat-profile img{
    width: 100%;
    height: 100%;
    object-fit: cover;
}

.chat-items{
    flex:1;
    max-width: calc(100% - 60px);
    height: 60px;
    padding-left: 9px;
    display: flex;
    flex-direction: column;
    justify-content: space-evenly;
}

.chat-title-time, .chat-lmessage-badge{
    display: flex;
    justify-content: space-between;
}

.chat-title, .chat-time, .chat-lmessage, .chat-badge{
    width: auto;
}

.chat-title, .chat-lmessage{
    flex: 1;
    max-width: calc(100% - 85px);
}

.chat-title p, .chat-lmessage p{
  white-space: nowrap;      
  overflow: hidden;         
  text-overflow: ellipsis;
  font-size: 18px;
}

.chat-lmessage p{
    font-size: 16px;
    color: #888;
}   

.chat-time span{
    font-size: 14px;
    color: #888;
}


.no-image{
    width: 100%;
    height: 100%;
    display: flex;
    align-items: center;
    justify-content: center;
}

.no-image span {
    font-size: 22px;
    color: white;
}

</style>
