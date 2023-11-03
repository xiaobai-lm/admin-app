<script setup lang="ts">
  import { IconEdit, IconPlus } from '@arco-design/web-vue/es/icon';
  import { reactive, ref, onMounted } from 'vue';
  import { deleteServere, getServere, postServere } from '@/api/message';

  const file = ref();
  // 文件改变
  const onChange = (_: any, currentFile: any) => {
    file.value = {
      ...currentFile,
      // url: URL.createObjectURL(currentFile.file),
    };
  };
  // 文件展示
  const onProgress = (currentFile: any) => {
    file.value = currentFile;
  };

  const columns: any = [
    {
      title: 'id',
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
      title: '标签',
      dataIndex: 'tag',
    },
    {
      title: '栅格',
      dataIndex: 'span',
    },
    {
      title: '图片',
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
      slotName: 'cell',
    },
  ];
  const data: any = reactive([
    {
      key: 1,
      id: '咨询·培训',
      children: [],
    },
    {
      key: 4,
      id: 'AR/VR/MR眼镜方案',
      children: [],
    },
    {
      key: 8,

      id: 'IT/OT/MR集成',
      children: [],
    },
    {
      key: 11,

      id: '数据中心智能化建设服务',
      children: [],
    },
  ]);
  const visible = ref(false);
  const visible1 = ref(false);

  const form: any = reactive([
    {
      content: '',
      img: '',
      span: '',
      tag: '',
      title: '',
    },
  ]);
  // 编辑数据弹窗
  const handleClick = (record: any) => {
    visible.value = true;
    console.log(record);
    form.push(record);
  };
  // 新增数据弹窗
  const handleClick1 = () => {
    visible1.value = true;
    form[0].tag = '';
    form[0].content = '';
    form[0].img = '';
    form[0].span = '';
    form[0].title = '';
  };
  // 取消弹窗
  const handleCancel = () => {
    visible.value = false;
    visible1.value = false;
    form.splice(1, 1);
    // console.log(form);
  };
  const scroll = {
    x: 200,
    y: 350,
  };

  const list = [
    '咨询·培训',
    'AR/VR/MR眼镜方案',
    'IT/OT/MR集成',
    '数据中心智能化建设服务',
  ];
  // 编辑功能提交数据
  const handleBeforeOk = async (done: any) => {
    const value = list.indexOf(form[1].tag) + 1;

    console.log(list.indexOf(form[1].tag));
    // delete form[0].createdTime;
    form[1].tag = value;
    await postServere(form[1]);
    const serveList1 = await getServere();
    for (let i = 0; i < serveList1.data.length; i += 1) {
      data[i].id = serveList1.data[i].tags;
      data[i].children = serveList1.data[i].content;
    }
    window.setTimeout(() => {
      done();
      form.splice(1, 1);
      // prevent close
      // done(false)
    }, 1000);
  };
  // 新增功能提交数据
  const handleBeforeOk1 = async (done: any) => {
    // console.log(list.indexOf(form[0].tag));
    // delete form[0].createdTime;
    form[0].tag = list.indexOf(form[0].tag) + 1;
    await postServere(form[0]);
    const serveList1 = await getServere();
    for (let i = 0; i < serveList1.data.length; i += 1) {
      data[i].id = serveList1.data[i].tags;
      data[i].children = serveList1.data[i].content;
    }
    window.setTimeout(() => {
      done();
      form.splice(1, 1);
      // prevent close
      // done(false)
    }, 1000);
  };
  // 编辑功能上传文件成功
  const onSuccess = (fileItem: any) => {
    console.log(fileItem);
    form[1].img = fileItem.response.data;
  };
  // 新增功能上传文件成功
  const onSuccess1 = (fileItem: any) => {
    // console.log(fileItem);
    form[0].img = fileItem.response.data;
  };
  // 删除列表
  const deleteList = async (record: any) => {
    console.log(record.id);
    await deleteServere(record.id);
    const serveList1 = await getServere();
    for (let i = 0; i < serveList1.data.length; i += 1) {
      data[i].id = serveList1.data[i].tags;
      data[i].children = serveList1.data[i].content;
    }
  };
  //  获取展示数据
  onMounted(async () => {
    const serveList = await getServere();
    console.log(serveList.data[0].tags);
    for (let i = 0; i < serveList.data.length; i += 1) {
      data[i].id = serveList.data[i].tags;
      data[i].children = serveList.data[i].content;
    }
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
        @cancel="handleCancel"
        @before-ok="handleBeforeOk1"
      >
        <div v-if="form[0]">
          <a-form :model="form" layout="vertical">
            <div style="display: flex"
              ><a-form-item
                label="标题"
                style="width: 130px; margin-right: 30px"
                required
              >
                <a-input v-model="form[0].title" />
              </a-form-item>
              <a-form-item label="内容" required>
                <a-textarea
                  v-model="form[0].content"
                  cols="50"
                  rows="8"
                  :max-length="200"
                  show-word-limit
                  auto-size
                ></a-textarea></a-form-item
            ></div>
            <div style="display: flex"
              ><a-form-item
                label="栅格"
                style="width: 530px; margin-right: 30px"
                required
              >
                <a-input v-model="form[0].span" />
              </a-form-item>
              <a-form-item label="标签">
                <a-select v-model="form[0].tag" default-value="咨询·培训">
                  <a-option value="咨询·培训">咨询·培训</a-option>
                  <a-option value="AR/VR/MR眼镜方案">AR/VR/MR眼镜方案</a-option>
                  <a-option value="IT/OT/MR集成">IT/OT/MR集成</a-option>
                  <a-option value="数据中心智能化建设服务"
                    >数据中心智能化建设服务</a-option
                  >
                </a-select>
              </a-form-item></div
            >

            <a-form-item label="上传图标" required>
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
                        <img :src="file.url" alt="上传图片" />
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
        <template #icon="{ record }">
          <a-image :src="record.img" height="15xp" width="40px"></a-image>
        </template>

        <template #cell="{ record }">
          <a-button type="text" @click="handleClick(record)">编辑</a-button>
          <a-tooltip content="删除此条">
            <a-popconfirm content="是否确认删除" @ok="deleteList(record)">
              <a-button style="color: #ee0202" type="text">删除</a-button>
            </a-popconfirm>
          </a-tooltip>
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
                  label="id"
                  required
                  asterisk-position="end"
                  disabled
                  style="width: 50px"
                >
                  <a-input v-model="form[1].id" />
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
                <div style="display: flex"
                  ><a-form-item
                    label="栅格"
                    style="width: 530px; margin-right: 30px"
                    required
                  >
                    <a-input v-model="form[1].span" />
                  </a-form-item>
                  <a-form-item field="mark" label="标签">
                    <a-select v-model="form[1].tag" :default-value="record.tag">
                      <a-option value="咨询·培训">咨询·培训</a-option>
                      <a-option value="AR/VR/MR眼镜方案"
                        >AR/VR/MR眼镜方案</a-option
                      >
                      <a-option value="IT/OT/MR集成">IT/OT/MR集成</a-option>
                      <a-option value="数据中心智能化建设服务"
                        >数据中心智能化建设服务</a-option
                      >
                    </a-select>
                  </a-form-item></div
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
                            <img :src="file.url" alt="上传图片" />
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
                                width="200px"
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
</style>
