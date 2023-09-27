import { defineStore } from "pinia";
import {QuestionType} from "~/types/question";
export const useQuestionsStore = defineStore('questions',{
    state: () => ({
        questions: [],
        currStep: 0,
    }),
    getters: {
    },
    actions: {
        setQuestions(questions: QuestionType[]) {
            this.questions = questions
        },
        updateQuestion(ans: string) {
            this.questions[this.currStep].answer = ans
        },
        clearAnswers() {
            this.questions.forEach(q => q.answer = "")
            this.currStep=0
        },
        nextStep(ans) {
            this.updateQuestion(ans)
            if(this.currStep < this.questions.length - 1)
            this.currStep++
        },
        prevStep() {
            this.currStep--
            if(this.currStep < 0)
                this.currStep = 0
        }

    }
})
