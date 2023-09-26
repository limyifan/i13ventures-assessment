import {QuestionType} from "~/types/question";

export const useDb=()=>{
    const questions_DB:QuestionType[]=[
        {
            title:"Tell me your goals",
            description:"What are you looking to accomplish with a new mortgage or loan? (examples: lower mortgage rate, cash out refinance, consolidate debt, home purchase loan)",
            answer:""
        },
        {
            title:"What is your estimated credit score?",
            description:"This allows us to get an idea of what credit tier and interest rates you may qualify for. Credit scores generally range from 300-850. Do you know what your current credit score is? If not, we can check your credit as part of the application process.",
            answer:""
        },
        {
            title:"What is your current income and expenses?",
            description:"Your income, expenses, and existing debts help determine the loan amount and terms for which you may qualify. Please provide your total monthly gross income from all sources along with your recurring monthly expenses like housing, debts, utilities, etc so I can properly assess your ability to take on a new loan payment.",
            answer:""
        },
        {
            title:"What is your current mortgage balance and interest rate (if applicable)?",
            description:"For refinancing, we'll need information about your existing mortgage like the original loan amount, remaining balance, interest rate, and term/length. This gives me the full picture to determine potential monthly savings with a new competitive rate. Please have these mortgage details available.",
            answer:""
        },
        {
            title:"How much are you looking to borrow?",
            description:"It's important to have an idea of the loan amount you are looking to take out so I can tailor the options specifically to meet that need.",
            answer:"",
        },
    ]
    return{
        questions_DB
    }

}

