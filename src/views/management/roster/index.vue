<!-- eslint-disable no-console -->
<template>
  <div>
    <div class="huamingce">花名册</div>
    <div
      class="bg-white mxy rounded pxy flex flex-col items"
      style="height: 850px; border-radius: 10px"
    >
      <div class="top">
        <div class="divider-demo">
          <span class="hand"><p>在职</p><p style="font-weight: 800">1</p></span>
        </div>
        <div class="divider-demo">
          <span class="hand"><p>正式</p><p style="font-weight: 800">1</p></span>
          <a-divider direction="vertical" />
          <span class="hand"><p>实习</p><p style="font-weight: 800">0</p></span>
          <a-divider direction="vertical" orientation="center" />
          <span class="hand"><p>外包</p><p style="font-weight: 800">0</p></span>
          <a-divider direction="vertical" orientation="center" />
          <span class="hand"
            ><p>其他 </p><p style="font-weight: 800">0</p></span
          >
        </div>
        <div class="divider-demo">
          <span class="hand"
            ><p>试用中</p><p style="font-weight: 800">0</p></span
          >
          <a-divider direction="vertical" orientation="center" />
          <span class="hand"
            ><p>已转正</p><p style="font-weight: 800">0</p></span
          >
        </div>
        <div class="divider-demo divider-demo1">
          <span class="hand"
            ><p>待离职</p><p style="font-weight: 800">0</p></span
          >
          <a-divider direction="vertical" orientation="center" />
          <span class="hand"
            ><p>已离职</p><p style="font-weight: 800">0</p></span
          >
        </div>
      </div>
      <div class="search">
        <a-space direction="vertical" size="large">
          <a-input-search
            :style="{ width: '320px' }"
            placeholder="通过姓名、工作邮箱、手机号码搜索..."
          />
        </a-space>
        <div>
          <a-button class="filter" @click="handleClick"
            ><icon-filter
          /></a-button>
          <a-drawer
            :width="340"
            :visible="visible"
            unmount-on-close
            @ok="handleOk"
            @cancel="handleCancel"
          >
            <div
              ><p class="Pop-ups-text">职务</p>
              <a-select
                style="border-radius: 9px"
                :options="['Option1', 'Option2', 'Option3']"
            /></div>
            <div
              ><p class="Pop-ups-text">职级</p>
              <a-select
                style="border-radius: 9px"
                :options="['Option1', 'Option2', 'Option3']"
            /></div>
            <div
              ><p class="Pop-ups-text">部门</p>
              <a-select
                style="border-radius: 9px"
                :options="['Option1', 'Option2', 'Option3']"
            /></div>
            <div
              ><p class="Pop-ups-text">直属上级</p>
              <a-input
                style="border-radius: 9px"
                placeholder="   通过姓名、工作邮箱、手机号码搜索人员"
                allow-clear
              />
            </div>
            <div
              ><p class="Pop-ups-text">人员类型</p>

              <a-select
                :default-value="['正式']"
                placeholder="Please select ..."
                multiple
              >
                <a-option>Beijing</a-option>
                <a-option :tag-props="{ color: 'red' }">Shanghai</a-option>
                <a-option>Guangzhou</a-option>
                <a-option disabled>Disabled</a-option>
                <a-option>Shenzhen</a-option>
                <a-option>Wuhan</a-option>
              </a-select>
            </div>
            <div
              ><p class="Pop-ups-text">工作地点</p>
              <a-select
                style="border-radius: 9px"
                :options="['Option1', 'Option2', 'Option3']"
            /></div>
            <div
              ><p class="Pop-ups-text">入职日期</p>
              <a-range-picker
                style="width: 290px; margin: 0 24px 24px 0; border-radius: 9px"
                format="YYYY-MM-DD "
                @change="onChange"
                @select="onSelect"
                @ok="onOk"
            /></div>
            <div
              ><p class="Pop-ups-text">公司</p>
              <a-select
                style="border-radius: 9px"
                :options="['Option1', 'Option2', 'Option3']"
            /></div>
            <div
              ><p class="Pop-ups-text">性别</p>
              <a-select
                style="border-radius: 9px"
                :options="['Option1', 'Option2', 'Option3']"
            /></div>
          </a-drawer>
        </div>
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

        <a-modal
          v-model:visible="visible1"
          title="编辑数据"
          width="600px"
          @cancel="handleCancel"
          @before-ok="handleBeforeOk1"
        >
          <a-form :model="form" :style="{ width: '600px' }" layout="vertical">
            <a-form-item
              field="name"
              label="姓名"
              required
              asterisk-position="end"
            >
              <a-input v-model="form.name" />
              <template #extra>
                <a-button type="text" size="mini"
                  ><icon-plus />添加英文</a-button
                >
              </template>
            </a-form-item>
            <a-form-item
              field="post"
              label="手机号码"
              required
              asterisk-position="end"
            >
              <a-input v-model="form.post" allow-clear>
                <template #prepend> +86 </template>
              </a-input>
            </a-form-item>
            <a-form-item field="email" label="工作邮箱">
              <a-input v-model="form.email" />
            </a-form-item>
            <a-form-item field="jobNumber" label="工号">
              <a-input v-model="form.jobNumber" />
            </a-form-item>
            <a-form-item field="id" label="用户ID">
              <a-input v-model="form.id" />
            </a-form-item>
            <div style="padding: 12px 0; font-size: 18px; font-weight: 500"
              ><a-divider
                direction="vertical"
                style="
                  margin: 0;
                  padding-right: 1.5px;
                  background-color: #648de3;
                "
              /><span style="margin: 0 10px">工作信息</span></div
            >
            <a-form-item
              field="id"
              label="人员类型"
              required
              asterisk-position="end"
            >
              <a-input v-model="form.id" />
            </a-form-item>
            <a-form-item
              field="time"
              label="入职日期"
              required
              asterisk-position="end"
            >
              <a-date-picker v-model="form.time" />
            </a-form-item>
            <a-form-item field="isRead">
              <a-checkbox v-model="form.isRead">
                I have read the manual
              </a-checkbox>
            </a-form-item>
            <a-form-item style="margin-left: 460px">
              <a-button style="margin-right: 20px; width: 60px">取消</a-button>
              <a-button html-type="submit" type="primary" style="width: 60px"
                >确定</a-button
              >
            </a-form-item>
          </a-form>
        </a-modal>

        <!--        <a-trigger-->
        <!--          trigger="click"-->
        <!--          :unmount-on-close="false"-->
        <!--          :popup-translate="[-480, -200]"-->
        <!--        >-->
        <!--          <a-button type="primary" class="addPenson">-->
        <!--            <template #icon>-->
        <!--              <icon-plus />-->
        <!--            </template>-->
        <!--            添加人员-->
        <!--          </a-button>-->
        <!--          <template #content>-->
        <!--            <div class="demo-basic">-->
        <!--              <div style="margin-left: 20px">-->
        <!--                <div style="font-size: 18px; font-weight: 500; padding: 12px 0">-->
        <!--                  添加人员</div-->
        <!--                >-->
        <!--                <div style="padding: 12px 0; font-size: 18px; font-weight: 500"-->
        <!--                  ><a-divider-->
        <!--                    direction="vertical"-->
        <!--                    style="-->
        <!--                      margin: 0;-->
        <!--                      padding-right: 1.5px;-->
        <!--                      background-color: #648de3;-->
        <!--                    "-->
        <!--                  /><span style="margin: 0 10px">个人信息</span></div-->
        <!--                >-->
        <!--                <div>-->
        <!--                  <a-form-->
        <!--                    :model="form"-->
        <!--                    :style="{ width: '600px' }"-->
        <!--                    layout="vertical"-->
        <!--                  >-->
        <!--                    <a-form-item-->
        <!--                      field="name"-->
        <!--                      label="姓名"-->
        <!--                      required-->
        <!--                      asterisk-position="end"-->
        <!--                    >-->
        <!--                      <a-input v-model="form.name" />-->
        <!--                      <template #extra>-->
        <!--                        <a-button type="text" size="mini"-->
        <!--                          ><icon-plus />添加英文</a-button-->
        <!--                        >-->
        <!--                      </template>-->
        <!--                    </a-form-item>-->
        <!--                    <a-form-item-->
        <!--                      field="post"-->
        <!--                      label="手机号码"-->
        <!--                      required-->
        <!--                      asterisk-position="end"-->
        <!--                    >-->
        <!--                      <a-input v-model="form.post" allow-clear>-->
        <!--                        <template #prepend> +86 </template>-->
        <!--                      </a-input>-->
        <!--                    </a-form-item>-->
        <!--                    <a-form-item field="email" label="工作邮箱">-->
        <!--                      <a-input v-model="form.email" />-->
        <!--                    </a-form-item>-->
        <!--                    <a-form-item field="jobNumber" label="工号">-->
        <!--                      <a-input v-model="form.jobNumber" />-->
        <!--                    </a-form-item>-->
        <!--                    <a-form-item field="id" label="用户ID">-->
        <!--                      <a-input v-model="form.id" />-->
        <!--                    </a-form-item>-->
        <!--                    <div-->
        <!--                      style="padding: 12px 0; font-size: 18px; font-weight: 500"-->
        <!--                      ><a-divider-->
        <!--                        direction="vertical"-->
        <!--                        style="-->
        <!--                          margin: 0;-->
        <!--                          padding-right: 1.5px;-->
        <!--                          background-color: #648de3;-->
        <!--                        "-->
        <!--                      /><span style="margin: 0 10px">工作信息</span></div-->
        <!--                    >-->
        <!--                    <a-form-item-->
        <!--                      field="id"-->
        <!--                      label="人员类型"-->
        <!--                      required-->
        <!--                      asterisk-position="end"-->
        <!--                    >-->
        <!--                      <a-input v-model="form.id" />-->
        <!--                    </a-form-item>-->
        <!--                    <a-form-item-->
        <!--                      field="time"-->
        <!--                      label="入职日期"-->
        <!--                      required-->
        <!--                      asterisk-position="end"-->
        <!--                    >-->
        <!--                      <a-date-picker v-model="form.time" />-->
        <!--                    </a-form-item>-->
        <!--                    <a-form-item field="isRead">-->
        <!--                      <a-checkbox v-model="form.isRead">-->
        <!--                        I have read the manual-->
        <!--                      </a-checkbox>-->
        <!--                    </a-form-item>-->
        <!--                    <a-form-item style="margin-left: 460px">-->
        <!--                      <a-button style="margin-right: 20px; width: 60px"-->
        <!--                        >取消</a-button-->
        <!--                      >-->
        <!--                      <a-button-->
        <!--                        html-type="submit"-->
        <!--                        type="primary"-->
        <!--                        style="width: 60px"-->
        <!--                        >确定</a-button-->
        <!--                      >-->
        <!--                    </a-form-item>-->
        <!--                  </a-form>-->
        <!--                  {{ form }}-->
        <!--                </div>-->
        <!--              </div>-->
        <!--            </div>-->
        <!--          </template>-->
        <!--        </a-trigger>-->
      </div>

      <div class="list">
        <a-table
          :columns="columns"
          :data="data"
          column-resizable
          :bordered="{ cell: true }"
        ></a-table>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
  import { reactive, ref, onMounted } from 'vue';
  import { getEmployee } from '@/api/message';
  import { IconEdit, IconPlus } from '@arco-design/web-vue/es/icon';

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
  const form = reactive({
    name: '',
    post: '',
    email: '',
    jobNumber: '',
    id: '',
    time: '',
    isRead: false,
  });
  const visible = ref(false);

  const handleClick = () => {
    visible.value = true;
  };
  const handleOk = () => {
    visible.value = false;
  };
  const handleCancel = () => {
    visible.value = false;
  };
  function onSelect(dateString: any, date: any) {
    console.log('onSelect', dateString, date);
  }

  function onChange(dateString: any, date: any) {
    console.log('onChange: ', dateString, date);
  }

  function onOk(dateString: any, date: any) {
    console.log('onOk: ', dateString, date);
  }
  // onMounted(async () => {
  //   const x = await getEmployee();
  // });
</script>

<style scoped lang="less">
  * {
    padding: 0;
  }
  .top {
    display: flex;
    float: left;
    font-size: 14px;
  }
  .huamingce {
    margin: 15px 15px;
    font-weight: bold;
    font-size: 20px;
  }
  .divider-demo {
    box-sizing: border-box;
    // width: 360px;
    padding: 0px 10px;
    border: solid rgb(213, 211, 211);
    //height: 80px;
    display: flex;
    float: left;
    margin-left: 20px;
    margin-top: 15px;
    border-radius: 6.98px;
  }
  .hand {
    float: left;
    text-align: center;
    font-weight: 500;
    width: 86px;
    margin-top: 0;
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
    margin: 20px 20px;
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
      margin-left: 205px;
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
      width: 95px;
    }
  }
  .list {
    margin-left: 20px;
    margin-right: 30px;
  }
  .demo-basic {
    //padding: 10px;
    width: 700px;
    height: 950px;
    background-color: white;
    border-radius: 9px;
    box-shadow: 0 2px 8px 0 rgba(0, 0, 0, 0.15);

    //display: flex;
  }
  .Pop-ups-text {
    font-weight: 550;
  }
</style>
