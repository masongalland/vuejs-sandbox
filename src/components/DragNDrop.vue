<template>
  <div class="list-container">
    <List :item='items.one'
          :location='"one"'
          :handleDrag='handleDrag'
          :handleDragEnter='handleDragEnter'
          :handleDrop='handleDrop'
    />
    <List :item='items.two'
          :location='"two"'
          :handleDrag='handleDrag'
          :handleDragEnter='handleDragEnter'
          :handleDrop='handleDrop'
    />

  </div>
</template>

<script>
  import List from './List'
  export default {
    data() {
      return {
        items: {
          one: "",
          two: "drag me"
        },
        draggedItem: "",
        draggedFrom: "",
        destination: ""
      }
    },
    methods: {
      handleDrag(value, origin) {
        this.draggedFrom = origin;
        this.draggedItem = value;
      },
      handleDragEnter(destination) {
        this.destination = destination
      },
      handleDrop() {
        this.items[this.draggedFrom] = "";
        this.items[this.destination] = this.draggedItem;
      }
    },
    components: {List}
  }
</script>

<style scoped>
  .list-container{
    display: flex;
    justify-content: space-around;
  }
</style>
