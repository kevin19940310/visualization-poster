<template>
  <a-row :gutter="6">
    <template-list :list="list"></template-list>
  </a-row>
</template>
<script lang="ts">
import { computed } from "vue";
import { useStore } from "vuex";
import { GlobalDataProps } from "@/store";
import templateList from "@/components/templateList.vue";
export default {
  components:{
    templateList
  },
  setup () {
    const store = useStore<GlobalDataProps>();
    const list = computed(() => store.state.templates.data);
    return {
      list
    }
  }
}
</script>
