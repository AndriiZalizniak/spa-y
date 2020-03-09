<template>
  <v-container>
    <v-layout>
      <v-flex xs12 sm6>
        <v-card>
          <img :src="ad.src" width="100%" alt="">
          <v-card-text>
            <h2 class="text--primary">{{ ad.title }}</h2>
            <p>{{ ad.descr }}</p>
          </v-card-text>
          <v-card-actions>
            <v-spacer></v-spacer>
            <v-btn
              outlined
              min-width="120"
            >
              Edit
            </v-btn>
            <v-btn
              class="success"
              min-width="120"
            >
              Buy
            </v-btn>
          </v-card-actions>
        </v-card>
      </v-flex>
    </v-layout>
  </v-container>
</template>

<script>
export default {
  props: ['id'],
  computed: {
    ad () {
      const id = this.id
      return this.$store.getters.adById(id)
    }
  }
}
</script>

<style lang="scss">

</style>
