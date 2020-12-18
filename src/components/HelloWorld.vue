<template>
  <h1>{{ msg }}</h1>
  <button @click="setcount">count is: {{ readersNumber }}</button>
  <button @click="setBook">current book: {{ book.title }} {{ plusOne }}</button>
  <button>second: {{ second.title }}</button>
  <button @click="testAlert">testAlert</button>
  <button @click="shareThis">分享</button>

  <p><button v-copy="copyText">复制</button></p>
  <p><button v-longpress="longpress">长按操作</button></p>
  <van-share-sheet
    v-model:show="showShare"
    :options="options"
    title="立即分享给好友"
    description="描述信息"
  />
  <div class="block">
    <span class="demonstration">默认</span>
    <el-date-picker v-model="value1" type="date" placeholder="选择日期">
    </el-date-picker>
  </div>
</template>

<script>
import { ref } from "vue";
import myvite from "../functions/myvite";
import second from "../functions/second";
export default {
  name: "HelloWorld",
  props: {
    msg: String,
  },
  setup() {
    const showShare = ref(false);
    const options = [
      { name: "微信", icon: "wechat" },
      { name: "微博", icon: "weibo" },
      { name: "复制链接", icon: "link", description: "描述信息" },
      { name: "分享海报", icon: "poster" },
      { name: "二维码", icon: "qrcode" },
    ];
    let shareData = { options, showShare };
    let setupData = Object.assign(myvite, shareData, second);
    return setupData;
  },
  data() {
    return {
      count: 0,
      copyText: "a copy directives",
      value1: "",
    };
  },
  methods: {
    //长按事件
    longpress() {
      console.log("长按事件生效");
    },
    //分享事件
    shareThis() {
      this.showShare = true;
    },
  },
};
</script>
<style>
button {
  display: block;
  margin: 0 auto;
  margin-bottom: 20px;
}
</style>
