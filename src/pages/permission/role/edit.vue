<template>
  <div class="page">
    <former ref="former" :form-data="formData" />

    <n-space>
      <n-button round
        type="primary"
        @click="validForm"
      > 提交 </n-button>
      <n-button round
        type="tertiary"
        @click="$router.go(-1)"
      > 取消 </n-button>
    </n-space>
  </div>
</template>

<route lang="json">
{
  "meta": {
    "title": "角色编辑",
    "hidden": true,
    "keepAlive": true
  }
}
</route>

<script lang="ts">
import { defineComponent } from 'vue'
import type { FormDataModel, FormerMethods } from '@/types/former'
interface FromDataValue {
  name: string
  age: number
  bodyInfo: string
  height: number
  weight: number
  likes: {
    name: string
    proficiency: string
  }[]
}

export default defineComponent({
  name: 'role-role',
  components: {},
  data() {
    return {
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
    }
  },
  beforeCreate() {},
  created() {},
  beforeMount() {},
  mounted() {},
  beforeUpdate() {},
  updated() {},
  beforeUnmount() {},
  unmounted() {},
  methods: {
    validForm() {
      const formerRef = this.$refs.former as FormerMethods
      formerRef.validForm<FromDataValue>((data) => {
        // eslint-disable-next-line no-console
        console.log(data)
      })
    },
  },
  filters: {},
  computed: {},
  watch: {},
})
</script>

<style lang="less" scoped></style>
