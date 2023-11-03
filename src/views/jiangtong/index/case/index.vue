<script setup lang="ts">
  import { reactive, ref, onMounted } from 'vue';
  import { getCases, postCases, deleteCases } from '@/api/message';

  const columns: any = [
    {
      title: '标题',
      dataIndex: 'title',
    },
    {
      title: '标签',
      dataIndex: 'tag',
      ellipsis: true,
      tooltip: true,
    },
    {
      ellipsis: true,
      tooltip: true,
      title: '背景',
      dataIndex: 'bg',
    },
    {
      ellipsis: true,
      tooltip: true,
      title: '方案',
      dataIndex: 'fa',
    },
    {
      title: '痛点',
      dataIndex: 'td',
      ellipsis: true,
      tooltip: true,
    },
    {
      title: '益处',
      dataIndex: 'yc',
      ellipsis: true,
      tooltip: true,
    },
    {
      title: '创建日期',
      dataIndex: 'createdTime',
      sortable: {
        sortDirections: ['ascend', 'descend'],
      },
    },
    {
      title: '工具栏',
      slotName: 'buttonBj',
    },
  ];
  const data: any = reactive([]);
  const visible = ref(false);
  const visible1 = ref(false);

  const form = reactive([
    { bg: '', fa: '', tag: '', td: '', title: '', yc: '' },
  ]);

  const handleClick = (record: any) => {
    visible.value = true;
    form.push(record);
  };
  const handleClick1 = () => {
    visible1.value = true;
    form[0].yc = '';
    form[0].tag = '';
    form[0].td = '';
    form[0].title = '';
    form[0].fa = '';
    form[0].bg = '';
  };

  const handleCancel = () => {
    visible.value = false;
    visible1.value = false;
    form.splice(1, 1);
  };
  const handleBeforeOK = async () => {
    console.log(form[1]);
    await postCases(form[1]);
    data.splice(0);
    const caseList2 = await getCases();
    data.push(...caseList2.data);
    form.splice(1, 1);
  };
  // 删除列表
  const deleteList = async (record: any) => {
    console.log(record.id);
    await deleteCases(record.id);
    data.splice(0);
    const caseList1 = await getCases();
    data.push(...caseList1.data);
  };
  // 新增功能提交数据
  const handleBeforeOk1 = async (done: any) => {
    await postCases(form[0]);
    data.splice(0);
    const caseList2 = await getCases();
    data.push(...caseList2.data);
    window.setTimeout(() => {
      done();
      // prevent close
      // done(false)
    }, 1000);
  };
  const scroll = {
    x: 200,
    y: 350,
  };
  onMounted(async () => {
    const caseList = await getCases();
    // console.log(caseList.data);
    data.push(...caseList.data);
  });
</script>

<template>
  <div
    class="bg-white mxy rounded pxy flex flex-col items"
    style="height: 550px; border-radius: 10px"
  >
    <div style="margin: 20px 0 0 20px">
      <a-button
        type="primary"
        style="margin-bottom: 20px; border-radius: 7px"
        @click="handleClick1"
      >
        <template #icon>
          <icon-plus />
        </template>
        新增
      </a-button>
      <a-modal
        v-model:visible="visible1"
        title="新增数据"
        width="600px"
        @cancel="handleCancel"
        @before-ok="handleBeforeOk1"
      >
        <div style="display: flex">
          <a-form-item label="标题" required>
            <a-textarea
              v-model="form[0].title"
              cols="25"
              rows="6"
              auto-size
            ></a-textarea>
          </a-form-item>
          <a-form-item label="标签" required>
            <a-textarea
              v-model="form[0].tag"
              cols="25"
              rows="7"
              :max-length="65"
              auto-size
              show-word-limit
            ></a-textarea>
          </a-form-item>
        </div>
        <div style="display: flex">
          <a-form-item label="背景" required>
            <a-textarea
              v-model="form[0].bg"
              cols="25"
              rows="6"
              :max-length="65"
              show-word-limit
              auto-size
            ></a-textarea>
          </a-form-item>
          <a-form-item label="痛点" required>
            <a-textarea
              v-model="form[0].td"
              cols="25"
              rows="8"
              :max-length="65"
              show-word-limit
              auto-size
            ></a-textarea>
          </a-form-item>
        </div>
        <div style="display: flex">
          <a-form-item label="方案" required>
            <a-textarea
              v-model="form[0].fa"
              cols="25"
              rows="6"
              :max-length="95"
              show-word-limit
              auto-size
            ></a-textarea>
          </a-form-item>
          <a-form-item label="益处" required>
            <a-textarea
              v-model="form[0].yc"
              cols="25"
              rows="6"
              :max-length="65"
              show-word-limit
              auto-size
            ></a-textarea>
          </a-form-item>
        </div>
      </a-modal>

      <a-table :columns="columns" :data="data" :scroll="scroll">
        <template #buttonBj="{ record }">
          <a-button type="text" @click="handleClick(record)">编辑</a-button>
          <a-popconfirm content="是否确认删除" @ok="deleteList(record)">
            <a-tooltip content="删除此条"
              ><a-button style="color: #ee0202" type="text"
                >删除</a-button
              ></a-tooltip
            >
          </a-popconfirm>
          <a-modal
            v-model:visible="visible"
            title="编辑数据"
            width="600px"
            @cancel="handleCancel"
            @ok="handleBeforeOK"
          >
            <div v-if="form[1]">
              <a-form :model="form" layout="vertical">
                <div style="display: flex">
                  <a-form-item label="标题" required>
                    <a-textarea
                      v-model="form[1].title"
                      cols="25"
                      rows="6"
                      auto-size
                      class="juli-right"
                    ></a-textarea>
                  </a-form-item>
                  <a-form-item label="标签" required>
                    <a-textarea
                      v-model="form[1].tag"
                      cols="25"
                      rows="7"
                      :max-length="65"
                      show-word-limit
                      auto-size
                      class="juli-left"
                    ></a-textarea>
                  </a-form-item>
                </div>
                <div style="display: flex">
                  <a-form-item label="背景" required>
                    <a-textarea
                      v-model="form[1].bg"
                      cols="25"
                      rows="6"
                      :max-length="65"
                      show-word-limit
                      auto-size
                      class="juli-right"
                    ></a-textarea>
                  </a-form-item>
                  <a-form-item label="痛点" required>
                    <a-textarea
                      v-model="form[1].td"
                      cols="25"
                      rows="8"
                      :max-length="65"
                      show-word-limit
                      auto-size
                      class="juli-left"
                    ></a-textarea>
                  </a-form-item>
                </div>
                <div style="display: flex">
                  <a-form-item label="方案" required>
                    <a-textarea
                      v-model="form[1].fa"
                      cols="25"
                      rows="6"
                      :max-length="95"
                      show-word-limit
                      auto-size
                      class="juli-right"
                    ></a-textarea>
                  </a-form-item>
                  <a-form-item label="益处" required>
                    <a-textarea
                      v-model="form[1].yc"
                      cols="25"
                      rows="6"
                      :max-length="65"
                      show-word-limit
                      auto-size
                      class="juli-left"
                    ></a-textarea>
                  </a-form-item>
                </div>
              </a-form>
            </div>
          </a-modal>
        </template>
      </a-table>
    </div>
  </div>
</template>

<style scoped lang="less">
  .video {
    width: 80px;
    height: 80px;
    border: #aba8a8 dashed;
  }
  .juli-right {
    margin-right: 10px;
  }
  .juli-left {
    margin-left: 10px;
  }
</style>
