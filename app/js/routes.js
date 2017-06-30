import Gallery from "../pages/Gallery.vue";
import Index from "../pages/Index.vue";
import NotFound from "../pages/NotFound.vue";

export default [
	{path: '/', component: Index},
	{path: '/gallery', component: Gallery},
	{path: '*', component: NotFound}
];
