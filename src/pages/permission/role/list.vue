<template>
  <div class="page">
    角色列表
    <former :form-data="formData" />
  </div>
</template>

<route lang="json">
{
  "meta": {
    "title": "角色列表",
    "sort": 1,
    "keepAlive": true
  }
}
</route>

<script lang="ts">
import { defineComponent } from 'vue'
import type { FormDataModel } from '@/types/former'

export default defineComponent({
  name: 'permission-role-list',
  components: {},
  data: () => ({
    formDataDemo: {
      name: 1,
      info: [
        {
          name: 1,
          cellphone: 1,
        },
      ],
    },
    formData: {
      baseInfo: {
        label: '基本信息',
        type: 'input',
        value: '',
        placeholder: '1',
        rule: [
          {
            message: '1',
          },
        ],
      },
    } as FormDataModel,
  }),
  activated() {},
  deactivated() {},
  beforeCreate() {},
  created() {},
  beforeMount() {},
  mounted() {},
  beforeUpdate() {},
  updated() {},
  beforeUnmount() {},
  unmounted() {},
  methods: {},
  filters: {},
  computed: {},
  watch: {},
})
</script>

<style lang="less" scoped></style>
