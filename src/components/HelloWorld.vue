<template>
  <div class="login">
    <div class="hello">
      <div class="dome1" id="yiyuan">
        <div class="dome2">医院信息</div>
        <div class="dome3">
          <div class="dome4">就诊医院编码</div>
          <div class="dome5">
            <!-- <input type="text" name="A01C" /> -->
            <el-input v-model="subData.A01C"></el-input>
          </div>
        </div>
        <div class="dome3">
          <div class="dome4">就诊医院名称</div>
          <div class="dome5">
            <!-- <input type="text" name="A01N" /> -->
            <el-input v-model="subData.A01N"></el-input>
          </div>
        </div>
      </div>
    </div>
    <div class="dome1" id="jiben">
      <div class="dome2">基本信息</div>
      <div class="dome3">
        <div class="dome4">患者编码类型</div>
        <div class="dome5">
          <!-- <SELECT name="B01C">
            <OPTION value="1">北京市医保</OPTION>
            <OPTION value="2">外地医保</OPTION>
            <OPTION value="3">北京市公费医疗</OPTION>
            <OPTION value="4">外地公费医疗</OPTION>
            <OPTION value="5">北京市非医保</OPTION>
            <OPTION value="6" selected>外地非医保</OPTION>
          </SELECT> -->
          <el-select v-model="subData.B01C" clearable placeholder="请选择">
            <el-option
              v-for="item in ybArr"
              :key="item.label"
              :label="item.label"
              :value="item.value"
            >
            </el-option>
          </el-select>
        </div>
      </div>
      <div class="dome3">
        <div class="dome4">患者编码</div>
        <div class="dome5">
          <!-- <input
            type="text"
            name="B02"
            placeholder="医保患者必须填写医保卡号"
          /> -->
          <el-input v-model="subData.B02"></el-input>
        </div>
      </div>
      <div class="dome3">
        <div class="dome4">姓名</div>
        <div class="dome5">
          <!-- <input type="text" name="B03C" /> -->
          <el-input v-model="subData.B03C"></el-input>
        </div>
      </div>
      <div class="dome3">
        <div class="dome4">性别</div>
        <div class="dome5">
          <!-- <SELECT name="B04C">
            <OPTION value="0">未知的性别</OPTION>
            <OPTION value="1">男性</OPTION>
            <OPTION value="2">女性</OPTION>
            <OPTION value="3">未说明的性别</OPTION>
          </SELECT> -->
          <el-select v-model="subData.B04C" clearable placeholder="请选择">
            <el-option
              v-for="item in sexArr"
              :key="item.label"
              :label="item.label"
              :value="item.value"
            >
            </el-option>
          </el-select>
        </div>
      </div>
      <div class="dome3">
        <div class="dome4">出生日期</div>
        <div class="dome5">
          <!-- <input id="meeting" name="B05C" type="date" value="" /> -->
          <el-date-picker
            v-model="subData.B05C"
            type="date"
            placeholder="选择日期"
          >
          </el-date-picker>
        </div>
      </div>
      <div class="dome3">
        <div class="dome4">证件类型</div>
        <div class="dome5">
          <!-- <SELECT name="B06C">
            <OPTION value="1">居民身份证</OPTION>
            <OPTION value="2">中国人民解放军军人证</OPTION>
            <OPTION value="3">中国人民武装警察身份证</OPTION>
            <OPTION value="4">港澳居民来往大陆通行证</OPTION>
            <OPTION value="5">台湾居民来往大陆通行证</OPTION>
            <OPTION value="6">护照</OPTION>
            <OPTION value="7">机动车驾驶证</OPTION>
            <OPTION value="8">儿童证件</OPTION>
          </SELECT> -->
          <el-select v-model="subData.B06C" clearable placeholder="请选择">
            <el-option
              v-for="item in zjArr"
              :key="item.label"
              :label="item.label"
              :value="item.value"
            >
            </el-option>
          </el-select>
        </div>
      </div>

      <div class="dome3">
        <div class="dome4">证件号码</div>
        <div class="dome5">
          <!-- <input type="text" name="B07C" /> -->
          <el-input v-model="subData.B07C"></el-input>
        </div>
      </div>
      <div class="dome3">
        <div class="dome4">民族</div>
        <div class="dome5">
          <el-select v-model="subData.B08C" clearable placeholder="请选择">
            <el-option
              v-for="item in nationArr"
              :key="item.id"
              :label="item.name"
              :value="item.name"
            >
            </el-option>
          </el-select>
        </div>
      </div>

      <div class="dome3">
        <div class="dome4">国籍</div>
        <div class="dome5">
          <!-- <SELECT name="B09C">
            <OPTION value="1">中国</OPTION>
            <OPTION value="2">外籍</OPTION>
          </SELECT> -->
          <el-select v-model="subData.B09C" clearable placeholder="请选择">
            <el-option
              v-for="item in gjArr"
              :key="item.id"
              :label="item.name"
              :value="item.name"
            >
            </el-option>
          </el-select>
        </div>
      </div>

      <div class="dome3">
        <div class="dome4">婚姻状况</div>
        <div class="dome5">
          <!-- <SELECT name="B10C">
            <OPTION value=""></OPTION>
            <OPTION value="1">未婚</OPTION>
            <OPTION value="2">已婚</OPTION>
            <OPTION value="3">丧偶</OPTION>
            <OPTION value="4">离婚</OPTION>
          </SELECT> -->
          <el-select v-model="subData.B10C" clearable placeholder="请选择">
            <el-option
              v-for="item in marryArr"
              :key="item.label"
              :label="item.label"
              :value="item.value"
            >
            </el-option>
          </el-select>
        </div>
      </div>
      <div class="dome3">
        <div class="dome4">工作单位</div>
        <div class="dome5">
          <!-- <input type="text" name="B11" /> -->
          <el-input v-model="subData.B11"></el-input>
        </div>
      </div>
      <div class="dome3">
        <div class="dome4">现居住详细地址</div>
        <div class="dome5">
          <!-- <input type="text" placeholder="（居住半年以上）" name="B12" /> -->
          <el-input
            v-model="subData.B12"
            placeholder="（居住半年以上）"
          ></el-input>
        </div>
      </div>
      <div class="dome3">
        <div class="dome4">现住址行政区划编码</div>
        <div class="dome5">
          <el-select v-model="subData.B13C" clearable placeholder="请选择">
            <el-option
              v-for="item in areaCodingArr"
              :key="item.id"
              :label="item.name"
              :value="item.name"
            >
            </el-option>
          </el-select>
        </div>
      </div>
      <div class="dome3">
        <div class="dome4">联系人姓名</div>
        <div class="dome5">
          <!-- <input type="text" name="B14" /> -->
          <el-input v-model="subData.B14"></el-input>
        </div>
      </div>
      <div class="dome3">
        <div class="dome4">联系人身份证号</div>
        <div class="dome5">
          <!-- <input type="text" name="B15" /> -->
          <el-input v-model="subData.B15"></el-input>
        </div>
      </div>

      <div class="dome3">
        <div class="dome4">联系人电话</div>
        <div class="dome5">
          <!-- <input type="text" name="B16" /> -->
          <el-input v-model="subData.B16"></el-input>
        </div>
      </div>
      <div class="dome3">
        <div class="dome4">监护人姓名</div>
        <div class="dome5">
          <!-- <input type="text" name="B17" /> -->
          <el-input v-model="subData.B17"></el-input>
        </div>
      </div>
      <div class="dome3">
        <div class="dome4">监护人联系方式</div>
        <div class="dome5">
          <!-- <input type="text" name="B18" /> -->
          <el-input v-model="subData.B18"></el-input>
        </div>
      </div>
    </div>

    <div class="dome1" id="jiuzhen">
      <div class="dome2">就诊信息</div>
      <div class="dome3">
        <div class="dome4">就诊流水号</div>
        <div class="dome5">
          <!-- <input type="text" name="C01" /> -->
          <el-input v-model="subData.C01"></el-input>
        </div>
      </div>
      <div class="dome3">
        <div class="dome4">挂号类别</div>
        <div class="dome5">
          <!-- <SELECT name="C02C">
            <OPTION value="1">普通医师</OPTION>
            <OPTION value="2">副主任医师</OPTION>
            <OPTION value="3">主任医师</OPTION>
            <OPTION value="4">知名专家</OPTION>
            <OPTION value="5">特需</OPTION>
            <OPTION value="6">体检</OPTION>
            <OPTION value="7">急诊</OPTION>
            <OPTION value="8">其他</OPTION>
          </SELECT> -->
          <el-select v-model="subData.C02C" clearable placeholder="请选择">
            <el-option
              v-for="item in registerArr"
              :key="item.label"
              :label="item.label"
              :value="item.value"
            >
            </el-option>
          </el-select>
        </div>
      </div>
      <div class="dome3">
        <div class="dome4">挂号时间</div>
        <div class="dome5">
          <!-- <input type="datetime-local" step="01" name="C03" /> -->
          <el-date-picker
            v-model="putData.C03"
            type="datetime"
            placeholder="选择日期时间"
          >
          </el-date-picker>
        </div>
      </div>

      <div class="dome3">
        <div class="dome4">诊疗类型</div>
        <div class="dome5">
          <!-- <SELECT name="C04C">
            <OPTION value="1">复诊</OPTION>
            <OPTION value="2">会诊</OPTION>
          </SELECT> -->
          <el-select v-model="subData.C04C" clearable placeholder="请选择">
            <el-option
              v-for="item in treatmentArr"
              :key="item.label"
              :label="item.label"
              :value="item.value"
            >
            </el-option>
          </el-select>
        </div>
      </div>
      <div class="dome3">
        <div class="dome4">发起会诊的医院名称</div>
        <div class="dome5">
          <!-- <input type="text" name="C05" /> -->
          <el-input v-model="subData.C05"></el-input>
        </div>
      </div>
      <div class="dome3">
        <div class="dome4">是否有专业医师陪伴</div>
        <div class="dome5">
          <!-- <input type="text" name="C06C" /> -->
          <el-input v-model="subData.C06C"></el-input>
        </div>
      </div>
      <div class="dome3">
        <div class="dome4">陪伴医师的身份证号</div>
        <div class="dome5">
          <!-- <input type="text" name="C07" /> -->
          <el-input v-model="subData.C07" type="number"></el-input>
        </div>
      </div>
      <div class="dome3">
        <div class="dome4">就诊时间</div>
        <div class="dome5">
          <!-- <input type="datetime-local" step="01" name="C08" /> -->
          <el-date-picker
            v-model="putData.C08"
            type="datetime"
            placeholder="选择日期时间"
          >
          </el-date-picker>
        </div>
      </div>

      <!-- <div class="dome3">
        <div class="dome4">就诊科室编码</div>
        <div class="dome5">
          <el-cascader
            v-model="departmentName"
            size="mini"
            :options="departmentArr"
            :props="{ label: 'department', value: 'coding' }"
            @change="handleChange"
          ></el-cascader>
        </div>
      </div> -->

      <div class="dome3">
        <div class="dome4">就诊科室名称</div>
        <div class="dome5">
          <!-- <input type="text" name="fname" /> -->
          <el-cascader
            v-model="departmentName"
            size="mini"
            :options="departmentArr"
            :props="{ label: 'department', value: 'coding' }"
            @change="handleChange"
          ></el-cascader>
        </div>
      </div>
      <!-- <div class="dome3">
        <div class="dome4">医院内部科室代码</div>
        <div class="dome5"><input type="text" name="fname" /></div>
      </div>
      <div class="dome3">
        <div class="dome4">医院内部科室名称</div>
        <div class="dome5"><input type="text" name="fname" /></div>
      </div> -->
      <div class="dome3">
        <div class="dome4">诊治医师执业证书编号</div>
        <div class="dome5">
          <!-- <input type="text" name="fname" /> -->
          <el-input v-model="subData.C11C" type="number"></el-input>
        </div>
      </div>

      <div class="dome3">
        <div class="dome4">诊治医师姓名</div>
        <div class="dome5">
          <!-- <input type="text" name="fname" /> -->
          <el-input v-model="subData.C11N"></el-input>
        </div>
      </div>

      <div class="dome3">
        <div class="dome4">护士资格证书编号</div>
        <div class="dome5">
          <!-- <input type="text" name="fname" /> -->
          <el-input v-model="subData.C12C" type="number"></el-input>
        </div>
      </div>
      <div class="dome3">
        <div class="dome4">护士姓名</div>
        <div class="dome5">
          <!-- <input type="text" name="fname" /> -->
          <el-input v-model="subData.C12N"></el-input>
        </div>
      </div>
      <div class="dome3">
        <div class="dome4">审方药师身份证号码</div>
        <div class="dome5">
          <!-- <input type="text" name="fname" /> -->
          <el-input v-model="subData.C13" type="number"></el-input>
        </div>
      </div>
      <div class="dome3">
        <div class="dome4">既往诊断的医疗机构</div>
        <div class="dome5">
          <!-- <input type="text" name="fname" /> -->
          <el-input v-model="subData.C14"></el-input>
        </div>
      </div>
      <div class="dome3">
        <div class="dome4">主诉</div>
        <div class="dome5">
          <!-- <input type="text" name="fname" /> -->
          <el-input v-model="subData.C15"></el-input>
        </div>
      </div>
      <div class="dome3">
        <div class="dome4">总费用</div>
        <div class="dome5">
          <!-- <input type="text" name="fname" /> -->
          <el-input v-model="subData.C16" type="number"></el-input>
        </div>
      </div>

      <div class="dome3">
        <div class="dome4">取药方式</div>
        <div class="dome5">
          <!-- <SELECT name="state">
            <OPTION value="1">院内取药</OPTION>
            <OPTION value="2">院外取药</OPTION>
            <OPTION value="2">第三方配送</OPTION>
          </SELECT> -->
          <el-select v-model="subData.C17C" clearable placeholder="请选择">
            <el-option
              v-for="item in getmArr"
              :key="item.label"
              :label="item.label"
              :value="item.value"
            >
            </el-option>
          </el-select>
        </div>
      </div>
      <div class="dome3">
        <div class="dome4">是否是常见病、慢性病</div>
        <div class="dome5">
          <!-- <input type="text" name="fname" /> -->
          <el-select v-model="subData.C18C" clearable placeholder="请选择">
            <el-option
              v-for="item in isFalse"
              :key="item.label"
              :label="item.label"
              :value="item.value"
            >
            </el-option>
          </el-select>
        </div>
      </div>
      <div class="dome3">
        <div class="dome4">是否有药师在线处方审核</div>
        <div class="dome5">
          <!-- <input type="text" name="fname" /> -->
          <el-select v-model="subData.C19C" clearable placeholder="请选择">
            <el-option
              v-for="item in isFalse"
              :key="item.label"
              :label="item.label"
              :value="item.value"
            >
            </el-option>
          </el-select>
        </div>
      </div>

      <div class="dome3">
        <div class="dome4">是否有麻醉、精神类药品</div>
        <div class="dome5">
          <!-- <input type="text" name="fname" /> -->
          <el-select v-model="subData.C20C" clearable placeholder="请选择">
            <el-option
              v-for="item in isFalse"
              :key="item.label"
              :label="item.label"
              :value="item.value"
            >
            </el-option>
          </el-select>
        </div>
      </div>
      <div class="dome3">
        <div class="dome4">是否是儿童处方用药</div>
        <div class="dome5">
          <!-- <input type="text" name="fname" /> -->
          <el-select v-model="subData.C21C" clearable placeholder="请选择">
            <el-option
              v-for="item in isFalse"
              :key="item.label"
              :label="item.label"
              :value="item.value"
            >
            </el-option>
          </el-select>
        </div>
      </div>
      <div class="dome3">
        <div class="dome4">是否互联网医院对患者进行风险提示</div>
        <div class="dome5">
          <!-- <input type="text" name="fname" /> -->
          <el-select v-model="subData.C22C" clearable placeholder="请选择">
            <el-option
              v-for="item in isFalse"
              :key="item.label"
              :label="item.label"
              :value="item.value"
            >
            </el-option>
          </el-select>
        </div>
      </div>
      <div class="dome3">
        <div class="dome4">患者是否签署知情同意书</div>
        <div class="dome5">
          <!-- <input type="text" name="fname" /> -->
          <el-select v-model="subData.C23C" clearable placeholder="请选择">
            <el-option
              v-for="item in isFalse"
              :key="item.label"
              :label="item.label"
              :value="item.value"
            >
            </el-option>
          </el-select>
        </div>
      </div>
      <div class="dome3">
        <div class="dome4">患者满意度</div>
        <div class="dome5">
          <el-select v-model="subData.C24C" clearable placeholder="请选择">
            <el-option
              v-for="item in isFalse"
              :key="item.label"
              :label="item.label"
              :value="item.value"
            >
            </el-option>
          </el-select>
        </div>
      </div>
    </div>

    <div class="dome1" id="yuanyin">
      <div class="dome2">
        就诊原因
        <el-button
          type="primary"
          icon="el-icon-plus"
          size="mini"
          class="add"
          id="add_yuanyin"
          @click="addYuanYin"
          >添加</el-button
        >
      </div>
      <template v-for="(item, index) in subData.yuanyinArr">
        <div class="yuanyin_bd" :key="item">
          <div class="yuanyin_item" :id="'yuanyin_' + index">
            <div class="dome3">
              <div class="dome4">就诊原因名称</div>
              <div class="dome5">
                <el-select
                  v-model="item.reason"
                  filterable
                  remote
                  reserve-keyword
                  placeholder="请输入关键词"
                  :remote-method="remoteMethod"
                  :loading="loading"
                  @change="selectReason($event, index)"
                >
                  <el-option
                    v-for="item in options"
                    :key="item.name"
                    :label="item.name"
                    :value="item.coding + '~' + item.name"
                  >
                  </el-option>
                </el-select>
              </div>
            </div>
            <div class="dome3">
              <div class="dome4">是否主要就诊原因编码</div>
              <div class="dome5">
                <el-select v-model="item.D02C" clearable placeholder="请选择">
                  <el-option
                    v-for="item in isMajorArr"
                    :key="item.id"
                    :label="item.name"
                    :value="item.id"
                  >
                  </el-option>
                </el-select>
              </div>
            </div>
          </div>
        </div>
      </template>
    </div>

    <div class="dome1" id="bingming">
      <div class="dome2">
        中医病名信息
        <a class="add" id="add_bingming" @click="addBingMing">+添加</a>
      </div>
      <template v-for="(item, index) in subData.bingmingArr">
        <div class="bingming_bd" :key="item">
          <div class="bingming_item" :id="'bingming_' + index">
            <!-- <div class="dome3">
            <div class="dome4">中医疾病诊断编码（TCD）</div>
            <div class="dome5"><input type="text" class="G" name="G01C" /></div>
          </div> -->
            <div class="dome3">
              <div class="dome4">中医疾病诊断名称</div>
              <div class="dome5">
                <!-- <input type="text" class="G" name="G01N" /> -->
                <el-select
                  v-model="item.bingming"
                  filterable
                  remote
                  reserve-keyword
                  placeholder="请输入关键词"
                  :remote-method="remoteMethod2"
                  :loading="loading"
                  @change="selectBingMing($event, index)"
                >
                  <el-option
                    v-for="item in options2"
                    :key="item.name"
                    :label="item.name"
                    :value="item.coding + '~' + item.name"
                  >
                  </el-option>
                </el-select>
              </div>
            </div>
            <div class="dome3">
              <div class="dome4">是否中医主病编码</div>
              <div class="dome5">
                <!-- <input type="text" class="G" name="G02C" /> -->
                <el-select v-model="item.G02C" clearable placeholder="请选择">
                  <el-option
                    v-for="item in isMajorArr"
                    :key="item.id"
                    :label="item.name"
                    :value="item.id"
                  >
                  </el-option>
                </el-select>
              </div>
            </div>
          </div>
        </div>
      </template>
    </div>

    <div class="dome1" id="houzhen">
      <div class="dome2">
        中医证候信息
        <a class="add" id="add_houzhen" @click="addHouZhen">+添加</a>
      </div>
      <template v-for="(item, index) in subData.houzhenArr">
        <div class="houzhen_bd" :key="item">
          <div class="houzhen_item" :id="'houzhen_' + index">
            <!-- <div class="dome3">
              <div class="dome4">中医证候诊断编码（TCD）</div>
              <div class="dome5">
                <input type="text" class="H" name="H01C" />
              </div>
            </div> -->
            <div class="dome3">
              <div class="dome4">中医证候诊断名称</div>
              <div class="dome5">
                <!-- <input type="text" class="H" name="H01N" /> -->
                <el-select
                  v-model="item.houzhen"
                  filterable
                  remote
                  reserve-keyword
                  placeholder="请输入关键词"
                  :remote-method="remoteMethod1"
                  :loading="loading"
                  @change="selectSyndrome($event, index)"
                >
                  <el-option
                    v-for="item in options1"
                    :key="item.name"
                    :label="item.name"
                    :value="item.coding + '~' + item.name"
                  >
                  </el-option>
                </el-select>
              </div>
            </div>
            <div class="dome3">
              <div class="dome4">是否中医主证编码</div>
              <div class="dome5">
                <!-- <input type="text" class="H" name="H02C" /> -->
                <el-select v-model="item.H02C" clearable placeholder="请选择">
                  <el-option
                    v-for="item in isMajorArr"
                    :key="item.id"
                    :label="item.name"
                    :value="item.id"
                  >
                  </el-option>
                </el-select>
              </div>
            </div>
          </div>
        </div>
      </template>
    </div>

    <div class="dome1" id="yizhu">
      <div class="dome2">
        医嘱明细 <a class="add" id="add_yizhu" @click="addYZ">+添加</a>
      </div>
      <template v-for="(item, index) in subData.yizhuArr">
        <div class="yizhu_bd" :key="item">
          <div class="yizhu_item" :id="'yizhu_' + index">
            <div class="dome3">
              <div class="dome4">医嘱类型编码</div>
              <div class="dome5">
                <!-- <input type="text" class="E" name="E01" /> -->
                <el-select v-model="item.E01" clearable placeholder="请选择">
                  <el-option
                    v-for="item in doctorAdviceArr"
                    :key="item.name"
                    :label="item.name"
                    :value="item.id"
                  >
                  </el-option>
                </el-select>
              </div>
            </div>
            <div class="dome3">
              <div class="dome4">处方号</div>
              <div class="dome5">
                <!-- <input type="text" class="E" name="E02" /> -->
                <el-input v-model="item.E02"></el-input>
              </div>
            </div>
            <!-- <div class="dome3">
              <div class="dome4">医嘱项目编码</div>
              <div class="dome5">
                <el-input v-model="item.E03C"></el-input>
              </div>
            </div> -->
            <div class="dome3">
              <div class="dome4">医嘱项目名称</div>
              <div class="dome5">
                <!-- <input type="text" class="E" name="E03N" /> -->
                <!-- <el-input v-model="item.E03N"></el-input> -->
                <el-select
                  v-model="item.reason"
                  filterable
                  remote
                  reserve-keyword
                  placeholder="请输入关键词"
                  :remote-method="remoteMethod3"
                  :loading="loading"
                  @change="selectDrug($event, index)"
                >
                  <el-option
                    v-for="item in options3"
                    :key="item.medicineName"
                    :label="item.medicineName"
                    :value="item.medicineCode + '~' + item.medicineName"
                  >
                  </el-option>
                </el-select>
              </div>
            </div>

            <div class="dome3">
              <div class="dome4">医嘱时间</div>
              <div class="dome5">
                <!-- <input type="text" class="E" name="E04" /> -->
                <!-- <el-input v-model="item.E04"></el-input> -->
                <el-date-picker
                  v-model="item.E04"
                  type="datetime"
                  placeholder="选择日期时间"
                >
                </el-date-picker>
              </div>
            </div>
            <div class="dome3">
              <div class="dome4">规格</div>
              <div class="dome5">
                <!-- <input type="text" class="E" name="E05" /> -->
                <el-input v-model="item.E04"></el-input>
              </div>
            </div>
            <div class="dome3">
              <div class="dome4">给药途径</div>
              <div class="dome5">
                <el-select v-model="item.E06C" clearable placeholder="请选择">
                  <el-option
                    v-for="item in deliveryRouteArr"
                    :key="item.name"
                    :label="item.name"
                    :value="item.coding"
                  >
                  </el-option>
                </el-select>
              </div>
            </div>
            <div class="dome3">
              <div class="dome4">数量</div>
              <div class="dome5">
                <!-- <input type="text" class="E" name="E07" /> -->
                <el-input v-model="item.E07"></el-input>
              </div>
            </div>
            <div class="dome3">
              <div class="dome4">单价</div>
              <div class="dome5">
                <!-- <input type="text" class="E" name="E08" /> -->
                <el-input v-model="item.E08"></el-input>
              </div>
            </div>
            <div class="dome3">
              <div class="dome4">每次用量</div>
              <div class="dome5">
                <!-- <input type="text" class="E" name="E09" /> -->
                <el-input v-model="item.E09"></el-input>
              </div>
            </div>
            <div class="dome3">
              <div class="dome4">每次用量单位</div>
              <div class="dome5">
                <el-select v-model="item.E10C" clearable placeholder="请选择">
                  <el-option
                    v-for="item in ylArr"
                    :key="item.name"
                    :label="item.name"
                    :value="item.coding"
                  >
                  </el-option>
                </el-select>
              </div>
            </div>
            <div class="dome3">
              <div class="dome4">频度</div>
              <div class="dome5">
                <el-select v-model="item.E11C" clearable placeholder="请选择">
                  <el-option
                    v-for="item in tcmRequencyArr"
                    :key="item.name"
                    :label="item.name"
                    :value="item.coding"
                  >
                  </el-option>
                </el-select>
              </div>
            </div>
            <div class="dome3">
              <div class="dome4">执行天数</div>
              <div class="dome5">
                <!-- <input type="text" class="E" name="E12" /> -->
                <el-input v-model="item.E12"></el-input>
              </div>
            </div>
            <div class="dome3">
              <div class="dome4">收费标志</div>
              <div class="dome5">
                <!-- <SELECT name="E13C" class="E">
                  <OPTION value="1">未收费</OPTION>
                  <OPTION value="2">正常收费</OPTION>
                  <OPTION value="2">退费</OPTION>
                </SELECT> -->
                <el-select v-model="item.E13C" clearable placeholder="请选择">
                  <el-option
                    v-for="item in chargeArr"
                    :key="item.label"
                    :label="item.label"
                    :value="item.value"
                  >
                  </el-option>
                </el-select>
              </div>
            </div>
          </div>
        </div>
      </template>
    </div>

    <div class="dome1" id="feiyong">
      <div class="dome2">
        费用明细 <a class="add" id="add_feiyong">+添加</a>
      </div>
      <template v-for="(item, index) in subData.feiyongArr">
        <div class="feiyong_bd" :key="item">
          <div class="feiyong_item" :id="'feiyong_' + index">
            <div class="dome3">
              <div class="dome4">费用类型代码</div>
              <div class="dome5">
                <input type="text" class="F" name="F01C" />
              </div>
            </div>
            <div class="dome3">
              <div class="dome4">名称</div>
              <div class="dome5">
                <input type="text" class="F" name="F01N" />
              </div>
            </div>
            <div class="dome3">
              <div class="dome4">开单科室编码</div>
              <div class="dome5">
                <input type="text" class="F" name="F02C" />
              </div>
            </div>
            <div class="dome3">
              <div class="dome4">交费时间</div>
              <div class="dome5">
                <input type="text" class="F" name="F03" />
              </div>
            </div>
            <div class="dome3">
              <div class="dome4">单价</div>
              <div class="dome5">
                <input type="text" class="F" name="F04" />
              </div>
            </div>
            <div class="dome3">
              <div class="dome4">数量</div>
              <div class="dome5">
                <input type="text" class="F" name="F05" />
              </div>
            </div>
          </div>
        </div>
      </template>
    </div>

    <div class="dome-tj" id="sure" @click="putData">确定</div>
  </div>
