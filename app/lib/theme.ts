// @filename: theme.ts

/** 
 * Valores en Tailwind para los colores del tema 1.
 * @constant
 * @type {string[]}
 */
export const initialTheme = ["bg-blue-50","bg-blue-50","bg-blue-500","hover:bg-blue-200","active:bg-blue-600","bg-blue-400","text-blue-500","hover:text-blue-400","text-slate-950","bg-blue-500"];
/** 
 * Valores en Tailwind para los colores del tema 2.
 * @constant
 * @type {string[]}
 */
export const themeColor2 = ["bg-stone-800","bg-red-50","bg-red-700","hover:bg-red-300","active:bg-red-800","bg-red-400","text-red-700","hover:text-red-500","text-stone-50","bg-red-700"];

/** 
 * Valores en Tailwind para los colores del tema actual.
 * @constant
 * @type {string[]}
 * - [0] background principal 
 * - [1] background secundario 
 * - [2] background item 
 * - [3] background hover 
 * - [4] background active 
 * - [5] background item secundario
 * - [6] color text 
 * - [7] color text hover 
 * - [8] secondary text 
 * - [9] border/outline
 */
export const currentTheme = themeColor2 || initialTheme;