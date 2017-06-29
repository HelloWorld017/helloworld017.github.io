import Index from "../pages/Index.vue";
import NotFound from "../pages/NotFound.vue";

export default [
	{path: '/', component: Index},
	{path: '*', component: NotFound}
];
