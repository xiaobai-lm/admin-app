<template>
  <div ref="tableRef" class="h-xl w-full"></div>
</template>

<script lang="ts" setup>
  import { ref, watch } from 'vue';
  import {
    ColumnsDefine,
    ListTable,
    ListTableConstructorOptions,
    themes,
  } from '@visactor/vtable';

  const props = defineProps<{
    columns: ColumnsDefine;
    record: any[];
  }>();
  const tableRef = ref();
  const options: ListTableConstructorOptions = {
    columns: props.columns,
    records: props.record,
    theme: themes.ARCO,
    widthMode: 'adaptive',
  };

  watch(
    () => props.record,
    (newVal) => {
      options.records = newVal;
      return new ListTable(tableRef.value, options);
    }
  );
</script>
