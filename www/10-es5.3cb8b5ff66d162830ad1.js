!function(){function t(t,e){if(!(t instanceof e))throw new TypeError("Cannot call a class as a function")}function e(t,e){for(var i=0;i<e.length;i++){var n=e[i];n.enumerable=n.enumerable||!1,n.configurable=!0,"value"in n&&(n.writable=!0),Object.defineProperty(t,n.key,n)}}function i(t,i,n){return i&&e(t.prototype,i),n&&e(t,n),t}(window.webpackJsonp=window.webpackJsonp||[]).push([[10],{"+f7T":function(e,n,o){"use strict";o.d(n,"a",(function(){return O}));var r,s,a=o("mrSG"),c=o("fXoL"),l=o("TEn/"),u=o("3Pt+"),b=((s=function(){function e(i){t(this,e),this.modalCtrl=i,this.disabled=!1,this.stop=!1}return i(e,[{key:"ngOnInit",value:function(){1==this.quantite&&(this.disabled=!0),this.max==this.quantite&&(this.stop=!0)}},{key:"close",value:function(t){t?this.modalCtrl.dismiss({quantite:this.quantite}):this.modalCtrl.dismiss()}},{key:"add",value:function(){this.quantite++,this.disabled=!1,-1!=this.max&&this.quantite==this.max&&(this.stop=!0)}},{key:"remove",value:function(){this.quantite>1&&(this.quantite--,1==this.quantite&&(this.disabled=!0)),this.stop=!1}}]),e}()).\u0275fac=function(t){return new(t||s)(c.Ib(l.U))},s.\u0275cmp=c.Cb({type:s,selectors:[["app-quantite"]],inputs:{quantite:"quantite",max:"max"},decls:21,vars:4,consts:[["fill","clear",3,"click"],["slot","end","fill","clear",3,"click"],["id","card-modal",2,"--overflow","hidden"],[2,"text-align","center","font-size","25pt","margin","0"],["lines","none",2,"--padding-top","15%","--padding-start","20%","--padding-end","20%","--inner-padding-end","0"],["fill","clear","size","large",2,"margin","0","--padding-start","0","--padding-end","0","--color","black",3,"disabled","click"],[1,"plus-button",2,"margin","0"],["div",""],["name","remove",2,"font-size","30pt","margin","0"],["slot","end","fill","clear","size","large",2,"margin","0","--padding-start","0","--padding-end","0","--color","black",3,"disabled","click"],["name","add",2,"font-size","30pt","margin","0"],["id","number","readonly","","type","text",3,"ngModel","value","ngModelChange"]],template:function(t,e){1&t&&(c.Lb(0,"ion-toolbar"),c.Lb(1,"ion-button",0),c.Tb("click",(function(){return e.close(!1)})),c.Lb(2,"ion-label"),c.ic(3,"Annuler"),c.Kb(),c.Kb(),c.Lb(4,"ion-button",1),c.Tb("click",(function(){return e.close(!0)})),c.Lb(5,"ion-label"),c.ic(6,"Valider"),c.Kb(),c.Kb(),c.Kb(),c.Lb(7,"ion-content",2),c.Lb(8,"h1",3),c.Lb(9,"strong"),c.ic(10,"Quantit\xe9"),c.Kb(),c.Kb(),c.Lb(11,"ion-item",4),c.Lb(12,"ion-button",5),c.Tb("click",(function(){return e.remove()})),c.Lb(13,"div",6,7),c.Jb(15,"ion-icon",8),c.Kb(),c.Kb(),c.Lb(16,"ion-button",9),c.Tb("click",(function(){return e.add()})),c.Lb(17,"div",6,7),c.Jb(19,"ion-icon",10),c.Kb(),c.Kb(),c.Kb(),c.Lb(20,"ion-input",11),c.Tb("ngModelChange",(function(t){return e.quantite=t})),c.Kb(),c.Kb()),2&t&&(c.yb(12),c.Yb("disabled",e.disabled),c.yb(4),c.Yb("disabled",e.stop),c.yb(4),c.Yb("ngModel",e.quantite)("value",e.quantite))},directives:[l.R,l.e,l.z,l.l,l.t,l.r,l.s,l.bb,u.d,u.e],styles:["ion-item[_ngcontent-%COMP%]   div[_ngcontent-%COMP%]{position:relative;height:50px;width:50px;border-radius:25px;background:#dfdfdf}ion-item[_ngcontent-%COMP%]   div[_ngcontent-%COMP%]   ion-icon[_ngcontent-%COMP%]{position:absolute;top:50%;left:50%;transform:translate(-50%,-50%)}#number[_ngcontent-%COMP%]{--padding-start:0;--padding-end:0;position:absolute;top:40%;left:50%;width:30%;text-align:center;transform:translate(-50%);font-size:30pt;z-index:1000000}ion-button.ion-activated[_ngcontent-%COMP%]   div[_ngcontent-%COMP%]{background:#737373!important}"]}),s),d=((r=function(){function e(i){t(this,e),this.popoverCtrl=i}return i(e,[{key:"ngOnInit",value:function(){}},{key:"produit",value:function(){return Object(a.a)(this,void 0,void 0,regeneratorRuntime.mark((function t(){return regeneratorRuntime.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,this.popoverCtrl.dismiss({formule:!1});case 2:case"end":return t.stop()}}),t,this)})))}},{key:"formule",value:function(){return Object(a.a)(this,void 0,void 0,regeneratorRuntime.mark((function t(){return regeneratorRuntime.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,this.popoverCtrl.dismiss({formule:!0});case 2:case"end":return t.stop()}}),t,this)})))}}]),e}()).\u0275fac=function(t){return new(t||r)(c.Ib(l.Y))},r.\u0275cmp=c.Cb({type:r,selectors:[["app-options"]],decls:7,vars:0,consts:[["button","","mode","ios","detail","false","lines","full",3,"click"],["button","","mode","ios","detail","false","lines","none",3,"click"]],template:function(t,e){1&t&&(c.Lb(0,"ion-list"),c.Lb(1,"ion-item",0),c.Tb("click",(function(){return e.produit()})),c.Lb(2,"ion-label"),c.ic(3,"Produit"),c.Kb(),c.Kb(),c.Lb(4,"ion-item",1),c.Tb("click",(function(){return e.formule()})),c.Lb(5,"ion-label"),c.ic(6,"Formule"),c.Kb(),c.Kb(),c.Kb())},directives:[l.A,l.t,l.z],styles:[""]}),r),f=o("sSZD"),m=o("ofXK");function p(t,e){if(1&t){var i=c.Mb();c.Lb(0,"ion-item",3),c.Tb("click",(function(t){c.ec(i);var e=c.Vb().$implicit;return c.Vb().saveItemsInFormule(t,e)})),c.Lb(1,"ion-label"),c.ic(2),c.Kb(),c.Jb(3,"ion-radio",4),c.Kb()}if(2&t){var n=c.Vb().$implicit;c.yb(2),c.kc(" ",n.title," ")}}function h(t,e){if(1&t&&(c.Lb(0,"div"),c.hc(1,p,4,1,"ion-item",2),c.Kb()),2&t){var i=e.$implicit;c.yb(1),c.Yb("ngIf",!i.alreadyUsed)}}var g,v=((g=function(){function e(i,n){t(this,e),this.popoverCtrl=i,this.afDB=n,this.items=[],this.new=!0,this.last=!1,this.getItemsFromFireBase()}return i(e,[{key:"ngOnInit",value:function(){null==this.formule&&(this.formule=[])}},{key:"close",value:function(t){return Object(a.a)(this,void 0,void 0,regeneratorRuntime.mark((function e(){return regeneratorRuntime.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:this.popoverCtrl.dismiss({formule:t.title,formuleFirstPrice:t.firstPrice,quantite:t.quantite,key:t.key,last:this.last});case 1:case"end":return e.stop()}}),e,this)})))}},{key:"saveItemsInFormule",value:function(t,e){this.close(e)}},{key:"getItemsFromFireBase",value:function(){var t=this;this.afDB.list("test_produit/").snapshotChanges(["child_added","child_removed","child_changed"]).subscribe((function(e){t.items=[],e.forEach((function(e){var i=e.payload.exportVal();i.formule||t.items.push({key:e.key,title:i.name,firstPrice:i.firstPrice,quantite:i.stock,alreadyUsed:!1})}));for(var i=0,n=0,o=Object.keys(t.items);n<o.length;n++)for(var r=o[n],s=0,a=Object.keys(t.formule);s<a.length;s++){var c=a[s];t.formule[c].title==t.items[r].title&&(t.items[r].alreadyUsed=!0,i++)}i+1==t.items.length&&(t.last=!0)}))}}]),e}()).\u0275fac=function(t){return new(t||g)(c.Ib(l.Y),c.Ib(f.a))},g.\u0275cmp=c.Cb({type:g,selectors:[["app-produits-list"]],inputs:{formule:"formule"},decls:3,vars:1,consts:[["lines","full",2,"overflow","scroll"],[4,"ngFor","ngForOf"],["mode","ios","lines","none","style","width: 100%;",3,"click",4,"ngIf"],["mode","ios","lines","none",2,"width","100%",3,"click"],["slot","end","color","primary"]],template:function(t,e){1&t&&(c.Lb(0,"ion-list",0),c.Lb(1,"ion-radio-group"),c.hc(2,h,2,1,"div",1),c.Kb(),c.Kb()),2&t&&(c.yb(2),c.Yb("ngForOf",e.items))},directives:[l.A,l.F,l.ab,m.h,m.i,l.t,l.z,l.E,l.Z],styles:[""]}),g);function y(t,e){1&t&&(c.Lb(0,"ion-label"),c.ic(1,"Ajouter"),c.Kb())}function k(t,e){1&t&&(c.Lb(0,"ion-label"),c.ic(1,"Save"),c.Kb())}function C(t,e){if(1&t){var i=c.Mb();c.Lb(0,"ion-item-sliding",null,22),c.Lb(2,"ion-item",23),c.Tb("click",(function(t){c.ec(i);var n=e.index;return c.Vb(2).openProduitsList(t,n)})),c.Lb(3,"ion-note",24),c.ic(4),c.Kb(),c.Lb(5,"ion-label"),c.ic(6),c.Kb(),c.Jb(7,"span",10),c.Jb(8,"ion-icon",25),c.Kb(),c.Lb(9,"ion-item-options",26),c.Tb("click",(function(){c.ec(i);var t=e.index,n=c.dc(1);return c.Vb(2).delete(t,n)})),c.Lb(10,"ion-item-option",27),c.Jb(11,"ion-icon",28),c.Kb(),c.Kb(),c.Lb(12,"ion-item",29),c.Tb("click",(function(){c.ec(i);var t=e.index,n=e.$implicit;return c.Vb(2).openQuantityModal("qte-"+t+"-item",n)})),c.Lb(13,"ion-note"),c.ic(14,"Quantit\xe9 : "),c.Kb(),c.Lb(15,"ion-label",12),c.ic(16),c.Kb(),c.Jb(17,"span",10),c.Jb(18,"ion-icon",25),c.Kb(),c.Kb()}if(2&t){var n=e.$implicit,o=e.index;c.yb(2),c.ac("id","formule-",o,"-item"),c.yb(2),c.kc("Item ",o+1," : "),c.yb(2),c.kc(" ",n.title," "),c.yb(6),c.ac("id","qte-",o,"-item"),c.yb(4),c.kc(" ",n.quantite," ")}}function L(t,e){if(1&t){var i=c.Mb();c.Lb(0,"ion-list"),c.hc(1,C,19,5,"ion-item-sliding",19),c.Lb(2,"ion-item"),c.Lb(3,"ion-button",20),c.Tb("click",(function(){return c.ec(i),c.Vb().addItems()})),c.Jb(4,"ion-icon",21),c.Lb(5,"ion-label"),c.ic(6,"Ajouter item"),c.Kb(),c.Kb(),c.Kb(),c.Kb()}if(2&t){var n=c.Vb();c.yb(1),c.Yb("ngForOf",n.formuleContent)}}function K(t,e){if(1&t){var i=c.Mb();c.Lb(0,"ion-item",30),c.Tb("click",(function(){return c.ec(i),c.Vb().openQuantityModal("modal",void 0)})),c.Lb(1,"ion-note"),c.ic(2,"Qantit\xe9 : "),c.Kb(),c.Lb(3,"ion-label",31),c.ic(4),c.Kb(),c.Jb(5,"ion-icon",25),c.Jb(6,"span",10),c.Kb()}if(2&t){var n=c.Vb();c.yb(4),c.jc(n.stock)}}function P(t,e){1&t&&(c.Lb(0,"ion-item",32),c.Lb(1,"ion-label",33),c.ic(2,"*REMPLIE TOUS LES CHAMPS SALE FDP"),c.Kb(),c.Kb())}var x,O=((x=function(){function e(i,n){t(this,e),this.modalCtrl=i,this.popoverCtrl=n,this.stock=1,this.error=!1,this.isAlreadySaved=!1,this.disabledForFormule=!1,this.formuleContent=[],this.index=1,this.last=!1}return i(e,[{key:"ngOnInit",value:function(){if(null!=this.item){if(this.title=this.item.name,this.category=this.item.category,this.price=this.item.price,this.firstPrice=this.item.firstPrice,this.formule=this.item.formule,this.stock=this.item.stock,null!=this.item.formuleContent){for(var t=[],e=0,i=Object.keys(this.item.formuleContent);e<i.length;e++){var n=i[e];t.push({firstPrice:this.item.formuleContent[n].firstPrice,key:this.item.formuleContent[n].key,max:this.item.formuleContent[n].max,quantite:this.item.formuleContent[n].quantite,title:this.item.formuleContent[n].title})}this.formuleContent=t}this.isAlreadySaved=!0}else this.category="Produit";null==this.formule?this.formule=!1:this.disabledForFormule=this.formule,0==this.formuleContent.length&&(this.formuleContent=[{title:"",firstPrice:0,quantite:1,max:-1,key:""}])}},{key:"close",value:function(t){return Object(a.a)(this,void 0,void 0,regeneratorRuntime.mark((function e(){return regeneratorRuntime.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,this.modalCtrl.dismiss({item:t});case 2:case"end":return e.stop()}}),e,this)})))}},{key:"openOptionsPopover",value:function(t){return Object(a.a)(this,void 0,void 0,regeneratorRuntime.mark((function e(){var i,n=this;return regeneratorRuntime.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,this.popoverCtrl.create({component:d,event:t,mode:"md"});case 2:return(i=e.sent).onWillDismiss().then((function(t){n.formule=t.data.formule,n.formule?("Formule"!=n.category&&(n.firstPrice=0),n.category="Formule",n.disabledForFormule=!0):(n.category="Produit",n.disabledForFormule=!1)})),e.next=6,i.present();case 6:return e.abrupt("return",e.sent);case 7:case"end":return e.stop()}}),e,this)})))}},{key:"isFormuleEmpty",value:function(){return null==this.formuleContent||0==this.formuleContent.length}},{key:"openProduitsList",value:function(t,e){return Object(a.a)(this,void 0,void 0,regeneratorRuntime.mark((function i(){var n,o=this;return regeneratorRuntime.wrap((function(i){for(;;)switch(i.prev=i.next){case 0:return i.next=2,this.popoverCtrl.create({component:v,componentProps:{formule:this.formuleContent},event:t,mode:"md"});case 2:if(n=i.sent,document.querySelector("#formule-"+e+"-item").classList.toggle("no-input-feet"),n.onWillDismiss().then((function(t){if(document.querySelector("#formule-"+e+"-item").classList.toggle("no-input-feet"),null!=t.data.formule){o.formuleContent[e].firstPrice=t.data.formuleFirstPrice,o.formuleContent[e].title=t.data.formule,o.formuleContent[e].max=t.data.quantite,o.formuleContent[e].key=t.data.key;for(var i=0,n=0,r=Object.keys(o.formuleContent);n<r.length;n++){var s=r[n];i+=o.formuleContent[s].firstPrice}o.firstPrice=i}o.last=t.data.last})),this.last){i.next=7;break}return i.next=6,n.present();case 6:return i.abrupt("return",i.sent);case 7:case"end":return i.stop()}}),i,this)})))}},{key:"addItems",value:function(){this.formuleContent.push({title:"",firstPrice:0,quantite:1,max:-1,key:""})}},{key:"delete",value:function(t,e){return Object(a.a)(this,void 0,void 0,regeneratorRuntime.mark((function i(){return regeneratorRuntime.wrap((function(i){for(;;)switch(i.prev=i.next){case 0:return this.firstPrice=this.firstPrice-this.formuleContent[t].firstPrice*this.formuleContent[t].quantite,this.formuleContent.splice(t,1),i.next=4,e.close();case 4:case"end":return i.stop()}}),i,this)})))}},{key:"openQuantityModal",value:function(t,e){return Object(a.a)(this,void 0,void 0,regeneratorRuntime.mark((function i(){var n,o,r,s=this;return regeneratorRuntime.wrap((function(i){for(;;)switch(i.prev=i.next){case 0:return this.formule?(n=e.quantite,o=e.max):(n=this.stock,o=-1),i.next=3,this.modalCtrl.create({component:b,componentProps:{quantite:n,max:o},cssClass:"quantite-class",swipeToClose:!0,mode:"ios"});case 3:return r=i.sent,document.querySelector("#"+t).classList.toggle("no-input-feet"),r.onWillDismiss().then((function(i){void 0!==i.data&&(null!=e?(s.firstPrice=null!=e.quantite&&e.quantite>=i.data.quantite?s.firstPrice-(e.quantite-i.data.quantite)*e.firstPrice:s.firstPrice+(i.data.quantite-1)*e.firstPrice,e.quantite=i.data.quantite):s.stock=i.data.quantite),document.querySelector("#"+t).classList.toggle("no-input-feet")})),i.next=8,r.present();case 8:return i.abrupt("return",i.sent);case 9:case"end":return i.stop()}}),i,this)})))}},{key:"update",value:function(){for(var t=[],e=0,i=Object.keys(this.formuleContent);e<i.length;e++){var n=i[e];""!=this.formuleContent[n].title&&t.push(this.formuleContent[n])}this.formuleContent=t,this.empty(this.title)||this.empty(this.category)||this.empty(this.price)||this.empty(this.stock)||this.empty(this.firstPrice)?this.error=!0:this.isAlreadySaved?(this.modifyValueInFirebase(),this.close(this.item)):(this.addItemToFirebase(),this.close(void 0))}},{key:"addItemToFirebase",value:function(){this.afBD.list("produits").push({name:this.title,category:this.category,price:this.price,firstPrice:this.firstPrice,stock:this.stock,formule:this.formule,formuleContent:this.formuleContent,disponible:!0})}},{key:"modifyValueInFirebase",value:function(){this.afBD.object("produits/"+this.item.key+"/name/").set(this.title),this.afBD.object("produits/"+this.item.key+"/category/").set(this.category),this.afBD.object("produits/"+this.item.key+"/price/").set(this.price),this.afBD.object("produits/"+this.item.key+"/stock/").set(this.stock),this.afBD.object("produits/"+this.item.key+"/firstPrice/").set(this.firstPrice),this.afBD.object("produits/"+this.item.key+"/formule/").set(this.formule),this.afBD.object("produits/"+this.item.key+"/formuleContent").set(this.formuleContent)}},{key:"empty",value:function(t){return null==t}}]),e}()).\u0275fac=function(t){return new(t||x)(c.Ib(l.U),c.Ib(l.Y))},x.\u0275cmp=c.Cb({type:x,selectors:[["app-add"]],inputs:{item:"item",afBD:"afBD"},decls:41,vars:10,consts:[[1,"ion-no-border"],["fill","clear","slot","start",3,"click"],["slot","end","fill","clear",3,"click"],[4,"ngIf"],["size","large"],["slot","end","fill","clear",2,"--color","black",3,"click"],["name","chevron-down"],["lines","none",1,"content"],["mode","ios"],["type","text","placeholder","Title",3,"ngModel","ngModelChange"],[1,"input-feet"],["mode","ios","disabled",""],["slot","end",2,"text-align","end"],["type","number","placeholder","prix \xe0 l'achat",3,"disabled","ngModel","ngModelChange"],[1,"input-feet","second-size"],["size","small","name","chevron-down"],["type","number","placeholder","prix \xe0 la revente",3,"ngModel","ngModelChange"],["button","","id","modal","detail","false",3,"click",4,"ngIf"],["lines","none",4,"ngIf"],[4,"ngFor","ngForOf"],["fill","clear","expand","block",3,"click"],["name","add","slot","start"],["slide",""],[1,"items",3,"id","click"],["slot","start"],["name","chevron-down","size","small","slot","end",1,"focus-icon"],["side","end",2,"width","70px",3,"click"],["color","danger",2,"width","100%"],["name","trash",2,"position","absolute","top","25%","right","50%","transform","translate(50%, -50%)"],["lines","full",3,"id","click"],["button","","id","modal","detail","false",3,"click"],["slot","end",2,"text-align","right"],["lines","none"],["color","danger",2,"font-size","10pt"]],template:function(t,e){1&t&&(c.Lb(0,"ion-header",0),c.Lb(1,"ion-toolbar"),c.Lb(2,"ion-button",1),c.Tb("click",(function(){return e.close(void 0)})),c.Lb(3,"ion-label"),c.ic(4,"Annuler"),c.Kb(),c.Kb(),c.Lb(5,"ion-title"),c.ic(6,"Nouveau"),c.Kb(),c.Lb(7,"ion-button",2),c.Tb("click",(function(){return e.update()})),c.hc(8,y,2,0,"ion-label",3),c.hc(9,k,2,0,"ion-label",3),c.Kb(),c.Kb(),c.Kb(),c.Lb(10,"ion-content"),c.Lb(11,"ion-toolbar"),c.Lb(12,"ion-title",4),c.ic(13,"Ajouter item"),c.Kb(),c.Lb(14,"ion-button",5),c.Tb("click",(function(t){return e.openOptionsPopover(t)})),c.Jb(15,"ion-icon",6),c.Kb(),c.Kb(),c.Lb(16,"ion-list",7),c.Lb(17,"ion-item",8),c.Lb(18,"ion-input",9),c.Tb("ngModelChange",(function(t){return e.title=t})),c.Kb(),c.Jb(19,"span",10),c.Kb(),c.hc(20,L,7,1,"ion-list",3),c.Lb(21,"ion-item",11),c.Lb(22,"ion-label"),c.ic(23,"Cat\xe9gorie : "),c.Kb(),c.Lb(24,"ion-label",12),c.ic(25),c.Kb(),c.Jb(26,"span",10),c.Kb(),c.Lb(27,"ion-item",8),c.Lb(28,"ion-input",13),c.Tb("ngModelChange",(function(t){return e.firstPrice=t})),c.Kb(),c.Jb(29,"span",14),c.Lb(30,"ion-label"),c.ic(31,"EUR"),c.Kb(),c.Jb(32,"ion-icon",15),c.Kb(),c.Lb(33,"ion-item",8),c.Lb(34,"ion-input",16),c.Tb("ngModelChange",(function(t){return e.price=t})),c.Kb(),c.Jb(35,"span",14),c.Lb(36,"ion-label"),c.ic(37,"EUR"),c.Kb(),c.Jb(38,"ion-icon",15),c.Kb(),c.hc(39,K,7,1,"ion-item",17),c.hc(40,P,3,0,"ion-item",18),c.Kb(),c.Kb()),2&t&&(c.yb(8),c.Yb("ngIf",!e.isAlreadySaved),c.yb(1),c.Yb("ngIf",e.isAlreadySaved),c.yb(9),c.Yb("ngModel",e.title),c.yb(2),c.Yb("ngIf",e.formule),c.yb(5),c.kc(" ",e.category," "),c.yb(3),c.Yb("disabled",e.disabledForFormule)("ngModel",e.firstPrice),c.yb(6),c.Yb("ngModel",e.price),c.yb(5),c.Yb("ngIf",!e.formule),c.yb(1),c.Yb("ngIf",e.error))},directives:[l.q,l.R,l.e,l.z,l.P,m.i,l.l,l.r,l.A,l.t,l.s,l.bb,u.d,u.e,l.W,m.h,l.y,l.C,l.x,l.w],styles:[".content[_ngcontent-%COMP%]   ion-item[_ngcontent-%COMP%]{--padding-top:10px;--padding-bottom:10px;--padding-end:20px}.focus-icon[_ngcontent-%COMP%]{margin-right:0}.item-has-focus[_ngcontent-%COMP%]   .input-feet[_ngcontent-%COMP%]{background:#3880ff;opacity:1}.item-has-focus[_ngcontent-%COMP%]   .focus-icon[_ngcontent-%COMP%]{color:#3880ff}.no-input-feet[_ngcontent-%COMP%]   .input-feet[_ngcontent-%COMP%]{background:#3880ff;opacity:1}.no-input-feet[_ngcontent-%COMP%]   .focus-icon[_ngcontent-%COMP%]{color:#3880ff}.input-feet[_ngcontent-%COMP%]{width:100%;height:2px;background:grey;opacity:.5;position:absolute;bottom:5px;transition-property:background,opacity;transition-duration:.2s}.first-size[_ngcontent-%COMP%]{width:85%}.second-size[_ngcontent-%COMP%]{width:75%}.items[_ngcontent-%COMP%]{position:relative}.items[_ngcontent-%COMP%]   ion-button[_ngcontent-%COMP%]{position:absolute;z-index:10000}"]}),x)},TUkU:function(e,n,o){"use strict";o.r(n),o.d(n,"Tab2PageModule",(function(){return T}));var r=o("TEn/"),s=o("ofXK"),a=o("3Pt+"),c=o("qtYk"),l=o("tyNb"),u=o("mrSG"),b=o("fXoL");function d(t,e){1&t&&b.Jb(0,"ion-icon",5)}function f(t,e){1&t&&b.Jb(0,"ion-icon",6)}function m(t,e){if(1&t&&(b.Lb(0,"ion-item"),b.Lb(1,"ion-label",1),b.ic(2),b.Kb(),b.hc(3,d,1,0,"ion-icon",2),b.hc(4,f,1,0,"ion-icon",3),b.Jb(5,"ion-radio",4),b.Kb()),2&t){var i=e.$implicit;b.yb(2),b.kc(" ",i.name," "),b.yb(1),b.Yb("ngIf","asc-stock"==i.value),b.yb(1),b.Yb("ngIf","desc-stock"==i.value),b.yb(1),b.Zb("value",i.value)}}var p,h=((p=function(){function e(){t(this,e),this.items=[{name:"Cat\xe9gorie",value:"category"},{name:"Quantit\xe9",value:"asc-stock"},{name:"Quantit\xe9",value:"desc-stock"},{name:"A - Z",value:"asc"},{name:"Prix",value:"price"}]}return i(e,[{key:"ngOnInit",value:function(){}}]),e}()).\u0275fac=function(t){return new(t||p)},p.\u0275cmp=b.Cb({type:p,selectors:[["app-popover"]],decls:6,vars:1,consts:[[4,"ngFor","ngForOf"],[2,"font-size","12pt"],["slot","end","size","small","name","arrow-up",4,"ngIf"],["slot","end","size","small","name","arrow-down",4,"ngIf"],["color","primary","slot","end",3,"value"],["slot","end","size","small","name","arrow-up"],["slot","end","size","small","name","arrow-down"]],template:function(t,e){1&t&&(b.Lb(0,"ion-list"),b.Lb(1,"ion-radio-group"),b.Lb(2,"ion-list-header"),b.Lb(3,"ion-label"),b.ic(4,"Trier par :"),b.Kb(),b.Kb(),b.hc(5,m,6,4,"ion-item",0),b.Kb(),b.Kb()),2&t&&(b.yb(5),b.Yb("ngForOf",e.items))},directives:[r.A,r.F,r.ab,r.B,r.z,s.h,r.t,s.i,r.E,r.Z,r.r],styles:[""]}),p),g=o("+f7T"),v=o("sSZD");function y(t,e){if(1&t&&(b.Lb(0,"ion-chip",18),b.Lb(1,"ion-label"),b.ic(2),b.Kb(),b.Kb()),2&t){var i=b.Vb(2).$implicit;b.yb(2),b.kc(" ",i.stock," ")}}function k(t,e){if(1&t&&(b.Lb(0,"ion-chip",19),b.Lb(1,"ion-label"),b.ic(2),b.Kb(),b.Kb()),2&t){var i=b.Vb(2).$implicit;b.yb(2),b.kc(" ",i.stock," ")}}function C(t,e){if(1&t){var i=b.Mb();b.Lb(0,"ion-item",13),b.Tb("click",(function(){b.ec(i);var t=b.Vb().$implicit;return b.Vb().goToEdit(t)})),b.Lb(1,"div"),b.Lb(2,"ion-label",14),b.ic(3),b.Kb(),b.Lb(4,"ion-label",15),b.ic(5),b.Kb(),b.Lb(6,"ion-note"),b.ic(7),b.Kb(),b.Kb(),b.hc(8,y,3,1,"ion-chip",16),b.hc(9,k,3,1,"ion-chip",17),b.Kb()}if(2&t){var n=b.Vb().$implicit;b.yb(3),b.kc(" ",n.name," "),b.yb(2),b.kc(" ",n.category," "),b.yb(2),b.kc(" ",n.price," \u20ac"),b.yb(1),b.Yb("ngIf",0==n.stock),b.yb(1),b.Yb("ngIf",0!=n.stock)}}function L(t,e){if(1&t){var i=b.Mb();b.Lb(0,"ion-item-sliding"),b.hc(1,C,10,5,"ion-item",9),b.Lb(2,"ion-item-options",10),b.Lb(3,"ion-item-option",11),b.Tb("click",(function(){b.ec(i);var t=e.$implicit;return b.Vb().delete(t)})),b.Jb(4,"ion-icon",12),b.Kb(),b.Kb(),b.Kb()}if(2&t){var n=e.$implicit;b.yb(1),b.Yb("ngIf",!n.formule)}}function K(t,e){1&t&&(b.Lb(0,"ion-note",24),b.ic(1,"Disponible"),b.Kb())}function P(t,e){1&t&&(b.Lb(0,"ion-note",25),b.ic(1,"Indisponible"),b.Kb())}function x(t,e){if(1&t){var i=b.Mb();b.Lb(0,"ion-item",21),b.Tb("click",(function(){b.ec(i);var t=b.Vb().$implicit;return b.Vb().goToEdit(t)})),b.Lb(1,"div"),b.Lb(2,"ion-label",14),b.ic(3),b.Kb(),b.Lb(4,"ion-label",15),b.ic(5),b.Kb(),b.Lb(6,"ion-note"),b.ic(7),b.Kb(),b.Kb(),b.hc(8,K,2,0,"ion-note",22),b.hc(9,P,2,0,"ion-note",23),b.Kb()}if(2&t){var n=b.Vb().$implicit;b.Yb("disabled",!n.disponible),b.yb(3),b.kc(" ",n.name," "),b.yb(2),b.kc(" ",n.category," "),b.yb(2),b.kc(" ",n.price," \u20ac"),b.yb(1),b.Yb("ngIf",n.disponible),b.yb(1),b.Yb("ngIf",!n.disponible)}}function O(t,e){if(1&t){var i=b.Mb();b.Lb(0,"ion-item-sliding"),b.hc(1,x,10,6,"ion-item",20),b.Lb(2,"ion-item-options",10),b.Lb(3,"ion-item-option",11),b.Tb("click",(function(){b.ec(i);var t=e.$implicit;return b.Vb().delete(t)})),b.Jb(4,"ion-icon",12),b.Kb(),b.Kb(),b.Kb()}if(2&t){var n=e.$implicit;b.yb(1),b.Yb("ngIf",n.formule)}}var w,M,I,F=[{path:"",component:(w=function(){function e(i,n,o,r,s){t(this,e),this.routerOutlet=i,this.afDB=n,this.popoverController=o,this.modalController=r,this.navCtrl=s,this.items=[],this.getItemsFromFirebase()}return i(e,[{key:"presentPopover",value:function(t){return Object(u.a)(this,void 0,void 0,regeneratorRuntime.mark((function e(){var i;return regeneratorRuntime.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,this.popoverController.create({component:h,componentProps:{},cssClass:"sort-popover",event:t,translucent:!0});case 2:return i=e.sent,e.next=5,i.present();case 5:return e.abrupt("return",e.sent);case 6:case"end":return e.stop()}}),e,this)})))}},{key:"goToEdit",value:function(t){return Object(u.a)(this,void 0,void 0,regeneratorRuntime.mark((function e(){return regeneratorRuntime.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:this.navCtrl.navigateForward("tabs/tab2/edit",{queryParams:{item:t,afDB:this.afDB}});case 1:case"end":return e.stop()}}),e,this)})))}},{key:"presentAddModal",value:function(){return Object(u.a)(this,void 0,void 0,regeneratorRuntime.mark((function t(){var e;return regeneratorRuntime.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,this.modalController.create({component:g.a,componentProps:{afBD:this.afDB},cssClass:"",swipeToClose:!0,presentingElement:this.routerOutlet.nativeEl});case 2:return e=t.sent,t.next=5,e.present();case 5:return t.abrupt("return",t.sent);case 6:case"end":return t.stop()}}),t,this)})))}},{key:"getItemsFromFirebase",value:function(){var t=this;this.afDB.list("produits/").snapshotChanges(["child_added","child_removed","child_changed"]).subscribe((function(e){t.items=[],e.forEach((function(e){var i=e.payload.exportVal();t.items.push({key:e.key,name:i.name,category:i.category,price:i.price,firstPrice:i.firstPrice,stock:i.stock,formule:i.formule,formuleContent:i.formuleContent,disponible:i.disponible})}));for(var i=0,n=Object.keys(t.items);i<n.length;i++){var o=n[i];if(t.items[o].formule)for(var r=0,s=0,a=Object.keys(t.items[o].formuleContent);s<a.length;s++)for(var c=a[s],l=0,u=Object.keys(t.items);l<u.length;l++){var b=u[l];t.items[o].formuleContent[c].title!=t.items[b].name||t.items[b].formule||(t.items[b].stock-t.items[o].formuleContent[c].quantite<0?t.items[o].disponible=!1:(r+=1,t.items[o].formuleContent.length==r&&(t.items[o].disponible=!0)))}}}))}},{key:"delete",value:function(t){this.afDB.list("produits/").remove(t.key)}}]),e}(),w.\u0275fac=function(t){return new(t||w)(b.Ib(r.G),b.Ib(v.a),b.Ib(r.Y),b.Ib(r.U),b.Ib(r.V))},w.\u0275cmp=b.Cb({type:w,selectors:[["app-tab2"]],decls:18,vars:2,consts:[["mode","ios"],["fill","clear","slot","end",1,"toolbar-button",3,"click"],["name","chevron-down"],["name","add"],["color","light"],["lines","full"],[1,"title"],["size","large"],[4,"ngFor","ngForOf"],["button","","style","--padding-top: 5px",3,"click",4,"ngIf"],["side","end"],["color","danger",3,"click"],["name","trash","slot","icon-only"],["button","",2,"--padding-top","5px",3,"click"],[2,"font-weight","bold"],[2,"font-size","medium"],["slot","end","color","danger",4,"ngIf"],["slot","end",4,"ngIf"],["slot","end","color","danger"],["slot","end"],["button","","style","--padding-top: 5px",3,"disabled","click",4,"ngIf"],["button","",2,"--padding-top","5px",3,"disabled","click"],["slot","end","style","text-align: end;",4,"ngIf"],["slot","end","style","text-align: end;","color","danger",4,"ngIf"],["slot","end",2,"text-align","end"],["slot","end","color","danger",2,"text-align","end"]],template:function(t,e){1&t&&(b.Lb(0,"ion-header",0),b.Lb(1,"ion-toolbar"),b.Lb(2,"ion-title"),b.ic(3,"Items"),b.Kb(),b.Lb(4,"ion-button",1),b.Tb("click",(function(t){return e.presentPopover(t)})),b.Jb(5,"ion-icon",2),b.Kb(),b.Lb(6,"ion-button",1),b.Tb("click",(function(){return e.presentAddModal()})),b.Jb(7,"ion-icon",3),b.Kb(),b.Kb(),b.Kb(),b.Lb(8,"ion-content",4),b.Lb(9,"ion-list",5),b.Lb(10,"ion-item",6),b.Lb(11,"ion-title",7),b.ic(12,"Produits"),b.Kb(),b.Kb(),b.hc(13,L,5,1,"ion-item-sliding",8),b.Lb(14,"ion-item",6),b.Lb(15,"ion-title",7),b.ic(16,"Formules"),b.Kb(),b.Kb(),b.hc(17,O,5,1,"ion-item-sliding",8),b.Kb(),b.Kb()),2&t&&(b.yb(13),b.Yb("ngForOf",e.items),b.yb(4),b.Yb("ngForOf",e.items))},directives:[r.q,r.R,r.P,r.e,r.r,r.l,r.A,r.t,s.h,r.y,s.i,r.x,r.w,r.z,r.C,r.k],styles:[".title[_ngcontent-%COMP%]{margin-top:20px}.title[_ngcontent-%COMP%]   ion-title[_ngcontent-%COMP%]{padding-left:0}ion-thumbnail[_ngcontent-%COMP%]{margin-right:10px}"]}),w)},{path:"edit",loadChildren:function(){return o.e(15).then(o.bind(null,"En3C")).then((function(t){return t.EditPageModule}))}}],q=((I=function e(){t(this,e)}).\u0275mod=b.Gb({type:I}),I.\u0275inj=b.Fb({factory:function(t){return new(t||I)},imports:[[l.i.forChild(F)],l.i]}),I),T=((M=function e(){t(this,e)}).\u0275mod=b.Gb({type:M}),M.\u0275inj=b.Fb({factory:function(t){return new(t||M)},imports:[[r.S,s.b,a.a,c.a,q]]}),M)}}])}();