<script setup lang="ts"></script>

<template>
  <div
    ><div class="top">原始记录</div>
    <div
      class="bg-white mxy rounded pxy flex flex-col items"
      style="height: 600px; border-radius: 10px"
    >
      <div class="top">
        <div
          ><a-range-picker
            style="width: 220px; margin: 0 24px 24px 0; border-radius: 7px"
            format="YYYY-MM-DD "
            @change="onChange"
            @select="onSelect"
            @ok="onOk"
          />
        </div>
        <div
          ><a-input-group>
            <a-select
              :options="['考勤组', '研发部']"
              :style="{ width: '100px' }"
              placeholder="考勤组"
              style="border-radius: 7px 0 0 7px; margin: 0"
            />
            <a-input
              :style="{ width: '140px' }"
              placeholder="请选择人员范围"
              style="border-radius: 0 7px 7px 0"
            /> </a-input-group
        ></div>
        <div
          ><a-select
            :default-value="['包含离职人员和转出人员']"
            placeholder="Please select ..."
            multiple
            :scrollbar="scrollbar"
          >
            <a-option>包含离职人员和转出人员</a-option>
            <a-option :tag-props="{ color: 'red' }">Shanghai</a-option>
            <a-option>Guangzhou</a-option>
            <a-option disabled>Disabled</a-option>
            <a-option>Shenzhen</a-option>
            <a-option>Wuhan</a-option>
          </a-select></div
        >
      </div>
    </div></div
  ></template
>

<style scoped lang="less">
  .top {
    margin: 15px 15px;
    font-weight: bold;
    font-size: 20px;
    display: flex;
  }
</style>
