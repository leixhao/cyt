<template>
  <div>
    <div class="All">
      <div id="title">
        {{ prop.title }}
      </div>
      <div class="top">
        <div id="circleLeft" :style="prop.CL">
          {{ prop.wbL }}
        </div>
        <div id="circleRight" :style="prop.CR">
          {{ prop.wbR }}
        </div>
      </div>
      <div class="bottom">
        <div class="div" :style="prop.Bdiv1">
          {{ prop.div1 }}
        </div>
        <div class="div" :style="prop.Bdiv2">
          {{ prop.div2 }}
        </div>
        <div class="div" :style="prop.Bdiv3">
          {{ prop.div3 }}
        </div>
        <div class="div" :style="prop.Bdiv4">
          {{ prop.div4 }} <i class="el-icon-download" v-show="prop.Sdiv4"></i>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  props: ["prop"],
};
</script>

<style scoped>
.All {
  width: 120px;
  height: 198px;
  border: 4px solid rgb(11, 236, 29);
  float: left;
}
.top {
  margin-top: 5px;
  float: left;
  margin-left: 13%;
  font-size: 1ex;
}
#title {
  width: 100%;
  height: 20px;
  margin-top: 5px;
  text-align: center;
  line-height: 20px;
  font-size: 14px;
}
#circleLeft {
  width: 40px;
  height: 80px;
  border-radius: 40px 0 0 40px;
  border: 2px solid rgba(218, 216, 216, 0.733);
  float: left;
  text-align: center;
  line-height: 80px;
}
#circleRight {
  width: 40px;
  height: 80px;
  border-radius: 0 80px 80px 0;
  border: 2px solid rgba(218, 216, 216, 0.733);
  float: left;
  text-align: center;
  line-height: 80px;
}
.bottom {
  float: left;
  margin-top: 3px;
}
.div {
  width: 100px;
  height: 15px;
  margin-left: 6px;
  margin-top: 3px;
  text-align: center;
  line-height: 15px;
  font-size: 1ex;
}
</style>
