<script setup lang="ts">
  import { reactive, ref, onMounted } from 'vue';
  import { getCustomer, postCustomer, deleteCustomer } from '@/api/message';

  const file: any = ref();

  const onChange = (_: any, currentFile: any) => {
    file.value = {
      ...currentFile,
      // url: URL.createObjectURL(currentFile.file),
    };
  };
  const onProgress = (currentFile: any) => {
    file.value = currentFile;
  };
  const columns: any = [
    {
      title: '#',
      dataIndex: 'id',
    },

    {
      title: '图片',
      slotName: 'img',
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
      img: '',
      content: '',
    },
  ]);
  const handleClick = (record: any) => {
    visible.value = true;
    from.push(record);
  };
  const handleClick1 = () => {
    visible1.value = true;
  };
  const handleCancel = () => {
    visible.value = false;
    visible1.value = false;
    from.splice(1, 1);
  };
  const handleOk = async () => {
    await postCustomer(from[1]);
    const businessList = await getCustomer();
    data.splice(0);
    data.push(...businessList.data);
  };
  const handleOk1 = async () => {
    await postCustomer(from[0]);
    const businessList = await getCustomer();
    data.splice(0);
    data.push(...businessList.data);
  };
  // 编辑功能图片上传
  const onSuccess = (fileItem: any) => {
    from[1].img = fileItem.response.data;
  };
  // 新增功能图片上传

  const onSuccess1 = (fileItem: any) => {
    console.log(fileItem);
    from[0].img = fileItem.response.data;
  };
  // 删除功能列表
  const deleteList = async (record: any) => {
    await deleteCustomer(record.id);
    const businessList = await getCustomer();
    data.splice(0);
    data.push(...businessList.data);
  };
  onMounted(async () => {
    const customerList = await getCustomer();
    data.push(...customerList.data);
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
        title="编辑数据"
        width="600px"
        :model="from"
        @cancel="handleCancel"
        @ok="handleOk1"
      >
        <a-form-item field="id" label="上传图标" required>
          <div
            ><a-upload
              action="https://106.14.32.178:8080/api/system/upload"
              :file-list="file ? [file] : []"
              :show-file-list="false"
              @change="onChange"
              @progress="onProgress"
              @success="onSuccess1"
            >
              <template #upload-button>
                <div
                  :class="`arco-upload-list-item${
                    file && file.status === 'error'
                      ? ' arco-upload-list-item-error'
                      : ''
                  }`"
                >
                  <div
                    v-if="file && file.url"
                    class="arco-upload-list-picture custom-upload-avatar"
                  >
                    <img :src="file.url" alt="" />
                    <div class="arco-upload-list-picture-mask">
                      <IconEdit />
                    </div>
                    <a-progress
                      v-if="file.status === 'uploading' && file.percent < 100"
                      :percent="file.percent"
                      type="circle"
                      size="mini"
                      :style="{
                        position: 'absolute',
                        left: '50%',
                        top: '50%',
                        transform: 'translateX(-50%) translateY(-50%)',
                      }"
                    />
                  </div>
                  <div v-else class="arco-upload-picture-card">
                    <div class="arco-upload-picture-card-text">
                      <IconPlus />
                      <div style="margin-top: 10px; font-weight: 600"
                        >Upload</div
                      >
                    </div>
                  </div>
                </div>
              </template>
            </a-upload>
            <div style="">图片宽高限制为：100×100</div></div
          >
        </a-form-item>
      </a-modal>
      <a-table :columns="columns" :data="data">
        <template #img="{ record }">
          <a-image :src="record.img" width="80px"></a-image>
        </template>
        <template #buttonBj="{ record }">
          <a-button type="text" @click="handleClick(record)">编辑</a-button>
          <a-popconfirm content="是否确认删除" @ok="deleteList(record)">
            <a-tooltip content="删除此条"
              ><a-button style="color: #ee0202" type="text"
                >删除</a-button
              ></a-tooltip
            >
          </a-popconfirm>
          <div v-if="from[1]">
            <a-modal
              v-model:visible="visible"
              title="编辑数据"
              width="600px"
              :model="from"
              @cancel="handleCancel"
              @ok="handleOk"
            >
              <a-form-item field="id" label="上传图标" required>
                <div
                  ><a-upload
                    action="https://106.14.32.178:8080/api/system/upload"
                    :file-list="file ? [file] : []"
                    :show-file-list="false"
                    @change="onChange"
                    @progress="onProgress"
                    @success="onSuccess"
                  >
                    <template #upload-button>
                      <div
                        :class="`arco-upload-list-item${
                          file && file.status === 'error'
                            ? ' arco-upload-list-item-error'
                            : ''
                        }`"
                      >
                        <div
                          v-if="file && file.url"
                          class="arco-upload-list-picture custom-upload-avatar"
                        >
                          <img :src="file.url" alt="" />
                          <div class="arco-upload-list-picture-mask">
                            <IconEdit />
                          </div>
                          <a-progress
                            v-if="
                              file.status === 'uploading' && file.percent < 100
                            "
                            :percent="file.percent"
                            type="circle"
                            size="mini"
                            :style="{
                              position: 'absolute',
                              left: '50%',
                              top: '50%',
                              transform: 'translateX(-50%) translateY(-50%)',
                            }"
                          />
                        </div>
                        <div v-else class="arco-upload-picture-card">
                          <div class="arco-upload-picture-card-text">
                            <a-image :src="from[1].img" width="80px"></a-image>
                          </div>
                        </div>
                      </div>
                    </template>
                  </a-upload>
                  <div style="">图片宽高限制为：100×100</div></div
                >
              </a-form-item>
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
