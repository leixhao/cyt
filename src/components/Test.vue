<template>
  <div>
    <!-- <el-button @click="getData({}, msg.factoryInfo, [])">获取</el-button> -->
    <el-checkbox-group
      v-model="checkedCities"
      @change="handleCheckedCitiesChange"
    >
      <el-checkbox v-for="item in endArr" :label="item" :key="item">
        <div
          @contextmenu.prevent="
            (e) => {
              rightClick(e, item);
            }
          "
        >
          <All
            name="app"
            :prop="item"
            style="
              float: left;
              margin-left: 6px;
              margin-top: 6px;
              flex-direction: row;
              // 自动换行
              flex-wrap: wrap;
            "
          >
          </All>
        </div>
      </el-checkbox>
    </el-checkbox-group>
  </div>
</template>

<script>
import All from "./one.vue";
export default {
  name: "Test",
  components: {
    All,
  },
  mounted() {
    this.getData({}, this.msg.factoryInfo, []);
  },
  data() {
    return {
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
      endArr: [],
      checkedCities: [],
    };
  },
  methods: {
    getChild(obj, arr, newArr) {
      console.log(obj.equipmentName);
      console.log(arr);
      console.log(newArr);
      let newObj = JSON.parse(JSON.stringify(obj));
      arr.forEach((element) => {
        // console.log(element);
        if (element.factoryID) {
          newObj.FACTOYR_ID = element.factoryID;
          console.log(obj);
          this.getChild(newObj, element.lineInfo, newArr);
        } else if (element.lineID) {
          console.log(obj);
          newObj.LINE_ID = element.lineID;
          this.getChild(newObj, element.returnSiteInfo, newArr);
        } else if (element.siteCode) {
          console.log(obj);
          newObj.SessionId = element.siteCode;
          this.getChild(newObj, element.returnEquipmentInfo, newArr);
        } else {
          (newObj.title = element.equipmentID),
            (newObj.wbL = element.returnParamterInfo[2].currentValue),
            (newObj.wbR = element.returnParamterInfo[3].currentValue),
            (newObj.div1 = element.returnParamterInfo[0].description),
            (newObj.div2 = element.returnParamterInfo[1].description),
            (newObj.div3 = element.returnParamterInfo[4].currentValue),
            (newObj.div4 = element.returnParamterInfo[5].currentValue),
            (newObj.CL = "background:#1d9745"),
            (newObj.CR = "background:#88d478"),
            (newObj.Bdiv1 =
              element.returnParamterInfo[0].currentValue === "0"
                ? "background:#B33737"
                : "background:#9ED583"),
            (newObj.Bdiv2 =
              element.returnParamterInfo[1].currentValue === "0"
                ? "background:#B33737"
                : "background:#9ED583"),
            (newObj.Bdiv3 = "background:#67C23A"),
            (newObj.Bdiv4 =
              this.visionList[0].Version >
              element.returnParamterInfo[5].currentValue
                ? "background:#F4AE46"
                : "background:#67C23A"),
            (newObj.Sdiv4 =
              this.visionList[0].Version >
              element.returnParamterInfo[5].currentValue
                ? true
                : false);
          newObj.EQP_ID = element.equipmentID;
          newObj.equipmentName = element.equipmentName;
          newArr.push(newObj);
          return newArr;
        }
      });
      return newArr;
    },
    getData(obj, arr, newArr) {
      let arrA = this.getChild(obj, arr, newArr);
      //最后取出来的数据
      this.endArr = arrA;
      console.log(arrA);
    },
    handleCheckedCitiesChange(val) {
      console.log(val);
      let arr = this.endArr.filter(item => item.LINE_ID == "LFP01")
      console.log(arr)
      if(val.length){
        let arr = val.map(item =>{
          let obj = {
            SessionId: item.SessionId,
            FACTOYR_ID: item.FACTOYR_ID,
            LINE_ID: item.LINE_ID,
            EQP_ID: item.EQP_ID,
          };
          return obj
        })
        console.log(arr)
      }
    },
    //选中的设备的右键菜单栏的事件
    rightClick(e, item) {
      if (item.id == "1") {
        this.flag = true;
      } else {
        this.flag = false;
      }
      console.log(item);
      // 屏幕可见宽
      let clientWidth = document.body.clientWidth;
      // 菜单宽
      let menuWidth = 140;
      // 点击右键时会返回对应的clientX，用这个值与(clientWidth+菜单宽度)对比，如果大于的话，就把菜单左偏移一个菜单宽
      let clickClientX = e.clientX + menuWidth;
      if (clickClientX > clientWidth) {
        console.log("菜单超出视线范围");
        this.x_index = e.layerX;
      } else {
        this.x_index = e.layerX + menuWidth * 2.5;
      }
      this.y_index = e.layerY + 50;
      this.ctrlId = item.id;
      this.showMenu = true;

      this.paramlist = [];

      this.paramlist.push(item);
    },
  },
};
</script>

<style>
</style>