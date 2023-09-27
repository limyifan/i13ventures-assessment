<script lang="ts" setup>
import Button from "~/components/widgets/Button.vue";
import { useDb } from "~/composables/useDb";
import { useQuestionsStore } from "~/stores/questionsStore";
import LoadingScreen from "~/components/widgets/LoadingScreen.vue";

const router = useRouter();
const { questions_DB } = useDb();
const questionsStore = useQuestionsStore();
const answer = ref("");
const isFieldEmpty = ref(false);
const isProcessing = ref(false);

onMounted(() => {
  questionsStore.setQuestions(questions_DB);
});
const questionTitle = computed(() => {
  if (questionsStore.questions.length == 0) return "Loading...";
  return questionsStore.questions[questionsStore.currStep].title;
});
const questionDesc = computed(() => {
  if (questionsStore.questions.length == 0) return "Loading...";
  return questionsStore.questions[questionsStore.currStep].description;
});
const nextQuestion = () => {
  isFieldEmpty.value = answer.value == "";
  if (isFieldEmpty.value) return;
  questionsStore.nextStep(answer.value);
  answer.value = questionsStore.questions[questionsStore.currStep].answer;
  isFieldEmpty.value = false;
};
const prevQuestion = () => {
  questionsStore.prevStep();
  answer.value = questionsStore.questions[questionsStore.currStep].answer;
  isFieldEmpty.value = false;
};

const finish = () => {
  nextQuestion();
  if (isFieldEmpty.value) return;
  isProcessing.value = true;
  setTimeout(() => {
    questionsStore.clearAnswers();
    router.push("/results");
  }, 2000);
};
</script>

<template>
  <div
    class="inline-flex w-96 flex-col gap-8 rounded-2xl border border-black bg-neutral-100 p-4 shadow"
  >
    <p class="font-plus text-xl font-semibold text-black">
      {{ questionTitle }}
    </p>
    <p class="text-md font-regular font-plus text-black">
      {{ questionDesc }}
    </p>
    <div class="flex flex-col gap-1">
      <textarea
        v-model="answer"
        :style="isFieldEmpty ? { border: '1px solid red' } : {}"
        class="rounded-md bg-white p-2"
        placeholder="Your answer"
        rows="6"
      />
      <span class="font-regular font-plus text-xs text-red-600">
        {{ isFieldEmpty ? "Please fill in the field" : "" }}
      </span>
    </div>

    <div class="flex justify-end gap-2">
      <Button
        v-if="questionsStore.currStep > 0"
        text="Previous"
        @click="prevQuestion"
      />
      <Button
        v-if="questionsStore.currStep < questionsStore.questions.length - 1"
        text="Next"
        @click="nextQuestion"
      />
      <Button v-else text="Finish" @click="finish" />
    </div>

    <div class="text-center font-saira text-sm font-medium text-black">
      Step: {{ questionsStore.currStep + 1 }}/{{
        questionsStore.questions.length
      }}<br />
    </div>
    <loading-screen v-if="isProcessing" />
  </div>
</template>

<style lang="scss" scoped></style>
