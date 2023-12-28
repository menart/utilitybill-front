<template>
  <div>
    <div class="row">
      <div class="col-3 m-auto">
        <TheLogin/>
      </div>
    </div>
  </div>
</template>

<script>
import TheLogin from '@/components/TheLogin.vue'

export default {
  name: 'TheMainView',
  components: {
    TheLogin
  }
}
</script>
