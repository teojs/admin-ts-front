<template>
  <n-form
    ref="formRef"
    class="former"
    :model="formData"
    :show-label="showLabel"
  >
    <n-grid
      :cols="cols"
      responsive="self"
      :x-gap="20"
      :collapsed="collapsed"
      :collapsed-rows="collapsedRows"
    >
      <template v-for="(item, key) in formData" :key="key">
        <!-- array -->
        <n-gi v-if="item.type === 'array'" :span="24">
          <n-space>
            <n-h4 prefix="bar">
              <n-text type="primary">{{ item.label }}</n-text>
            </n-h4>
            <n-button
              dashed
              round
              size="small"
              type="primary"
              @click="addItem(item.value, item.fields)"
            >
              新增
            </n-button>
            <span class="tips">{{ item.tips }}</span>
          </n-space>
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
          :rule="
            item.rule ||
              (item.type === 'numberRange' ? numberRangeRule : undefined)
          "
        >
          <template #label>
            {{ item.label }}
            <span class="tips">{{ item.tips }}</span>
          </template>
          <former-item :data="item" />
        </n-form-item-gi>
      </template>
    </n-grid>
  </n-form>
</template>

<script lang="ts">
import { defineComponent, PropType } from 'vue'
import type { FormInst, FormItemRule } from 'naive-ui'
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
    cols: {
      type: String as PropType<string | number>,
      default: '1 400:2 600:3 800:4 1200:5',
    },
    showLabel: {
      type: Boolean as PropType<boolean>,
      default: true,
    },
    collapsed: {
      type: Boolean as PropType<boolean>,
      default: false,
    },
    collapsedRows: {
      type: Number as PropType<number>,
      default: 1,
    },
  },
  data() {
    return {
      numberRangeRule: {
        type: 'array',
        validator: (rule, value, callback) => {
          if (Array.isArray(value)) {
            if (value.some(isNaN)) {
              callback(new Error('只能输入数字'))
            }
            if (Number(value[0]) > Number(value[1])) {
              callback(new Error('范围结束值必须大于开始值'))
            }
          }
          callback()
        },
      } as FormItemRule,
    }
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
    validForm(cb: Function) {
      const formRef = this.$refs.formRef as FormInst
      formRef.validate((errors) => {
        if (!errors) {
          cb()
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
