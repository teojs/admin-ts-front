<template>
  <n-spin :show="loading">
    <n-form ref="formRef"
      class="former"
      :model="formData"
    >
      <n-grid :cols="cols"
        responsive="self"
        :x-gap="20"
      >
        <template v-for="(item, key) in formData" :key="key">
          <!-- array -->
          <n-gi v-if="item.type === 'array'" :span="24">
            <n-h4 prefix="bar">
              <n-text type="primary">{{ item.label }}</n-text>
            </n-h4>
            <span class="tips">{{ item.tips }}</span>
            <div style="flex: 1; margin-bottom: 10px">
              <n-card
                v-for="(subItem, subIndex) in item.value"
                :key="subIndex"
                closable
                :on-close="() => item.value.splice(subIndex, 1)"
              >
                <n-grid :cols="cols" :x-gap="20">
                  <n-form-item-gi
                    v-for="(subFieldValue, subField) in subItem"
                    :key="subField"
                    :label="subFieldValue.label"
                    :path="`${key}.value.${subIndex}.${subField}.value`"
                    :rule="subFieldValue.rule"
                  >
                    <former-item :data="subFieldValue" />
                  </n-form-item-gi>
                </n-grid>
              </n-card>
              <n-button
                dashed
                round
                size="small"
                type="primary"
                @click="addItem(item.value, item.fields)"
              >
                新增
              </n-button>
            </div>
          </n-gi>

          <n-gi v-else-if="item.type === 'title'" :span="24">
            <n-h3 prefix="bar">
              <n-text type="primary">{{ item.label }}</n-text>
            </n-h3>
            <span class="tips">{{ item.tips }}</span>
          </n-gi>

          <n-form-item-gi
            v-else-if="!item.hidden"
            :label="item.label"
            :path="`${key}.value`"
            :rule="item.rule"
          >
            <template #label>
              {{ item.label }}
              <span class="tips">{{ item.tips }}</span>
            </template>
            <former-item :data="item" />
          </n-form-item-gi>
        </template>
      </n-grid>

      <n-space>
        <n-button round
          :loading="loading"
          type="primary"
          @click="validForm"
        >
          提交
        </n-button>
        <n-button round
          type="tertiary"
          @click="$emit('onCancel')"
        >
          取消
        </n-button>
      </n-space>
    </n-form>
  </n-spin>
</template>

<script lang="ts">
import { defineComponent, PropType } from 'vue'
import { FormInst } from 'naive-ui'
import type { FormDataModel, FormDataModelItem } from '@/types/former'

export default defineComponent({
  components: {},
  props: {
    formData: {
      type: Object as PropType<FormDataModel>,
      default() {
        return {}
      },
      required: true,
    },
    loading: {
      type: Boolean as PropType<boolean>,
      default: false,
    },
    cols: {
      type: String as PropType<string>,
      default: '1 400:2 600:3 800:4 1200:5',
    },
  },
  emits: ['onCancel', 'onConfirm', 'onError'],
  data() {
    return {}
  },
  beforeCreate() {},
  created() {},
  beforeMount() {},
  mounted() {},
  beforeUpdate() {},
  updated() {},
  activated() {},
  deactivated() {},
  beforeUnmount() {},
  unmounted() {},
  methods: {
    addItem(target: FormDataModelItem[], item: FormDataModel | undefined) {
      target.push(JSON.parse(JSON.stringify(item)))
    },
    validForm() {
      const formRef = this.$refs.formRef as FormInst
      formRef.validate((errors) => {
        if (!errors) {
          this.$emit('onConfirm', this.formData)
        } else {
          this.$emit('onError', errors)
        }
      })
    },
  },
  computed: {},
  watch: {},
})
</script>

<style lang="less">
.former {
  .n-input-number,
  .n-date-picker {
    width: 100%;
  }
  .n-card {
    margin-bottom: 10px;
  }
  .tips {
    color: #999;
    font-size: 90%;
  }
}
</style>
