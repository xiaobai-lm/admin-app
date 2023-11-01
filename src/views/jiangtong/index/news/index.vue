<script setup lang="ts">
  import { reactive, ref, onMounted } from 'vue';
  import { IconEdit, IconPlus } from '@arco-design/web-vue/es/icon';
  import { getNews } from '@/api/message';

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
      ellipsis: true,
      tooltip: true,
    },
    {
      title: '标签',
      dataIndex: 'tag',
    },
    {
      title: '图片',
      slotName: 'img',
    },
    {
      title: '链接',
      slotName: 'link',
    },
    {
      title: '发布时间',
      dataIndex: 'time',
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

  const form = reactive({
    name: '',
    post: '',
  });

  const handleClick = async () => {
    visible.value = true;
  };
  const handleClick1 = () => {
    visible1.value = true;
  };

  const handleCancel = () => {
    visible.value = false;
    visible1.value = false;
  };
  const scroll = {
    x: 200,
    y: 350,
  };
  onMounted(async () => {
    const newsList = await getNews();
    data.push(...newsList.data);
  });
</script>

<template>
  <div
    class="bg-white mxy rounded pxy flex flex-col items"
    style="height: 500px; border-radius: 10px"
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
        >
          <a-form :model="form" layout="vertical">
            <div style="display: flex"
              ><a-form-item
                label="标题"
                style="width: 130px; margin-right: 30px"
                required
              >
                <a-input />
              </a-form-item>
              <a-form-item label="标签" required style="width: 230px">
                <a-input /> </a-form-item
            ></div>
            <div style="display: flex"
              ><a-form-item
                label="链接"
                style="width: 130px; margin-right: 30px"
                required
              >
                <a-input />
              </a-form-item>
              <div style="margin-top: 30px">
                <a-date-picker style="width: 200px" />
              </div>
            </div>
            <a-form-item label="上传图标" required>
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
                          <IconPlus />
                          <div style="margin-top: 10px; font-weight: 600"
                            >Upload</div
                          >
                        </div>
                      </div>
                    </div>
                  </template>
                </a-upload>
                <div style="">图片宽高限制为：330×200</div></div
              >
            </a-form-item>
          </a-form>
        </a-modal>

        <template #icon>
          <icon-plus />
        </template>
        新增
      </a-button>
      <a-table :columns="columns" :data="data" :scroll="scroll">
        <template #link="{ record }">
          <a-link :href="record.link">文章链接</a-link>
        </template>
        <template #img="{ record }">
          <a-image :src="record.image" height="60px"></a-image>
        </template>
        <template #buttonBj>
          <a-button type="text" @click="handleClick">编辑</a-button>
          <a-popconfirm content="是否确认删除">
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
          >
            <a-form :model="form" layout="vertical">
              <div style="display: flex"
                ><a-form-item
                  field="jobNumber"
                  label="标题"
                  style="width: 130px; margin-right: 30px"
                  required
                >
                  <a-input v-model="data[0].title" />
                </a-form-item>
                <a-form-item
                  field="id"
                  label="标签"
                  required
                  style="width: 230px"
                >
                  <a-input v-model="data[0].label" /> </a-form-item
              ></div>
              <div style="display: flex"
                ><a-form-item
                  field="jobNumber"
                  label="链接"
                  style="width: 130px; margin-right: 30px"
                  required
                >
                  <a-input v-model="data[0].hrefLink" />
                </a-form-item>
                <div style="margin-top: 30px">
                  <a-date-picker style="width: 200px" />
                </div>
              </div>
              <a-form-item label="上传图标" required>
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
                            <IconPlus />
                            <div style="margin-top: 10px; font-weight: 600"
                              >Upload</div
                            >
                          </div>
                        </div>
                      </div>
                    </template>
                  </a-upload>
                  <div style="">图片宽高限制为：330×200</div></div
                >
              </a-form-item>
            </a-form>
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
