<script setup lang="ts">
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

  const option = {
    columns: [
      {
        field: 'ID',
        title: 'ID',
        sort: true,
        width: 'auto',
      },
      {
        field: 'BU',
        title: 'BU',
      },
      {
        field: 'Model',
        title: '类别',
      },
      {
        field: 'Product Name (CN)',
        title: 'Product Name (CN)',
      },
      {
        field: 'Product Name (EN)',
        title: 'Product Name (EN)',
      },
      {
        field: 'Category Table',
        title: 'Category Table',
      },
      {
        field: 'Registration Certificate No.',
        title: 'Registration Certificate No.',
      },
      {
        field: 'Created Time',
        title: '创建时间',
      },
    ],
    records: [
      {
        'ID': 'CN-2019-1973789',
        'BU': '标准级',
        'Model': '办公用品',
        'Product Name (CN)': '信封',
        'Product Name (EN)': '125.44',
        'Category Table': '125.44',
        'Registration Certificate No.': '125.44',
        'Created Time': '125.44',
      },
      {
        'ID': 'CN-2019-1973789',
        'BU': '标准级',
        'Model': '办公用品',
        'Product Name (CN)': '信封',
        'Product Name (EN)': '125.44',
        'Category Table': '125.44',
        'Registration Certificate No.': '125.44',
        'Created Time': '125.44',
      },
      {
        'ID': 'CN-2019-1973789',
        'BU': '标准级',
        'Model': '办公用品',
        'Product Name (CN)': '信封',
        'Product Name (EN)': '125.44',
        'Category Table': '125.44',
        'Registration Certificate No.': '125.44',
        'Created Time': '125.44',
      },
      {
        'ID': 'CN-2019-1973789',
        'BU': '标准级',
        'Model': '办公用品',
        'Product Name (CN)': '信封',
        'Product Name (EN)': '125.44',
        'Category Table': '125.44',
        'Registration Certificate No.': '125.44',
        'Created Time': '125.44',
      },
    ],
  };
</script>

<template>
  <div>
    <JungtTable :columns="option.columns" :records="option.records" />
  </div>
</template>

<style scoped lang="less"></style>
