<template>
    <div class="rippleeffect" ref="rippleeffect" @click="effectRipple($event)">
        <slot></slot>
    </div>
</template>
<script>
export default {    
    name:"RippleEffect",
    props:{
        duration:String
    },
    methods: {
        effectRipple(event){
            let effective = this.$refs.rippleeffect;
            let ripple = document.createElement('div');
            if(effective.querySelectorAll('.ripple').length > 0){
                effective.removeChild(effective.querySelector(".ripple"));
            }
            effective.appendChild(ripple);     
            var d = Math.max(effective.clientWidth, effective.clientHeight);
            ripple.style.width = ripple.style.height = d + 'px';
            ripple.style.left = event.clientX - effective.getBoundingClientRect().left - d / 2 + 'px';
            ripple.style.top = event.clientY - effective.getBoundingClientRect().top - d / 2 + 'px'; 
            ripple.style.animationDuration = this.duration;
            ripple.classList.add('ripple');    
        }
    }   
}
</script>
<style>
    .rippleeffect{
        width: 100%;
        height: 100%;
        position: relative;
        transition-property: background-color;
        transition-duration: 0.2s;
        transition-timing-function: ease;
        cursor: pointer;
        overflow: hidden;
    }
    .ripple{
        border-radius: 50%;
        background-color: rgba(0, 0, 0, 0.12);
        position: absolute;
        transform: scale(0);
        opacity: 1;
        animation-name: ripple;
        animation-timing-function: ease-in;
    }
    @keyframes ripple{
        to{
            transform: scale(2.5);
            opacity: 0;
        }
    }
</style>