<template>
  <div class="container">
    <mu-refresh-control :refreshing="refreshing" :trigger="el" @refresh="refresh"/>
    <mu-list>
      <template v-for="item in list">
        <mu-card>
          <mu-card-header  v-if="item['owner']" @click.native="goList(item['owner']._id)" :title="item['owner'].name" subTitle="欲望以提升热情 毅力以磨平高山">
            <mu-avatar :src="item['owner'].head" slot="avatar"/>
          </mu-card-header>
          <mu-card-title :title="item.title" :subTitle="item.create_time | time"/>
          <mu-card-text>
            {{item.content}}
          </mu-card-text>
          <mu-card-actions>
            <actions :article="item" @favorite="refresh"></actions>
          </mu-card-actions>
          <mu-list v-if="item.comments.length > 0">
            <mu-sub-header>评论</mu-sub-header>
            <template v-for="comment in item.comments" v-if="comment.user">
              <mu-divider/>
              <mu-list-item :title="comment.comment">
                <mu-avatar :src="comment.user.head" slot="leftAvatar" :size="30"/>
                <!-- <mu-icon value="chat_bubble" slot="right"/> -->
              </mu-list-item>
            </template>
          </mu-list>
        </mu-card>
      </template>
    </mu-list>
    <mu-infinite-scroll v-if="!isEnd" :scroller="scroller" :loading="loading" @load="loadMore"/>
    <p class="text-center" v-else>已经到底了</p>
  </div>
</template>
<script>
import Actions from '@/components/Actions'
import ArticleServ from '@/services/ArticleServ'
import Moment from 'moment'
Moment.locale('zh-cn')
export default {
  name: 'List',
  data () {
    return {
      userId: this.$route.params._uId,
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
  filters: {
    time (value) {
      return Moment(value).fromNow()
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
      this.isEnd = false
      const res = await ArticleServ.listByUserId(this.userId, this.paging)
      this.list = res.data
      this.refreshing = false
    },
    async loadMore () {
      console.log('loadMore')
      this.paging.page += 1
      this.loading = true
      const res = await ArticleServ.listByUserId(this.userId, this.paging)
      this.isEnd = res.data.length <= 0
      this.list.push(...res.data)
      this.loading = false
    }
  },
  components: {
    Actions
  }
}
</script>

<style scoped>
  .fixed-button {
    position: fixed;
    right:15px;
    bottom: 45px;
  }
  .mu-list {
    padding:0;
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
  .text-center {
    text-align: center;
  }
</style>
