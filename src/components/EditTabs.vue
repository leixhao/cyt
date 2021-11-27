<template>
  <div>
    <!-- 注意这里的    
    @keydown.native.delete.capture.stop
    这个是因为eltabs这个组件的@tab-remove方法中包含了键盘删除按钮(backspace)事件,触发removeTab方法
    这会让下面的修改框输入内容的删除事件被阻断，具体现象可以去掉@keydown.native.delete.capture.stop这行代码查看
     -->
    <el-tabs
      v-model="editableTabsValue"
      type="card"
      closable
      @tab-remove="removeTab"
      @keydown.native.delete.capture.stop
    >
      <el-tab-pane
        v-for="(item, index) in editableTabs"
        :key="item.name"
        :name="item.name"
      >
        <!-- slot插槽可以自定义 -->
        <span
          slot="label"
          @dblclick="editTab(item.title, index)"
          v-show="!(showIndex == index)"
          >{{ item.title }}</span
        >
        <!-- 双击时显示修改框 -->
        <span slot="label" v-show="showIndex == index"
          ><el-input
            v-model="editName"
            ref="inputVal"
            size="mini"
            @keyup.enter.native="changeTabs"
            @blur="blurTab"
          ></el-input
        ></span>
        {{ item.content }}
      </el-tab-pane>
    </el-tabs>
  </div>
</template>

<script>
export default {
  name: "EditTabs",
  data() {
    return {
      editableTabsValue: "2",
      editableTabs: [
        {
          title: "Tab 1",
          name: "1",
          content: "Tab 1 content",
        },
        {
          title: "Tab 2",
          name: "2",
          content: "Tab 2 content",
        },
      ],
      tabIndex: 2,
      input: "",
      showIndex: null,
      editName: "",
    };
  },
  methods: {
    blurTab() {
      // 失焦事件，修改框失去焦点时触发
      this.showIndex = null;
      this.editName = "";
    },
    changeTabs() {
      // 修改方法
      this.editableTabs[this.showIndex].title = this.editName;
      this.blurTab();
    },
    editTab(name, index) {
      // 设置隐藏label，并显示修改框
      this.showIndex = index;
      this.editName = name;
      // 设置input自动获取焦点，与失焦事件对应
      // this.$nextTick(()=>{
      // 这里按理说nectTick之后页面元素已经绘画完成了，不知道为啥没有自动获取焦点，可能是input尚未显示完成？
      setTimeout(() => {
        this.$refs.inputVal[index].focus();
      }, 0);
      // })
    },
    removeTab(targetName) {
      console.log(123)
      let tabs = this.editableTabs;
      let activeName = this.editableTabsValue;
      if (activeName === targetName) {
        tabs.forEach((tab, index) => {
          if (tab.name === targetName) {
            let nextTab = tabs[index + 1] || tabs[index - 1];
            if (nextTab) {
              activeName = nextTab.name;
            }
          }
        });
      }

      this.editableTabsValue = activeName;
      this.editableTabs = tabs.filter((tab) => tab.name !== targetName);
    },
  },
};
</script>

<style>
</style>