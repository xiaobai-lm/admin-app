<script setup lang="ts">
  import { reactive, ref } from 'vue';

  const columns = [
    {
      title: '#',
      dataIndex: 'label',
    },
    {
      title: '标题',
      dataIndex: 'title',
    },
    {
      ellipsis: true,
      tooltip: true,
      title: '简介',
      dataIndex: 'background',
    },

    {
      title: '工具栏',
      slotName: 'buttonBj',
    },
  ];
  const data = reactive([
    {
      key: 1,
      id: '1',
      title: '111',
      background: '222',
      label: '1',
    },
  ]);
  const visible = ref(false);
  const visible1 = ref(false);

  const form = reactive({
    name: '',
    post: '',
  });

  const handleClick = () => {
    visible.value = true;
  };
  const handleClick1 = () => {
    visible1.value = true;
  };

  const handleCancel = () => {
    visible.value = false;
    visible1.value = false;
  };
  const scroll = {
    x: 200,
    y: 350,
  };
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
        <a-modal
          v-model:visible="visible1"
          title="编辑数据"
          width="600px"
          @cancel="handleCancel"
        >
          <div style="display: flex">
            <a-form-item label="标题" required>
              <a-textarea cols="25" rows="6" auto-size></a-textarea>
            </a-form-item>
          </div>
          <div style="display: flex">
            <a-form-item label="简介" required>
              <a-textarea
                cols="25"
                rows="6"
                max-length="65"
                show-word-limit
                auto-size
              ></a-textarea>
            </a-form-item>
          </div>
        </a-modal>

        <template #icon>
          <icon-plus />
        </template>
        新增
      </a-button>
      <a-table :columns="columns" :data="data" :scroll="scroll">
        <template #buttonBj>
          <a-button type="text" @click="handleClick">编辑</a-button>
          <a-popconfirm content="是否确认删除">
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
          >
            <div style="display: flex">
              <a-form-item label="标题" required>
                <a-textarea
                  v-model="data[0].title"
                  cols="25"
                  rows="6"
                  auto-size
                ></a-textarea>
              </a-form-item>
              <a-form-item label="标签" required>
                <a-textarea
                  v-model="data[0].label"
                  cols="25"
                  rows="7"
                  max-length="65"
                  show-word-limit
                  auto-size
                ></a-textarea>
              </a-form-item>
            </div>
            <div style="display: flex">
              <a-form-item label="背景" required>
                <a-textarea
                  v-model="data[0].background"
                  cols="25"
                  rows="6"
                  max-length="65"
                  show-word-limit
                  auto-size
                ></a-textarea>
              </a-form-item>
              <a-form-item label="痛点" required>
                <a-textarea
                  v-model="data[0].content"
                  cols="25"
                  rows="8"
                  max-length="65"
                  show-word-limit
                  auto-size
                ></a-textarea>
              </a-form-item>
            </div>
            <div style="display: flex">
              <a-form-item label="方案" required>
                <a-textarea
                  v-model="data[0].plan"
                  cols="25"
                  rows="6"
                  max-length="65"
                  show-word-limit
                  auto-size
                ></a-textarea>
              </a-form-item>
              <a-form-item label="益处" required>
                <a-textarea
                  v-model="data[0].mark"
                  cols="25"
                  rows="6"
                  max-length="65"
                  show-word-limit
                  auto-size
                ></a-textarea>
              </a-form-item>
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
</style>