</template>

<script>
import {
  allDepartment,
  allDosage,
  allDrug,
  allNation,
  areaCoding,
  doctorAdvice,
  deliveryRoute,
  reasonVisit,
  syndromeCoding,
  diseaseDiagnosis,
  tcmRequency,
} from "@/libs/api";
export default {
  name: "HelloWorld",
  props: {
    msg: String,
  },
  data() {
    return {
      subData: {
        A01C: "",
        A01N: "",
        B01C: 1,
        B02: "",
        B03C: "",
        B04C: 1,
        B05C: "",
        B06C: 1,
        B07C: "",
        B08C: "",
        B09C: 1,
        B10C: "",
        B11: "",
        B12: "",
        B13C: "",
        B14: "",
        B15: "",
        B16: "",
        B17: "",
        B18: "",
        C01: "",
        C02C: "",
        C03: "",
        C04C: 1,
        C05: "",
        C06C: "",
        C07: "",
        C08: "",
        C11C: "",
        C11N: "",
        C12C: "",
        C12N: "",
        C13: "",
        C14: "",
        C15: "",
        C16: "",
        C17C: "",
        C18C: "",
        C19C: "",
        C20C: "",
        C21C: "",
        C22C: "",
        C23C: "",
        C24C: "",
        yuanyinArr: [{}],
        yizhuArr: [{}],
        houzhenArr: [{}],
        bingmingArr: [{}],
        feiyongArr: [{}],
      },
      departmentName: [],
      departmentArr: [],
      ylArr: [],
      value: "",
      drugArr: [],
      nationArr: [],
      nationName: "",
      areaCodingArr: [],
      areaName: "",
      doctorAdviceArr: [],
      deliveryRouteArr: [],
      reasonVisitArr: [],
      options: [],
      options1: [],
      options2: [],
      options3: [],
      loading: false,
      syndromeCodingArr: [],
      reason: "",
      houzhen: "",
      bingming: "",
      diseaseDiagnosisArr: [],
      tcmRequencyArr: [],
      isMajorArr: [
        {
          id: 1,
          name: "是",
        },
        {
          id: 2,
          name: "否",
        },
      ],
      ybArr: [
        {
          label: "北京市医保",
          value: 1,
        },
        {
          label: "外地医保",
          value: 2,
        },
        {
          label: "北京市公费医疗",
          value: 3,
        },
        {
          label: "外地公费医疗",
          value: 4,
        },
        {
          label: "北京市非医保",
          value: 5,
        },
        {
          label: "外地非医保",
          value: 6,
        },
      ],
      sexArr: [
        {
          label: "未知的性别",
          value: 0,
        },
        {
          label: "男性",
          value: 1,
        },
        {
          label: "女性",
          value: 2,
        },
        {
          label: "未说明的性别",
          value: 3,
        },
      ],
      zjArr: [
        {
          label: "居民身份证",
          value: 1,
        },
        {
          label: "中国人民解放军军人证",
          value: 2,
        },
        {
          label: "中国人民武装警察身份证",
          value: 3,
        },
        {
          label: "港澳居民来往大陆通行证",
          value: 4,
        },
        {
          label: "台湾居民来往大陆通行证",
          value: 5,
        },
        {
          label: "护照",
          value: 6,
        },
        {
          label: "机动车驾驶证",
          value: 7,
        },
        {
          label: "儿童证件",
          value: 8,
        },
      ],
      gjArr: [
        {
          label: "中国",
          value: 1,
        },
        {
          label: "外籍",
          value: 2,
        },
      ],
      marryArr: [
        {
          label: "未婚",
          value: 1,
        },
        {
          label: "已婚",
          value: 2,
        },
        {
          label: "丧偶",
          value: 3,
        },
        {
          label: "离婚",
          value: 4,
        },
      ],
      registerArr: [
        {
          label: "普通医师",
          value: 1,
        },
        {
          label: "副主任医师",
          value: 2,
        },
        {
          label: "主任医师",
          value: 3,
        },
        {
          label: "知名专家",
          value: 4,
        },
        {
          label: "特需",
          value: 5,
        },
        {
          label: "体检",
          value: 6,
        },
        {
          label: "急诊",
          value: 7,
        },
        {
          label: "其他",
          value: 8,
        },
      ],
      treatmentArr: [
        {
          label: "复诊",
          value: 1,
        },
        {
          label: "会诊",
          value: 2,
        },
      ],
      getmArr: [
        {
          label: "院内取药",
          value: 1,
        },
        {
          label: "院外取药",
          value: 2,
        },
        {
          label: "第三方配送",
          value: 3,
        },
      ],
      isFalse: [
        {
          label: "是",
          value: 1,
        },
        {
          label: "否",
          value: 2,
        },
      ],
      satisfiedArr: [
        {
          label: "很满意（5星）",
          value: 1,
        },
        {
          label: "满意（4星）",
          value: 2,
        },
        {
          label: "一般（3星）",
          value: 2,
        },
        {
          label: "不满意（2星）",
          value: 2,
        },
        {
          label: "很不满意（1星）",
          value: 2,
        },
      ],
      chargeArr: [
        {
          label: "未收费",
          value: 1,
        },
        {
          label: "正常收费",
          value: 2,
        },
        {
          label: "退费",
          value: 2,
        },
      ],
    };
  },
  created() {
    // 科室
    allDepartment().then((res) => {
      this.departmentArr = this.changeChildren(res.data);
    });
    // 用量单位
    allDosage().then((res) => {
      // console.log(res);
      this.ylArr = res.data;
    });
    // 药瓶列表
    allDrug({ currentPage: 0, pageSize: 0 }).then((res) => {
      // console.log(res.data.rows);
      this.drugArr = res.data.rows;
    });
    // 民族列表
    allNation().then((res) => {
      // console.log(res);
      this.nationArr = res.data;
    });
    // 行政区
    areaCoding().then((res) => {
      // console.log(res);
      this.areaCodingArr = res.data;
    });
    // 医嘱类型
    doctorAdvice().then((res) => {
      // console.log(res);
      this.doctorAdviceArr = res.data;
    });
    // 给药途径
    deliveryRoute().then((res) => {
      // console.log(res);
      this.deliveryRouteArr = res.data;
    });
    // 就诊原因
    let isLocal = localStorage.getItem("reasonVisitArr");
    // console.log(isLocal);
    if (isLocal) {
      this.reasonVisitArr = JSON.parse(isLocal);
    } else {
      reasonVisit({ currentPage: 0, pageSize: 0 }).then((res) => {
        // console.log(res);
        this.reasonVisitArr = res.data.rows;
        localStorage.setItem(
          "reasonVisitArr",
          JSON.stringify(this.reasonVisitArr)
        );
      });
    }
    //  侯症编码
    syndromeCoding({ currentPage: 0, pageSize: 0 }).then((res) => {
      // console.log(res);
      this.syndromeCodingArr = res.data.rows;
    });
    // 诊断编码
    diseaseDiagnosis({ currentPage: 0, pageSize: 0 }).then((res) => {
      // console.log(res);
      this.diseaseDiagnosisArr = res.data.rows;
    });
    // 用药频度
    tcmRequency().then((res) => {
      console.log(res);
      this.tcmRequencyArr = res.data;
    });
  },
  methods: {
    selectDrug(e, index) {
      this.subData.yizhuArr[index].E03C = e.split("~")[0];
      this.subData.yizhuArr[index].E03N = e.split("~")[1];
      console.log(this.subData.yizhuArr);
    },
    selectReason(e, index) {
      // console.log(e, index);
      this.subData.yuanyinArr[index].D01C = e.split("~")[0];
      this.subData.yuanyinArr[index].D01N = e.split("~")[1];
      // console.log(this.yuanyinArr);
    },
    selectSyndrome(e, index) {
      this.subData.houzhenArr[index].H01C = e.split("~")[0];
      this.subData.houzhenArr[index].H01N = e.split("~")[1];
      // console.log(this.houzhenArr);
    },
    selectBingMing(e, index) {
      this.subData.bingmingArr[index].G01C = e.split("~")[0];
      this.subData.bingmingArr[index].G01N = e.split("~")[1];
      console.log(this.subData.bingmingArr);
    },
    remoteMethod2(query) {
      // console.log(query);
      if (query !== "") {
        this.loading = true;
        setTimeout(() => {
          this.loading = false;
          this.options2 = this.diseaseDiagnosisArr.filter((item) => {
            return item.name.toLowerCase().indexOf(query.toLowerCase()) > -1;
          });
          // console.log(this.options1);
        }, 200);
      } else {
        this.options2 = [];
      }
    },
    remoteMethod1(query) {
      // console.log(query);
      if (query !== "") {
        this.loading = true;
        setTimeout(() => {
          this.loading = false;
          this.options1 = this.syndromeCodingArr.filter((item) => {
            return item.name.toLowerCase().indexOf(query.toLowerCase()) > -1;
          });
          // console.log(this.options1);
        }, 200);
      } else {
        this.options1 = [];
      }
    },
    remoteMethod(query) {
      // console.log(query);
      if (query !== "") {
        this.loading = true;
        setTimeout(() => {
          this.loading = false;
          this.options = this.reasonVisitArr.filter((item) => {
            return item.name.toLowerCase().indexOf(query.toLowerCase()) > -1;
          });
          // console.log(this.options);
        }, 200);
      } else {
        this.options = [];
      }
    },
    remoteMethod3(query) {
      // console.log(query);
      if (query !== "") {
        this.loading = true;
        setTimeout(() => {
          this.loading = false;
          this.options3 = this.drugArr.filter((item) => {
            return item.medicineName.indexOf(query) > -1;
          });
          // console.log(this.options3);
        }, 200);
      } else {
        this.options3 = [];
      }
    },
    addBingMing() {
      this.subData.bingmingArr.push({});
    },
    addYuanYin() {
      this.subData.yuanyinArr.push({});
    },
    addHouZhen() {
      this.subData.houzhenArr.push({});
    },
    addYZ() {
      this.subData.yizhuArr.push({});
    },
    putData() {
      // console.log(this);
      console.log(this.subData);
      let str = "";
      for (const key in this.subData) {
        if (Object.hasOwnProperty.call(this.subData, key)) {
          const element = this.subData[key];
          if (key == "yuanyinArr") {
            str = this.getStr(str, element, "DS", "D", "reason");
          } else if (key == "bingmingArr") {
            str = this.getStr(str, element, "GS", "G", "bingming");
          } else if (key == "houzhenArr") {
            str = this.getStr(str, element, "HS", "H", "houzhen");
          } else if (key == "yizhuArr") {
            str = this.getStr(str, element, "ES", "E", "houzhen");
          } else if (key == "feiyongArr") {
            str = this.getStr(str, element, "FS", "F", "houzhen");
          }else{
            str += "<" + key + ">" + element + "</" + key + ">";
          }
        }
      }
      console.log(str);
    },
    getStr(str, arr, one, two, key) {
      str += "<" + one + ">";
      for (let i = 0; i < arr.length; i++) {
        const ele = arr[i];
        str += "<" + two + ">";
        for (const keys in arr[i]) {
          if (Object.hasOwnProperty.call(arr[i], keys) && keys != key) {
            const ele_val = arr[i][keys];
            str += "<" + keys + ">" + ele_val + "</" + keys + ">";
          }
        }
        str += "</" + two + ">";
      }
      return (str += "</" + one + ">");
    },
    handleChange(value) {
      console.log(value);
    },
    changeChildren(arr) {
      arr.forEach((element) => {
        if (element.hasOwnProperty("children") && element.children != null) {
          if (element.children.length == 0) {
            return delete element.children;
          } else {
            this.changeChildren(element.children);
          }
        }
        return element;
      });
      return arr;
    },
  },
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
/* h3 {
  margin: 40px 0 0;
}
ul {
  list-style-type: none;
  padding: 0;
}
li {
  display: inline-block;
  margin: 0 10px;
}
a {
  color: #42b983;
} */

.dome1 {
  width: 950px;
  margin: auto;
  background: #fff;
  padding: 30px 40px;
  margin-top: 15px;
  overflow: hidden;
  border-radius: 4px;
  font-family: Microsoft YaHei;
}

.dome2 {
  width: 100%;
  float: left;
  font-size: 20px;
  line-height: 30px;
  border-bottom: 1px solid #ccc;
  line-height: 40px;
  color: #333;
}

.dome3 {
  width: 50%;
  float: left;
  padding-top: 20px;
}

.dome4 {
  float: left;
  font-size: 14px;
  line-height: 30px;
  color: #666;
  width: 36%;
  text-align: right;
}

.dome5 {
  float: right;
  font-size: 14px;
  line-height: 30px;
  color: #666;
  width: 250px;
}

input,
SELECT {
  height: 26px;
  line-height: 1;
  border: solid 1px #ccc;
  border-radius: 4px;
  outline: none;
  text-indent: 8px;
  width: 80%;
  color: #333;
}

SELECT {
  height: 30px;
  line-height: 30px;
}

/*.yuanyin_item{width:100%; height:130px;}*/

.dome-tj {
  width: 200px;
  line-height: 45px;
  margin: 30px auto 50px;
  height: 45px;
  background: #ce3030;
  border-radius: 4px;
  text-align: center;
  font-size: 18px;
  color: #fff;
}

/*6-13新加样式*/
.feiyong_item,
.bingming_item,
.yuanyin_item,
.houzhen_item,
.yizhu_item {
  float: left;
  width: 100%;
  margin-bottom: 20px;
}

.jian {
  width: 16%;
  text-align: center;
  line-height: 35px;
  float: left;
  margin: 10px 42% 0;
  border-radius: 4px;
  border: 1px solid #ce3030;
  color: #ce3030;
  cursor: pointer;
}

a {
  cursor: pointer;
}
</style>
