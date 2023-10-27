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
      title: '英文标题',
      dataIndex: 'enTitle',
    },
    {
      ellipsis: true,
      tooltip: true,
      title: '内容',
      dataIndex: 'content',
    },

    {
      title: '创建日期',
      dataIndex: 'time',
      sortable: {
        sortDirections: ['ascend', 'descend'],
      },
    },
    {
      title: '工具栏',
      slotName: 'buttonBj',
    },
  ];
  const data = reactive([
    {
      key: 1,
      label: '4',
      title: '使命',
      content: '探索智慧场景，提升人类幸福',
      enTitle: 'Mission',
      time: '2023-09-18 14:36',
    },
    {
      key: 2,
      label: '5',
      title: '愿景',
      content: '成为合规、高效、智慧的标杆',
      enTitle: 'Vision',
      time: '2023-09-18 14:36',
    },
    {
      key: 3,
      label: '6',
      title: '价值观',
      content: '跨界创新、协作共赢、做事靠谱',
      enTitle: 'Values',
      time: '2023-09-18 14:36',
    },
  ]);
  const visible = ref(false);
  const visible1 = ref(false);

  const from: any = reactive({
    title: '1',
    enTitle: '1',
    content: '1',
  });
  const handleClick = (recode: any) => {
    visible.value = true;
    console.log(recode);
    from.title = recode.record.title;
    from.enTitle = recode.record.enTitle;
    from.content = recode.record.content;
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
        <template #icon>
          <icon-plus />
        </template>
        新增
      </a-button>
      <a-modal
        v-model:visible="visible1"
        title="编辑数据"
        width="600px"
        :model="from"
        @cancel="handleCancel"
      >
        <div style="display: flex">
          <a-form-item :model="from" label="标题" required>
            <a-textarea cols="25" rows="6" auto-size></a-textarea>
          </a-form-item>
          <a-form-item label="英文标题" required>
            <a-textarea
              cols="25"
              rows="7"
              max-length="65"
              auto-size
              show-word-limit
            ></a-textarea>
          </a-form-item>
        </div>

        <div style="display: flex">
          <a-form-item label="内容" required>
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
      <a-table :columns="columns" :data="data" :scroll="scroll">
        <template #buttonBj="recode">
          <a-button type="text" @click="handleClick(recode)">编辑</a-button>
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
            :model="from"
            @cancel="handleCancel"
          >
            <div style="display: flex">
              <a-form-item :model="from" label="标题" required>
                <a-textarea
                  v-model="from.title"
                  cols="25"
                  rows="6"
                  auto-size
                ></a-textarea>
              </a-form-item>
              <a-form-item label="英文标题" required>
                <a-textarea
                  v-model="from.enTitle"
                  cols="25"
                  rows="7"
                  max-length="65"
                  show-word-limit
                  auto-size
                ></a-textarea>
              </a-form-item>
            </div>

            <div style="display: flex">
              <a-form-item label="内容" required>
                <a-textarea
                  v-model="from.content"
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
