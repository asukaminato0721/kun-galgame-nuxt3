<script setup lang="ts">
const { locale } = useI18n()

const props = defineProps<{
  uid: number
}>()

const pageData = reactive({
  page: 1,
  limit: 50
})

const { data, status } = await useFetch(`/api/user/${props.uid}/replies`, {
  method: 'GET',
  query: pageData,
  ...kungalgameResponseHandler
})
</script>

<template>
  <div class="reply" v-if="data && data.replies.length">
    <div class="item" v-for="(replyData, index) in data.replies" :key="index">
      <NuxtLinkLocale :to="`/topic/${replyData.tid}`">
        <div class="title">
          {{ markdownToText(replyData.content) }}
        </div>
        <div class="time">
          {{ formatDate(replyData.time, locale, { isShowYear: true }) }}
        </div>
      </NuxtLinkLocale>
    </div>

    <KunPagination
      class="pagination"
      v-if="data.totalCount > 50"
      :page="pageData.page"
      :limit="pageData.limit"
      :sum="data.totalCount"
      :status="status"
      @set-page="(newPage) => (pageData.page = newPage)"
    />
  </div>
</template>

<style lang="scss" scoped>
.item {
  width: 100%;
  margin-top: 17px;
  border-radius: 10px;
  box-shadow: var(--shadow);
  cursor: pointer;

  a {
    border-radius: 10px;
    padding: 10px;
    height: 100%;
    color: var(--kungalgame-font-color-3);
    display: flex;
    justify-content: space-between;
    align-items: center;
    transition: all 0.2s;

    &:hover {
      color: var(--kungalgame-blue-5);
      background-color: var(--kungalgame-trans-blue-0);
    }
  }
}

.title {
  display: inline-block;
  overflow: hidden;
  white-space: nowrap;
  text-overflow: ellipsis;
}

.time {
  font-size: small;
}
</style>
