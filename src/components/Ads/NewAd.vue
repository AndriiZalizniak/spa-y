<template>
  <v-container>
    <v-layout class="pt-10">
      <v-flex xs12 sm6 offset-sm3>
        <h1 class="text--secondary mb-3">Create new ad</h1>
        <v-form
          ref="form"
          v-model="valid"
          validation
          class="pb-5"
        >
          <v-text-field
            label="Title"
            name="Ad title"
            type="text"
            v-model="title"
            :rules="[v => !!v || 'Title is required']"
            required
            color="warning"
          />

          <v-textarea
            label="Ad description"
            name="descr"
            type="text"
            v-model="description"
            :rules="[v => !!v || 'Description is required']"
            multi-line
            required
            color="warning"
          ></v-textarea>
        </v-form>

        <v-layout class="pb-3">
          <v-flex xs12 sm6 offset-ms3>
            <v-btn
              outlined
              @click="loader = 'loading3'"
            >
              Upload
              <v-icon right dark>mdi-cloud-upload</v-icon>
            </v-btn>
          </v-flex>
        </v-layout>

        <v-layout>
          <v-flex xs12 sm6 offset-ms3>
            <img mt-10 src="" height="100" alt="">
          </v-flex>
        </v-layout>

        <v-layout>
          <v-flex xs12>
            <v-switch
              label="Add to promo?"
              v-model="promo"
              color="warning"
            ></v-switch>
          </v-flex>
        </v-layout>

        <v-layout>
          <v-flex xs12>
            <v-spacer></v-spacer>
            <v-btn
              :disabled="!valid"
              @click="createdAd"
              outlined
              color="warning"
            >
              Create ad
            </v-btn>
          </v-flex>
        </v-layout>
      </v-flex>
    </v-layout>
  </v-container>
</template>

<script>
export default {
  data () {
    return {
      title: '',
      description: '',
      promo: false,
      valid: false
    }
  },
  methods: {
    createdAd () {
      if (this.$refs.form.validate()) {
        const ad = {
          title: this.title,
          description: this.description,
          promo: this.promo,
          src: 'http://russian.auto-diagnosticstools.com/photo/auto-diagnosticstools/editor/20130326122522_81495.jpg'
        }
        this.$store.dispatch('createdAd', ad)
      }
    }
  }
}
</script>

<style lang="scss">

</style>
