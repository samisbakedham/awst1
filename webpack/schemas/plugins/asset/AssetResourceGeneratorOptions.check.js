/*
 * This file was automatically generated.
 * DO NOT MODIFY BY HAND.
 * Run `yarn special-lint-fix` to update
 */
const t=/^(?:[A-Za-z]:[\\/]|\\\\|\/)/;function r(n,{instancePath:e="",parentData:a,parentDataProperty:s,rootData:o=n}={}){let l=null,i=0;if(0===i){if(!n||"object"!=typeof n||Array.isArray(n))return r.errors=[{params:{type:"object"}}],!1;{const e=i;for(const t in n)if("emit"!==t&&"filename"!==t&&"publicPath"!==t)return r.errors=[{params:{additionalProperty:t}}],!1;if(e===i){if(void 0!==n.emit){const t=i;if("boolean"!=typeof n.emit)return r.errors=[{params:{type:"boolean"}}],!1;var p=t===i}else p=!0;if(p){if(void 0!==n.filename){let e=n.filename;const a=i,s=i;let o=!1;const c=i;if(i===c)if("string"==typeof e){if(e.includes("!")||!1!==t.test(e)){const t={params:{}};null===l?l=[t]:l.push(t),i++}else if(e.length<1){const t={params:{}};null===l?l=[t]:l.push(t),i++}}else{const t={params:{type:"string"}};null===l?l=[t]:l.push(t),i++}var u=c===i;if(o=o||u,!o){const t=i;if(!(e instanceof Function)){const t={params:{}};null===l?l=[t]:l.push(t),i++}u=t===i,o=o||u}if(!o){const t={params:{}};return null===l?l=[t]:l.push(t),i++,r.errors=l,!1}i=s,null!==l&&(s?l.length=s:l=null),p=a===i}else p=!0;if(p)if(void 0!==n.publicPath){let t=n.publicPath;const e=i,a=i;let s=!1;const o=i;if("string"!=typeof t){const t={params:{type:"string"}};null===l?l=[t]:l.push(t),i++}var c=o===i;if(s=s||c,!s){const r=i;if(!(t instanceof Function)){const t={params:{}};null===l?l=[t]:l.push(t),i++}c=r===i,s=s||c}if(!s){const t={params:{}};return null===l?l=[t]:l.push(t),i++,r.errors=l,!1}i=a,null!==l&&(a?l.length=a:l=null),p=e===i}else p=!0}}}}return r.errors=l,0===i}function n(t,{instancePath:e="",parentData:a,parentDataProperty:s,rootData:o=t}={}){let l=null,i=0;return r(t,{instancePath:e,parentData:a,parentDataProperty:s,rootData:o})||(l=null===l?r.errors:l.concat(r.errors),i=l.length),n.errors=l,0===i}module.exports=n,module.exports.default=n;