import { writable } from 'svelte/store';

// export const selectedDice = writable([]);
// export const rolls = writable([]);
export const turn = writable(1);
export const round = writable(1);