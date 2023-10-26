<script setup lang="ts">
  import { reactive, ref } from 'vue';

  const selectedKeys = ref(['Jane Doe', 'Alisa Ross']);

  const rowSelection = reactive({
    type: 'checkbox',
    showCheckedAll: true,
    onlyCurrent: false,
  });
  const pagination = { pageSize: 5 };

  const columns = [
    {
      title: '考勤组名称',
      dataIndex: 'name',
      width: 180,
    },
    {
      title: '类型',
      dataIndex: 'salary',
      width: 130,
    },
    {
      title: '考勤时间',
      dataIndex: 'address',
      width: 300,
    },
    {
      title: '人数',
      dataIndex: 'email',
      width: 238,
    },
    {
      title: '主负',
      dataIndex: 'numberPerson',
    },
    {
      title: '操作',
      dataIndex: 'do',
      fixed: 'right',
      width: 200,
    },
  ];
  const scroll = {
    x: 1500,
    y: 200,
  };
  const data = reactive([
    {
      key: '1',
      name: '体验打卡',
      salary: '固定班制',
      address: '体验打卡班次:09:00~18:00',
      email: '1',
      numberPerson: '+',
    },
  ]);
</script>

<template>
  <div>
    <div class="top"> 考勤组设置 </div>
    <div
      class="bg-white mxy rounded pxy flex flex-col items"
      style="height: 600px; border-radius: 10px"
    >
      <div class="header">
        <a-button type="primary" style="border-radius: 9px">
          <template #icon>
            <icon-plus />
          </template>
          新建考勤组
        </a-button>
        <a-button style="margin-left: 15px; border-radius: 9px; color: #aba8a8"
          >批量设置</a-button
        >
        <div style="float: right; display: flex">
          <div class="search">
            <a-space direction="vertical" size="large">
              <a-input-search
                :style="{ width: '320px' }"
                placeholder="使用考勤组名称、负责人、部门、人员"
              />
            </a-space>
            <div class="filter"><icon-filter />筛选</div>
          </div>
        </div>
      </div>
      <div style="margin-top: 15px">
        <a-space direction="vertical" size="large" fill>
          <a-table
            v-model:selectedKeys="selectedKeys"
            row-key="name"
            :columns="columns"
            :data="data"
            :row-selection="rowSelection"
            :pagination="pagination"
            :scroll="scroll"
          />
        </a-space>
      </div>
    </div>
  </div>
</template>

<style scoped lang="less">
  .top {
    margin: 15px 15px;
    font-weight: bold;
    font-size: 20px;
  }
  .header {
    margin: 5px;
  }
  .search {
    display: flex;
    margin: 0;
    .filter {
      margin-left: 25px;
      display: flex;
      width: 60px;
      height: 30px;
      border: solid rgb(224, 220, 220) 1.5px;
      border-radius: 6.98px;
      align-items: center;
      justify-content: center;
    }

    .ziduan1 {
      border: solid rgb(224, 220, 220) 1.5px;
      display: flex;
      border-radius: 6.98px;
      align-items: center;
      justify-content: center;
      padding: 0 8px;
      margin-left: 535px;
    }
  }
</style>
