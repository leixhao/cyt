<template>
  <div class="app-container" style="height: 500px">
    <!-- <div class="filter-container">
      <el-form :inline="true" :model="fifter" class="demo-form-inline">
        <el-form-item label="是否启用">
          <el-select
            v-model="fifter.Actived"
            placeholder="请选择"
            clearable
            @change="selectActived($event)"
          >
            <el-option label="启用" value="1"></el-option>
            <el-option label="禁用" value="0"></el-option>
          </el-select>
        </el-form-item>
        <el-form-item>
          <el-button type="primary" @click="onSubmit">查询</el-button>
        </el-form-item>
        <el-form-item>
          <el-button type="warning" @click="dialogFormVisible = true" plain
            >添加</el-button
          >
        </el-form-item>
      </el-form>
    </div>

    <el-table
      :data="tableData"
      border
      :height="screeheight"
      style="width: 100%"
    >
      <el-table-column prop="ID" label="ID"> </el-table-column>
      <el-table-column prop="Version" label="版本号"> </el-table-column>
      <el-table-column prop="CreateTime" label="创建时间"></el-table-column>
      <el-table-column prop="FilePath" label="文件路径"> </el-table-column>
      <el-table-column prop="Actived" label="是否启用">
        <template slot-scope="scope">
          <span v-if="scope.row.Actived == 0">禁用</span>
          <span v-else>启用</span>
        </template>
      </el-table-column>
    </el-table>
    <el-pagination
      style="margin-top: 20px"
      :current-page="pageInfo.pageIndex"
      :page-sizes="[10, 20, 30, 50]"
      :page-size="pageInfo.pageSize"
      :total="pageInfo.Count"
      :background="true"
      :small="true"
      layout="total, sizes, prev, pager, next, jumper"
      @size-change="handleSizeChange"
      @current-change="handleCurrentChange"
    />
    <el-select v-model="value1" multiple placeholder="请选择">
      <el-option
        v-for="item in ylArr"
        :key="item.coding"
        :label="item.name"
        :value="item.coding"
      >
      </el-option>
    </el-select>
    <el-dialog title="添加" :visible.sync="dialogFormVisible" width="50%">
      <el-form ref="form" :model="form" label-width="80px">
        <el-form-item label="版本">
          <el-input v-model="form.Version"></el-input>
        </el-form-item>
        <el-form-item label="上传文件">
          <el-upload
            ref="upload"
            class="upload-demo"
            action=""
            :on-change="handleChange"
            multiple
            :limit="1"
            :before-upload="beforeUpload"
            :on-exceed="handleExceed"
            :file-list="fileList"
            accept=".zip"
            :auto-upload="false"
          >
            <el-button size="small" type="primary">点击上传</el-button>
            <div slot="tip" class="el-upload__tip">只能上传zip格式文件</div>
          </el-upload>
        </el-form-item>
        <el-form-item label="版本描述">
          <el-input v-model="form.Remark"></el-input>
        </el-form-item>
      </el-form>
      <div slot="footer" class="dialog-footer">
        <el-button @click="dialogFormVisible = false">取 消</el-button>
        <el-button type="primary" @click="OnClick()">确 定</el-button>
      </div>
    </el-dialog> -->
    <el-tree
      style="margin:10px"
      :data="data"
      :props="defaultProps"
      accordion
      @node-click="handleNodeClick"
    >
      <template v-slot:default="{ node }">
        <element-tree-line
          :node="node"
          :showLabelLine="treeProps['showLabelLine']"
          :indent="treeProps['indent']"
        >
          <!-- 自定义label的slot -->
          <template v-slot:node-label>
            <span style="font-size: 12px">
              {{ node.label }}
              <i class="el-icon-eleme"></i
            ></span>
          </template>
          <!-- 在右边追加内容的slot -->
          <template v-slot:after-node-label>
            <span style="padding-right: 10px">
              <el-button
                type="primary"
                size="mini"
                @click.stop="openDrawer(node)"
                >新增子节点</el-button
              >
              <el-button
                type="primary"
                size="mini"
                @click.stop="openDrawer(node)"
                >修改</el-button
              >
              <el-button type="danger" size="mini" @click.stop="openDialog"
                >删除</el-button
              ></span
            >
          </template>
        </element-tree-line>
      </template>
    </el-tree>
  </div>
</template>

