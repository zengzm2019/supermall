<template>
  <div class="tabControl">
    <div
      v-for="(item,index) in titles"
      class="tabControl-item"
      :class="{active: index===currentIndex}"
      @click="itemClick(index)"
    >
      <span>{{item}}</span>
    </div>
  </div>
</template>

<script>
export default {
  name: "TabControl",
  data() {
    return {
      currentIndex: 0
    };
  },
  props: {
    titles: {
      type: Array,
      default() {
        return [];
      }
    }
  },
  components: {},
  methods: {
    itemClick(index) {
      this.currentIndex = index;
    }
  }
};
</script>

<style>
.tabControl {
  display: flex;
  height: 40px;
  line-height: 40px;
  text-align: center;
  font-size: 15px;
  background-color: #ffffff;
}
.tabControl .tabControl-item {
  flex: 1;
}
.tabControl-item sapn {
  padding: 5px;
}
.active {
  color: var(--color-high-text);
}

.active span {
  border-bottom: 3px solid var(--color-tint);
}
</style>
