<template>
<v-container fluid fill-height class="pa-0 ma-0">
  <v-layout>
    <v-flex xs6>
      <v-toolbar dense>
        <v-toolbar-title>Netzauswahl</v-toolbar-title>
      </v-toolbar>
      <Tabulator :config="getConfig()">
      </Tabulator>
    </v-flex>

    <v-flex xs6>
      <SubTable v-bind:active="selected"></SubTable>
    </v-flex>

  </v-layout>
</v-container>
</template>

<script>

import Tabulator from './Tabulator';
import SubTable from './SubTable';

export default {
    components: {
        Tabulator,
        SubTable
    },
    created: function() {
        this.getNetworks()
    },
    data: () =>
        ({ selected: null,
           config : {
               columns: [
                   { title: 'IP-Addresse', field: 'ip', sorter: 'ip' },
                   { title: 'Name', field: 'name' },
                   { title: 'Verantwortungsbereich', field: 'owner' },
               ],
               data: [],
               layoutColumnsOnNewData:true,
           }
         }),
    methods: {
        getConfig: function () {
            var c = this.config;
            c.rowClick = function(e, row) {
                this.selected = row.getData().name;
            }.bind(this);
            return c;
        },
        getNetworks: function () {
            var vm = this;	// get vue instance
            vm.axios.get('/login?email=guest&app=foo', { maxRedirects: 5 })
                .catch(function (error) {
                    alert('login: ' + error);
                });
            vm.axios.get('/get_networks', {
                params: {
                    chosen_networks: '',
                    active_owner: 'Polizei',
                    history: 'p50691'
                }})
                .then(function (response) {
                    vm.config.data = response.data.records;
                })
                .catch(function (error) {
                    vm.config.data = [];
                    alert('get_networks: ' + error);
                });
        },
    }
}
</script>

<style>

</style>
