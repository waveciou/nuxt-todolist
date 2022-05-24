<template>
  <div class="wrapper">
    <Header />
    <main class="main">
      <Content />
    </main>
    <transition name="fade" mode="out-in">
      <div v-if="isLoading" class="loader">
        <div class="loader__icon">
          <span />
          <p>loading...</p>
        </div>
      </div>
    </transition>
  </div>
</template>

<script>
  import header from '~/components/header.vue';
  import content from '~/components/content.vue';
  export default {
    name: 'Home',
    components: {
      Header: header,
      Content: content
    },
    created() {
      this.getLocalData();
    },
    methods: {
      getLocalData() {
        const database = localStorage.getItem('nuxt-todolist');
        if (database) {
          let localData = [];
          try {
            localData = JSON.parse(database) || [];
          } catch {
            localData = [];
          }
          const retult = Array.isArray(localData) ? localData : [];
          this.$store.commit('SET_TODOLIST', retult);
        }
      }
    },
    computed: {
      isLoading() {
        return this.$store.state.isLoading;
      }
    },
    watch: {
      isLoading: {
        immediate: true,
        handler(value) {
          if (value === true) {
            document.documentElement.classList.add('is-fixed');
          } else {
            document.documentElement.classList.remove('is-fixed');
          }
        }
      }
    }
  };

</script>

<style lang="scss" scoped>
  @import '~/assets/scss/_utils.scss';

  @keyframes loading {
    0% {
      transform: rotate(0deg);
    }

    50% {
      transform: rotate(180deg);
    }

    100% {
      transform: rotate(360deg);
    }
  }

  .wrapper {
    padding-top: $header-height;
  }

  .main {
    padding: 16px 10px;
  }

  .loader {
    width: 100%;
    height: 100%;
    display: flex;
    align-items: center;
    justify-content: center;
    position: fixed;
    top: 0;
    left: 0;
    background-color: rgba($color-blue, 0.6);
    z-index: 6000;

    &__icon {
      >span {
        width: 20px;
        height: 20px;
        padding: 20px;
        margin: 0 auto;
        display: block;
        border: 7px dashed $color-white;
        border-radius: 100%;
        animation: loading 1.5s 0.3s cubic-bezier(0.17, 0.37, 0.43, 0.67) infinite;
      }

      p {
        padding: 5px;
        font-size: 16px;
        font-weight: 700;
        color: rgba($color-black, 0.6);
      }
    }
  }

</style>
