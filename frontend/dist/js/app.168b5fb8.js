(function(e){function t(t){for(var r,s,o=t[0],u=t[1],c=t[2],d=0,p=[];d<o.length;d++)s=o[d],Object.prototype.hasOwnProperty.call(i,s)&&i[s]&&p.push(i[s][0]),i[s]=0;for(r in u)Object.prototype.hasOwnProperty.call(u,r)&&(e[r]=u[r]);l&&l(t);while(p.length)p.shift()();return a.push.apply(a,c||[]),n()}function n(){for(var e,t=0;t<a.length;t++){for(var n=a[t],r=!0,o=1;o<n.length;o++){var u=n[o];0!==i[u]&&(r=!1)}r&&(a.splice(t--,1),e=s(s.s=n[0]))}return e}var r={},i={app:0},a=[];function s(t){if(r[t])return r[t].exports;var n=r[t]={i:t,l:!1,exports:{}};return e[t].call(n.exports,n,n.exports,s),n.l=!0,n.exports}s.m=e,s.c=r,s.d=function(e,t,n){s.o(e,t)||Object.defineProperty(e,t,{enumerable:!0,get:n})},s.r=function(e){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},s.t=function(e,t){if(1&t&&(e=s(e)),8&t)return e;if(4&t&&"object"===typeof e&&e&&e.__esModule)return e;var n=Object.create(null);if(s.r(n),Object.defineProperty(n,"default",{enumerable:!0,value:e}),2&t&&"string"!=typeof e)for(var r in e)s.d(n,r,function(t){return e[t]}.bind(null,r));return n},s.n=function(e){var t=e&&e.__esModule?function(){return e["default"]}:function(){return e};return s.d(t,"a",t),t},s.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},s.p="/";var o=window["webpackJsonp"]=window["webpackJsonp"]||[],u=o.push.bind(o);o.push=t,o=o.slice();for(var c=0;c<o.length;c++)t(o[c]);var l=u;a.push([0,"chunk-vendors"]),n()})({0:function(e,t,n){e.exports=n("56d7")},"034f":function(e,t,n){"use strict";var r=n("85ec"),i=n.n(r);i.a},"22d7":function(e,t,n){"use strict";var r=n("be87"),i=n.n(r);i.a},"2b63":function(e,t,n){"use strict";var r=n("6102"),i=n.n(r);i.a},"4a85":function(e,t,n){e.exports=n.p+"img/dots.f8059619.svg"},"56d7":function(e,t,n){"use strict";n.r(t);n("e260"),n("e6cf"),n("cca6"),n("a79d");var r=n("2b0e"),i=function(){var e=this,t=e.$createElement,r=e._self._c||t;return r("div",{staticClass:"uploader",attrs:{id:"app"}},[e.showModal?r("Modal",{staticClass:"uploader-modal",on:{input:function(t){return e.editable?e.updateVideo(e.editable,t):e.saveVideo(t)}}}):e._e(),r("div",{staticClass:"uploader-header"},[e._v(" uploader ")]),r("div",{staticClass:"container mediaContainer"},[r("div",{staticClass:"row center"},[e._l(e.medias,(function(t,n){return r("div",{key:n,staticClass:"col-sm-6 image-wrapper"},[r("MediaCard",{key:n,attrs:{media:t},on:{remove:function(t){return e.isVideo(t.url)?e.deleteVideo(t):e.deleteImage(t)},edit:function(t){return e.isVideo(t.url)?e.editModal(t):e.edit(t)}}})],1)})),r("input",{ref:"editInput",attrs:{hidden:"",type:"file",accept:"image/*"},on:{change:function(t){return e.completeUpdate(t)}}})],2)]),r("div",{staticClass:"filePicker video",on:{click:function(t){e.showModal=!e.showModal}}},[r("img",{staticClass:"video-icon",attrs:{src:n("8e0f")}})]),r("FilePicker",{ref:"picker",staticClass:"filePicker",on:{file:function(t){return e.addMedia(t)}}})],1)},a=[],s=(n("4de4"),n("c975"),n("d81d"),n("0d03"),n("b0c0"),n("d3b7"),n("25f0"),n("96cf"),function(){var e=this,t=e.$createElement,r=e._self._c||t;return r("div",{staticClass:"picker"},[r("input",{ref:"fileField",staticClass:"inputFile",attrs:{hidden:"",type:"file",accept:"image/*"},on:{change:e.onChange}}),r("div",{staticClass:"upload-bar"},[r("img",{staticClass:"upload-icon",attrs:{src:n("c118")},on:{click:e.pickFile}})])])}),o=[],u=(n("99af"),n("fb6a"),n("b680"),n("e25e"),n("ac1f"),n("1276"),{name:"FilePicker",props:{file:{type:String,default:""}},data:function(){return{theFile:{name:"",url:void 0}}},methods:{upload:function(){this.theFile.url&&(this.$emit("file",this.theFile.url),this.theFile={name:"",url:void 0})},shortName:function(e){if(e.length<=30)return e;var t=e.split(".");return"".concat(e.slice(0,24),"...").concat(t[t.length-1])},pickFile:function(){this.$refs["fileField"].click()},droppedFile:function(e){e.stopPropagation(),e.preventDefault();var t=e.dataTransfer.files;this.createFile(t[0])},onChange:function(e){e.value=null;var t=e.target.files;this.createFile(t[0])},formatSize:function(e){var t=e/1e3;return parseInt(t).toString().length<=3?"".concat(t.toFixed(1),"KB"):parseInt(t).toString().length>3?"".concat((t/1e3).toFixed(1),"MB"):"0.0MB"},createFile:function(e){var t=this,n=new FileReader;n.readAsDataURL(e),n.onload=function(n){t.theFile={name:e.name,url:n.target.result,size:t.formatSize(e.size)}}},removeFile:function(){this.theFile={}}},watch:{theFile:function(e){this.$emit("file",e)},file:function(e){this.theFile.name=e}},mounted:function(){this.$emit("file",this.theFile),this.theFile.name=this.file}}),c=u,l=(n("b2e4"),n("2877")),d=Object(l["a"])(c,s,o,!1,null,null,null),p=d.exports,h=function(){var e=this,t=e.$createElement,r=e._self._c||t;return r("div",{staticClass:"media-card"},[r("div",{staticClass:"image-header"},[e._v(" "+e._s(e.media.name)+" "),r("img",{staticClass:"upload-menu",attrs:{src:n("4a85")},on:{click:function(t){e.showOptions=!e.showOptions}}}),e.showOptions?r("div",{staticClass:"upload-options"},[r("div",{on:{click:function(t){return e.edit(e.media)}}},[e._v("edit")]),r("div",{on:{click:function(t){return e.remove(e.media)}}},[e._v("remover")])]):e._e()]),e.media.url&&e.media.url.indexOf("youtube")<0?r("img",{staticClass:"item-image",attrs:{src:e.media.url}}):e._e(),r("Video",{staticClass:"item-image",attrs:{url:e.media.url}})],1)},f=[],m=function(){var e=this,t=e.$createElement,n=e._self._c||t;return e.theUrl?n("div",{ref:"video",staticClass:"video-youtube"},[n("iframe",{staticClass:"video-youtube",attrs:{frameBorder:"0",src:e.theUrl,allowfullscreen:""}})]):e._e()},g=[],v=(n("466d"),{name:"Video",data:function(){return{theUrl:""}},props:{url:{type:String}},methods:{parseVideoURL:function(e){var t={};return!!e.match("http(s)?://(www.)?youtube|youtu.be")&&(e.match("embed")?t.id=e.split(/embed\//)[1].split('"')[0]:t.id=e.split(/v\/|v=|youtu\.be\//)[1].split(/[?&]/)[0],t.provider="youtube",t.videoUrl="https://www.youtube.com/embed/"+t.id+"?rel=0&modestbranding=1&showinfo=0",t.videoUrl)},setUrl:function(e){this.theUrl=this.parseVideoURL(e)}},watch:{url:function(e){this.setUrl(e)}},created:function(){this.setUrl(this.url)}}),w=v,b=(n("5b6d"),Object(l["a"])(w,m,g,!1,null,null,null)),y=b.exports,x={name:"MediaCard",data:function(){return{showOptions:!1}},methods:{edit:function(e){this.$emit("edit",e),this.showOptions=!this.showOptions},remove:function(e){this.$emit("remove",e),this.showOptions=!this.showOptions}},props:{media:{type:Object,default:function(){}}},components:{Video:y}},R=x,O=(n("2b63"),Object(l["a"])(R,h,f,!1,null,null,null)),C=O.exports,M=function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",{staticClass:"uploader-modal-container"},[n("input",{attrs:{type:"text"},on:{input:function(t){return e.text=t.target.value}}}),n("button",{on:{click:e.emitData}},[e._v("submit")])])},_=[],j={name:"Modal",data:function(){return{text:""}},methods:{emitData:function(){this.text&&this.$emit("input",{url:this.text,name:(new Date).valueOf()})}}},F=j,S=(n("22d7"),Object(l["a"])(F,M,_,!1,null,null,null)),k=S.exports,U=n("8aa5"),P=n.n(U),T={name:"App",data:function(){return{medias:null,editMedia:null,showModal:!1,editable:!1}},methods:{editModal:function(e){this.showModal=!this.showModal,this.editable=e},isVideo:function(e){return!!(e.indexOf("youtube")>0)},saveVideo:function(e){return regeneratorRuntime.async((function(t){while(1)switch(t.prev=t.next){case 0:return t.next=2,regeneratorRuntime.awrap(fetch("http://localhost:3006/videos",{method:"POST",mode:"cors",headers:{"Content-Type":"application/json"},body:JSON.stringify(e)}));case 2:this.medias.push(e),this.showModal=!1;case 4:case"end":return t.stop()}}),null,this)},saveImage:function(e,t){return regeneratorRuntime.async((function(n){while(1)switch(n.prev=n.next){case 0:return n.next=2,regeneratorRuntime.awrap(fetch("http://localhost:3006/images",{method:"POST",mode:"cors",headers:new Headers({"Content-Type":"application/json"}),body:JSON.stringify({url:e,name:t})}));case 2:case"end":return n.stop()}}))},updateImage:function(e,t){return regeneratorRuntime.async((function(n){while(1)switch(n.prev=n.next){case 0:return n.next=2,regeneratorRuntime.awrap(fetch("http://localhost:3006/images",{method:"PUT",mode:"cors",headers:{"Content-Type":"application/json"},body:JSON.stringify({url:e,old:t})}));case 2:case"end":return n.stop()}}))},updateVideo:function(e,t){return regeneratorRuntime.async((function(n){while(1)switch(n.prev=n.next){case 0:return n.next=2,regeneratorRuntime.awrap(fetch("http://localhost:3006/videos",{method:"PUT",mode:"cors",headers:{"Content-Type":"application/json"},body:JSON.stringify({url:t.url,old:e.url})}));case 2:return n.next=4,regeneratorRuntime.awrap(this.medias.map((function(n){return n.url==e.url?{name:name,url:t.url}:n})));case 4:this.medias=n.sent,this.editable=!1,this.showModal=!1;case 7:case"end":return n.stop()}}),null,this)},deleteImage:function(e){return regeneratorRuntime.async((function(t){while(1)switch(t.prev=t.next){case 0:return t.next=2,regeneratorRuntime.awrap(fetch("http://localhost:3006/images",{method:"DELETE",mode:"cors",headers:{"Content-Type":"application/json"},body:JSON.stringify({url:e.url})}));case 2:return t.next=4,regeneratorRuntime.awrap(this.remove(e));case 4:case"end":return t.stop()}}),null,this)},deleteVideo:function(e){return regeneratorRuntime.async((function(t){while(1)switch(t.prev=t.next){case 0:return t.next=2,regeneratorRuntime.awrap(fetch("http://localhost:3006/videos",{method:"DELETE",mode:"cors",headers:{"Content-Type":"application/json"},body:JSON.stringify({url:e.url})}));case 2:return t.next=4,regeneratorRuntime.awrap(this.medias.filter((function(t){return t.name!=e.name})));case 4:this.medias=t.sent;case 5:case"end":return t.stop()}}),null,this)},fetchMedia:function(){var e;return regeneratorRuntime.async((function(t){while(1)switch(t.prev=t.next){case 0:return t.prev=0,t.next=3,regeneratorRuntime.awrap(fetch("http://localhost:3006/medias",{method:"GET",mode:"cors",headers:{"Content-Type":"application/json"}}));case 3:return e=t.sent,t.next=6,regeneratorRuntime.awrap(e.json());case 6:this.medias=t.sent,t.next=12;break;case 9:return t.prev=9,t.t0=t["catch"](0),t.abrupt("return",t.t0);case 12:case"end":return t.stop()}}),null,this,[[0,9]])},addMedia:function(e){var t,n,r,i;return regeneratorRuntime.async((function(a){while(1)switch(a.prev=a.next){case 0:return t=P.a.storage().ref(),n=(new Date).valueOf().toString(),r=t.child(n),a.next=5,regeneratorRuntime.awrap(r.putString(e.url,"data_url"));case 5:return a.next=7,regeneratorRuntime.awrap(r.getDownloadURL());case 7:return i=a.sent,this.medias.push({name:n,url:i}),a.next=11,regeneratorRuntime.awrap(this.saveImage(i,n));case 11:case"end":return a.stop()}}),null,this)},completeUpdate:function(e){var t,n,r,i,a,s,o,u=this;return regeneratorRuntime.async((function(c){while(1)switch(c.prev=c.next){case 0:return e.value=null,t=e.target.files,n=new FileReader,n.readAsDataURL(t[0]),c.next=6,regeneratorRuntime.awrap(new Promise((function(e){n.onload=function(t){e(t.target.result)}})));case 6:return r=c.sent,i=P.a.storage().ref(),a=this.editMedia.name,s=i.child(a),c.next=12,regeneratorRuntime.awrap(s.putString(r,"data_url"));case 12:return c.next=14,regeneratorRuntime.awrap(s.getDownloadURL());case 14:return o=c.sent,console.log({name:a,url:o}),c.next=18,regeneratorRuntime.awrap(this.medias.map((function(e){return e.name==u.editMedia.name?{name:a,url:o}:e})));case 18:this.medias=c.sent,this.updateImage(o,this.editMedia.url),this.editMedia=null;case 21:case"end":return c.stop()}}),null,this)},edit:function(e){var t,n;return regeneratorRuntime.async((function(r){while(1)switch(r.prev=r.next){case 0:return console.log("here"),this.editMedia=e,t=P.a.storage().ref(),n=t.child(e.name),r.next=6,regeneratorRuntime.awrap(n.delete());case 6:this.$refs["editInput"].click();case 7:case"end":return r.stop()}}),null,this)},remove:function(e){var t,n;return regeneratorRuntime.async((function(r){while(1)switch(r.prev=r.next){case 0:return t=P.a.storage().ref(),n=t.child(e.name),r.next=4,regeneratorRuntime.awrap(n.delete());case 4:return r.next=6,regeneratorRuntime.awrap(this.medias.filter((function(t){return t.name!=e.name})));case 6:return this.medias=r.sent,r.next=9,regeneratorRuntime.awrap(this.deleteImage(e.url));case 9:case"end":return r.stop()}}),null,this)}},components:{FilePicker:p,MediaCard:C,Modal:k},created:function(){return regeneratorRuntime.async((function(e){while(1)switch(e.prev=e.next){case 0:this.fetchMedia();case 1:case"end":return e.stop()}}),null,this)}},I=T,V=(n("034f"),Object(l["a"])(I,i,a,!1,null,null,null)),$=V.exports,D=n("8c4f");r["a"].use(D["a"]);var E=[],J=new D["a"]({mode:"history",base:"/",routes:E}),L=J,N=n("2f62");r["a"].use(N["a"]);var z=new N["a"].Store({state:{},mutations:{},actions:{},modules:{}});r["a"].config.productionTip=!1;var A={apiKey:"AIzaSyAGXJg0NC8Pe1Nl4Wz0qrmqbaSUSK2h5gk",authDomain:"first-node-project-209114.firebaseapp.com",databaseURL:"https://first-node-project-209114.firebaseio.com",projectId:"first-node-project-209114",storageBucket:"first-node-project-209114.appspot.com",messagingSenderId:"623464499019",appId:"1:623464499019:web:45326991305b45185bcace"};P.a.initializeApp(A),new r["a"]({router:L,store:z,render:function(e){return e($)}}).$mount("#app")},"5b6d":function(e,t,n){"use strict";var r=n("b84a"),i=n.n(r);i.a},6102:function(e,t,n){},"6fc9":function(e,t,n){},"85ec":function(e,t,n){},"8e0f":function(e,t,n){e.exports=n.p+"img/video.4a8495c9.svg"},b2e4:function(e,t,n){"use strict";var r=n("6fc9"),i=n.n(r);i.a},b84a:function(e,t,n){},be87:function(e,t,n){},c118:function(e,t,n){e.exports=n.p+"img/upload.20a57b42.svg"}});
//# sourceMappingURL=app.168b5fb8.js.map