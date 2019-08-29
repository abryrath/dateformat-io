<template>
  <div class="container">
    <div>
        <div>Symbols: {{ JSON.stringify(symbols) }}</div>
      <language-select />
      <date-symbols />
    </div>
  </div>
</template>

<script>
import LanguageSelect from "../components/LanguageSelect.vue";
import DateSymbols from "../components/DateSymbols.vue";
import axios from "~/plugins/axios";

export default {
  components: {
    LanguageSelect,
    DateSymbols
  },
  async asyncData() {
    const { symbols } = await axios.get("actions/dateformat/date-symbols/index");
    // console.log(symbols);
    return { symbols: symbols };
  }
};
</script>

<style>
.container {
  margin: 0 auto;
  min-height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;
  text-align: center;
}

.title {
  font-family: "Quicksand", "Source Sans Pro", -apple-system, BlinkMacSystemFont,
    "Segoe UI", Roboto, "Helvetica Neue", Arial, sans-serif;
  display: block;
  font-weight: 300;
  font-size: 100px;
  color: #35495e;
  letter-spacing: 1px;
}

.subtitle {
  font-weight: 300;
  font-size: 42px;
  color: #526488;
  word-spacing: 5px;
  padding-bottom: 15px;
}

.links {
  padding-top: 15px;
}
</style>
