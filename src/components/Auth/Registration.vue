<template>
  <v-container
    class="fill-height justify-center align-center"
    fluid
  >
    <v-row
      align="center"
      justify="center"
    >
      <v-col
        cols="12"
        sm="8"
        md="4"
      >
        <v-card class="elevation-11">
          <v-toolbar
            color="warning"
            flat
            class="elevation-3"
          >
            <v-toolbar-title>Registration form</v-toolbar-title>
          </v-toolbar>
          <v-card-text>
            <v-form
              ref="form"
              v-model="valid"
              lazy-validation
            >
              <v-text-field
                label="email"
                name="login"
                prepend-icon="mdi-email"
                type="email"
                v-model="email"
                :rules="emailRules"
                required
              />
              <v-text-field
                label="Password"
                name="password"
                prepend-icon="mdi-lock"
                type="password"
                v-model="password"
                :counter="6"
                :rules="passwordRules"
                required
              />
              <v-text-field
                label="Password"
                name="confirm-password"
                prepend-icon="mdi-lock-plus"
                type="password"
                v-model="confirmPassword"
                :counter="6"
                :rules="confirmPasswordRules"
                required
              />
            </v-form>
          </v-card-text>
          <v-card-actions>
            <v-spacer />
            <v-btn
              width="150"
              outlined
              color="dark"
              @click="onSubmit"
              :disabled="!valid"
            >Create account</v-btn>
            <v-spacer />
          </v-card-actions>
        </v-card>
      </v-col>
    </v-row>
  </v-container>
</template>

<script>

export default {
  data () {
    return {
      email: '',
      password: '',
      confirmPassword: '',
      valid: false,
      emailRules: [
        v => !!v || 'E-mail is required',
        v => /.+@.+\..+/.test(v) || 'E-mail must be valid'
      ],
      passwordRules: [
        v => !!v || 'Password is required',
        v => (v && v.length >= 6) || 'Password must be less than 6 characters'
      ],
      confirmPasswordRules: [
        v => !!v || 'E-mail is required',
        v => v === this.password || 'You have mistake'
      ]
    }
  },
  methods: {
    onSubmit () {
      if (this.$refs.form.validate()) {
        const user = {
          email: this.email,
          password: this.password
        }

        console.log(user)
      }
    }
  }
}
</script>

<style lang="scss">

</style>
