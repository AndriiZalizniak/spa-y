<template>
  <v-container>
    <v-layout row class="pt-10">
      <v-flex xs12 sm6 offset-sm3>
        <v-list
          subheader
          two-line
          flat
        >
          <h1 class="text--secondary pb-3">Orders</h1>
          <v-list-item-group
            v-model="settings"
            multiple
          >
            <v-list-item
              avatar
              v-for="order in orders"
              :key="order.id"
            >
              <template>
                <v-list-item-action>
                  <v-checkbox
                    color="warning"
                    :input-value="order.done"
                    @change="markDone(order)"
                  ></v-checkbox>
                </v-list-item-action>

                <v-list-item-content>
                  <v-list-item-title>{{ order.name }}</v-list-item-title>
                  <v-list-item-subtitle>{{ order.phone }}</v-list-item-subtitle>
                </v-list-item-content>

                <v-list-item-action>
                  <v-btn
                    outlined
                    :to="'/ad/' + order.adId"
                  >Open</v-btn>
                </v-list-item-action>
              </template>
            </v-list-item>
          </v-list-item-group>
        </v-list>
      </v-flex>
    </v-layout>
  </v-container>
</template>

<script>
export default {
  data () {
    return {
      orders: [
        {
          id: 'id1',
          name: 'Andrii',
          phone: '+380961912717',
          adId: '123',
          done: false
        }
      ]
    }
  },
  methods: {
    markDone (order) {
      order.done = true
    }
  }
}
</script>

<style lang="scss">

</style>
