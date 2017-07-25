<template>
  <div class="container">
    <mu-refresh-control :refreshing="refreshing" :trigger="el" @refresh="refresh"/>
    <mu-list>
      <template v-for="item in list">
        <mu-card>
          <mu-card-header title="邵铁军" subTitle="欲望以提升热情 毅力以磨平高山">
            <mu-avatar src="http://www.muse-ui.org/images/uicon.jpg" slot="avatar"/>
          </mu-card-header>
          <mu-card-title :title="item.title" subTitle=""/>
          <mu-card-text>
            {{item.content}}
          </mu-card-text>
          <mu-card-actions>
            <mu-flat-button label="点赞"/>
            <mu-flat-button label="评论"/>
          </mu-card-actions>
        </mu-card>
      </template>
    </mu-list>
    <mu-infinite-scroll v-if="!isEnd" :scroller="scroller" :loading="loading" @load="loadMore"/>
  </div>
</template>
<script>
import ArticleServ from '@/services/ArticleServ'
export default {
  data () {
    return {
      list: [],
      refreshing: false,
      loading: false,
      isEnd: false,
      el: null,
      scroller: null,
      paging: {
        page: 0,
        limit: 5
      }
    }
  },
  async mounted () {
    this.el = this.$el
    this.scroller = this.$el
    this.refresh()
  },
  methods: {
    async refresh () {
      this.paging.page = 0
      this.refreshing = true
      const res = await ArticleServ.all(this.paging)
      this.list = res.data
      this.refreshing = false
    },
    async loadMore () {
      console.log('loadMore')
      this.paging.page += 1
      this.loading = true
      const res = await ArticleServ.all(this.paging)
      this.isEnd = res.data.length <= 0
      this.list.push(...res.data)
      this.loading = false
    }
  }
}
</script>

<style>
  .container {
    background-color: #F7F7F5;
    position: absolute;
    width:100%;
    height:100%;
    bottom:0;
    overflow-y: auto;
  }
  .mu-card {
    margin-top: 10px;
  }
  .mu-card-header,
  .mu-card-text,
  .mu-card-title-container {
    text-align: left;
  }
  .mu-icon-menu {
    float: right;
  }
  .mu-card-actions {
    text-align: right;
  }
</style>
