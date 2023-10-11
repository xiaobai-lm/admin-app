<template>
  <div ref="tableRef" class="h-xl w-full"></div>
</template>

<script lang="ts" setup>
  import { onMounted, ref } from 'vue';
  import { ListTable, themes, ColumnsDefine } from '@visactor/vtable';

  const { columns, records } = defineProps<{
    columns: ColumnsDefine;
    records: any[];
  }>();
  const tableRef = ref();
  const options = ref<any>({
    columns,
    records,
    theme: themes.ARCO,
    widthMode: 'adaptive',
  });

  onMounted(() => {
    return new ListTable(tableRef.value, options.value);
  });
</script>
