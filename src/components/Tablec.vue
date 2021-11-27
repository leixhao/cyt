<template>
  <div>
    <el-table :data="tableData" style="width: 100%">
      <!-- <el-table-column prop="date" label="日期" width="180"> </el-table-column>
      <el-table-column prop="name" label="姓名" width="180"> </el-table-column>
      <el-table-column prop="address" label="地址"> </el-table-column> -->
      <el-table-column type="index" width="50" label="序号"> </el-table-column>
      <template v-for="item in tableHeader">
        <el-table-column :label="item.label" :key="item.key">
          <template #default="{ row }">
            {{ row[item.key] }}
          </template>
        </el-table-column>
      </template>
    </el-table>
  </div>
</template>

<script>
export default {
  name: "Tablec",
  data() {
    return {
      tableHeader: [
        {
          label: "日期",
          key: "date",
        },
        {
          label: "姓名",
          key: "name",
        },
        {
          label: "地址",
          key: "address",
        },
      ],
      tableData: [
        {
          date: "2016-05-02",
          name: "王小虎",
          address: "上海市普陀区金沙江路 1518 弄",
        },
        {
          date: "2016-05-04",
          name: "王小虎",
          address: "上海市普陀区金沙江路 1517 弄",
        },
        {
          date: "2016-05-01",
          name: "王小虎",
          address: "上海市普陀区金沙江路 1519 弄",
        },
        {
          date: "2016-05-03",
          name: "王小虎",
          address: "上海市普陀区金沙江路 1516 弄",
        },
      ],
    };
  },
};
</script>

<style>
</style>