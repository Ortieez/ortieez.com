import { createRouter, createWebHashHistory } from 'vue-router';
import { Home, About } from '@/views';

const routes = [
	{
		path: '/',
		name: 'Home',
		component: Home
	},
	{
		path: '/About',
		name: 'About',
		component: About
	}
];

const router = createRouter({
	history: createWebHashHistory(),
	routes
});

export default router;
