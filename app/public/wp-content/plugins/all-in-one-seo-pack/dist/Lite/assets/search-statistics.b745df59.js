import"./js/vue2.d65b22aa.js";import{y as c,o as f,l as y,m as k,D as _,a as h,t as g,c as D,Y as R}from"./js/vue.esm-bundler.7598fd57.js";import{l as $}from"./js/index.a33da2f9.js";import{l as E}from"./js/index.dfdc56df.js";import{l as C}from"./js/index.0b123ab1.js";import{f as P,B as b,l as A}from"./js/links.813d802e.js";import{b as B}from"./js/Caret.13c1041f.js";import{C as L}from"./js/Index.39eb7788.js";import{S as M}from"./js/Information.8ca58f92.js";import{_ as v}from"./js/_plugin-vue_export-helper.c114f5e4.js";import{_ as V,s as x}from"./js/dynamic-import-helper.50f07eef.js";import{_ as r}from"./js/preload-helper.27958db9.js";import{_ as s}from"./js/default-i18n.3881921e.js";import{l as F}from"./js/license.e3b96863.js";import"./js/translations.6e7b2383.js";import"./js/constants.2883a7a9.js";import"./js/isArrayLikeObject.5519e7e6.js";import"./js/vue-router.bbbc3185.js";import"./js/allowed.ea569dbe.js";import"./js/upperFirst.67708519.js";import"./js/_stringToArray.4de3b1f3.js";import"./js/toString.8b13982a.js";function I({next:e,router:p,to:n}){const i=n.meta.licenseFeature||n.meta.middlewareData.licenseFeature||"";return P().isUnlicensed||!F.hasCoreFeature(i[0],i[1])?(e(),p.push({name:n.meta.middlewareData.routeName}).catch(()=>{})):e()}const O={setup(){return{searchStatisticsStore:b()}},components:{CoreLoader:B,CoreModal:L,SvgCircleInformation:M},data(){return{strings:{title:this.$t.__("Refreshing data",this.$td),description:this.$t.__("Loading new report data...",this.$td)}}}},T={class:"aioseo-fetching-data-title"},N={class:"aioseo-fetching-data-description"};function U(e,p,n,i,m,S){const u=c("svg-circle-information"),d=c("core-loader"),w=c("core-modal");return f(),y(w,{show:i.searchStatisticsStore.fetching,classes:["aioseo-fetching-data"],noHeader:""},{body:k(()=>[_(u,{width:"90",height:"90"}),h("div",T,g(m.strings.title),1),h("div",N,g(m.strings.description),1),_(d,{dark:""})]),_:1},8,["show"])}const H=v(O,[["render",U]]),K={components:{Fetching:H}},j={class:"aioseo-app"};function q(e,p,n,i,m,S){const u=c("router-view"),d=c("fetching");return f(),D("div",j,[_(u),_(d)])}const Y=v(K,[["render",q]]),o="all-in-one-seo-pack",a=e=>()=>V(Object.assign({"../views/ContentRankings.vue":()=>r(()=>import("./js/ContentRankings.cda5dfdf.js"),[window.__aioseoDynamicImportPreload__("js/ContentRankings.cda5dfdf.js"),window.__aioseoDynamicImportPreload__("js/links.813d802e.js"),window.__aioseoDynamicImportPreload__("js/vue.esm-bundler.7598fd57.js"),window.__aioseoDynamicImportPreload__("js/default-i18n.3881921e.js"),window.__aioseoDynamicImportPreload__("js/isArrayLikeObject.5519e7e6.js"),window.__aioseoDynamicImportPreload__("js/Caret.13c1041f.js"),window.__aioseoDynamicImportPreload__("js/_plugin-vue_export-helper.c114f5e4.js"),window.__aioseoDynamicImportPreload__("css/Caret.8ef6ecf6.css"),window.__aioseoDynamicImportPreload__("js/Blur.dfbd44b9.js"),window.__aioseoDynamicImportPreload__("css/Blur.02feb373.css"),window.__aioseoDynamicImportPreload__("js/Row.cd3858a9.js"),window.__aioseoDynamicImportPreload__("css/Row.d88b2bb9.css"),window.__aioseoDynamicImportPreload__("js/PostsTable.f3e7acd8.js"),window.__aioseoDynamicImportPreload__("js/license.e3b96863.js"),window.__aioseoDynamicImportPreload__("js/upperFirst.67708519.js"),window.__aioseoDynamicImportPreload__("js/_stringToArray.4de3b1f3.js"),window.__aioseoDynamicImportPreload__("js/toString.8b13982a.js"),window.__aioseoDynamicImportPreload__("js/numbers.c7cb4085.js"),window.__aioseoDynamicImportPreload__("js/WpTable.7aa38f5b.js"),window.__aioseoDynamicImportPreload__("js/ScoreButton.aec6eb4d.js"),window.__aioseoDynamicImportPreload__("css/ScoreButton.88bdc4f6.css"),window.__aioseoDynamicImportPreload__("js/Table.8398081c.js"),window.__aioseoDynamicImportPreload__("js/Tooltip.446bcf89.js"),window.__aioseoDynamicImportPreload__("css/Tooltip.c2302985.css"),window.__aioseoDynamicImportPreload__("js/Slide.8d21c232.js"),window.__aioseoDynamicImportPreload__("css/Table.9e940f6b.css"),window.__aioseoDynamicImportPreload__("js/Index.bc260cfc.js"),window.__aioseoDynamicImportPreload__("js/constants.2883a7a9.js"),window.__aioseoDynamicImportPreload__("css/Index.cfbdfa0a.css"),window.__aioseoDynamicImportPreload__("js/LicenseConditions.0c467bf7.js"),window.__aioseoDynamicImportPreload__("js/_arrayEach.56a9f647.js"),window.__aioseoDynamicImportPreload__("js/_getTag.61c0a63c.js"),window.__aioseoDynamicImportPreload__("js/vue.esm-bundler.dc957f17.js"),window.__aioseoDynamicImportPreload__("css/LicenseConditions.c5013059.css"),window.__aioseoDynamicImportPreload__("js/IndexStatus.78fc25b9.js"),window.__aioseoDynamicImportPreload__("css/IndexStatus.882591c9.css"),window.__aioseoDynamicImportPreload__("js/PostTypes.e5795f0f.js"),window.__aioseoDynamicImportPreload__("css/PostsTable.147bd89a.css"),window.__aioseoDynamicImportPreload__("js/RequiredPlans.d12c09c3.js"),window.__aioseoDynamicImportPreload__("js/addons.6651d172.js"),window.__aioseoDynamicImportPreload__("css/RequiredPlans.7624b017.css"),window.__aioseoDynamicImportPreload__("css/ContentRankings.f71f7fed.css")],import.meta.url),"../views/Dashboard.vue":()=>r(()=>import("./js/Dashboard.958a1118.js"),[window.__aioseoDynamicImportPreload__("js/Dashboard.958a1118.js"),window.__aioseoDynamicImportPreload__("js/links.813d802e.js"),window.__aioseoDynamicImportPreload__("js/vue.esm-bundler.7598fd57.js"),window.__aioseoDynamicImportPreload__("js/default-i18n.3881921e.js"),window.__aioseoDynamicImportPreload__("js/isArrayLikeObject.5519e7e6.js"),window.__aioseoDynamicImportPreload__("js/_plugin-vue_export-helper.c114f5e4.js"),window.__aioseoDynamicImportPreload__("js/Blur.dfbd44b9.js"),window.__aioseoDynamicImportPreload__("css/Blur.02feb373.css"),window.__aioseoDynamicImportPreload__("js/Card.68c5f6b2.js"),window.__aioseoDynamicImportPreload__("js/Tooltip.446bcf89.js"),window.__aioseoDynamicImportPreload__("css/Tooltip.c2302985.css"),window.__aioseoDynamicImportPreload__("js/Caret.13c1041f.js"),window.__aioseoDynamicImportPreload__("css/Caret.8ef6ecf6.css"),window.__aioseoDynamicImportPreload__("js/index.dfdc56df.js"),window.__aioseoDynamicImportPreload__("css/index.6e465ba1.css"),window.__aioseoDynamicImportPreload__("js/Slide.8d21c232.js"),window.__aioseoDynamicImportPreload__("css/Card.cb7c431d.css"),window.__aioseoDynamicImportPreload__("js/Tabs.c4ec03a5.js"),window.__aioseoDynamicImportPreload__("js/TruSeoScore.b474bf15.js"),window.__aioseoDynamicImportPreload__("js/Ellipse.6b410f74.js"),window.__aioseoDynamicImportPreload__("js/Information.8ca58f92.js"),window.__aioseoDynamicImportPreload__("css/Tabs.8be71609.css"),window.__aioseoDynamicImportPreload__("js/Overview.92e33ec9.js"),window.__aioseoDynamicImportPreload__("js/DonutChartWithLegend.48e0b578.js"),window.__aioseoDynamicImportPreload__("js/AnimatedNumber.29f8f83e.js"),window.__aioseoDynamicImportPreload__("js/numbers.c7cb4085.js"),window.__aioseoDynamicImportPreload__("css/DonutChartWithLegend.86f54c65.css"),window.__aioseoDynamicImportPreload__("css/Overview.2dc615e5.css"),window.__aioseoDynamicImportPreload__("js/Row.cd3858a9.js"),window.__aioseoDynamicImportPreload__("css/Row.d88b2bb9.css"),window.__aioseoDynamicImportPreload__("js/KeywordsGraph.3a06a992.js"),window.__aioseoDynamicImportPreload__("js/SeoStatisticsOverview.f0774433.js"),window.__aioseoDynamicImportPreload__("js/LicenseConditions.0c467bf7.js"),window.__aioseoDynamicImportPreload__("js/_arrayEach.56a9f647.js"),window.__aioseoDynamicImportPreload__("js/_getTag.61c0a63c.js"),window.__aioseoDynamicImportPreload__("js/vue.esm-bundler.dc957f17.js"),window.__aioseoDynamicImportPreload__("js/license.e3b96863.js"),window.__aioseoDynamicImportPreload__("js/upperFirst.67708519.js"),window.__aioseoDynamicImportPreload__("js/_stringToArray.4de3b1f3.js"),window.__aioseoDynamicImportPreload__("js/toString.8b13982a.js"),window.__aioseoDynamicImportPreload__("css/LicenseConditions.c5013059.css"),window.__aioseoDynamicImportPreload__("css/SeoStatisticsOverview.63acb542.css"),window.__aioseoDynamicImportPreload__("js/Index.bc260cfc.js"),window.__aioseoDynamicImportPreload__("js/constants.2883a7a9.js"),window.__aioseoDynamicImportPreload__("css/Index.cfbdfa0a.css"),window.__aioseoDynamicImportPreload__("css/KeywordsGraph.6b9db545.css"),window.__aioseoDynamicImportPreload__("js/List.5a08a70b.js"),window.__aioseoDynamicImportPreload__("js/Statistics.6c120ab6.js"),window.__aioseoDynamicImportPreload__("js/PostsTable.f3e7acd8.js"),window.__aioseoDynamicImportPreload__("js/WpTable.7aa38f5b.js"),window.__aioseoDynamicImportPreload__("js/ScoreButton.aec6eb4d.js"),window.__aioseoDynamicImportPreload__("css/ScoreButton.88bdc4f6.css"),window.__aioseoDynamicImportPreload__("js/Table.8398081c.js"),window.__aioseoDynamicImportPreload__("css/Table.9e940f6b.css"),window.__aioseoDynamicImportPreload__("js/IndexStatus.78fc25b9.js"),window.__aioseoDynamicImportPreload__("css/IndexStatus.882591c9.css"),window.__aioseoDynamicImportPreload__("js/PostTypes.e5795f0f.js"),window.__aioseoDynamicImportPreload__("css/PostsTable.147bd89a.css"),window.__aioseoDynamicImportPreload__("js/RequiredPlans.d12c09c3.js"),window.__aioseoDynamicImportPreload__("js/addons.6651d172.js"),window.__aioseoDynamicImportPreload__("css/RequiredPlans.7624b017.css"),window.__aioseoDynamicImportPreload__("css/Dashboard.30bcc4c4.css")],import.meta.url),"../views/KeywordRankings.vue":()=>r(()=>import("./js/KeywordRankings.b1750f62.js"),[window.__aioseoDynamicImportPreload__("js/KeywordRankings.b1750f62.js"),window.__aioseoDynamicImportPreload__("js/links.813d802e.js"),window.__aioseoDynamicImportPreload__("js/vue.esm-bundler.7598fd57.js"),window.__aioseoDynamicImportPreload__("js/default-i18n.3881921e.js"),window.__aioseoDynamicImportPreload__("js/isArrayLikeObject.5519e7e6.js"),window.__aioseoDynamicImportPreload__("js/Blur.dfbd44b9.js"),window.__aioseoDynamicImportPreload__("js/_plugin-vue_export-helper.c114f5e4.js"),window.__aioseoDynamicImportPreload__("css/Blur.02feb373.css"),window.__aioseoDynamicImportPreload__("js/Card.68c5f6b2.js"),window.__aioseoDynamicImportPreload__("js/Tooltip.446bcf89.js"),window.__aioseoDynamicImportPreload__("css/Tooltip.c2302985.css"),window.__aioseoDynamicImportPreload__("js/Caret.13c1041f.js"),window.__aioseoDynamicImportPreload__("css/Caret.8ef6ecf6.css"),window.__aioseoDynamicImportPreload__("js/index.dfdc56df.js"),window.__aioseoDynamicImportPreload__("css/index.6e465ba1.css"),window.__aioseoDynamicImportPreload__("js/Slide.8d21c232.js"),window.__aioseoDynamicImportPreload__("css/Card.cb7c431d.css"),window.__aioseoDynamicImportPreload__("js/Row.cd3858a9.js"),window.__aioseoDynamicImportPreload__("css/Row.d88b2bb9.css"),window.__aioseoDynamicImportPreload__("js/SeoStatisticsOverview.f0774433.js"),window.__aioseoDynamicImportPreload__("js/LicenseConditions.0c467bf7.js"),window.__aioseoDynamicImportPreload__("js/_arrayEach.56a9f647.js"),window.__aioseoDynamicImportPreload__("js/_getTag.61c0a63c.js"),window.__aioseoDynamicImportPreload__("js/vue.esm-bundler.dc957f17.js"),window.__aioseoDynamicImportPreload__("js/numbers.c7cb4085.js"),window.__aioseoDynamicImportPreload__("js/license.e3b96863.js"),window.__aioseoDynamicImportPreload__("js/upperFirst.67708519.js"),window.__aioseoDynamicImportPreload__("js/_stringToArray.4de3b1f3.js"),window.__aioseoDynamicImportPreload__("js/toString.8b13982a.js"),window.__aioseoDynamicImportPreload__("css/LicenseConditions.c5013059.css"),window.__aioseoDynamicImportPreload__("css/SeoStatisticsOverview.63acb542.css"),window.__aioseoDynamicImportPreload__("js/KeywordsGraph.3a06a992.js"),window.__aioseoDynamicImportPreload__("js/Index.bc260cfc.js"),window.__aioseoDynamicImportPreload__("js/constants.2883a7a9.js"),window.__aioseoDynamicImportPreload__("css/Index.cfbdfa0a.css"),window.__aioseoDynamicImportPreload__("css/KeywordsGraph.6b9db545.css"),window.__aioseoDynamicImportPreload__("js/WpTable.7aa38f5b.js"),window.__aioseoDynamicImportPreload__("js/PostTypes.e5795f0f.js"),window.__aioseoDynamicImportPreload__("js/Table.8398081c.js"),window.__aioseoDynamicImportPreload__("css/Table.9e940f6b.css"),window.__aioseoDynamicImportPreload__("js/RequiredPlans.d12c09c3.js"),window.__aioseoDynamicImportPreload__("js/addons.6651d172.js"),window.__aioseoDynamicImportPreload__("css/RequiredPlans.7624b017.css"),window.__aioseoDynamicImportPreload__("css/KeywordRankings.a6ce6045.css")],import.meta.url),"../views/Main.vue":()=>r(()=>import("./js/Main.18b7614c.js"),[window.__aioseoDynamicImportPreload__("js/Main.18b7614c.js"),window.__aioseoDynamicImportPreload__("js/links.813d802e.js"),window.__aioseoDynamicImportPreload__("js/vue.esm-bundler.7598fd57.js"),window.__aioseoDynamicImportPreload__("js/default-i18n.3881921e.js"),window.__aioseoDynamicImportPreload__("js/isArrayLikeObject.5519e7e6.js"),window.__aioseoDynamicImportPreload__("js/license.e3b96863.js"),window.__aioseoDynamicImportPreload__("js/upperFirst.67708519.js"),window.__aioseoDynamicImportPreload__("js/_stringToArray.4de3b1f3.js"),window.__aioseoDynamicImportPreload__("js/toString.8b13982a.js"),window.__aioseoDynamicImportPreload__("js/Caret.13c1041f.js"),window.__aioseoDynamicImportPreload__("js/_plugin-vue_export-helper.c114f5e4.js"),window.__aioseoDynamicImportPreload__("css/Caret.8ef6ecf6.css"),window.__aioseoDynamicImportPreload__("js/DatePicker.f7c04d7d.js"),window.__aioseoDynamicImportPreload__("js/get.31082aba.js"),window.__aioseoDynamicImportPreload__("js/isUndefined.2431eba9.js"),window.__aioseoDynamicImportPreload__("js/_getTag.61c0a63c.js"),window.__aioseoDynamicImportPreload__("js/debounce.4990a8b5.js"),window.__aioseoDynamicImportPreload__("js/toNumber.c4afc119.js"),window.__aioseoDynamicImportPreload__("js/_baseTrim.8725856f.js"),window.__aioseoDynamicImportPreload__("css/DatePicker.438c59b5.css"),window.__aioseoDynamicImportPreload__("js/Blur.dfbd44b9.js"),window.__aioseoDynamicImportPreload__("css/Blur.02feb373.css"),window.__aioseoDynamicImportPreload__("js/Index.5b098c62.js"),window.__aioseoDynamicImportPreload__("js/allowed.ea569dbe.js"),window.__aioseoDynamicImportPreload__("js/params.f0608262.js"),window.__aioseoDynamicImportPreload__("js/Ellipse.6b410f74.js"),window.__aioseoDynamicImportPreload__("js/Header.12e3b412.js"),window.__aioseoDynamicImportPreload__("js/addons.6651d172.js"),window.__aioseoDynamicImportPreload__("js/ScrollAndHighlight.b5ba47fd.js"),window.__aioseoDynamicImportPreload__("js/LogoGear.e54c732a.js"),window.__aioseoDynamicImportPreload__("css/ScrollAndHighlight.9dee709b.css"),window.__aioseoDynamicImportPreload__("js/AnimatedNumber.29f8f83e.js"),window.__aioseoDynamicImportPreload__("js/numbers.c7cb4085.js"),window.__aioseoDynamicImportPreload__("js/Logo.f0888cfa.js"),window.__aioseoDynamicImportPreload__("js/index.dfdc56df.js"),window.__aioseoDynamicImportPreload__("css/index.6e465ba1.css"),window.__aioseoDynamicImportPreload__("css/Header.865502ac.css"),window.__aioseoDynamicImportPreload__("js/Support.0e6f0669.js"),window.__aioseoDynamicImportPreload__("js/Tabs.c4ec03a5.js"),window.__aioseoDynamicImportPreload__("js/TruSeoScore.b474bf15.js"),window.__aioseoDynamicImportPreload__("js/Information.8ca58f92.js"),window.__aioseoDynamicImportPreload__("js/Slide.8d21c232.js"),window.__aioseoDynamicImportPreload__("css/Tabs.8be71609.css"),window.__aioseoDynamicImportPreload__("js/Url.4051e9b7.js"),window.__aioseoDynamicImportPreload__("js/Date.17e52d00.js"),window.__aioseoDynamicImportPreload__("js/constants.2883a7a9.js"),window.__aioseoDynamicImportPreload__("js/Exclamation.3ebc8239.js"),window.__aioseoDynamicImportPreload__("js/Gear.e267ac3b.js"),window.__aioseoDynamicImportPreload__("css/Index.bf30cb97.css"),window.__aioseoDynamicImportPreload__("css/main.35cf4559.css"),window.__aioseoDynamicImportPreload__("js/ContentRankings.cda5dfdf.js"),window.__aioseoDynamicImportPreload__("js/Row.cd3858a9.js"),window.__aioseoDynamicImportPreload__("css/Row.d88b2bb9.css"),window.__aioseoDynamicImportPreload__("js/PostsTable.f3e7acd8.js"),window.__aioseoDynamicImportPreload__("js/WpTable.7aa38f5b.js"),window.__aioseoDynamicImportPreload__("js/ScoreButton.aec6eb4d.js"),window.__aioseoDynamicImportPreload__("css/ScoreButton.88bdc4f6.css"),window.__aioseoDynamicImportPreload__("js/Table.8398081c.js"),window.__aioseoDynamicImportPreload__("js/Tooltip.446bcf89.js"),window.__aioseoDynamicImportPreload__("css/Tooltip.c2302985.css"),window.__aioseoDynamicImportPreload__("css/Table.9e940f6b.css"),window.__aioseoDynamicImportPreload__("js/Index.bc260cfc.js"),window.__aioseoDynamicImportPreload__("css/Index.cfbdfa0a.css"),window.__aioseoDynamicImportPreload__("js/LicenseConditions.0c467bf7.js"),window.__aioseoDynamicImportPreload__("js/_arrayEach.56a9f647.js"),window.__aioseoDynamicImportPreload__("js/vue.esm-bundler.dc957f17.js"),window.__aioseoDynamicImportPreload__("css/LicenseConditions.c5013059.css"),window.__aioseoDynamicImportPreload__("js/IndexStatus.78fc25b9.js"),window.__aioseoDynamicImportPreload__("css/IndexStatus.882591c9.css"),window.__aioseoDynamicImportPreload__("js/PostTypes.e5795f0f.js"),window.__aioseoDynamicImportPreload__("css/PostsTable.147bd89a.css"),window.__aioseoDynamicImportPreload__("js/RequiredPlans.d12c09c3.js"),window.__aioseoDynamicImportPreload__("css/RequiredPlans.7624b017.css"),window.__aioseoDynamicImportPreload__("css/ContentRankings.f71f7fed.css"),window.__aioseoDynamicImportPreload__("js/Dashboard.958a1118.js"),window.__aioseoDynamicImportPreload__("js/Card.68c5f6b2.js"),window.__aioseoDynamicImportPreload__("css/Card.cb7c431d.css"),window.__aioseoDynamicImportPreload__("js/Overview.92e33ec9.js"),window.__aioseoDynamicImportPreload__("js/DonutChartWithLegend.48e0b578.js"),window.__aioseoDynamicImportPreload__("css/DonutChartWithLegend.86f54c65.css"),window.__aioseoDynamicImportPreload__("css/Overview.2dc615e5.css"),window.__aioseoDynamicImportPreload__("js/KeywordsGraph.3a06a992.js"),window.__aioseoDynamicImportPreload__("js/SeoStatisticsOverview.f0774433.js"),window.__aioseoDynamicImportPreload__("css/SeoStatisticsOverview.63acb542.css"),window.__aioseoDynamicImportPreload__("css/KeywordsGraph.6b9db545.css"),window.__aioseoDynamicImportPreload__("js/List.5a08a70b.js"),window.__aioseoDynamicImportPreload__("js/Statistics.6c120ab6.js"),window.__aioseoDynamicImportPreload__("css/Dashboard.30bcc4c4.css"),window.__aioseoDynamicImportPreload__("js/KeywordRankings.b1750f62.js"),window.__aioseoDynamicImportPreload__("css/KeywordRankings.a6ce6045.css"),window.__aioseoDynamicImportPreload__("js/SeoStatistics.5ee156b8.js"),window.__aioseoDynamicImportPreload__("css/SeoStatistics.71c5ea25.css"),window.__aioseoDynamicImportPreload__("css/Main.e450ba70.css")],import.meta.url),"../views/SeoStatistics.vue":()=>r(()=>import("./js/SeoStatistics.5ee156b8.js"),[window.__aioseoDynamicImportPreload__("js/SeoStatistics.5ee156b8.js"),window.__aioseoDynamicImportPreload__("js/links.813d802e.js"),window.__aioseoDynamicImportPreload__("js/vue.esm-bundler.7598fd57.js"),window.__aioseoDynamicImportPreload__("js/default-i18n.3881921e.js"),window.__aioseoDynamicImportPreload__("js/isArrayLikeObject.5519e7e6.js"),window.__aioseoDynamicImportPreload__("js/Blur.dfbd44b9.js"),window.__aioseoDynamicImportPreload__("js/_plugin-vue_export-helper.c114f5e4.js"),window.__aioseoDynamicImportPreload__("css/Blur.02feb373.css"),window.__aioseoDynamicImportPreload__("js/Card.68c5f6b2.js"),window.__aioseoDynamicImportPreload__("js/Tooltip.446bcf89.js"),window.__aioseoDynamicImportPreload__("css/Tooltip.c2302985.css"),window.__aioseoDynamicImportPreload__("js/Caret.13c1041f.js"),window.__aioseoDynamicImportPreload__("css/Caret.8ef6ecf6.css"),window.__aioseoDynamicImportPreload__("js/index.dfdc56df.js"),window.__aioseoDynamicImportPreload__("css/index.6e465ba1.css"),window.__aioseoDynamicImportPreload__("js/Slide.8d21c232.js"),window.__aioseoDynamicImportPreload__("css/Card.cb7c431d.css"),window.__aioseoDynamicImportPreload__("js/SeoStatisticsOverview.f0774433.js"),window.__aioseoDynamicImportPreload__("js/LicenseConditions.0c467bf7.js"),window.__aioseoDynamicImportPreload__("js/_arrayEach.56a9f647.js"),window.__aioseoDynamicImportPreload__("js/_getTag.61c0a63c.js"),window.__aioseoDynamicImportPreload__("js/vue.esm-bundler.dc957f17.js"),window.__aioseoDynamicImportPreload__("js/numbers.c7cb4085.js"),window.__aioseoDynamicImportPreload__("js/license.e3b96863.js"),window.__aioseoDynamicImportPreload__("js/upperFirst.67708519.js"),window.__aioseoDynamicImportPreload__("js/_stringToArray.4de3b1f3.js"),window.__aioseoDynamicImportPreload__("js/toString.8b13982a.js"),window.__aioseoDynamicImportPreload__("css/LicenseConditions.c5013059.css"),window.__aioseoDynamicImportPreload__("css/SeoStatisticsOverview.63acb542.css"),window.__aioseoDynamicImportPreload__("js/Row.cd3858a9.js"),window.__aioseoDynamicImportPreload__("css/Row.d88b2bb9.css"),window.__aioseoDynamicImportPreload__("js/PostsTable.f3e7acd8.js"),window.__aioseoDynamicImportPreload__("js/WpTable.7aa38f5b.js"),window.__aioseoDynamicImportPreload__("js/ScoreButton.aec6eb4d.js"),window.__aioseoDynamicImportPreload__("css/ScoreButton.88bdc4f6.css"),window.__aioseoDynamicImportPreload__("js/Table.8398081c.js"),window.__aioseoDynamicImportPreload__("css/Table.9e940f6b.css"),window.__aioseoDynamicImportPreload__("js/Index.bc260cfc.js"),window.__aioseoDynamicImportPreload__("js/constants.2883a7a9.js"),window.__aioseoDynamicImportPreload__("css/Index.cfbdfa0a.css"),window.__aioseoDynamicImportPreload__("js/IndexStatus.78fc25b9.js"),window.__aioseoDynamicImportPreload__("css/IndexStatus.882591c9.css"),window.__aioseoDynamicImportPreload__("js/PostTypes.e5795f0f.js"),window.__aioseoDynamicImportPreload__("css/PostsTable.147bd89a.css"),window.__aioseoDynamicImportPreload__("js/RequiredPlans.d12c09c3.js"),window.__aioseoDynamicImportPreload__("js/addons.6651d172.js"),window.__aioseoDynamicImportPreload__("css/RequiredPlans.7624b017.css"),window.__aioseoDynamicImportPreload__("css/SeoStatistics.71c5ea25.css")],import.meta.url)}),`../views/${e}.vue`),z=[{path:"/:pathMatch(.*)*",redirect:"/dashboard"},{path:"/dashboard",name:"dashboard",component:a("Main"),meta:{access:"aioseo_search_statistics_settings",name:s("Dashboard",o),hideSaveButton:!0}},{path:"/seo-statistics",name:"seo-statistics",component:a("Main"),meta:{access:"aioseo_search_statistics_settings",name:s("SEO Statistics",o),hideSaveButton:!0}},{path:"/keyword-rankings",name:"keyword-rankings",component:a("Main"),meta:{access:"aioseo_search_statistics_settings",name:s("Keyword Rankings",o),hideSaveButton:!0}},{path:"/content-rankings",name:"content-rankings",component:a("Main"),meta:{access:"aioseo_search_statistics_settings",name:s("Content Rankings",o),hideSaveButton:!0}},{path:"/settings",name:"settings",component:a("Main"),meta:{access:"aioseo_search_statistics_settings",name:s("Settings",o)}},{path:"/post-detail",name:"post-detail",component:a("Main"),meta:{access:"aioseo_search_statistics_settings",name:s("Post Detail",o),hideSaveButton:!0,licenseFeature:["search-statistics","post-detail"],middleware:[I],middlewareData:{routeName:"dashboard"}}}];let t=R({...Y,name:"Pages/SearchStatistics"});t=$(t);t=E(t);t=C(t);const l=x(z,t);l.app=t;t.use(l);A(t,l);t.mount("#aioseo-app");