<template>
  <former :form-data="formData" />
</template>

<route lang="json">
{
  "meta": {
    "title": "component name here",
    "sort": 1
  }
}
</route>

<script lang="ts">
import { defineComponent, PropType } from 'vue'
import type { FormDataModel } from '@/types/former'

export default defineComponent({
  name: 'component name here',
  components: {},
  props: {
    formData: {
      type: Object as PropType<FormDataModel>,
      default() {
        return {
          name: {
            label: 'ID',
            type: 'input',
            value: '',
            placeholder: '请输入ID进行搜索',
            rule: {
              type: 'string',
              required: true,
            },
          },
        }
      },
    },
  },
  data() {
    return {}
  },
  beforeCreate() {},
  activated() {},
  deactivated() {},
  created() {},
  beforeMount() {},
  mounted() {},
  beforeUpdate() {},
  updated() {},
  beforeUnmount() {},
  unmounted() {},
  methods: {
    getFormDataValues() {
      return 1
    },
  },
  filters: {},
  computed: {},
  watch: {},
})
</script>

<style lang="less" scoped></style>
