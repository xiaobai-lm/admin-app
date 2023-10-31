<template>
  <div>
    <div class="top">员工关怀</div>
    <div
      class="bg-white mxy rounded pxy flex flex-col items"
      style="height: 600px; border-radius: 10px"
    >
      <a-tabs default-active-key="1">
        <a-tab-pane key="1" title="生日">
          <div>
            <div class="divider-demo">
              <span class="hand"
                ><p>今天</p
                ><p style="font-weight: 800; font-size: 18px">1</p></span
              >
            </div>
            <div class="divider-demo">
              <span class="hand"
                ><p>本周</p
                ><p style="font-weight: 800; font-size: 18px">1</p></span
              >
            </div>
            <div class="divider-demo">
              <span class="hand"
                ><p>本月</p
                ><p style="font-weight: 800; font-size: 18px">1</p></span
              >
              <a-divider direction="vertical" />
              <span class="hand"
                ><p>上月</p
                ><p style="font-weight: 800; font-size: 18px">0</p></span
              >
              <a-divider direction="vertical" orientation="center" />
              <span class="hand"
                ><p>下月</p
                ><p style="font-weight: 800; font-size: 18px">0</p></span
              >
            </div>
          </div>
          <div style="float: left">
            <div class="search">
              <a-space direction="vertical" size="large">
                <a-input-search
                  :style="{ width: '320px' }"
                  placeholder="通过姓名、工作邮箱、手机号码搜索..."
                />
              </a-space>
              <div class="filter"><icon-filter /></div>

              <div class="ziduan1"><icon-upload />导出</div>
            </div>
          </div>
          <div style="float: left; width: 98%; margin: 0 10px">
            <a-table
              :columns="columns"
              :data="data"
              column-resizable
              :bordered="{ cell: true }"
            ></a-table>
          </div>
        </a-tab-pane>
        <a-tab-pane key="2" title="入职周年">
          Content of Tab Panel 2
        </a-tab-pane>
      </a-tabs>
    </div>
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
      title: '职务',
      dataIndex: 'telephone',
      width: 180,
    },
    {
      title: '部门',
      dataIndex: 'address',
      width: 100,
    },
    {
      title: '人员类型',
      dataIndex: 'personType',
      width: 100,
    },
    {
      title: '性别',
      dataIndex: 'department',
      width: 180,
    },
    {
      title: '出生日期',
      dataIndex: 'position',
    },
    {
      title: '出生月份',
      dataIndex: 'sequence',
    },
  ]);
  const data = reactive([
    // {
    //   key: '1',
    //   name: '李广益',
    //   telephone: '+86 17625244142',
    //   address: '--',
    //   personType: '正式',
    //   department: '杭州栀梦科技有限公司',
    //   position: '--',
    //   sequence: '--',
    //   operate: '...',
    // },
  ]);
</script>

<script lang="ts">
  export default {
    name: 'Care',
  };
</script>

<style lang="less" scoped>
  .top {
    margin: 15px 15px;
    font-weight: bold;
    font-size: 20px;
  }
  .tabs {
    border: gray solid;
    width: 200px;
    //display: flex;
    text-align: center;
  }
  .divider-demo {
    //box-sizing: border-box;
    // width: 360px;
    padding: 0 10px;
    border: solid rgb(213, 211, 211);
    //height: 80px;
    display: flex;
    float: left;
    margin: 0 10px;
    border-radius: 6.98px;
  }
  .hand {
    float: left;
    text-align: center;
    font-weight: 500;
    width: 150px;
    margin-left: 8px;
  }
  p {
    margin: 15px 0;
  }
  .search {
    margin: 20px 10px;
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

    .ziduan1 {
      border: solid rgb(224, 220, 220) 1.5px;
      display: flex;
      border-radius: 6.98px;
      align-items: center;
      justify-content: center;
      padding: 0 8px;
      margin-left: 679px;
    }
  }
</style>
