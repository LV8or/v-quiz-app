<script setup>
import QuizHeader from '@/components/QuizHeader';
import ResultComp from '../components/ResultComp';
import QuestionItem from '../components/QuestionItem';
import { useRoute } from 'vue-router';
import { ref, computed } from 'vue';
import quizes from '../data/quizes.json';

const route = useRoute();
const quizId = parseInt(route.params.id);
const quiz = quizes.find(q => q.id === quizId);
const currentQuestionIndex = ref(0);
const correctAnswers = ref(0);
const showResults = ref(false);

// let questionStatus = ref(`${currentQuestionIndex.value}/${quiz.questions.length}`);
// watch(() => currentQuestionIndex.value, () => {
//     questionStatus = ref(`${currentQuestionIndex.value}/${quiz.questions.length}`);
// });

const questionStatus = computed(() => `${currentQuestionIndex.value}/${quiz.questions.length}`);
const barPercentage = computed(() => `${currentQuestionIndex.value/quiz.questions.length *100}%`);

const onOptionSelected = (isCorrect) => {
    if(isCorrect) {
        correctAnswers.value++;
    }
    if(quiz.questions.length-1 === currentQuestionIndex.value) {
        showResults.value = true;
    }
    currentQuestionIndex.value++;
}

</script>

<template>
    <div>
        <QuizHeader :questionStatus="questionStatus" :barPercentage="barPercentage"/>
        <div>
            <QuestionItem v-if="!showResults" :question="quiz.questions[currentQuestionIndex]" @selectOption="onOptionSelected" />
            <ResultComp v-else :quizQuestionLength="quiz.questions.length" :correctAnswers="correctAnswers" />
        </div>
    </div>
</template>
