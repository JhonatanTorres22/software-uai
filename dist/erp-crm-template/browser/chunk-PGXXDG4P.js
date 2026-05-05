import{d as W,e as Z,g as ee}from"./chunk-HRC5X5HW.js";import{$a as p,Ce as q,Ea as z,Eb as V,Ee as b,Fb as c,Fe as G,Gb as w,Hb as g,Hc as O,Ib as H,Ja as F,Ld as $,Me as Y,Nb as L,O as S,Oa as D,Od as P,P as A,Pa as k,Qa as R,R as M,Ra as N,Sa as U,T as u,Ue as J,Vd as C,Ve as K,We as Q,Z as _,Za as T,Zd as X,_ as y,_a as d,bc as B,eb as f,fb as a,fc as h,gb as r,ka as E,lc as v,ob as I,qb as m,rb as s,xc as j,za as o}from"./chunk-63UDFC7H.js";var te=`
    .p-textarea {
        font-family: inherit;
        font-feature-settings: inherit;
        font-size: 1rem;
        color: dt('textarea.color');
        background: dt('textarea.background');
        padding-block: dt('textarea.padding.y');
        padding-inline: dt('textarea.padding.x');
        border: 1px solid dt('textarea.border.color');
        transition:
            background dt('textarea.transition.duration'),
            color dt('textarea.transition.duration'),
            border-color dt('textarea.transition.duration'),
            outline-color dt('textarea.transition.duration'),
            box-shadow dt('textarea.transition.duration');
        appearance: none;
        border-radius: dt('textarea.border.radius');
        outline-color: transparent;
        box-shadow: dt('textarea.shadow');
    }

    .p-textarea:enabled:hover {
        border-color: dt('textarea.hover.border.color');
    }

    .p-textarea:enabled:focus {
        border-color: dt('textarea.focus.border.color');
        box-shadow: dt('textarea.focus.ring.shadow');
        outline: dt('textarea.focus.ring.width') dt('textarea.focus.ring.style') dt('textarea.focus.ring.color');
        outline-offset: dt('textarea.focus.ring.offset');
    }

    .p-textarea.p-invalid {
        border-color: dt('textarea.invalid.border.color');
    }

    .p-textarea.p-variant-filled {
        background: dt('textarea.filled.background');
    }

    .p-textarea.p-variant-filled:enabled:hover {
        background: dt('textarea.filled.hover.background');
    }

    .p-textarea.p-variant-filled:enabled:focus {
        background: dt('textarea.filled.focus.background');
    }

    .p-textarea:disabled {
        opacity: 1;
        background: dt('textarea.disabled.background');
        color: dt('textarea.disabled.color');
    }

    .p-textarea::placeholder {
        color: dt('textarea.placeholder.color');
    }

    .p-textarea.p-invalid::placeholder {
        color: dt('textarea.invalid.placeholder.color');
    }

    .p-textarea-fluid {
        width: 100%;
    }

    .p-textarea-resizable {
        overflow: hidden;
        resize: none;
    }

    .p-textarea-sm {
        font-size: dt('textarea.sm.font.size');
        padding-block: dt('textarea.sm.padding.y');
        padding-inline: dt('textarea.sm.padding.x');
    }

    .p-textarea-lg {
        font-size: dt('textarea.lg.font.size');
        padding-block: dt('textarea.lg.padding.y');
        padding-inline: dt('textarea.lg.padding.x');
    }
`;var de=`
    ${te}

    /* For PrimeNG */
    .p-textarea.ng-invalid.ng-dirty {
        border-color: dt('textarea.invalid.border.color');
    }
    .p-textarea.ng-invalid.ng-dirty::placeholder {
        color: dt('textarea.invalid.placeholder.color');
    }
`,pe={root:({instance:t})=>["p-textarea p-component",{"p-filled":t.$filled(),"p-textarea-resizable ":t.autoResize,"p-variant-filled":t.$variant()==="filled","p-textarea-fluid":t.hasFluid,"p-inputfield-sm p-textarea-sm":t.pSize==="small","p-textarea-lg p-inputfield-lg":t.pSize==="large","p-invalid":t.invalid()}]},ne=(()=>{class t extends ${name="textarea";style=de;classes=pe;static \u0275fac=(()=>{let e;return function(l){return(e||(e=E(t)))(l||t)}})();static \u0275prov=S({token:t,factory:t.\u0275fac})}return t})();var ie=new M("TEXTAREA_INSTANCE"),oe=(()=>{class t extends Q{bindDirectiveInstance=u(C,{self:!0});$pcTextarea=u(ie,{optional:!0,skipSelf:!0})??void 0;autoResize;pSize;variant=h();fluid=h(void 0,{transform:v});invalid=h(void 0,{transform:v});$variant=B(()=>this.variant()||this.config.inputStyle()||this.config.inputVariant());onResize=new z;ngControlSubscription;_componentStyle=u(ne);ngControl=u(b,{optional:!0,self:!0});pcFluid=u(X,{optional:!0,host:!0,skipSelf:!0});get hasFluid(){return this.fluid()??!!this.pcFluid}onInit(){this.ngControl&&(this.ngControlSubscription=this.ngControl.valueChanges.subscribe(()=>{this.updateState()}))}onAfterViewInit(){this.autoResize&&this.resize(),this.cd.detectChanges()}onAfterViewChecked(){this.bindDirectiveInstance.setAttrs(this.ptms(["host","root"])),this.autoResize&&this.resize(),this.writeModelValue(this.ngControl?.value??this.el.nativeElement.value)}onInput(e){this.writeModelValue(e.target?.value),this.updateState()}resize(e){this.el.nativeElement.style.height="auto",this.el.nativeElement.style.height=this.el.nativeElement.scrollHeight+"px",parseFloat(this.el.nativeElement.style.height)>=parseFloat(this.el.nativeElement.style.maxHeight)?(this.el.nativeElement.style.overflowY="scroll",this.el.nativeElement.style.height=this.el.nativeElement.style.maxHeight):this.el.nativeElement.style.overflow="hidden",this.onResize.emit(e||{})}updateState(){this.autoResize&&this.resize()}onDestroy(){this.ngControlSubscription&&this.ngControlSubscription.unsubscribe()}static \u0275fac=(()=>{let e;return function(l){return(e||(e=E(t)))(l||t)}})();static \u0275dir=R({type:t,selectors:[["","pTextarea",""],["","pInputTextarea",""]],hostVars:2,hostBindings:function(i,l){i&1&&m("input",function(le){return l.onInput(le)}),i&2&&V(l.cx("root"))},inputs:{autoResize:[2,"autoResize","autoResize",v],pSize:"pSize",variant:[1,"variant"],fluid:[1,"fluid"],invalid:[1,"invalid"]},outputs:{onResize:"onResize"},features:[L([ne,{provide:ie,useExisting:t},{provide:P,useExisting:t}]),U([C]),N]})}return t})(),ae=(()=>{class t{static \u0275fac=function(i){return new(i||t)};static \u0275mod=k({type:t});static \u0275inj=A({})}return t})();function ue(t,n){if(t&1){let e=I();a(0,"label",3),c(1),r(),a(2,"textarea",4),m("input",function(l){_(e);let x=s();return y(x.onInput(l))}),r()}if(t&2){let e=s();o(),w(e.label),o(),f("id",e.label)("readonly",e.readonly)("rows",e.rows)("formControl",e.formControl)("UpperCase",e.upperCase),T("maxlength",e.maxlength||null)("minlength",e.minlength||null)}}function me(t,n){if(t&1){let e=I();a(0,"p-floatLabel",1)(1,"textarea",4),m("input",function(l){_(e);let x=s();return y(x.onInput(l))}),r(),a(2,"label"),c(3),r()()}if(t&2){let e=s();o(),f("id",e.label)("readonly",e.readonly)("rows",e.rows)("formControl",e.formControl)("UpperCase",e.upperCase),T("maxlength",e.maxlength||null)("minlength",e.minlength||null),o(2),w(e.label)}}function xe(t,n){if(t&1&&(a(0,"small",2),c(1),r()),t&2){let e=s();o(),H(" ",(e.formControl.value==null?null:e.formControl.value.length)||0," / ",e.maxlength," ")}}function fe(t,n){if(t&1&&(a(0,"small",5),c(1),r()),t&2){let e=s(2);o(),g(" Este campo debe tener como m\xE1ximo ",e.maxlength," caracteres ")}}function ge(t,n){if(t&1&&(a(0,"small",5),c(1),r()),t&2){let e=s(2);o(),g(" Este campo debe tener como m\xEDnimo ",e.minlength," caracteres ")}}function he(t,n){t&1&&(a(0,"small",5),c(1," Este campo es obligatorio "),r())}function ve(t,n){if(t&1&&(a(0,"small",5),c(1),r()),t&2){let e=s(2);o(),g(" ",e.patternErrorMessage," ")}}function Ce(t,n){if(t&1&&(d(0,fe,2,1,"small",5),d(1,ge,2,1,"small",5),d(2,he,2,0,"small",5),d(3,ve,2,1,"small",5)),t&2){let e=s();p(e.formControl.hasError("maxlength")?0:-1),o(),p(e.formControl.hasError("minlength")?1:-1),o(),p(e.formControl.hasError("required")?2:-1),o(),p(e.formControl.hasError("pattern")?3:-1)}}var re=class t{constructor(n){this.ngControl=n;this.ngControl&&(this.ngControl.valueAccessor=this)}label="";readonly=!1;maxlength=0;minlength=0;rows=4;classInput="";expReg=RegExp("");patternErrorMessage="";upperCase=!0;useExternalLabel=!1;formControl;ngOnInit(){this.formControl=this.ngControl.control}onChange=n=>{};onTouched=()=>{};disabled=!1;writeValue(n){}registerOnChange(n){this.onChange=n}registerOnTouched(n){this.onTouched=n}setDisabledState(n){this.disabled=n}onInput(n){if(!this.expReg)return;let i=n.target.value.replace(new RegExp(this.expReg,"g"),"");this.formControl.setValue(i,{emitEvent:!1})}static \u0275fac=function(e){return new(e||t)(F(b,2))};static \u0275cmp=D({type:t,selectors:[["ui-text-area"]],inputs:{label:"label",readonly:"readonly",maxlength:"maxlength",minlength:"minlength",rows:"rows",classInput:"classInput",expReg:"expReg",patternErrorMessage:"patternErrorMessage",upperCase:"upperCase",useExternalLabel:"useExternalLabel"},decls:5,vars:4,consts:[[1,"ui-text-area","w-full",3,"ngClass"],["variant","on",1,"w-full"],[1,"block","text-right","text-500"],[1,"block","text-sm","font-medium","mb-2"],["pInputTextarea","","autocomplete","off",1,"w-full",3,"input","id","readonly","rows","formControl","UpperCase"],[1,"block","text-red-500"]],template:function(e,i){e&1&&(a(0,"div",0),d(1,ue,3,8)(2,me,4,8,"p-floatLabel",1),d(3,xe,2,2,"small",2),d(4,Ce,4,4),r()),e&2&&(f("ngClass",i.classInput),o(),p(i.useExternalLabel?1:2),o(2),p(i.maxlength?3:-1),o(),p(i.formControl.touched&&i.formControl.invalid?4:-1))},dependencies:[O,j,Z,W,J,q,G,K,Y,ae,oe,ee],styles:["[_nghost-%COMP%]{display:block}"]})};export{ae as a,re as b};
