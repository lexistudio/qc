(window.webpackJsonp=window.webpackJsonp||[]).push([[15,5],{402:function(t,l,c){"use strict";c.r(l);c(34);var n={props:{classes:{type:String,default:""},catalogs:{type:Array,default:[]}}},o=c(21),component=Object(o.a)(n,(function(){var t=this,l=t._self._c;return l("div",[l("div",{staticClass:"catalog",class:t.classes},t._l(t.catalogs,(function(c){return l("n-link",{key:c.id,staticClass:"catalog__item",attrs:{to:"catalog/".concat(c.id)}},[l("div",{staticClass:"catalog__img"},[c.img?l("div",{staticClass:"catalog__img-details"},[l("img",{attrs:{src:"https://api.qlc-it.ru".concat(c.img.url),alt:c.name}})]):l("div",{staticClass:"catalog__noimg"},[l("i",{staticClass:"fas fa-camera"})])]),t._v(" "),l("div",{staticClass:"catalog__body"},[l("h3",{staticClass:"catalog__title"},[t._v("\n          "+t._s(c.name)+"\n        ")])])])})),1)])}),[],!1,null,null,null);l.default=component.exports},416:function(t,l,c){"use strict";c.r(l);var n={props:{catalogs:{type:Array,default:[]}}},o=c(21),component=Object(o.a)(n,(function(){var t=this,l=t._self._c;return l("section",{staticClass:"catalog-wrapper"},[l("div",{staticClass:"container"},[l("Title",{attrs:{sub:"Каталог",title:"Каталог продукции"}}),t._v(" "),l("CatalogBox",{attrs:{catalogs:t.catalogs}}),t._v(" "),l("div",{staticClass:"center"},[l("n-link",{staticClass:"btn btn--primary",attrs:{to:"/catalog"}},[t._v(" Посмотреть все ")])],1)],1)])}),[],!1,null,null,null);l.default=component.exports;installComponents(component,{Title:c(257).default,CatalogBox:c(402).default})}}]);