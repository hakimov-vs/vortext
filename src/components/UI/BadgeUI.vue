<template>
    <span class="badge">{{value}}</span>
</template>
<script>
export default{
    name:"BadgeUI",
    props:[
        'value'
    ]
}
</script>

<style>
.badge{
    display: inline;
    background-color: var(--primary);
    border-radius: 100px;
    font-size: 17px;
    text-align: center;
    line-height: 22px;
    padding: 1px 7px 2.5px 7px;
    color: #fff;
    font-size: 16px;
}
</style>