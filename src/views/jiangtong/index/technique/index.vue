<script setup lang="ts">
  import { IconEdit } from '@arco-design/web-vue/es/icon';
  import { reactive, ref, onMounted } from 'vue';
  import { getTechnique, postTechnique } from '@/api/message';

  const show = ref(true);

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
      dataIndex: 'line',
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
  const form: any = reactive([
    {
      content: '',
      createdTime: '',
      icon: '',
      id: 1,
      line: '',
      title: '',
    },
  ]);

  const handleClick = (record: any) => {
    visible.value = true;
    form.push(record);
  };

  const handleCancel = () => {
    visible.value = false;
    form.splice(1, 1);
  };
  const handleBeforeOk = async (done: any) => {
    console.log(form[1]);
    await postTechnique(form[1]);
    const techniqueList1 = await getTechnique();
    data.splice(0);
    data.push(...techniqueList1.data);
    window.setTimeout(() => {
      done();
      form.splice(1, 1);
      // prevent close
      // done(false)
    }, 1000);
  };
  const onSuccess = (fileItem: any) => {
    console.log(fileItem);
    form[1].icon = fileItem.response.data;
  };
  onMounted(async () => {
    const techniqueList = await getTechnique();
    data.push(...techniqueList.data);
  });
</script>

<template>
  <div
    class="bg-white mxy rounded pxy flex flex-col items"
    style="height: 500px; border-radius: 10px"
  >
    <div style="margin: 20px"
      ><a-table :columns="columns" :data="data">
        <template #icon="{ record }">
          <a-image :src="record.icon" height="50xp"></a-image>
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
            <div v-if="form[1]">
              <a-form :model="form" layout="vertical">
                <a-form-item
                  required
                  asterisk-position="end"
                  disabled
                  style="width: 50px"
                >
                  <a-input
                    :model-value="form[1].id"
                    @update:modelValue="form[1].id = $event"
                  />
                </a-form-item>

                <div style="display: flex"
                  ><a-form-item
                    label="标题"
                    style="width: 130px; margin-right: 30px"
                    required
                  >
                    <a-input v-model="form[1].title" />
                  </a-form-item>
                  <a-form-item label="内容" required>
                    <a-textarea
                      v-model="form[1].content"
                      cols="50"
                      rows="8"
                      :max-length="200"
                      show-word-limit
                      auto-size
                    ></a-textarea></a-form-item
                ></div>
                <a-form-item label="标注" required>
                  <a-textarea
                    v-model="form[1].line"
                    :max-length="65"
                    show-word-limit
                    auto-size
                  ></a-textarea>
                </a-form-item>
                <a-form-item label="上传图标" required>
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
                            <img :src="file.url" alt="上传的图片" />
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
                              <a-image :src="form[1].icon"></a-image>
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
