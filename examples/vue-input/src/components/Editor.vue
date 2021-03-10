<script>
import { GrammarlyInput } from "@grammarly/vue-textarea";
import { demoText, demoClientId } from "./demo";

export default {
  data: () => ({ text: demoText, clientId: demoClientId }),
  components: { GrammarlyInput },
};
</script>

<template>
  <GrammarlyInput v-model="text" style="width: 100%" :clientId="clientId" />
</template>
