<script setup lang="ts">
  import { reactive, ref, onMounted } from 'vue';
  import { getMessage, deleteMessage } from '@/api/message';

  const show = ref(true);

  const columns: any = [
    {
      title: '姓名',
      dataIndex: 'name',
    },
    {
      title: '内容',
      dataIndex: 'content',
      ellipsis: true,
      tooltip: true,
    },
    {
      title: '手机号',
      dataIndex: 'phone',
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
  const form = reactive({
    name: '',
    post: '',
  });

  const handleClick = () => {
    visible.value = true;
  };

  const handleCancel = () => {
    visible.value = false;
  };
  const deleteList = async (record: any) => {
    await deleteMessage(record.id);
    const message = await getMessage();
    data.splice(0);
    data.push(...message.data);
  };
  onMounted(async () => {
    const message = await getMessage();
    data.push(...message.data);
  });
</script>

<template>
  <div
    class="bg-white mxy rounded pxy flex flex-col items"
    style="height: 650px; border-radius: 10px"
  >
    <div style="margin: 20px 20px 0 20px"
      ><a-table :columns="columns" :data="data">
        <template #buttonBj="{ record }">
          <a-popconfirm content="是否确认删除" @ok="deleteList(record)">
            <a-tooltip content="删除此条"
              ><a-button style="color: #ee0202" type="text"
                >删除</a-button
              ></a-tooltip
            >
          </a-popconfirm>
        </template>
      </a-table></div
    >
  </div>
</template>

<style scoped lang="less">
  .video {
    width: 80px;
    height: 80px;
    border: #aba8a8 dashed;
  }
</style>
