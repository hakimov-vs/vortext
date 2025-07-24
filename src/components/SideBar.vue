<template>
    <div id="side-bar">
        SideBar
    </div>
</template>

<script>
export default{
    name:'SideBar'
}
</script>

<style>
#side-bar{
    width: 500px;
    height: 100%;
    background-color: var(--primary);
}

@media (max-width: 1200px) {
    #side-bar{
        width: 450px;
    }
}
@media (max-width: 1024px) {
    #side-bar{
        width: 400px;
    }
}

@media (max-width: 900px) {
    #side-bar{
        flex-basis:100%;
    }
}
</style>