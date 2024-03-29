<template>
  <!-- input -->
  <n-input
    v-if="data.type === 'input'"
    v-model:value="data.value"
    :disabled="data.disabled"
    :placeholder="data.placeholder"
    :clearable="data.clearable"
    @update:value="data.onChange && data.onChange($event)"
  >
    <template v-if="data.prefix" #prefix>
      {{ data.prefix }}
    </template>
    <template v-if="data.suffix" #suffix>
      {{ data.suffix }}
    </template>
  </n-input>

  <!-- input-number -->
  <n-input-number
    v-if="data.type === 'inputNumber'"
    v-model:value="data.value"
    :disabled="data.disabled"
    :placeholder="data.placeholder"
    :clearable="data.clearable"
    @update:value="data.onChange && data.onChange($event)"
  >
    <template v-if="data.prefix" #prefix>
      {{ data.prefix }}
    </template>
    <template v-if="data.suffix" #suffix>
      {{ data.suffix }}
    </template>
  </n-input-number>

  <n-input
    v-if="data.type === 'numberRange'"
    v-model:value="data.value"
    pair
    :separator="data.separator || '-'"
    :placeholder="[data.startPlaceholder || '从', data.endPlaceholder || '到']"
    clearable
    @update:value="data.onChange && data.onChange($event)"
  />

  <!-- select -->
  <n-select
    v-if="data.type === 'select'"
    v-model:value="data.value"
    :options="data.options"
    :disabled="data.disabled"
    :multiple="data.multiple"
    :placeholder="data.placeholder"
    options-change
    :clearable="data.clearable"
    :filterable="data.filterable"
    :virtual-scroll="false"
    :max-tag-count="data.maxTagCount"
    @update:value="data.onChange && data.onChange($event)"
  />

  <!-- cascader -->
  <n-cascader
    v-if="data.type === 'cascader'"
    v-model:value="data.value"
    :options="data.options"
    :value-field="data.valueField || 'value'"
    :label-field="data.labelField || 'label'"
    :children-field="data.childField || 'children'"
    :check-strategy="data.checkStrategy"
    :multiple="data.multiple"
    :filterable="data.filterable"
    :disabled="data.disabled"
    :placeholder="data.placeholder"
    :max-tag-count="data.maxTagCount"
    :clearable="data.clearable"
    @update:value="data.onChange && data.onChange($event)"
  />

  <!-- color -->
  <n-color-picker
    v-if="data.type === 'color'"
    v-model:value="data.value"
    :disabled="data.disabled"
    :modes="data.colorType"
    :clearable="data.clearable"
  />

  <!-- radio -->
  <n-radio-group
    v-if="data.type === 'radio'"
    v-model:value="data.value"
    :disabled="data.disabled"
    name="radiogroup"
    @update:value="data.onChange && data.onChange($event)"
  >
    <n-space>
      <n-radio
        v-for="option in data.options"
        :key="option.value"
        :disabled="option.disabled"
        :value="option.value"
      >
        {{ option.label }}
        <span class="tips">{{ option.tips }}</span>
      </n-radio>
    </n-space>
  </n-radio-group>

  <!-- switch -->
  <n-switch
    v-if="data.type === 'switch'"
    v-model:value="data.value"
    :disabled="data.disabled"
    @update:value="data.onChange && data.onChange($event)"
  />

  <!-- date -->
  <n-date-picker
    v-if="data.type === 'date'"
    v-model:value="data.value"
    :type="data.dateType || 'date'"
    :disabled="data.disabled"
    :placeholder="data.placeholder"
    :clearable="data.clearable"
    :start-placeholder="data.startPlaceholder"
    :end-placeholder="data.endPlaceholder"
    :is-date-disabled="data.isDateDisabled"
    @update:value="data.onChange && data.onChange($event)"
  />

  <!-- textarea -->
  <n-input
    v-if="data.type === 'textarea'"
    v-model:value="data.value"
    type="textarea"
    :disabled="data.disabled"
    :clearable="data.clearable"
  />

  <!-- image -->
  <!-- <n-upload
    v-if="data.type === 'image' && !data.hidden"
    :action="data.action"
    :default-file-list="data.defaultFileList"
    list-type="image-card"
    :name="data.fieldName"
    :disabled="data.disabled"
    :max="data.max"
    :on-finish="finishUploadImage"
    :accept="data.accept"
    :headers="headers"
  /> -->

  <!-- tag -->
  <n-space v-if="data.type === 'tag'">
    <n-tag v-for="(tag, i) in data.value"
      :key="i"
      :type="data.tagType"
    >
      {{ tag }}
    </n-tag>
  </n-space>

  <!-- tips -->
  <div v-if="data.type === 'tips'">
    {{ data.value }}
  </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue'
import type { PropType } from 'vue'
import type { FormDataModelItem } from '@/types/former'
export default defineComponent({
  components: {},
  setup() {},
  props: {
    data: {
      type: Object as PropType<FormDataModelItem>,
      default() {
        return {}
      },
    },
  },
  data() {
    return {
      defaultFileList: [],
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
  methods: {},
  computed: {},
  watch: {},
})
</script>

<style lang="less">
.tips {
  color: #999;
  font-size: 90%;
}
</style>
