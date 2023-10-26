<script setup lang="ts">
  import { IconEdit, IconPlus } from '@arco-design/web-vue/es/icon';
  import { reactive, ref } from 'vue';

  const show = ref(true);

  const file = ref();

  const onChange = (_, currentFile) => {
    file.value = {
      ...currentFile,
      // url: URL.createObjectURL(currentFile.file),
    };
  };
  const onProgress = (currentFile) => {
    file.value = currentFile;
  };

  const columns = [
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
      title: '标注',
      dataIndex: 'mark',
    },
    {
      title: '图标',
      dataIndex: 'img',
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
      key: '1',
      id: 1,
      mark: '超前预警',
      title: '感知:',
      content: '发现问题',
      img: 'img1',
      time: '2023-09-18 14:36',
    },
    {
      key: '2',
      id: 2,

      mark: '算法推演',
      title: '建模:',
      content: '分析问题',
      img: 'img1',
      time: '2023-09-18 14:36',
    },
    {
      key: '3',
      id: 3,

      mark: '协同处置',
      title: '行为:',
      content: '解决问题',
      img: 'img1',
      time: '2023-09-18 14:36',
    },
    {
      key: '4',
      id: 4,

      mark: 'IT/OT低代码互联',
      title: '重构:',
      content: '复盘问题',
      img: 'img1',
      time: '2023-09-18 14:36',
    },
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
</script>

<template>
  <div
    class="bg-white mxy rounded pxy flex flex-col items"
    style="height: 500px; border-radius: 10px"
  >
    <div style="margin: 20px"
      ><a-table :columns="columns" :data="data">
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
                  <a-input v-model="data[0].id" />
                </a-form-item>

                <div style="display: flex"
                  ><a-form-item
                    field="jobNumber"
                    label="标题"
                    style="width: 130px; margin-right: 30px"
                    required
                  >
                    <a-input v-model="data[0].title" />
                  </a-form-item>
                  <a-form-item field="id" label="内容" required>
                    <a-textarea
                      v-model="data[0].content"
                      cols="50"
                      rows="8"
                      max-length="200"
                      show-word-limit
                      auto-size
                    ></a-textarea></a-form-item
                ></div>
                <a-form-item field="name" label="标注" required>
                  <a-textarea
                    v-model="data[0].mark"
                    max-length="65"
                    show-word-limit
                    auto-size
                  ></a-textarea>
                </a-form-item>
                <a-form-item field="id" label="上传图标" required>
                  <div
                    ><a-upload
                      action="/"
                      :file-list="file ? [file] : []"
                      :show-file-list="false"
                      @change="onChange"
                      @progress="onProgress"
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
                            <img :src="file.url" />
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
              </a-form>
            </div>
          </a-modal>
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
