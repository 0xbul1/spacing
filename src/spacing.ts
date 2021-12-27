import Rect from './rect';
import { createPlaceholderElement, clearPlaceholderElement } from './placeholder';
import { placeMark, removeMarks } from './marker';

let active: boolean = false;
let hoveringElement: HTMLElement | null = null;
let selectedElement: HTMLElement | null;
let targetElement: HTMLElement | null;
let delayedDismiss: boolean = false;
let delayedRef: ReturnType<typeof setTimeout> | null = null;
