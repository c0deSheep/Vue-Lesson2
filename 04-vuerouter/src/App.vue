<template>
<!--  使用路由-->
<!--  作为首页的实际显示网页，在这里插入要加载的网页的组件，写入相关标签-->
  <div id="app">
<!--    设置router-link标签，设置to属性，对应组件的在浏览器中显示地址,设置tag属性，可以将router-link的默认标签改为其他
                           设置replace属性（单属性，没有值），可以使页面前进后退仅集中在这个标签上，而不在浏览器中-->
<!--    <router-link to="/Home" tag="button" replace>首页</router-link>-->
<!--    <router-link to="/about" tag="button"  replace>关 于</router-link>-->
    <button @click="homeClick">首页</button>
    <button @click="aboutClick">关于</button>
<!--    为新增的User页面设置路由,并为其绑定to属性，让拼接用户id-->
<!--    此绑定是为了两个作用：1.显示拼接id（与当前vue组件中得data数据拼接） 2.和index中得use组件配置得path对应上-->
    <router-link :to="'/User/'+userId" tag="button" replace>用户</router-link>

    <!--    为新增的User页面设置路由,并为其绑定to属性，让拼接用户id-->
<!--    <router-link to="/Profile" tag="button">个人页面</router-link>-->
<!--    但是绑定其to属性时以一个对象绑定就可以传递参数，数据由query负责-->
<!--    <router-link :to="{path:'/Profile',query:{name:'yoyoung',age:'24',height:'175'}}" tag="button">个人页面</router-link>-->
<!--    这里如果使用的不是router-link，而是其他标签，如果需要用上面的方法就在methods里用push或replace来添加-->
    <button @click="ProfileClick">个人档案</button>

    <!--    设置router-view标签，作为显示组件的内容，表示站位，在上面还是下面，以routerlink为基准-->
    <!-- 设置keep-alive标签（保持活跃状态），可以让生命周期函数不会销毁，并可以将用户在原页面的操作记录，切换页面返回后会保持记录-->
    <!-- 但如果在keep-alive中使用exclude属性，并赋值需要排除在保持活跃的组件名字，就可以不保持更新-->
   <keep-alive exclude="Profile">
     <router-view></router-view>
   </keep-alive>
  </div>
</template>

<script>
  //导出App组件
export default {
  name: 'App',
  data () {
    return {
      //拼接的用户id数据在App中的data写入
      userId:'young'
    }
  },
  methods:{
    homeClick () {
    //  vue实例自带router属性，属性下得方法和router文件夹中index一样,可以是push/replace方法
      this.$router.push('/Home');
    },
    aboutClick () {
      this.$router.replace('/About');
    },

  //  为Profile按钮添加方法,是为router路由实例添加数据，数据是以对象形式传入
    ProfileClick () {
      this.$router.push({
        path:'/Profile',
        query:{name:'yoyoungCheung',age:'24',height:'175'}
      })
    }
  }
}
</script>

<style>
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  /*text-align: center;*/
  color: #2c3e50;
  margin-top: 60px;
}

/*这个类名，表示是当前点击中的页面，*/
/*.router-link-active {*/
/*  color:#f10*/
/*}*/

.active {
    color: red;
  }
</style>
