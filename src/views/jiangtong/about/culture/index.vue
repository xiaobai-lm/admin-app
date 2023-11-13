<script setup lang="ts">
  import { reactive, ref, onMounted } from 'vue';
  import { getCulture, postCulture, deleteCulture } from '@/api/message';

  const columns: any = [
    {
      title: '#',
      dataIndex: 'id',
    },
    {
      title: '标题',
      dataIndex: 'title',
    },
    {
      title: '英文标题',
      dataIndex: 'ent',
    },
    {
      ellipsis: true,
      tooltip: true,
      title: '内容',
      dataIndex: 'content',
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

  const from: any = reactive([
    {
      title: '',
      ent: '',
      content: '',
    },
  ]);
  const handleClick = (record: any) => {
    visible.value = true;
    console.log(record);
    from.push(record);
    console.log(from);
  };
  const handleClick1 = () => {
    visible1.value = true;
    from[0].title = '';
    from[0].ent = '';
    from[0].content = '';
  };
  const handleCancel = () => {
    visible.value = false;
    visible1.value = false;
    from.splice(1, 1);
  };
  const handleOK = async () => {
    await postCulture(from[1]);
    const x = await getCulture();
    data.splice(0);
    data.push(...x.data);
  };
  const handleOK1 = async () => {
    await postCulture(from[0]);
    const x = await getCulture();
    data.splice(0);
    data.push(...x.data);
  };
  const deleteList = async (record: any) => {
    await deleteCulture(record.id);
    const x = await getCulture();
    data.splice(0);
    data.push(...x.data);
  };
  const scroll = {
    x: 200,
    y: 350,
  };
  onMounted(async () => {
    const cultureList = await getCulture();
    data.push(...cultureList.data);
  });
</script>

<template>
  <div
    class="bg-white mxy rounded pxy flex flex-col items"
    style="height: 650px; border-radius: 10px"
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
        :model="from"
        @cancel="handleCancel"
        @ok="handleOK1"
      >
        <div style="display: flex">
          <a-form-item :model="from" label="标题" required>
            <a-textarea
              v-model="from[0].title"
              cols="25"
              rows="6"
              auto-size
            ></a-textarea>
          </a-form-item>
          <a-form-item label="英文标题" required>
            <a-textarea
              v-model="from[0].ent"
              cols="25"
              rows="7"
              :max-length="65"
              auto-size
              show-word-limit
            ></a-textarea>
          </a-form-item>
        </div>

        <div style="display: flex">
          <a-form-item label="内容" required>
            <a-textarea
              v-model="from[0].content"
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
            :model="from"
            @cancel="handleCancel"
            @ok="handleOK"
          >
            <div v-if="from[1]">
              <div style="display: flex">
                <a-form-item label="标题" required>
                  <a-textarea
                    v-model="from[1].title"
                    cols="25"
                    rows="6"
                    auto-size
                  ></a-textarea>
                </a-form-item>
                <a-form-item label="英文标题" required>
                  <a-textarea
                    v-model="from[1].ent"
                    cols="25"
                    rows="7"
                    :max-length="65"
                    show-word-limit
                    auto-size
                  ></a-textarea>
                </a-form-item>
              </div>

              <div style="display: flex">
                <a-form-item label="内容" required>
                  <a-textarea
                    v-model="from[1].content"
                    cols="25"
                    rows="6"
                    :max-length="65"
                    show-word-limit
                    auto-size
                  ></a-textarea>
                </a-form-item>
              </div>
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
