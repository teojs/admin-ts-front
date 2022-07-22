<template>
  <!-- input -->
  <n-input
    v-if="data.type === 'input'"
    v-model:value="data.value"
    :disabled="data.disabled"
    :placeholder="data.placeholder"
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
  >
    <template v-if="data.prefix" #prefix>
      {{ data.prefix }}
    </template>
    <template v-if="data.suffix" #suffix>
      {{ data.suffix }}
    </template>
  </n-input-number>

  <!-- select -->
  <n-select
    v-if="data.type === 'select'"
    v-model:value="data.value"
    :options="data.options"
    :disabled="data.disabled"
    :multiple="data.multiple"
    :placeholder="data.placeholder"
    options-change
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
    clearable
    @update:value="data.onChange && data.onChange($event)"
  />

  <!-- color -->
  <n-color-picker
    v-if="data.type === 'color'"
    v-model:value="data.value"
    :disabled="data.disabled"
    :modes="data.modes"
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
    clearable
  />

  <!-- daterange -->
  <div v-if="data.type === 'daterange'" class="flex align-center">
    <n-date-picker
      v-model:value="data.value[0]"
      clearable
      :disabled="data.disabled[0]"
    />
    <span class="ml10 mr10">至</span>
    <n-date-picker
      v-model:value="data.value[1]"
      clearable
      :disabled="data.disabled[1]"
    />
  </div>

  <!-- textarea -->
  <n-input
    v-if="data.type === 'textarea'"
    v-model:value="data.value"
    type="textarea"
    :disabled="data.disabled"
    clearable
  />

  <!-- image -->
  <n-upload
    v-if="data.type === 'image' && data.show"
    :action="data.action"
    :default-file-list="data.defaultFileList"
    list-type="image-card"
    :name="data.fieldName"
    :disabled="data.disabled"
    :max="data.max"
    :on-finish="finishUploadImage"
    :accept="data.accept"
    :headers="headers"
  />

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
import type { PropType } from 'vue'
import { useMessage } from 'naive-ui'
import type { FormDataModel, FormDataModelItem } from '@/types/former'
export default {
  components: {},
  setup() {
    const message = useMessage()
    return {
      message,
      headers: {
        Authorization:
          'SIMPLELOVEDXZSADMINSERVICE ' + localStorage.getItem('token'),
      },
    }
  },
  props: {
    data: {
      type: Object as PropType<FormDataModelItem<FormDataModel>>,
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
}
</script>

<style lang="less">
.tips {
  color: #999;
  font-size: 90%;
}
</style>
