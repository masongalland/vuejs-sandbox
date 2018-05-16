<template>
  <div>
    <h1 @click='changeName'>My super cool header, for {{myName}}</h1>
  </div>
</template>

<script>
export default {
  props: ["myName"],
  methods: {
    changeName() {
      this.$emit("changeName", "Hector");
    }
  }
};
</script>

<style>

</style>