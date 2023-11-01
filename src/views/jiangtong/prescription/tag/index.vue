<script setup lang="ts">
  import { reactive, ref, onMounted } from 'vue';
  import { getTag, deleteTag, postTag } from '@/api/message';

  const columns = [
    {
      title: '#',
      dataIndex: 'id',
    },
    {
      title: '标题',
      dataIndex: 'tab',
    },
    {
      ellipsis: true,
      tooltip: true,
      title: '简介',
      dataIndex: 'synopsis',
    },

    {
      title: '工具栏',
      slotName: 'buttonBj',
    },
  ];
  const data: any = reactive([]);
  const visible = ref(false);
  const visible1 = ref(false);

  const form: any = reactive([
    {
      tab: '',
      synopsis: '',
    },
  ]);

  const handleClick = (record: any) => {
    visible.value = true;
    form.push(record);
  };
  const handleClick1 = () => {
    visible1.value = true;
    form[0].tab = '';
    form[0].synopsis = '';
  };

  const handleCancel = () => {
    visible.value = false;
    visible1.value = false;
    form.splice(1, 1);
  };
  const handleOk = async () => {
    await postTag(form[1]);
    const tagList = await getTag();
    data.splice(0);
    data.push(...tagList.data);
  };
  const handleOk1 = async () => {
    await postTag(form[0]);
    const tagList = await getTag();
    data.splice(0);
    data.push(...tagList.data);
  };
  const deleteList = async (record: any) => {
    await deleteTag(record.id);
    const tagList = await getTag();
    data.splice(0);
    data.push(...tagList.data);
  };
  const scroll = {
    x: 200,
    y: 350,
  };
  onMounted(async () => {
    const tagList = await getTag();
    data.push(...tagList.data);
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
        <a-modal
          v-model:visible="visible1"
          title="编辑数据"
          width="600px"
          @cancel="handleCancel"
          @ok="handleOk1"
        >
          <div style="display: flex">
            <a-form-item label="标题" required>
              <a-textarea
                v-model="form[0].tab"
                cols="25"
                rows="6"
                auto-size
              ></a-textarea>
            </a-form-item>
          </div>
          <div style="display: flex">
            <a-form-item label="简介" required>
              <a-textarea
                v-model="form[0].synopsis"
                cols="25"
                rows="6"
                :max-length="65"
                auto-size
                show-word-limit
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
        <template #buttonBj="{ record }">
          <a-button type="text" @click="handleClick(record)">编辑</a-button>
          <a-popconfirm content="是否确认删除" @ok="deleteList(record)">
            <a-tooltip content="删除此条"
              ><a-button style="color: #ee0202" type="text"
                >删除</a-button
              ></a-tooltip
            >
          </a-popconfirm>
          <div v-if="form[1]">
            <a-modal
              v-model:visible="visible"
              title="编辑数据"
              width="600px"
              @cancel="handleCancel"
              @ok="handleOk"
            >
              <div style="display: flex">
                <a-form-item label="标题" required>
                  <a-textarea
                    v-model="form[1].tab"
                    cols="25"
                    rows="6"
                    auto-size
                  ></a-textarea>
                </a-form-item>
                <a-form-item label="简介" required>
                  <a-textarea
                    v-model="form[1].synopsis"
                    cols="25"
                    rows="7"
                    :max-length="65"
                    show-word-limit
                    auto-size
                  ></a-textarea>
                </a-form-item>
              </div>
            </a-modal>
          </div>
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
