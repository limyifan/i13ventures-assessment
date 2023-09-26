<script lang="ts" setup>
import Button from "~/components/widgets/Button.vue";
import {useDb} from "~/composables/useDb";
import {useQuestionsStore} from "~/stores/questionsStore";
import LoadingScreen from "~/components/widgets/LoadingScreen.vue";

const router=useRouter()
const {questions_DB}=useDb()
const questionsStore=useQuestionsStore()
const answer=ref("")
const isFieldEmpty=ref(false)
    const isProcessing=ref(false)

onMounted(()=>{
  questionsStore.setQuestions(questions_DB)
})
const questionTitle=computed(()=>{
  if( questionsStore.questions.length==0) return("Loading...")
  return questionsStore.questions[questionsStore.currStep].title
})
const questionDesc=computed(()=>{
  if( questionsStore.questions.length==0) return("Loading...")
  return questionsStore.questions[questionsStore.currStep].description
})
const nextQuestion=()=>{
  isFieldEmpty.value=answer.value==""
  if(isFieldEmpty.value) return
  questionsStore.nextStep(answer.value)
  answer.value=questionsStore.questions[questionsStore.currStep].answer
  isFieldEmpty.value=false
}
const prevQuestion=()=>{
  questionsStore.prevStep()
  answer.value=questionsStore.questions[questionsStore.currStep].answer
  isFieldEmpty.value=false
}

const finish=()=>{
  questionsStore.nextStep(answer.value)
  isProcessing.value=true
  setTimeout(()=>{
    router.push("/results")
  },2000)

}
</script>

<template>
  <div
    class="inline-flex w-96 flex-col gap-8 rounded-2xl border border-black bg-neutral-100 shadow p-4"
  >
    <p class="font-plus text-xl font-semibold text-black">
      {{questionTitle}}
    </p>
    <p class="font-plus text-md font-regular text-black">
      {{questionDesc}}
    </p>
    <div class="flex flex-col gap-1">
       <textarea
           class="rounded-md bg-white p-2"
           :style="isFieldEmpty?{border:'1px solid red'}:{}"
           placeholder="Your answer"
           rows="6"
           v-model="answer"
       />
      <span class="font-plus text-xs font-regular text-red-600">
      {{isFieldEmpty?"Please fill in the field":""}}
    </span>
    </div>

    <div class="flex justify-end gap-2">
      <Button text="Previous" @click="prevQuestion" v-if="questionsStore.currStep>0" />
      <Button text="Next" @click="nextQuestion" v-if="questionsStore.currStep<questionsStore.questions.length-1"/>
      <Button text="Finish" @click="finish" v-else/>
    </div>

    <div class="text-center font-saira text-sm font-medium text-black">
      Step: {{questionsStore.currStep+1}}/{{questionsStore.questions.length}}<br />
    </div>
    <loading-screen v-if="isProcessing"/>
  </div>
</template>

<style lang="scss" scoped></style>