<script>
// import api from "/src/api/version";
import ElementTreeLine from "element-tree-line";
import "element-tree-line/dist/style.css";
import { allDepartment, allDosage } from "@/libs/api";
export default {
  components: { ElementTreeLine },
  data() {
    return {
      tableData: [],
      fifter: {
        Actived: "",
      },
      pageInfo: {
        pageSize: 10,
        pageIndex: 1,
        Count: 0,
      },
      screeheight: 100,
      dialogFormVisible: false,
      formLabelWidth: "120px",
      form: {
        Version: null,
        filedata: null,
        Remark: null,
      },
      uploadzip: "",
      fileList: [],
      ylArr: [],
      value1: ["333"],
      data: [
        {
          label: "一级 1",
          children: [
            {
              label: "二级 1-1",
              children: [
                {
                  label: "三级 1-1-1",
                },
              ],
            },
          ],
        },
        {
          label: "一级 2",
          children: [
            {
              label: "二级 2-1",
              children: [
                {
                  label: "三级 2-1-1",
                },
              ],
            },
            {
              label: "二级 2-2",
              children: [
                {
                  label: "三级 2-2-1",
                },
              ],
            },
          ],
        },
        {
          label: "一级 3",
          children: [
            {
              label: "二级 3-1",
              children: [
                {
                  label: "三级 3-1-1",
                },
              ],
            },
            {
              label: "二级 3-2",
              children: [
                {
                  label: "三级 3-2-1",
                },
              ],
            },
          ],
        },
      ],
      defaultProps: {
        children: "children",
        label: "label",
      },
    };
  },
  created() {
    allDosage().then((res) => {
      console.log(res);
      this.ylArr = res.data;
      this.ylArr.push({
        coding: "333",
        name: "十斤",
      });
    });
    // console.log(document.getElementsByClassName("app-container"));
    // this.$nextTick(() => {
    //   setTimeout(() => {
    //     this.screeheight =
    //       document.getElementsByClassName("app-container")[0].clientHeight;
    //   }, 0);
    // });
    // this.GetList();
    Promise.resolve().then(function promise1() {
      console.log("promise1");
    });
    setTimeout(function setTimeout1() {
      console.log("setTimeout1");
      Promise.resolve().then(function promise2() {
        console.log("promise2");
      });
    }, 0);

    setTimeout(function setTimeout2() {
      console.log("setTimeout2");
    }, 0);
    class Person {
      constructor(name, age) {
        this.name = name;
        this.age = age;
        this.height = "1米8";
      }
    }
    const p1 = new Person("章三", 18);
    p1.height = "2米";
    const p2 = new Person("里斯", 20);
    console.log(p1);
    console.log(p2);

    class Child extends Person {
      constructor(name, color) {
        super(name);
        this.color = color;
      }
    }
    const child1 = new Child("儿子1", "yellow");
    console.log(child1);
  },
  mounted() {
    console.log(this.$store);
    console.log(this.$router);
    this.$nextTick(() => {
      this.screeheight =
        document.getElementsByClassName("app-container")[0].clientHeight;
    });
  },
  methods: {
    handleNodeClick(data) {
      console.log(data);
    },
    submitUpload() {
      this.$refs.upload.submit();
    },
    handleRemove(file, fileList) {
      console.log(file, fileList);
    },
    handlePreview(file) {
      console.log(file);
    },
    GetList() {
      let param = {};
      param.Actived = this.fifter.Actived;
      param.pageSize = this.pageInfo.pageSize;
      param.pageIndex = this.pageInfo.pageIndex;
      api.Versions(param).then((res) => {
        this.pageInfo.Count = res.data.Data.Count;
        this.tableData = res.data.Data.List;
      });
    },
    selectActived(event) {
      this.fifter.Actived = event;
    },
    //页容量改变
    handleSizeChange(val) {
      this.pageInfo.pageSize = val;
      this.GetList();
    },
    //页改变
    handleCurrentChange(val) {
      this.pageInfo.pageIndex = val;
      this.GetList();
    },
    onSubmit() {
      this.GetList();
    },
    handleChange(file, fileList) {
      console.log(file);
      console.log(fileList);

      var testmsg = file.name.substring(file.name.lastIndexOf(".") + 1);
      const extension = testmsg === "zip";

      var bool = false;
      if (extension) {
        bool = true;
      } else {
        bool = false;
      }
      if (!extension) {
        this.fileList = [];
        return this.$confirm(`上传文件只能是zip格式!`);
      }

      return bool;
    },
    handleExceed() {
      this.$message.warning("每次只能上传一个文件");
    },
    beforeUpload(file) {
      console.log(file);
      var testmsg = file.name.substring(file.name.lastIndexOf(".") + 1);
      const extension = testmsg === "zip";

      var bool = false;
      if (extension) {
        bool = true;
      } else {
        bool = false;
      }
      if (!extension) {
        this.$confirm(`上传文件只能是zip格式!`);
      }
      return bool;
    },
    OnClick() {
      this.$refs.upload.submit();
      let self = this;
      let formData = new FormData();
      formData.append("Version", self.form.Version);
      formData.append("filedata", self.form.filedata);
      formData.append("Remark", self.form.Remark);
      console.log(allDepartment());
      // api.AddVersion(formData).then((res) => {
      //   if (res.Code == 0) {
      //     this.$message({
      //       type: "success",
      //       message: "添加成功",
      //     });
      //   } else {
      //     this.$message({
      //       type: "error",
      //       message: res.ErrorMessage,
      //     });
      //   }
      // });
    },
  },
};
</script>

<style>
.el-tree-node__content {
  padding-top: 5px;
  padding-bottom: 5px;
}
</style>