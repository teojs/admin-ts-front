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
        // eslint-disable-next-line no-console
        // console.log(this.formData)
        this.commoditycommondityCreat()
      })
    },
    commoditycommondityCreat() {
      console.log(this.formData)
      this.$api.commodity
        .commondityCreat({
          data: {
            brandName: this.formData.brandName.value,
            // categoryId: this.formData.categoryId.value,
            commodityName: this.formData.commodityName.value,
            commodityCode: this.formData.commodityCode.value,
            commodityType: this.formData.commodityType.value,
            description: this.formData.description.value,
            isDeleted: this.formData.isDeleted.value,
            isEnabled: this.formData.isEnabled.value,
            isVisible: this.formData.isVisible.value,
            isMultiSize: this.formData.isMultiSize.value,
            marketPrice: this.formData.marketPrice.value,
            model: this.formData.model.value,
            purchasePrice: this.formData.purchasePrice.value,
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
