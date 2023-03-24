import { createRouter, createWebHistory } from "vue-router";
import QuizesView from '../views/QuizesView';
import QuizView from '../views/QuizView';

const router = createRouter({
    history: createWebHistory(),
    routes: [
        {
            path: "/",
            name: "quizes",
            component: QuizesView
        },{
            path: "/quiz/:id",
            name: "quiz",
            component: QuizView
        }
    ]
});

export default router;