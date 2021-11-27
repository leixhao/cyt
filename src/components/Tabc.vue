<template>
  <div>
    <el-radio-group v-model="tabPosition" style="margin-bottom: 30px">
      <el-radio-button label="top">top</el-radio-button>
      <el-radio-button label="right">right</el-radio-button>
      <el-radio-button label="bottom">bottom</el-radio-button>
      <el-radio-button label="left">left</el-radio-button>
    </el-radio-group>

    <el-tabs :tab-position="tabPosition">
      <!-- <el-tab-pane label="用户管理">用户管理</el-tab-pane>
      <el-tab-pane label="配置管理">配置管理</el-tab-pane>
      <el-tab-pane label="角色管理">角色管理</el-tab-pane>
      <el-tab-pane class="isLength" label="定时任务补偿"
        >定时任务补偿</el-tab-pane
      > -->
      <template v-for="(item, index) in tabs">
        <!-- <el-tab-pane :label="item"> -->
        <el-tab-pane>
          <span slot="label">{{ item }}</span>
          {{ item }}
        </el-tab-pane>
      </template>
    </el-tabs>


    
  </div>
</template>

<script>
export default {
  name: "Tabc",
  props: {
    tabs: {
      type: Array,
      default: [],
    },
  },
  data() {
    return {
      tabPosition: "left",
    };
  },

  mounted() {
    // 这里可以操作dom
    this.$nextTick(() => {
      // 遍历
      this.tabs.forEach((item, index) => {
        // 判断label长度，长度超过 增加 自定义  className
        item.length >= 6
          ? document
              .getElementsByClassName("el-tabs__item is-left")
              [index].classList.add("el-tabs-self")
          : "";
      });
    });
  },
};
</script>

<style>
/* 设置固定长度，并设置可换行 */
.el-tabs--left .el-tabs__item.is-left {
  width: 200px;
  white-space: normal;
  word-break: break-word;
}
/* 自定义类名，并根据需求设置换行后的样式，如行高，对齐方式等等 */
.el-tabs-self {
  line-height: 20px !important;
}
</style>