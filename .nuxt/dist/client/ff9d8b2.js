(window.webpackJsonp=window.webpackJsonp||[]).push([[24,2,3,5,10,12,13,14,15,16,17,18,19],{401:function(t,e,n){"use strict";n.r(e);var l={props:{next:{type:Boolean,default:!1}}},r=n(21),component=Object(r.a)(l,(function(){var t=this._self._c;return t("div",[this.next?t("i",{staticClass:"fas fa-chevron-right"}):t("i",{staticClass:"fas fa-chevron-left"})])}),[],!1,null,null,null);e.default=component.exports},402:function(t,e,n){"use strict";n.r(e);n(34);var l={props:{classes:{type:String,default:""},catalogs:{type:Array,default:[]}}},r=n(21),component=Object(r.a)(l,(function(){var t=this,e=t._self._c;return e("div",[e("div",{staticClass:"catalog",class:t.classes},t._l(t.catalogs,(function(n){return e("n-link",{key:n.id,staticClass:"catalog__item",attrs:{to:"catalog/".concat(n.id)}},[e("div",{staticClass:"catalog__img"},[n.img?e("div",{staticClass:"catalog__img-details"},[e("img",{attrs:{src:"https://api.qlc-it.ru".concat(n.img.url),alt:n.name}})]):e("div",{staticClass:"catalog__noimg"},[e("i",{staticClass:"fas fa-camera"})])]),t._v(" "),e("div",{staticClass:"catalog__body"},[e("h3",{staticClass:"catalog__title"},[t._v("\n          "+t._s(n.name)+"\n        ")])])])})),1)])}),[],!1,null,null,null);e.default=component.exports},403:function(t,e,n){"use strict";n.r(e);n(34);var l={data:function(){return{tabIndex:0}},props:{items:{type:Array}},methods:{tabClick:function(i){this.tabIndex=i,this.$emit("tabIndex",i)}}},r=n(21),component=Object(r.a)(l,(function(){var t=this,e=t._self._c;return e("div",{staticClass:"tab"},[e("div",{staticClass:"tab__box"},t._l(t.items,(function(n,l){return e("div",{key:"tab-".concat(l),staticClass:"tab__item",class:{active:t.tabIndex==l},on:{click:function(e){return e.preventDefault(),t.tabClick(l)}}},[t._v("\n      "+t._s(n.name)+"\n    ")])})),0)])}),[],!1,null,null,null);e.default=component.exports},404:function(t,e,n){"use strict";n.r(e);var l=n(21),component=Object(l.a)({},(function(){var t=this,e=t._self._c;return e("li",[e("i",{staticClass:"fa fa-check"}),t._v(" "),t._t("default")],2)}),[],!1,null,null,null);e.default=component.exports},405:function(t,e,n){t.exports=n.p+"img/icon3.05a2e48.jpg"},406:function(t,e,n){t.exports=n.p+"img/icon2.f2300ce.jpg"},407:function(t,e,n){t.exports=n.p+"img/icon1.8059879.jpg"},408:function(t,e,n){t.exports=n.p+"img/fn2.adfd5f7.png"},409:function(t,e,n){t.exports=n.p+"img/fone1.9e6117e.png"},410:function(t,e,n){t.exports=n.p+"img/responder.f7b1623.png"},413:function(t,e,n){"use strict";n.r(e);n(34);var l={name:"carrousel",props:{brends:{type:Array,default:[]}},data:function(){return{options:{spaceBetween:15,slidesPerView:6,effect:"slide",loop:!0,autoplay:{delay:5e3},navigation:{nextEl:".js-logos-slide-next",prevEl:".js-logos-slide-prev"},breakpoints:{980:{slidesPerView:6,spaceBetween:15},765:{slidesPerView:5},320:{slidesPerView:4,spaceBetween:20}}}}}},r=n(21),component=Object(r.a)(l,(function(){var t=this,e=t._self._c;return e("div",{staticClass:"container"},[e("div",{staticClass:"logos-group"},[e("Swiper",{staticClass:"logos-group-slider",attrs:{options:t.options}},t._l(t.brends,(function(t){return e("SwiperSlide",{key:t.id,staticClass:"logos-group-slider__slide"},[t.img?e("img",{attrs:{src:"https://api.qlc-it.ru/".concat(t.img.url),alt:t.name}}):e("img",{attrs:{alt:t.name}})])})),1),t._v(" "),e("SliderButton",{staticClass:"logos-group-slider-prev js-logos-slide-prev",attrs:{slot:"button-prev"},slot:"button-prev"}),t._v(" "),e("SliderButton",{staticClass:"logos-group-slider-next js-logos-slide-next",attrs:{slot:"button-prev",next:!0},slot:"button-prev"})],1)])}),[],!1,null,null,null);e.default=component.exports;installComponents(component,{SliderButton:n(401).default})},414:function(t,e,n){"use strict";n.r(e);n(34);var l={data:function(){return{tab:[{name:"По России",txt:"Доставка по России осуществляется любой транспортной компанией, которую укажет заказчик, доставка до ТК бесплатная, услуги ТК заказчик оплачивает самостоятельно, если это не было обговорено за ранее."},{name:"В пределах МКАД",txt:"Доставка по Москве и в пределах МКАД осуществляется бесплатно при сумме заказа от 20 000 руб. Доставка за МКАД осуществляется отдельно."}],tabIndex:0}},methods:{tabIndexEmit:function(i){this.tabIndex=i}}},r=n(21),component=Object(r.a)(l,(function(){var t=this,e=t._self._c;return e("section",{staticClass:"delivery-main"},[e("div",{staticClass:"container"},[e("Title",{attrs:{sub:"Бесплатная доставка до терминала ТК",title:"Работаем по всей России"}}),t._v(" "),e("div",{staticClass:"delivery-tab"},[e("Tab",{attrs:{items:t.tab},on:{tabIndex:t.tabIndexEmit}})],1),t._v(" "),e("div",{staticClass:"delivery"},[t._m(0),t._v(" "),t._l(t.tab,(function(n,l){return e("div",{directives:[{name:"show",rawName:"v-show",value:t.tabIndex==l,expression:"tabIndex == index"}],key:"delivery-".concat(l),staticClass:"delivery__item"},[e("h3",{staticClass:"delivery__title"},[t._v("\n          "+t._s(n.name)+"\n        ")]),t._v(" "),e("p",[t._v("\n          "+t._s(n.txt)+"\n        ")])])}))],2)],1)])}),[function(){var t=this,e=t._self._c;return e("div",{staticClass:"delivery__item"},[e("h3",{staticClass:"delivery__title"},[t._v("Со склада")]),t._v(" "),e("p",[t._v("\n          Доставка товаров со склада осуществляется в течении 3х рабочих дней\n        ")]),t._v(" "),e("h3",{staticClass:"delivery__title"},[t._v("Под заказ")]),t._v(" "),e("p",[t._v("Доставка товара под заказ 2-4 недели")])])}],!1,null,null,null);e.default=component.exports;installComponents(component,{Title:n(257).default,Tab:n(403).default})},415:function(t,e,n){"use strict";n.r(e);n(34);var l={name:"carrousel",props:{logos:{type:Array,default:[]}},data:function(){return{options:{spaceBetween:50,slidesPerView:6,effect:"slide",loop:!0,autoplay:{delay:5e3},pagination:{el:".js-logos-slide-client-pagination",bulletClass:"logos-client-slider-controls__bulet",bulletActiveClass:"logos-client-slider-controls__bulet--active",clickable:!0},navigation:{nextEl:".js-logos-slide-client-next",prevEl:".js-logos-slide-client-prev"},breakpoints:{980:{slidesPerView:6,spaceBetween:50},765:{slidesPerView:4},320:{slidesPerView:2}}}}}},r=n(21),component=Object(r.a)(l,(function(){var t=this,e=t._self._c;return e("section",{staticClass:"logos-main"},[e("div",{staticClass:"container"},[e("Title",{attrs:{sub:"Latest Info",title:"Наши клиенты"}}),t._v(" "),e("Swiper",{staticClass:"logos-client-slider",attrs:{options:t.options}},t._l(t.logos,(function(t){return e("SwiperSlide",{key:t.id,staticClass:"logos-client-slider__slide"},[t.img?e("img",{attrs:{src:"https://api.qlc-it.ru".concat(t.img.url),alt:t.name,title:t.name}}):e("img",{attrs:{alt:t.name}})])})),1),t._v(" "),e("div",{staticClass:"logos-client-slider-controls"},[e("SliderButton",{staticClass:"logos-client-slider-controls__prev js-logos-slide-client-prev",attrs:{slot:"button-prev"},slot:"button-prev"}),t._v(" "),e("div",{staticClass:"logos-client-slider-controls__pagination js-logos-slide-client-pagination"}),t._v(" "),e("SliderButton",{staticClass:"logos-client-slider-controls__next js-logos-slide-client-next",attrs:{slot:"button-prev",next:!0},slot:"button-prev"})],1)],1)])}),[],!1,null,null,null);e.default=component.exports;installComponents(component,{Title:n(257).default,SliderButton:n(401).default})},416:function(t,e,n){"use strict";n.r(e);var l={props:{catalogs:{type:Array,default:[]}}},r=n(21),component=Object(r.a)(l,(function(){var t=this,e=t._self._c;return e("section",{staticClass:"catalog-wrapper"},[e("div",{staticClass:"container"},[e("Title",{attrs:{sub:"Каталог",title:"Каталог продукции"}}),t._v(" "),e("CatalogBox",{attrs:{catalogs:t.catalogs}}),t._v(" "),e("div",{staticClass:"center"},[e("n-link",{staticClass:"btn btn--primary",attrs:{to:"/catalog"}},[t._v(" Посмотреть все ")])],1)],1)])}),[],!1,null,null,null);e.default=component.exports;installComponents(component,{Title:n(257).default,CatalogBox:n(402).default})},417:function(t,e,n){"use strict";n.r(e);var l=[function(){var t=this,e=t._self._c;return e("div",{staticClass:"benefits-box"},[e("div",{staticClass:"benefits-box__item"},[e("div",{staticClass:"benefits-box__icon"},[e("img",{attrs:{src:n(405)}})]),t._v(" "),e("h2",{staticClass:"benefits-box__title"},[t._v("Гарантия")]),t._v(" "),e("div",{staticClass:"benefits-box__txt"},[t._v("\n          Полноценная гарантия на все поставляемые товары\n        ")])]),t._v(" "),e("div",{staticClass:"benefits-box__item"},[e("div",{staticClass:"benefits-box__icon"},[e("img",{attrs:{src:n(406)}})]),t._v(" "),e("h2",{staticClass:"benefits-box__title"},[t._v("Точность")]),t._v(" "),e("div",{staticClass:"benefits-box__txt"},[t._v("\n          Консультация и индивидуальный подход.\n        ")])]),t._v(" "),e("div",{staticClass:"benefits-box__item"},[e("div",{staticClass:"benefits-box__icon"},[e("img",{attrs:{src:n(407)}})]),t._v(" "),e("h2",{staticClass:"benefits-box__title"},[t._v("Надёжность")]),t._v(" "),e("div",{staticClass:"benefits-box__txt"},[t._v("\n          Проверенный поставщик с опытом порядка 10 лет.\n        ")])])])}],r=n(21),component=Object(r.a)({},(function(){var t=this,e=t._self._c;return e("section",{staticClass:"benefits"},[e("div",{staticClass:"container"},[e("Title",{attrs:{sub:"Преимущества",title:"Почему выбирают QLC-IT"}}),t._v(" "),t._m(0)],1)])}),l,!1,null,null,null);e.default=component.exports;installComponents(component,{Title:n(257).default})},418:function(t,e,n){"use strict";n.r(e);var l=[function(){var t=this,e=t._self._c;return e("div",{staticClass:"warranty__box"},[e("div",{staticClass:"warranty__item"},[e("div",{staticClass:"warranty__icon"},[e("i",{staticClass:"fas fa-server"})]),t._v(" "),e("h3",{staticClass:"warranty__title"},[t._v("Серверное оборудование")]),t._v(" "),e("p",{staticClass:"warranty__txt"},[t._v("\n              Сервера, Жёсткие диски, Оперативная\n              память, Блоки питания , Процессоры , Материнские платы ,\n              Контролеры , Сетевые карты , Кабели и т д.\n            ")])]),t._v(" "),e("div",{staticClass:"warranty__item"},[e("div",{staticClass:"warranty__icon"},[e("i",{staticClass:"fas fa-network-wired"})]),t._v(" "),e("h3",{staticClass:"warranty__title"},[t._v("Сетевое оборудование")]),t._v(" "),e("p",{staticClass:"warranty__txt"},[t._v("\n              Трансиверы, Коммутаторы, Маршрутизаторы,\n              Адаптеры, Беспроводное оборудование, Точки доступа, Кабеля и т\n              д.\n            ")])]),t._v(" "),e("div",{staticClass:"warranty__item"},[e("div",{staticClass:"warranty__icon"},[e("i",{staticClass:"fas fa-desktop"})]),t._v(" "),e("h3",{staticClass:"warranty__title"},[t._v("Периферийное оборудование")]),t._v(" "),e("p",{staticClass:"warranty__txt"},[t._v("\n              Мониторы, МФУ, Принтеры, Рабочие\n              станции, Ноутбуки, Моноблоки, Комплектующие, Телевизоры,\n              Клавиатуры и мыши и т д.\n            ")])])])},function(){var t=this._self._c;return t("div",{staticClass:"half-box__item flex flex-align-items"},[t("img",{staticClass:"img-main",attrs:{src:n(408),alt:"Мы за честную гарантию"}})])}],r=n(21),component=Object(r.a)({},(function(){var t=this,e=t._self._c;return e("section",{staticClass:"warranty"},[e("div",{staticClass:"container"},[e("div",{staticClass:"half-box"},[e("div",{staticClass:"half-box__item"},[e("h2",{staticClass:"title-small"},[t._v("Широкий ассортимент продукции")]),t._v(" "),t._m(0),t._v(" "),e("n-link",{staticClass:"btn btn--primary",attrs:{to:"/catalog"}},[t._v(" Подробнее ")])],1),t._v(" "),t._m(1)])])])}),l,!1,null,null,null);e.default=component.exports},419:function(t,e,n){"use strict";n.r(e);var l=[function(){var t=this._self._c;return t("div",{staticClass:"half-box__item flex flex-align-items"},[t("img",{staticClass:"img-main",attrs:{src:n(409),alt:"Ваши выгоды при работе с нами<"}})])}],r=n(21),component=Object(r.a)({},(function(){var t=this,e=t._self._c;return e("section",{staticClass:"benefits-two"},[e("div",{staticClass:"container"},[e("div",{staticClass:"half-box"},[t._m(0),t._v(" "),e("div",{staticClass:"half-box__item"},[e("h2",{staticClass:"title-small"},[t._v("Ваши выгоды при работе с нами")]),t._v(" "),e("p",{staticClass:"benefits-two__txt"},[t._v("\n          Подбор и покупка ноутбуков оптом, компьютерные рабочие станции,\n          серверы и сетевое оборудование в нашей компании на выгодных\n          условиях.\n        ")]),t._v(" "),e("ul",{staticClass:"benefits-two__ul"},[e("LiItem",[t._v("Большой выбор серверной продукции;")]),t._v(" "),e("LiItem",[e("strong",[t._v("Собственная логистика")]),t._v(" из Китая, США, Европы;\n          ")]),t._v(" "),e("LiItem",[t._v("\n            Партнерство со всеми официальными дистрибьюторами России;\n          ")]),t._v(" "),e("LiItem",[e("strong",[t._v("Гибкие цены")]),t._v(" в зависимости от необходимых сроков\n            поставки.\n          ")]),t._v(" "),e("LiItem",[e("strong",[t._v("Подбор и настройка")]),t._v(" серверного оборудования,\n            комплектующих;\n          ")]),t._v(" "),e("LiItem",[t._v("\n            Предложим\n            "),e("strong",[t._v("цену ниже, чем у конкурентов")]),t._v(";\n          ")]),t._v(" "),e("LiItem",[t._v("\n            Только оригинальная продукция от ведущих вендоров;\n          ")]),t._v(" "),e("LiItem",[t._v("Бесплатная доставка по Москве.")]),t._v(" "),e("LiItem",[e("strong",[t._v("Собственный склад в Москве")])])],1),t._v(" "),e("n-link",{staticClass:"btn btn--primary",attrs:{to:"/warranty"}},[t._v("\n          Подробнее\n        ")])],1)])])])}),l,!1,null,null,null);e.default=component.exports;installComponents(component,{LiItem:n(404).default})},420:function(t,e,n){"use strict";n.r(e);var l=[function(){var t=this,e=t._self._c;return e("section",{staticClass:"responder"},[e("div",{staticClass:"responder__txt"},[e("strong",[t._v("Собственная логистика")]),t._v(" и большой пул поставщиков из Китая Европы"),e("br"),t._v("\n    и США позволяют максимально быстро обрабатывать ваши заявки\n  ")]),t._v(" "),e("img",{staticClass:"responder__img",attrs:{src:n(410),alt:""}})])}],r=n(21),component=Object(r.a)({},(function(){this._self._c;return this._m(0)}),l,!1,null,null,null);e.default=component.exports},428:function(t,e,n){t.exports=n.p+"img/banner2.ca922d9.png"},436:function(t,e,n){"use strict";n.r(e);var l=[function(){var t=this._self._c;return t("div",{staticClass:"head-img container"},[t("img",{attrs:{src:n(428),alt:""}})])}],r=n(5),o=(n(26),n(90)),c={computed:Object(o.c)({catalogs:"catalogs/getCatalogs",brends:"brends/getBrends",logos:"clients/getLogos"}),fetch:function(t){return Object(r.a)(regeneratorRuntime.mark((function e(){var n;return regeneratorRuntime.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return n=t.store,e.next=3,n.dispatch("brends/fetch");case 3:return e.next=5,n.dispatch("catalogs/fetch",{count:4});case 5:return e.next=7,n.dispatch("clients/fetch");case 7:case"end":return e.stop()}}),e)})))()}},_=n(21),component=Object(_.a)(c,(function(){var t=this,e=t._self._c;return e("div",[e("div",{staticClass:"header-box-relative"},[t._m(0),t._v(" "),e("div",{staticClass:"head-banner"},[e("div",{staticClass:"container"},[e("div",{staticClass:"banner-main-subtitle"},[t._v("\n          Простые решения для сложных задач\n        ")]),t._v(" "),e("h1",{staticClass:"banner-main-title"},[t._v("\n          Комплексный поставщик IT оборудования\n        ")]),t._v(" "),e("div",{staticClass:"banner-main-text"},[t._v("\n          Мы поможем оптимизировать Вашу инфраструктуру, снизить расходы на IT\n          обслуживание и гарантировать бесперебойную работу.\n        ")]),t._v(" "),e("div",{staticClass:"btn-group"},[e("div",{staticClass:"btn-group__item"},[e("n-link",{staticClass:"btn btn--primary",attrs:{to:"/about"}},[t._v("Подробнее")])],1),t._v(" "),e("div",{staticClass:"btn-group__item"},[e("n-link",{staticClass:"btn btn--primary btn--border",attrs:{to:"/catalog"}},[e("span",[t._v("Каталог")])])],1)])])])]),t._v(" "),e("LogoSlider",{attrs:{brends:t.brends}}),t._v(" "),e("Benefits"),t._v(" "),e("DeliveryMain"),t._v(" "),e("Warranty"),t._v(" "),e("BenefitsTwo"),t._v(" "),e("Responder"),t._v(" "),e("LogosClient",{attrs:{logos:t.logos}}),t._v(" "),e("MainCatalog",{attrs:{catalogs:t.catalogs}})],1)}),l,!1,null,null,null);e.default=component.exports;installComponents(component,{LogoSlider:n(413).default,Benefits:n(417).default,DeliveryMain:n(414).default,Warranty:n(418).default,BenefitsTwo:n(419).default,Responder:n(420).default,LogosClient:n(415).default,MainCatalog:n(416).default})}}]);