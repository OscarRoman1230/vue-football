<template>
  <section>
    <div v-for="(item, index) in matches" :key="index" class="mx-auto">
      <cards :match="item" class="mx-auto" />
    </div>
  </section>
</template>

<script>
import cards from "./utils/cards";

export default {
  name: "MatchesList",
  components: {
    cards
  },
  props: {
    matches: {
      type: Array,
      default: null
    }
  }
}
</script>

<style scoped>

</style>
