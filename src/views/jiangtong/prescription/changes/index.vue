<script setup lang="ts">
  //  引入图标
  import { IconEdit, IconPlus } from '@arco-design/web-vue/es/icon';
  // vue按需引入
  import { reactive, ref, onMounted } from 'vue';
  // 接口引入
  import {
    getChanges,
    postChanges,
    deleteChanges,
    getContent,
  } from '@/api/message';
  // 文件上传存储变量
  const file = ref();

  // 用于初始化列表对象
  const newList = {
    key: 0,
    prescriptionContentId: '',
    id: '',
    children: [],
  };
  const onChange = (_: any, currentFile: any) => {
    file.value = {
      ...currentFile,
      // url: URL.createObjectURL(currentFile.file),
    };
  };
  const onProgress = (currentFile: any) => {
    file.value = currentFile;
  };
  // select 选择框数据
  const optionList: any = reactive([]);
  // 表单设置
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
      title: '栅格',
      dataIndex: 'span',
    },
    {
      title: '内容',
      dataIndex: 'msg',
      ellipsis: true,
      tooltip: true,
    },
    {
      title: '图片',
      slotName: 'icon',
    },
    {
      title: '所属分类',
      dataIndex: 'tab',
    },

    {
      title: '工具栏',
      slotName: 'cell',
    },
  ];
  const data: any = reactive([]);
  const visible = ref(false);
  const visible1 = ref(false);
  // 数据提交初始化
  const form = reactive([
    {
      title: '',
      icon: '',
      msg: '',
      tab: '',
      prescriptionContentId: '',
      span: '',
    },
  ]);
  // 编辑弹出触发
  const handleClick = (record: any) => {
    visible.value = true;
    // console.log(record);
    form.push(record);
  };
  // 新增弹窗触发
  const handleClick1 = () => {
    visible1.value = true;
    form[0].title = '';
    form[0].icon = '';
    form[0].msg = '';
    form[0].tab = '';
    form[0].prescriptionContentId = '';
  };
  // 弹窗取消触发
  const handleCancel = () => {
    visible.value = false;
    visible1.value = false;
    form.splice(1, 1);
  };
  // 提交确认触发
  const handleOk = async () => {
    if (form[1]) {
      // 编辑修改后则调用发送请求
      // data.forEach((item1: any) => {
      //   if (item1.id === form[1].tab) {
      //     form[1].prescriptionContentId = item1.prescriptionContentId;
      //   }
      // });
      console.log(form[1].tab.slice(0, 2));
      form[1].prescriptionContentId = form[1].tab.slice(0, 2);
      await postChanges(form[1]);
    } else {
      // 如果不是修改,则发送新增请求
      form[0].prescriptionContentId = form[0].tab.slice(0, 2);

      console.log(form[0].tab.slice(0, 2));

      // data.forEach((item1: any) => {
      //   if (item1.id === form[0].tab) {
      //     form[0].prescriptionContentId = item1.prescriptionContentId;
      //   }
      // });
      await postChanges(form[0]);
    }
    // 提交后重新获取数据
    const contentList: any = await getContent();
    const descList = await getChanges();
    form.splice(1, 1);
    data.splice(0);
    // 初始化列表
    for (let i = 0; i < contentList.data.length; i += 1) {
      data.push(JSON.parse(JSON.stringify(newList)));
      // console.log(data[i]);
      data[i].prescriptionContentId = contentList.data[i].id;
      data[i].key = contentList.data[i].id;
      data[i].id = contentList.data[i].title;
    }
    // 将子列表放入对应的分类中
    descList.data.forEach((item: any) => {
      data.forEach((item1: any) => {
        if (item1.prescriptionContentId === item.prescriptionContentId) {
          item.tab = item1.id;
          item1.children.push(item);
        }
        return 0;
      });
    });
  };
  const scroll = {
    x: 200,
    y: 450,
  };
  // 编辑功能上传文件成功
  const onSuccess = (fileItem: any) => {
    // console.log(fileItem);
    form[1].icon = fileItem.response.data;
  };
  // 新增功能上传文件成功
  const onSuccess1 = (fileItem: any) => {
    // console.log(fileItem);
    form[0].icon = fileItem.response.data;
  };
  // 删除功能提交数据
  const deleteList = async (record: any) => {
    // 发送删除请求
    await deleteChanges(record.id);
    // 重新获取修改后的数据

    const contentList: any = await getContent();
    const descList = await getChanges();
    data.splice(0);
    // 初始化列表
    for (let i = 0; i < contentList.data.length; i += 1) {
      data.push(JSON.parse(JSON.stringify(newList)));
      // console.log(data[i]);
      data[i].prescriptionContentId = contentList.data[i].id;
      data[i].key = contentList.data[i].id;
      data[i].id = contentList.data[i].title;
    }
    // 将子列表放入对应的分类中
    descList.data.forEach((item: any) => {
      data.forEach((item1: any) => {
        if (item1.prescriptionContentId === item.prescriptionContentId) {
          item.tab = item1.id;
          item1.children.push(item);
        }
        return 0;
      });
    });
  };

  // 初始化页面数据,发送获取请求
  onMounted(async () => {
    const contentList: any = await getContent();
    const descList = await getChanges();
    // 初始化列表
    for (let i = 0; i < contentList.data.length; i += 1) {
      data.push(JSON.parse(JSON.stringify(newList)));
      // console.log(data[i]);
      data[i].prescriptionContentId = contentList.data[i].id;
      data[i].key = contentList.data[i].id;
      data[i].id = contentList.data[i].title;
    }
    // 将子列表放入对应的分类中
    descList.data.forEach((item: any) => {
      data.forEach((item1: any) => {
        if (item1.prescriptionContentId === item.prescriptionContentId) {
          item.tab = item1.id;
          item1.children.push(item);
        }
        return 0;
      });
    });
    // 初始标签

    // 获取分类标题
    contentList.data.forEach((item: any, index: any) => {
      optionList.push(item.id + item.title);
    });
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
        @ok="handleOk"
      >
        <div>
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
                  v-model="form[0].msg"
                  cols="50"
                  rows="8"
                  :max-length="200"
                  show-word-limit
                  auto-size
                ></a-textarea></a-form-item
            ></div>
            <div style="display: flex">
              <a-form-item label="栅格" required style="width: 330px">
                <a-input
                  v-model="form[0].span"
                  style="margin-right: 20px"
                ></a-input>
              </a-form-item>
              <a-form-item label="标签">
                <a-select v-model="form[0].tab" :options="optionList">
                </a-select> </a-form-item
            ></div>

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
        <template #icon="{ record }">
          <a-image :src="record.icon" width="70px" />
        </template>
        <template #cell="{ record }">
          <a-button type="text" @click="handleClick(record)">编辑 </a-button>
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
            @ok="handleOk"
          >
            <div v-if="form[1]">
              <a-form :model="form" layout="vertical">
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
                      v-model="form[1].msg"
                      cols="50"
                      rows="8"
                      :max-length="200"
                      show-word-limit
                      auto-size
                    ></a-textarea></a-form-item
                ></div>
                <div style="display: flex">
                  <a-form-item label="栅格" required style="width: 330px">
                    <a-input
                      v-model="form[1].span"
                      style="margin-right: 20px"
                    ></a-input>
                  </a-form-item>
                  <a-form-item label="标签">
                    <a-select v-model="form[1].tab" :options="optionList">
                    </a-select> </a-form-item
                ></div>
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
