<script setup lang="ts">
import Card from "~/components/plans/Card.vue";
import Sidebar from "~/components/widgets/Sidebar.vue";
import QuestionsModal from "~/components/products/QuestionsModal.vue";
import {useDb} from "~/composables/useDb";
import {useQuestionsStore} from "~/stores/questionsStore";

var router = useRoute();
var category = router.params.category;

definePageMeta({
  layout: "gradient",
});
const questionsStore = useQuestionsStore();
const questionTitle = computed(() => {
  if (questionsStore.questions.length == 0) return "";
  return questionsStore.questions[questionsStore.currStep].title;
});
</script>

<template>
  <div class="flex min-h-screen w-screen sm:flex-col md:flex-row">
    <Sidebar :plan="questionTitle" />
    <div class="flex flex-col h-full flex-1 flex-wrap px-8 items-center gap-4 justify-center ">
<!--      <h1>{{category}}</h1>-->
      <QuestionsModal/>
    </div>
  </div>
</template>

<style scoped lang="scss">

</style>
