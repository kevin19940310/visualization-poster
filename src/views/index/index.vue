<template>
  <a-layout>
    <a-layout-header class="header">
      <div class="page-title">海报可视化</div>
      <user-profile :user="user" />
    </a-layout-header>
    <a-layout-content class="content">
      <router-view />
    </a-layout-content>
    <a-layout-footer class="footer">footer</a-layout-footer>
  </a-layout>
</template>
<script lang="ts">
import { useRoute } from "vue-router";
import { useStore } from "vuex";
import { computed } from "vue";
import { GlobalDataProps } from "@/store";
import userProfile from "@/components/UserProfile.vue";
export default {
  components: {
    userProfile
  },
  setup() {
    const route = useRoute();
    const store = useStore<GlobalDataProps>();
    const user = computed(() => store.state.user);
    return {
      user,
      route,
    };
  },
};
</script>
<style lang="less" scoped>
.header {
  display: flex;
  justify-content: space-between;
  align-items: center;
}
.page-title {
  color: #fff;
}
.content {
  min-height: calc(100vh - 134px);
}
.footer {
  background-color: rgba(0, 0, 0, 0.85);
}
</style>
