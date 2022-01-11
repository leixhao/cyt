<template>
  <div id="app">
    <!-- <Test /> -->
    <!-- <div style="width: 100px; background-color: green">
      123<i class="el-icon-download"></i>
    </div>
    <el-button @click="getData({}, msg.factoryInfo, [])">获取</el-button>
    <el-checkbox-group
      v-model="checkedCities"
      @change="handleCheckedCitiesChange"
    >
      <el-checkbox v-for="city in cities" :label="city" :key="city">
        <div style="width: 100px; background-color: green">
          123<i class="el-icon-download"></i>
        </div>
      </el-checkbox>
    </el-checkbox-group> -->
    <HelloWorld msg="Welcome to Your Vue.js App" />
    <!-- <Tabc :tabs="tabs" /> -->
    <!-- <EditTabs /> -->
    <!-- <Tablec /> -->
    <!-- <Other /> -->
    <!-- <Others /> -->
  </div>
</template>
<script>
import HelloWorld from "./components/HelloWorld.vue";
import Tabc from "./components/Tabc.vue";
import EditTabs from "./components/EditTabs.vue";
import Tablec from "./components/Tablec.vue";
import Test from "./components/Test.vue";
import Other from "./components/1.vue";
import Others from "./components/2.vue";
const cityOptions = ["上海", "北京", "广州", "深圳"];
export default {
  name: "App",
  components: {
    HelloWorld,
    Tabc,
    EditTabs,
    Tablec,
    Test,
    Other,
    Others
  },
  data() {
    return {
      left: 1,
      tabPosition: "left",
      tabs: ["用户管理萨达", "用户管理", "用户管理", "这是最长的了看这个"],
      checkAll: false,
      checkedCities: ["上海", "北京"],
      cities: cityOptions,
      isIndeterminate: true,
      visionList: [{ Version: "0.0.0.0" }],
      msg: {
        messageKey: "1637559580454",
        factoryInfo: [
          {
            factoryID: "HD",
            lineInfo: [
              {
                lineID: "HD-A",
                returnSiteInfo: [
                  {
                    siteCode: "HD-A-P1EE-G1A0901",
                    returnEquipmentInfo: [
                      {
                        equipmentID: "P1EE-G1A0901",
                        equipmentName: "华电负极涂布机",
                        returnParamterInfo: [
                          {
                            paramterCode: "01",
                            description: "CSDisConnect",
                            currentValue: "0",
                            uomCode: "",
                          },
                          {
                            paramterCode: "02",
                            description: "PLCDisconnect",
                            currentValue: "0",
                            uomCode: "",
                          },
                          {
                            paramterCode: "03",
                            description: "ComputerCPU",
                            currentValue: "0",
                            uomCode: "",
                          },
                          {
                            paramterCode: "04",
                            description: "ComputerMemory",
                            currentValue: "0%",
                            uomCode: "",
                          },
                          {
                            paramterCode: "05",
                            description: "ComputerHardSpace",
                            currentValue: "0GB",
                            uomCode: "",
                          },
                          {
                            paramterCode: "06",
                            description: "Vision",
                            currentValue: "1.0.0.3",
                            uomCode: "",
                          },
                        ],
                      },
                    ],
                  },
                  {
                    siteCode: "HD-A-P1EE-G1A1101",
                    returnEquipmentInfo: [
                      {
                        equipmentID: "P1EE-G1A1101",
                        equipmentName: "华电负极辊压机",
                        returnParamterInfo: [
                          {
                            paramterCode: "01",
                            description: "CSConnect",
                            currentValue: "1",
                            uomCode: "",
                          },
                          {
                            paramterCode: "02",
                            description: "PLCDisconnect",
                            currentValue: "0",
                            uomCode: "",
                          },
                          {
                            paramterCode: "03",
                            description: "ComputerCPU",
                            currentValue: "32%",
                            uomCode: "",
                          },
                          {
                            paramterCode: "04",
                            description: "ComputerMemory",
                            currentValue: "74.65%",
                            uomCode: "",
                          },
                          {
                            paramterCode: "05",
                            description: "ComputerHardSpace",
                            currentValue: "141.84GB",
                            uomCode: "",
                          },
                          {
                            paramterCode: "06",
                            description: "Vision",
                            currentValue: "1.0.0.2",
                            uomCode: "",
                          },
                        ],
                      },
                    ],
                  },
                  {
                    siteCode: "HD-A-P1EE-G1A1201",
                    returnEquipmentInfo: [
                      {
                        equipmentID: "P1EE-G1A1201",
                        equipmentName: "华电负极分切机",
                        returnParamterInfo: [
                          {
                            paramterCode: "01",
                            description: "CSDisConnect",
                            currentValue: "0",
                            uomCode: "",
                          },
                          {
                            paramterCode: "02",
                            description: "PLCDisconnect",
                            currentValue: "0",
                            uomCode: "",
                          },
                          {
                            paramterCode: "03",
                            description: "ComputerCPU",
                            currentValue: "0",
                            uomCode: "",
                          },
                          {
                            paramterCode: "04",
                            description: "ComputerMemory",
                            currentValue: "0%",
                            uomCode: "",
                          },
                          {
                            paramterCode: "05",
                            description: "ComputerHardSpace",
                            currentValue: "0GB",
                            uomCode: "",
                          },
                          {
                            paramterCode: "06",
                            description: "Vision",
                            currentValue: "1.0.0.2",
                            uomCode: "",
                          },
                        ],
                      },
                    ],
                  },
                ],
              },
              {
                lineID: "HD-C",
                returnSiteInfo: [
                  {
                    siteCode: "HD-C-P1EE-G1C1101",
                    returnEquipmentInfo: [
                      {
                        equipmentID: "P1EE-G1C1101",
                        equipmentName: "华电正极辊压机",
                        returnParamterInfo: [
                          {
                            paramterCode: "01",
                            description: "CSDisConnect",
                            currentValue: "0",
                            uomCode: "",
                          },
                          {
                            paramterCode: "02",
                            description: "PLCDisconnect",
                            currentValue: "0",
                            uomCode: "",
                          },
                          {
                            paramterCode: "03",
                            description: "ComputerCPU",
                            currentValue: "0",
                            uomCode: "",
                          },
                          {
                            paramterCode: "04",
                            description: "ComputerMemory",
                            currentValue: "0%",
                            uomCode: "",
                          },
                          {
                            paramterCode: "05",
                            description: "ComputerHardSpace",
                            currentValue: "0GB",
                            uomCode: "",
                          },
                          {
                            paramterCode: "06",
                            description: "Vision",
                            currentValue: "1.0.0.2",
                            uomCode: "",
                          },
                        ],
                      },
                    ],
                  },
                  {
                    siteCode: "HD-C-P1EE-G1C1201",
                    returnEquipmentInfo: [
                      {
                        equipmentID: "P1EE-G1C1201",
                        equipmentName: "华电正极分切机",
                        returnParamterInfo: [
                          {
                            paramterCode: "01",
                            description: "CSDisConnect",
                            currentValue: "0",
                            uomCode: "",
                          },
                          {
                            paramterCode: "02",
                            description: "PLCDisconnect",
                            currentValue: "0",
                            uomCode: "",
                          },
                          {
                            paramterCode: "03",
                            description: "ComputerCPU",
                            currentValue: "0",
                            uomCode: "",
                          },
                          {
                            paramterCode: "04",
                            description: "ComputerMemory",
                            currentValue: "0%",
                            uomCode: "",
                          },
                          {
                            paramterCode: "05",
                            description: "ComputerHardSpace",
                            currentValue: "0GB",
                            uomCode: "",
                          },
                          {
                            paramterCode: "06",
                            description: "Vision",
                            currentValue: "1.0.0.2",
                            uomCode: "",
                          },
                        ],
                      },
                    ],
                  },
                ],
              },
            ],
          },
          {
            factoryID: "CPEC01",
            lineInfo: [
              {
                lineID: "LFP01",
                returnSiteInfo: [
                  {
                    siteCode: "LFP01-P1AE-R1C1401",
                    returnEquipmentInfo: [
                      {
                        equipmentID: "P1AE-R1C1401",
                        equipmentName: "负极激光模切机",
                        returnParamterInfo: [
                          {
                            paramterCode: "01",
                            description: "CSDisConnect",
                            currentValue: "0",
                            uomCode: "",
                          },
                          {
                            paramterCode: "02",
                            description: "PLCDisconnect",
                            currentValue: "0",
                            uomCode: "",
                          },
                          {
                            paramterCode: "03",
                            description: "ComputerCPU",
                            currentValue: "0",
                            uomCode: "",
                          },
                          {
                            paramterCode: "04",
                            description: "ComputerMemory",
                            currentValue: "0%",
                            uomCode: "",
                          },
                          {
                            paramterCode: "05",
                            description: "ComputerHardSpace",
                            currentValue: "0GB",
                            uomCode: "",
                          },
                          {
                            paramterCode: "06",
                            description: "Vision",
                            currentValue: "1.0.0.0",
                            uomCode: "",
                          },
                        ],
                      },
                    ],
                  },
                  {
                    siteCode: "LFP01-P1AE-R1A1401",
                    returnEquipmentInfo: [
                      {
                        equipmentID: "P1AE-R1A1401",
                        equipmentName: "正极激光模切机",
                        returnParamterInfo: [
                          {
                            paramterCode: "01",
                            description: "CSDisConnect",
                            currentValue: "0",
                            uomCode: "",
                          },
                          {
                            paramterCode: "02",
                            description: "PLCDisconnect",
                            currentValue: "0",
                            uomCode: "",
                          },
                          {
                            paramterCode: "03",
                            description: "ComputerCPU",
                            currentValue: "0",
                            uomCode: "",
                          },
                          {
                            paramterCode: "04",
                            description: "ComputerMemory",
                            currentValue: "0%",
                            uomCode: "",
                          },
                          {
                            paramterCode: "05",
                            description: "ComputerHardSpace",
                            currentValue: "0GB",
                            uomCode: "",
                          },
                          {
                            paramterCode: "06",
                            description: "Vision",
                            currentValue: "1.0.0.0",
                            uomCode: "",
                          },
                        ],
                      },
                    ],
                  },
                  {
                    siteCode: "LFP01-P1AE-R1G2A01",
                    returnEquipmentInfo: [
                      {
                        equipmentID: "P1AE-R1G2A01",
                        equipmentName: "卷绕机A",
                        returnParamterInfo: [
                          {
                            paramterCode: "01",
                            description: "CSDisConnect",
                            currentValue: "0",
                            uomCode: "",
                          },
                          {
                            paramterCode: "02",
                            description: "PLCDisconnect",
                            currentValue: "0",
                            uomCode: "",
                          },
                          {
                            paramterCode: "03",
                            description: "ComputerCPU",
                            currentValue: "0",
                            uomCode: "",
                          },
                          {
                            paramterCode: "04",
                            description: "ComputerMemory",
                            currentValue: "0%",
                            uomCode: "",
                          },
                          {
                            paramterCode: "05",
                            description: "ComputerHardSpace",
                            currentValue: "0GB",
                            uomCode: "",
                          },
                          {
                            paramterCode: "06",
                            description: "Vision",
                            currentValue: "1.0.0.2",
                            uomCode: "",
                          },
                        ],
                      },
                    ],
                  },
                  {
                    siteCode: "LFP01-P1AE-R1G2A02",
                    returnEquipmentInfo: [
                      {
                        equipmentID: "P1AE-R1G2A02",
                        equipmentName: "卷绕机B",
                        returnParamterInfo: [
                          {
                            paramterCode: "01",
                            description: "CSDisConnect",
                            currentValue: "0",
                            uomCode: "",
                          },
                          {
                            paramterCode: "02",
                            description: "PLCDisconnect",
                            currentValue: "0",
                            uomCode: "",
                          },
                          {
                            paramterCode: "03",
                            description: "ComputerCPU",
                            currentValue: "0",
                            uomCode: "",
                          },
                          {
                            paramterCode: "04",
                            description: "ComputerMemory",
                            currentValue: "0%",
                            uomCode: "",
                          },
                          {
                            paramterCode: "05",
                            description: "ComputerHardSpace",
                            currentValue: "0GB",
                            uomCode: "",
                          },
                          {
                            paramterCode: "06",
                            description: "Vision",
                            currentValue: "1.0.0.2",
                            uomCode: "",
                          },
                        ],
                      },
                    ],
                  },
                ],
              },
              {
                lineID: "NCM01",
                returnSiteInfo: [
                  {
                    siteCode: "NCM01-P1AE-P1A1601",
                    returnEquipmentInfo: [
                      {
                        equipmentID: "P1AE-P1A1601",
                        equipmentName: "负极激光模切机",
                        returnParamterInfo: [
                          {
                            paramterCode: "01",
                            description: "CSDisConnect",
                            currentValue: "0",
                            uomCode: "",
                          },
                          {
                            paramterCode: "02",
                            description: "PLCDisconnect",
                            currentValue: "0",
                            uomCode: "",
                          },
                          {
                            paramterCode: "03",
                            description: "ComputerCPU",
                            currentValue: "0",
                            uomCode: "",
                          },
                          {
                            paramterCode: "04",
                            description: "ComputerMemory",
                            currentValue: "0%",
                            uomCode: "",
                          },
                          {
                            paramterCode: "05",
                            description: "ComputerHardSpace",
                            currentValue: "0GB",
                            uomCode: "",
                          },
                          {
                            paramterCode: "06",
                            description: "Vision",
                            currentValue: "1.0.0.2",
                            uomCode: "",
                          },
                        ],
                      },
                    ],
                  },
                ],
              },
              {
                lineID: "电极01",
                returnSiteInfo: [
                  {
                    siteCode: "电极01-P1AE-P1A1F01",
                    returnEquipmentInfo: [
                      {
                        equipmentID: "P1AE-P1A1F01",
                        equipmentName: "负极涂布机",
                        returnParamterInfo: [
                          {
                            paramterCode: "01",
                            description: "CSDisConnect",
                            currentValue: "0",
                            uomCode: "",
                          },
                          {
                            paramterCode: "02",
                            description: "PLCDisconnect",
                            currentValue: "0",
                            uomCode: "",
                          },
                          {
                            paramterCode: "03",
                            description: "ComputerCPU",
                            currentValue: "0",
                            uomCode: "",
                          },
                          {
                            paramterCode: "04",
                            description: "ComputerMemory",
                            currentValue: "0%",
                            uomCode: "",
                          },
                          {
                            paramterCode: "05",
                            description: "ComputerHardSpace",
                            currentValue: "0GB",
                            uomCode: "",
                          },
                          {
                            paramterCode: "06",
                            description: "Vision",
                            currentValue: "1.0.0.2",
                            uomCode: "",
                          },
                        ],
                      },
                    ],
                  },
                  {
                    siteCode: "电极01-P1AE-P1C1F01",
                    returnEquipmentInfo: [
                      {
                        equipmentID: "P1AE-P1C1F01",
                        equipmentName: "正极涂布机",
                        returnParamterInfo: [
                          {
                            paramterCode: "01",
                            description: "CSDisConnect",
                            currentValue: "0",
                            uomCode: "",
                          },
                          {
                            paramterCode: "02",
                            description: "PLCDisconnect",
                            currentValue: "0",
                            uomCode: "",
                          },
                          {
                            paramterCode: "03",
                            description: "ComputerCPU",
                            currentValue: "0",
                            uomCode: "",
                          },
                          {
                            paramterCode: "04",
                            description: "ComputerMemory",
                            currentValue: "0%",
                            uomCode: "",
                          },
                          {
                            paramterCode: "05",
                            description: "ComputerHardSpace",
                            currentValue: "0GB",
                            uomCode: "",
                          },
                          {
                            paramterCode: "06",
                            description: "Vision",
                            currentValue: "1.0.0.2",
                            uomCode: "",
                          },
                        ],
                      },
                    ],
                  },
                  {
                    siteCode: "电极01-P1AE-P1A1A01",
                    returnEquipmentInfo: [
                      {
                        equipmentID: "P1AE-P1A1A01",
                        equipmentName: "负极辊压机",
                        returnParamterInfo: [
                          {
                            paramterCode: "01",
                            description: "CSDisConnect",
                            currentValue: "0",
                            uomCode: "",
                          },
                          {
                            paramterCode: "02",
                            description: "PLCDisconnect",
                            currentValue: "0",
                            uomCode: "",
                          },
                          {
                            paramterCode: "03",
                            description: "ComputerCPU",
                            currentValue: "0",
                            uomCode: "",
                          },
                          {
                            paramterCode: "04",
                            description: "ComputerMemory",
                            currentValue: "0%",
                            uomCode: "",
                          },
                          {
                            paramterCode: "05",
                            description: "ComputerHardSpace",
                            currentValue: "0GB",
                            uomCode: "",
                          },
                          {
                            paramterCode: "06",
                            description: "Vision",
                            currentValue: "1.0.0.2",
                            uomCode: "",
                          },
                        ],
                      },
                    ],
                  },
                  {
                    siteCode: "电极01-P1AE-P1C1A01",
                    returnEquipmentInfo: [
                      {
                        equipmentID: "P1AE-P1C1A01",
                        equipmentName: "正极辊压机",
                        returnParamterInfo: [
                          {
                            paramterCode: "01",
                            description: "CSDisConnect",
                            currentValue: "0",
                            uomCode: "",
                          },
                          {
                            paramterCode: "02",
                            description: "PLCDisconnect",
                            currentValue: "0",
                            uomCode: "",
                          },
                          {
                            paramterCode: "03",
                            description: "ComputerCPU",
                            currentValue: "0",
                            uomCode: "",
                          },
                          {
                            paramterCode: "04",
                            description: "ComputerMemory",
                            currentValue: "0%",
                            uomCode: "",
                          },
                          {
                            paramterCode: "05",
                            description: "ComputerHardSpace",
                            currentValue: "0GB",
                            uomCode: "",
                          },
                          {
                            paramterCode: "06",
                            description: "Vision",
                            currentValue: "1.0.0.2",
                            uomCode: "",
                          },
                        ],
                      },
                    ],
                  },
                ],
              },
            ],
          },
        ],
      },
    };
  },
  methods: {
    getChild(obj, arr, newArr) {
      console.log(obj.equipmentName)
      console.log(arr)
      console.log(newArr)
      let neObj = JSON.parse(JSON.stringify(obj));
      arr.forEach((element) => {
        // console.log(element);
        if (element.factoryID) {
          obj.FACTOYR_ID = element.factoryID;
          console.log(obj)
          this.getChild(neObj, element.lineInfo, newArr);
        } else if (element.lineID) {
          console.log(obj)
          obj.LINE_ID = element.lineID;
          this.getChild(neObj, element.returnSiteInfo, newArr);
        } else if (element.siteCode) {
          console.log(obj)
          this.getChild(neObj, element.returnEquipmentInfo, newArr);
        } else {
          (neObj.title = element.equipmentID),
            (neObj.wbL = element.returnParamterInfo[2].currentValue),
            (neObj.wbR = element.returnParamterInfo[3].currentValue),
            (neObj.div1 = element.returnParamterInfo[0].description),
            (neObj.div2 = element.returnParamterInfo[1].description),
            (neObj.div3 = element.returnParamterInfo[4].currentValue),
            (neObj.div4 = element.returnParamterInfo[5].currentValue),
            (neObj.CL = "background:#1d9745"),
            (neObj.CR = "background:#88d478"),
            (neObj.Bdiv1 =
              element.returnParamterInfo[0].currentValue === "0"
                ? "background:#B33737"
                : "background:#9ED583"),
            (neObj.Bdiv2 =
              element.returnParamterInfo[1].currentValue === "0"
                ? "background:#B33737"
                : "background:#9ED583"),
            (neObj.Bdiv3 = "background:#67C23A"),
            (neObj.Bdiv4 =
              this.visionList[0].Version >
              element.returnParamterInfo[5].currentValue
                ? "background:#F4AE46"
                : "background:#67C23A"),
            (neObj.Sdiv4 =
              this.visionList[0].Version >
              element.returnParamterInfo[5].currentValue
                ? true
                : false);
          neObj.EQP_ID = element.equipmentID;
          neObj.equipmentName = element.equipmentName;
          newArr.push(neObj);
          return newArr
        }
      });
      return newArr
    },
    getData(obj, arr, newArr) {
      let arrA = this.getChild(obj, arr, newArr)
      console.log(arrA)
    },
    handleCheckAllChange(val) {
      this.checkedCities = val ? cityOptions : [];
      this.isIndeterminate = false;
    },
    handleCheckedCitiesChange(value) {
      let checkedCount = value.length;
      this.checkAll = checkedCount === this.cities.length;
      this.isIndeterminate =
        checkedCount > 0 && checkedCount < this.cities.length;
    },
  },
};
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
html,
body {
  margin: 0;
  padding: 0;
  /* background: #c5b084; */
  font-size: 14px;
}
.el-tabs--left .el-tabs__item.is-left {
  width: 125px;
  white-space: normal;
  word-break: break-word;
}
.el-tabs--left .el-tabs__item.is-left {
  width: 100px;
  white-space: normal;
  word-break: break-word;
}
</style>
