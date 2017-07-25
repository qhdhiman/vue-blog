<template>
  <div id="app">
    <router-view></router-view>
    <mu-toast class="bottom" v-if="toast" :message="toastMsg" @close="hideToast"/>
  </div>
</template>

<script>
let toastTimer
export default {
  name: 'app',
  data () {
    return {
      toast: false,
      toastMsg: ''
    }
  },
  methods: {
    showToast ({message, duration = 2000}) {
      this.toastMsg = message
      this.toast = true
      toastTimer = setTimeout(() => {
        this.hideToast()
      }, duration)
    },
    hideToast () {
      this.toast = false
      clearTimeout(toastTimer)
    }
  }
}
</script>

<style>
  .container {
    text-align: left;
    background-color: #F7F7F5;
    position: absolute;
    width:100%;
    height:100%;
    bottom:0;
    overflow-y: auto;
    padding-top:56px;
    -webkit-overflow-scrolling: touch;
    box-sizing: border-box;
  }
  .mu-toast{
    width:auto;
  }
  .mu-toast.center {
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%)
  }
  .mu-toast.top {
    width:auto;
    top: 56px;
    left: 50%;
    transform: translateX(-50%)
  }
  .mu-toast.bottom {
    width:auto;
    bottom: 56px;
    left: 50%;
    transform: translateX(-50%)
  }
</style>
