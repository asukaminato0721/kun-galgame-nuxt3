<script setup lang="ts">
const error = useError()
const localePath = useLocalePath()

const handleError = async () => {
  clearError({
    redirect: localePath('/').toString()
  })
  await new Promise((resolve) => {
    setTimeout(resolve, 1007)
  })
  location.reload()
}
</script>

<template>
  <KunLayout>
    <div class="root" v-if="error">
      <div class="card" v-if="error.statusCode === 404">
        <h1>404</h1>
        <NuxtImg :src="useRandomSticker" />
        <p>{{ $t('pageError.404') }}</p>
        <KunButton type="danger" @click="handleError">
          {{ $t('pageError.remake') }}
        </KunButton>
      </div>

      <div class="card" v-else>
        <h1>{{ error.message }}</h1>
        <p>{{ $t('pageError.error') }}</p>
        <KunButton type="danger" @click="handleError">
          {{ $t('pageError.remake') }}
        </KunButton>
      </div>
    </div>
  </KunLayout>
</template>

<style lang="scss" scoped>
.root {
  display: flex;
  flex-direction: column;
  height: 100%;
  min-height: calc(100dvh - 75px);
  max-width: 80rem;
  margin: 0 auto;
}

.card {
  margin: 0 auto;
  padding: 17px;

  @include kun-center;
  flex-direction: column;
  @include kun-blur;

  h1 {
    color: var(--kungalgame-red-5);

    &::before {
      content: '';
      color: var(--kungalgame-blue-5);
      margin-right: 0;
    }
  }

  img {
    margin: 10px 0;
  }

  p {
    text-align: center;
    font-weight: bold;
    margin-bottom: 17px;
  }
}
</style>
