<template>
  <div class="flex-row text-center">
    <ShareButton
      network="twitter"
      :url="url"
      :should-display-icon="false"
      class="btn-sml btn-block"
      @click.native="$trackClick('twitter_share_button')" />
    <ShareButton
      network="facebook"
      :url="url"
      :should-display-icon="false"
      class="btn-sml btn-block"
      @click.native="$trackClick('facebook_share_button')" />
  </div> <!-- .flex-row -->
</template>

<script>
import ShareButton from '~/components/ShareButton'

export default {
  components: {
    ShareButton
  },

  props: {
    url: {
      type: String,
      required: false,
      default: null
    }
  },
}
</script>
