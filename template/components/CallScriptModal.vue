<template>
  <div class="text-center">
    <h2 class="text-success">
      Calling you now&hellip;
    </h2>
    <p class="sml-push-y1">
      <strong>Introduce yourself, be polite, and say:</strong>
    </p>
    <p class="text-meta">{{ callScript }}</p>

    <h4 class="sml-push-y2 med-push-y3">
      Done calling? Do these things, too!
    </h4>
    <SocialShareButtons class="sml-push-y2"/>
  </div>
</template>


<script>
import { mapState } from 'vuex'
import SocialShareButtons from '~/components/SocialShareButtons'

export default {
  components: {
    SocialShareButtons
  },

  computed: {
    ...mapState(['callScript'])
  }
}
</script>
