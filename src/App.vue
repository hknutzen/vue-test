<template>
  <v-app>
    <v-toolbar dense>
    <v-btn>Dienste, Freischaltungen</v-btn>
    <v-btn>Eigene Netze</v-btn>
    <v-btn>Diff</v-btn>
    <v-btn>Berechtigungen</v-btn>
    <v-spacer/>
    </v-toolbar>

    <v-content>
    <MasterTable/>
    </v-content>
  </v-app>
</template>

<script>
import MasterTable from './components/MasterTable'

export default {
  name: 'App',
  components: {
      MasterTable,
  },
  data () {
    return {
      //
    }
  }
}
</script>
