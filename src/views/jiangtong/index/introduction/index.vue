<script setup lang="ts">
  import { reactive, ref } from 'vue';

  const show = ref(true);

  const columns = [
    {
      title: '媒体链接',
      slotName: 'optional',
    },
    {
      title: '内容',
      dataIndex: 'name',
      ellipsis: true,
      tooltip: true,
    },
    {
      title: '标签1',
      dataIndex: 'a',
    },
    {
      title: '标签1蓝字',
      dataIndex: 'a1',
    },
    {
      title: '标签2',
      dataIndex: 'b',
    },
    {
      title: '标签2蓝字',
      dataIndex: 'b1',
    },
    {
      title: '标签3',
      dataIndex: 'c',
    },
    {
      title: '标签3蓝字',
      dataIndex: 'c1',
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
      name:
        '上海疆通科技有限公司是高新技术企业、科技型中小企业、上海市华东师范大学毕业生实习基地、上海市人工智能行业协会会员单位，拥有电子与智能化工程专业承包二级资质和ISO9001质量体系认证，公司拥有软硬件自主研发能力，一直致力于智能应急处置系统和数据中心的智能化建设。\n' +
        '          主营业务是以物联传感为依托、以算法模型赋能、以MR图文呈现，实现IT/OT/MR互通的低代码系统集成方案，赋能企业顺利开展数字化转型。',
      a: '标签覆盖',
      a1: '200',
      b: '自研产品',
      b1: '15',
      c: '合作产业',
      c1: '30',
      time: '2023-09-18 14:36',
      management: '',
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
    <div style="margin: 20px 20px 0 20px"
      ><a-table :columns="columns" :data="data">
        <template #optional>
          <a-link href="#">视频链接</a-link>
        </template>
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
                  <a-input v-model="data[0].key" />
                </a-form-item>
                <a-form-item
                  field="post"
                  label="上传视频"
                  required
                  asterisk-position="end"
                >
                  <div>
                    <a-upload action="/" />
                    <div style="">视频宽高限制为：1920×1080</div></div
                  >
                </a-form-item>
                <a-form-item field="name" label="内容">
                  <a-textarea
                    v-model="data[0].name"
                    max-length="300"
                    show-word-limit
                    auto-size
                  ></a-textarea>
                </a-form-item>
                <div style="display: flex"
                  ><a-form-item
                    field="jobNumber"
                    label="标签1"
                    style="width: 130px; margin-right: 30px"
                    required
                  >
                    <a-input v-model="data[0].a" />
                  </a-form-item>
                  <a-form-item field="id" label="标签1蓝字" required>
                    <a-textarea
                      v-model="data[0].a1"
                      cols="57"
                      rows="8"
                      max-length="200"
                      show-word-limit
                      auto-size
                    ></a-textarea></a-form-item
                ></div>
                <div style="display: flex"
                  ><a-form-item
                    field="jobNumber"
                    label="标签2"
                    style="width: 130px; margin-right: 30px"
                    required
                  >
                    <a-input v-model="data[0].b" />
                  </a-form-item>
                  <a-form-item field="id" label="标签2蓝字" required>
                    <a-textarea
                      v-model="data[0].b1"
                      cols="57"
                      rows="8"
                      max-length="200"
                      show-word-limit
                      auto-size
                    ></a-textarea></a-form-item
                ></div>
                <div style="display: flex"
                  ><a-form-item
                    field="jobNumber"
                    label="标签3"
                    style="width: 130px; margin-right: 30px"
                    required
                  >
                    <a-input v-model="data[0].c" />
                  </a-form-item>
                  <a-form-item field="id" label="标签3蓝字" required>
                    <a-textarea
                      v-model="data[0].c1"
                      cols="57"
                      rows="8"
                      max-length="200"
                      show-word-limit
                      auto-size
                    ></a-textarea></a-form-item
                ></div>
              </a-form>
            </div>
          </a-modal>
        </template> </a-table
    ></div>
  </div>
</template>

<style scoped lang="less">
  .video {
    width: 80px;
    height: 80px;
    border: #aba8a8 dashed;
  }
</style>
