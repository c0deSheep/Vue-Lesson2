<!--设置的TabBar组件-->
<template>
  <div id="tab-bar">
    <!--tabbar组件里使用插槽，只放一种类型的东西，就用一个slot不用配置name属性，如果配置不同的东西就需要不同slot-->
    <slot></slot>
  </div>
</template>

<script>
    export default {
        name: "TabBar"
    }
</script>

<style scoped>
  #tab-bar {
    /*使用伸缩布局flex*/
    display:flex;
    background-color: #f6f6f6;
    position: fixed;
    /*布局flex后通过左0右0后可以将内容完整放一行上*/
    left: 0;
    right: 0;
    bottom: 0;
    box-shadow: 0px 0px 3px 1px rgba(0,0,0,.1);
  }

</style>
