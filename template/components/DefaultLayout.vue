<template>
  <div>
    <section class="sml-push-y3 med-push-y6">
      <div class="wrapper">
        <Logo class="grid-center text-center"/>
      </div> <!-- .wrapper -->
    </section>

    <slot></slot>

    <PageFooter/>
  </div>
</template>

<script>
import Logo from '~/components/Logo'
import PageFooter from '~/components/PageFooter'

export default {
  components: {
    Logo,
    PageFooter
  }
}
</script>
