<template>
  <v-app>
    <v-navigation-drawer
    app
    temporary
    v-model="drawer"
    >
      <v-list>
        <v-list-item
          :to="link.url"
          v-for="link of links"
          :key="link.title"
        >
          <v-list-item-icon>
            <v-icon>{{ link.icon }}</v-icon>
          </v-list-item-icon>

          <v-list-item-content>
            <v-list-item-title v-text="link.title"></v-list-item-title>
          </v-list-item-content>
        </v-list-item>
      </v-list>
    </v-navigation-drawer>

    <v-app-bar app color="warning">
      <v-app-bar-nav-icon
        @click="drawer = !drawer"
        class="hidden-md-and-up"
      >

      </v-app-bar-nav-icon>
      <v-toolbar-title class="toolbar">
        <router-link to="/" class="pointer">Ad aplication</router-link>
      </v-toolbar-title>
      <v-spacer></v-spacer>

      <v-app-bar-items class="hidden-sm-and-down">
        <v-btn
          v-for="link of links"
          :key="link.title"
          :to="link.url"
          text
        >
          <v-icon left>{{ link.icon }}</v-icon>
          {{ link.title }}
        </v-btn>
      </v-app-bar-items>
    </v-app-bar>

    <v-content>
      <router-view></router-view>
    </v-content>
  </v-app>
</template>

<script>

export default {
  data () {
    return {
      drawer: false,
      links: [
        {
          title: 'Login',
          icon: 'mdi-lock',
          url: '/login'
        },
        {
          title: 'Registration',
          icon: 'mdi-head-plus-outline',
          url: '/registration'
        },
        {
          title: 'Orders',
          icon: 'mdi-equalizer-outline',
          url: '/orders'
        },
        {
          title: 'New ad',
          icon: 'mdi-tag-plus-outline',
          url: '/new'
        },
        {
          title: 'My ads',
          icon: 'mdi-tag-text-outline',
          url: '/list'
        }
      ]
    }
  }
}
</script>

<style lang="scss">
.toolbar .pointer {
  text-decoration: none;
  color: inherit;

  &:hover {
    opacity: 0.8;
  }
}
</style>
