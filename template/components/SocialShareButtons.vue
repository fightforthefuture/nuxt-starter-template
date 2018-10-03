<template>
  <ul class="flex-center text-center">
    <li class="sml-pad-x1">Help us spread the word:</li>
    <li>
      <ShareButton
        network="twitter"
        :is-button="false"
        :should-display-text="false"
        @click.native="$trackClick('twitter_share_button')" />
    </li>
    <li class="sml-pad-x1">
      <ShareButton
        network="facebook"
        :is-button="false"
        :should-display-text="false"
        @click.native="$trackClick('facebook_share_button')" />
    </li>
  </ul>
</template>

<script>
import ShareButton from '~/components/ShareButton'

export default {
  components: {
    ShareButton
  }
}
</script>
