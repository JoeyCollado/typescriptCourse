"use strict";
//any
Object.defineProperty(exports, "__esModule", { value: true });
var hours; //should be let hours: string; so the program will infer it as string not just any
function getHours() {
    return 1;
}
hours = getHours();
