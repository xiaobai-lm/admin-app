<script setup lang="ts">
  import { reactive, ref, onMounted } from 'vue';
  import { getBrief } from '@/api/message';

  const show = ref(true);

  const columns = [
    {
      title: '媒体链接',
      slotName: 'optional',
    },
    {
      title: '内容',
      dataIndex: 'content',
      ellipsis: true,
      tooltip: true,
    },
    {
      title: '标签1',
      dataIndex: 'tagA',
    },
    {
      title: '标签1蓝字',
      dataIndex: 'tagANumber',
    },
    {
      title: '标签2',
      dataIndex: 'tagB',
    },
    {
      title: '标签2蓝字',
      dataIndex: 'tagBNumber',
    },
    {
      title: '标签3',
      dataIndex: 'tagC',
    },
    {
      title: '标签3蓝字',
      dataIndex: 'tagCNumber',
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
  const data: any = reactive([
    // {
    //   id: '1',
    //   content: '',
    //   tagA: '',
    //   tagANumber: '',
    //   tagB: '',
    //   tagBNumber: '',
    //   tagC: '',
    //   tagCNumber: '',
    //   createdTime: '',
    // },
  ]);
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

  onMounted(async () => {
    const briefMessage = await getBrief();
    data.push(...briefMessage.data);
  });
</script>

<template>
  <div
    class="bg-white mxy rounded pxy flex flex-col items"
    style="height: 500px; border-radius: 10px"
  >
    <div style="margin: 20px 20px 0 20px"
      ><a-table v-if="data" :columns="columns" :data="data">
        <template #optional>
          <a-link :href="data[0].url">视频链接</a-link>
        </template>
        <template #buttonBj>
          <a-button type="text" @click="handleClick">编辑</a-button>
          <a-modal
            v-model:visible="visible"
            title="编辑数据"
            width="600px"
            @cancel="handleCancel"
          >
            <div>
              <a-form :model="form" layout="vertical">
                <a-form-item
                  field="name"
                  label="id"
                  required
                  asterisk-position="end"
                  disabled
                  style="width: 50px"
                >
                  <a-input v-model="data[0].key" />
                </a-form-item>
                <a-form-item
                  field="post"
                  label="上传视频"
                  required
                  asterisk-position="end"
                >
                  <div>
                    <a-upload action="/" />
                    <div style="">视频宽高限制为：1920×1080</div></div
                  >
                </a-form-item>
                <a-form-item field="name" label="内容">
                  <a-textarea
                    v-model="data[0].content"
                    max-length="300"
                    show-word-limit
                    auto-size
                  ></a-textarea>
                </a-form-item>
                <div style="display: flex"
                  ><a-form-item
                    field="jobNumber"
                    label="标签1"
                    style="width: 130px; margin-right: 30px"
                    required
                  >
                    <a-input v-model="data[0].tagA" />
                  </a-form-item>
                  <a-form-item field="id" label="标签1蓝字" required>
                    <a-textarea
                      v-model="data[0].a1"
                      cols="57"
                      rows="8"
                      max-length="200"
                      show-word-limit
                      auto-size
                    ></a-textarea></a-form-item
                ></div>
                <div style="display: flex"
                  ><a-form-item
                    field="jobNumber"
                    label="标签2"
                    style="width: 130px; margin-right: 30px"
                    required
                  >
                    <a-input v-model="data[0].b" />
                  </a-form-item>
                  <a-form-item field="id" label="标签2蓝字" required>
                    <a-textarea
                      v-model="data[0].b1"
                      cols="57"
                      rows="8"
                      max-length="200"
                      show-word-limit
                      auto-size
                    ></a-textarea></a-form-item
                ></div>
                <div style="display: flex"
                  ><a-form-item
                    field="jobNumber"
                    label="标签3"
                    style="width: 130px; margin-right: 30px"
                    required
                  >
                    <a-input v-model="data[0].c" />
                  </a-form-item>
                  <a-form-item field="id" label="标签3蓝字" required>
                    <a-textarea
                      v-model="data[0].c1"
                      cols="57"
                      rows="8"
                      max-length="200"
                      show-word-limit
                      auto-size
                    ></a-textarea></a-form-item
                ></div>
              </a-form>
            </div>
          </a-modal>
        </template> </a-table
    ></div>
  </div>
</template>

<style scoped lang="less">
  .video {
    width: 80px;
    height: 80px;
    border: #aba8a8 dashed;
  }
</style>
