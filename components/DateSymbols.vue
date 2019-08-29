<template>
  <div>
    <div>
      <div class="symbols available">
        <draggable :list="availableSymbols" @start="drag=true" @end="drag=false" group="symbols">
          <a-tag v-for="sym in availableSymbols" :key="sym.id">{{ sym.symbol }}</a-tag>
        </draggable>
      </div>

      <div class="symbols selected">
        <draggable :list="selectedSymbols" @start="drag = true" @end="drag = true" group="symbols">
          <a-tag v-for="sym in selectedSymbols" :key="sym.id">{{ sym.symbol }}</a-tag>
        </draggable>
      </div>
    </div>
    <div></div>
  </div>
</template>

<script>
import { Vue, Component } from "vue-property-decorator";
import { Observer } from "mobx-vue";
import draggable from "vuedraggable";

@Observer
@Component({
  components: {
    draggable
  }
})
export default class DateSymbols extends Vue {
  drag = false;

  availableSymbols = [
    {
      id: 1,
      symbol: "F"
    },
    {
      id: 2,
      symbol: "j"
    },
    {
      id: 3,
      symbol: "Y"
    }
  ];

  selectedSymbols = [];
}
</script>

<style lang="scss" scoped>
.symbols {
  min-height: 20px;
  &.available {
    border: 2px solid red;
    border-radius: 3px;
  }
  &.selected {
    border: 2px solid blue;
    border-radius: 3px;
  }
}
</style>
