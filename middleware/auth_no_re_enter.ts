import {useQuestionsStore} from "~/stores/questionsStore";

export default defineNuxtRouteMiddleware(async (to, from) => {
  const questionStore = useQuestionsStore();

  //to prevent user re-enter the result page
  if(!questionStore.questions.length)
    return navigateTo("/")

});
