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
    formData: {
      baseInfo: {
        label: '基本信息',
        type: 'title',
      },
      name: {
        label: '姓名',
        type: 'input',
        value: '',
        placeholder: '请输入姓名。',
        rule: {
          type: 'string',
          required: true,
        },
      },
      age: {
        label: '年龄',
        type: 'inputNumber',
        value: 0,
        placeholder: '请输入年龄',
        rule: {
          type: 'number',
          required: true,
        },
      },
      bodyInfo: {
        label: '身体数据',
        type: 'title',
      },
      height: {
        label: '身高',
        type: 'inputNumber',
        value: 0,
        placeholder: '请输入身高',
        rule: {
          type: 'number',
          required: true,
        },
      },
      weight: {
        label: '体重',
        type: 'inputNumber',
        value: 0,
        placeholder: '请输入体重',
        rule: {
          type: 'number',
          required: true,
        },
      },
      sex: {
        label: '性别',
        type: 'select',
        value: 0,
        placeholder: '请选择性别',
        options: [
          {
            label: '男',
            value: 1,
          },
          {
            label: '女',
            value: 0,
          },
        ],
        rule: {
          type: 'number',
          required: true,
        },
      },
      likes: {
        label: '技能',
        type: 'array',
        value: [],
        fields: {
          name: {
            label: '技能名称',
            type: 'input',
            rule: {
              type: 'string',
              required: true,
            },
          },
          proficiency: {
            label: '熟练度',
            type: 'inputNumber',
            rule: {
              type: 'number',
              required: true,
            },
          },
        },
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
