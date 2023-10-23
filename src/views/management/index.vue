<template>
  <div class="huamingce">花名册</div>
  <div
    class="bg-white mxy rounded pxy flex flex-col items"
    style="height: 600px"
  >
    <div class="top">
      <div class="divider-demo">
        <span class="hand"><p>在职</p><p style="font-weight: 800">1</p></span>
      </div>
      <div class="divider-demo">
        <span class="hand"><p>正式</p><p style="font-weight: 800">1</p></span>
        <a-divider direction="vertical" orientation="center" />
        <span class="hand"><p>实习</p><p style="font-weight: 800">0</p></span>
        <a-divider direction="vertical" orientation="center" />
        <span class="hand"><p>外包</p><p style="font-weight: 800">0</p></span>
        <a-divider direction="vertical" orientation="center" />
        <span class="hand"><p>其他 </p><p style="font-weight: 800">0</p></span>
      </div>
      <div class="divider-demo">
        <span class="hand"><p>试用中</p><p style="font-weight: 800">0</p></span>
        <a-divider direction="vertical" orientation="center" />
        <span class="hand"><p>已转正</p><p style="font-weight: 800">0</p></span>
      </div>
      <div class="divider-demo divider-demo1">
        <span class="hand"><p>待离职</p><p style="font-weight: 800">0</p></span>
        <a-divider direction="vertical" orientation="center" />
        <span class="hand"><p>已离职</p><p style="font-weight: 800">0</p></span>
      </div>
    </div>
    <div class="search">
      <a-space direction="vertical" size="large" style="border-radius: 6.98px">
        <a-input-search
          :style="{ width: '320px' }"
          placeholder="通过姓名、工作邮箱、手机号码搜索..."
        />
      </a-space>
      <div class="filter"><icon-filter /></div>
      <div class="filter"><icon-settings /></div>
      <div class="ziduan"><icon-settings />花名册字段</div>
      <div class="ziduan1"><icon-download />导入</div>
      <div class="ziduan1"><icon-upload />导出</div>
      <a-button type="primary" class="addPenson">
        <template #icon>
          <icon-plus />
        </template>
        添加人员
      </a-button>
    </div>

    <a-table
      :columns="columns"
      :data="data"
      column-resizable
      :bordered="{ cell: true }"
    ></a-table>
  </div>
</template>

<script setup lang="ts">
  import { reactive } from 'vue';

  const columns = reactive([
    {
      title: '姓名',
      dataIndex: 'name',
      width: 100,
    },
    {
      title: '手机号码',
      dataIndex: 'telephone',
      width: 180,
    },
    {
      title: '工号',
      dataIndex: 'address',
      width: 100,
    },
    {
      title: '人员类型',
      dataIndex: 'personType',
      width: 100,
    },
    {
      title: '部门',
      dataIndex: 'department',
      width: 180,
    },
    {
      title: '职务',
      dataIndex: 'position',
    },
    {
      title: '序列',
      dataIndex: 'sequence',
    },
    {
      title: '操作',
      dataIndex: 'operate',
    },
  ]);
  const data = reactive([
    {
      key: '1',
      name: '李广益',
      telephone: '+86 17625244142',
      address: '--',
      personType: '正式',
      department: '杭州栀梦科技有限公司',
      position: '--',
      sequence: '--',
      operate: '...',
    },
  ]);
</script>

<style scoped lang="less">
  .top {
    display: flex;
    float: left;
  }
  .huamingce {
    font-size: 18px;
    font-weight: 400;
    margin-left: 20px;
    margin-top: 10px;
  }
  .divider-demo {
    box-sizing: border-box;
    // width: 360px;
    padding: 5px 10px;
    border: solid rgb(213, 211, 211);
    height: 80px;
    display: flex;
    float: left;
    margin: 0 10px;
    border-radius: 6.98px;
  }
  .hand {
    float: left;
    text-align: center;
    font-weight: 500;
    margin: 0 20px;
  }
  .hand1 {
    display: flex;
    // float: left;
    // text-align: center;
    font-weight: 500;
    // margin: 0 20px;
  }
  .divider-demo1 {
    margin-right: 18px;
  }
  .search {
    margin: 20px 5px;
    display: flex;
    .filter {
      margin-left: 15px;
      display: flex;
      width: 30px;
      height: 30px;
      border: solid rgb(224, 220, 220) 1.5px;
      border-radius: 6.98px;
      align-items: center;
      justify-content: center;
    }
    .ziduan {
      margin-left: 200px;
      border: solid rgb(224, 220, 220) 1.5px;
      display: flex;
      border-radius: 6.98px;
      align-items: center;
      justify-content: center;
      padding: 0 8px;
    }
    .ziduan1 {
      border: solid rgb(224, 220, 220) 1.5px;
      display: flex;
      border-radius: 6.98px;
      align-items: center;
      justify-content: center;
      padding: 0 8px;
      margin-left: 10px;
    }
    .addPenson {
      border-radius: 6.98px;
      margin-left: 10px;
    }
  }
</style>
