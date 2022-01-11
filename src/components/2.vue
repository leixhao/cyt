<template>
  <el-card shadow="never" :body-style="{ padding: '20px 0px 20px 20px' }">
    <div style="margin-bottom: 10px">
      <span style="margin-right: 5px">showLabelLine</span>
      <el-switch v-model="treeProps['showLabelLine']"></el-switch>
      <span style="margin-left: 20px; margin-right: 5px">indent</span>
      <el-input-number v-model="treeProps['indent']"></el-input-number>
    </div>
    <el-tree
      ref="tree"
      :data="data"
      draggable=""
      node-key="id"
      :default-expanded-keys="[2, 3]"
      :default-checked-keys="[5]"
      :props="defaultProps"
      :indent="treeProps['indent']"
    >
      <template v-slot:default="{ node }">
        <element-tree-line
          :node="node"
          :showLabelLine="treeProps['showLabelLine']"
          :indent="treeProps['indent']"
        >
          <!-- 自定义label的slot -->
          <!-- <template slot-scope="node">
            {{node}}
          </template> -->
          <template v-slot:node-label>
            <span style="font-size: 12px">
              <i v-if="node.data.children" class="el-icon-office-building"></i>
              <i v-else class="el-icon-warning"></i>
              <!-- {{ node.data.children? '1': '2' }} -->
              {{ node.label }}
            </span>
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
  </el-card>
</template>
<script>
// import ElementTreeLine from "element-tree-line";
// import "element-tree-line/dist/style.css";
export default {
  // components: { ElementTreeLine },
  methods:{
    openDrawer(e){
      console.log(e)
    }
  },
  data() {
    return {
      treeProps: {
        indent: 16,
        showLabelLine: true,
      },
      data: [
        {
          id: 1,
          label: "一级 1",
          children: [
            {
              id: 4,
              label: "二级 1-1",
              children: [
                {
                  id: 9,
                  label: "三级 1-1-1",
                },
                {
                  id: 10,
                  label: "三级 1-1-2",
                },
              ],
            },
            {
              id: 9000,
              label: "二级 1-2",
            },
          ],
        },
        {
          id: 2,
          label: "一级 2",
          children: [
            {
              id: 5,
              label: "二级 2-1",
            },
            {
              id: 6,
              label: "二级 2-2",
            },
          ],
        },
        {
          id: 3,
          label: "一级 3",
          children: [
            {
              id: 7,
              label: "二级 3-1",
            },
            {
              id: 8,
              label: "二级 3-2",
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
};
</script>
<style >
.el-tree-node__content {
  padding-top: 5px;
  padding-bottom: 5px;
}
</style>
