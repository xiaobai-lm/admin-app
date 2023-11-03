<script setup lang="ts">
  import { reactive, ref, onMounted } from 'vue';
  import { getBusiness, postBusiness, deleteBusiness } from '@/api/message';

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
      title: '标题',
      dataIndex: 'title',
    },
    {
      title: '内容',
      dataIndex: 'content',
      ellipsis: true,
      tooltip: true,
    },
    {
      title: '图标',
      slotName: 'icon',
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
      icon: '',
      content: '',
    },
  ]);
  const handleClick = (record: any) => {
    visible.value = true;
    from.push(record);
  };
  const handleClick1 = () => {
    visible1.value = true;
    from[0].title = '';
    from[0].content = '';
    from[0].icon = '';
  };
  const handleCancel = () => {
    visible.value = false;
    visible1.value = false;
    from.splice(1, 1);
  };
  const handleOk = async () => {
    await postBusiness(from[1]);
    const businessList = await getBusiness();
    data.splice(0);
    data.push(...businessList.data);
  };
  const handleOk1 = async () => {
    await postBusiness(from[0]);
    const businessList = await getBusiness();
    data.splice(0);
    data.push(...businessList.data);
  };
  // 编辑功能图片上传
  const onSuccess = (fileItem: any) => {
    console.log(fileItem);
    from[1].icon = fileItem.response.data;
  };
  // 新增功能图片上传

  const onSuccess1 = (fileItem: any) => {
    console.log(fileItem);
    from[0].icon = fileItem.response.data;
  };
  // 删除功能列表
  const deleteList = async (record: any) => {
    await deleteBusiness(record.id);
    const businessList = await getBusiness();
    data.splice(0);
    data.push(...businessList.data);
  };
  // 滚动效果
  // const scroll = {
  //   x: 200,
  //   y: 350,
  // };
  onMounted(async () => {
    const businessList = await getBusiness();
    data.push(...businessList.data);
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
        <div style="display: flex">
          <a-form-item :model="from" label="标题" required>
            <a-textarea v-model="from[0].title" auto-size></a-textarea>
          </a-form-item>
          <a-form-item label="内容" required>
            <a-textarea
              v-model="from[0].content"
              cols="25"
              rows="7"
              max-length="265"
              auto-size
              show-word-limit
            ></a-textarea>
          </a-form-item>
        </div>

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
      <!--      //@ts-ignore-->
      <a-table :columns="columns" :data="data">
        <template #icon="{ record }">
          <a-image :src="record.icon" width="100px"></a-image>
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
              <div style="display: flex">
                <a-form-item :model="from" label="标题" required>
                  <a-textarea
                    v-model="from[1].title"
                    cols="25"
                    rows="6"
                    auto-size
                  ></a-textarea>
                </a-form-item>
                <a-form-item label="内容" required>
                  <a-textarea
                    v-model="from[1].content"
                    cols="25"
                    rows="7"
                    max-length="65"
                    show-word-limit
                    auto-size
                  ></a-textarea>
                </a-form-item>
              </div>

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
                            <a-image
                              :src="from[1].icon"
                              width="100px"
                            ></a-image>
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
