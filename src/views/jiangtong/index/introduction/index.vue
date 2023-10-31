<script setup lang="ts">
  import { reactive, ref, onMounted } from 'vue';
  import { getBrief, postBrief } from '@/api/message';

  const show = ref(true);
  const index = ref(0);

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
  const data: any = reactive([]);
  const from: any = reactive([
    {
      id: '',
      content: '',
      tagA: '',
      tagANumber: '',
      tagB: '',
      tagBNumber: '',
      tagC: '',
      tagCNumber: '',
      createdTime: '',
    },
  ]);
  const visible = ref(false);

  //  打开弹窗
  const handleClick = (record: any) => {
    visible.value = true;
    // console.log(record);
    from.push(record);
    console.log(from);
  };
  //  取消编辑
  const handleCancel = () => {
    visible.value = false;
    from.splice(1, 1);
  };
  //  编辑信息
  const handleBeforeOk = async (done: any) => {
    await postBrief(from[1]);
    const briefListx = await getBrief();
    data.splice(0);
    data.push(...briefListx.data);
    window.setTimeout(() => {
      done();
      // console.log(2);
      from.splice(1, 1);
    }, 1000);
  };

  const onSuccess = (fileItem: any) => {
    console.log(fileItem);
    from[1].url = fileItem.response.data;
  };
  //   获取数据
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
        <template #optional="{ record }">
          <a-link :href="record.url">视频链接</a-link>
        </template>
        <template #buttonBj="{ record }">
          <a-button type="text" @click="handleClick(record)">编辑</a-button>
          <a-modal
            v-model:visible="visible"
            title="编辑数据"
            width="600px"
            @cancel="handleCancel"
            @before-ok="handleBeforeOk"
          >
            <div v-if="from[1]">
              <a-form :model="from" layout="vertical">
                <a-form-item
                  field="name"
                  label="id"
                  required
                  asterisk-position="end"
                  disabled
                  style="width: 50px"
                >
                  <a-input v-model="from[1].id" />
                </a-form-item>
                <a-form-item label="上传视频" required asterisk-position="end">
                  <a-space direction="vertical" :style="{ width: '100%' }">
                    <a-upload
                      action="https://106.14.32.178:8080/api/system/upload"
                      @success="onSuccess"
                    />
                  </a-space>
                </a-form-item>
                <a-form-item field="name" label="内容">
                  <a-textarea
                    v-model="from[1].content"
                    :max-length="300"
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
                    <a-input v-model="from[1].tagA" />
                  </a-form-item>
                  <a-form-item label="标签1蓝字" required>
                    <a-textarea
                      v-model="from[1].tagANumber"
                      cols="57"
                      rows="8"
                      :max-length="200"
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
                    <a-input v-model="from[1].tagB" />
                  </a-form-item>
                  <a-form-item label="标签2蓝字" required>
                    <a-textarea
                      v-model="from[1].tagBNumber"
                      cols="57"
                      rows="8"
                      :max-length="200"
                      show-word-limit
                      auto-size
                    ></a-textarea></a-form-item
                ></div>
                <div style="display: flex"
                  ><a-form-item
                    label="标签3"
                    style="width: 130px; margin-right: 30px"
                    required
                  >
                    <a-input v-model="from[1].tagC" />
                  </a-form-item>
                  <a-form-item label="标签3蓝字" required>
                    <a-textarea
                      v-model="from[1].tagCNumber"
                      cols="57"
                      rows="8"
                      :max-length="200"
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
