<template>
  <n-spin :show="loading">
    <n-form ref="formRef"
      class="former"
      :model="formData"
    >
      <n-card
        v-for="(itemValue, itemKey) in formData"
        :key="itemKey"
        :title="itemValue.label"
      >
        <n-grid :cols="cols"
          responsive="screen"
          :x-gap="24"
        >
          <template
            v-for="(fieldValue, field) in itemValue.fields"
            :key="field"
          >
            <!-- array -->
            <n-form-item-gi
              v-if="fieldValue.type === 'array'"
              :span="24"
              :label="fieldValue.label"
            >
              <div style="flex: 1">
                <n-card
                  v-for="(subItem, i) in fieldValue.value"
                  :key="i"
                  closable
                  :on-close="() => fieldValue.value.splice(i, 1)"
                >
                  <n-grid :cols="24" :x-gap="24">
                    <n-form-item-gi
                      v-for="(subFieldValue, subField) in subItem"
                      :key="subField"
                      :span="6"
                      :label="subFieldValue.label"
                      :path="`${itemKey}.fields.${field}.value.${i}.${subField}.value`"
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
                  @click="addItem(fieldValue.value, fieldValue.fields)"
                >
                  新增
                </n-button>
              </div>
            </n-form-item-gi>
            <n-form-item-gi
              v-else-if="!fieldValue.hidden"
              :label="fieldValue.label"
              :path="`${itemKey}.fields.${field}.value`"
              :rule="fieldValue.rule"
            >
              <template #label>
                {{ fieldValue.label }}
                <span class="tips">{{ fieldValue.tips }}</span>
              </template>
              <former-item :data="fieldValue" />
            </n-form-item-gi>
          </template>
        </n-grid>
      </n-card>
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
import type { FormDataModel } from '@/types/former'

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
      type: [Number, String] as PropType<number | string>,
      default: '1 s:2 m:3 l:4 xl:5',
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
    addItem(target: FormDataModel[], item: FormDataModel | undefined) {
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
