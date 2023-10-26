<script setup lang="ts">
  import { reactive, ref } from 'vue';

  const columns = [
    {
      title: '标题',
      dataIndex: 'title',
    },
    {
      title: '标签',
      dataIndex: 'label',
      ellipsis: true,
      tooltip: true,
    },
    {
      ellipsis: true,
      tooltip: true,
      title: '背景',
      dataIndex: 'background',
    },
    {
      ellipsis: true,
      tooltip: true,
      title: '方案',
      dataIndex: 'plan',
    },
    {
      title: '痛点',
      dataIndex: 'content',
      ellipsis: true,
      tooltip: true,
    },
    {
      title: '益处',
      dataIndex: 'mark',
      ellipsis: true,
      tooltip: true,
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
      id: '1',
      title: '知识图谱',
      content:
        '经过咨询发现，目前工厂对有限空间下的作业以及其他特种作业基本没有智能化的监察手段，在发生危险的第一时间没有及时的解决办法。',
      mark: '智能化系统，提高工作人员安全性，避免造成人生安全损失，提高了检维修效率。',
      background:
        '工厂大部分检修维流程项目使用外包的方式，对工作人员的安全保障手段目前采用人工安全审核与安全作业指导的方式。',
      plan: '采用监理机器人伴随的方案，将合规与智能化结合，使用深度学习与知识图谱等手段，智能化作业过程，随时溯源。',
      label: '某工厂合规方案咨询优化',
      time: '2023-09-18 14:36',
    },
    {
      key: 2,
      id: '2',
      title: '远程医疗',
      content:
        '随车医生遇到部分紧急病情的外援手段单一不直观；无法同时监控多个诊疗器械导致效率低；车载摄像头辅助远程监控视角死角多，效果不佳。',
      mark: '即插即用，建设周期短，实现第一视角外设接入和的互动会诊。',
      background: '急救中心院前救治需要数字化手段提高救治率。',
      plan: '采用AR眼镜和无线传输。',
      label: '上海120院前救治',
      time: '2023-09-18 14:36',
    },
    {
      key: 3,
      id: '3',
      title: '数据中心建设',
      content:
        '必须确保不断电不断网，涉及各类新旧子系统和不同品牌，施工和调试难度极大。',
      mark: '我司在规定时间内零误差超前完成项目。',
      background:
        '某世界知名的银行数据中心需进行改造，新旧智能化系统并存，部分系统已超10年，部分旧系统已停产需更新，部分旧系统仍需接入新系统。',
      plan: '整体规划，连续几天24小时轮班作业，项目实施精细到分钟，对改造涉及供配电系统、UPS、综合布线、精密空调、环境控制系统、自动化控制系统等每个子系统都设计了多种实施和应急预案。',
      label: '银行数据中心',
      time: '2023-09-18 14:36',
    },
    {
      key: 4,
      id: '4',
      title: '电气火灾超前预警处置平台',
      content:
        '烟感报警只能提前几分钟预警电气火灾，救援时间紧；巡检人员技术参差不齐，无法确保及时准确处置电气火灾；人工巡检记录不够准确完整。',
      mark: 'AI智能提前避险火灾，应急指挥辅助决策，变被动受损为主动巡检。。',
      background:
        '电气柜火灾造成停电停产，领导担责，灾后投入大量人力巡检，工作强度大，人力成本高。',
      plan: '采用多种传感器，通过AI算法模型，提前几天发现火灾隐患并预警，并将应急预案通知到相关处置人员，接收人按照方案快速执行即可。',
      label: '某国企电气柜智能诊断及应急处置项目',
      time: '2023-09-18 14:36',
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
    style="height: 550px; border-radius: 10px"
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
          <div style="display: flex">
            <a-form-item label="标题" required>
              <a-textarea cols="25" rows="6" auto-size></a-textarea>
            </a-form-item>
            <a-form-item label="标签" required>
              <a-textarea
                cols="25"
                rows="7"
                max-length="65"
                show-word-limit
                auto-size
              ></a-textarea>
            </a-form-item>
          </div>
          <div style="display: flex">
            <a-form-item label="背景" required>
              <a-textarea
                cols="25"
                rows="6"
                max-length="65"
                show-word-limit
                auto-size
              ></a-textarea>
            </a-form-item>
            <a-form-item label="痛点" required>
              <a-textarea
                cols="25"
                rows="8"
                max-length="65"
                show-word-limit
                auto-size
              ></a-textarea>
            </a-form-item>
          </div>
          <div style="display: flex">
            <a-form-item label="方案" required>
              <a-textarea
                cols="25"
                rows="6"
                max-length="65"
                show-word-limit
                auto-size
              ></a-textarea>
            </a-form-item>
            <a-form-item label="益处" required>
              <a-textarea
                cols="25"
                rows="6"
                max-length="65"
                show-word-limit
                auto-size
              ></a-textarea>
            </a-form-item>
          </div>
        </a-modal>

        <template #icon>
          <icon-plus />
        </template>
        新增
      </a-button>
      <a-table :columns="columns" :data="data" :scroll="scroll">
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
            <div style="display: flex">
              <a-form-item label="标题" required>
                <a-textarea
                  v-model="data[0].title"
                  cols="25"
                  rows="6"
                  auto-size
                ></a-textarea>
              </a-form-item>
              <a-form-item label="标签" required>
                <a-textarea
                  v-model="data[0].label"
                  cols="25"
                  rows="7"
                  max-length="65"
                  show-word-limit
                  auto-size
                ></a-textarea>
              </a-form-item>
            </div>
            <div style="display: flex">
              <a-form-item label="背景" required>
                <a-textarea
                  v-model="data[0].background"
                  cols="25"
                  rows="6"
                  max-length="65"
                  show-word-limit
                  auto-size
                ></a-textarea>
              </a-form-item>
              <a-form-item label="痛点" required>
                <a-textarea
                  v-model="data[0].content"
                  cols="25"
                  rows="8"
                  max-length="65"
                  show-word-limit
                  auto-size
                ></a-textarea>
              </a-form-item>
            </div>
            <div style="display: flex">
              <a-form-item label="方案" required>
                <a-textarea
                  v-model="data[0].plan"
                  cols="25"
                  rows="6"
                  max-length="65"
                  show-word-limit
                  auto-size
                ></a-textarea>
              </a-form-item>
              <a-form-item label="益处" required>
                <a-textarea
                  v-model="data[0].mark"
                  cols="25"
                  rows="6"
                  max-length="65"
                  show-word-limit
                  auto-size
                ></a-textarea>
              </a-form-item>
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
