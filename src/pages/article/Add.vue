<template>
  <div class="container">
    <TopBar></TopBar>
    <mu-card>
      <mu-card-header>
        <mu-text-field label="主题" labelFloat v-model="title"/>
      </mu-card-header>
      <mu-card-text>
        <mu-text-field label="内容" multiLine :rows="10" :rowsMax="20" v-model="content" labelFloat/>
      </mu-card-text>
      <mu-card-actions>
        <mu-raised-button :fullWidth="true" :disabled="!canSave" @click="save" label="保存" class="demo-raised-button" secondary/>
      </mu-card-actions>
    </mu-card>
  </div>
</template>
<script>
import TopBar from '@/components/TopBar'
import ArticleServ from '@/services/ArticleServ'
export default {
  name: 'Add',
  data () {
    return {
      title: '',
      content: '',
      tags: 'tag1,tag2'
    }
  },
  computed: {
    canSave () {
      return this.title && this.content
    }
  },
  async mounted () {
  },
  methods: {
    async save () {
      console.log('title', this.title)
      console.log('content', this.content)
      const params = {
        title: this.title,
        content: this.content,
        tags: this.tags
      }
      const res = await ArticleServ.add(params)
      if (res.result === 'ok') {
        this.$parent.showToast({message: '保存成功'})
        this.$router.back()
      }
    }
  },
  components: {
    TopBar
  }
}
</script>

<style scoped>
  .mu-text-field {
    width:100%;
  }

</style>
