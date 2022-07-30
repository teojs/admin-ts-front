<template>
  <div class="option-bar">
    <slot name="left"><div /></slot>
    <slot name="right"><div /></slot>
  </div>
</template>

<style lang="less" scoped>
.option-bar {
  display: flex;
  justify-content: space-between;
  margin-bottom: 10px;
}
</style>
