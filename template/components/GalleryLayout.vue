<template>
  <div>
    <PageHeader/>

    <slot></slot>
  </div>
</template>

<script>
import PageHeader from '~/components/PageHeader'

export default {
  components: {
    PageHeader
  }
}
</script>
