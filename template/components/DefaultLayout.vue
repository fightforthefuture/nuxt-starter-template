<template>
  <div>
    <PageHeader/>

    <slot></slot>

    <PageFooter/>
  </div>
</template>

<script>
import Logo from '~/components/Logo'
import PageHeader from '~/components/PageHeader'
import PageFooter from '~/components/PageFooter'

export default {
  components: {
    Logo,
    PageHeader,
    PageFooter
  }
}
</script>
