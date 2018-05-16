<template>
  <div>
  <div v-if="item" class="item-container">
    <p draggable="true"  @dragstart="startDrag">{{item}}</p>
  </div>
  <div class="item-container dropzone" v-else @drop="drop" @dragover="activateDropzone">
    Drop something here
  </div>
  </div>
</template>

<script>
export default {
  props: ["item", "location", "handleDrag", "handleDragEnter", "handleDrop"],
  data() {
    return {
      name: "Mason"
    };
  },
  methods: {
    activateDropzone(e) {
      if (e.target.className === "dropzone") {
        console.log('purple')
        e.target.style.backgroundColor = "purple";
      }
      e.preventDefault()
      this.handleDragEnter(this.location);
    },
    startDrag(e) {
      this.handleDrag(this.item, this.location);
    },
    drop(e) {
      e.preventDefault();
      this.handleDrop();
    }
  }
};
</script>

<style scoped>
.item-container {
  padding: 5px;
  border: 1px solid black;
  background-color: antiquewhite;
  min-width: 165px;
  height: 55px;
  display: flex;
  align-items: center;
}
p {
  width: 100%;
  border: 1px solid gray;
  padding: 10px;
  cursor: -webkit-grab;
  background-color: white;
  margin: 0;
}
</style>


