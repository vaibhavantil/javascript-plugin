<script>
import { GrammarlyInput } from "@grammarly/vue-textarea";
import { demoText, demoClientId } from "./demo";

export default {
  data: () => ({
    text: demoText,
    clientId: demoClientId,
    buttonOffset: { x: 36, y: 3 },
  }),
  components: { GrammarlyInput },
};
</script>

<template>
  <div style="width: 400px">
    <GrammarlyInput
      v-model="text"
      :clientId="clientId"
      :buttonOffset="buttonOffset"
    />
  </div>
</template>
