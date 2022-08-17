<template>
  <div>
    <v-app>
      <v-app-bar app>
        <v-responsive content-class="d-flex justify-space-between align-baseline">
          <v-responsive content-class="d-flex align-center">
            <v-app-bar-nav-icon @click="drawer = true"></v-app-bar-nav-icon>
            <v-app-bar-title>{{ headerTitle }}</v-app-bar-title>
          </v-responsive>
          <v-switch inset class="pt-5" style="width:105px" v-model="darkmode"
              prepend-icon="mdi-white-balance-sunny" append-icon="mdi-weather-night">
          </v-switch>
        </v-responsive>
      </v-app-bar>

      <v-navigation-drawer v-model="drawer" fixed temporary>
        <v-list nav dense>
          <v-list-item-group v-model="group">
            <v-list-item to="/">
              <v-icon class="me-2">mdi-home</v-icon>
              <v-list-item-title>Home</v-list-item-title>
            </v-list-item>
            <v-list-item to="/project">
              <v-icon class="me-2">mdi-application-brackets-outline</v-icon>
              <v-list-item-title>Portfolio</v-list-item-title>
            </v-list-item>
            <v-list-item to="/about-me">
              <v-icon class="me-2">mdi-information-outline</v-icon>
              <v-list-item-title>About</v-list-item-title>
            </v-list-item>
          </v-list-item-group>
        </v-list>
      </v-navigation-drawer>
      <v-main>
        <v-container>
          <v-row>
            <v-col>
              <router-view></router-view>
            </v-col>
          </v-row>
        </v-container>
      </v-main>

      <v-footer height="100">
        <div>
          <v-icon dense>mdi-copyright</v-icon>{{ footerLabel }}
          <div>
            <a href="https://www.facebook.com/gene.arthur.948" target="_blank" class="text-decoration-none">
              <v-icon>mdi-facebook</v-icon>
            </a>
            <v-icon>mdi-drag-vertical-variant</v-icon>
            <a href="https://github.com/bishopjin" target="_blank" class="text-decoration-none">
              <v-icon>mdi-github</v-icon>
            </a>
            <v-icon>mdi-drag-vertical-variant</v-icon>
            <a href="https://www.linkedin.com/in/gene-arthur-sedan-53aa50230/" target="_blank" class="text-decoration-none">
              <v-icon>mdi-linkedin</v-icon>
            </a>
          </div>
          <div class="text-md-subtitle-2 text-subtitle-2 pt-2">
            Published: August 6, 2022
          </div>
        </div>
      </v-footer>
    </v-app>
  </div>
</template>

<script>
  export default {
    name: 'App',

    data: () => ({
      drawer: false,
      group: null,
      darkmode: false,
    }),
    watch: {
      darkmode(newval, oldval) {
        this.darkmode = newval
        this.switchTheme()
      }
    },
    created() {
      this.$store.dispatch('getStoredState')
      this.darkmode = this.$store.state.darkmode.darkMode
      this.$vuetify.theme.dark = this.$store.state.darkmode.darkMode
    },
    methods: {
      switchTheme() {
        this.$store.dispatch('changeStoredState', this.darkmode)
        this.$vuetify.theme.dark = this.darkmode
      }
    },
    computed: {
      headerTitle() {
        let title;

        switch(this.$route.name) {
          case 'home':
            title = 'Home'; 
            break;
          case 'project':
            title = 'Projects';
            break;
          case 'about':
            title = 'About Me';
            break;
          default:
            title = '404 Not Found';
        }
        return title
      },
      footerLabel() {
        return new Date().getFullYear() + ' - Gene Arthur Sedan'
      },
    }
  };
</script>