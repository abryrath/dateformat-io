<template>
  <div>
    <a-radio-group :value="$store.lang" button-style="solid">
      <a-radio-button
        v-for="lang in $store.languages"
        :key="lang.id"
        :value="lang.id"
        @click="e => $store.setLanguage(parseInt(e.target.value))"
      >{{ lang.name }}</a-radio-button>
    </a-radio-group>
  </div>
</template>

<script>
import { Component, Vue } from "vue-property-decorator";
import { Observer } from "mobx-vue";

@Observer
@Component
export default class LanguageSelect extends Vue {
  mounted() {
    // console.log(this.$store);
  }
}
</script>
