<template>
  <div>
    <div class="hello">
      <div class="dome1" id="yiyuan">
        <div class="dome2">医院信息</div>
        <div class="dome3">
          <div class="dome4">就诊医院编码</div>
          <div class="dome5"><input type="text" name="A01C" /></div>
        </div>
        <div class="dome3">
          <div class="dome4">就诊医院名称</div>
          <div class="dome5"><input type="text" name="A01N" /></div>
        </div>
      </div>
    </div>
    <div class="dome1" id="jiben">
      <div class="dome2">基本信息</div>
      <div class="dome3">
        <div class="dome4">患者编码类型</div>
        <div class="dome5">
          <SELECT name="B01C">
            <OPTION value="1">北京市医保</OPTION>
            <OPTION value="2">外地医保</OPTION>
            <OPTION value="3">北京市公费医疗</OPTION>
            <OPTION value="4">外地公费医疗</OPTION>
            <OPTION value="5">北京市非医保</OPTION>
            <OPTION value="6" selected>外地非医保</OPTION>
          </SELECT>
        </div>
      </div>
      <div class="dome3">
        <div class="dome4">患者编码</div>
        <div class="dome5">
          <input
            type="text"
            name="B02"
            placeholder="医保患者必须填写医保卡号"
          />
        </div>
      </div>
      <div class="dome3">
        <div class="dome4">姓名</div>
        <div class="dome5"><input type="text" name="B03C" /></div>
      </div>
      <div class="dome3">
        <div class="dome4">性别</div>
        <div class="dome5">
          <SELECT name="B04C">
            <OPTION value="0">未知的性别</OPTION>
            <OPTION value="1">男性</OPTION>
            <OPTION value="2">女性</OPTION>
            <OPTION value="3">未说明的性别</OPTION>
          </SELECT>
        </div>
      </div>
      <div class="dome3">
        <div class="dome4">出生日期</div>
        <div class="dome5">
          <input id="meeting" name="B05C" type="date" value="" />
        </div>
      </div>
      <div class="dome3">
        <div class="dome4">证件类型</div>
        <div class="dome5">
          <SELECT name="B06C">
            <OPTION value="1">居民身份证</OPTION>
            <OPTION value="2">中国人民解放军军人证</OPTION>
            <OPTION value="3">中国人民武装警察身份证</OPTION>
            <OPTION value="4">港澳居民来往大陆通行证</OPTION>
            <OPTION value="5">台湾居民来往大陆通行证</OPTION>
            <OPTION value="6">护照</OPTION>
            <OPTION value="7">机动车驾驶证</OPTION>
            <OPTION value="8">儿童证件</OPTION>
          </SELECT>
        </div>
      </div>

      <div class="dome3">
        <div class="dome4">证件号码</div>
        <div class="dome5"><input type="text" name="B07C" /></div>
      </div>
      <div class="dome3">
        <div class="dome4">民族</div>
        <div class="dome5">
          <select name="B08C">
            <OPTION value="1">汉族</OPTION>
            <OPTION value="2">蒙古族</OPTION>
            <OPTION value="3">回族</OPTION>
            <OPTION value="4">藏族</OPTION>
            <OPTION value="5">维吾尔族</OPTION>
            <OPTION value="6">苗族</OPTION>
            <OPTION value="7">彝族</OPTION>
            <OPTION value="8">壮族</OPTION>
            <OPTION value="9">布依族</OPTION>
            <OPTION value="10">朝鲜族</OPTION>
            <OPTION value="11">满族</OPTION>
            <OPTION value="12">侗族</OPTION>
            <OPTION value="13">瑶族</OPTION>
            <OPTION value="14">白族</OPTION>
            <OPTION value="15">土家族</OPTION>
            <OPTION value="16">哈尼族</OPTION>
            <OPTION value="17">哈萨克族</OPTION>
            <OPTION value="18">傣族</OPTION>
            <OPTION value="19">黎族</OPTION>
            <OPTION value="20">傈僳族</OPTION>
            <OPTION value="21">佤族</OPTION>
            <OPTION value="22">畲族</OPTION>
            <OPTION value="23">高山族</OPTION>
            <OPTION value="24">拉祜族</OPTION>
            <OPTION value="25">水族</OPTION>
            <OPTION value="26">东乡族</OPTION>
            <OPTION value="27">纳西族</OPTION>
            <OPTION value="28">景颇族</OPTION>
            <OPTION value="29">柯尔克孜族</OPTION>
            <OPTION value="30">土族</OPTION>
            <OPTION value="31">达斡尔族</OPTION>
            <OPTION value="32">仫佬族</OPTION>
            <OPTION value="33">羌族</OPTION>
            <OPTION value="34">布朗族</OPTION>
            <OPTION value="35">撒拉族</OPTION>
            <OPTION value="36">毛难族</OPTION>
            <OPTION value="37">仡佬族</OPTION>
            <OPTION value="38">锡伯族</OPTION>
            <OPTION value="39">阿昌族</OPTION>
            <OPTION value="40">普米族</OPTION>
            <OPTION value="41">塔吉克族</OPTION>
            <OPTION value="42">怒族</OPTION>
            <OPTION value="43">乌孜别克族</OPTION>
            <OPTION value="44">俄罗斯族</OPTION>
            <OPTION value="45">鄂温克族</OPTION>
            <OPTION value="46">德昂族</OPTION>
            <OPTION value="47">保安族</OPTION>
            <OPTION value="48">裕固族</OPTION>
            <OPTION value="49">京族</OPTION>
            <OPTION value="50">塔塔尔族</OPTION>
            <OPTION value="51">独龙族</OPTION>
            <OPTION value="52">鄂伦春族</OPTION>
            <OPTION value="53">赫哲族</OPTION>
            <OPTION value="54">门巴族</OPTION>
            <OPTION value="55">珞巴族</OPTION>
            <OPTION value="56">基诺族</OPTION>
            <OPTION value="66">其他</OPTION>
            <OPTION value="99">外籍人士</OPTION>
          </select>
        </div>
      </div>

      <div class="dome3">
        <div class="dome4">国籍</div>
        <div class="dome5">
          <SELECT name="B09C">
            <OPTION value="1">中国</OPTION>
            <OPTION value="2">外籍</OPTION>
          </SELECT>
        </div>
      </div>

      <div class="dome3">
        <div class="dome4">婚姻状况</div>
        <div class="dome5">
          <SELECT name="B10C">
            <OPTION value=""></OPTION>
            <OPTION value="1">未婚</OPTION>
            <OPTION value="2">已婚</OPTION>
            <OPTION value="3">丧偶</OPTION>
            <OPTION value="4">离婚</OPTION>
          </SELECT>
        </div>
      </div>
      <div class="dome3">
        <div class="dome4">工作单位</div>
        <div class="dome5"><input type="text" name="B11" /></div>
      </div>
      <div class="dome3">
        <div class="dome4">现居住详细地址</div>
        <div class="dome5">
          <input type="text" placeholder="（居住半年以上）" name="B12" />
        </div>
      </div>
      <div class="dome3">
        <div class="dome4">现住址行政区划编码</div>
        <div class="dome5">
          <SELECT name="B13C">
            <OPTION value=""></OPTION>
            <OPTION value="110101">东城区</OPTION>
            <OPTION value="110102">西城区</OPTION>
            <OPTION value="110105">朝阳区</OPTION>
            <OPTION value="110106">丰台区</OPTION>
            <OPTION value="110107">石景山区</OPTION>
            <OPTION value="110108">海淀区</OPTION>
            <OPTION value="110109">门头沟区</OPTION>
            <OPTION value="110111">房山区</OPTION>
            <OPTION value="110112">通州区</OPTION>
            <OPTION value="110113">顺义区</OPTION>
            <OPTION value="110114">昌平区</OPTION>
            <OPTION value="110115">大兴区</OPTION>
            <OPTION value="110116">怀柔区</OPTION>
            <OPTION value="110117">平谷区</OPTION>
            <OPTION value="110228">密云县</OPTION>
            <OPTION value="110229">延庆县</OPTION>
            <OPTION value="120000">天津市</OPTION>
            <OPTION value="130000">河北省</OPTION>
            <OPTION value="140000">山西省</OPTION>
            <OPTION value="150000">内蒙古自治区</OPTION>
            <OPTION value="210000">辽宁省</OPTION>
            <OPTION value="220000">吉林省</OPTION>
            <OPTION value="230000">黑龙江省</OPTION>
            <OPTION value="310000">上海市</OPTION>
            <OPTION value="320000">江苏省</OPTION>
            <OPTION value="330000">浙江省</OPTION>
            <OPTION value="340000">安徽省</OPTION>
            <OPTION value="350000">福建省</OPTION>
            <OPTION value="360000">江西省</OPTION>
            <OPTION value="370000">山东省</OPTION>
            <OPTION value="410000">河南省</OPTION>
            <OPTION value="420000">湖北省</OPTION>
            <OPTION value="430000">湖南省</OPTION>
            <OPTION value="440000">广东省</OPTION>
            <OPTION value="450000">广西壮族自治区</OPTION>
            <OPTION value="460000">海南省</OPTION>
            <OPTION value="500000">重庆市</OPTION>
            <OPTION value="510000">四川省</OPTION>
            <OPTION value="520000">贵州省</OPTION>
            <OPTION value="530000">云南省</OPTION>
            <OPTION value="540000">西藏自治区</OPTION>
            <OPTION value="610000">陕西省</OPTION>
            <OPTION value="620000">甘肃省</OPTION>
            <OPTION value="630000">青海省</OPTION>
            <OPTION value="640000">宁夏回族自治区</OPTION>
            <OPTION value="650000">新疆维吾尔族自治区</OPTION>
            <OPTION value="710000">台湾省</OPTION>
            <OPTION value="810000">香港特别行政区</OPTION>
            <OPTION value="820000">澳门特别行政区</OPTION>
            <OPTION value="999000">中国境外</OPTION>
          </SELECT>
        </div>
      </div>
      <div class="dome3">
        <div class="dome4">联系人姓名</div>
        <div class="dome5"><input type="text" name="B14" /></div>
      </div>
      <div class="dome3">
        <div class="dome4">联系人身份证号</div>
        <div class="dome5"><input type="text" name="B15" /></div>
      </div>

      <div class="dome3">
        <div class="dome4">联系人电话</div>
        <div class="dome5"><input type="text" name="B16" /></div>
      </div>
      <div class="dome3">
        <div class="dome4">监护人姓名</div>
        <div class="dome5"><input type="text" name="B17" /></div>
      </div>
      <div class="dome3">
        <div class="dome4">监护人联系方式</div>
        <div class="dome5"><input type="text" name="B18" /></div>
      </div>
    </div>

    <div class="dome1" id="jiuzhen">
      <div class="dome2">就诊信息</div>
      <div class="dome3">
        <div class="dome4">就诊流水号</div>
        <div class="dome5"><input type="text" name="C01" /></div>
      </div>
      <div class="dome3">
        <div class="dome4">挂号类别</div>
        <div class="dome5">
          <SELECT name="C02C">
            <OPTION value="1">普通医师</OPTION>
            <OPTION value="2">副主任医师</OPTION>
            <OPTION value="3">主任医师</OPTION>
            <OPTION value="4">知名专家</OPTION>
            <OPTION value="5">特需</OPTION>
            <OPTION value="6">体检</OPTION>
            <OPTION value="7">急诊</OPTION>
            <OPTION value="8">其他</OPTION>
          </SELECT>
        </div>
      </div>
      <div class="dome3">
        <div class="dome4">挂号时间</div>
        <div class="dome5">
          <input type="datetime-local" step="01" name="C03" />
        </div>
      </div>

      <div class="dome3">
        <div class="dome4">诊疗类型</div>
        <div class="dome5">
          <SELECT name="C04C">
            <OPTION value="1">复诊</OPTION>
            <OPTION value="2">会诊</OPTION>
          </SELECT>
        </div>
      </div>
      <div class="dome3">
        <div class="dome4">发起会诊的医院名称</div>
        <div class="dome5"><input type="text" name="C05" /></div>
      </div>
      <div class="dome3">
        <div class="dome4">是否有专业医师陪伴</div>
        <div class="dome5"><input type="text" name="C06C" /></div>
      </div>
      <div class="dome3">
        <div class="dome4">陪伴医师的身份证号</div>
        <div class="dome5"><input type="text" name="C07" /></div>
      </div>
      <div class="dome3">
        <div class="dome4">就诊时间</div>
        <div class="dome5">
          <input type="datetime-local" step="01" name="C08" />
        </div>
      </div>

      <div class="dome3">
        <div class="dome4">就诊科室编码</div>
        <div class="dome5">
          <input type="text" name="C09C" />
          <SELECT name="C04C">
            <OPTION value="1">复诊</OPTION>
            <OPTION value="2">会诊</OPTION>
          </SELECT>
        </div>
      </div>

      <div class="dome3">
        <div class="dome4">就诊科室名称</div>
        <div class="dome5">
          <!-- <input type="text" name="fname" /> -->
          <el-cascader
            size="mini"
            v-model="departmentName"
            :options="departmentArr"
            :props="{ label: 'department' }"
            @change="handleChange"
          ></el-cascader>
        </div>
      </div>
      <div class="dome3">
        <div class="dome4">医院内部科室代码</div>
        <div class="dome5"><input type="text" name="fname" /></div>
      </div>
      <div class="dome3">
        <div class="dome4">医院内部科室名称</div>
        <div class="dome5"><input type="text" name="fname" /></div>
      </div>
      <div class="dome3">
        <div class="dome4">诊治医师执业证书编号</div>
        <div class="dome5"><input type="text" name="fname" /></div>
      </div>

      <div class="dome3">
        <div class="dome4">诊治医师姓名</div>
        <div class="dome5"><input type="text" name="fname" /></div>
      </div>

      <div class="dome3">
        <div class="dome4">护士资格证书编号</div>
        <div class="dome5"><input type="text" name="fname" /></div>
      </div>
      <div class="dome3">
        <div class="dome4">护士姓名</div>
        <div class="dome5"><input type="text" name="fname" /></div>
      </div>
      <div class="dome3">
        <div class="dome4">审方药师身份证号码</div>
        <div class="dome5"><input type="text" name="fname" /></div>
      </div>
      <div class="dome3">
        <div class="dome4">既往诊断的医疗机构</div>
        <div class="dome5"><input type="text" name="fname" /></div>
      </div>
      <div class="dome3">
        <div class="dome4">主诉</div>
        <div class="dome5"><input type="text" name="fname" /></div>
      </div>
      <div class="dome3">
        <div class="dome4">总费用</div>
        <div class="dome5"><input type="text" name="fname" /></div>
      </div>

      <div class="dome3">
        <div class="dome4">取药方式</div>
        <div class="dome5">
          <SELECT name="state">
            <OPTION value="1">院内取药</OPTION>
            <OPTION value="2">院外取药</OPTION>
            <OPTION value="2">第三方配送</OPTION>
          </SELECT>
        </div>
      </div>
      <div class="dome3">
        <div class="dome4">是否是常见病、慢性病</div>
        <div class="dome5"><input type="text" name="fname" /></div>
      </div>
      <div class="dome3">
        <div class="dome4">是否有药师在线处方审核</div>
        <div class="dome5"><input type="text" name="fname" /></div>
      </div>

      <div class="dome3">
        <div class="dome4">是否有麻醉、精神类药品</div>
        <div class="dome5"><input type="text" name="fname" /></div>
      </div>
      <div class="dome3">
        <div class="dome4">是否是儿童处方用药</div>
        <div class="dome5"><input type="text" name="fname" /></div>
      </div>
      <div class="dome3">
        <div class="dome4">是否互联网医院对患者进行风险提示</div>
        <div class="dome5"><input type="text" name="fname" /></div>
      </div>
      <div class="dome3">
        <div class="dome4">患者是否签署知情同意书</div>
        <div class="dome5"><input type="text" name="fname" /></div>
      </div>
      <div class="dome3">
        <div class="dome4">患者满意度</div>
        <div class="dome5">
          <SELECT name="state">
            <OPTION value="1">很满意（5星）</OPTION>
            <OPTION value="2">满意（4星）</OPTION>
            <OPTION value="2">一般（3星）</OPTION>
            <OPTION value="2">不满意（2星）</OPTION>
            <OPTION value="2">很不满意（1星）</OPTION>

            <OPTION value="2">不评价</OPTION>
          </SELECT>
        </div>
      </div>
    </div>

    <div class="dome1" id="yuanyin">
      <div class="dome2">
        就诊原因 <a class="add" id="add_yuanyin">+添加</a>
      </div>
      <div class="yuanyin_bd">
        <div class="yuanyin_item" id="yuanyin_0">
          <div class="dome3">
            <div class="dome4">就诊原因编码</div>
            <div class="dome5">
              <input type="text" class="D" name="D01C" value="" />
            </div>
          </div>
          <div class="dome3">
            <div class="dome4">就诊原因名称</div>
            <div class="dome5">
              <input type="text" class="D" name="D01N" value="" />
            </div>
          </div>
          <div class="dome3">
            <div class="dome4">是否主要就诊原因编码</div>
            <div class="dome5">
              <input type="text" class="D" name="D02C" value="" />
            </div>
          </div>
        </div>
      </div>
    </div>

    <div class="dome1" id="bingming">
      <div class="dome2">
        中医病名信息 <a class="add" id="add_bingming">+添加</a>
      </div>
      <div class="bingming_bd">
        <div class="bingming_item" id="bingming_0">
          <div class="dome3">
            <div class="dome4">中医疾病诊断编码（TCD）</div>
            <div class="dome5"><input type="text" class="G" name="G01C" /></div>
          </div>
          <div class="dome3">
            <div class="dome4">中医疾病诊断名称</div>
            <div class="dome5"><input type="text" class="G" name="G01N" /></div>
          </div>
          <div class="dome3">
            <div class="dome4">是否中医主病编码</div>
            <div class="dome5"><input type="text" class="G" name="G02C" /></div>
          </div>
        </div>
      </div>
    </div>

    <div class="dome1" id="houzhen">
      <div class="dome2">
        中医证候信息 <a class="add" id="add_houzhen">+添加</a>
      </div>
      <div class="houzhen_bd">
        <div class="houzhen_item" id="houzhen_0">
          <div class="dome3">
            <div class="dome4">中医证候诊断编码（TCD）</div>
            <div class="dome5"><input type="text" class="H" name="H01C" /></div>
          </div>
          <div class="dome3">
            <div class="dome4">中医证候诊断名称</div>
            <div class="dome5"><input type="text" class="H" name="H01N" /></div>
          </div>
          <div class="dome3">
            <div class="dome4">是否中医主证编码</div>
            <div class="dome5"><input type="text" class="H" name="H02C" /></div>
          </div>
        </div>
      </div>
    </div>

    <div class="dome1" id="yizhu">
      <div class="dome2">医嘱明细 <a class="add" id="add_yizhu">+添加</a></div>
      <div class="yizhu_bd">
        <div class="yizhu_item" id="yizhu_0">
          <div class="dome3">
            <div class="dome4">医嘱类型编码</div>
            <div class="dome5"><input type="text" class="E" name="E01" /></div>
          </div>
          <div class="dome3">
            <div class="dome4">处方号</div>
            <div class="dome5"><input type="text" class="E" name="E02" /></div>
          </div>
          <div class="dome3">
            <div class="dome4">医嘱项目编码</div>
            <div class="dome5"><input type="text" class="E" name="E03C" /></div>
          </div>
          <div class="dome3">
            <div class="dome4">医嘱项目名称</div>
            <div class="dome5"><input type="text" class="E" name="E03N" /></div>
          </div>

          <div class="dome3">
            <div class="dome4">医嘱时间</div>
            <div class="dome5"><input type="text" class="E" name="E04" /></div>
          </div>
          <div class="dome3">
            <div class="dome4">规格</div>
            <div class="dome5"><input type="text" class="E" name="E05" /></div>
          </div>
          <div class="dome3">
            <div class="dome4">给药途径</div>
            <div class="dome5"><input type="text" class="E" name="E06C" /></div>
          </div>
          <div class="dome3">
            <div class="dome4">数量</div>
            <div class="dome5"><input type="text" class="E" name="E07" /></div>
          </div>
          <div class="dome3">
            <div class="dome4">单价</div>
            <div class="dome5"><input type="text" class="E" name="E08" /></div>
          </div>
          <div class="dome3">
            <div class="dome4">每次用量</div>
            <div class="dome5"><input type="text" class="E" name="E09" /></div>
          </div>
          <div class="dome3">
            <div class="dome4">每次用量单位</div>
            <div class="dome5"><input type="text" class="E" name="E10C" /></div>
          </div>
          <div class="dome3">
            <div class="dome4">频度</div>
            <div class="dome5">
              <SELECT name="E11C" class="E">
                <OPTION value="1">立即</OPTION>
                <OPTION value="2">每30分钟一次</OPTION>
                <OPTION value="3">每2小时一次</OPTION>
                <OPTION value="4">每4小时一次</OPTION>
                <OPTION value="5">每6小时一次</OPTION>

                <OPTION value="6">每8小时一次</OPTION>

                <OPTION value="7">每12小时一次</OPTION>
                <OPTION value="8">每日一次</OPTION>
                <OPTION value="9">每日二次</OPTION>
                <OPTION value="10">每日三次</OPTION>

                <OPTION value="11">每日四次</OPTION>
                <OPTION value="12">每日六次</OPTION>

                <OPTION value="13">每二日一次</OPTION>
                <OPTION value="14">隔日1次</OPTION>
                <OPTION value="15">每周1次</OPTION>
                <OPTION value="16">每周两次</OPTION>

                <OPTION value="17">每周三次</OPTION>

                <OPTION value="18">两周一次</OPTION>

                <OPTION value="19">隔周一次</OPTION>
                <OPTION value="20">每三周一次</OPTION>

                <OPTION value="21">每四周一次</OPTION>
                <OPTION value="22">每晨</OPTION>

                <OPTION value="23">每晚</OPTION>
                <OPTION value="24">饭前</OPTION>

                <OPTION value="25">饭后</OPTION>
                <OPTION value="26">必要时</OPTION>

                <OPTION value="27">需要时</OPTION>
                <OPTION value="28">睡时</OPTION>
                <OPTION value="29">取药一次</OPTION>

                <OPTION value="30">其他频次</OPTION>
              </SELECT>
            </div>
          </div>
          <div class="dome3">
            <div class="dome4">执行天数</div>
            <div class="dome5"><input type="text" class="E" name="E12" /></div>
          </div>
          <div class="dome3">
            <div class="dome4">收费标志</div>
            <div class="dome5">
              <SELECT name="E13C" class="E">
                <OPTION value="1">未收费</OPTION>
                <OPTION value="2">正常收费</OPTION>
                <OPTION value="2">退费</OPTION>
              </SELECT>
            </div>
          </div>
        </div>
      </div>
    </div>

    <div class="dome1" id="feiyong">
      <div class="dome2">
        费用明细 <a class="add" id="add_feiyong">+添加</a>
      </div>
      <div class="feiyong_bd">
        <div class="feiyong_item" id="feiyong_0">
          <div class="dome3">
            <div class="dome4">费用类型代码</div>
            <div class="dome5"><input type="text" class="F" name="F01C" /></div>
          </div>
          <div class="dome3">
            <div class="dome4">名称</div>
            <div class="dome5"><input type="text" class="F" name="F01N" /></div>
          </div>
          <div class="dome3">
            <div class="dome4">开单科室编码</div>
            <div class="dome5"><input type="text" class="F" name="F02C" /></div>
          </div>
          <div class="dome3">
            <div class="dome4">交费时间</div>
            <div class="dome5"><input type="text" class="F" name="F03" /></div>
          </div>
          <div class="dome3">
            <div class="dome4">单价</div>
            <div class="dome5"><input type="text" class="F" name="F04" /></div>
          </div>
          <div class="dome3">
            <div class="dome4">数量</div>
            <div class="dome5"><input type="text" class="F" name="F05" /></div>
          </div>
        </div>
      </div>
    </div>

    <div class="dome-tj" id="sure">确定</div>
  </div>
</template>

<script>
import { allDepartment } from "@/libs/api";
export default {
  name: "HelloWorld",
  props: {
    msg: String,
  },
  data() {
    return {
      departmentName: [],
      departmentArr: [],
    };
  },
  created() {
    allDepartment().then((res) => {
      console.log(res);
      this.departmentArr = res.data;
    });
  },
  methods:{
    handleChange(){
      console.log(this.departmentName)
    }
  }
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
h3 {
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
}

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
  width: 62%;
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
