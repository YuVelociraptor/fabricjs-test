import {ref} from "vue";

export const nav_links = ref<{ label: string; to: string }[]>([
    { label: 'Home', to: '/' },
    { label: 'fabric01', to: '/fabric01' },
    { label: 'fabric02', to: '/fabric02' },
])