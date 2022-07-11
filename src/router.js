import { createRouter, createWebHistory } from "vue-router"

import Home from "./pages/home.vue"
import Transactions from "./pages/transactions"
import transictionDetails from "./components/transaction-details.vue"
import NotFound from "./pages/404.vue"

const routes = [
    {
        path: "/",
        name: "overview-route",
        component: Home
    },
    {
        path: "/tui-thich",
        name: "transaction-route",
        component: Transactions
    },
    {
        path: "/tui-thich/:id",
        name: "transaction-details-route", 
        component: transictionDetails
    },
    {
        path: "/ts",
        redirect: "transactions"
    },
    {
        path: "/:pathMatch(.*)*",
        component: NotFound 
    }
];

const router = createRouter({
    // @ts-ignore
    history: createWebHistory(process.env.BASE_URL),
    routes,
})

export default router;
