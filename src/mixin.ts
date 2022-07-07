import { defineComponent } from 'vue'

export default defineComponent({
  data: () => ({
    meta: {
      title: '项目名称',
    },
  }),
  created() {
    document.title = this.$data.meta.title
  },
  watch: {
    meta: {
      deep: true,
      immediate: true,
      handler(value) {
        document.title = value.title
      },
    },
  },
})
