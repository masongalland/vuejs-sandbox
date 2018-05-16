<template>
  <div>
    <CustomSelect :options="options"
                   value-key="id"
                   label-key="name"
                   :onChange="onChange"
                   v-model="selected"></CustomSelect>
  </div>
</template>

<script>
  import CustomSelect from './CustomSelect'
  export default {
    data() {
      return {
        options: [{name:'Mason', id:1}, {name:'Devon', id:2},{name:'Braydon', id:3},{name:'Ethan', id:4},{name:'Kollin', id:5}],
        selected: {name:'Mason', id:1}
      }
    },
    components: {CustomSelect},
    methods: {
      onChange(val) {
        alert(`you selected: ${val}`)
      }
    }
  }
</script>

<style>

</style>
