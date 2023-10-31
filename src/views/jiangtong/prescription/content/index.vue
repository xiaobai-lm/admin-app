<script setup lang="ts">
  import { IconEdit, IconPlus } from '@arco-design/web-vue/es/icon';
  import { reactive, ref } from 'vue';

  const file = ref();

  const onChange = (_: any, currentFile: any) => {
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
      title: '#',
      dataIndex: 'id',
    },
    {
      title: '标题',
      dataIndex: 'title',
    },
    {
      title: '英文标题',
      dataIndex: 'content',
      ellipsis: true,
      tooltip: true,
    },
    {
      title: '所属分类',
      dataIndex: 'mark',
    },

    {
      title: '工具栏',
      slotName: 'cell',
    },
  ];
  const data = reactive([
    {
      key: 1,
      id: '111',
      children: [
        {
          key: 2,
          id: 1,
          title: '啊啊啊啊',
          content: '啊啊啊啊',
          mark: '111',
        },
        {
          key: 3,
          id: 2,
          title: '好好好',
          content: '嗡嗡嗡',
          mark: '3213',
        },
      ],
    },
    {
      key: 4,
      id: '222',
      children: [
        {
          key: 5,
          id: 3,
          title: '31231',
          content: '哈哈哈哈哈哈哈哈哈',
          mark: '231',
        },
      ],
    },
  ]);
  const visible = ref(false);
  const visible1 = ref(false);

  const form = reactive({
    name: '',
    post: '',
  });

  const handleClick = (record: any) => {
    visible.value = true;
    console.log(record);
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
</script>

<template>
  <div
    class="bg-white mxy rounded pxy flex flex-col items"
    style="height: 530px; border-radius: 10px"
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
        @cancel="handleCancel"
      >
        <div>
          <a-form :model="form" layout="vertical">
            <a-form-item
              field="name"
              label="id"
              required
              asterisk-position="end"
              style="width: 50px"
            >
              <a-input />
            </a-form-item>

            <div style="display: flex"
              ><a-form-item
                field="jobNumber"
                label="标题"
                style="width: 130px; margin-right: 30px"
                required
              >
                <a-input />
              </a-form-item>
              <a-form-item field="id" label="内容" required>
                <a-textarea
                  cols="50"
                  rows="8"
                  max-length="200"
                  show-word-limit
                  auto-size
                ></a-textarea></a-form-item
            ></div>
            <div style="display: flex"
              ><a-form-item
                field="jobNumber"
                label="栅格"
                style="width: 530px; margin-right: 30px"
                required
              >
                <a-input />
              </a-form-item>
              <a-form-item field="mark" label="标签">
                <a-select default-value="Post1">
                  <a-option value="post1">Post1</a-option>
                  <a-option value="post2">Post2</a-option>
                  <a-option value="post3">Post3</a-option>
                  <a-option value="post4">Post4</a-option>
                </a-select>
              </a-form-item></div
            >

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
                <div style="">图片宽高限制为：100×100</div></div
              >
            </a-form-item>
          </a-form>
        </div>
      </a-modal>

      <a-table :columns="columns" :data="data" :scroll="scroll">
        <template #optional>
          <a-link href="#">视频链接</a-link>
        </template>
        <template #cell="{ record }">
          <a-button type="text" @click="handleClick(record)">编辑</a-button>
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
            <div>
              <a-form :model="record" layout="vertical">
                <a-form-item
                  label="id"
                  required
                  asterisk-position="end"
                  disabled
                  style="width: 50px"
                >
                  <a-input v-model="record.id" />
                </a-form-item>

                <div style="display: flex"
                  ><a-form-item
                    field="jobNumber"
                    label="标题"
                    style="width: 130px; margin-right: 30px"
                    required
                  >
                    <a-input v-model="record.title" />
                  </a-form-item>
                  <a-form-item label="内容" required>
                    <a-textarea
                      v-model="record.content"
                      cols="50"
                      rows="8"
                      max-length="200"
                      show-word-limit
                      auto-size
                    ></a-textarea></a-form-item
                ></div>
                <div style="display: flex"
                  ><a-form-item
                    field="jobNumber"
                    label="栅格"
                    style="width: 530px; margin-right: 30px"
                    required
                  >
                    <a-input v-model="record.title" />
                  </a-form-item>
                  <a-form-item field="mark" label="标签">
                    <a-select default-value="Post1">
                      <a-option value="post1">Post1</a-option>
                      <a-option value="post2">Post2</a-option>
                      <a-option value="post3">Post3</a-option>
                      <a-option value="post4">Post4</a-option>
                    </a-select>
                  </a-form-item></div
                >

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
