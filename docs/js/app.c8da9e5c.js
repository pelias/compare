(function(t){function e(e){for(var o,i,s=e[0],c=e[1],l=e[2],p=0,d=[];p<s.length;p++)i=s[p],Object.prototype.hasOwnProperty.call(a,i)&&a[i]&&d.push(a[i][0]),a[i]=0;for(o in c)Object.prototype.hasOwnProperty.call(c,o)&&(t[o]=c[o]);u&&u(e);while(d.length)d.shift()();return r.push.apply(r,l||[]),n()}function n(){for(var t,e=0;e<r.length;e++){for(var n=r[e],o=!0,s=1;s<n.length;s++){var c=n[s];0!==a[c]&&(o=!1)}o&&(r.splice(e--,1),t=i(i.s=n[0]))}return t}var o={},a={app:0},r=[];function i(e){if(o[e])return o[e].exports;var n=o[e]={i:e,l:!1,exports:{}};return t[e].call(n.exports,n,n.exports,i),n.l=!0,n.exports}i.m=t,i.c=o,i.d=function(t,e,n){i.o(t,e)||Object.defineProperty(t,e,{enumerable:!0,get:n})},i.r=function(t){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(t,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(t,"__esModule",{value:!0})},i.t=function(t,e){if(1&e&&(t=i(t)),8&e)return t;if(4&e&&"object"===typeof t&&t&&t.__esModule)return t;var n=Object.create(null);if(i.r(n),Object.defineProperty(n,"default",{enumerable:!0,value:t}),2&e&&"string"!=typeof t)for(var o in t)i.d(n,o,function(e){return t[e]}.bind(null,o));return n},i.n=function(t){var e=t&&t.__esModule?function(){return t["default"]}:function(){return t};return i.d(e,"a",e),e},i.o=function(t,e){return Object.prototype.hasOwnProperty.call(t,e)},i.p="";var s=window["webpackJsonp"]=window["webpackJsonp"]||[],c=s.push.bind(s);s.push=e,s=s.slice();for(var l=0;l<s.length;l++)e(s[l]);var u=c;r.push(["cd49","chunk-vendors"]),n()})({1145:function(t,e,n){"use strict";var o=n("1485"),a=n.n(o);a.a},1485:function(t,e,n){},6459:function(t,e,n){},"760a":function(t,e,n){"use strict";var o=n("94c1"),a=n.n(o);a.a},"8ccd":function(t,e,n){"use strict";var o=n("6459"),a=n.n(o);a.a},"94c1":function(t,e,n){},cd49:function(t,e,n){"use strict";n.r(e);n("e260"),n("e6cf"),n("cca6"),n("a79d");var o=n("2b0e"),a=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("b-container",{attrs:{fluid:""}},[n("b-row",[n("b-form",{staticClass:"w-100 px-4 pb-4",on:{submit:function(e){return e.preventDefault(),t.onSubmit(e)}}},[t.endpointUsesText?n("b-form-group",{attrs:{label:"Query (text):","label-for":"input-text","label-cols-sm":"2"}},[n("b-form-input",{staticClass:"w-100",attrs:{id:"input-text",required:"",placeholder:"London, UK"},on:{change:t.onChange},model:{value:t.text,callback:function(e){t.text=e},expression:"text"}})],1):t._e(),t.endpointUsesIds?n("b-form-group",{attrs:{label:"Ids (comma separated):","label-for":"input-ids","label-cols-sm":"2"}},[n("b-form-input",{staticClass:"w-100",attrs:{id:"input-ids",required:"",placeholder:"openstreetmap:venue:way/5013364,whosonfirst:borough:421205771"},on:{change:t.onChange},model:{value:t.ids,callback:function(e){t.ids=e},expression:"ids"}})],1):t._e(),t.endpointUsesPoint?n("b-form-group",{attrs:{id:"input-group-2",label:t.pointLabel,"label-for":"input-point","label-cols-sm":"2"}},[n("div",{staticStyle:{display:"flex"}},[n("b-form-input",{attrs:{id:"input-point",placeholder:"40.74, -74",required:t.isPointRequired},on:{change:t.onPointChange},model:{value:t.pointStr,callback:function(e){t.pointStr=e},expression:"pointStr"}}),n("b-button",{directives:[{name:"b-modal",rawName:"v-b-modal.modal-point",modifiers:{"modal-point":!0}}]},[n("font-awesome-icon",{attrs:{icon:["fa","map"]}})],1),t.isGeolocationSupported?n("b-button",{on:{click:t.doGeolocate}},[n("font-awesome-icon",{attrs:{icon:["fa","crosshairs"],spin:t.isDoingGeolocation}})],1):t._e()],1)]):t._e(),n("b-form-group",{attrs:{id:"input-group-5",label:"Hosts","label-for":"input-hosts","label-cols-sm":"2"}},[n("vue-tags-input",{attrs:{id:"input-hosts",tags:t.hosts,placeholder:"Add Host"},on:{"tags-changed":t.tagsChanged},model:{value:t.host,callback:function(e){t.host=e},expression:"host"}}),0===t.hosts.length?n("div",{staticClass:"alert alert-danger"},[t._v(" Please add at least one host ")]):t._e()],1),n("b-form-group",{attrs:{label:"Extra params","label-for":"input-extra-params","label-cols-sm":"2"}},[n("b-form-input",{attrs:{id:"input-extra-params",placeholder:"debug=true&foo=bar&baz=bat"},on:{change:t.onChange},model:{value:t.prettyExtraParams,callback:function(e){t.prettyExtraParams=e},expression:"prettyExtraParams"}})],1),n("div",{staticClass:"form-row form-group",attrs:{role:"group"}},[n("label",{staticClass:"col-sm-2 col-form-label"},[t._v("Options")]),n("div",{staticClass:"bv-no-point-ring col flex"},[n("b-form-checkbox",{attrs:{id:"checkbox-debug"},on:{change:t.onDebugChange},model:{value:t.debug,callback:function(e){t.debug=e},expression:"debug"}},[t._v("Debug")])],1)]),n("div",{staticClass:"form-row form-group",attrs:{role:"group"}},[n("label",{staticClass:"col-sm-2 col-form-label"},[t._v("Endpoint")]),n("div",{staticClass:"col-sm-10 d-flex flex-wrap"},[n("b-form-radio",{attrs:{value:"/v1/search"},on:{change:t.onEndpointChange},model:{value:t.endpoint,callback:function(e){t.endpoint=e},expression:"endpoint"}},[t._v("Geocode")]),n("b-form-radio",{attrs:{value:"/v1/autocomplete"},on:{change:t.onEndpointChange},model:{value:t.endpoint,callback:function(e){t.endpoint=e},expression:"endpoint"}},[t._v("Autocomplete")]),n("b-form-radio",{attrs:{value:"/v1/reverse"},on:{change:t.onEndpointChange},model:{value:t.endpoint,callback:function(e){t.endpoint=e},expression:"endpoint"}},[t._v("Reverse Geocode")]),n("b-form-radio",{attrs:{value:"/v1/search/structured"},on:{change:t.onEndpointChange},model:{value:t.endpoint,callback:function(e){t.endpoint=e},expression:"endpoint"}},[t._v("Structured Geocode")]),n("b-form-radio",{attrs:{value:"/v1/place"},on:{change:t.onEndpointChange},model:{value:t.endpoint,callback:function(e){t.endpoint=e},expression:"endpoint"}},[t._v("Place")])],1)]),n("b-form-group",{attrs:{label:"Search path","label-for":"input-search-path","label-cols-sm":"2"}},[n("b-form-input",{attrs:{id:"input-search-path",required:"",placeholder:"/v1/autocomplete?text=london"},model:{value:t.prettyQueryPath,callback:function(e){t.prettyQueryPath=e},expression:"prettyQueryPath"}})],1),n("b-button",{attrs:{type:"submit",variant:"primary"}},[t._v("Submit")])],1)],1),n("b-row",t._l(t.responses,(function(e){return n("ViewColumn",{key:e.url,attrs:{body:e.body,host:e.host,numHosts:t.hosts.length}})})),1),n("b-modal",{attrs:{id:"modal-point",title:t.pointLabel,"ok-only":"","ok-title":"Close"},on:{shown:t.pointModalShown}},[n("PointModal",{ref:"pointModal",attrs:{lat:t.pointLat,lng:t.pointLng},on:{"point-changed":t.pointChanged}})],1)],1)},r=[],i=(n("99af"),n("caad"),n("a15b"),n("d81d"),n("fb6a"),n("d3b7"),n("ac1f"),n("25f0"),n("8a79"),n("2532"),n("3ca3"),n("5319"),n("1276"),n("498a"),n("ddb0"),n("2b3d"),n("96cf"),n("1da1")),s=n("d4ec"),c=n("bee2"),l=n("99de"),u=n("7e84"),p=n("262e"),d=n("9ab4"),h=n("60a3"),f=n("ad3d"),g=n("c7a0"),b=n("ecee"),v=n("c074"),y=n("e11e"),m=n("5f5b"),w=n("b1e0"),k=(n("f9e3"),n("2dd8"),n("2699")),_=n("a40a"),x=n("4e2b"),j=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("b-col",{attrs:{cols:12/t.numHosts}},[n("div",{staticClass:"messages"},[t._l(t.body.geocoding.errors,(function(e,o){return n("div",{key:o,staticClass:"alert alert-danger"},[t._v(" "+t._s(e)+" ")])})),t._l(t.body.geocoding.warnings,(function(e,o){return n("div",{key:o,staticClass:"alert alert-warning"},[t._v(" "+t._s(e)+" ")])}))],2),n("div",{staticClass:"response shadow"},[n("h4",{staticClass:"code-title code-title-silver rounded"},[n("span",{staticClass:"title"},[t._v(" "+t._s(t.host))])]),t.body.features&&t.body.features.length?n("div",{staticClass:"code rounded"},[n("ResultsSummary",{attrs:{features:t.body.features},on:{"feature-clicked":t.featureClicked}})],1):n("div",{staticClass:"code rounded"},[t._v(" No Results ")])]),n("div",{staticClass:"assertion shadow rounded",staticStyle:{"margin-top":"-10px"}},[n("l-map",{ref:"mymap",staticStyle:{height:"200px"},attrs:{center:t.center,zoom:13,options:{scrollWheelZoom:!1}}},[n("l-tile-layer",{attrs:{url:t.url,attribution:t.attribution}})],1)],1),t.body?n("div",{staticClass:"assertion shadow rounded",staticStyle:{"margin-top":"-10px"}},[n("div",{staticClass:"copyButtons"},[n("b-button",{staticClass:"copyJson",on:{click:t.copyJson}},[t._v("Copy JSON")]),t.esQuery?n("b-button",{staticClass:"copyEsQuery",on:{click:t.copyEsQuery}},[t._v("Copy ES Query")]):t._e()],1),n("div",{ref:"renderedJson",staticClass:"renderedJson"})]):t._e(),n("div",{staticClass:"hiddenCopy"},[n("textarea",{ref:"hiddenCopyInput"})])])},C=[],O=(n("4de4"),n("4160"),n("2ca0"),n("159b"),n("c975"),n("a9e3"),n("b64b"),n("53ca")),S=function(){var t=[];while(arguments.length)t.push(P(I(Array.prototype.shift.call(arguments)),E(Array.prototype.shift.call(arguments))));return t},P=function t(){for(var e=Array.prototype.shift.call(arguments),n=0;n<arguments.length;n++)arguments[n].constructor==Array?t.apply(this,[e].concat(arguments[n])):e.appendChild(arguments[n]);return e},L=function(t,e){return t.insertBefore(e,t.firstChild),t},M=function(t,e){var n=e||Object.keys(t);for(var o in n)if(Object.hasOwnProperty.call(t,n[o]))return!1;return!0},E=function(t){return document.createTextNode(t)},I=function(t){var e=document.createElement("span");return t&&(e.className=t),e},U=function(t,e,n){var o=document.createElement("a");return e&&(o.className=e),o.appendChild(E(t)),o.href="#",o.onclick=function(t){return console.log(t),t&&t.stopPropagation(),t&&t.preventDefault(),n(),!1},o};function A(t,e,n,o,a){var r=n?"":e,i=function(t,e,n,i,s){var c,l=I(i),u=function(){c||P(l.parentNode,c=L(s(),U(a.hide,"disclosure",(function(){c.style.display="none",l.style.display="inline"})))),c.style.display="inline",l.style.display="none"};P(l,U(a.show,"disclosure",u),S(i+" syntax",t),U(e,null,u),S(i+" syntax",n));var p=P(I(),E(r.slice(0,-1)),l);return o>0&&"string"!=i&&u(),p};return null===t?S(null,r,"keyword","null"):void 0===t?S(null,r,"keyword","undefined"):"string"==typeof t&&t.length>a.max_string_length?i('"',t.substr(0,a.max_string_length)+" ...",'"',"string",(function(){return P(I("string"),S(null,r,"string",JSON.stringify(t)))})):"object"!=Object(O["a"])(t)||[Number,String,Boolean,Date].indexOf(t.constructor)>=0?S(null,r,Object(O["a"])(t),JSON.stringify(t)):t.constructor==Array?0==t.length?S(null,r,"array syntax","[]"):i("[",a.collapse_msg(t.length),"]","array",(function(){for(var n=P(I("array"),S("array syntax","[",null,"\n")),r=0;r<t.length;r++)P(n,A(a.replacer.call(t,r,t[r]),e+"    ",!1,o-1,a),r!=t.length-1?S("syntax",","):[],E("\n"));return P(n,S(null,e,"array syntax","]")),n})):t instanceof HTMLElement?t:M(t,a.property_list)?S(null,r,"object syntax","{}"):i("{",a.collapse_msg(Object.keys(t).length),"}","object",(function(){var n=P(I("object"),S("object syntax","{",null,"\n"));for(var r in t)var i=r;var s=a.property_list||Object.keys(t);for(var c in a.sort_objects&&(s=s.sort()),s){r=s[c];r in t&&P(n,S(null,e+"    ","key",'"'+r+'"',"object syntax",": "),A(a.replacer.call(t,r,t[r]),e+"    ",!0,o-1,a),r!=i?S("syntax",","):[],E("\n"))}return P(n,S(null,e,"object syntax","}")),n}))}function q(t){var e=new Object(q.options);e.replacer="function"==typeof e.replacer?e.replacer:function(t,e){return e};var n=P(document.createElement("pre"),A(t,"",!1,e.show_to_level,e));return n.className="renderjson",n}q.set_icons=function(t,e){return q.options.show=t,q.options.hide=e,q},q.set_show_to_level=function(t){return q.options.show_to_level="string"==typeof t&&"all"===t.toLowerCase()?Number.MAX_VALUE:t,q},q.set_max_string_length=function(t){return q.options.max_string_length="string"==typeof t&&"none"===t.toLowerCase()?Number.MAX_VALUE:t,q},q.set_sort_objects=function(t){return q.options.sort_objects=t,q},q.set_replacer=function(t){return q.options.replacer=t,q},q.set_collapse_msg=function(t){return q.options.collapse_msg=t,q},q.set_property_list=function(t){return q.options.property_list=t,q},q.set_show_by_default=function(t){return q.options.show_to_level=t?Number.MAX_VALUE:0,q},q.options={},q.set_icons("⊕","⊖"),q.set_show_by_default(!1),q.set_sort_objects(!1),q.set_max_string_length("none"),q.set_replacer(void 0),q.set_property_list(void 0),q.set_collapse_msg((function(t){return t+" item"+(1==t?"":"s")}));var B=n("f2d1"),T={version:"2.0.1"};T.Icon=y["Icon"].extend({options:{iconSize:[35,45],iconAnchor:[17,42],popupAnchor:[1,-32],shadowAnchor:[10,12],shadowSize:[36,16],className:"awesome-marker",prefix:"glyphicon",spinClass:"fa-spin",extraClasses:"",icon:"home",markerColor:"blue",iconColor:"white"},initialize:function(t){t=y["Util"].setOptions(this,t)},createIcon:function(){var t=document.createElement("div"),e=this.options;return e.icon&&(t.innerHTML=Object(b["b"])(e.icon,{styles:{color:e.iconColor}}).html[0]),e.bgPos&&(t.style.backgroundPosition=-e.bgPos.x+"px "+-e.bgPos.y+"px"),this._setIconStyles(t,"icon-"+e.markerColor),t},_createInner:function(){var t,e="",n="",o="",a=this.options;return t=a.icon.slice(0,a.prefix.length+1)===a.prefix+"-"?a.icon:a.prefix+"-"+a.icon,a.spin&&"string"===typeof a.spinClass&&(e=a.spinClass),a.iconColor&&("white"===a.iconColor||"black"===a.iconColor?n="icon-"+a.iconColor:o="style='color: "+a.iconColor+"' "),"<i "+o+"class='"+a.extraClasses+" "+a.prefix+" "+t+" "+e+" "+n+"'></i>"},_setIconStyles:function(t,e){var n,o=this.options,a=y["point"](o["shadow"===e?"shadowSize":"iconSize"]);n="shadow"===e?y["point"](o.shadowAnchor||o.iconAnchor):y["point"](o.iconAnchor),!n&&a&&(n=a.divideBy(2)),t.className="awesome-marker-"+e+" "+o.className,n&&(t.style.marginLeft=-n.x+"px",t.style.marginTop=-n.y+"px"),a&&(t.style.width=a.x+"px",t.style.height=a.y+"px")},createShadow:function(){var t=document.createElement("div");return this._setIconStyles(t,"shadow"),t}});var F={icon:function(t){return new T.Icon(t)}},N=F,J=(n("db98"),function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("ul",{staticClass:"summary"},t._l(t.features||[],(function(e,o){return n("li",{key:e.properties.id,on:{click:function(n){return t.featureClicked(e)}}},[n("span",{staticClass:"num"},[t._v(t._s(o)),n("span",{staticClass:"hidden_brace"},[t._v(") ")])]),n("span",{staticClass:"icon"},[n("font-awesome-icon",{attrs:{icon:t.iconForLayer(e.properties.layer)}})],1),t._v(" "+t._s(e.properties.label)+" ")])})),0)}),R=[],D=function(t){function e(){var t;return Object(s["a"])(this,e),t=Object(l["a"])(this,Object(u["a"])(e).call(this)),[B["a"],v["p"],v["f"],v["c"],v["k"],v["g"],v["q"],v["m"],v["e"],v["j"],v["d"],v["a"],v["o"],v["n"]].forEach((function(t){return b["c"].add(t)})),t}return Object(p["a"])(e,t),Object(c["a"])(e,[{key:"featureClicked",value:function(t){this.$emit("feature-clicked",t)}},{key:"iconForLayer",value:function(t){switch(t){case"locality":return v["p"];case"localadmin":return v["f"];case"neighbourhood":return v["c"];case"borough":return v["k"];case"county":return B["a"];case"macrocounty":return v["g"];case"region":return v["q"];case"macroregion":return v["m"];case"country":return v["e"];case"venue":return v["j"];case"address":return v["d"];case"mixed":return v["a"];case"street":return v["o"];default:return v["n"]}}}]),e}(h["c"]);Object(d["a"])([Object(h["b"])()],D.prototype,"features",void 0),D=Object(d["a"])([Object(h["a"])({components:{FontAwesomeIcon:f["a"]}})],D);var z=D,Q=z,G=(n("760a"),n("2877")),H=Object(G["a"])(Q,J,R,!1,null,"59ff5181",null),$=H.exports,W=[B["b"],v["b"],v["l"],v["h"],v["i"],v["m"]];function V(t){var e=document.implementation.createHTMLDocument();return e.body.innerHTML=t,e.body.children[0]}function K(t,e){var n=function(t,n){return V('<a href="'.concat(t,'">"').concat(n||e,'"</a>'))};if("string"===typeof e&&e.startsWith("whosonfirst:")){var o=e.split(":"),a=o[o.length-1];return n("https://spelunker.whosonfirst.org/id/".concat(a))}if("string"===typeof e&&e.startsWith("openaddresses:")){var r=e.split(":");if(r.length>2){var i=r[2];return V('<span>"'.concat(r[0],":").concat(r[1],':<a href="https://github.com/openaddresses/openaddresses/blob/master/sources/').concat(i,'.json">').concat(r[2],"</a>:").concat(r.slice(3).join(":"),'"</span>'))}}var s="openstreetmap:";if("string"===typeof e&&e.startsWith(s)){var c=e.split(":");return 3!==c.length?e:n("https://www.openstreetmap.org/".concat(c[2]))}if("string"===typeof e&&e.startsWith("geonames:")){var l=e.split(":"),u=l[l.length-1];return n("https://www.geonames.org/".concat(u))}return e}W.forEach((function(t){return b["c"].add(t)}));var Z={default:N.icon({icon:v["b"],markerColor:"purple"}),geonames:N.icon({icon:v["l"],markerColor:"darkpurple"}),wof:N.icon({icon:B["b"],markerColor:"green"}),openstreetmap:N.icon({icon:v["i"],markerColor:"red"}),openaddresses:N.icon({icon:v["h"],markerColor:"orange"}),quattroshapes:N.icon({icon:v["m"],markerColor:"darkgreen"})},X=function(t){function e(){var t;return Object(s["a"])(this,e),t=Object(l["a"])(this,Object(u["a"])(e).apply(this,arguments)),t.renderedJson=null,t.summary="",t.center=Object(y["latLng"])(47.41322,-1.219482),t.url="//{s}.tile.jawg.io/jawg-terrain/{z}/{x}/{y}.png?access-token=t6fAKnvaPdPCucraY88YwlKjBfUHqBMvvZBIWlcp1Z9Z5FVtA02uWo6Dc9DGB2JO",t.attribution='Map &copy; <a href="http://jawg.io" target="_blank" class="jawg-attrib"><b>Jawg</b>Maps</a> | Map data &copy; <a href="https://www.openstreetmap.org/copyright" target="_blank" class="osm-attrib">OpenStreetMap contributors</a>',t}return Object(p["a"])(e,t),Object(c["a"])(e,[{key:"centerFeatures",value:function(t){var e=y["geoJSON"](t),n=e.getBounds();try{n=n.pad(.5),this.getMap().fitBounds(n)}catch(o){console.error(o)}}},{key:"mounted",value:function(){q.set_replacer(K),q.set_show_to_level("all"),this.$refs.renderedJson.appendChild(q(this.body)),this.getMap().invalidateSize(),this.centerFeatures(this.body.features),this.addBoundingBoxes(),this.addMarkers()}},{key:"addMarkers",value:function(){var t,e,n=this.body,o=null;if(null===n||void 0===n||null===(t=n.data)||void 0===t?void 0:t.geocoding.query){var a=n.data.geocoding.query;a&&a["focus.point.lat"]&&a["focus.point.lon"]&&(o={lon:a["focus.point.lon"],lat:a["focus.point.lat"]})}var r=function(t,e){var n,o,a,r,i,s,c=Z.default;if(null===(n=t.properties)||void 0===n?void 0:n.icon)c=N.icon({icon:t.properties.icon,markerColor:t.properties["marker-color"]||"red"});else switch(null===(o=t.properties)||void 0===o?void 0:o.source){case"openstreetmap":case"osm":c=Z.openstreetmap;break;case"whosonfirst":case"wof":c=Z.wof;break;case"geonames":case"gn":c=Z.geonames;break;case"quattroshapes":case"qs":c=Z.quattroshapes;break;case"openaddresses":case"oa":c=Z.openaddresses;break;default:c=Z.default;break}return y["marker"](e,{title:"".concat(null===(a=t.properties)||void 0===a?void 0:a.gid," - ").concat(null===(r=t.properties)||void 0===r?void 0:r.label),icon:c}).bindPopup('<p><strong style="font-size:14px">'.concat(null===(i=t.properties)||void 0===i?void 0:i.label,"</strong><br />").concat(null===(s=t.properties)||void 0===s?void 0:s.gid,"</p>"))},i=function(t){return t.properties};(null===(e=n.data)||void 0===e?void 0:e.features)&&o&&n.data.features.push({type:"Feature",properties:{"marker-color":"blue",icon:"crosshairs",gid:"lat: ".concat(o.lat,", lon: ").concat(o.lon),label:"focus.point"},geometry:{type:"Point",coordinates:[o.lon,o.lat]}}),y["geoJSON"](n,{pointToLayer:r,style:i}).addTo(this.getMap())}},{key:"addBoundingBoxes",value:function(){var t={stroke:!0,color:"blue",opacity:.5,dashArray:"5, 5",fillColor:"blue",fillOpacity:0,weight:2},e=new y["GeoJSON"];(this.body.features||[]).forEach((function(n){if(null===n||void 0===n?void 0:n.bbox){var o=[[n.bbox[1],n.bbox[0]],[n.bbox[3],n.bbox[2]]],a=new y["Rectangle"](o,t);a.addTo(e)}})),this.getMap().addLayer(e)}},{key:"featureClicked",value:function(t){var e=y["geoJSON"](t),n=e.getBounds();this.getMap().setView(n.getCenter(),6)}},{key:"getMap",value:function(){return this.$refs.mymap.mapObject}},{key:"copyHelper",value:function(t,e){var n=this.$refs.hiddenCopyInput;n.value=JSON.stringify(t,null,4),n.select(),n.setSelectionRange(0,9999999),document.execCommand("copy"),this.$bvToast.toast("".concat(e," copied to clipboard"),{title:"Status",autoHideDelay:1e3,appendToast:!0,variant:"success",toaster:"b-toaster-bottom-center"})}},{key:"copyJson",value:function(){this.copyHelper(this.body,"JSON Response")}},{key:"copyEsQuery",value:function(){this.copyHelper(this.esQuery,"ES Query")}},{key:"esQuery",get:function(){var t,e,n,o=null===(t=this.body)||void 0===t||null===(e=t.geocoding)||void 0===e||null===(n=e.debug)||void 0===n?void 0:n.map((function(t){var e;return null===(e=(t["controller:search"]||{}).ES_req)||void 0===e?void 0:e.body})).filter((function(t){return Boolean(t)}));return o?o[0]:""}}]),e}(h["c"]);Object(d["a"])([Object(h["b"])()],X.prototype,"body",void 0),Object(d["a"])([Object(h["b"])()],X.prototype,"numHosts",void 0),Object(d["a"])([Object(h["b"])()],X.prototype,"host",void 0),X=Object(d["a"])([Object(h["a"])({components:{FontAwesomeIcon:f["a"],ResultsSummary:$}})],X);var Y=X,tt=Y,et=(n("8ccd"),Object(G["a"])(tt,j,C,!1,null,null,null)),nt=et.exports,ot=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"about"},[n("l-map",{ref:"mymap",staticStyle:{height:"50vh",width:"100%"},attrs:{zoom:t.zoom,center:t.pointLatLng||t.defaultCenter},on:{click:t.addMarker}},[n("l-tile-layer",{attrs:{url:t.url,attribution:t.attribution}}),t.pointLatLng?n("l-marker",{attrs:{"lat-lng":t.pointLatLng}}):t._e()],1)],1)},at=[],rt=function(t){function e(){var t;return Object(s["a"])(this,e),t=Object(l["a"])(this,Object(u["a"])(e).apply(this,arguments)),t.zoom=5,t.defaultCenter=Object(y["latLng"])(47.41322,-1.219482),t.url="//{s}.tile.jawg.io/jawg-terrain/{z}/{x}/{y}.png?access-token=t6fAKnvaPdPCucraY88YwlKjBfUHqBMvvZBIWlcp1Z9Z5FVtA02uWo6Dc9DGB2JO",t.attribution='Map &copy; <a href="http://jawg.io" target="_blank" class="jawg-attrib"><b>Jawg</b>Maps</a> | Map data &copy; <a href="https://www.openstreetmap.org/copyright" target="_blank" class="osm-attrib">OpenStreetMap contributors</a>',t.pointLatLng=null,t}return Object(p["a"])(e,t),Object(c["a"])(e,[{key:"mounted",value:function(){this.lat&&this.lng&&(this.pointLatLng=Object(y["latLng"])(this.lat,this.lng))}},{key:"addMarker",value:function(t){this.$emit("point-changed",t.latlng),this.pointLatLng=t.latlng}},{key:"getMap",value:function(){return this.$refs.mymap.mapObject}},{key:"invalidateSize",value:function(){var t=this;setTimeout((function(){t.getMap().invalidateSize()}),100)}}]),e}(h["c"]);Object(d["a"])([Object(h["b"])()],rt.prototype,"lat",void 0),Object(d["a"])([Object(h["b"])()],rt.prototype,"lng",void 0),rt=Object(d["a"])([Object(h["a"])({})],rt);var it=rt,st=it,ct=Object(G["a"])(st,ot,at,!1,null,null,null),lt=ct.exports;n("6cc5"),n("db43");b["c"].add(v["i"]),b["c"].add(v["a"]),h["c"].config.productionTip=!1,h["c"].use(m["a"]),h["c"].use(w["a"]),h["c"].component("l-map",k["a"]),h["c"].component("l-tile-layer",_["a"]),h["c"].component("l-marker",x["a"]),delete y["Icon"].Default.prototype._getIconUrl,y["Icon"].Default.mergeOptions({iconRetinaUrl:n("584d"),iconUrl:n("6397"),shadowUrl:n("e2b9")});var ut=function(t){function e(){var t;return Object(s["a"])(this,e),t=Object(l["a"])(this,Object(u["a"])(e).apply(this,arguments)),t.ids="",t.text="",t.point=null,t.pointStr="",t.host="",t.hosts=[],t.autocomplete=!1,t.debug=!0,t.queryPath="",t.extraParams="",t.responses=[],t.endpoint="/v1/search",t.isDoingGeolocation=!1,t.getKey=function(t){for(var e=t.split("."),n=0;n<e.length-1;n+=1){var o=e.slice(n).join("."),a=window.localStorage.getItem("api_key:".concat(o));if("string"===typeof a&&a.length)return window.console.info("loaded key for domain '".concat(t,"' from localStorage: 'api_key:").concat(o,"'")),a}return"ge-5673e2c135b93a30"},t}return Object(p["a"])(e,t),Object(c["a"])(e,[{key:"pointModalShown",value:function(){this.$refs.pointModal.invalidateSize()}},{key:"tagsChanged",value:function(t){this.hosts=t,window.localStorage.setItem("endpoints",this.hosts.map((function(t){return t.text})).join(",")),this.onChange()}},{key:"parseQuery",value:function(t){var e=this,n=t.split("?");this.endpoint=n[0];var o=new URLSearchParams(n[1]);this.debug="1"===o.get("debug"),o.delete("debug"),this.text=o.get("text"),o.delete("text"),this.ids=o.get("ids"),o.delete("ids");var a=function(t){var n=t?"".concat(t,"."):"",a=o.get("".concat(n,"point.lat")),r=o.get("".concat(n,"point.lon"));if(!a||!r)return null;o.delete("".concat(n,"point.lat")),o.delete("".concat(n,"point.lon"));var i=new y["LatLng"](parseFloat(a.trim()),parseFloat(r.trim()));return e.pointStr="".concat(i.lat,",").concat(i.lng),i};this.point=a()||a("focus"),this.extraParams=o.toString()}},{key:"created",value:function(){var t=window.localStorage.getItem("endpoints");window.console.info("loaded from localStorage:",(t||"").split(",").join(", ")),"string"===typeof t?""!==t&&(this.hosts=Object(g["createTags"])(t.split(","))):window.localStorage.setItem("endpoints",""),0===this.hosts.length&&(this.isBuiltForApi?this.hosts=Object(g["createTags"])(["".concat(window.location.protocol,"//").concat(window.location.host)]):this.hosts=Object(g["createTags"])(["https://api.geocode.earth","https://api.dev.geocode.earth"]));var e=window.location.hash.substr(1);this.isBuiltForSpa&&window.location.pathname.length>1&&(e="/v1/".concat(window.location.href.split("/v1/")[1])),e.includes("%3F")&&(e=decodeURIComponent(e)),e.length>0&&(this.parseQuery(e),this.onChange(),(this.text&&this.endpointUsesText||this.point&&this.isPointRequired||this.ids&&this.endpointUsesIds)&&this.onSubmit())}},{key:"getParams",value:function(){var t=new URLSearchParams("?".concat(this.extraParams));return this.point&&this.endpointUsesPoint&&(this.endpointUsesFocus?(t.set("focus.point.lat",this.point.lat.toString()),t.set("focus.point.lon",this.point.lng.toString())):(t.set("point.lat",this.point.lat.toString()),t.set("point.lon",this.point.lng.toString()))),this.text&&this.endpointUsesText&&t.set("text",this.text),this.ids&&this.endpointUsesIds&&t.set("ids",this.ids),void 0!==this.debug&&t.set("debug",this.debug?"1":"0"),t}},{key:"onDebugChange",value:function(t){this.debug=t,this.onChange()}},{key:"onEndpointChange",value:function(t){this.endpoint=t,this.onChange()}},{key:"onPointChange",value:function(t){var e=t.split(",");this.point=new y["LatLng"](parseFloat(e[0].trim()),parseFloat(e[1].trim())),this.onChange()}},{key:"onChange",value:function(){var t=this.getParams();this.queryPath="".concat(this.endpoint,"?").concat(t.toString()),this.isBuiltForSpa?window.history.replaceState({},"",this.queryPath):window.location.hash=this.queryPath,this.$forceUpdate()}},{key:"onSubmit",value:function(){var t=this,e=this.hosts.map(function(){var e=Object(i["a"])(regeneratorRuntime.mark((function e(n){var o,a,r,s,c,l,u,p;return regeneratorRuntime.wrap((function(e){while(1)switch(e.prev=e.next){case 0:return o=n.text,o.endsWith("/")&&(o=o.substring(0,o.length-1)),a=t.queryPath,a.includes("api_key")||(r=t.getKey(o),r&&(a+="&api_key=".concat(r))),s="".concat(o).concat(a),e.next=7,fetch(s,{method:"GET",headers:{Accept:"application/json","X-Requested-With":""}}).then(function(){var t=Object(i["a"])(regeneratorRuntime.mark((function t(e){return regeneratorRuntime.wrap((function(t){while(1)switch(t.prev=t.next){case 0:return t.next=2,e.json();case 2:return t.t0=t.sent,t.t1=e.status,t.abrupt("return",{data:t.t0,status:t.t1});case 5:case"end":return t.stop()}}),t)})));return function(e){return t.apply(this,arguments)}}()).catch((function(t){return window.console.warn(t),{status:"",data:{error:t}}}));case 7:return c=e.sent,l=c.status,u=c.data,u&&u.geocoding||(p="failed to load json",u&&u.error&&(p=u.error),u={geocoding:{errors:["".concat(l," ").concat(p)]}}),e.abrupt("return",{url:s,status:l,host:o,body:u,bodyString:"".concat(JSON.stringify(u,null,2),"\n\n")});case 12:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}());Promise.all(e).then((function(e){t.responses=e})).catch((function(t){window.console.error(t)}))}},{key:"pointChanged",value:function(t){this.pointStr="".concat(t.lat,",").concat(t.lng)}},{key:"doGeolocate",value:function(){var t=this;this.isDoingGeolocation=!0,navigator.geolocation.getCurrentPosition((function(e){t.isDoingGeolocation=!1;var n=e.coords;t.point=new y["LatLng"](n.latitude,n.longitude),t.pointStr="".concat(t.point.lat,",").concat(t.point.lng),t.onChange()}))}},{key:"prettyExtraParams",get:function(){return decodeURIComponent(this.extraParams).replace(/\+/g," ")},set:function(t){this.extraParams=t}},{key:"prettyQueryPath",get:function(){return decodeURIComponent(this.queryPath).replace(/\+/g," ")},set:function(t){this.parseQuery(t),this.onChange(),this.queryPath=t}},{key:"endpointUsesText",get:function(){return["/v1/search","/v1/autocomplete"].includes(this.endpoint)}},{key:"endpointUsesIds",get:function(){return["/v1/place"].includes(this.endpoint)}},{key:"isPointRequired",get:function(){return"/v1/reverse"===this.endpoint}},{key:"endpointUsesPoint",get:function(){return["/v1/search","/v1/autocomplete","/v1/search/structured","/v1/reverse"].includes(this.endpoint)}},{key:"endpointUsesFocus",get:function(){return["/v1/search","/v1/autocomplete","/v1/search/structured"].includes(this.endpoint)}},{key:"pointLabel",get:function(){return this.endpointUsesFocus?"Focus":"Point"}},{key:"pointLat",get:function(){var t;return null===(t=this.point)||void 0===t?void 0:t.lat}},{key:"pointLng",get:function(){var t;return null===(t=this.point)||void 0===t?void 0:t.lng}},{key:"isGeolocationSupported",get:function(){return"https:"===window.location.protocol&&navigator.geolocation}}]),e}(h["c"]);Object(d["a"])([Object(h["b"])()],ut.prototype,"isBuiltForApi",void 0),Object(d["a"])([Object(h["b"])()],ut.prototype,"isBuiltForSpa",void 0),ut=Object(d["a"])([Object(h["a"])({components:{PointModal:lt,VueTagsInput:g["VueTagsInput"],FontAwesomeIcon:f["a"],ViewColumn:nt}})],ut);var pt=ut,dt=pt,ht=(n("1145"),Object(G["a"])(dt,a,r,!1,null,null,null)),ft=ht.exports;new o["default"]({render:function(t){return t(ft)}}).$mount("#app")},db43:function(t,e,n){},db98:function(t,e,n){}});
//# sourceMappingURL=app.c8da9e5c.js.map