<script setup lang="ts">
  import { reactive, ref, onMounted } from 'vue';
  import {
    getServereTag,
    postServereTag,
    deleteServereTag,
  } from '@/api/message';
  import { IconEdit, IconPlus } from '@arco-design/web-vue/es/icon';

  const file = ref();

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
      title: 'id',
      dataIndex: 'id',
      width: 100,
    },
    {
      title: '标题',
      dataIndex: 'title',
    },
    {
      ellipsis: true,
      tooltip: true,
      title: '内容',
      dataIndex: 'summarize',
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

  const form = reactive([{ title: '', img: '', summarize: '', id: '' }]);

  const handleClick = (record: any) => {
    visible.value = true;
    form.push(record);
  };
  const handleClick1 = () => {
    visible1.value = true;
    form[0].id = '';
    form[0].img = '';
    form[0].summarize = '';
    form[0].title = '';
  };

  const handleCancel = () => {
    visible.value = false;
    visible1.value = false;
    form.splice(1, 1);
  };
  const handleBeforeOK = async () => {
    console.log(form[1]);
    await postServereTag(form[1]);
    data.splice(0);
    const caseList2 = await getServereTag();
    data.push(...caseList2.data);
    form.splice(1, 1);
  };
  // 删除列表
  const deleteList = async (record: any) => {
    console.log(record.id);
    await deleteServereTag(record.id);
    data.splice(0);
    const caseList1 = await getServereTag();
    data.push(...caseList1.data);
  };
  // 新增功能提交数据
  const handleBeforeOk1 = async (done: any) => {
    await postServereTag(form[0]);
    data.splice(0);
    const caseList2 = await getServereTag();
    data.push(...caseList2.data);
    window.setTimeout(() => {
      done();
      // prevent close
      // done(false)
    }, 1000);
  };
  // 编辑功能上传文件成功
  const onSuccess = (fileItem: any) => {
    // console.log(fileItem);
    form[1].img = fileItem.response.data;
  };
  // 新增功能上传文件成功
  const onSuccess1 = (fileItem: any) => {
    // console.log(fileItem);
    form[0].img = fileItem.response.data;
  };
  const scroll = {
    x: 200,
    y: 550,
  };
  onMounted(async () => {
    const caseList = await getServereTag();
    // console.log(caseList.data);
    data.push(...caseList.data);
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
        @cancel="handleCancel"
        @before-ok="handleBeforeOk1"
      >
        <div style="display: flex">
          <a-form-item label="id" required>
            <a-textarea
              v-model="form[0].id"
              cols="25"
              rows="7"
              :max-length="65"
              auto-size
              show-word-limit
            ></a-textarea>
          </a-form-item>
          <a-form-item label="标题" required>
            <a-textarea
              v-model="form[0].title"
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
              v-model="form[0].summarize"
              cols="25"
              rows="6"
              :max-length="165"
              show-word-limit
              auto-size
            ></a-textarea>
          </a-form-item>
        </div>
        <div style="display: flex">
          <a-form-item label="上传图标" required>
            <div
              ><a-upload
                action="https://www.jungt.com:8080/api/system/upload"
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
        </div>
      </a-modal>
      <a-table :columns="columns" :data="data" :scroll="scroll">
        <template #img="{ record }">
          <a-image :src="record.img" width="120px" height="80px"></a-image>
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
                  <a-form-item label="id" required disabled>
                    <a-textarea
                      v-model="form[1].id"
                      cols="25"
                      rows="6"
                      auto-size
                      class="juli-right"
                    ></a-textarea>
                  </a-form-item>
                  <a-form-item label="标题" required>
                    <a-textarea
                      v-model="form[1].title"
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
                  <a-form-item label="内容" required>
                    <a-textarea
                      v-model="form[1].summarize"
                      cols="25"
                      rows="6"
                      :max-length="165"
                      show-word-limit
                      auto-size
                      class="juli-right"
                    ></a-textarea>
                  </a-form-item>
                </div>
                <a-form-item label="上传图标" required>
                  <div
                    ><a-upload
                      action="https://www.jungt.com:8080/api/system/upload"
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
                                file.status === 'uploading' &&
                                file.percent < 100
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
                                :src="form[1].img"
                                width="100px"
                                height="80px"
                              ></a-image>
                            </div>
                          </div>
                        </div>
                      </template>
                    </a-upload>
                    <div style="">图片宽高限制为：100×100</div></div
                  >
                </a-form-item>
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
