<template>
  <div :class="{ __disabled: disabled }" class="select">
    <div @click="toggle" class="select_label">
      {{ getLabel(value) }}
    </div>
    <div v-if="opened" class="select_options">
      <div v-for="o in options"
           :value="getVal(value)"
           @click="change(o)"
           :class="{__active: getVal(o) == getVal(value)}"
           class="select_option"
           :key="o.id">
        {{ getLabel(o) }}
      </div>
    </div>
    <div v-if="opened" @click="toggle" class="select_overlay"></div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      opened: false
    };
  },

  props: {
    value: {
      required: true
    },
    options: {
      type: Array,
      required: true
    },
    valueKey: {
      type: String,
      required: false
    },
    labelKey: {
      type: String,
      required: false
    },
    onChange: {
      type: Function,
      required: false
    },
    disabled: {
      type: Boolean
    }
  },

  methods: {
    getVal(opt) {
      return !this.valueKey ? opt : opt[this.valueKey];
    },
    getLabel(opt) {
      return !this.labelKey ? opt : opt[this.labelKey];
    },
    change(opt) {
      this.$emit("input", opt);
      this.opened = false;

      if (this.onChange !== undefined) {
        this.onChange(this.value);
      }
    },
    toggle() {
      if (this.disabled) {
        return;
      }
      this.opened = !this.opened;
    }
  }
};
</script>

<style>
.select {
  display: flex;
  justify-content: center;
}
.select_label {
  cursor: pointer;
  background: gray;
  display: flex;
}
.select_options {
  position: absolute;
  background: #262626;
  border: 1px solid #242424;
  border-radius: 2px;
  z-index: 1001;
  top: 19px + 9px;
}
.select_option {
    cursor: pointer;
    color: #bdbdbd;
    padding: 7px 13px;
    white-space: nowrap;
    text-align: left;
}
</style>