(window.webpackJsonp=window.webpackJsonp||[]).push([[11],{"9ybx":function(t,e,i){"use strict";i.d(e,"a",(function(){return k}));var n=i("mrSG"),o=i("fXoL"),s=i("TEn/"),l=i("ofXK");function a(t,e){if(1&t){const t=o.Mb();o.Lb(0,"ion-item",4),o.Tb("click",(function(){o.ec(t);const e=o.Vb().$implicit;return o.Vb().close(e)})),o.Lb(1,"ion-label"),o.ic(2),o.Kb(),o.Kb()}if(2&t){const t=o.Vb().$implicit;o.Yb("disabled",0==t.quantite),o.yb(2),o.kc(" ",t.title," ")}}function r(t,e){if(1&t&&(o.Lb(0,"ion-item-group"),o.hc(1,a,3,2,"ion-item",3),o.Kb()),2&t){const t=e.$implicit;o.yb(1),o.Yb("ngIf",!t.formule)}}function c(t,e){if(1&t){const t=o.Mb();o.Lb(0,"ion-item",4),o.Tb("click",(function(){o.ec(t);const e=o.Vb().$implicit;return o.Vb().close(e)})),o.Lb(1,"ion-label"),o.ic(2),o.Kb(),o.Kb()}if(2&t){const t=o.Vb().$implicit;o.Yb("disabled",!t.disponible),o.yb(2),o.kc(" ",t.title," ")}}function b(t,e){if(1&t&&(o.Lb(0,"ion-item-group"),o.hc(1,c,3,2,"ion-item",3),o.Kb()),2&t){const t=e.$implicit;o.yb(1),o.Yb("ngIf",t.formule)}}let d=(()=>{class t{constructor(t){this.modalctrl=t,this.items=[]}ngOnInit(){this.getTitleInFirebase()}close(t){setTimeout(()=>{null!==t?this.modalctrl.dismiss({item:t}):this.modalctrl.dismiss()},200)}getTitleInFirebase(){this.afDB.list("produits/").snapshotChanges(["child_added","child_removed","child_changed"]).subscribe(t=>{this.items=[],t.forEach(t=>{this.items.push({title:t.payload.exportVal().name,price:t.payload.exportVal().price,firstPrice:t.payload.exportVal().firstPrice,quantite:t.payload.exportVal().stock,key:t.key,formule:t.payload.exportVal().formule,formuleContent:t.payload.exportVal().formuleContent,disponible:t.payload.exportVal().disponible})});for(let e of Object.keys(this.items))if(this.items[e].formule){let t=0;for(let i of Object.keys(this.items[e].formuleContent))for(let n of Object.keys(this.items))this.items[e].formuleContent[i].title!=this.items[n].title||this.items[n].formule||(this.items[n].quantite-this.items[e].formuleContent[i].quantite<0?this.items[e].disponible=!1:(t+=1,this.items[e].formuleContent.length==t&&(this.items[e].disponible=!0)))}})}}return t.\u0275fac=function(e){return new(e||t)(o.Ib(s.U))},t.\u0275cmp=o.Cb({type:t,selectors:[["app-items"]],inputs:{afDB:"afDB"},decls:19,vars:2,consts:[["fill","clear","slot","start",3,"click"],["disabled","","animated","","showCancelButton","focus"],[4,"ngFor","ngForOf"],["button","","detail","false",3,"disabled","click",4,"ngIf"],["button","","detail","false",3,"disabled","click"]],template:function(t,e){1&t&&(o.Lb(0,"ion-header"),o.Lb(1,"ion-toolbar"),o.Lb(2,"ion-button",0),o.Tb("click",(function(){return e.close(null)})),o.Lb(3,"ion-label"),o.ic(4,"Cancel"),o.Kb(),o.Kb(),o.Lb(5,"ion-title"),o.ic(6,"Selectionner produit"),o.Kb(),o.Kb(),o.Lb(7,"ion-toolbar"),o.Jb(8,"ion-searchbar",1),o.Kb(),o.Kb(),o.Lb(9,"ion-content"),o.Lb(10,"ion-list"),o.Lb(11,"ion-list-header"),o.Lb(12,"ion-title"),o.ic(13,"Produits"),o.Kb(),o.Kb(),o.hc(14,r,2,1,"ion-item-group",2),o.Lb(15,"ion-list-header"),o.Lb(16,"ion-title"),o.ic(17,"Formules"),o.Kb(),o.Kb(),o.hc(18,b,2,1,"ion-item-group",2),o.Kb(),o.Kb()),2&t&&(o.yb(14),o.Yb("ngForOf",e.items),o.yb(4),o.Yb("ngForOf",e.items))},directives:[s.q,s.R,s.e,s.z,s.P,s.H,s.bb,s.l,s.A,s.B,l.h,s.v,l.i,s.t],styles:[""]}),t})();function m(t,e){if(1&t){const t=o.Mb();o.Lb(0,"ion-item",2),o.Tb("click",(function(){o.ec(t);const i=e.$implicit;return o.Vb().dissmis(i)})),o.Lb(1,"ion-label"),o.ic(2),o.Kb(),o.Kb()}if(2&t){const t=e.$implicit;o.yb(2),o.kc(" ",t," ")}}let p=(()=>{class t{constructor(t){this.popoverCtrl=t,this.names=["Alexis","Hugo","Marvyn","Gud","Taheir"]}ngOnInit(){}dissmis(t){this.popoverCtrl.dismiss({fromPopover:t})}}return t.\u0275fac=function(e){return new(e||t)(o.Ib(s.Y))},t.\u0275cmp=o.Cb({type:t,selectors:[["app-names"]],decls:2,vars:1,consts:[["mode","ios","lines","none"],["button","","detail","false",3,"click",4,"ngFor","ngForOf"],["button","","detail","false",3,"click"]],template:function(t,e){1&t&&(o.Lb(0,"ion-list",0),o.hc(1,m,3,1,"ion-item",1),o.Kb()),2&t&&(o.yb(1),o.Yb("ngForOf",e.names))},directives:[s.A,l.h,s.t,s.z],styles:[""]}),t})(),u=(()=>{class t{constructor(t){this.popoverCtrl=t}ngOnInit(){}lone(){this.close("lone")}share(){this.close("share")}close(t){this.popoverCtrl.dismiss({type:t})}}return t.\u0275fac=function(e){return new(e||t)(o.Ib(s.Y))},t.\u0275cmp=o.Cb({type:t,selectors:[["app-options-livraison"]],decls:7,vars:0,consts:[["lines","none"],["button","",3,"click"]],template:function(t,e){1&t&&(o.Lb(0,"ion-list",0),o.Lb(1,"ion-item",1),o.Tb("click",(function(){return e.lone()})),o.Lb(2,"ion-label"),o.ic(3,"Livraison seule"),o.Kb(),o.Kb(),o.Lb(4,"ion-item",1),o.Tb("click",(function(){return e.share()})),o.Lb(5,"ion-label"),o.ic(6,"Livraison partag\xe9e"),o.Kb(),o.Kb(),o.Kb())},directives:[s.A,s.t,s.z],styles:[""]}),t})();var h=i("sSZD"),g=i("3Pt+");function f(t,e){if(1&t&&(o.Lb(0,"ion-label"),o.ic(1),o.Kb()),2&t){const t=o.Vb().$implicit;o.yb(1),o.kc(" ",t.name," ")}}function y(t,e){1&t&&(o.Lb(0,"ion-note"),o.ic(1,"Nom du Livreur"),o.Kb())}function v(t,e){if(1&t){const t=o.Mb();o.Lb(0,"ion-item-sliding",null,27),o.Lb(2,"ion-item",28),o.Lb(3,"ion-input",29),o.Tb("ngModelChange",(function(i){return o.ec(t),e.$implicit.title=i})),o.Kb(),o.Jb(4,"span",30),o.Lb(5,"ion-button",31),o.Tb("click",(function(){o.ec(t);const i=e.$implicit,n=o.Vb().$implicit;return o.Vb().itemsModal(n,i)})),o.Jb(6,"ion-icon",32),o.Kb(),o.Kb(),o.Lb(7,"ion-item-options",33),o.Tb("click",(function(){o.ec(t);const i=e.$implicit,n=e.index,s=o.Vb().index;return o.Vb().delete(i,s,n)})),o.Lb(8,"ion-item-option",34),o.Jb(9,"ion-icon",35),o.Kb(),o.Kb(),o.Lb(10,"ion-item",36),o.Lb(11,"ion-label"),o.ic(12,"Quantit\xe9 :"),o.Kb(),o.Jb(13,"span",30),o.Lb(14,"div",37),o.Lb(15,"ion-chip",38),o.Tb("click",(function(){o.ec(t);const i=e.$implicit,n=o.Vb().$implicit;return o.Vb().remove(i,n)})),o.Jb(16,"ion-icon",39),o.Kb(),o.Lb(17,"ion-label",40),o.ic(18),o.Kb(),o.Lb(19,"ion-chip",41),o.Tb("click",(function(){o.ec(t);const i=e.$implicit,n=o.Vb().$implicit;return o.Vb().add(i,n)})),o.Jb(20,"ion-icon",42),o.Kb(),o.Kb(),o.Kb(),o.Kb()}if(2&t){const t=e.$implicit,i=e.index,n=o.Vb().index;o.yb(2),o.bc("id","formule-",n,"",i,"-item"),o.yb(1),o.ac("placeholder","Item ",i+1," :"),o.Yb("ngModel",t.title)("value",t.title),o.yb(7),o.ac("id","qte-",n,"-item"),o.yb(8),o.kc(" ",t.quantite," ")}}function C(t,e){if(1&t){const t=o.Mb();o.Lb(0,"ion-list"),o.Lb(1,"ion-item",23),o.Tb("click",(function(i){o.ec(t);const n=e.index;return o.Vb().namesPopover(i,n)})),o.hc(2,f,2,1,"ion-label",13),o.hc(3,y,2,0,"ion-note",13),o.Jb(4,"span",11),o.Jb(5,"ion-icon",22),o.Kb(),o.hc(6,v,21,7,"ion-item-sliding",12),o.Lb(7,"ion-item"),o.Lb(8,"ion-chip",24),o.Tb("click",(function(){o.ec(t);const i=e.$implicit;return o.Vb().addItems(i.items)})),o.Jb(9,"ion-icon",25),o.Lb(10,"ion-label"),o.ic(11,"Ajouter item"),o.Kb(),o.Kb(),o.Kb(),o.Lb(12,"ion-item",14),o.Lb(13,"ion-input",26),o.Tb("ngModelChange",(function(i){return o.ec(t),e.$implicit.firstPrice=i})),o.Kb(),o.Lb(14,"ion-label"),o.ic(15,"EUR"),o.Kb(),o.Jb(16,"span",11),o.Kb(),o.Kb()}if(2&t){const t=e.$implicit,i=e.index;o.yb(1),o.ac("id","no-input-",i,""),o.yb(1),o.Yb("ngIf",""!=t.name),o.yb(1),o.Yb("ngIf",""==t.name),o.yb(3),o.Yb("ngForOf",t.items),o.yb(7),o.Yb("ngModel",t.firstPrice)("value",t.firstPrice)}}function L(t,e){if(1&t){const t=o.Mb();o.Lb(0,"ion-item"),o.Lb(1,"ion-chip",24),o.Tb("click",(function(){return o.ec(t),o.Vb().addAdmin()})),o.Jb(2,"ion-icon",25),o.Lb(3,"ion-label"),o.ic(4,"Ajouter livreur"),o.Kb(),o.Kb(),o.Kb()}}let k=(()=>{class t{constructor(t,e,i){this.modalCtrl=t,this.popoverCtrl=e,this.afDB=i,this.produits=[],this.tmp=[],null==this.date&&(this.date=(new Date).toISOString()),null==this.type&&(this.type="lone"),this.getProduitsFromFirebase()}ngOnInit(){if(null==this.delivery)this.init();else for(let t of Object.keys(this.delivery))for(let e of Object.keys(this.delivery[t].items))if(null!=this.delivery[t].items[e].formuleContent){if(0!=this.delivery[t].items[e].formuleContent.length)for(let i of Object.keys(this.delivery[t].items[e].formuleContent))this.tmp.push({key:this.delivery[t].items[e].formuleContent[i].key,quantite:this.delivery[t].items[e].formuleContent[i].quantite})}else null!=this.delivery[t].items[e].key&&this.tmp.push({key:this.delivery[t].items[e].key,quantite:this.delivery[t].items[e].quantite})}init(){this.delivery=[],this.addAdmin(),this.price=0}addAdmin(){this.delivery.push({name:"",items:[],firstPrice:0,delivery:!0}),this.addItems(this.delivery[this.delivery.length-1].items)}addItems(t){t.push({key:"",title:"",quantite:1,price:0,firstPrice:0,formuleContent:[],max:-1})}close(){this.modalCtrl.dismiss()}add(t,e){-1!=t.max?t.quantite<t.max&&(t.quantite++,this.updatePrices(t,1,!0),this.updatesFirstPrices(e,1,t,!0)):t.quantite++}remove(t,e){t.quantite>1&&(t.quantite--,this.updatePrices(t,1,!1),this.updatesFirstPrices(e,1,t,!1))}updatePrices(t,e,i){this.price=i?this.price+t.price:this.price-t.price*e}updatesFirstPrices(t,e,i,n){t.firstPrice=n?t.firstPrice+i.firstPrice:t.firstPrice-i.firstPrice*e}delete(t,e,i){let n=this.delivery[e];this.price=this.price-t.price*t.quantite,n.firstPrice=n.firstPrice-n.items[i].firstPrice*n.quantite,n.items.splice(i,1)}deleteAll(t,e){for(let i of Object.keys(t.items))this.price=this.price-t.items[i].price*t.items[i].quantite,t.firstPrice=t.firstPrice-t.items[i].firstPrice*t.items[i].quantite;this.delivery.splice(e,1)}itemsModal(t,e){return Object(n.a)(this,void 0,void 0,(function*(){const i=yield this.modalCtrl.create({component:d,componentProps:{afDB:this.afDB},cssClass:"my-custom-class",swipeToClose:!0,presentingElement:yield this.modalCtrl.getTop()});return i.onDidDismiss().then(i=>{void 0!==i.data&&(""!=e.title&&(this.updatePrices(e,e.quantite,!1),this.updatesFirstPrices(t,e.quantite,e,!1)),e.title=i.data.item.title,e.max=i.data.item.quantite,e.price=i.data.item.price,e.firstPrice=i.data.item.firstPrice,e.quantite=1,null!=i.data.item.formuleContent&&(e.formuleContent=i.data.item.formuleContent),e.key=i.data.item.key,this.updatePrices(e,1,!0),this.updatesFirstPrices(t,1,e,!0))}),yield i.present()}))}activated(){document.querySelector("#date-item").classList.toggle("no-input-feet")}namesPopover(t,e){return Object(n.a)(this,void 0,void 0,(function*(){document.querySelector("#no-input-"+e).classList.toggle("no-input-feet");const i=yield this.popoverCtrl.create({component:p,cssClass:"sort-popover",event:t,mode:"md",translucent:!0});return i.onDidDismiss().then(t=>{void 0!==t.data&&(this.delivery[e].name=t.data.fromPopover),document.querySelector("#no-input-"+e).classList.toggle("no-input-feet")}),yield i.present()}))}openOptionPopover(t){return Object(n.a)(this,void 0,void 0,(function*(){const e=yield this.popoverCtrl.create({component:u,event:t,mode:"md",translucent:!0});return e.onWillDismiss().then(t=>{this.type!=t.data.type&&this.init(),this.type=t.data.type}),yield e.present()}))}setQuantite(t,e,i){for(let n of Object.keys(this.produits))this.produits[n].key==t&&(this.produits[n].content.stock=this.produits[n].content.stock+i*e,this.afDB.object("produits/"+t+"/stock").set(this.produits[n].content.stock))}save(){if(null!=this.key){for(let t of Object.keys(this.tmp))this.setQuantite(this.tmp[t].key,this.tmp[t].quantite,1);this.modifyItemInFirebase()}else this.addItemToFirebase();for(let t of Object.keys(this.delivery))for(let e of Object.keys(this.delivery[t].items))if(null!=this.delivery[t].items[e].formuleContent){if(0!=this.delivery[t].items[e].formuleContent.length)for(let i of Object.keys(this.delivery[t].items[e].formuleContent))this.setQuantite(this.delivery[t].items[e].formuleContent[i].key,this.delivery[t].items[e].formuleContent[i].quantite,-1)}else""!=this.delivery[t].items[e].key&&this.setQuantite(this.delivery[t].items[e].key,this.delivery[t].items[e].quantite,-1);this.close()}addItemToFirebase(){this.afDB.list("Livraisons/").push({title:this.title,order:this.delivery,price:this.price,distance:this.km,date:this.date,clientName:this.clientName,type:this.type})}modifyItemInFirebase(){this.afDB.object("Livraisons/"+this.key+"/title/").set(this.title),this.afDB.object("Livraisons/"+this.key+"/order/").set(this.delivery),this.afDB.object("Livraisons/"+this.key+"/price/").set(this.price),this.afDB.object("Livraisons/"+this.key+"/distance/").set(this.km),this.afDB.object("Livraisons/"+this.key+"/clientName/").set(this.clientName),this.afDB.object("Livraisons/"+this.key+"/date/").set(this.date),this.afDB.object("Livraisons/"+this.key+"/type/").set(this.type)}getProduitsFromFirebase(){this.afDB.list("produits/").snapshotChanges(["child_added","child_removed","child_changed"]).subscribe(t=>{this.produits=[],t.forEach(t=>{this.produits.push({key:t.key,content:t.payload.exportVal()})})})}}return t.\u0275fac=function(e){return new(e||t)(o.Ib(s.U),o.Ib(s.Y),o.Ib(h.a))},t.\u0275cmp=o.Cb({type:t,selectors:[["app-new"]],inputs:{title:"title",key:"key",price:"price",km:"km",date:"date",clientName:"clientName",delivery:"delivery",type:"type"},decls:39,vars:13,consts:[[2,"--border-style","none"],["fill","clear","slot","start",3,"click"],["fill","clear","slot","end",3,"click"],[1,"content",3,"fullscreen"],[2,"margin-top","10px","z-index","0"],["size","large",2,"padding-left","0"],["slot","end","fill","clear",2,"--color","black",3,"click"],["name","chevron-down"],["lines","none"],[1,"full"],["type","text","required","","autocapitalize","on","autocorrect","on","placeholder","Titre",3,"ngModel","value","ngModelChange"],[1,"input-feet"],[4,"ngFor","ngForOf"],[4,"ngIf"],["mode","ios",1,"full"],["type","number","enterkeyhint","done","inputmode","decimal","placeholder","Prix revente",3,"ngModel","value","ngModelChange"],["type","text","required","","autocapitalize","on","autocorrect","on","placeholder","Nom du client",3,"ngModel","value","ngModelChange"],["type","number","enterkeyhint","done","inputmode","decimal","placeholder","Km parcourut",3,"ngModel","value","ngModelChange"],[1,"input-feet","first-size"],["slot","end",2,"margin-right","0"],["id","date-item",1,"full"],["required","","display-timezone","utc",3,"ngModel","value","ionBlur","ngModelChange"],["slot","end","size","small","name","chevron-down",1,"focus-icon"],["mode","ios","required","",1,"full",3,"id","click"],[3,"click"],["name","add"],["type","number","enterkeyhint","done","inputmode","decimal","placeholder","Prix achat",3,"ngModel","value","ngModelChange"],["slide",""],["mode","ios",1,"full",3,"id"],["type","text","required","","autocapitalize","on","autocorrect","on",3,"ngModel","value","placeholder","ngModelChange"],[1,"input-feet","second-size"],["fill","clear","slot","end",1,"modal",3,"click"],["size","large","name","pricetag"],["side","end",2,"width","70px",3,"click"],["color","danger",2,"width","100%"],["name","trash",2,"position","absolute","top","25%","right","50%","transform","translate(50%, -50%)"],["mode","ios","lines","full",1,"full",3,"id"],["slot","end",2,"display","flex","margin","0","position","relative"],[2,"margin-right","20px","padding","7px",3,"click"],["size","small","name","remove",2,"margin","0"],[2,"position","absolute","left","50%","top","50%","transform","translate(-50%, -50%)"],[2,"margin-left","20px","padding","7px",3,"click"],["name","add",2,"margin","0"]],template:function(t,e){1&t&&(o.Lb(0,"ion-header"),o.Lb(1,"ion-toolbar",0),o.Lb(2,"ion-button",1),o.Tb("click",(function(){return e.close()})),o.Lb(3,"ion-label"),o.ic(4,"Annuler"),o.Kb(),o.Kb(),o.Lb(5,"ion-title"),o.ic(6,"Nouveau"),o.Kb(),o.Lb(7,"ion-button",2),o.Tb("click",(function(){return e.save()})),o.Lb(8,"ion-label"),o.ic(9,"Terminer"),o.Kb(),o.Kb(),o.Kb(),o.Kb(),o.Lb(10,"ion-content",3),o.Lb(11,"ion-toolbar",4),o.Lb(12,"ion-title",5),o.ic(13,"Livraison"),o.Kb(),o.Lb(14,"ion-button",6),o.Tb("click",(function(t){return e.openOptionPopover(t)})),o.Jb(15,"ion-icon",7),o.Kb(),o.Kb(),o.Lb(16,"ion-list",8),o.Lb(17,"ion-item",9),o.Lb(18,"ion-input",10),o.Tb("ngModelChange",(function(t){return e.title=t})),o.Kb(),o.Jb(19,"span",11),o.Kb(),o.hc(20,C,17,6,"ion-list",12),o.hc(21,L,5,0,"ion-item",13),o.Lb(22,"ion-item",14),o.Lb(23,"ion-input",15),o.Tb("ngModelChange",(function(t){return e.price=t})),o.Kb(),o.Jb(24,"span",11),o.Lb(25,"ion-label"),o.ic(26,"EUR"),o.Kb(),o.Kb(),o.Lb(27,"ion-item",14),o.Lb(28,"ion-input",16),o.Tb("ngModelChange",(function(t){return e.clientName=t})),o.Kb(),o.Jb(29,"span",11),o.Kb(),o.Lb(30,"ion-item",14),o.Lb(31,"ion-input",17),o.Tb("ngModelChange",(function(t){return e.km=t})),o.Kb(),o.Jb(32,"span",18),o.Lb(33,"ion-label",19),o.ic(34,"KM"),o.Kb(),o.Kb(),o.Lb(35,"ion-item",20),o.Lb(36,"ion-datetime",21),o.Tb("ionBlur",(function(){return e.activated()}))("ngModelChange",(function(t){return e.date=t})),o.Kb(),o.Jb(37,"span",11),o.Jb(38,"ion-icon",22),o.Kb(),o.Kb(),o.Kb()),2&t&&(o.yb(10),o.Yb("fullscreen",!0),o.yb(8),o.Yb("ngModel",e.title)("value",e.title),o.yb(2),o.Yb("ngForOf",e.delivery),o.yb(1),o.Yb("ngIf","share"==e.type),o.yb(2),o.Yb("ngModel",e.price)("value",e.price),o.yb(5),o.Yb("ngModel",e.clientName)("value",e.clientName),o.yb(3),o.Yb("ngModel",e.km)("value",e.km),o.yb(5),o.Yb("ngModel",e.date)("value",e.date))},directives:[s.q,s.R,s.e,s.z,s.P,s.l,s.r,s.A,s.t,s.s,s.bb,g.f,g.d,g.e,l.h,l.i,s.W,s.m,s.ab,s.k,s.C,s.y,s.x,s.w],styles:[".content[_ngcontent-%COMP%]   ion-item[_ngcontent-%COMP%]{--padding-top:10px;--padding-bottom:10px}.modal[_ngcontent-%COMP%]{--border-style:solid;--border-color:#000;--color:#000;--border-width:2px;height:45px}.focus-icon[_ngcontent-%COMP%]{margin-right:0}.item-has-focus[_ngcontent-%COMP%]   .input-feet[_ngcontent-%COMP%]{background:#3880ff;opacity:1}.item-has-focus[_ngcontent-%COMP%]   .focus-icon[_ngcontent-%COMP%]{color:#3880ff}.no-input-feet[_ngcontent-%COMP%]   .input-feet[_ngcontent-%COMP%]{background:#3880ff;opacity:1}.no-input-feet[_ngcontent-%COMP%]   .focus-icon[_ngcontent-%COMP%]{color:#3880ff}.input-feet[_ngcontent-%COMP%]{width:100%;height:2px;background:grey;opacity:.5;position:absolute;bottom:5px;transition-property:background,opacity;transition-duration:.2s}.first-size[_ngcontent-%COMP%]{width:85%}.second-size[_ngcontent-%COMP%]{width:75%}"]}),t})()},"k+ul":function(t,e,i){"use strict";i.r(e),i.d(e,"Tab3PageModule",(function(){return O}));var n=i("TEn/"),o=i("tyNb"),s=i("ofXK"),l=i("3Pt+"),a=i("mrSG"),r=i("9ybx"),c=i("fXoL"),b=i("Sy1n"),d=i("sSZD");function m(t,e){1&t&&(c.Lb(0,"ion-title"),c.ic(1," Stonks "),c.Kb())}function p(t,e){1&t&&(c.Lb(0,"ion-title"),c.ic(1," Balence "),c.Kb())}function u(t,e){if(1&t&&(c.Lb(0,"ion-item"),c.Lb(1,"ion-label"),c.ic(2,"D\xe9partag\xe9e !"),c.Kb(),c.Jb(3,"ion-datetime",30),c.Kb()),2&t){const t=c.Vb().$implicit;c.yb(3),c.Zb("value",t.date)}}function h(t,e){if(1&t&&(c.Lb(0,"ion-list"),c.hc(1,u,4,1,"ion-item",1),c.Kb()),2&t){const t=e.$implicit,i=c.Vb().$implicit;c.yb(1),c.Yb("ngIf",t.last==i)}}function g(t,e){if(1&t){const t=c.Mb();c.Lb(0,"ion-list"),c.hc(1,h,2,1,"ion-list",14),c.Lb(2,"ion-item",26),c.Tb("click",(function(){c.ec(t);const i=e.$implicit;return c.Vb().goTo(i)})),c.Lb(3,"div",27),c.Lb(4,"ion-label"),c.ic(5),c.Kb(),c.Lb(6,"ion-note",28),c.ic(7," livr\xe9 par "),c.Lb(8,"strong"),c.ic(9),c.Kb(),c.Kb(),c.Kb(),c.Lb(10,"div",29),c.Lb(11,"ion-label"),c.ic(12),c.Kb(),c.Jb(13,"ion-datetime",30),c.Kb(),c.Kb(),c.Kb()}if(2&t){const t=e.$implicit,i=c.Vb();c.yb(1),c.Yb("ngForOf",i.sharing.reverse()),c.yb(4),c.kc(" ",t.title," "),c.yb(4),c.kc(" ",t.order[0].name," "),c.yb(3),c.kc(" \u20ac",(t.price-0).toFixed(2)," "),c.yb(1),c.Zb("value",t.date)}}function f(t,e){if(1&t&&(c.Lb(0,"ion-item"),c.Lb(1,"ion-label"),c.ic(2,"D\xe9partag\xe9e"),c.Kb(),c.Jb(3,"ion-icon",31),c.Jb(4,"ion-datetime",30),c.Kb()),2&t){const t=c.Vb();c.yb(4),c.Zb("value",t.sharing[0].date)}}function y(t,e){if(1&t&&(c.Lb(0,"ion-item",32),c.Lb(1,"div",33),c.Lb(2,"ion-label",34),c.ic(3),c.Kb(),c.Lb(4,"div",35),c.Jb(5,"ion-progress-bar",36),c.Lb(6,"ion-label"),c.ic(7),c.Kb(),c.Jb(8,"ion-progress-bar",37),c.Lb(9,"ion-label",38),c.ic(10),c.Kb(),c.Lb(11,"ion-note",39),c.ic(12,"Somme rapport\xe9"),c.Kb(),c.Lb(13,"ion-note",40),c.ic(14,"Somme gagn\xe9"),c.Kb(),c.Lb(15,"ion-note",41),c.ic(16),c.Kb(),c.Lb(17,"ion-note",42),c.ic(18),c.Kb(),c.Kb(),c.Kb(),c.Kb()),2&t){const t=e.$implicit,i=c.Vb();c.yb(3),c.kc(" ",t.name," "),c.yb(2),c.Zb("value",(i.getPourcent(t.tab.rapport,i.total)/100).toFixed(2)),c.yb(2),c.kc(" ",i.getPourcent(t.tab.rapport,i.total).toFixed(2),"% "),c.yb(1),c.Zb("value",(i.getPourcent(t.tab.total,i.total)/100).toFixed(2)),c.yb(2),c.kc(" ",i.getPourcent(t.tab.total,i.total).toFixed(2),"%"),c.yb(6),c.kc("\u20ac",t.tab.rapport.toFixed(2)," "),c.yb(2),c.kc("\u20ac",t.tab.total.toFixed(2)," ")}}function v(t,e){if(1&t){const t=c.Mb();c.Lb(0,"ion-fab",43),c.Lb(1,"ion-fab-button",44),c.Tb("click",(function(){return c.ec(t),c.Vb().addNewExpModal()})),c.Jb(2,"ion-icon",45),c.Kb(),c.Kb()}}function C(t,e){if(1&t&&(c.Lb(0,"ion-toolbar",46),c.Lb(1,"div",47),c.Lb(2,"ion-note",48),c.ic(3,"MY TOTAL"),c.Kb(),c.Jb(4,"br"),c.Lb(5,"ion-label",49),c.ic(6,"\u20ac -- . --"),c.Kb(),c.Kb(),c.Lb(7,"div",50),c.Lb(8,"ion-note",48),c.ic(9,"TOTAL STONKS"),c.Kb(),c.Jb(10,"br"),c.Lb(11,"ion-label",49),c.ic(12),c.Kb(),c.Kb(),c.Kb()),2&t){const t=c.Vb();c.yb(12),c.kc("\u20ac",t.total.toFixed(2),"")}}function L(t,e){if(1&t){const t=c.Mb();c.Lb(0,"ion-button",51),c.Tb("click",(function(){return c.ec(t),c.Vb().confirmAlert()})),c.Lb(1,"ion-label"),c.ic(2,"D\xe9partager"),c.Kb(),c.Kb()}}let k=(()=>{class t{constructor(t,e,i,n,o,s){this.modalController=t,this.app=e,this.afDB=i,this.alertCtrl=n,this.navCtrl=o,this.popoverCtrl=s,this.pageName=!0,this.date=(new Date).toISOString(),this.items=[],this.sharing=[],this.total=0,this.charges=0,this.benef=0,this.admin=[{name:"Hugo",tab:{total:0,rapport:0}},{name:"Alexis",tab:{total:0,rapport:0}},{name:"Taheir",tab:{total:0,rapport:0}},{name:"Marvyn",tab:{total:0,rapport:0}},{name:"Gud",tab:{total:0,rapport:0}}],this.segment=0,this.slidesOptions={initialSlide:0,slidesPerView:1,speed:400},this.afDB=this.app.afDB,this.getStonksInFirebase(),this.getSharingFromFirebase()}segmentChanged(t){return Object(a.a)(this,void 0,void 0,(function*(){yield this.selectedSlide.slideTo(this.segment),this.pageName=0!=this.segment}))}slideChanged(t){return Object(a.a)(this,void 0,void 0,(function*(){this.selectedSlide=t,t.getActiveIndex().then(t=>{this.segment=t,0==this.segment?this.pageName=!1:1==this.segment&&(this.pageName=!0)})}))}showBenef(){document.querySelector("#benef").classList.toggle("open")}addNewExpModal(){return Object(a.a)(this,void 0,void 0,(function*(){const t=yield this.modalController.create({component:r.a,componentProps:{afDB:this.afDB},cssClass:"my-custom-class"});return yield t.present()}))}goTo(t){this.navCtrl.navigateForward("/tabs/tab3/edit",{queryParams:{item:t}})}confirmAlert(){return Object(a.a)(this,void 0,void 0,(function*(){const t=yield this.alertCtrl.create({cssClass:"my-custom-class",header:"Confirmer",message:"Voulez-vous vraiment r\xe9partir le montant total avec tout le monde ?",buttons:[{text:"Annuler",role:"Cancel"},{text:"Confirmer",handler:()=>{for(let t of Object.keys(this.items))this.afDB.object("Livraisons/"+this.items[t].key+"/sharing/").set(!0);this.afDB.list("sharing").push({date:(new Date).toISOString(),last:this.items[this.items.length-1]})}}]});yield t.present()}))}getFuelPrice(t){let e=2;return t>15?e+=1*(t-15)/7:0==t&&(e=0),e}getPourcent(t,e){return 0==e&&(e=1),t/e*100}getStonksInFirebase(){this.afDB.list("Livraisons/").snapshotChanges(["child_added","child_removed","child_changed"]).subscribe(t=>{this.items=[],this.total=0,this.charges=0;for(let e of Object.keys(this.admin))this.admin[e].tab.rapport=0,this.admin[e].tab.total=0;t.forEach(t=>{let e=t.payload.exportVal();if(null==e.sharing){this.total=this.total+ +e.price;for(let t of Object.keys(this.admin))for(let i of Object.keys(e.order))if(this.admin[t].name==e.order[i].name){e.order[i]==e.order[0]&&(this.admin[t].tab.rapport=this.admin[t].tab.rapport+ +e.price);let n=0;this.admin[t].name==e.order[0].name&&(n=this.getFuelPrice(+e.order[i].distance)),this.admin[t].tab.total=this.admin[t].tab.total+ +e.order[i].firstPrice+n,this.charges=this.charges+ +e.order[i].firstPrice+n}}null==e.old&&this.items.push({key:t.key,order:e.order,title:e.title,price:e.price,date:e.date,km:e.distance,clientName:e.clientName,type:e.type,sharing:e.sharing})});for(let e of Object.keys(this.admin))this.admin[e].tab.total=this.admin[e].tab.total+(this.total-this.charges)/5;this.benef=this.total-this.charges})}getSharingFromFirebase(){this.afDB.list("sharings/").snapshotChanges(["child_added","child_changed","child_removed"]).subscribe(t=>{this.sharing=[],t.forEach(t=>{this.sharing.push({date:t.payload.exportVal().date,last:t.payload.exportVal().last})})})}}return t.\u0275fac=function(e){return new(e||t)(c.Ib(n.U),c.Ib(b.a),c.Ib(d.a),c.Ib(n.a),c.Ib(n.V),c.Ib(n.Y))},t.\u0275cmp=c.Cb({type:t,selectors:[["app-tab3"]],decls:37,vars:14,consts:[["mode","ios",3,"translucent"],[4,"ngIf"],["slot","end","fill","clear",1,"toolbar-button"],["name","reader"],["id","stats-content","color","light",3,"fullscreen"],[3,"ngModel","ngModelChange","ionChange"],["value","0"],["name","receipt"],["value","1"],["name","swap-horizontal"],["id","content",3,"options","ionSlideDidChange","ionSlidesDidLoad"],["slides",""],["id","Stonks-page"],["lines","full"],[4,"ngFor","ngForOf"],["color","light  ","lines","none"],["id","balence-page"],["mode","md","button","","lines","none",2,"height","50px",3,"click"],["size","large",2,"text-align","center"],["id","benef","lines","none"],[2,"text-align","center"],["button","","detail","false","color","light",4,"ngFor","ngForOf"],["id","bottom-item"],["id","tricount-add","vertical","bottom","horizontal","center",4,"ngIf"],["id","tricount-toolbar",4,"ngIf"],["color","light","expand","full",3,"click",4,"ngIf"],["button","","detail","false","routerDirection","forward",3,"click"],["slot","start",2,"width","60%"],["slot","end",2,"font-size","12pt"],["slot","end",2,"text-align","right","margin-left","0"],["disabled","","displayFormat","DD/MM/YYYY",3,"value"],["name","checkmark","slot","start"],["button","","detail","false","color","light"],[1,"item-content"],[1,"label"],[1,"progress-bar"],["slot","start","color","warning","reversed","true",3,"value"],[1,"right",2,"position","absolute",3,"value"],[1,"right"],[1,"up"],[1,"right","up"],[1,"down"],[1,"right","down"],["id","tricount-add","vertical","bottom","horizontal","center"],[3,"click"],["name","add"],["id","tricount-toolbar"],["slot","start",2,"text-align","left"],[2,"font-size","small"],[2,"font-size","small","font-weight","bold"],["slot","end"],["color","light","expand","full",3,"click"]],template:function(t,e){if(1&t){const t=c.Mb();c.Lb(0,"ion-header",0),c.Lb(1,"ion-toolbar"),c.hc(2,m,2,0,"ion-title",1),c.hc(3,p,2,0,"ion-title",1),c.Lb(4,"ion-button",2),c.Jb(5,"ion-icon",3),c.Kb(),c.Kb(),c.Kb(),c.Lb(6,"ion-content",4),c.Lb(7,"ion-segment",5),c.Tb("ngModelChange",(function(t){return e.segment=t}))("ionChange",(function(t){return e.segmentChanged(t)})),c.Lb(8,"ion-segment-button",6),c.Jb(9,"ion-icon",7),c.Lb(10,"ion-label"),c.ic(11,"Stonks"),c.Kb(),c.Kb(),c.Lb(12,"ion-segment-button",8),c.Jb(13,"ion-icon",9),c.Lb(14,"ion-label"),c.ic(15,"Balence"),c.Kb(),c.Kb(),c.Kb(),c.Lb(16,"ion-slides",10,11),c.Tb("ionSlideDidChange",(function(){c.ec(t);const i=c.dc(17);return e.slideChanged(i)}))("ionSlidesDidLoad",(function(){c.ec(t);const i=c.dc(17);return e.slideChanged(i)})),c.Lb(18,"ion-slide",12),c.Lb(19,"ion-list",13),c.hc(20,g,14,5,"ion-list",14),c.hc(21,f,5,1,"ion-item",1),c.Jb(22,"ion-item",15),c.Kb(),c.Kb(),c.Lb(23,"ion-slide",16),c.Lb(24,"ion-list",13),c.Lb(25,"ion-item",17),c.Tb("click",(function(){return e.showBenef()})),c.Lb(26,"ion-title",18),c.ic(27),c.Kb(),c.Kb(),c.Lb(28,"ion-item",19),c.Lb(29,"ion-title",20),c.ic(30),c.Kb(),c.Kb(),c.hc(31,y,19,7,"ion-item",21),c.Jb(32,"ion-item-divider",22),c.Kb(),c.Kb(),c.Kb(),c.Kb(),c.hc(33,v,3,0,"ion-fab",23),c.Lb(34,"ion-footer"),c.hc(35,C,13,1,"ion-toolbar",24),c.hc(36,L,3,0,"ion-button",25),c.Kb()}2&t&&(c.Yb("translucent",!0),c.yb(2),c.Yb("ngIf",!e.pageName),c.yb(1),c.Yb("ngIf",e.pageName),c.yb(3),c.Yb("fullscreen",!0),c.yb(1),c.Yb("ngModel",e.segment),c.yb(9),c.Yb("options",e.slidesOptions),c.yb(4),c.Yb("ngForOf",e.items.reverse()),c.yb(1),c.Yb("ngIf",null!=e.sharing[0]),c.yb(6),c.kc(" Total : \u20ac",e.total.toFixed(2)," "),c.yb(3),c.kc(" B\xe9n\xe9fice : \u20ac",e.benef.toFixed(2)," "),c.yb(1),c.Yb("ngForOf",e.admin),c.yb(2),c.Yb("ngIf",!e.pageName),c.yb(2),c.Yb("ngIf",!e.pageName),c.yb(1),c.Yb("ngIf",e.pageName))},directives:[n.q,n.R,s.i,n.e,n.r,n.l,n.I,n.ab,l.d,l.e,n.J,n.z,n.L,n.K,n.A,s.h,n.t,n.P,n.u,n.p,n.C,n.m,n.D,n.n,n.o],styles:[".small-margin[_ngcontent-%COMP%]{margin:10px}.toolbar-button[_ngcontent-%COMP%]{--color:#000;margin:0 10px;--padding-start:0;--padding-end:0}ion-content[_ngcontent-%COMP%]{--overflow:hidden}ion-slide[_ngcontent-%COMP%]{overflow:scroll}#content[_ngcontent-%COMP%]{height:100%}#content[_ngcontent-%COMP%]   ion-slide[_ngcontent-%COMP%]{display:block}#Stonks-page[_ngcontent-%COMP%]   ion-item[_ngcontent-%COMP%]{--padding-top:5px;--padding-bottom:5px}#Stonks-page[_ngcontent-%COMP%]   ion-item[_ngcontent-%COMP%]   div[_ngcontent-%COMP%]   ion-label[_ngcontent-%COMP%]{margin-bottom:5px}#Stonks-page[_ngcontent-%COMP%]   ion-item[_ngcontent-%COMP%]   ion-datetime[_ngcontent-%COMP%]{font-size:small;--padding-end:0;--padding-start:0;--padding-top:0;--padding-bottom:0}#balence-page[_ngcontent-%COMP%]   ion-item[_ngcontent-%COMP%]{--padding-start:0;--pading-end:0}#balence-page[_ngcontent-%COMP%]   .item-content[_ngcontent-%COMP%]{width:100%;padding:10px 0}#balence-page[_ngcontent-%COMP%]   .item-content[_ngcontent-%COMP%]   ion-label[_ngcontent-%COMP%]{margin:15px}#balence-page[_ngcontent-%COMP%]   .item-content[_ngcontent-%COMP%]   .label[_ngcontent-%COMP%]{text-align:center;font-weight:700}#balence-page[_ngcontent-%COMP%]   .item-content[_ngcontent-%COMP%]   .progress-bar[_ngcontent-%COMP%]{display:flex;width:100%;padding-bottom:20px}#balence-page[_ngcontent-%COMP%]   .item-content[_ngcontent-%COMP%]   .progress-bar[_ngcontent-%COMP%]   ion-progress-bar[_ngcontent-%COMP%]{width:50%;height:20px}#balence-page[_ngcontent-%COMP%]   .item-content[_ngcontent-%COMP%]   .progress-bar[_ngcontent-%COMP%]   ion-label[_ngcontent-%COMP%]{position:absolute;bottom:15px}#balence-page[_ngcontent-%COMP%]   .item-content[_ngcontent-%COMP%]   .progress-bar[_ngcontent-%COMP%]   ion-note[_ngcontent-%COMP%]{font-size:small;position:absolute;margin:5px}#balence-page[_ngcontent-%COMP%]   .item-content[_ngcontent-%COMP%]   .progress-bar[_ngcontent-%COMP%]   .up[_ngcontent-%COMP%]{bottom:55px}#balence-page[_ngcontent-%COMP%]   .item-content[_ngcontent-%COMP%]   .progress-bar[_ngcontent-%COMP%]   .down[_ngcontent-%COMP%]{bottom:0}#balence-page[_ngcontent-%COMP%]   .item-content[_ngcontent-%COMP%]   .progress-bar[_ngcontent-%COMP%]   .right[_ngcontent-%COMP%]{right:0}#balence-page[_ngcontent-%COMP%]   #bottom-item[_ngcontent-%COMP%]{--background:#fff}.ios[_ngcontent-%COMP%]   #bottom-item[_ngcontent-%COMP%]{height:50px}.md[_ngcontent-%COMP%]   #bottom-item[_ngcontent-%COMP%]{height:65px}#benef[_ngcontent-%COMP%]{height:0;transition-property:height;transition-duration:.2s}.open[_ngcontent-%COMP%]{height:50px!important}"]}),t})();var P=i("qtYk");const K=[{path:"",component:k},{path:"edit",loadChildren:()=>i.e(16).then(i.bind(null,"xhSr")).then(t=>t.EditPageModule)}];let M=(()=>{class t{}return t.\u0275mod=c.Gb({type:t}),t.\u0275inj=c.Fb({factory:function(e){return new(e||t)},imports:[[o.i.forChild(K)]]}),t})(),O=(()=>{class t{}return t.\u0275mod=c.Gb({type:t}),t.\u0275inj=c.Fb({factory:function(e){return new(e||t)},imports:[[n.S,s.b,l.a,P.a,o.i.forChild([{path:"",component:k}]),M]]}),t})()}}]);