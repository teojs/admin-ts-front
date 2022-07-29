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
    "title": "商品编辑",
    "hidden": true,
    "keepAlive": true
  }
}
</route>

<script lang="ts">
import { defineComponent } from 'vue'
import type { FormDataModel, FormerMethods } from '@/types/former'

export default defineComponent({
  name: 'commodity-commodity-edit',
  components: {},
  data() {
    return {
      formData: {
        baseInfo: {
          label: '基本信息',
          type: 'title',
        },
        brandName: {
          label: '品牌名称',
          type: 'input',
          value: '',
          placeholder: '请输入品牌名称',
        },
        categoryId: {
          label: '商品分组id',
          type: 'inputNumber',
          value: 0,
          placeholder: '商品分组id',
        },
        commodityCode: {
          label: '商品编码',
          type: 'input',
          value: '',
          placeholder: '请输入商品编码',
          rule: [{ type: 'string', required: true, message: '请输入商品编码' }],
        },
        commodityType: {
          label: '商品类型',
          type: 'select',
          value: '',
          placeholder: '请选择商品类型',
          options: [
            {
              label: '虚拟物品',
              value: 'VIRTUAL',
            },
            {
              label: '积分',
              value: 'POINT',
            },
            {
              label: '实物',
              value: 'REAL',
            },
          ],
          rule: {
            type: 'string',
            required: true,
            message: '请选择商品类型',
          },
        },
        description: {
          label: '商品描述',
          type: 'textarea',
          value: '',
          placeholder: '请输入商品描述',
          rule: [{ type: 'string', required: true, message: '请输入商品描述' }],
        },
        marketPrice: {
          label: '市场价',
          type: 'inputNumber',
          value: 0,
          placeholder: '请输入市场价',
        },
        model: {
          label: '型号',
          type: 'input',
          value: '',
          placeholder: '请输入型号',
        },
        purchasePrice: {
          label: '进货价',
          type: 'inputNumber',
          value: 0,
          placeholder: '请输入进货价',
        },
        isDeleted: {
          label: '是否已删除',
          type: 'switch',
          value: false,
        },
        isMultiSize: {
          label: '是否多商品规格',
          type: 'switch',
          value: false,
        },
        isEnabled: {
          label: '是否启用',
          type: 'switch',
          value: false,
        },
        isVisible: {
          label: '是否上下架',
          type: 'switch',
          value: true,
          rule: [{ type: 'boolean', required: true, message: '请选择' }],
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
      formerRef.validForm(() => {
        this.commoditycommondityCreat()
      })
    },
    commoditycommondityCreat() {
      const formData: {
        brandName: string
        categoryId: number
        commodityName: string
        commodityCode: string
        commodityType: string
        description: string
        isDeleted: boolean
        isEnabled: boolean
        isMultiSize: boolean
        isVisible: boolean
        marketPrice: number
        model: string
        purchasePrice: number
      } = this.$getFormData(this.formData)
      this.$api.commodity
        .commondityCreat({
          data: {
            brandName: formData?.brandName,
            categoryId: formData?.categoryId,
            commodityName: formData?.commodityName,
            commodityCode: formData?.commodityCode,
            commodityType: formData?.commodityType,
            description: formData?.description,
            isDeleted: formData?.isDeleted,
            isEnabled: formData?.isEnabled,
            isVisible: formData?.isVisible,
            isMultiSize: formData?.isMultiSize,
            marketPrice: formData?.marketPrice,
            model: formData?.model,
            purchasePrice: formData?.purchasePrice,
          },
        })
        .then((res) => {
          console.log(res)
        })
    },
  },
  filters: {},
  computed: {},
  watch: {},
})
</script>

<style lang="less" scoped></style>
