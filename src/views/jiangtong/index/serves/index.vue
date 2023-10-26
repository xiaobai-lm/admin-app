<script setup lang="ts">
  import { IconEdit, IconPlus } from '@arco-design/web-vue/es/icon';
  import { reactive, ref } from 'vue';

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
      dataIndex: 'mark',
    },
    {
      title: '栅格',
      dataIndex: 'grid',
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
      key: 1,
      id: '咨询·培训',
      children: [
        {
          key: 2,
          id: 14,
          title: '数字化转型咨询',
          content: '挖掘场景、模型构建、数据打通、价值创造',
          mark: '咨询·培训',
          grid: '24',
          img: 'img1',
          time: '2023-09-18 14:36',
        },
        {
          key: 3,
          id: 15,
          title: '数字化共创课程',
          content:
            '梳理需求、制定策略（明确创新目标和价值）、原型开发（量身定做可操作应用）、验证推广（现场部署与推广方案）',
          mark: '咨询·培训',
          grid: '24',
          img: 'img2',
          time: '2023-09-18 14:36',
        },
      ],
    },
    {
      key: 4,

      id: 'AR/VR/MR眼镜方案',
      children: [
        {
          key: 5,
          id: 16,
          title: '远程协作类',
          content:
            '人和人分离，专家在后台远程支持。使用者可与后台人员互动，后台人员以现场人员第一视角查看现场情况和接入的第三方数据',
          mark: 'AR/VR/MR眼镜方案',
          grid: '24',
          img: 'img3',
          time: '2023-09-18 14:36',
        },
        {
          key: 6,
          id: 17,
          title: '作业流SOP类',
          content:
            '人和技术分离，知识固化在设备上，使用者按照眼镜中的图文要求，完成作业，如有违规，自动纠错',
          mark: 'AR/VR/MR眼镜方案',
          grid: '24',
          img: 'img3',
          time: '2023-09-18 14:36',
        },
        {
          key: 7,
          id: 18,
          title: '数字孪生仿真类',
          content:
            '现实与虚拟镜像同步，AR是人与物理世界实时沟通的桥梁，是数字孪生的最佳运行环境',
          mark: 'AR/VR/MR眼镜方案',
          grid: '24',
          img: 'img3',
          time: '2023-09-18 14:36',
        },
      ],
    },
    {
      key: 8,

      id: 'IT/OT/MR集成',
      children: [
        {
          key: 9,
          id: 19,
          title: '电气火灾超前预警处置平台',
          content:
            '电气火灾数量在火灾占比第一，如何超前期预警火灾是重中之重。平台在短时间内根据有限的信息，针对不确定的需求，快速分派有限的资源，做出最优决策，对处置行为进行指导和监督，事后复盘流程再造，形成闭环管理',
          mark: 'IT/OT/MR集成',
          grid: '24',
          img: 'img1',
          time: '2023-09-18 14:36',
        },
        {
          key: 10,
          id: 20,
          title: '合规作业预警处置平台',
          content:
            '合规监理在工业过程中是八大作业最重要的一个环节。我们采用合规预警处置平台联合机器人的方式协同进行监理，杜绝人为疏漏出现的隐患。应急平台集成事前预警，事中监督以及事后回溯的一套标准闭环管理流程',
          mark: 'IT/OT/MR集成',
          grid: '24',
          img: 'img1',
          time: '2023-09-18 14:36',
        },
      ],
    },
    {
      key: 11,

      id: '数据中心智能化建设服务',
      children: [
        {
          key: 12,
          id: 21,
          title: '配电系统',
          content:
            'UPS系统、列头配电柜、电气配电、发电机系统、0.4KV开关柜系统、变压器、10KV开关柜系统',
          mark: '数据中心智能化建设服务',
          grid: '24',
          img: 'img1',
          time: '2023-09-18 14:36',
        },
        {
          key: 13,
          id: 22,
          title: '环境控制系统',
          content: '精密空调、采暖及通⻛空调、循环⽔系统...',
          mark: '数据中心智能化建设服务',
          grid: '24',
          img: 'img1',
          time: '2023-09-18 14:36',
        },
        {
          key: 14,
          id: 23,
          title: '弱电系统',
          content: '智能化系统、综合布线、管线桥架...',
          mark: '数据中心智能化建设服务',
          grid: '24',
          img: 'img1',
          time: '2023-09-18 14:36',
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

  const handleClick = () => {
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

        <template #icon>
          <icon-plus />
        </template>
        新增
      </a-button>
      <a-table :columns="columns" :data="data" :scroll="scroll">
        <template #optional>
          <a-link href="#">视频链接</a-link>
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
            <div>
              <a-form :model="form" layout="vertical">
                <a-form-item
                  label="id"
                  required
                  asterisk-position="end"
                  disabled
                  style="width: 50px"
                >
                  <a-input v-model="data[0].key" />
                </a-form-item>

                <div style="display: flex"
                  ><a-form-item
                    field="jobNumber"
                    label="标题"
                    style="width: 130px; margin-right: 30px"
                    required
                  >
                    <a-input v-model="data[0].children[0].title" />
                  </a-form-item>
                  <a-form-item field="id" label="内容" required>
                    <a-textarea
                      v-model="data[0].children[0].content"
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
                    <a-input v-model="data[0].children[0].title" />
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
