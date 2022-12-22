<script setup lang="ts">
import { useUserStore } from '@/stores/user';
import { pocketBaseSymbol } from '@/symbols/injectionSymbols';
import { inject, onMounted, ref } from 'vue'
import DoneComponent from '@/components/DoneComponent.vue';
</script>

<template>
  <DoneComponent />
</template>
