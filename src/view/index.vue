<!--
 * @Author: zhangpengwei@1338418459736990.onaliyun.com zhangpengwei@1338418459736990.onaliyun.com
 * @Date: 2023-03-15 22:29:25
 * @LastEditors: zhangpengwei@1338418459736990.onaliyun.com zhangpengwei@1338418459736990.onaliyun.com
 * @LastEditTime: 2023-11-10 17:53:42
 * @FilePath: /element-timeline-master/src/view/index.vue
 * @Description: 这是默认设置,请设置`customMade`, 打开koroFileHeader查看配置 进行设置: https://github.com/OBKoro1/koro1FileHeader/wiki/%E9%85%8D%E7%BD%AE
-->
<template>
  <div>
    <div class="checkdiv">
      <el-form :inline="true" :model="formData" ref="form" class="demo-form-inline" size="small">
        <el-form-item label="时间:">
          <el-date-picker
            v-model="formData.time"
            type="date"
            value-format="yyyy-MM-dd"
            :picker-options="pickerOptions"
            :clearable="false"
            placeholder="选择日期"
            @change="createNewDate"
          ></el-date-picker>
        </el-form-item>
      </el-form>
    </div>
    <p>默认状态</p>
    <time-line domRef="vs" :date="formData.time" @getHours="getHours" :clear="clear=='vs'" @clearHours="clearHours"/>
    <p>被我选择过的时段</p>
    <time-line domRef="vs3" :minHour="0" :maxHour="24" :checkedList="[10,10.5,11,11.5,12,12.5,13.5]"  @getHours="getHours" :clear="clear=='vs3'" @clearHours="clearHours"/>
    <p>其它人选择过的时段</p>
    <time-line domRef="vs18" :minHour="10.5" :maxHour="21.5" :disabledList="[{name:'张三',time:15},{name:'李四',time:15.5},{name:'王五',time:16}]" @getHours="getHours" :clear="clear=='vs18'" @clearHours="clearHours"/>
    <p>外部传来的时间根据日期预订（需要提前24小时预订）</p>
    <time-line domRef="vs19" :date="formData.time" :advance="24" :minHour="7" :maxHour="23" @getHours="getHours" :clear="clear=='vs19'" @clearHours="clearHours"/>
  </div>
</template>

<script>
import { TimeLine } from '../index.js';
console.log('TimeLine', TimeLine);

const format = n => {
  return n > 9 ? n : `0${n}`;
};
const getTimestamp = timestamp => {
  let d = new Date(timestamp);
  let year = d.getFullYear();
  let month = format(d.getMonth() + 1);
  let day = format(d.getDate());
  let hour = format(d.getHours());
  let minutes = format(d.getMinutes());
  return {
    NewDate: new Date(`${year}-${month}-${day}`),
    ym: year + "-" + month,
    ymd: year + "-" + month + "-" + day,
    hm: `${hour}:${minutes}`
  };
};
import timeLine from "@/components/timeLine";
export default {
  components: {
    timeLine
  },
  data() {
    return {
      clear: "",
      formData: {
        time: getTimestamp(new Date()).ymd
      },
      pickerOptions: {
        disabledDate(time) {
          return time.getTime() < Date.now() - 8.64e7;
        }
      },
    }
  },
  methods: {
    createNewDate(e) {
      this.$nextTick(()=>{
        //this.formData.time = e
        this.$set(this.formData,'time',e)
      })
    },
    getHours(e) {
      this.$message({
        type: 'success',
        message: JSON.stringify(e)
      })
    },
    clearHours(e) {
      this.clear = e
    }
  }
};
</script>

<style scoped>
</style>