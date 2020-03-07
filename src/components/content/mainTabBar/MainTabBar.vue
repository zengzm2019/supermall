<template>
  <tab-bar>
    <tab-bar-item path="/home">
      <img slot="item-icon" src="~assets/img/tabbar/home.svg" />
      <img slot="item-icon-active" src="~assets/img/tabbar/home_active.svg" />
      <span slot="item-name">主页</span>
    </tab-bar-item>
    <tab-bar-item path="/category">
      <img slot="item-icon" src="~assets/img/tabbar/category.svg" alt />
      <img slot="item-icon-active" src="~assets/img/tabbar/category_active.svg" alt />
      <span slot="item-name">分类</span>
    </tab-bar-item>
    <tab-bar-item path="/cart">
      <img slot="item-icon" src="~assets/img/tabbar/shopcart.svg" alt />
      <img slot="item-icon-active" src="~assets/img/tabbar/shopcart_active.svg" alt />
      <span slot="item-name">购物车</span>
    </tab-bar-item>
    <tab-bar-item path="/profile">
      <img slot="item-icon" src="~assets/img/tabbar/profile.svg" alt />
      <img slot="item-icon-active" src="~assets/img/tabbar/profile_active.svg" alt />
      <span slot="item-name">我的</span>
    </tab-bar-item>
  </tab-bar>
</template>

<script>
//导入组件
import TabBar from "components/common/tabbar/TabBar";
import TabBarItem from "components/common/tabbar/TabBarItem";
export default {
  name: "MainTabBar",
  data() {
    return {};
  },
  components: {
    TabBar,
    TabBarItem
  }
};
</script>

<style>
</style>
