<script setup lang="ts">
  import { reactive, ref } from 'vue';

  const columns = [
    {
      title: '#',
      dataIndex: 'label',
    },
    {
      title: '企业名称',
      dataIndex: 'title',
    },
    {
      ellipsis: true,
      tooltip: true,
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
      key: 1,
      label: '8',
      title: '国家电网',
      content: '探索智慧场景，提升人类幸福',
      Weights: '1',
      time: '2023-09-18 14:36',
    },
    {
      key: 2,
      label: '5',
      title: '愿景',
      content: '成为合规、高效、智慧的标杆',
      enTitle: 'Vision',
      time: '2023-09-18 14:36',
    },
    {
      key: 3,
      label: '6',
      title: '价值观',
      content: '跨界创新、协作共赢、做事靠谱',
      enTitle: 'Values',
      time: '2023-09-18 14:36',
    },
  ]);
  const visible = ref(false);
  const visible1 = ref(false);

  const from: any = reactive({
    title: '1',
    Weights: '1',
    content: '1',
  });
  const handleClick = (recode: any) => {
    visible.value = true;
    console.log(recode);
    from.title = recode.record.title;
    from.Weights = recode.record.Weights;
    from.content = recode.record.content;
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
    style="height: 550px; border-radius: 10px"
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
      >
        <div style="display: flex">
          <a-form-item :model="from" label="标题" required>
            <a-textarea auto-size></a-textarea>
          </a-form-item>
          <a-form-item label="内容" required>
            <a-textarea
              cols="25"
              rows="7"
              max-length="265"
              show-word-limit
              auto-size
            ></a-textarea>
          </a-form-item>
        </div>

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
      <a-table :columns="columns" :data="data" :scroll="scroll">
        <template #buttonBj="recode">
          <a-button type="text" @click="handleClick(recode)">编辑</a-button>
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
            :model="from"
            @cancel="handleCancel"
          >
            <div style="display: flex">
              <a-form-item :model="from" label="标题" required>
                <a-textarea
                  v-model="from.title"
                  cols="25"
                  rows="6"
                  auto-size
                ></a-textarea>
              </a-form-item>
              <a-form-item label="内容" required>
                <a-textarea
                  v-model="from.Weights"
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
