<template>
<div>
  <v-toolbar dense>
    <v-toolbar-title>Enthaltene Ressourcen</v-toolbar-title>
  </v-toolbar>
  <Tabulator :config="config">
  </Tabulator>
</div>
</template>

<script>

import Tabulator from './Tabulator';
export default {
    components: {
        Tabulator,
    },
    props:['active'],

    data: () => ({
        config : {
            columns: [
                { title: 'IP-Addresse', field: 'ip', sorter: 'ip' },
                { title: 'Name', field: 'name' },
                { title: 'Verantwortungsbereich', field: 'owner' },
            ],
            data: [],
            layoutColumnsOnNewData:true,
        },
    }),
    watch: {
        active: function () {
            this.getHosts()
        }
    },
    methods: {
        getHosts: function () {
            var vm = this;	// get vue instance
            vm.axios.get('/get_hosts', {
                params: {
                    network: this.active,
                    active_owner: 'Polizei',
                    history: 'p50691'
                }})
                .then(function (response) {
                    vm.config.data = response.data.records;
                })
                .catch(function (error) {
                    alert('get_hosts: ' + error);
                });
        },
    }
}
</script>

<style>

</style>
