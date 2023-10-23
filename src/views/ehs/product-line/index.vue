<script setup lang="ts">
  import { onMounted, ref } from 'vue';

  interface ProductLine {
    id: number;
    bu: string;
    model: string;
    productNameCn: string;
    productNameEn: string;
    categoryTable: string;
    registrationCertificateNo: string;
    usedRegistrationNumber: string;
    features: string;
    createdTime: string;
    updatedTime: string;
  }

  const columns = [
    {
      field: 'id',
      title: 'ID',
      sort: true,
      width: 'auto',
    },
    {
      field: 'bu',
      title: 'BU',
    },
    {
      field: 'model',
      title: '类别',
    },
    {
      field: 'productNameCn',
      title: 'Product Name (CN)',
    },
    {
      field: 'productNameEn',
      title: 'Product Name (EN)',
    },
    {
      field: 'categoryTable',
      title: 'Category Table',
    },
    {
      field: 'registrationCertificateNo',
      title: 'Registration Certificate No.',
    },
    {
      field: 'usedRegistrationNumber',
      title: 'UsedRegistrationNumber',
    },
    {
      field: 'features',
      title: 'Features',
    },
    {
      field: 'createdTime',
      title: '创建时间',
    },
  ];
  const records = ref<ProductLine[]>([]);
  const total = ref(0);

  const handlePaginationChange = async (current: number) => {
    const res = await fetch(
      `https://106.14.32.178:8080/api/ehs/product-line/${current}/20`
    );
    const productLine = await res.json();
    records.value = productLine.data.list;
    total.value = productLine.data.total.value;
  };

  onMounted(async () => {
    const res = await fetch(
      'https://106.14.32.178:8080/api/ehs/product-line/1/20'
    );
    const productLine = await res.json();
    records.value = productLine.data.list;
    total.value = productLine.data.total.value;
  });
</script>

<template>
  <div class="bg-white mxy rounded pxy flex flex-col items-end">
    <JungtTable :columns="columns" :record="records" />
    <APagination
      class="mt"
      size="large"
      :total="total"
      @change="handlePaginationChange"
    />
  </div>
</template>

<style scoped lang="less"></style>
