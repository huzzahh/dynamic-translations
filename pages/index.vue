<template>
  <div>
    <h1>{{ $t("Filmes") }}</h1>
    <h1>{{ $t("Series") }}</h1>
    <select v-model="select">
      <option v-for="loc in locale.lang" :key="loc.lang" :value="loc" p-1>
        {{ loc }}
      </option>
    </select>
    <button @click="translateContent">Translate</button>
  </div>
</template>

<script setup>
const select = ref("");
const config = useRuntimeConfig();
const locale = {
  lang: ["pt", "en", "fr", "de", "it", "nl", "pl", "ru", "zh"],
};

async function translateContent() {
  await $fetch("/api/create-translation", {
    headers: {
      Authorization: config.OPENAI_API_KEY,
    },
    method: "POST",
    body: {
      message: select.value,
    },
  });
  // window.location.reload();
}
</script>
