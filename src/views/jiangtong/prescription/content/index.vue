<script setup lang="ts">
  import { reactive, ref, onMounted } from 'vue';
  import {
    getContent,
    postContent,
    deleteContent,
    getTag,
  } from '@/api/message';

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
      dataIndex: 'titleEn',
      ellipsis: true,
      tooltip: true,
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
  const data: any = reactive([
    {
      key: 1,
      prescriptionId: '1',
      id: '',
      children: [],
    },
  ]);
  const visible = ref(false);
  const visible1 = ref(false);
  // 初始化表单
  const form: any = reactive([
    {
      title: '',
      titleEn: '',
      tab: '',
    },
  ]);
  // 用于初始化列表对象
  const newList = {
    key: 0,
    prescriptionId: '',
    id: '',
    children: [],
  };
  // 编辑按钮点击事件
  const handleClick = (record: any) => {
    visible.value = true;
    console.log(record);
    form.push(record);
  };
  // 新增按钮点击事件
  const handleClick1 = () => {
    visible1.value = true;
    form[0].title = '';
    form[0].titleEn = '';
    form[0].tab = '';
  };
  // 弹窗取消事件
  const handleCancel = () => {
    visible.value = false;
    visible1.value = false;
    form.splice(1, 1);
  };
  const handleOk = async () => {
    console.log(1);
    // 使用post发送修改数据
    if (form[1]) {
      // 编辑修改后则调用发送请求
      data.forEach((item1: any) => {
        if (item1.id === form[1].tab) {
          form[1].prescriptionId = item1.prescriptionId;
        }
      });
      await postContent(form[1]);
    } else {
      // 如果不是修改,则发送新增请求
      data.forEach((item1: any) => {
        if (item1.id === form[0].tab) {
          form[0].prescriptionId = item1.prescriptionId;
        }
      });
      await postContent(form[0]);
    }
    // 重新获取修改后的数据
    const titleList = await getTag();
    const contentList: any = await getContent();
    data.splice(0);
    form.splice(1, 1);
    for (let i = 0; i < titleList.data.length; i += 1) {
      // console.log(data[i]);
      if (data[i]) {
        data[i].prescriptionId = titleList.data[i].id;
        data[i].key = titleList.data[i].id;
        data[i].id = titleList.data[i].tab;
      } else {
        data.push(JSON.parse(JSON.stringify(newList)));
        console.log(data[i]);
        data[i].prescriptionId = titleList.data[i].id;
        data[i].key = titleList.data[i].id;
        data[i].id = titleList.data[i].tab;
      }
    }
    contentList.data.forEach((item: any) => {
      data.forEach((item1: any) => {
        if (item1.prescriptionId === item.prescriptionId) {
          item.tab = item1.id;
          item1.children.push(item);
        }
        return 0;
      });
    });
  };
  const scroll = {
    x: 200,
    y: 350,
  };
  // 删除功能提交数据
  const deleteList = async (record: any) => {
    // 发送删除请求
    await deleteContent(record.id);
    // 重新获取修改后的数据

    const titleList = await getTag();
    const contentList: any = await getContent();
    // 将data数据清除
    data.splice(0);
    for (let i = 0; i < titleList.data.length; i += 1) {
      // console.log(data[i]);
      if (data[i]) {
        data[i].prescriptionId = titleList.data[i].id;
        data[i].key = titleList.data[i].id;
        data[i].id = titleList.data[i].tab;
      } else {
        data.push(JSON.parse(JSON.stringify(newList)));
        console.log(data[i]);
        data[i].prescriptionId = titleList.data[i].id;
        data[i].key = titleList.data[i].id;
        data[i].id = titleList.data[i].tab;
      }
    }
    contentList.data.forEach((item: any) => {
      data.forEach((item1: any) => {
        if (item1.prescriptionId === item.prescriptionId) {
          item.tab = item1.id;
          item1.children.push(item);
        }
        return 0;
      });
    });
  };

  const optionList: any = reactive([]);

  onMounted(async () => {
    const titleList = await getTag();
    const contentList: any = await getContent();
    titleList.data.forEach((item: any, index) => {
      optionList.push(item.tab);
    });
    for (let i = 0; i < titleList.data.length; i += 1) {
      // console.log(data[i]);
      if (data[i]) {
        data[i].prescriptionId = titleList.data[i].id;
        data[i].key = titleList.data[i].id;
        data[i].id = titleList.data[i].tab;
      } else {
        data.push(JSON.parse(JSON.stringify(newList)));
        console.log(data[i]);
        data[i].prescriptionId = titleList.data[i].id;
        data[i].key = titleList.data[i].id;
        data[i].id = titleList.data[i].tab;
      }
    }
    contentList.data.forEach((item: any) => {
      data.forEach((item1: any) => {
        if (item1.prescriptionId === item.prescriptionId) {
          item.tab = item1.id;
          item1.children.push(item);
        }
        return 0;
      });
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
        title="新增数据"
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
              <a-form-item
                label="英文标题"
                style="width: 130px; margin-right: 30px"
                required
              >
                <a-input v-model="form[0].titleEn" />
              </a-form-item>
            </div>
            <a-form-item field="mark" label="标签">
              <a-select v-model="form[0].tab" :options="optionList">
                <!--                    <a-option :value="i" v-for="i in optionList" :key="i">{{-->
                <!--                      i-->
                <!--                    }}</a-option>-->
              </a-select>
            </a-form-item>
          </a-form>
        </div>
      </a-modal>

      <a-table :columns="columns" :data="data" :scroll="scroll">
        <template #cell="{ record }">
          <a-button type="text" @click="handleClick(record)">编辑</a-button>
          <a-popconfirm content="是否确认删除" @ok="deleteList(record)">
            <a-tooltip content="删除此条"
              ><a-button style="color: #ee0202" type="text"
                >删除</a-button
              ></a-tooltip
            >
          </a-popconfirm>
          <div v-if="form[1]">
            <a-modal
              v-model:visible="visible"
              title="编辑数据"
              width="600px"
              @cancel="handleCancel"
              @ok="handleOk"
            >
              <div>
                <a-form :model="record" layout="vertical">
                  <div style="display: flex"
                    ><a-form-item
                      label="标题"
                      style="width: 130px; margin-right: 30px"
                      required
                    >
                      <a-input v-model="form[1].title" />
                    </a-form-item>
                    <a-form-item
                      label="英文标题"
                      style="width: 130px; margin-right: 30px"
                      required
                    >
                      <a-input v-model="form[1].titleEn" />
                    </a-form-item>
                  </div>
                  <a-form-item field="mark" label="标签">
                    <a-select v-model="form[1].tab" :options="optionList">
                      <!--                    <a-option :value="i" v-for="i in optionList" :key="i">{{-->
                      <!--                      i-->
                      <!--                    }}</a-option>-->
                    </a-select>
                  </a-form-item>
                </a-form>
              </div>
            </a-modal>
          </div>
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
