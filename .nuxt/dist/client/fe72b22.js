(window.webpackJsonp=window.webpackJsonp||[]).push([[12],{450:function(t,e,o){var content=o(451);content.__esModule&&(content=content.default),"string"==typeof content&&(content=[[t.i,content,""]]),content.locals&&(t.exports=content.locals);(0,o(166).default)("2cf1b3e9",content,!0,{sourceMap:!1})},451:function(t,e,o){var r=o(165)(!1);r.push([t.i,".socket-status.label{width:100%;text-align:left}.socket-status.grid{display:grid;grid-template-columns:1fr 1fr}.socket-status.grid:hover{color:#212529;background-color:rgba(0,0,0,.075)}.socket-status.striped:nth-of-type(odd){background-color:rgba(0,0,0,.05)}.socket-status.col-key{grid-column:1;font-weight:700;text-align:right;padding:.75rem;border-top:1px solid #dee2e6}.socket-status.col-val{grid-column:2;text-align:left;padding:.75rem;border-top:1px solid #dee2e6}",""]),t.exports=r},452:function(t,e,o){"use strict";o.r(e);o(450);e.default={render(t){if(!this.status.connectUrl)return t();const label=t("label",{staticClass:"socket-status label"},[t("b","Status for: "),this.status.connectUrl]),e=[];for(const o of this.statusTbl){const r=t("div",{staticClass:"socket-status grid striped"},[t("span",{staticClass:"socket-status col-key"},o.item),t("span",{staticClass:"socket-status col-val"},o.info)]);e.push(r)}return t("div",[label,e])},props:{status:{type:Object,default:()=>({})}},computed:{statusTbl(){const{status:t}=this;let e;const o=Object.entries(t).reduce(((t,[o,r])=>("connectUrl"!==o&&void 0!==r&&""!==r&&(o.match(/Error|Failed/)&&(e=!0),t.push({item:o,info:"string"==typeof r?r:r.toString()})),t)),[]);return e||o.unshift({item:"status",info:"OK"}),o}}}}}]);