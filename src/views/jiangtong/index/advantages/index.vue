<script setup lang="ts">
  import { reactive, ref } from 'vue';

  const show = ref(true);

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
      title: '内容',
      dataIndex: 'content',
      ellipsis: true,
      tooltip: true,
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
      name:
        '上海疆通科技有限公司是高新技术企业、科技型中小企业、上海市华东师范大学毕业生实习基地、上海市人工智能行业协会会员单位，拥有电子与智能化工程专业承包二级资质和ISO9001质量体系认证，公司拥有软硬件自主研发能力，一直致力于智能应急处置系统和数据中心的智能化建设。\n' +
        '          主营业务是以物联传感为依托、以算法模型赋能、以MR图文呈现，实现IT/OT/MR互通的低代码系统集成方案，赋能企业顺利开展数字化转型。',
      id: 1,
      title: '专业：全流程最优数字化方案',
      content:
        '从咨询到落地，与西门子中国研究院、中大咨询等国内外顶尖咨询公司合作。',
      img: 'img1',
      time: '2023-09-18 14:36',
      management: '',
    },
    {
      key: '2',
      name:
        '上海疆通科技有限公司是高新技术企业、科技型中小企业、上海市华东师范大学毕业生实习基地、上海市人工智能行业协会会员单位，拥有电子与智能化工程专业承包二级资质和ISO9001质量体系认证，公司拥有软硬件自主研发能力，一直致力于智能应急处置系统和数据中心的智能化建设。\n' +
        '          主营业务是以物联传感为依托、以算法模型赋能、以MR图文呈现，实现IT/OT/MR互通的低代码系统集成方案，赋能企业顺利开展数字化转型。',
      id: 2,
      title: '专业：全流程最优数字化方案',
      content:
        '从咨询到落地，与西门子中国研究院、中大咨询等国内外顶尖咨询公司合作。',
      img: 'img1',
      time: '2023-09-18 14:36',
      management: '',
    },
    {
      key: '3',
      name:
        '上海疆通科技有限公司是高新技术企业、科技型中小企业、上海市华东师范大学毕业生实习基地、上海市人工智能行业协会会员单位，拥有电子与智能化工程专业承包二级资质和ISO9001质量体系认证，公司拥有软硬件自主研发能力，一直致力于智能应急处置系统和数据中心的智能化建设。\n' +
        '          主营业务是以物联传感为依托、以算法模型赋能、以MR图文呈现，实现IT/OT/MR互通的低代码系统集成方案，赋能企业顺利开展数字化转型。',
      id: 3,
      title: '专业：全流程最优数字化方案',
      content:
        '从咨询到落地，与西门子中国研究院、中大咨询等国内外顶尖咨询公司合作。',
      img: 'img1',
      time: '2023-09-18 14:36',
      management: '',
    },
    {
      key: '4',
      name:
        '上海疆通科技有限公司是高新技术企业、科技型中小企业、上海市华东师范大学毕业生实习基地、上海市人工智能行业协会会员单位，拥有电子与智能化工程专业承包二级资质和ISO9001质量体系认证，公司拥有软硬件自主研发能力，一直致力于智能应急处置系统和数据中心的智能化建设。\n' +
        '          主营业务是以物联传感为依托、以算法模型赋能、以MR图文呈现，实现IT/OT/MR互通的低代码系统集成方案，赋能企业顺利开展数字化转型。',
      id: 4,
      title: '专业：全流程最优数字化方案',
      content:
        '从咨询到落地，与西门子中国研究院、中大咨询等国内外顶尖咨询公司合作。',
      img: 'img1',
      time: '2023-09-18 14:36',
      management: '',
    },
  ]);
  const visible = ref(false);
  const from: any = reactive([]);
  const form = reactive({
    name: '',
    post: '',
  });

  const handleClick = (record: any) => {
    visible.value = true;
    // console.log(record);
    from.push(record);
    // console.log(from);
  };

  const handleCancel = () => {
    visible.value = false;
    console.log('1');
  };
  const handleBeforeOk = (done: any) => {
    console.log(from);
  };
</script>

<template>
  <div
    class="bg-white mxy rounded pxy flex flex-col items"
    style="height: 500px; border-radius: 10px"
  >
    <div style="margin: 20px 20px 0 20px">
      <a-table :columns="columns" :data="data">
        <template #buttonBj="{ record }">
          <a-button type="text" @click="handleClick(record)">编辑</a-button>
          <a-modal
            v-model:visible="visible"
            title="编辑数据"
            width="600px"
            @cancel="handleCancel"
            @before-ok="handleBeforeOk"
          >
            <div>
              <a-form :model="from" layout="vertical">
                <a-form-item
                  field="name"
                  label="id"
                  required
                  asterisk-position="end"
                  disabled
                  style="width: 50px"
                >
                  <a-input v-model="from[0].id" />
                </a-form-item>

                <div style="display: flex"
                  ><a-form-item
                    field="jobNumber"
                    label="标题"
                    style="width: 130px; margin-right: 30px"
                    required
                  >
                    <a-input v-model="from[0].title" />
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
                <a-form-item field="id" label="上传图标" required>
                  <div
                    ><div class="video"></div>
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
