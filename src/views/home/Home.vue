<template>
  <div id="home">
    <nav-bar class="home-nav">
      <div slot="center">购物街</div>
    </nav-bar>
    <home-swiper :banners="banners" />
    <recomment-view :recommends="recommends" />
    <feature-view />
    <tab-control :titles="['流行','新款','精选']"></tab-control>
    <ul>
      <li>列表</li>
      <li>列表</li>
      <li>列表</li>

      <li>列表</li>
      <li>列表</li>

      <li>列表</li>
      <li>列表</li>
      <li>列表</li>
      <li>列表</li>
      <li>列表</li>
      <li>列表</li>
      <li>列表</li>
    </ul>
  </div>
</template>

<script>
import HomeSwiper from "./childComp/HomeSwiper";
import RecommentView from "./childComp/RecommentView";
import FeatureView from "./childComp/FeatureView";

import NavBar from "components/common/navbar/NavBar";
import TabControl from "components/content/tabControl/TabControl";
import { getHomeMultidata } from "network/home";

export default {
  name: "Home",
  data() {
    return {
      banners: [],
      recommends: []
    };
  },
  components: {
    HomeSwiper,
    RecommentView,
    FeatureView,
    NavBar,
    TabControl
  },
  created() {
    getHomeMultidata().then(res => {
      this.banners = res.data.banner.list;
      this.recommends = res.data.recommend.list;
    });
  }
};
</script>

<style>
#home {
  /*padding-top: 44px;*/
  height: 100vh;
  position: relative;
}
.home-nav {
  background-color: var(--color-tint);
  color: #fff;

  position: fixed;
  left: 0;
  right: 0;
  top: 0;
  z-index: 9;
}
</style>
