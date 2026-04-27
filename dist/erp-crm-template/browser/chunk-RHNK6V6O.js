import{a as Ue,c as At}from"./chunk-LWXG3GLL.js";import{a as Te,b as Ee}from"./chunk-SAYTZEJP.js";import{a as pi}from"./chunk-JAW6ZTW6.js";import{b as di,c as ui}from"./chunk-QWJ6ECPK.js";import"./chunk-2H36JF7Z.js";import{a as he,b as nt}from"./chunk-G6E2HTOK.js";import{a as it,b as Ie,c as ge}from"./chunk-HVV3ROQX.js";import{b as li,c as ci}from"./chunk-YRHXVIV6.js";import"./chunk-I3IMWPAG.js";import{a as et,b as tt}from"./chunk-22A4ZKHU.js";import{a as Vt,f as ni,g as oi,j as ri,k as ai,l as si}from"./chunk-LTAP3XSE.js";import{a as Xt,b as ei,c as ti,d as ii}from"./chunk-US5QENIB.js";import"./chunk-IQUQDJTW.js";import{$ as se,$a as M,$d as I,Ab as _e,Ac as It,Ae as Se,Bb as fe,Bc as re,Bd as _t,Be as Qt,Cb as Dt,Ce as jt,Db as ve,Dd as Le,De as vt,Ea as D,Eb as _,Ec as Tt,Ed as ce,Ee as Je,Fa as Ct,Fb as h,Fc as A,Fd as we,Fe as Gt,Gb as H,Hb as q,Hd as ft,He as Kt,Ib as Re,Ie as $t,Ja as Oe,Jb as Q,Je as Wt,Kb as j,Kd as Et,Ke as Ut,Lb as G,Le as De,Me as Zt,N as Ne,Nb as Y,Ne as Yt,O as z,Oa as P,Ob as Ve,Oe as Xe,P as ie,Pa as ne,Pb as F,Pd as kt,Pe as Jt,Qa as St,Qb as Qe,Qd as Pt,R as W,Ra as U,Rb as mt,Rd as Ot,Sa as Z,Sd as Mt,T as w,Ta as g,Td as Rt,Ud as ae,Vd as N,Wb as gt,Wd as xe,Xd as X,Z as u,Za as T,Zb as ht,Zd as ee,_ as m,_a as O,_b as k,_d as Ce,ab as Be,ae as $e,bc as be,cb as ze,ce as We,db as He,de as Lt,eb as l,ec as je,fb as d,fc as ue,ga as pe,gb as p,hb as f,ka as B,kc as x,lb as R,lc as K,ld as Ke,le as Ze,mb as V,md as le,me as Ft,nb as L,ne as Nt,ob as C,oe as Bt,pe as zt,qb as v,rb as c,sb as qe,tb as Me,te as me,ub as S,vb as oe,wa as xt,wb as b,wc as Ge,we as Ye,xb as y,xe as Ht,yc as ye,ye as de,za as s,zc as J,ze as qt}from"./chunk-7QN3DWYU.js";var mi=`
    .p-chip {
        display: inline-flex;
        align-items: center;
        background: dt('chip.background');
        color: dt('chip.color');
        border-radius: dt('chip.border.radius');
        padding-block: dt('chip.padding.y');
        padding-inline: dt('chip.padding.x');
        gap: dt('chip.gap');
    }

    .p-chip-icon {
        color: dt('chip.icon.color');
        font-size: dt('chip.icon.font.size');
        width: dt('chip.icon.size');
        height: dt('chip.icon.size');
    }

    .p-chip-image {
        border-radius: 50%;
        width: dt('chip.image.width');
        height: dt('chip.image.height');
        margin-inline-start: calc(-1 * dt('chip.padding.y'));
    }

    .p-chip:has(.p-chip-remove-icon) {
        padding-inline-end: dt('chip.padding.y');
    }

    .p-chip:has(.p-chip-image) {
        padding-block-start: calc(dt('chip.padding.y') / 2);
        padding-block-end: calc(dt('chip.padding.y') / 2);
    }

    .p-chip-remove-icon {
        cursor: pointer;
        font-size: dt('chip.remove.icon.size');
        width: dt('chip.remove.icon.size');
        height: dt('chip.remove.icon.size');
        color: dt('chip.remove.icon.color');
        border-radius: 50%;
        transition:
            outline-color dt('chip.transition.duration'),
            box-shadow dt('chip.transition.duration');
        outline-color: transparent;
    }

    .p-chip-remove-icon:focus-visible {
        box-shadow: dt('chip.remove.icon.focus.ring.shadow');
        outline: dt('chip.remove.icon.focus.ring.width') dt('chip.remove.icon.focus.ring.style') dt('chip.remove.icon.focus.ring.color');
        outline-offset: dt('chip.remove.icon.focus.ring.offset');
    }
`;var $i=["removeicon"],Wi=["*"];function Ui(t,o){if(t&1){let e=C();d(0,"img",4),v("error",function(i){u(e);let r=c();return m(r.imageError(i))}),p()}if(t&2){let e=c();_(e.cx("image")),l("pBind",e.ptm("image"))("src",e.image,xt)("alt",e.alt)}}function Zi(t,o){if(t&1&&f(0,"span",6),t&2){let e=c(2);_(e.icon),l("pBind",e.ptm("icon"))("ngClass",e.cx("icon"))}}function Yi(t,o){if(t&1&&g(0,Zi,1,4,"span",5),t&2){let e=c();l("ngIf",e.icon)}}function Ji(t,o){if(t&1&&(d(0,"div",7),h(1),p()),t&2){let e=c();_(e.cx("label")),l("pBind",e.ptm("label")),s(),H(e.label)}}function Xi(t,o){if(t&1){let e=C();d(0,"span",11),v("click",function(i){u(e);let r=c(3);return m(r.close(i))})("keydown",function(i){u(e);let r=c(3);return m(r.onKeydown(i))}),p()}if(t&2){let e=c(3);_(e.removeIcon),l("pBind",e.ptm("removeIcon"))("ngClass",e.cx("removeIcon")),T("tabindex",e.disabled?-1:0)("aria-label",e.removeAriaLabel)}}function en(t,o){if(t&1){let e=C();se(),d(0,"svg",12),v("click",function(i){u(e);let r=c(3);return m(r.close(i))})("keydown",function(i){u(e);let r=c(3);return m(r.onKeydown(i))}),p()}if(t&2){let e=c(3);_(e.cx("removeIcon")),l("pBind",e.ptm("removeIcon")),T("tabindex",e.disabled?-1:0)("aria-label",e.removeAriaLabel)}}function tn(t,o){if(t&1&&(R(0),g(1,Xi,1,6,"span",9)(2,en,1,5,"svg",10),V()),t&2){let e=c(2);s(),l("ngIf",e.removeIcon),s(),l("ngIf",!e.removeIcon)}}function nn(t,o){}function on(t,o){t&1&&g(0,nn,0,0,"ng-template")}function rn(t,o){if(t&1){let e=C();d(0,"span",13),v("click",function(i){u(e);let r=c(2);return m(r.close(i))})("keydown",function(i){u(e);let r=c(2);return m(r.onKeydown(i))}),g(1,on,1,0,null,14),p()}if(t&2){let e=c(2);_(e.cx("removeIcon")),l("pBind",e.ptm("removeIcon")),T("tabindex",e.disabled?-1:0)("aria-label",e.removeAriaLabel),s(),l("ngTemplateOutlet",e.removeIconTemplate||e._removeIconTemplate)}}function an(t,o){if(t&1&&(R(0),g(1,tn,3,2,"ng-container",3)(2,rn,2,6,"span",8),V()),t&2){let e=c();s(),l("ngIf",!e.removeIconTemplate&&!e._removeIconTemplate),s(),l("ngIf",e.removeIconTemplate||e._removeIconTemplate)}}var sn={root:({instance:t})=>["p-chip p-component",{"p-disabled":t.disabled}],image:"p-chip-image",icon:"p-chip-icon",label:"p-chip-label",removeIcon:"p-chip-remove-icon"},gi=(()=>{class t extends X{name="chip";style=mi;classes=sn;static \u0275fac=(()=>{let e;return function(i){return(e||(e=B(t)))(i||t)}})();static \u0275prov=z({token:t,factory:t.\u0275fac})}return t})();var hi=new W("CHIP_INSTANCE"),_i=(()=>{class t extends Ce{$pcChip=w(hi,{optional:!0,skipSelf:!0})??void 0;bindDirectiveInstance=w(I,{self:!0});onAfterViewChecked(){this.bindDirectiveInstance.setAttrs(this.ptms(["host","root"]))}label;icon;image;alt;styleClass;disabled=!1;removable=!1;removeIcon;onRemove=new D;onImageError=new D;visible=!0;get removeAriaLabel(){return this.config.getTranslation(xe.ARIA).removeLabel}get chipProps(){return this._chipProps}set chipProps(e){this._chipProps=e,e&&typeof e=="object"&&Object.entries(e).forEach(([n,i])=>this[`_${n}`]!==i&&(this[`_${n}`]=i))}_chipProps;_componentStyle=w(gi);removeIconTemplate;templates;_removeIconTemplate;onAfterContentInit(){this.templates.forEach(e=>{switch(e.getType()){case"removeicon":this._removeIconTemplate=e.template;break;default:this._removeIconTemplate=e.template;break}})}onChanges(e){if(e.chipProps&&e.chipProps.currentValue){let{currentValue:n}=e.chipProps;n.label!==void 0&&(this.label=n.label),n.icon!==void 0&&(this.icon=n.icon),n.image!==void 0&&(this.image=n.image),n.alt!==void 0&&(this.alt=n.alt),n.styleClass!==void 0&&(this.styleClass=n.styleClass),n.removable!==void 0&&(this.removable=n.removable),n.removeIcon!==void 0&&(this.removeIcon=n.removeIcon)}}close(e){this.visible=!1,this.onRemove.emit(e)}onKeydown(e){(e.key==="Enter"||e.key==="Backspace")&&this.close(e)}imageError(e){this.onImageError.emit(e)}static \u0275fac=(()=>{let e;return function(i){return(e||(e=B(t)))(i||t)}})();static \u0275cmp=P({type:t,selectors:[["p-chip"]],contentQueries:function(n,i,r){if(n&1&&(S(r,$i,4),S(r,ae,4)),n&2){let a;b(a=y())&&(i.removeIconTemplate=a.first),b(a=y())&&(i.templates=a)}},hostVars:5,hostBindings:function(n,i){n&2&&(T("aria-label",i.label),_(i.cn(i.cx("root"),i.styleClass)),fe("display",!i.visible&&"none"))},inputs:{label:"label",icon:"icon",image:"image",alt:"alt",styleClass:"styleClass",disabled:[2,"disabled","disabled",x],removable:[2,"removable","removable",x],removeIcon:"removeIcon",chipProps:"chipProps"},outputs:{onRemove:"onRemove",onImageError:"onImageError"},features:[Y([gi,{provide:hi,useExisting:t},{provide:ee,useExisting:t}]),Z([I]),U],ngContentSelectors:Wi,decls:6,vars:4,consts:[["iconTemplate",""],[3,"pBind","class","src","alt","error",4,"ngIf","ngIfElse"],[3,"pBind","class",4,"ngIf"],[4,"ngIf"],[3,"error","pBind","src","alt"],[3,"pBind","class","ngClass",4,"ngIf"],[3,"pBind","ngClass"],[3,"pBind"],["role","button",3,"pBind","class","click","keydown",4,"ngIf"],["role","button",3,"pBind","class","ngClass","click","keydown",4,"ngIf"],["data-p-icon","times-circle","role","button",3,"pBind","class","click","keydown",4,"ngIf"],["role","button",3,"click","keydown","pBind","ngClass"],["data-p-icon","times-circle","role","button",3,"click","keydown","pBind"],["role","button",3,"click","keydown","pBind"],[4,"ngTemplateOutlet"]],template:function(n,i){if(n&1&&(qe(),Me(0),g(1,Ui,1,5,"img",1)(2,Yi,1,1,"ng-template",null,0,k)(4,Ji,2,4,"div",2)(5,an,3,2,"ng-container",3)),n&2){let r=_e(3);s(),l("ngIf",i.image)("ngIfElse",r),s(3),l("ngIf",i.label),s(),l("ngIf",i.removable)}},dependencies:[A,Ge,J,re,Ue,N,I],encapsulation:2,changeDetection:0})}return t})();var fi=`
    .p-autocomplete {
        display: inline-flex;
    }

    .p-autocomplete-loader {
        position: absolute;
        top: 50%;
        margin-top: -0.5rem;
        inset-inline-end: dt('autocomplete.padding.x');
    }

    .p-autocomplete:has(.p-autocomplete-dropdown) .p-autocomplete-loader {
        inset-inline-end: calc(dt('autocomplete.dropdown.width') + dt('autocomplete.padding.x'));
    }

    .p-autocomplete:has(.p-autocomplete-dropdown) .p-autocomplete-input {
        flex: 1 1 auto;
        width: 1%;
    }

    .p-autocomplete:has(.p-autocomplete-dropdown) .p-autocomplete-input,
    .p-autocomplete:has(.p-autocomplete-dropdown) .p-autocomplete-input-multiple {
        border-start-end-radius: 0;
        border-end-end-radius: 0;
    }

    .p-autocomplete-dropdown {
        cursor: pointer;
        display: inline-flex;
        user-select: none;
        align-items: center;
        justify-content: center;
        overflow: hidden;
        position: relative;
        width: dt('autocomplete.dropdown.width');
        border-start-end-radius: dt('autocomplete.dropdown.border.radius');
        border-end-end-radius: dt('autocomplete.dropdown.border.radius');
        background: dt('autocomplete.dropdown.background');
        border: 1px solid dt('autocomplete.dropdown.border.color');
        border-inline-start: 0 none;
        color: dt('autocomplete.dropdown.color');
        transition:
            background dt('autocomplete.transition.duration'),
            color dt('autocomplete.transition.duration'),
            border-color dt('autocomplete.transition.duration'),
            outline-color dt('autocomplete.transition.duration'),
            box-shadow dt('autocomplete.transition.duration');
        outline-color: transparent;
    }

    .p-autocomplete-dropdown:not(:disabled):hover {
        background: dt('autocomplete.dropdown.hover.background');
        border-color: dt('autocomplete.dropdown.hover.border.color');
        color: dt('autocomplete.dropdown.hover.color');
    }

    .p-autocomplete-dropdown:not(:disabled):active {
        background: dt('autocomplete.dropdown.active.background');
        border-color: dt('autocomplete.dropdown.active.border.color');
        color: dt('autocomplete.dropdown.active.color');
    }

    .p-autocomplete-dropdown:focus-visible {
        box-shadow: dt('autocomplete.dropdown.focus.ring.shadow');
        outline: dt('autocomplete.dropdown.focus.ring.width') dt('autocomplete.dropdown.focus.ring.style') dt('autocomplete.dropdown.focus.ring.color');
        outline-offset: dt('autocomplete.dropdown.focus.ring.offset');
    }

    .p-autocomplete-overlay {
        position: absolute;
        top: 0;
        left: 0;
        background: dt('autocomplete.overlay.background');
        color: dt('autocomplete.overlay.color');
        border: 1px solid dt('autocomplete.overlay.border.color');
        border-radius: dt('autocomplete.overlay.border.radius');
        box-shadow: dt('autocomplete.overlay.shadow');
        min-width: 100%;
    }

    .p-autocomplete-list-container {
        overflow: auto;
    }

    .p-autocomplete-list {
        margin: 0;
        list-style-type: none;
        display: flex;
        flex-direction: column;
        gap: dt('autocomplete.list.gap');
        padding: dt('autocomplete.list.padding');
    }

    .p-autocomplete-option {
        cursor: pointer;
        white-space: nowrap;
        position: relative;
        overflow: hidden;
        display: flex;
        align-items: center;
        padding: dt('autocomplete.option.padding');
        border: 0 none;
        color: dt('autocomplete.option.color');
        background: transparent;
        transition:
            background dt('autocomplete.transition.duration'),
            color dt('autocomplete.transition.duration'),
            border-color dt('autocomplete.transition.duration');
        border-radius: dt('autocomplete.option.border.radius');
    }

    .p-autocomplete-option:not(.p-autocomplete-option-selected):not(.p-disabled).p-focus {
        background: dt('autocomplete.option.focus.background');
        color: dt('autocomplete.option.focus.color');
    }

    .p-autocomplete-option-selected {
        background: dt('autocomplete.option.selected.background');
        color: dt('autocomplete.option.selected.color');
    }

    .p-autocomplete-option-selected.p-focus {
        background: dt('autocomplete.option.selected.focus.background');
        color: dt('autocomplete.option.selected.focus.color');
    }

    .p-autocomplete-option-group {
        margin: 0;
        padding: dt('autocomplete.option.group.padding');
        color: dt('autocomplete.option.group.color');
        background: dt('autocomplete.option.group.background');
        font-weight: dt('autocomplete.option.group.font.weight');
    }

    .p-autocomplete-input-multiple {
        margin: 0;
        list-style-type: none;
        cursor: text;
        overflow: hidden;
        display: flex;
        align-items: center;
        flex-wrap: wrap;
        padding: calc(dt('autocomplete.padding.y') / 2) dt('autocomplete.padding.x');
        gap: calc(dt('autocomplete.padding.y') / 2);
        color: dt('autocomplete.color');
        background: dt('autocomplete.background');
        border: 1px solid dt('autocomplete.border.color');
        border-radius: dt('autocomplete.border.radius');
        width: 100%;
        transition:
            background dt('autocomplete.transition.duration'),
            color dt('autocomplete.transition.duration'),
            border-color dt('autocomplete.transition.duration'),
            outline-color dt('autocomplete.transition.duration'),
            box-shadow dt('autocomplete.transition.duration');
        outline-color: transparent;
        box-shadow: dt('autocomplete.shadow');
    }

    .p-autocomplete-input-multiple.p-disabled {
        opacity: 1;
        background: dt('inputtext.disabled.background');
        color: dt('inputtext.disabled.color');
    }

    .p-autocomplete-input-multiple:not(.p-disabled):hover {
        border-color: dt('autocomplete.hover.border.color');
    }

    .p-autocomplete.p-focus .p-autocomplete-input-multiple:not(.p-disabled) {
        border-color: dt('autocomplete.focus.border.color');
        box-shadow: dt('autocomplete.focus.ring.shadow');
        outline: dt('autocomplete.focus.ring.width') dt('autocomplete.focus.ring.style') dt('autocomplete.focus.ring.color');
        outline-offset: dt('autocomplete.focus.ring.offset');
    }

    .p-autocomplete.p-invalid .p-autocomplete-input-multiple {
        border-color: dt('autocomplete.invalid.border.color');
    }

    .p-variant-filled.p-autocomplete-input-multiple {
        background: dt('autocomplete.filled.background');
    }

    .p-autocomplete-input-multiple.p-variant-filled:not(.p-disabled):hover {
        background: dt('autocomplete.filled.hover.background');
    }

    .p-autocomplete.p-focus .p-autocomplete-input-multiple.p-variant-filled:not(.p-disabled) {
        background: dt('autocomplete.filled.focus.background');
    }

    .p-autocomplete-chip.p-chip {
        padding-block-start: calc(dt('autocomplete.padding.y') / 2);
        padding-block-end: calc(dt('autocomplete.padding.y') / 2);
        border-radius: dt('autocomplete.chip.border.radius');
    }

    .p-autocomplete-input-multiple:has(.p-autocomplete-chip) {
        padding-inline-start: calc(dt('autocomplete.padding.y') / 2);
        padding-inline-end: calc(dt('autocomplete.padding.y') / 2);
    }

    .p-autocomplete-chip-item.p-focus .p-autocomplete-chip {
        background: dt('autocomplete.chip.focus.background');
        color: dt('autocomplete.chip.focus.color');
    }

    .p-autocomplete-input-chip {
        flex: 1 1 auto;
        display: inline-flex;
        padding-block-start: calc(dt('autocomplete.padding.y') / 2);
        padding-block-end: calc(dt('autocomplete.padding.y') / 2);
    }

    .p-autocomplete-input-chip input {
        border: 0 none;
        outline: 0 none;
        background: transparent;
        margin: 0;
        padding: 0;
        box-shadow: none;
        border-radius: 0;
        width: 100%;
        font-family: inherit;
        font-feature-settings: inherit;
        font-size: 1rem;
        color: inherit;
    }

    .p-autocomplete-input-chip input::placeholder {
        color: dt('autocomplete.placeholder.color');
    }

    .p-autocomplete.p-invalid .p-autocomplete-input-chip input::placeholder {
        color: dt('autocomplete.invalid.placeholder.color');
    }

    .p-autocomplete-empty-message {
        padding: dt('autocomplete.empty.message.padding');
    }

    .p-autocomplete-fluid {
        display: flex;
    }

    .p-autocomplete-fluid:has(.p-autocomplete-dropdown) .p-autocomplete-input {
        width: 1%;
    }

    .p-autocomplete:has(.p-inputtext-sm) .p-autocomplete-dropdown {
        width: dt('autocomplete.dropdown.sm.width');
    }

    .p-autocomplete:has(.p-inputtext-sm) .p-autocomplete-dropdown .p-icon {
        font-size: dt('form.field.sm.font.size');
        width: dt('form.field.sm.font.size');
        height: dt('form.field.sm.font.size');
    }

    .p-autocomplete:has(.p-inputtext-lg) .p-autocomplete-dropdown {
        width: dt('autocomplete.dropdown.lg.width');
    }

    .p-autocomplete:has(.p-inputtext-lg) .p-autocomplete-dropdown .p-icon {
        font-size: dt('form.field.lg.font.size');
        width: dt('form.field.lg.font.size');
        height: dt('form.field.lg.font.size');
    }

    .p-autocomplete-clear-icon {
        position: absolute;
        top: 50%;
        margin-top: -0.5rem;
        cursor: pointer;
        color: dt('form.field.icon.color');
        inset-inline-end: dt('autocomplete.padding.x');
    }

    .p-autocomplete:has(.p-autocomplete-dropdown) .p-autocomplete-clear-icon {
        inset-inline-end: calc(dt('autocomplete.padding.x') + dt('autocomplete.dropdown.width'));
    }

    .p-autocomplete:has(.p-autocomplete-clear-icon) .p-autocomplete-input {
        padding-inline-end: calc((dt('form.field.padding.x') * 2) + dt('icon.size'));
    }

    .p-inputgroup .p-autocomplete-dropdown {
        border-radius: 0;
    }

    .p-inputgroup > .p-autocomplete:last-child:has(.p-autocomplete-dropdown) > .p-autocomplete-input {
        border-start-end-radius: 0;
        border-end-end-radius: 0;
    }

    .p-inputgroup > .p-autocomplete:last-child .p-autocomplete-dropdown {
        border-start-end-radius: dt('autocomplete.dropdown.border.radius');
        border-end-end-radius: dt('autocomplete.dropdown.border.radius');
    }
`;var ln=["item"],cn=["empty"],dn=["header"],pn=["footer"],un=["selecteditem"],mn=["group"],gn=["loader"],hn=["removeicon"],_n=["loadingicon"],fn=["clearicon"],vn=["dropdownicon"],bn=["focusInput"],yn=["multiIn"],wn=["multiContainer"],xn=["ddBtn"],Cn=["items"],Sn=["scroller"],Dn=["overlay"],In=t=>({i:t}),wi=t=>({$implicit:t}),Tn=(t,o,e)=>({removeCallback:t,index:o,class:e}),ot=t=>({height:t}),xi=(t,o)=>({$implicit:t,options:o}),En=t=>({options:t}),kn=()=>({}),Pn=(t,o,e)=>({option:t,i:o,scrollerOptions:e}),On=(t,o)=>({$implicit:t,index:o});function Mn(t,o){if(t&1){let e=C();d(0,"input",18,2),v("input",function(i){u(e);let r=c();return m(r.onInput(i))})("keydown",function(i){u(e);let r=c();return m(r.onKeyDown(i))})("change",function(i){u(e);let r=c();return m(r.onInputChange(i))})("focus",function(i){u(e);let r=c();return m(r.onInputFocus(i))})("blur",function(i){u(e);let r=c();return m(r.onInputBlur(i))})("paste",function(i){u(e);let r=c();return m(r.onInputPaste(i))})("keyup",function(i){u(e);let r=c();return m(r.onInputKeyUp(i))}),p()}if(t&2){let e=c();_(e.cn(e.cx("pcInputText"),e.inputStyleClass)),l("pAutoFocus",e.autofocus)("pt",e.ptm("pcInputText"))("ngStyle",e.inputStyle)("variant",e.$variant())("invalid",e.invalid())("pSize",e.size())("fluid",e.hasFluid),T("type",e.type)("value",e.inputValue())("id",e.inputId)("autocomplete",e.autocomplete)("placeholder",e.placeholder)("name",e.name())("minlength",e.minlength())("min",e.min())("max",e.max())("pattern",e.pattern())("size",e.inputSize())("maxlength",e.maxlength())("tabindex",e.$disabled()?-1:e.tabindex)("required",e.required()?"":void 0)("readonly",e.readonly?"":void 0)("disabled",e.$disabled()?"":void 0)("aria-label",e.ariaLabel)("aria-labelledby",e.ariaLabelledBy)("aria-required",e.required())("aria-expanded",e.overlayVisible??!1)("aria-controls",e.overlayVisible?e.id+"_list":null)("aria-activedescendant",e.focused?e.focusedOptionId:void 0)}}function Rn(t,o){if(t&1){let e=C();se(),d(0,"svg",21),v("click",function(){u(e);let i=c(2);return m(i.clear())}),p()}if(t&2){let e=c(2);_(e.cx("clearIcon")),l("pBind",e.ptm("clearIcon")),T("aria-hidden",!0)}}function Vn(t,o){}function Ln(t,o){t&1&&g(0,Vn,0,0,"ng-template")}function An(t,o){if(t&1){let e=C();d(0,"span",22),v("click",function(){u(e);let i=c(2);return m(i.clear())}),g(1,Ln,1,0,null,23),p()}if(t&2){let e=c(2);_(e.cx("clearIcon")),l("pBind",e.ptm("clearIcon")),T("aria-hidden",!0),s(),l("ngTemplateOutlet",e.clearIconTemplate||e._clearIconTemplate)}}function Fn(t,o){if(t&1&&(R(0),g(1,Rn,1,4,"svg",19)(2,An,2,5,"span",20),V()),t&2){let e=c();s(),l("ngIf",!e.clearIconTemplate&&!e._clearIconTemplate),s(),l("ngIf",e.clearIconTemplate||e._clearIconTemplate)}}function Nn(t,o){t&1&&L(0)}function Bn(t,o){if(t&1){let e=C();d(0,"span",22),v("click",function(i){u(e);let r=c(2).index,a=c(2);return m(!a.readonly&&!a.$disabled()?a.removeOption(i,r):"")}),se(),f(1,"svg",31),p()}if(t&2){let e=c(4);_(e.cx("chipIcon")),l("pBind",e.ptm("chipIcon")),s(),_(e.cx("chipIcon")),T("aria-hidden",!0)}}function zn(t,o){}function Hn(t,o){t&1&&g(0,zn,0,0,"ng-template")}function qn(t,o){if(t&1&&(d(0,"span",32),g(1,Hn,1,0,null,29),p()),t&2){let e=c(2).index,n=c(2);l("pBind",n.ptm("chipIcon")),T("aria-hidden",!0),s(),l("ngTemplateOutlet",n.removeIconTemplate||n._removeIconTemplate)("ngTemplateOutletContext",mt(4,Tn,n.removeOption.bind(n),e,n.cx("chipIcon")))}}function Qn(t,o){if(t&1&&g(0,Bn,2,6,"span",20)(1,qn,2,8,"span",30),t&2){let e=c(3);l("ngIf",!e.removeIconTemplate&&!e._removeIconTemplate),s(),l("ngIf",e.removeIconTemplate||e._removeIconTemplate)}}function jn(t,o){if(t&1){let e=C();d(0,"li",26,5)(2,"p-chip",28),v("onRemove",function(i){let r=u(e).index,a=c(2);return m(a.readonly?"":a.removeOption(i,r))}),g(3,Nn,1,0,"ng-container",29)(4,Qn,2,2,"ng-template",null,6,k),p()()}if(t&2){let e=o.$implicit,n=o.index,i=c(2);_(i.cx("chipItem",F(16,In,n))),l("pBind",i.ptm("chipItem")),T("id",i.id+"_multiple_option_"+n)("aria-label",i.getOptionLabel(e))("aria-setsize",i.modelValue().length)("aria-posinset",n+1)("aria-selected",!0),s(2),_(i.cx("pcChip")),l("pt",i.ptm("pcChip"))("label",!i.selectedItemTemplate&&!i._selectedItemTemplate&&i.getOptionLabel(e))("disabled",i.$disabled())("removable",!0),s(),l("ngTemplateOutlet",i.selectedItemTemplate||i._selectedItemTemplate)("ngTemplateOutletContext",F(18,wi,e))}}function Gn(t,o){if(t&1){let e=C();d(0,"ul",24,3),v("focus",function(i){u(e);let r=c();return m(r.onMultipleContainerFocus(i))})("blur",function(i){u(e);let r=c();return m(r.onMultipleContainerBlur(i))})("keydown",function(i){u(e);let r=c();return m(r.onMultipleContainerKeyDown(i))}),g(2,jn,6,20,"li",25),d(3,"li",26)(4,"input",27,4),v("input",function(i){u(e);let r=c();return m(r.onInput(i))})("keydown",function(i){u(e);let r=c();return m(r.onKeyDown(i))})("change",function(i){u(e);let r=c();return m(r.onInputChange(i))})("focus",function(i){u(e);let r=c();return m(r.onInputFocus(i))})("blur",function(i){u(e);let r=c();return m(r.onInputBlur(i))})("paste",function(i){u(e);let r=c();return m(r.onInputPaste(i))})("keyup",function(i){u(e);let r=c();return m(r.onInputKeyUp(i))}),p()()()}if(t&2){let e=c();_(e.cx("inputMultiple")),l("pBind",e.ptm("inputMultiple"))("tabindex",-1),T("aria-orientation","horizontal")("aria-activedescendant",e.focused?e.focusedMultipleOptionId:void 0),s(2),l("ngForOf",e.modelValue()),s(),_(e.cx("inputChip")),l("pBind",e.ptm("inputChip")),s(),_(e.cx("pcInputText")),l("pAutoFocus",e.autofocus)("pBind",e.ptm("input"))("ngStyle",e.inputStyle),T("type",e.type)("id",e.inputId)("autocomplete",e.autocomplete)("name",e.name())("minlength",e.minlength())("maxlength",e.maxlength())("size",e.size())("min",e.min())("max",e.max())("pattern",e.pattern())("placeholder",e.$filled()?null:e.placeholder)("tabindex",e.$disabled()?-1:e.tabindex)("required",e.required()?"":void 0)("readonly",e.readonly?"":void 0)("disabled",e.$disabled()?"":void 0)("aria-label",e.ariaLabel)("aria-labelledby",e.ariaLabelledBy)("aria-required",e.required())("aria-expanded",e.overlayVisible??!1)("aria-controls",e.overlayVisible?e.id+"_list":null)("aria-activedescendant",e.focused?e.focusedOptionId:void 0)}}function Kn(t,o){if(t&1&&(se(),f(0,"svg",35)),t&2){let e=c(2);_(e.cx("loader")),l("pBind",e.ptm("loader"))("spin",!0),T("aria-hidden",!0)}}function $n(t,o){}function Wn(t,o){t&1&&g(0,$n,0,0,"ng-template")}function Un(t,o){if(t&1&&(d(0,"span",32),g(1,Wn,1,0,null,23),p()),t&2){let e=c(2);_(e.cx("loader")),l("pBind",e.ptm("loader")),T("aria-hidden",!0),s(),l("ngTemplateOutlet",e.loadingIconTemplate||e._loadingIconTemplate)}}function Zn(t,o){if(t&1&&(R(0),g(1,Kn,1,5,"svg",33)(2,Un,2,5,"span",34),V()),t&2){let e=c();s(),l("ngIf",!e.loadingIconTemplate&&!e._loadingIconTemplate),s(),l("ngIf",e.loadingIconTemplate||e._loadingIconTemplate)}}function Yn(t,o){if(t&1&&f(0,"span",38),t&2){let e=c(2);l("ngClass",e.dropdownIcon),T("aria-hidden",!0)}}function Jn(t,o){if(t&1&&(se(),f(0,"svg",40)),t&2){let e=c(3);l("pBind",e.ptm("dropdown"))}}function Xn(t,o){}function eo(t,o){t&1&&g(0,Xn,0,0,"ng-template")}function to(t,o){if(t&1&&(R(0),g(1,Jn,1,1,"svg",39)(2,eo,1,0,null,23),V()),t&2){let e=c(2);s(),l("ngIf",!e.dropdownIconTemplate&&!e._dropdownIconTemplate),s(),l("ngTemplateOutlet",e.dropdownIconTemplate||e._dropdownIconTemplate)}}function io(t,o){if(t&1){let e=C();d(0,"button",36,7),v("click",function(i){u(e);let r=c();return m(r.handleDropdownClick(i))}),g(2,Yn,1,2,"span",37)(3,to,3,2,"ng-container",14),p()}if(t&2){let e=c();_(e.cx("dropdown")),l("pBind",e.ptm("dropdown"))("disabled",e.$disabled()),T("aria-label",e.dropdownAriaLabel)("tabindex",e.tabindex),s(2),l("ngIf",e.dropdownIcon),s(),l("ngIf",!e.dropdownIcon)}}function no(t,o){t&1&&L(0)}function oo(t,o){t&1&&L(0)}function ro(t,o){if(t&1&&g(0,oo,1,0,"ng-container",29),t&2){let e=o.$implicit,n=o.options;c(2);let i=_e(6);l("ngTemplateOutlet",i)("ngTemplateOutletContext",Qe(2,xi,e,n))}}function ao(t,o){t&1&&L(0)}function so(t,o){if(t&1&&g(0,ao,1,0,"ng-container",29),t&2){let e=o.options,n=c(4);l("ngTemplateOutlet",n.loaderTemplate||n._loaderTemplate)("ngTemplateOutletContext",F(2,En,e))}}function lo(t,o){t&1&&(R(0),g(1,so,1,4,"ng-template",null,10,k),V())}function co(t,o){if(t&1){let e=C();d(0,"p-scroller",45,9),v("onLazyLoad",function(i){u(e);let r=c(2);return m(r.onLazyLoad.emit(i))}),g(2,ro,1,5,"ng-template",null,1,k)(4,lo,3,0,"ng-container",14),p()}if(t&2){let e=c(2);ve(F(9,ot,e.scrollHeight)),l("pt",e.ptm("virtualScroller"))("items",e.visibleOptions())("itemSize",e.virtualScrollItemSize)("autoSize",!0)("lazy",e.lazy)("options",e.virtualScrollOptions),s(4),l("ngIf",e.loaderTemplate||e._loaderTemplate)}}function po(t,o){t&1&&L(0)}function uo(t,o){if(t&1&&(R(0),g(1,po,1,0,"ng-container",29),V()),t&2){c();let e=_e(6),n=c();s(),l("ngTemplateOutlet",e)("ngTemplateOutletContext",Qe(3,xi,n.visibleOptions(),Ve(2,kn)))}}function mo(t,o){if(t&1&&(d(0,"span"),h(1),p()),t&2){let e=c(2).$implicit,n=c(3);s(),H(n.getOptionGroupLabel(e.optionGroup))}}function go(t,o){t&1&&L(0)}function ho(t,o){if(t&1&&(R(0),d(1,"li",49),g(2,mo,2,1,"span",14)(3,go,1,0,"ng-container",29),p(),V()),t&2){let e=c(),n=e.$implicit,i=e.index,r=c().options,a=c(2);s(),_(a.cx("optionGroup")),l("pBind",a.ptm("optionGroup"))("ngStyle",F(8,ot,r.itemSize+"px")),T("id",a.id+"_"+a.getOptionIndex(i,r)),s(),l("ngIf",!a.groupTemplate),s(),l("ngTemplateOutlet",a.groupTemplate)("ngTemplateOutletContext",F(10,wi,n.optionGroup))}}function _o(t,o){if(t&1&&(d(0,"span"),h(1),p()),t&2){let e=c(2).$implicit,n=c(3);s(),H(n.getOptionLabel(e))}}function fo(t,o){t&1&&L(0)}function vo(t,o){if(t&1){let e=C();R(0),d(1,"li",50),v("click",function(i){u(e);let r=c().$implicit,a=c(3);return m(a.onOptionSelect(i,r))})("mouseenter",function(i){u(e);let r=c().index,a=c().options,E=c(2);return m(E.onOptionMouseEnter(i,E.getOptionIndex(r,a)))}),g(2,_o,2,1,"span",14)(3,fo,1,0,"ng-container",29),p(),V()}if(t&2){let e=c(),n=e.$implicit,i=e.index,r=c().options,a=c(2);s(),_(a.cx("option",mt(14,Pn,n,i,r))),l("pBind",a.getPTOptions(n,r,i,"option"))("ngStyle",F(18,ot,r.itemSize+"px")),T("id",a.id+"_"+a.getOptionIndex(i,r))("aria-label",a.getOptionLabel(n))("aria-selected",a.isSelected(n))("aria-disabled",a.isOptionDisabled(n))("data-p-focused",a.focusedOptionIndex()===a.getOptionIndex(i,r))("aria-setsize",a.ariaSetSize)("aria-posinset",a.getAriaPosInset(a.getOptionIndex(i,r))),s(),l("ngIf",!a.itemTemplate&&!a._itemTemplate),s(),l("ngTemplateOutlet",a.itemTemplate||a._itemTemplate)("ngTemplateOutletContext",Qe(20,On,n,r.getOptions?r.getOptions(i):i))}}function bo(t,o){if(t&1&&g(0,ho,4,12,"ng-container",14)(1,vo,4,23,"ng-container",14),t&2){let e=o.$implicit,n=c(3);l("ngIf",n.isOptionGroup(e)),s(),l("ngIf",!n.isOptionGroup(e))}}function yo(t,o){if(t&1&&(R(0),h(1),V()),t&2){let e=c(4);s(),q(" ",e.searchResultMessageText," ")}}function wo(t,o){t&1&&L(0,null,12)}function xo(t,o){if(t&1&&(d(0,"li",49),g(1,yo,2,1,"ng-container",51)(2,wo,2,0,"ng-container",23),p()),t&2){let e=c().options,n=c(2);_(n.cx("emptyMessage")),l("pBind",n.ptm("emptyMessage"))("ngStyle",F(7,ot,e.itemSize+"px")),s(),l("ngIf",!n.emptyTemplate&&!n._emptyTemplate)("ngIfElse",n.empty),s(),l("ngTemplateOutlet",n.emptyTemplate||n._emptyTemplate)}}function Co(t,o){if(t&1&&(d(0,"ul",46,11),g(2,bo,2,2,"ng-template",47)(3,xo,3,9,"li",48),p()),t&2){let e=o.$implicit,n=o.options,i=c(2);ve(n.contentStyle),_(i.cn(i.cx("list"),n.contentStyleClass)),l("pBind",i.ptm("list")),T("id",i.id+"_list")("aria-label",i.listLabel),s(2),l("ngForOf",e),s(),l("ngIf",!e||e&&e.length===0&&i.showEmptyMessage)}}function So(t,o){t&1&&L(0)}function Do(t,o){if(t&1&&(d(0,"div",41),g(1,no,1,0,"ng-container",23),d(2,"div",42),g(3,co,5,11,"p-scroller",43)(4,uo,2,6,"ng-container",14),p(),g(5,Co,4,9,"ng-template",null,8,k)(7,So,1,0,"ng-container",23),p(),d(8,"span",44),h(9),p()),t&2){let e=c();_(e.cn(e.cx("overlay"),e.panelStyleClass)),l("pBind",e.ptm("overlay"))("ngStyle",e.panelStyle),s(),l("ngTemplateOutlet",e.headerTemplate||e._headerTemplate),s(),_(e.cx("listContainer")),fe("max-height",e.virtualScroll?"auto":e.scrollHeight),l("pBind",e.ptm("listContainer"))("tabindex",-1),s(),l("ngIf",e.virtualScroll),s(),l("ngIf",!e.virtualScroll),s(3),l("ngTemplateOutlet",e.footerTemplate||e._footerTemplate),s(2),q(" ",e.selectedMessageText," ")}}var Io=`
    ${fi}

    /* For PrimeNG */
    p-autoComplete.ng-invalid.ng-dirty .p-autocomplete-input,
    p-autoComplete.ng-invalid.ng-dirty .p-autocomplete-input-multiple,
    p-auto-complete.ng-invalid.ng-dirty .p-autocomplete-input,
    p-auto-complete.ng-invalid.ng-dirty .p-autocomplete-input-multiple p-autocomplete.ng-invalid.ng-dirty .p-autocomplete-input,
    p-autocomplete.ng-invalid.ng-dirty .p-autocomplete-input-multiple {
        border-color: dt('autocomplete.invalid.border.color');
    }

    p-autoComplete.ng-invalid.ng-dirty .p-autocomplete-input:enabled:focus,
    p-autoComplete.ng-invalid.ng-dirty:not(.p-disabled).p-focus .p-autocomplete-input-multiple,
    p-auto-complete.ng-invalid.ng-dirty .p-autocomplete-input:enabled:focus,
    p-auto-complete.ng-invalid.ng-dirty:not(.p-disabled).p-focus .p-autocomplete-input-multiple,
    p-autocomplete.ng-invalid.ng-dirty .p-autocomplete-input:enabled:focus,
    p-autocomplete.ng-invalid.ng-dirty:not(.p-disabled).p-focus .p-autocomplete-input-multiple {
        border-color: dt('autocomplete.focus.border.color');
    }

    p-autoComplete.ng-invalid.ng-dirty .p-autocomplete-input-chip input::placeholder,
    p-auto-complete.ng-invalid.ng-dirty .p-autocomplete-input-chip input::placeholder,
    p-autocomplete.ng-invalid.ng-dirty .p-autocomplete-input-chip input::placeholder {
        color: dt('autocomplete.invalid.placeholder.color');
    }

    p-autoComplete.ng-invalid.ng-dirty .p-autocomplete-input::placeholder,
    p-auto-complete.ng-invalid.ng-dirty .p-autocomplete-input::placeholder,
    p-autocomplete.ng-invalid.ng-dirty .p-autocomplete-input::placeholder {
        color: dt('autocomplete.invalid.placeholder.color');
    }
`,To={root:{position:"relative"}},Eo={root:({instance:t})=>["p-autocomplete p-component p-inputwrapper",{"p-invalid":t.invalid(),"p-focus":t.focused,"p-inputwrapper-filled":t.$filled(),"p-inputwrapper-focus":t.focused&&!t.$disabled()||t.autofocus||t.overlayVisible,"p-autocomplete-open":t.overlayVisible,"p-autocomplete-clearable":t.showClear&&!t.$disabled(),"p-autocomplete-fluid":t.hasFluid}],pcInputText:"p-autocomplete-input",inputMultiple:({instance:t})=>["p-autocomplete-input-multiple",{"p-disabled":t.$disabled(),"p-variant-filled":t.$variant()==="filled"}],chipItem:({instance:t,i:o})=>["p-autocomplete-chip-item",{"p-focus":t.focusedMultipleOptionIndex()===o}],pcChip:"p-autocomplete-chip",chipIcon:"p-autocomplete-chip-icon",inputChip:"p-autocomplete-input-chip",loader:"p-autocomplete-loader",dropdown:"p-autocomplete-dropdown",overlay:({instance:t})=>["p-autocomplete-overlay p-component-overlay p-component",{"p-input-filled":t.$variant()==="filled","p-ripple-disabled":t.config.ripple()===!1}],listContainer:"p-autocomplete-list-container",list:"p-autocomplete-list",optionGroup:"p-autocomplete-option-group",option:({instance:t,option:o,i:e,scrollerOptions:n})=>({"p-autocomplete-option":!0,"p-autocomplete-option-selected":t.isSelected(o),"p-focus":t.focusedOptionIndex()===t.getOptionIndex(e,n),"p-disabled":t.isOptionDisabled(o)}),emptyMessage:"p-autocomplete-empty-message",clearIcon:"p-autocomplete-clear-icon"},vi=(()=>{class t extends X{name="autocomplete";style=Io;classes=Eo;inlineStyles=To;static \u0275fac=(()=>{let e;return function(i){return(e||(e=B(t)))(i||t)}})();static \u0275prov=z({token:t,factory:t.\u0275fac})}return t})();var bi=new W("AUTOCOMPLETE_INSTANCE"),ko={provide:Ye,useExisting:Ne(()=>Pe),multi:!0},Pe=(()=>{class t extends ei{overlayService;zone;$pcAutoComplete=w(bi,{optional:!0,skipSelf:!0})??void 0;bindDirectiveInstance=w(I,{self:!0});minLength=1;minQueryLength;delay=300;panelStyle;styleClass;panelStyleClass;inputStyle;inputId;inputStyleClass;placeholder;readonly;scrollHeight="200px";lazy=!1;virtualScroll;virtualScrollItemSize;virtualScrollOptions;autoHighlight;forceSelection;type="text";autoZIndex=!0;baseZIndex=0;ariaLabel;dropdownAriaLabel;ariaLabelledBy;dropdownIcon;unique=!0;group;completeOnFocus=!1;showClear=!1;dropdown;showEmptyMessage=!0;dropdownMode="blank";multiple;addOnTab=!1;tabindex;dataKey;emptyMessage;showTransitionOptions=".12s cubic-bezier(0, 0, 0.2, 1)";hideTransitionOptions=".1s linear";autofocus;autocomplete="off";optionGroupChildren="items";optionGroupLabel="label";overlayOptions;get suggestions(){return this._suggestions()}set suggestions(e){this._suggestions.set(e),this.handleSuggestionsChange()}optionLabel;optionValue;id;searchMessage;emptySelectionMessage;selectionMessage;autoOptionFocus=!1;selectOnFocus;searchLocale;optionDisabled;focusOnHover=!0;typeahead=!0;addOnBlur=!1;separator;appendTo=ue(void 0);completeMethod=new D;onSelect=new D;onUnselect=new D;onAdd=new D;onFocus=new D;onBlur=new D;onDropdownClick=new D;onClear=new D;onInputKeydown=new D;onKeyUp=new D;onShow=new D;onHide=new D;onLazyLoad=new D;inputEL;multiInputEl;multiContainerEL;dropdownButton;itemsViewChild;scroller;overlayViewChild;itemsWrapper;itemTemplate;emptyTemplate;headerTemplate;footerTemplate;selectedItemTemplate;groupTemplate;loaderTemplate;removeIconTemplate;loadingIconTemplate;clearIconTemplate;dropdownIconTemplate;onHostClick(e){this.onContainerClick(e)}value;_suggestions=pe(null);timeout;overlayVisible;suggestionsUpdated;highlightOption;highlightOptionChanged;focused=!1;loading;scrollHandler;listId;searchTimeout;dirty=!1;_itemTemplate;_groupTemplate;_selectedItemTemplate;_headerTemplate;_emptyTemplate;_footerTemplate;_loaderTemplate;_removeIconTemplate;_loadingIconTemplate;_clearIconTemplate;_dropdownIconTemplate;focusedMultipleOptionIndex=pe(-1);focusedOptionIndex=pe(-1);_componentStyle=w(vi);$appendTo=be(()=>this.appendTo()||this.config.overlayAppendTo());visibleOptions=be(()=>this.group?this.flatOptions(this._suggestions()):this._suggestions()||[]);inputValue=be(()=>{let e=this.modelValue(),n=this.optionValueSelected?(this.suggestions||[]).find(i=>we(i,e,this.equalityKey())):e;if(Le(e))if(typeof e=="object"||this.optionValueSelected){let i=this.getOptionLabel(n);return i??e}else return e;else return""});get focusedMultipleOptionId(){return this.focusedMultipleOptionIndex()!==-1?`${this.id}_multiple_option_${this.focusedMultipleOptionIndex()}`:null}get focusedOptionId(){return this.focusedOptionIndex()!==-1?`${this.id}_${this.focusedOptionIndex()}`:null}get searchResultMessageText(){return Le(this.visibleOptions())&&this.overlayVisible?this.searchMessageText.replaceAll("{0}",this.visibleOptions().length):this.emptySearchMessageText}get searchMessageText(){return this.searchMessage||this.config.translation.searchMessage||""}get emptySearchMessageText(){return this.emptyMessage||this.config.translation.emptySearchMessage||""}get selectionMessageText(){return this.selectionMessage||this.config.translation.selectionMessage||""}get emptySelectionMessageText(){return this.emptySelectionMessage||this.config.translation.emptySelectionMessage||""}get selectedMessageText(){return this.hasSelectedOption()?this.selectionMessageText.replaceAll("{0}",this.multiple?this.modelValue()?.length:"1"):this.emptySelectionMessageText}get ariaSetSize(){return this.visibleOptions().filter(e=>!this.isOptionGroup(e)).length}get listLabel(){return this.config.getTranslation(xe.ARIA).listLabel}get virtualScrollerDisabled(){return!this.virtualScroll}get optionValueSelected(){return typeof this.modelValue()=="string"&&this.optionValue}chipItemClass(e){return this._componentStyle.classes.chipItem({instance:this,i:e})}constructor(e,n){super(),this.overlayService=e,this.zone=n}onInit(){this.id=this.id||Et("pn_id_"),this.cd.detectChanges()}templates;onAfterContentInit(){this.templates.forEach(e=>{switch(e.getType()){case"item":this._itemTemplate=e.template;break;case"group":this._groupTemplate=e.template;break;case"selecteditem":this._selectedItemTemplate=e.template;break;case"selectedItem":this._selectedItemTemplate=e.template;break;case"header":this._headerTemplate=e.template;break;case"empty":this._emptyTemplate=e.template;break;case"footer":this._footerTemplate=e.template;break;case"loader":this._loaderTemplate=e.template;break;case"removetokenicon":this._removeIconTemplate=e.template;break;case"loadingicon":this._loadingIconTemplate=e.template;break;case"clearicon":this._clearIconTemplate=e.template;break;case"dropdownicon":this._dropdownIconTemplate=e.template;break;default:this._itemTemplate=e.template;break}})}onAfterViewChecked(){this.bindDirectiveInstance.setAttrs(this.ptms(["host","root"])),this.suggestionsUpdated&&this.overlayViewChild&&this.zone.runOutsideAngular(()=>{setTimeout(()=>{this.overlayViewChild&&this.overlayViewChild.alignOverlay()},1),this.suggestionsUpdated=!1})}handleSuggestionsChange(){if(this.loading){this._suggestions()?.length>0||this.showEmptyMessage||this.emptyTemplate?this.show():this.hide();let e=this.overlayVisible&&this.autoOptionFocus?this.findFirstFocusedOptionIndex():-1;this.focusedOptionIndex.set(e),this.suggestionsUpdated=!0,this.loading=!1,this.cd.markForCheck()}}flatOptions(e){return(e||[]).reduce((n,i,r)=>{n.push({optionGroup:i,group:!0,index:r});let a=this.getOptionGroupChildren(i);return a&&a.forEach(E=>n.push(E)),n},[])}isOptionGroup(e){return this.optionGroupLabel&&e.optionGroup&&e.group}findFirstOptionIndex(){return this.visibleOptions().findIndex(e=>this.isValidOption(e))}findLastOptionIndex(){return ft(this.visibleOptions(),e=>this.isValidOption(e))}findFirstFocusedOptionIndex(){let e=this.findSelectedOptionIndex();return e<0?this.findFirstOptionIndex():e}findLastFocusedOptionIndex(){let e=this.findSelectedOptionIndex();return e<0?this.findLastOptionIndex():e}findSelectedOptionIndex(){return this.hasSelectedOption()?this.visibleOptions().findIndex(e=>this.isValidSelectedOption(e)):-1}findNextOptionIndex(e){let n=e<this.visibleOptions().length-1?this.visibleOptions().slice(e+1).findIndex(i=>this.isValidOption(i)):-1;return n>-1?n+e+1:e}findPrevOptionIndex(e){let n=e>0?ft(this.visibleOptions().slice(0,e),i=>this.isValidOption(i)):-1;return n>-1?n:e}isValidSelectedOption(e){return this.isValidOption(e)&&this.isSelected(e)}isValidOption(e){return e&&!(this.isOptionDisabled(e)||this.isOptionGroup(e))}isOptionDisabled(e){return this.optionDisabled?ce(e,this.optionDisabled):!1}isSelected(e){return this.multiple?this.unique?this.modelValue()?.some(n=>we(n,e,this.equalityKey())):!1:we(this.modelValue(),e,this.equalityKey())}isOptionMatched(e,n){return this.isValidOption(e)&&this.getOptionLabel(e).toLocaleLowerCase(this.searchLocale)===n.toLocaleLowerCase(this.searchLocale)}isInputClicked(e){return e.target===this.inputEL?.nativeElement}isDropdownClicked(e){return this.dropdownButton?.nativeElement?e.target===this.dropdownButton.nativeElement||this.dropdownButton.nativeElement.contains(e.target):!1}equalityKey(){return this.optionValue?void 0:this.dataKey}onContainerClick(e){this.$disabled()||this.loading||this.isInputClicked(e)||this.isDropdownClicked(e)||(!this.overlayViewChild||!this.overlayViewChild.overlayViewChild?.nativeElement.contains(e.target))&&le(this.inputEL?.nativeElement)}handleDropdownClick(e){let n;this.overlayVisible?this.hide(!0):(le(this.inputEL?.nativeElement),n=this.inputEL?.nativeElement?.value,this.dropdownMode==="blank"?this.search(e,"","dropdown"):this.dropdownMode==="current"&&this.search(e,n,"dropdown")),this.onDropdownClick.emit({originalEvent:e,query:n})}onInput(e){if(this.typeahead){let n=this.minQueryLength||this.minLength;this.searchTimeout&&clearTimeout(this.searchTimeout);let i=e.target.value;this.maxlength()!==null&&(i=i.split("").slice(0,this.maxlength()).join("")),!this.multiple&&!this.forceSelection&&this.updateModel(i),i.length===0&&!this.multiple?(this.onClear.emit(),setTimeout(()=>{this.hide()},this.delay/2)):i.length>=n?(this.focusedOptionIndex.set(-1),this.searchTimeout=setTimeout(()=>{this.search(e,i,"input")},this.delay)):this.hide()}}onInputChange(e){if(this.forceSelection){let n=!1;if(this.visibleOptions()){let i=this.visibleOptions().find(r=>this.isOptionMatched(r,this.inputEL?.nativeElement?.value||""));i!==void 0&&(n=!0,!this.isSelected(i)&&this.onOptionSelect(e,i))}n||(this.inputEL?.nativeElement&&(this.inputEL.nativeElement.value=""),!this.multiple&&this.updateModel(null))}}onInputFocus(e){if(this.$disabled())return;!this.dirty&&this.completeOnFocus&&this.search(e,e.target.value,"focus"),this.dirty=!0,this.focused=!0;let n=this.focusedOptionIndex()!==-1?this.focusedOptionIndex():this.overlayVisible&&this.autoOptionFocus?this.findFirstFocusedOptionIndex():-1;this.focusedOptionIndex.set(n),this.overlayVisible&&this.scrollInView(this.focusedOptionIndex()),this.onFocus.emit(e)}onMultipleContainerFocus(e){this.$disabled()||(this.focused=!0)}onMultipleContainerBlur(e){this.focusedMultipleOptionIndex.set(-1),this.focused=!1}onMultipleContainerKeyDown(e){if(this.$disabled()){e.preventDefault();return}switch(e.code){case"ArrowLeft":this.onArrowLeftKeyOnMultiple(e);break;case"ArrowRight":this.onArrowRightKeyOnMultiple(e);break;case"Backspace":this.onBackspaceKeyOnMultiple(e);break;default:break}}onInputBlur(e){if(this.dirty=!1,this.focused=!1,this.focusedOptionIndex.set(-1),this.addOnBlur&&this.multiple&&!this.typeahead){let n=(this.multiInputEl?.nativeElement?.value||e.target.value||"").trim();n&&!this.isSelected(n)&&(this.updateModel([...this.modelValue()||[],n]),this.onAdd.emit({originalEvent:e,value:n}),this.multiInputEl?.nativeElement?this.multiInputEl.nativeElement.value="":e.target.value="")}this.onModelTouched(),this.onBlur.emit(e)}onInputPaste(e){if(this.separator&&this.multiple&&!this.typeahead){let n=(e.clipboardData||window.clipboardData)?.getData("Text");if(n){let i=n.split(this.separator),r=[...this.modelValue()||[]];if(i.forEach(a=>{let E=a.trim();E&&!this.isSelected(E)&&r.push(E)}),r.length>(this.modelValue()||[]).length){let a=r.slice((this.modelValue()||[]).length);this.updateModel(r),a.forEach(E=>{this.onAdd.emit({originalEvent:e,value:E})}),this.multiInputEl?.nativeElement?this.multiInputEl.nativeElement.value="":e.target.value="",e.preventDefault()}}}else this.onKeyDown(e)}onInputKeyUp(e){this.onKeyUp.emit(e)}onKeyDown(e){if(this.$disabled()){e.preventDefault();return}switch(this.onInputKeydown.emit(e),e.code){case"ArrowDown":this.onArrowDownKey(e);break;case"ArrowUp":this.onArrowUpKey(e);break;case"ArrowLeft":this.onArrowLeftKey(e);break;case"ArrowRight":this.onArrowRightKey(e);break;case"Home":this.onHomeKey(e);break;case"End":this.onEndKey(e);break;case"PageDown":this.onPageDownKey(e);break;case"PageUp":this.onPageUpKey(e);break;case"Enter":case"NumpadEnter":this.onEnterKey(e);break;case"Escape":this.onEscapeKey(e);break;case"Tab":this.onTabKey(e);break;case"Backspace":this.onBackspaceKey(e);break;case"ShiftLeft":case"ShiftRight":break;default:this.handleSeparatorKey(e);break}}handleSeparatorKey(e){if(this.separator&&this.multiple&&!this.typeahead&&(this.separator===e.key||typeof this.separator=="string"&&e.key===this.separator||this.separator instanceof RegExp&&e.key.match(this.separator))){let n=(this.multiInputEl?.nativeElement?.value||e.target.value||"").trim();n&&!this.isSelected(n)&&(this.updateModel([...this.modelValue()||[],n]),this.onAdd.emit({originalEvent:e,value:n}),this.multiInputEl?.nativeElement?this.multiInputEl.nativeElement.value="":e.target.value="",e.preventDefault())}}onArrowDownKey(e){if(!this.overlayVisible)return;let n=this.focusedOptionIndex()!==-1?this.findNextOptionIndex(this.focusedOptionIndex()):this.findFirstFocusedOptionIndex();this.changeFocusedOptionIndex(e,n),e.preventDefault(),e.stopPropagation()}onArrowUpKey(e){if(this.overlayVisible)if(e.altKey)this.focusedOptionIndex()!==-1&&this.onOptionSelect(e,this.visibleOptions()[this.focusedOptionIndex()]),this.overlayVisible&&this.hide(),e.preventDefault();else{let n=this.focusedOptionIndex()!==-1?this.findPrevOptionIndex(this.focusedOptionIndex()):this.findLastFocusedOptionIndex();this.changeFocusedOptionIndex(e,n),e.preventDefault(),e.stopPropagation()}}onArrowLeftKey(e){let n=e.currentTarget;this.focusedOptionIndex.set(-1),this.multiple&&(_t(n.value)&&this.hasSelectedOption()?(le(this.multiContainerEL?.nativeElement),this.focusedMultipleOptionIndex.set(this.modelValue().length)):e.stopPropagation())}onArrowRightKey(e){this.focusedOptionIndex.set(-1),this.multiple&&e.stopPropagation()}onHomeKey(e){let{currentTarget:n}=e,i=n.value.length;n.setSelectionRange(0,e.shiftKey?i:0),this.focusedOptionIndex.set(-1),e.preventDefault()}onEndKey(e){let{currentTarget:n}=e,i=n.value.length;n.setSelectionRange(e.shiftKey?0:i,i),this.focusedOptionIndex.set(-1),e.preventDefault()}onPageDownKey(e){this.scrollInView(this.visibleOptions().length-1),e.preventDefault()}onPageUpKey(e){this.scrollInView(0),e.preventDefault()}onEnterKey(e){if(!this.typeahead&&!this.forceSelection&&this.multiple){let n=e.target.value?.trim();n&&!this.isSelected(n)&&(this.updateModel([...this.modelValue()||[],n]),this.inputEL?.nativeElement&&(this.inputEL.nativeElement.value=""))}if(this.overlayVisible)this.focusedOptionIndex()!==-1&&this.onOptionSelect(e,this.visibleOptions()[this.focusedOptionIndex()]),this.hide();else return;e.preventDefault()}onEscapeKey(e){this.overlayVisible&&this.hide(!0),e.preventDefault()}onTabKey(e){if(this.focusedOptionIndex()!==-1){this.onOptionSelect(e,this.visibleOptions()[this.focusedOptionIndex()]);return}if(this.multiple&&!this.typeahead){let n=(this.multiInputEl?.nativeElement?.value||this.inputEL?.nativeElement?.value||"").trim();if(this.addOnTab&&n&&!this.isSelected(n)){this.updateModel([...this.modelValue()||[],n]),this.onAdd.emit({originalEvent:e,value:n}),this.multiInputEl?.nativeElement?this.multiInputEl.nativeElement.value="":this.inputEL?.nativeElement&&(this.inputEL.nativeElement.value=""),this.updateInputValue(),e.preventDefault(),this.overlayVisible&&this.hide();return}}this.overlayVisible&&this.hide()}onBackspaceKey(e){if(this.multiple){if(Le(this.modelValue())&&!this.inputEL?.nativeElement?.value){let n=this.modelValue()[this.modelValue().length-1],i=this.modelValue().slice(0,-1);this.updateModel(i),this.onUnselect.emit({originalEvent:e,value:n})}e.stopPropagation()}}onArrowLeftKeyOnMultiple(e){let n=this.focusedMultipleOptionIndex()<1?0:this.focusedMultipleOptionIndex()-1;this.focusedMultipleOptionIndex.set(n)}onArrowRightKeyOnMultiple(e){let n=this.focusedMultipleOptionIndex();n++,this.focusedMultipleOptionIndex.set(n),n>this.modelValue().length-1&&(this.focusedMultipleOptionIndex.set(-1),le(this.inputEL?.nativeElement))}onBackspaceKeyOnMultiple(e){this.focusedMultipleOptionIndex()!==-1&&this.removeOption(e,this.focusedMultipleOptionIndex())}onOptionSelect(e,n,i=!0){this.multiple?(this.inputEL?.nativeElement&&(this.inputEL.nativeElement.value=""),this.isSelected(n)||this.updateModel([...this.modelValue()||[],n])):this.updateModel(n),this.onSelect.emit({originalEvent:e,value:n}),i&&this.hide(!0)}onOptionMouseEnter(e,n){this.focusOnHover&&this.changeFocusedOptionIndex(e,n)}search(e,n,i){n!=null&&(i==="input"&&n.trim().length===0||(this.loading=!0,this.completeMethod.emit({originalEvent:e,query:n})))}removeOption(e,n){e.stopPropagation();let i=this.modelValue()[n],r=this.modelValue().filter((a,E)=>E!==n);this.updateModel(r),this.onUnselect.emit({originalEvent:e,value:i}),le(this.inputEL?.nativeElement)}updateModel(e){let n=null;e&&(n=this.multiple?e.map(i=>this.getOptionValue(i)):this.getOptionValue(e)),this.value=n,this.writeModelValue(e),this.onModelChange(n),this.updateInputValue(),this.cd.markForCheck()}updateInputValue(){this.inputEL&&this.inputEL.nativeElement&&(this.multiple?this.inputEL.nativeElement.value="":this.inputEL.nativeElement.value=this.inputValue())}autoUpdateModel(){if((this.selectOnFocus||this.autoHighlight)&&this.autoOptionFocus&&!this.hasSelectedOption()){let e=this.findFirstFocusedOptionIndex();this.focusedOptionIndex.set(e),this.onOptionSelect(null,this.visibleOptions()[this.focusedOptionIndex()],!1)}}scrollInView(e=-1){let n=e!==-1?`${this.id}_${e}`:this.focusedOptionId;if(this.itemsViewChild&&this.itemsViewChild.nativeElement){let i=Ke(this.itemsViewChild.nativeElement,`li[id="${n}"]`);i?i.scrollIntoView&&i.scrollIntoView({block:"nearest",inline:"nearest"}):this.virtualScrollerDisabled||setTimeout(()=>{this.virtualScroll&&this.scroller?.scrollToIndex(e!==-1?e:this.focusedOptionIndex())},0)}}changeFocusedOptionIndex(e,n){this.focusedOptionIndex()!==n&&(this.focusedOptionIndex.set(n),this.scrollInView(),this.selectOnFocus&&this.onOptionSelect(e,this.visibleOptions()[n],!1))}show(e=!1){this.dirty=!0,this.overlayVisible=!0;let n=this.focusedOptionIndex()!==-1?this.focusedOptionIndex():this.autoOptionFocus?this.findFirstFocusedOptionIndex():-1;this.focusedOptionIndex.set(n),e&&le(this.inputEL?.nativeElement),e&&le(this.inputEL?.nativeElement),this.onShow.emit(),this.cd.markForCheck()}hide(e=!1){let n=()=>{this.dirty=e,this.overlayVisible=!1,this.focusedOptionIndex.set(-1),e&&le(this.inputEL?.nativeElement),this.onHide.emit(),this.cd.markForCheck()};setTimeout(()=>{n()},0)}clear(){this.updateModel(null),this.inputEL?.nativeElement&&(this.inputEL.nativeElement.value=""),this.onClear.emit()}hasSelectedOption(){return Le(this.modelValue())}getAriaPosInset(e){return(this.optionGroupLabel?e-this.visibleOptions().slice(0,e).filter(n=>this.isOptionGroup(n)).length:e)+1}getOptionLabel(e){return this.optionLabel?ce(e,this.optionLabel):e&&e.label!=null?e.label:e}getOptionValue(e){return this.optionValue?ce(e,this.optionValue):e&&e.value!=null?e.value:e}getOptionIndex(e,n){return this.virtualScrollerDisabled?e:n&&n.getItemOptions(e).index}getOptionGroupLabel(e){return this.optionGroupLabel?ce(e,this.optionGroupLabel):e&&e.label!=null?e.label:e}getOptionGroupChildren(e){return this.optionGroupChildren?ce(e,this.optionGroupChildren):e.items}getPTOptions(e,n,i,r){return this.ptm(r,{context:{option:e,index:this.getOptionIndex(i,n),selected:this.isSelected(e),focused:this.focusedOptionIndex()===this.getOptionIndex(i,n),disabled:this.isOptionDisabled(e)}})}onOverlayAnimationStart(e){if(e.toState==="visible"&&(this.itemsWrapper=Ke(this.overlayViewChild.overlayViewChild?.nativeElement,this.virtualScroll?".p-scroller":".p-autocomplete-panel"),this.virtualScroll&&(this.scroller?.setContentEl(this.itemsViewChild?.nativeElement),this.scroller?.viewInit()),this.visibleOptions()&&this.visibleOptions().length))if(this.virtualScroll){let n=this.modelValue()?this.focusedOptionIndex():-1;n!==-1&&this.scroller?.scrollToIndex(n)}else{let n=Ke(this.itemsWrapper,".p-autocomplete-item.p-highlight");n&&n.scrollIntoView({block:"nearest",inline:"center"})}}writeControlValue(e,n){let i=this.multiple?this.visibleOptions().filter(r=>e?.some(a=>we(a,r,this.equalityKey()))):this.visibleOptions().find(r=>we(e,r,this.equalityKey()));this.value=e,n(_t(i)?e:i),this.updateInputValue(),this.cd.markForCheck()}onDestroy(){this.scrollHandler&&(this.scrollHandler.destroy(),this.scrollHandler=null)}static \u0275fac=function(n){return new(n||t)(Oe(Ot),Oe(Ct))};static \u0275cmp=P({type:t,selectors:[["p-autoComplete"],["p-autocomplete"],["p-auto-complete"]],contentQueries:function(n,i,r){if(n&1&&(S(r,ln,5),S(r,cn,5),S(r,dn,5),S(r,pn,5),S(r,un,5),S(r,mn,5),S(r,gn,5),S(r,hn,5),S(r,_n,5),S(r,fn,5),S(r,vn,5),S(r,ae,4)),n&2){let a;b(a=y())&&(i.itemTemplate=a.first),b(a=y())&&(i.emptyTemplate=a.first),b(a=y())&&(i.headerTemplate=a.first),b(a=y())&&(i.footerTemplate=a.first),b(a=y())&&(i.selectedItemTemplate=a.first),b(a=y())&&(i.groupTemplate=a.first),b(a=y())&&(i.loaderTemplate=a.first),b(a=y())&&(i.removeIconTemplate=a.first),b(a=y())&&(i.loadingIconTemplate=a.first),b(a=y())&&(i.clearIconTemplate=a.first),b(a=y())&&(i.dropdownIconTemplate=a.first),b(a=y())&&(i.templates=a)}},viewQuery:function(n,i){if(n&1&&(oe(bn,5),oe(yn,5),oe(wn,5),oe(xn,5),oe(Cn,5),oe(Sn,5),oe(Dn,5)),n&2){let r;b(r=y())&&(i.inputEL=r.first),b(r=y())&&(i.multiInputEl=r.first),b(r=y())&&(i.multiContainerEL=r.first),b(r=y())&&(i.dropdownButton=r.first),b(r=y())&&(i.itemsViewChild=r.first),b(r=y())&&(i.scroller=r.first),b(r=y())&&(i.overlayViewChild=r.first)}},hostVars:4,hostBindings:function(n,i){n&1&&v("click",function(a){return i.onHostClick(a)}),n&2&&(ve(i.sx("root")),_(i.cn(i.cx("root"),i.styleClass)))},inputs:{minLength:[2,"minLength","minLength",K],minQueryLength:[2,"minQueryLength","minQueryLength",K],delay:[2,"delay","delay",K],panelStyle:"panelStyle",styleClass:"styleClass",panelStyleClass:"panelStyleClass",inputStyle:"inputStyle",inputId:"inputId",inputStyleClass:"inputStyleClass",placeholder:"placeholder",readonly:[2,"readonly","readonly",x],scrollHeight:"scrollHeight",lazy:[2,"lazy","lazy",x],virtualScroll:[2,"virtualScroll","virtualScroll",x],virtualScrollItemSize:[2,"virtualScrollItemSize","virtualScrollItemSize",K],virtualScrollOptions:"virtualScrollOptions",autoHighlight:[2,"autoHighlight","autoHighlight",x],forceSelection:[2,"forceSelection","forceSelection",x],type:"type",autoZIndex:[2,"autoZIndex","autoZIndex",x],baseZIndex:[2,"baseZIndex","baseZIndex",K],ariaLabel:"ariaLabel",dropdownAriaLabel:"dropdownAriaLabel",ariaLabelledBy:"ariaLabelledBy",dropdownIcon:"dropdownIcon",unique:[2,"unique","unique",x],group:[2,"group","group",x],completeOnFocus:[2,"completeOnFocus","completeOnFocus",x],showClear:[2,"showClear","showClear",x],dropdown:[2,"dropdown","dropdown",x],showEmptyMessage:[2,"showEmptyMessage","showEmptyMessage",x],dropdownMode:"dropdownMode",multiple:[2,"multiple","multiple",x],addOnTab:[2,"addOnTab","addOnTab",x],tabindex:[2,"tabindex","tabindex",K],dataKey:"dataKey",emptyMessage:"emptyMessage",showTransitionOptions:"showTransitionOptions",hideTransitionOptions:"hideTransitionOptions",autofocus:[2,"autofocus","autofocus",x],autocomplete:"autocomplete",optionGroupChildren:"optionGroupChildren",optionGroupLabel:"optionGroupLabel",overlayOptions:"overlayOptions",suggestions:"suggestions",optionLabel:"optionLabel",optionValue:"optionValue",id:"id",searchMessage:"searchMessage",emptySelectionMessage:"emptySelectionMessage",selectionMessage:"selectionMessage",autoOptionFocus:[2,"autoOptionFocus","autoOptionFocus",x],selectOnFocus:[2,"selectOnFocus","selectOnFocus",x],searchLocale:[2,"searchLocale","searchLocale",x],optionDisabled:"optionDisabled",focusOnHover:[2,"focusOnHover","focusOnHover",x],typeahead:[2,"typeahead","typeahead",x],addOnBlur:[2,"addOnBlur","addOnBlur",x],separator:"separator",appendTo:[1,"appendTo"]},outputs:{completeMethod:"completeMethod",onSelect:"onSelect",onUnselect:"onUnselect",onAdd:"onAdd",onFocus:"onFocus",onBlur:"onBlur",onDropdownClick:"onDropdownClick",onClear:"onClear",onInputKeydown:"onInputKeydown",onKeyUp:"onKeyUp",onShow:"onShow",onHide:"onHide",onLazyLoad:"onLazyLoad"},features:[Y([ko,vi,{provide:bi,useExisting:t},{provide:ee,useExisting:t}]),Z([I]),U],decls:9,vars:13,consts:[["overlay",""],["content",""],["focusInput",""],["multiContainer",""],["focusInput","","multiIn",""],["token",""],["removeicon",""],["ddBtn",""],["buildInItems",""],["scroller",""],["loader",""],["items",""],["empty",""],["pInputText","","aria-autocomplete","list","role","combobox",3,"pAutoFocus","pt","class","ngStyle","variant","invalid","pSize","fluid","input","keydown","change","focus","blur","paste","keyup",4,"ngIf"],[4,"ngIf"],["role","listbox",3,"pBind","class","tabindex","focus","blur","keydown",4,"ngIf"],["type","button","pRipple","",3,"pBind","class","disabled","click",4,"ngIf"],[3,"visibleChange","onAnimationStart","onHide","pt","hostAttrSelector","visible","options","target","appendTo","showTransitionOptions","hideTransitionOptions"],["pInputText","","aria-autocomplete","list","role","combobox",3,"input","keydown","change","focus","blur","paste","keyup","pAutoFocus","pt","ngStyle","variant","invalid","pSize","fluid"],["data-p-icon","times",3,"pBind","class","click",4,"ngIf"],[3,"pBind","class","click",4,"ngIf"],["data-p-icon","times",3,"click","pBind"],[3,"click","pBind"],[4,"ngTemplateOutlet"],["role","listbox",3,"focus","blur","keydown","pBind","tabindex"],["role","option",3,"pBind","class",4,"ngFor","ngForOf"],["role","option",3,"pBind"],["role","combobox","aria-autocomplete","list",3,"input","keydown","change","focus","blur","paste","keyup","pAutoFocus","pBind","ngStyle"],[3,"onRemove","pt","label","disabled","removable"],[4,"ngTemplateOutlet","ngTemplateOutletContext"],[3,"pBind",4,"ngIf"],["data-p-icon","times-circle"],[3,"pBind"],["data-p-icon","spinner",3,"pBind","class","spin",4,"ngIf"],[3,"pBind","class",4,"ngIf"],["data-p-icon","spinner",3,"pBind","spin"],["type","button","pRipple","",3,"click","pBind","disabled"],[3,"ngClass",4,"ngIf"],[3,"ngClass"],["data-p-icon","chevron-down",3,"pBind",4,"ngIf"],["data-p-icon","chevron-down",3,"pBind"],[3,"pBind","ngStyle"],[3,"pBind","tabindex"],[3,"pt","items","style","itemSize","autoSize","lazy","options","onLazyLoad",4,"ngIf"],["role","status","aria-live","polite",1,"p-hidden-accessible"],[3,"onLazyLoad","pt","items","itemSize","autoSize","lazy","options"],["role","listbox",3,"pBind"],["ngFor","",3,"ngForOf"],["role","option",3,"pBind","class","ngStyle",4,"ngIf"],["role","option",3,"pBind","ngStyle"],["pRipple","","role","option",3,"click","mouseenter","pBind","ngStyle"],[4,"ngIf","ngIfElse"]],template:function(n,i){if(n&1){let r=C();g(0,Mn,2,31,"input",13)(1,Fn,3,2,"ng-container",14)(2,Gn,7,36,"ul",15)(3,Zn,3,2,"ng-container",14)(4,io,4,8,"button",16),d(5,"p-overlay",17,0),G("visibleChange",function(E){return u(r),j(i.overlayVisible,E)||(i.overlayVisible=E),m(E)}),v("onAnimationStart",function(E){return u(r),m(i.onOverlayAnimationStart(E))})("onHide",function(){return u(r),m(i.hide())}),g(7,Do,10,15,"ng-template",null,1,k),p()}n&2&&(l("ngIf",!i.multiple),s(),l("ngIf",i.$filled()&&!i.$disabled()&&i.showClear&&!i.loading),s(),l("ngIf",i.multiple),s(),l("ngIf",i.loading),s(),l("ngIf",i.dropdown),s(),l("pt",i.ptm("pcOverlay"))("hostAttrSelector",i.$attrSelector),Q("visible",i.overlayVisible),l("options",i.overlayOptions)("target","@parent")("appendTo",i.$appendTo())("showTransitionOptions",i.showTransitionOptions)("hideTransitionOptions",i.hideTransitionOptions))},dependencies:[A,Ge,ye,J,re,It,ni,Xe,zt,oi,Ze,Ue,We,Vt,_i,N,Lt,$e,I],encapsulation:2,changeDetection:0})}return t})(),rt=(()=>{class t{static \u0275fac=function(n){return new(n||t)};static \u0275mod=ne({type:t});static \u0275inj=ie({imports:[Pe,N,N]})}return t})();var te=class t{selectCategoriaDefault={id:0,nombre:"",subcategorias:[],descripcion:""};selectSubCategoriaDefault={id:0,nombre:"",descripcion:"",costo:0,requiereDocumentos:!1,documentos:[],areas:[]};selectCategoria=pe(this.selectCategoriaDefault);selectSubCategoria=pe(this.selectSubCategoriaDefault);loading=pe(!1);static \u0275fac=function(e){return new(e||t)};static \u0275prov=z({token:t,factory:t.\u0275fac,providedIn:"root"})};var at=class t{maxLengthNombre=100;maxLengthDescripcion=255;minLengthNombre=3;minLengthDescripcion=5;expReg=/^[a-zA-Z0-9áÁéÉíÍóÓúÚ\u00C0-\u017F][a-zA-Z0-9áÁéÉíÍóÓúÚ\u00C0-\u017F\s.-]*[a-zA-Z0-9áÁéÉíÍóÓúÚ\u00C0-\u017F.-]$/;expLockInputNombre=/[^a-zA-ZáéíóúÁÉÍÓÚüÜñÑ ]/g;expLockInputDescripcion=/[^a-zA-ZáéíóúÁÉÍÓÚüÜñÑ ,.-]/g;static \u0275fac=function(e){return new(e||t)};static \u0275prov=z({token:t,factory:t.\u0275fac,providedIn:"root"})};var st=class t{ref=w(ci);config=w(li);categoriaSignal=w(te);selectCategoria=this.categoriaSignal.selectCategoria;loading=this.categoriaSignal.loading;formCategoria;categoria;notificationService=w(ui);confirmDialogService=w(pi);categoriaValidations=w(at);maxLengthNombre=this.categoriaValidations.maxLengthNombre;maxLengthDescripcion=this.categoriaValidations.maxLengthDescripcion;minLengthNombre=this.categoriaValidations.minLengthNombre;minLengthDescripcion=this.categoriaValidations.minLengthDescripcion;expReg=this.categoriaValidations.expReg;expLockInputNombre=this.categoriaValidations.expLockInputNombre;expLockInputDescripcion=this.categoriaValidations.expLockInputDescripcion;constructor(){this.formCategoria=new jt({nombre:new vt("",[de.required,de.minLength(this.minLengthNombre),de.maxLength(this.maxLengthNombre),de.pattern(this.expReg)]),descripcion:new vt("",[de.required,de.minLength(this.minLengthDescripcion),de.maxLength(this.maxLengthDescripcion),de.pattern(this.expReg)])})}ngOnInit(){this.categoria=this.config.data.payload.categoria,this.categoria.id!==0&&this.patchValue()}get modalPrimaryLabel(){return this.selectCategoria().id!==0?"Actualizar Categoria":"Crear Categoria"}get modalPrimaryDisabled(){return this.formCategoria.invalid}guardarCategoria(){if(this.formCategoria.invalid)return;let o=this.categoria.id===0?"Crear":"Editar";this.confirmDialogService.open({type:"question",title:`${o} Categor\xEDa`,message:`\xBFEst\xE1s seguro que deseas ${o.toLowerCase()} la categor\xEDa?`,onAccept:()=>{if(this.loading.set(!0),o==="Crear"){let e={nombre:this.formCategoria.value.nombre,descripcion:this.formCategoria.value.descripcion};this.crearCategoria(e)}else{let e={id:this.categoria.id,nombre:this.formCategoria.value.nombre,descripcion:this.formCategoria.value.descripcion};this.editarCategoria(e)}}})}crearCategoria(o){}editarCategoria(o){}patchValue(){this.formCategoria.patchValue({nombre:this.categoria.nombre,descripcion:this.categoria.descripcion})}cancelar(){this.ref.close(null)}static \u0275fac=function(e){return new(e||t)};static \u0275cmp=P({type:t,selectors:[["app-add-edit-categoria"]],decls:4,vars:9,consts:[[3,"formGroup"],[1,"flex","flex-column","gap-4","flex-1","min-h-0","w-full"],["label","Nombre","formControlName","nombre",3,"maxlength","minlength","expReg","patternErrorMessage"],["label","Descripci\xF3n","formControlName","descripcion",3,"maxlength","minlength","expReg","patternErrorMessage"]],template:function(e,n){e&1&&(d(0,"form",0)(1,"div",1),f(2,"ui-input",2)(3,"ui-input",3),p()()),e&2&&(l("formGroup",n.formCategoria),s(2),l("maxlength",n.maxLengthNombre)("minlength",n.minLengthNombre)("expReg",n.expLockInputNombre)("patternErrorMessage","No debe incluir espacios al final de la palabra"),s(),l("maxlength",n.maxLengthDescripcion)("minlength",n.minLengthDescripcion)("expReg",n.expLockInputDescripcion)("patternErrorMessage","No debe incluir espacios al final de la palabra"))},dependencies:[Zt,Gt,Se,Qt,Wt,Ut,Kt,$t,De,di,A],encapsulation:2})};function Po(t,o){if(t&1){let e=C();d(0,"div",5)(1,"span",6),h(2),p(),d(3,"div",7),v("click",function(i){return u(e),m(i.stopPropagation())}),d(4,"ui-icon-button",8),v("onClick",function(){let i=u(e).$implicit,r=c();return m(r.openAddEditCategoria(i))}),p(),f(5,"ui-icon-button",9),p()()}if(t&2){let e=o.$implicit;s(2),H(e.nombre)}}var lt=class t{categoriaSignal=w(te);selectCategoria=this.categoriaSignal.selectCategoria;selectCategoriaDefault=this.categoriaSignal.selectCategoriaDefault;categorias=[];sugerencias=[];modalService=w(nt);constructor(){}ngOnInit(){this.categorias=[{id:1,nombre:"ACAD\xC9MICO",descripcion:"Descripcion de categor\xEDa acad\xE9mica",subcategorias:[{id:1,nombre:"Emisi\xF3n de T\xEDtulo",descripcion:"Tr\xE1mite para emisi\xF3n y entrega de t\xEDtulo profesional",costo:450,requiereDocumentos:!0,documentos:[{nombre:"Copia DNI",tipo:"PDF",requerido:!0},{nombre:"Constancia Egresado",tipo:"PDF",requerido:!0},{nombre:"Recibo Pago",tipo:"Image",requerido:!0},{nombre:"Certificado Idiomas",tipo:"Image",requerido:!1},{nombre:"Tesis",tipo:"Image",requerido:!1}],areas:[{nombre:"Secretar\xEDa Acad\xE9mica",sla:2},{nombre:"Contabilidad",sla:1},{nombre:"Rectorado",sla:3},{nombre:"Archivo",sla:1},{nombre:"Decanato",sla:2},{nombre:"Registro",sla:2}]},{id:2,nombre:"Certificado de Estudios",descripcion:"Certificado oficial de estudios cursados",costo:120,requiereDocumentos:!1,documentos:[],areas:[{nombre:"Secretar\xEDa Acad\xE9mica",sla:1},{nombre:"Registro",sla:1}]},{id:3,nombre:"Convalidaci\xF3n de Cursos",descripcion:"Proceso de reconocimiento de cursos externos",costo:80,requiereDocumentos:!0,documentos:[{nombre:"Silabo Original",tipo:"PDF",requerido:!0},{nombre:"Certificado Notas",tipo:"PDF",requerido:!0}],areas:[{nombre:"Decanato",sla:3},{nombre:"Secretar\xEDa Acad\xE9mica",sla:2}]},{id:4,nombre:"Retiro de Asignatura",descripcion:"Solicitud de retiro de asignatura matriculada",costo:30,requiereDocumentos:!1,documentos:[],areas:[{nombre:"Secretar\xEDa Acad\xE9mica",sla:1}]}]},{id:2,nombre:"ADMINISTRATIVO",descripcion:"Descripcion de categor\xEDa acad\xE9mica",subcategorias:[{id:5,nombre:"Constancia de Trabajo",descripcion:"Documento que acredita relaci\xF3n laboral",costo:50,requiereDocumentos:!1,documentos:[],areas:[{nombre:"Recursos Humanos",sla:2},{nombre:"Gerencia",sla:1}]}]},{id:3,nombre:"FINANCIERO",descripcion:"Descripcion de categor\xEDa acad\xE9mica",subcategorias:[{id:6,nombre:"Devoluci\xF3n de Pagos",descripcion:"Solicitud de devoluci\xF3n de pagos realizados",costo:0,requiereDocumentos:!0,documentos:[{nombre:"Recibo Original",tipo:"PDF",requerido:!0}],areas:[{nombre:"Tesorer\xEDa",sla:3},{nombre:"Contabilidad",sla:2}]}]}]}filtrarCategorias(o){let e=o.query.toLowerCase();this.sugerencias=this.categorias.filter(n=>n.nombre.toLowerCase().includes(e))}seleccionar(o){this.selectCategoria.set(o.value)}limpiar(){this.selectCategoria.set(this.selectCategoriaDefault)}openAddEditCategoria(o){console.log(o),this.modalService.open(st,{data:{categoria:o},header:o.id===0?"Agregar Categor\xEDa":"Editar Categor\xEDa",width:"min(90vw, 720px)",maximizable:!1}).onClose.subscribe(n=>{n?.success})}static \u0275fac=function(e){return new(e||t)};static \u0275cmp=P({type:t,selectors:[["app-list-categoria"]],decls:6,vars:4,consts:[["item",""],[1,"flex","align-items-center","gap-2"],[1,"p-input-icon-left","flex-1"],["optionLabel","nombre","placeholder","Buscar categor\xEDas...","styleClass","w-full","inputStyleClass","w-full","appendTo","body",3,"ngModelChange","completeMethod","onSelect","onClear","ngModel","dropdown","suggestions","showClear"],["label","Agregar Categor\xEDa","icon","pi pi-plus",3,"onClick"],[1,"flex","align-items-center","justify-content-between","w-full","gap-2","py-1"],[1,"font-medium"],[1,"flex","gap-1",3,"click"],["icon","pi pi-pencil","color","info","tooltip","Editar",3,"onClick"],["icon","pi pi-trash","color","danger","tooltip","Eliminar"]],template:function(e,n){if(e&1){let i=C();d(0,"div",1)(1,"span",2)(2,"p-autoComplete",3),G("ngModelChange",function(a){return u(i),j(n.selectCategoria().nombre,a)||(n.selectCategoria().nombre=a),m(a)}),v("completeMethod",function(a){return u(i),m(n.filtrarCategorias(a))})("onSelect",function(a){return u(i),m(n.seleccionar(a))})("onClear",function(){return u(i),m(n.limpiar())}),g(3,Po,6,1,"ng-template",null,0,k),p()(),d(5,"ui-button",4),v("onClick",function(){return u(i),m(n.openAddEditCategoria(n.selectCategoriaDefault))}),p()()}e&2&&(s(2),Q("ngModel",n.selectCategoria().nombre),l("dropdown",!0)("suggestions",n.sugerencias)("showClear",!0))},dependencies:[me,rt,Pe,De,Se,Je,A,ge,he],encapsulation:2})};var Di=`
    .p-dataview {
        position: relative;
        border-color: dt('dataview.border.color');
        border-width: dt('dataview.border.width');
        border-style: solid;
        border-radius: dt('dataview.border.radius');
        padding: dt('dataview.padding');
    }

    .p-dataview-header {
        background: dt('dataview.header.background');
        color: dt('dataview.header.color');
        border-color: dt('dataview.header.border.color');
        border-width: dt('dataview.header.border.width');
        border-style: solid;
        padding: dt('dataview.header.padding');
        border-radius: dt('dataview.header.border.radius');
    }

    .p-dataview-content {
        background: dt('dataview.content.background');
        border-color: dt('dataview.content.border.color');
        border-width: dt('dataview.content.border.width');
        border-style: solid;
        color: dt('dataview.content.color');
        padding: dt('dataview.content.padding');
        border-radius: dt('dataview.content.border.radius');
    }

    .p-dataview-footer {
        background: dt('dataview.footer.background');
        color: dt('dataview.footer.color');
        border-color: dt('dataview.footer.border.color');
        border-width: dt('dataview.footer.border.width');
        border-style: solid;
        padding: dt('dataview.footer.padding');
        border-radius: dt('dataview.footer.border.radius');
    }

    .p-dataview-paginator-top {
        border-width: dt('dataview.paginator.top.border.width');
        border-color: dt('dataview.paginator.top.border.color');
        border-style: solid;
    }

    .p-dataview-paginator-bottom {
        border-width: dt('dataview.paginator.bottom.border.width');
        border-color: dt('dataview.paginator.bottom.border.color');
        border-style: solid;
    }

    .p-dataview-loading-overlay {
        position: absolute;
        display: flex;
        align-items: center;
        justify-content: center;
        z-index: 2;
    }
`;var Oo=["list"],Mo=["grid"],Ro=["header"],Vo=["emptymessage"],Lo=["footer"],Ao=["paginatorleft"],Fo=["paginatorright"],No=["paginatordropdownitem"],Bo=["loadingicon"],zo=["listicon"],Ho=["gridicon"],qo=[[["p-header"]],[["p-footer"]]],Qo=["p-header","p-footer"],jo=()=>({position:"top"}),Ei=t=>({$implicit:t}),Go=()=>({position:"bottom"});function Ko(t,o){if(t&1&&f(0,"i"),t&2){let e=c(2);_(e.cn(e.cx("loadingIcon"),"pi-spin"+e.loadingIcon))}}function $o(t,o){}function Wo(t,o){t&1&&g(0,$o,0,0,"ng-template")}function Uo(t,o){if(t&1&&(R(0),se(),f(1,"svg",5),g(2,Wo,1,0,null,6),V()),t&2){let e=c(2);s(),_(e.cx("loadingIcon")),l("pBind",e.ptm("loadingIcon"))("spin",!0),s(),l("ngTemplateOutlet",e.loadingicon)}}function Zo(t,o){if(t&1&&(d(0,"div",3)(1,"div",3),O(2,Ko,1,2,"i",4)(3,Uo,3,5,"ng-container"),p()()),t&2){let e=c();_(e.cx("loading")),l("pBind",e.ptm("loading")),s(),_(e.cx("loadingOverlay")),l("pBind",e.ptm("loadingOverlay")),s(),M(e.loadingIcon?2:3)}}function Yo(t,o){t&1&&L(0)}function Jo(t,o){if(t&1&&(d(0,"div",3),Me(1),g(2,Yo,1,0,"ng-container",6),p()),t&2){let e=c();_(e.cx("header")),l("pBind",e.ptm("header")),s(2),l("ngTemplateOutlet",e.headerTemplate)}}function Xo(t,o){if(t&1){let e=C();d(0,"p-paginator",7),v("onPageChange",function(i){u(e);let r=c();return m(r.paginate(i))}),p()}if(t&2){let e=c();l("rows",e.rows)("first",e.first)("totalRecords",e.totalRecords)("pageLinkSize",e.pageLinks)("alwaysShow",e.alwaysShowPaginator)("rowsPerPageOptions",e.rowsPerPageOptions)("appendTo",e.paginatorDropdownAppendTo)("dropdownScrollHeight",e.paginatorDropdownScrollHeight)("templateLeft",e.paginatorleft)("templateRight",e.paginatorright)("currentPageReportTemplate",e.currentPageReportTemplate)("showFirstLastIcon",e.showFirstLastIcon)("dropdownItemTemplate",e.paginatordropdownitem)("showCurrentPageReport",e.showCurrentPageReport)("showJumpToPageDropdown",e.showJumpToPageDropdown)("showPageLinks",e.showPageLinks)("styleClass",e.cn(e.cx("pcPaginator",Ve(18,jo)),e.paginatorStyleClass))("pt",e.ptm("pcPaginator"))}}function er(t,o){t&1&&L(0)}function tr(t,o){if(t&1&&(g(0,er,1,0,"ng-container",8),gt(1,"slice")),t&2){let e=c();l("ngTemplateOutlet",e.listTemplate)("ngTemplateOutletContext",F(6,Ei,e.paginator?ht(1,2,e.filteredValue||e.value,e.lazy?0:e.first,(e.lazy?0:e.first)+e.rows):e.filteredValue||e.value))}}function ir(t,o){t&1&&L(0)}function nr(t,o){if(t&1&&(g(0,ir,1,0,"ng-container",8),gt(1,"slice")),t&2){let e=c();l("ngTemplateOutlet",e.gridTemplate)("ngTemplateOutletContext",F(6,Ei,e.paginator?ht(1,2,e.filteredValue||e.value,e.lazy?0:e.first,(e.lazy?0:e.first)+e.rows):e.filteredValue||e.value))}}function or(t,o){if(t&1&&(R(0),h(1),V()),t&2){let e=c(2);s(),q(" ",e.emptyMessageLabel," ")}}function rr(t,o){t&1&&L(0,null,0)}function ar(t,o){if(t&1&&(d(0,"div",3),g(1,or,2,1,"ng-container",9)(2,rr,2,0,"ng-container",6),p()),t&2){let e=c();_(e.cx("emptyMessage")),l("pBind",e.ptm("emptyMessage")),s(),l("ngIf",!e.emptymessageTemplate)("ngIfElse",e.empty),s(),l("ngTemplateOutlet",e.emptymessageTemplate)}}function sr(t,o){if(t&1){let e=C();d(0,"p-paginator",7),v("onPageChange",function(i){u(e);let r=c();return m(r.paginate(i))}),p()}if(t&2){let e=c();l("rows",e.rows)("first",e.first)("totalRecords",e.totalRecords)("pageLinkSize",e.pageLinks)("alwaysShow",e.alwaysShowPaginator)("rowsPerPageOptions",e.rowsPerPageOptions)("appendTo",e.paginatorDropdownAppendTo)("dropdownScrollHeight",e.paginatorDropdownScrollHeight)("templateLeft",e.paginatorleft)("templateRight",e.paginatorright)("currentPageReportTemplate",e.currentPageReportTemplate)("showFirstLastIcon",e.showFirstLastIcon)("dropdownItemTemplate",e.paginatordropdownitem)("showCurrentPageReport",e.showCurrentPageReport)("showJumpToPageDropdown",e.showJumpToPageDropdown)("showPageLinks",e.showPageLinks)("styleClass",e.cn(e.cx("pcPaginator",Ve(18,Go)),e.paginatorStyleClass))("pt",e.ptm("pcPaginator"))}}function lr(t,o){t&1&&L(0)}function cr(t,o){if(t&1&&(d(0,"div",3),Me(1,1),g(2,lr,1,0,"ng-container",6),p()),t&2){let e=c();_(e.cx("footer")),l("pBind",e.ptm("footer")),s(2),l("ngTemplateOutlet",e.footerTemplate)}}var dr={root:({instance:t})=>["p-dataview p-component",{"p-dataview-list":t.layout==="list","p-dataview-grid":t.layout==="grid"}],header:"p-dataview-header",loading:"p-dataview-loading",loadingOverlay:"p-dataview-loading-overlay p-overlay-mask",loadingIcon:"p-dataview-loading-icon",pcPaginator:({position:t})=>"p-dataview-paginator-"+t,content:"p-dataview-content",emptyMessage:"p-dataview-empty-message",footer:"p-dataview-footer"},Ii=(()=>{class t extends X{name="dataview";style=Di;classes=dr;static \u0275fac=(()=>{let e;return function(i){return(e||(e=B(t)))(i||t)}})();static \u0275prov=z({token:t,factory:t.\u0275fac})}return t})();var Ti=new W("DATAVIEW_INSTANCE"),bt=(()=>{class t extends Ce{bindDirectiveInstance=w(I,{self:!0});$pcDataView=w(Ti,{optional:!0,skipSelf:!0})??void 0;onAfterViewChecked(){this.bindDirectiveInstance.setAttrs(this.ptms(["host","root"]))}paginator;rows;totalRecords;pageLinks=5;rowsPerPageOptions;paginatorPosition="bottom";paginatorStyleClass;alwaysShowPaginator=!0;paginatorDropdownAppendTo;paginatorDropdownScrollHeight="200px";currentPageReportTemplate="{currentPage} of {totalPages}";showCurrentPageReport;showJumpToPageDropdown;showFirstLastIcon=!0;showPageLinks=!0;lazy;lazyLoadOnInit=!0;emptyMessage="";styleClass;gridStyleClass="";trackBy=(e,n)=>n;filterBy;filterLocale;loading;loadingIcon;first=0;sortField;sortOrder;value;layout="list";onLazyLoad=new D;onPage=new D;onSort=new D;onChangeLayout=new D;listTemplate;gridTemplate;headerTemplate;emptymessageTemplate;footerTemplate;paginatorleft;paginatorright;paginatordropdownitem;loadingicon;listicon;gridicon;header;footer;_value;filteredValue;filterValue;initialized;_layout="list";translationSubscription;_componentStyle=w(Ii);get emptyMessageLabel(){return this.emptyMessage||this.config.getTranslation(xe.EMPTY_MESSAGE)}filterService=w(kt);onInit(){this.lazy&&this.lazyLoadOnInit&&this.onLazyLoad.emit(this.createLazyLoadMetadata()),this.translationSubscription=this.config.translationObserver.subscribe(()=>{this.cd.markForCheck()}),this.initialized=!0}onAfterViewInit(){}onChanges(e){e.layout&&!e.layout.firstChange&&this.onChangeLayout.emit({layout:e.layout.currentValue}),e.value&&(this._value=e.value.currentValue,this.updateTotalRecords(),!this.lazy&&this.hasFilter()&&this.filter(this.filterValue)),(e.sortField||e.sortOrder)&&(!this.lazy||this.initialized)&&this.sort()}updateTotalRecords(){this.totalRecords=this.lazy?this.totalRecords:this._value?this._value.length:0}paginate(e){this.first=e.first,this.rows=e.rows,this.lazy&&this.onLazyLoad.emit(this.createLazyLoadMetadata()),this.onPage.emit({first:this.first,rows:this.rows})}sort(){this.first=0,this.lazy?this.onLazyLoad.emit(this.createLazyLoadMetadata()):this.value&&(this.value.sort((e,n)=>{let i=ce(e,this.sortField),r=ce(n,this.sortField),a;return i==null&&r!=null?a=-1:i!=null&&r==null?a=1:i==null&&r==null?a=0:typeof i=="string"&&typeof r=="string"?a=i.localeCompare(r):a=i<r?-1:i>r?1:0,this.sortOrder*a}),this.hasFilter()&&this.filter(this.filterValue)),this.onSort.emit({sortField:this.sortField,sortOrder:this.sortOrder})}isEmpty(){let e=this.filteredValue||this.value;return e==null||e.length==0}createLazyLoadMetadata(){return{first:this.first,rows:this.rows,sortField:this.sortField,sortOrder:this.sortOrder}}getBlockableElement(){return this.el.nativeElement.children[0]}filter(e,n="contains"){if(this.filterValue=e,this.value&&this.value.length){let i=this.filterBy.split(",");this.filteredValue=this.filterService.filter(this.value,i,e,n,this.filterLocale),this.filteredValue.length===this.value.length&&(this.filteredValue=null),this.paginator&&(this.first=0,this.totalRecords=this.filteredValue?this.filteredValue.length:this.value?this.value.length:0),this.cd.markForCheck()}}hasFilter(){return this.filterValue&&this.filterValue.trim().length>0}onDestroy(){this.translationSubscription&&this.translationSubscription.unsubscribe()}static \u0275fac=(()=>{let e;return function(i){return(e||(e=B(t)))(i||t)}})();static \u0275cmp=P({type:t,selectors:[["p-dataView"],["p-dataview"],["p-data-view"]],contentQueries:function(n,i,r){if(n&1&&(S(r,Oo,5),S(r,Mo,5),S(r,Ro,5),S(r,Vo,5),S(r,Lo,5),S(r,Ao,5),S(r,Fo,5),S(r,No,5),S(r,Bo,5),S(r,zo,5),S(r,Ho,5),S(r,Mt,5),S(r,Rt,5)),n&2){let a;b(a=y())&&(i.listTemplate=a.first),b(a=y())&&(i.gridTemplate=a.first),b(a=y())&&(i.headerTemplate=a.first),b(a=y())&&(i.emptymessageTemplate=a.first),b(a=y())&&(i.footerTemplate=a.first),b(a=y())&&(i.paginatorleft=a.first),b(a=y())&&(i.paginatorright=a.first),b(a=y())&&(i.paginatordropdownitem=a.first),b(a=y())&&(i.loadingicon=a.first),b(a=y())&&(i.listicon=a.first),b(a=y())&&(i.gridicon=a.first),b(a=y())&&(i.header=a.first),b(a=y())&&(i.footer=a.first)}},hostVars:2,hostBindings:function(n,i){n&2&&_(i.cn(i.cx("root"),i.styleClass))},inputs:{paginator:[2,"paginator","paginator",x],rows:[2,"rows","rows",K],totalRecords:[2,"totalRecords","totalRecords",K],pageLinks:[2,"pageLinks","pageLinks",K],rowsPerPageOptions:"rowsPerPageOptions",paginatorPosition:"paginatorPosition",paginatorStyleClass:"paginatorStyleClass",alwaysShowPaginator:[2,"alwaysShowPaginator","alwaysShowPaginator",x],paginatorDropdownAppendTo:"paginatorDropdownAppendTo",paginatorDropdownScrollHeight:"paginatorDropdownScrollHeight",currentPageReportTemplate:"currentPageReportTemplate",showCurrentPageReport:[2,"showCurrentPageReport","showCurrentPageReport",x],showJumpToPageDropdown:[2,"showJumpToPageDropdown","showJumpToPageDropdown",x],showFirstLastIcon:[2,"showFirstLastIcon","showFirstLastIcon",x],showPageLinks:[2,"showPageLinks","showPageLinks",x],lazy:[2,"lazy","lazy",x],lazyLoadOnInit:[2,"lazyLoadOnInit","lazyLoadOnInit",x],emptyMessage:"emptyMessage",styleClass:"styleClass",gridStyleClass:"gridStyleClass",trackBy:"trackBy",filterBy:"filterBy",filterLocale:"filterLocale",loading:[2,"loading","loading",x],loadingIcon:"loadingIcon",first:[2,"first","first",K],sortField:"sortField",sortOrder:[2,"sortOrder","sortOrder",K],value:"value",layout:"layout"},outputs:{onLazyLoad:"onLazyLoad",onPage:"onPage",onSort:"onSort",onChangeLayout:"onChangeLayout"},features:[Y([Ii,{provide:Ti,useExisting:t},{provide:ee,useExisting:t}]),Z([I]),U],ngContentSelectors:Qo,decls:9,vars:11,consts:[["empty",""],[3,"pBind","class"],[3,"rows","first","totalRecords","pageLinkSize","alwaysShow","rowsPerPageOptions","appendTo","dropdownScrollHeight","templateLeft","templateRight","currentPageReportTemplate","showFirstLastIcon","dropdownItemTemplate","showCurrentPageReport","showJumpToPageDropdown","showPageLinks","styleClass","pt"],[3,"pBind"],[3,"class"],["data-p-icon","spinner",3,"pBind","spin"],[4,"ngTemplateOutlet"],[3,"onPageChange","rows","first","totalRecords","pageLinkSize","alwaysShow","rowsPerPageOptions","appendTo","dropdownScrollHeight","templateLeft","templateRight","currentPageReportTemplate","showFirstLastIcon","dropdownItemTemplate","showCurrentPageReport","showJumpToPageDropdown","showPageLinks","styleClass","pt"],[4,"ngTemplateOutlet","ngTemplateOutletContext"],[4,"ngIf","ngIfElse"]],template:function(n,i){n&1&&(qe(qo),O(0,Zo,4,7,"div",1),O(1,Jo,3,4,"div",1),O(2,Xo,1,19,"p-paginator",2),d(3,"div",3),O(4,tr,2,8,"ng-container"),O(5,nr,2,8,"ng-container"),O(6,ar,3,6,"div",1),p(),O(7,sr,1,19,"p-paginator",2),O(8,cr,3,4,"div",1)),n&2&&(M(i.loading?0:-1),s(),M(i.header||i.headerTemplate?1:-1),s(),M(i.paginator&&(i.paginatorPosition==="top"||i.paginatorPosition=="both")?2:-1),s(),_(i.cx("content")),l("pBind",i.ptm("content")),s(),M(i.layout==="list"?4:-1),s(),M(i.layout==="grid"?5:-1),s(),M(i.isEmpty()&&!i.loading?6:-1),s(),M(i.paginator&&(i.paginatorPosition==="bottom"||i.paginatorPosition=="both")?7:-1),s(),M(i.footer||i.footerTemplate?8:-1))},dependencies:[A,J,re,si,ai,We,N,I,Tt],encapsulation:2,changeDetection:0})}return t})(),ki=(()=>{class t{static \u0275fac=function(n){return new(n||t)};static \u0275mod=ne({type:t});static \u0275inj=ie({imports:[bt,N,N]})}return t})();function Oi(t,o,e){let n=Pi(o,t.length-1),i=Pi(e,t.length-1);if(n===i)return;let r=t[n],a=i<n?-1:1;for(let E=n;E!==i;E+=a)t[E]=t[E+a];t[i]=r}function Pi(t,o){return Math.max(0,Math.min(o,t))}var Mi=`
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
`;var ur=`
    ${Mi}

    /* For PrimeNG */
    .p-textarea.ng-invalid.ng-dirty {
        border-color: dt('textarea.invalid.border.color');
    }
    .p-textarea.ng-invalid.ng-dirty::placeholder {
        color: dt('textarea.invalid.placeholder.color');
    }
`,mr={root:({instance:t})=>["p-textarea p-component",{"p-filled":t.$filled(),"p-textarea-resizable ":t.autoResize,"p-variant-filled":t.$variant()==="filled","p-textarea-fluid":t.hasFluid,"p-inputfield-sm p-textarea-sm":t.pSize==="small","p-textarea-lg p-inputfield-lg":t.pSize==="large","p-invalid":t.invalid()}]},Ri=(()=>{class t extends X{name="textarea";style=ur;classes=mr;static \u0275fac=(()=>{let e;return function(i){return(e||(e=B(t)))(i||t)}})();static \u0275prov=z({token:t,factory:t.\u0275fac})}return t})();var Vi=new W("TEXTAREA_INSTANCE"),Li=(()=>{class t extends Yt{bindDirectiveInstance=w(I,{self:!0});$pcTextarea=w(Vi,{optional:!0,skipSelf:!0})??void 0;autoResize;pSize;variant=ue();fluid=ue(void 0,{transform:x});invalid=ue(void 0,{transform:x});$variant=be(()=>this.variant()||this.config.inputStyle()||this.config.inputVariant());onResize=new D;ngControlSubscription;_componentStyle=w(Ri);ngControl=w(qt,{optional:!0,self:!0});pcFluid=w(Bt,{optional:!0,host:!0,skipSelf:!0});get hasFluid(){return this.fluid()??!!this.pcFluid}onInit(){this.ngControl&&(this.ngControlSubscription=this.ngControl.valueChanges.subscribe(()=>{this.updateState()}))}onAfterViewInit(){this.autoResize&&this.resize(),this.cd.detectChanges()}onAfterViewChecked(){this.bindDirectiveInstance.setAttrs(this.ptms(["host","root"])),this.autoResize&&this.resize(),this.writeModelValue(this.ngControl?.value??this.el.nativeElement.value)}onInput(e){this.writeModelValue(e.target?.value),this.updateState()}resize(e){this.el.nativeElement.style.height="auto",this.el.nativeElement.style.height=this.el.nativeElement.scrollHeight+"px",parseFloat(this.el.nativeElement.style.height)>=parseFloat(this.el.nativeElement.style.maxHeight)?(this.el.nativeElement.style.overflowY="scroll",this.el.nativeElement.style.height=this.el.nativeElement.style.maxHeight):this.el.nativeElement.style.overflow="hidden",this.onResize.emit(e||{})}updateState(){this.autoResize&&this.resize()}onDestroy(){this.ngControlSubscription&&this.ngControlSubscription.unsubscribe()}static \u0275fac=(()=>{let e;return function(i){return(e||(e=B(t)))(i||t)}})();static \u0275dir=St({type:t,selectors:[["","pTextarea",""],["","pInputTextarea",""]],hostVars:2,hostBindings:function(n,i){n&1&&v("input",function(a){return i.onInput(a)}),n&2&&_(i.cx("root"))},inputs:{autoResize:[2,"autoResize","autoResize",x],pSize:"pSize",variant:[1,"variant"],fluid:[1,"fluid"],invalid:[1,"invalid"]},outputs:{onResize:"onResize"},features:[Y([Ri,{provide:Vi,useExisting:t},{provide:ee,useExisting:t}]),Z([I]),U]})}return t})(),Ai=(()=>{class t{static \u0275fac=function(n){return new(n||t)};static \u0275mod=ne({type:t});static \u0275inj=ie({})}return t})();var Fi=`
    .p-toggleswitch {
        display: inline-block;
        width: dt('toggleswitch.width');
        height: dt('toggleswitch.height');
    }

    .p-toggleswitch-input {
        cursor: pointer;
        appearance: none;
        position: absolute;
        top: 0;
        inset-inline-start: 0;
        width: 100%;
        height: 100%;
        padding: 0;
        margin: 0;
        opacity: 0;
        z-index: 1;
        outline: 0 none;
        border-radius: dt('toggleswitch.border.radius');
    }

    .p-toggleswitch-slider {
        cursor: pointer;
        width: 100%;
        height: 100%;
        border-width: dt('toggleswitch.border.width');
        border-style: solid;
        border-color: dt('toggleswitch.border.color');
        background: dt('toggleswitch.background');
        transition:
            background dt('toggleswitch.transition.duration'),
            color dt('toggleswitch.transition.duration'),
            border-color dt('toggleswitch.transition.duration'),
            outline-color dt('toggleswitch.transition.duration'),
            box-shadow dt('toggleswitch.transition.duration');
        border-radius: dt('toggleswitch.border.radius');
        outline-color: transparent;
        box-shadow: dt('toggleswitch.shadow');
    }

    .p-toggleswitch-handle {
        position: absolute;
        top: 50%;
        display: flex;
        justify-content: center;
        align-items: center;
        background: dt('toggleswitch.handle.background');
        color: dt('toggleswitch.handle.color');
        width: dt('toggleswitch.handle.size');
        height: dt('toggleswitch.handle.size');
        inset-inline-start: dt('toggleswitch.gap');
        margin-block-start: calc(-1 * calc(dt('toggleswitch.handle.size') / 2));
        border-radius: dt('toggleswitch.handle.border.radius');
        transition:
            background dt('toggleswitch.transition.duration'),
            color dt('toggleswitch.transition.duration'),
            inset-inline-start dt('toggleswitch.slide.duration'),
            box-shadow dt('toggleswitch.slide.duration');
    }

    .p-toggleswitch.p-toggleswitch-checked .p-toggleswitch-slider {
        background: dt('toggleswitch.checked.background');
        border-color: dt('toggleswitch.checked.border.color');
    }

    .p-toggleswitch.p-toggleswitch-checked .p-toggleswitch-handle {
        background: dt('toggleswitch.handle.checked.background');
        color: dt('toggleswitch.handle.checked.color');
        inset-inline-start: calc(dt('toggleswitch.width') - calc(dt('toggleswitch.handle.size') + dt('toggleswitch.gap')));
    }

    .p-toggleswitch:not(.p-disabled):has(.p-toggleswitch-input:hover) .p-toggleswitch-slider {
        background: dt('toggleswitch.hover.background');
        border-color: dt('toggleswitch.hover.border.color');
    }

    .p-toggleswitch:not(.p-disabled):has(.p-toggleswitch-input:hover) .p-toggleswitch-handle {
        background: dt('toggleswitch.handle.hover.background');
        color: dt('toggleswitch.handle.hover.color');
    }

    .p-toggleswitch:not(.p-disabled):has(.p-toggleswitch-input:hover).p-toggleswitch-checked .p-toggleswitch-slider {
        background: dt('toggleswitch.checked.hover.background');
        border-color: dt('toggleswitch.checked.hover.border.color');
    }

    .p-toggleswitch:not(.p-disabled):has(.p-toggleswitch-input:hover).p-toggleswitch-checked .p-toggleswitch-handle {
        background: dt('toggleswitch.handle.checked.hover.background');
        color: dt('toggleswitch.handle.checked.hover.color');
    }

    .p-toggleswitch:not(.p-disabled):has(.p-toggleswitch-input:focus-visible) .p-toggleswitch-slider {
        box-shadow: dt('toggleswitch.focus.ring.shadow');
        outline: dt('toggleswitch.focus.ring.width') dt('toggleswitch.focus.ring.style') dt('toggleswitch.focus.ring.color');
        outline-offset: dt('toggleswitch.focus.ring.offset');
    }

    .p-toggleswitch.p-invalid > .p-toggleswitch-slider {
        border-color: dt('toggleswitch.invalid.border.color');
    }

    .p-toggleswitch.p-disabled {
        opacity: 1;
    }

    .p-toggleswitch.p-disabled .p-toggleswitch-slider {
        background: dt('toggleswitch.disabled.background');
    }

    .p-toggleswitch.p-disabled .p-toggleswitch-handle {
        background: dt('toggleswitch.handle.disabled.background');
    }
`;var hr=["handle"],_r=["input"],fr=t=>({checked:t});function vr(t,o){t&1&&L(0)}function br(t,o){if(t&1&&g(0,vr,1,0,"ng-container",3),t&2){let e=c();l("ngTemplateOutlet",e.handleTemplate||e._handleTemplate)("ngTemplateOutletContext",F(2,fr,e.checked()))}}var yr=`
    ${Fi}

    p-toggleswitch.ng-invalid.ng-dirty > .p-toggleswitch-slider {
        border-color: dt('toggleswitch.invalid.border.color');
    }
`,wr={root:{position:"relative"}},xr={root:({instance:t})=>["p-toggleswitch p-component",{"p-toggleswitch p-component":!0,"p-toggleswitch-checked":t.checked(),"p-disabled":t.$disabled(),"p-invalid":t.invalid()}],input:"p-toggleswitch-input",slider:"p-toggleswitch-slider",handle:"p-toggleswitch-handle"},Ni=(()=>{class t extends X{name="toggleswitch";style=yr;classes=xr;inlineStyles=wr;static \u0275fac=(()=>{let e;return function(i){return(e||(e=B(t)))(i||t)}})();static \u0275prov=z({token:t,factory:t.\u0275fac})}return t})();var Bi=new W("TOGGLESWITCH_INSTANCE"),Cr={provide:Ye,useExisting:Ne(()=>ct),multi:!0},ct=(()=>{class t extends Xt{$pcToggleSwitch=w(Bi,{optional:!0,skipSelf:!0})??void 0;bindDirectiveInstance=w(I,{self:!0});onAfterViewChecked(){this.bindDirectiveInstance.setAttrs(this.ptms(["host","root"]))}styleClass;tabindex;inputId;readonly;trueValue=!0;falseValue=!1;ariaLabel;size=ue();ariaLabelledBy;autofocus;onChange=new D;input;handleTemplate;_handleTemplate;focused=!1;_componentStyle=w(Ni);templates;onHostClick(e){this.onClick(e)}onAfterContentInit(){this.templates.forEach(e=>{switch(e.getType()){case"handle":this._handleTemplate=e.template;break;default:this._handleTemplate=e.template;break}})}onClick(e){!this.$disabled()&&!this.readonly&&(this.writeModelValue(this.checked()?this.falseValue:this.trueValue),this.onModelChange(this.modelValue()),this.onChange.emit({originalEvent:e,checked:this.modelValue()}),this.input.nativeElement.focus())}onFocus(){this.focused=!0}onBlur(){this.focused=!1,this.onModelTouched()}checked(){return this.modelValue()===this.trueValue}writeControlValue(e,n){n(e),this.cd.markForCheck()}static \u0275fac=(()=>{let e;return function(i){return(e||(e=B(t)))(i||t)}})();static \u0275cmp=P({type:t,selectors:[["p-toggleswitch"],["p-toggleSwitch"],["p-toggle-switch"]],contentQueries:function(n,i,r){if(n&1&&(S(r,hr,4),S(r,ae,4)),n&2){let a;b(a=y())&&(i.handleTemplate=a.first),b(a=y())&&(i.templates=a)}},viewQuery:function(n,i){if(n&1&&oe(_r,5),n&2){let r;b(r=y())&&(i.input=r.first)}},hostVars:5,hostBindings:function(n,i){n&1&&v("click",function(a){return i.onHostClick(a)}),n&2&&(T("data-pc-name","toggleswitch"),ve(i.sx("root")),_(i.cn(i.cx("root"),i.styleClass)))},inputs:{styleClass:"styleClass",tabindex:[2,"tabindex","tabindex",K],inputId:"inputId",readonly:[2,"readonly","readonly",x],trueValue:"trueValue",falseValue:"falseValue",ariaLabel:"ariaLabel",size:[1,"size"],ariaLabelledBy:"ariaLabelledBy",autofocus:[2,"autofocus","autofocus",x]},outputs:{onChange:"onChange"},features:[Y([Cr,Ni,{provide:Bi,useExisting:t},{provide:ee,useExisting:t}]),Z([I]),U],decls:5,vars:20,consts:[["input",""],["type","checkbox","role","switch",3,"focus","blur","checked","pAutoFocus","pBind"],[3,"pBind"],[4,"ngTemplateOutlet","ngTemplateOutletContext"]],template:function(n,i){if(n&1){let r=C();d(0,"input",1,0),v("focus",function(){return u(r),m(i.onFocus())})("blur",function(){return u(r),m(i.onBlur())}),p(),d(2,"div",2)(3,"div",2),O(4,br,1,4,"ng-container"),p()()}n&2&&(_(i.cx("input")),l("checked",i.checked())("pAutoFocus",i.autofocus)("pBind",i.ptm("input")),T("id",i.inputId)("required",i.required()?"":void 0)("disabled",i.$disabled()?"":void 0)("aria-checked",i.checked())("aria-labelledby",i.ariaLabelledBy)("aria-label",i.ariaLabel)("name",i.name())("tabindex",i.tabindex),s(2),_(i.cx("slider")),l("pBind",i.ptm("slider")),s(),_(i.cx("handle")),l("pBind",i.ptm("handle")),s(),M(i.handleTemplate||i._handleTemplate?4:-1))},dependencies:[A,re,Ze,N,$e,I],encapsulation:2,changeDetection:0})}return t})(),zi=(()=>{class t{static \u0275fac=function(n){return new(n||t)};static \u0275mod=ne({type:t});static \u0275inj=ie({imports:[ct,N,N]})}return t})();function Ir(t,o){t&1&&(d(0,"div",22)(1,"div",23)(2,"span",24),h(3,"1"),p()(),d(4,"span",25),h(5,"Datos Generales"),p()())}function Tr(t,o){t&1&&(d(0,"small",26),h(1,"Campo requerido"),p())}function Er(t,o){if(t&1){let e=C();d(0,"div",27)(1,"label",5),h(2,"Monto (S/) *"),p(),d(3,"p-inputNumber",28),G("ngModelChange",function(i){u(e);let r=c();return j(r.form.costo,i)||(r.form.costo=i),m(i)}),p()()}if(t&2){let e=c();s(3),Q("ngModel",e.form.costo),l("min",0)}}function kr(t,o){t&1&&(d(0,"div",29)(1,"div",30),f(2,"i",31),d(3,"span",32),h(4,"Costo: "),d(5,"strong"),h(6,"S/ 0.00"),p(),h(7," (Gratuito)"),p()()())}function Pr(t,o){t&1&&(d(0,"div",22)(1,"div",23)(2,"span",24),h(3,"2"),p()(),d(4,"span",25),h(5,"\xC1reas Participantes en el Flujo"),p()())}function Or(t,o){if(t&1&&(d(0,"div",33),f(1,"i"),d(2,"span"),h(3),p()()),t&2){let e=o.$implicit;s(),_(e.icono+" text-primary"),s(2),H(e.nombre)}}function Mr(t,o){t&1&&(d(0,"div",34),f(1,"i",35),h(2," Agrega \xE1reas para construir el flujo del tr\xE1mite "),p())}function Rr(t,o){if(t&1&&(d(0,"div",55),f(1,"i",56),d(2,"span",57),h(3),p()()),t&2){let e=c().$implicit;s(3),q("",e.sla,"d")}}function Vr(t,o){if(t&1){let e=C();R(0),d(1,"div",39)(2,"div",40)(3,"div",41),f(4,"i",42),p(),d(5,"div",43)(6,"div",44),f(7,"i",45),p(),d(8,"span",46),h(9),p(),d(10,"div",47)(11,"span",48),h(12,"SLA:"),p(),d(13,"p-inputNumber",49),G("ngModelChange",function(i){let r=u(e).$implicit;return j(r.sla,i)||(r.sla=i),m(i)}),v("click",function(i){return u(e),m(i.stopPropagation())}),p(),d(14,"span",48),h(15,"d"),p()()(),d(16,"div",50)(17,"span",51),h(18),p()(),d(19,"button",52),v("click",function(i){let r=u(e).index;return c(2).eliminarArea(r),m(i.stopPropagation())}),f(20,"i",53),p()(),g(21,Rr,4,1,"div",54),p(),V()}if(t&2){let e=o.$implicit,n=o.index,i=o.last,r=c(2);s(5),fe("border-color",r.getAreaColor(n))("background",r.getAreaColorLight(n)),s(),fe("background-color",r.getAreaColor(n)),s(),_(e.icono+" text-white"),s(2),q(" ",e.nombre," "),s(4),Q("ngModel",e.sla),l("min",1)("max",30)("showButtons",!1),s(5),H(n+1),s(3),l("ngIf",!i)}}function Lr(t,o){if(t&1){let e=C();d(0,"div",36)(1,"div",37),v("cdkDropListDropped",function(i){u(e);let r=c();return m(r.dropArea(i))}),g(2,Vr,22,15,"ng-container",38),p()()}if(t&2){let e=c();s(2),l("ngForOf",e.form.areas)}}function Ar(t,o){if(t&1&&(d(0,"div",58),f(1,"i",59),d(2,"span",60),h(3," Tiempo total estimado: "),d(4,"strong",61),h(5),p(),h(6),p()()),t&2){let e=c();s(5),Re("",e.totalDias," d\xEDa",e.totalDias!==1?"s":""),s(),Re(" \xB7 ",e.form.areas.length," \xE1rea",e.form.areas.length!==1?"s":""," en el flujo ")}}function Fr(t,o){if(t&1){let e=C();d(0,"div",62)(1,"div",33)(2,"div",23)(3,"span",24),h(4,"3"),p()(),d(5,"span",25),h(6,"Documentos Requeridos"),p()(),d(7,"p-toggleSwitch",10),G("ngModelChange",function(i){u(e);let r=c();return j(r.form.requiereDocumentos,i)||(r.form.requiereDocumentos=i),m(i)}),p()()}if(t&2){let e=c();s(7),Q("ngModel",e.form.requiereDocumentos)}}function Nr(t,o){t&1&&(d(0,"div",63),f(1,"i",64),d(2,"span",65),h(3,"Este tr\xE1mite no requiere documentos adjuntos"),p()())}function Br(t,o){if(t&1&&(d(0,"div",33),f(1,"p-tag",71),d(2,"span"),h(3),p()()),t&2){let e=o.$implicit;s(),l("value",e.tipo)("severity",e.tipo==="PDF"?"danger":"info"),s(2),H(e.nombre)}}function zr(t,o){t&1&&(d(0,"div",34),f(1,"i",72),h(2," Selecciona o escribe los documentos que se necesitan "),p())}function Hr(t,o){if(t&1){let e=C();d(0,"div",75)(1,"span",76),h(2),p(),d(3,"input",77),G("ngModelChange",function(i){let r=u(e).$implicit;return j(r.nombre,i)||(r.nombre=i),m(i)}),p(),f(4,"p-tag",78),d(5,"ui-icon-button",79),v("onClick",function(){let i=u(e).index,r=c(3);return m(r.eliminarDocumento(i))}),p()()}if(t&2){let e=o.$implicit,n=o.index;s(2),q(" ",n+1," "),s(),Q("ngModel",e.nombre),s(),l("value",e.tipo)}}function qr(t,o){if(t&1&&(d(0,"div",73),g(1,Hr,6,3,"div",74),p()),t&2){let e=c(2);s(),l("ngForOf",e.form.documentos)}}function Qr(t,o){if(t&1&&(d(0,"div",80)(1,"span",60),f(2,"i",81),h(3," Total: "),d(4,"strong"),h(5),p(),h(6," doc(s) "),p()()),t&2){let e=c(2);s(5),H(e.form.documentos.length)}}function jr(t,o){if(t&1){let e=C();R(0),d(1,"div",13)(2,"p-autoComplete",66),G("ngModelChange",function(i){u(e);let r=c();return j(r.docQuery,i)||(r.docQuery=i),m(i)}),v("completeMethod",function(i){u(e);let r=c();return m(r.buscarDocumentos(i))})("onSelect",function(i){u(e);let r=c();return m(r.agregarDocumento(i))}),g(3,Br,4,3,"ng-template",null,1,k),p(),d(5,"input",67),G("ngModelChange",function(i){u(e);let r=c();return j(r.nuevoDocNombre,i)||(r.nuevoDocNombre=i),m(i)}),p(),d(6,"ui-button",68),v("onClick",function(){u(e);let i=c();return m(i.agregarDocumentoLibre())}),p()(),g(7,zr,3,0,"div",17)(8,qr,2,1,"div",69)(9,Qr,7,1,"div",70),V()}if(t&2){let e=c();s(2),l("dropdown",!0),Q("ngModel",e.docQuery),l("suggestions",e.docsSugeridos)("forceSelection",!0),s(3),Q("ngModel",e.nuevoDocNombre),s(),l("disabled",!e.nuevoDocNombre.trim()),s(),l("ngIf",e.form.documentos.length===0),s(),l("ngIf",e.form.documentos.length>0),s(),l("ngIf",e.form.documentos.length>0)}}var dt=class t{constructor(o){this.messageService=o}subcategoria=null;guardado=new D;cancelado=new D;modoEdicion=!1;submitted=!1;isDragging=!1;form={nombre:"",descripcion:"",tieneCosto:!1,costo:0,areas:[],requiereDocumentos:!1,documentos:[]};todasLasAreas=[{id:1,nombre:"Secretar\xEDa Acad\xE9mica",icono:"pi pi-graduation-cap"},{id:2,nombre:"Contabilidad",icono:"pi pi-calculator"},{id:3,nombre:"Rectorado",icono:"pi pi-building"},{id:4,nombre:"Archivo",icono:"pi pi-folder"},{id:5,nombre:"Decanato",icono:"pi pi-shield"},{id:6,nombre:"Registro",icono:"pi pi-id-card"},{id:7,nombre:"Recursos Humanos",icono:"pi pi-users"},{id:8,nombre:"Tesorer\xEDa",icono:"pi pi-wallet"},{id:9,nombre:"Direcci\xF3n General",icono:"pi pi-star"},{id:10,nombre:"Sistemas",icono:"pi pi-desktop"},{id:11,nombre:"Bienestar Estudiantil",icono:"pi pi-heart"},{id:12,nombre:"Biblioteca",icono:"pi pi-book"}];areasSugeridas=[];areaQuery=null;todosLosDocumentos=[{id:1,nombre:"Copia DNI",tipo:"PDF"},{id:2,nombre:"Constancia de Egresado",tipo:"PDF"},{id:3,nombre:"Recibo de Pago",tipo:"Image"},{id:4,nombre:"Certificado de Idiomas",tipo:"Image"},{id:5,nombre:"Tesis",tipo:"Image"},{id:6,nombre:"S\xEDlabo Original",tipo:"PDF"},{id:7,nombre:"Certificado de Notas",tipo:"PDF"},{id:8,nombre:"Carta de Presentaci\xF3n",tipo:"Word"},{id:9,nombre:"Foto Carn\xE9",tipo:"Image"},{id:10,nombre:"Recibo Original",tipo:"PDF"}];docsSugeridos=[];docQuery=null;nuevoDocNombre="";tiposDocumento=[{label:"PDF",value:"PDF"},{label:"Imagen",value:"Image"},{label:"Word",value:"Word"}];coloresPaleta=["#4F81BD","#70AD47","#FFC000","#ED7D31","#5B9BD5","#A9D18E","#9E480E","#833C00"];coloresLight=["#DDEEFF","#E9F6E0","#FFF6D6","#FDE8D8","#D9ECF9","#EAF5E2","#F5E3D4","#F5E0D4"];get modalPrimaryLabel(){return this.modoEdicion?"Guardar Cambios":"Crear Subcategor\xEDa"}ngOnInit(){this.subcategoria&&(this.modoEdicion=!0,this.form={nombre:this.subcategoria.nombre,descripcion:this.subcategoria.descripcion,tieneCosto:this.subcategoria.costo>0,costo:this.subcategoria.costo,areas:this.subcategoria.areas.map((o,e)=>({id:e+1,nombre:o.nombre,icono:this.todasLasAreas.find(n=>n.nombre===o.nombre)?.icono??"pi pi-building",sla:o.sla})),requiereDocumentos:this.subcategoria.requiereDocumentos,documentos:this.subcategoria.documentos.map(o=>({nombre:o.nombre,tipo:o.tipo,requerido:o.requerido}))})}buscarAreas(o){let e=o.query.toLowerCase(),n=this.form.areas.map(i=>i.id);this.areasSugeridas=this.todasLasAreas.filter(i=>i.nombre.toLowerCase().includes(e)&&!n.includes(i.id))}agregarArea(o){let e=o.value;this.form.areas.push({id:e.id,nombre:e.nombre,icono:e.icono,sla:1}),setTimeout(()=>{this.areaQuery=null},0)}eliminarArea(o){this.form.areas.splice(o,1)}dropArea(o){Oi(this.form.areas,o.previousIndex,o.currentIndex)}getAreaColor(o){return this.coloresPaleta[o%this.coloresPaleta.length]}getAreaColorLight(o){return this.coloresLight[o%this.coloresLight.length]}get totalDias(){return this.form.areas.reduce((o,e)=>o+(e.sla||0),0)}buscarDocumentos(o){let e=o.query.toLowerCase(),n=this.form.documentos.map(i=>i.nombre.toLowerCase());this.docsSugeridos=this.todosLosDocumentos.filter(i=>i.nombre.toLowerCase().includes(e)&&!n.includes(i.nombre.toLowerCase()))}agregarDocumento(o){let e=o.value;this.form.documentos.push({nombre:e.nombre,tipo:e.tipo,requerido:!0}),setTimeout(()=>{this.docQuery=null},0)}agregarDocumentoLibre(){let o=this.nuevoDocNombre.trim();if(o){if(this.form.documentos.some(e=>e.nombre.toLowerCase()===o.toLowerCase())){this.messageService.add({severity:"warn",summary:"Duplicado",detail:"Ese documento ya fue agregado"});return}this.form.documentos.push({nombre:o,tipo:"PDF",requerido:!0}),this.nuevoDocNombre=""}}eliminarDocumento(o){this.form.documentos.splice(o,1)}get docsObligatorios(){return this.form.documentos.filter(o=>o.requerido).length}get docsOpcionales(){return this.form.documentos.filter(o=>!o.requerido).length}guardar(){if(this.submitted=!0,!this.form.nombre.trim()){this.messageService.add({severity:"error",summary:"Error",detail:"El nombre es requerido"});return}let o={id:this.subcategoria?.id??Date.now(),nombre:this.form.nombre.trim(),descripcion:this.form.descripcion.trim(),costo:this.form.tieneCosto&&this.form.costo||0,requiereDocumentos:this.form.requiereDocumentos,areas:this.form.areas.map(e=>({nombre:e.nombre,sla:e.sla})),documentos:this.form.documentos.map(e=>({nombre:e.nombre,tipo:e.tipo,requerido:e.requerido}))};this.guardado.emit(o),this.messageService.add({severity:"success",summary:this.modoEdicion?"Actualizado":"Creado",detail:`Subcategor\xEDa "${o.nombre}" ${this.modoEdicion?"actualizada":"creada"} correctamente`})}cancelar(){this.cancelado.emit()}static \u0275fac=function(e){return new(e||t)(Oe(Pt))};static \u0275cmp=P({type:t,selectors:[["app-add-edit-subcategoria"]],inputs:{subcategoria:"subcategoria"},outputs:{guardado:"guardado",cancelado:"cancelado"},decls:41,vars:15,consts:[["header",""],["item",""],[1,"col-12"],[1,"grid","mt-1"],[1,"col-12","md:col-6","flex","flex-column","gap-1"],[1,"font-semibold","text-sm","text-700"],["pInputText","","placeholder","Ej: Emisi\xF3n de T\xEDtulo",1,"w-full",3,"ngModelChange","ngModel"],["class","text-red-500",4,"ngIf"],["pTextarea","","rows","2","placeholder","Breve descripci\xF3n del tr\xE1mite...",1,"w-full",3,"ngModelChange","ngModel"],[1,"col-12","flex","align-items-center","gap-3","pt-1"],[3,"ngModelChange","ngModel"],["class","col-12 md:col-4 flex flex-column gap-1",4,"ngIf"],["class","col-12 md:col-4 flex align-items-center",4,"ngIf"],[1,"flex","align-items-center","gap-2","mb-3"],["optionLabel","nombre","placeholder","Buscar y agregar \xE1rea...","styleClass","flex-1","inputStyleClass","w-full","appendTo","body",3,"ngModelChange","completeMethod","onSelect","ngModel","dropdown","suggestions","forceSelection"],[1,"text-500","white-space-nowrap"],[1,"pi","pi-info-circle"],["class","surface-50 border-round border-1 border-dashed surface-border p-4 text-center text-500",4,"ngIf"],["style","overflow-x: auto; padding-bottom: 12px;",4,"ngIf"],["class","flex align-items-center gap-2 mt-3 surface-100 border-round p-2",4,"ngIf"],["class","surface-50 border-round p-3 flex align-items-center gap-2 text-500",4,"ngIf"],[4,"ngIf"],[1,"flex","align-items-center","gap-2","px-3","pt-3"],[1,"w-2rem","h-2rem","border-circle","bg-blue-700","flex","align-items-center","justify-content-center"],[1,"text-white","font-bold","text-sm"],[1,"font-semibold","text-900"],[1,"text-red-500"],[1,"col-12","md:col-4","flex","flex-column","gap-1"],["mode","currency","currency","PEN","locale","es-PE","placeholder","0.00","styleClass","w-full",3,"ngModelChange","ngModel","min"],[1,"col-12","md:col-4","flex","align-items-center"],[1,"surface-100","border-round","px-3","py-2","flex","align-items-center","gap-2"],[1,"pi","pi-info-circle","text-500"],[1,"text-500","text-sm"],[1,"flex","align-items-center","gap-2"],[1,"surface-50","border-round","border-1","border-dashed","surface-border","p-4","text-center","text-500"],[1,"pi","pi-share-alt","text-3xl","text-300","mb-2","block"],[2,"overflow-x","auto","padding-bottom","12px"],["cdkDropList","","cdkDropListOrientation","horizontal",2,"display","flex","flex-direction","row","align-items","flex-start","min-width","max-content",3,"cdkDropListDropped"],[4,"ngFor","ngForOf"],["cdkDrag","",2,"display","flex","flex-direction","row","align-items","center","flex-shrink","0"],[2,"display","flex","flex-direction","column","align-items","center","width","110px","position","relative"],["cdkDragHandle","","title","Arrastra para reordenar",2,"cursor","grab","color","#bbb","margin-bottom","2px","user-select","none"],[1,"pi","pi-bars",2,"font-size","0.7rem"],[1,"border-round-xl","shadow-2","border-2","p-2",2,"display","flex","flex-direction","column","align-items","center","width","94px"],[1,"border-round-full","shadow-1","mb-1",2,"width","2.6rem","height","2.6rem","display","flex","align-items","center","justify-content","center"],[2,"font-size","1rem"],[1,"text-xs","font-semibold","text-center","text-800",2,"max-width","82px","line-height","1.3","margin-bottom","4px"],[2,"display","flex","align-items","center","gap","3px"],[1,"text-xs","text-500"],["inputStyleClass","w-3rem text-center text-xs p-1 border-round","styleClass","w-3rem",3,"ngModelChange","click","ngModel","min","max","showButtons"],[1,"border-round-full","bg-primary-100","mt-1",2,"width","1.2rem","height","1.2rem","display","flex","align-items","center","justify-content","center"],[1,"text-primary","font-bold",2,"font-size","10px"],["type","button",2,"position","absolute","top","18px","right","2px","width","1.2rem","height","1.2rem","border-radius","50%","background","#ef4444","color","white","border","none","cursor","pointer","display","flex","align-items","center","justify-content","center","font-size","9px","z-index","10","padding","0","line-height","1",3,"click"],[1,"pi","pi-times",2,"font-size","8px"],["style",`display: flex; flex-direction: column; align-items: center;
                            padding: 0 4px; padding-bottom: 28px; flex-shrink: 0;`,4,"ngIf"],[2,"display","flex","flex-direction","column","align-items","center","padding","0 4px","padding-bottom","28px","flex-shrink","0"],[1,"pi","pi-arrow-right",2,"color","#ccc","font-size","0.8rem"],[2,"color","#ccc","font-size","9px"],[1,"flex","align-items-center","gap-2","mt-3","surface-100","border-round","p-2"],[1,"pi","pi-clock","text-primary"],[1,"text-sm","text-700"],[1,"text-primary"],[1,"flex","align-items-center","justify-content-between","px-3","pt-3"],[1,"surface-50","border-round","p-3","flex","align-items-center","gap-2","text-500"],[1,"pi","pi-check-circle","text-green-400"],[1,"text-sm"],["optionLabel","nombre","placeholder","Buscar y agregar documento...","styleClass","flex-1","inputStyleClass","w-full","appendTo","body",3,"ngModelChange","completeMethod","onSelect","dropdown","ngModel","suggestions","forceSelection"],["pInputText","","placeholder","O escribe nombre...",1,"flex-1",3,"ngModelChange","ngModel"],["icon","pi pi-plus","label","Agregar",3,"onClick","disabled"],["class","flex flex-column gap-2",4,"ngIf"],["class","flex gap-3 mt-3 surface-100 border-round p-2",4,"ngIf"],["styleClass","text-xs",3,"value","severity"],[1,"pi","pi-file","text-3xl","text-300","mb-2","block"],[1,"flex","flex-column","gap-2"],["class","flex align-items-center gap-2 p-2 border-1 surface-border border-round surface-50",4,"ngFor","ngForOf"],[1,"flex","align-items-center","gap-2","p-2","border-1","surface-border","border-round","surface-50"],[1,"w-1rem","h-1rem","border-circle","bg-blue-100","text-blue-700","text-xs","font-bold","flex","align-items-center","justify-content-center","flex-shrink-0"],["pInputText","",1,"flex-1",2,"font-size","0.875rem",3,"ngModelChange","ngModel"],["severity","info",3,"value"],["icon","pi pi-trash","color","danger",3,"onClick"],[1,"flex","gap-3","mt-3","surface-100","border-round","p-2"],[1,"pi","pi-file","text-primary","mr-1"]],template:function(e,n){if(e&1){let i=C();d(0,"div",2)(1,"p-card"),g(2,Ir,6,0,"ng-template",null,0,k),d(4,"div",3)(5,"div",4)(6,"label",5),h(7,"Nombre de la subcategor\xEDa *"),p(),d(8,"input",6),G("ngModelChange",function(a){return u(i),j(n.form.nombre,a)||(n.form.nombre=a),m(a)}),p(),g(9,Tr,2,0,"small",7),p(),d(10,"div",4)(11,"label",5),h(12,"Descripci\xF3n"),p(),d(13,"textarea",8),G("ngModelChange",function(a){return u(i),j(n.form.descripcion,a)||(n.form.descripcion=a),m(a)}),h(14,"            "),p()(),d(15,"div",9)(16,"p-toggleSwitch",10),G("ngModelChange",function(a){return u(i),j(n.form.tieneCosto,a)||(n.form.tieneCosto=a),m(a)}),p(),d(17,"span",5),h(18,"\xBFEste tr\xE1mite tiene costo?"),p()(),g(19,Er,4,2,"div",11)(20,kr,8,0,"div",12),p()()(),d(21,"div",2)(22,"p-card"),g(23,Pr,6,0,"ng-template",null,0,k),d(25,"div",13)(26,"p-autoComplete",14),G("ngModelChange",function(a){return u(i),j(n.areaQuery,a)||(n.areaQuery=a),m(a)}),v("completeMethod",function(a){return u(i),m(n.buscarAreas(a))})("onSelect",function(a){return u(i),m(n.agregarArea(a))}),g(27,Or,4,3,"ng-template",null,1,k),p(),d(29,"small",15),f(30,"i",16),h(31," Arrastra para reordenar "),p()(),g(32,Mr,3,0,"div",17)(33,Lr,3,1,"div",18)(34,Ar,7,4,"div",19),p()(),d(35,"div",2)(36,"p-card"),g(37,Fr,8,1,"ng-template",null,0,k)(39,Nr,4,0,"div",20)(40,jr,10,9,"ng-container",21),p()()}e&2&&(s(8),Q("ngModel",n.form.nombre),s(),l("ngIf",n.submitted&&!n.form.nombre),s(4),Q("ngModel",n.form.descripcion),s(3),Q("ngModel",n.form.tieneCosto),s(3),l("ngIf",n.form.tieneCosto),s(),l("ngIf",!n.form.tieneCosto),s(6),Q("ngModel",n.areaQuery),l("dropdown",!0)("suggestions",n.areasSugeridas)("forceSelection",!0),s(6),l("ngIf",n.form.areas.length===0),s(),l("ngIf",n.form.areas.length>0),s(),l("ngIf",n.form.areas.length>0),s(5),l("ngIf",!n.form.requiereDocumentos),s(),l("ngIf",n.form.requiereDocumentos))},dependencies:[A,ye,J,De,Ht,Se,Je,me,Ee,Te,Ie,rt,Pe,Jt,Xe,ii,ti,Ai,Li,ri,tt,et,At,zi,ct,ge,he],styles:["[_nghost-%COMP%]{display:block;width:100%}"]})};function Gr(t,o){t&1&&(d(0,"p-card",1)(1,"div",2),f(2,"i",3),d(3,"p",4),h(4,"Selecciona una categor\xEDa para ver sus subcategor\xEDas"),p()()())}function Kr(t,o){t&1&&(d(0,"p-card",11)(1,"div",13),f(2,"i",14),h(3," Sin subcategor\xEDas a\xFAn "),p()())}function $r(t,o){if(t&1){let e=C();d(0,"div",18)(1,"div",19)(2,"div",20),f(3,"i",21),p(),d(4,"div",22)(5,"div",23),h(6),p(),d(7,"div",24),h(8),p()()(),d(9,"div",25)(10,"ui-icon-button",26),v("onClick",function(){let i=u(e).$implicit,r=c(5);return m(r.ver(i))}),p(),f(11,"ui-icon-button",27)(12,"ui-icon-button",28),p()()}if(t&2){let e=o.$implicit,n=c(5);Dt("border-primary",n.subcategoriaActivaId===e.id)("surface-50",n.subcategoriaActivaId===e.id),s(6),q(" ",e.nombre," "),s(2),q(" ",e.descripcion," ")}}function Wr(t,o){if(t&1&&(d(0,"div",16),ze(1,$r,13,6,"div",17,Be),p()),t&2){let e=o.$implicit;s(),He(e)}}function Ur(t,o){if(t&1&&(d(0,"p-dataView",12),g(1,Wr,3,0,"ng-template",null,0,k),p()),t&2){let e=c(3);l("value",e.selectCategoria().subcategorias)}}function Zr(t,o){if(t&1&&g(0,Ur,3,1,"p-dataView",15),t&2){let e=c(2);l("ngIf",e.selectCategoria().subcategorias.length>0)}}function Yr(t,o){if(t&1){let e=C();R(0),d(1,"div",5)(2,"div",6),f(3,"i",7),d(4,"span",8),h(5),p(),f(6,"p-badge",9),p(),d(7,"ui-button",10),v("onClick",function(){u(e);let i=c();return m(i.openAddEditSubcategoria(i.selectSubCategoriaDefault))}),p()(),O(8,Kr,4,0,"p-card",11),O(9,Zr,1,1,"p-dataView",12),V()}if(t&2){let e=c();s(5),H(e.selectCategoria().nombre),s(),l("value",e.selectCategoria().subcategorias.length.toString()),s(2),M(e.selectCategoria().subcategorias.length===0?8:-1),s(),M(e.selectCategoria().subcategorias.length>0?9:-1)}}var pt=class t{categoriaSignal=w(te);selectCategoria=this.categoriaSignal.selectCategoria;selectSubCategoriaDefault=this.categoriaSignal.selectSubCategoriaDefault;subcategoriaVer=je();modalService=w(nt);subcategoriaActivaId=null;mostrarDialog=!1;modoEdicion=!1;form={};subEditando=null;constructor(){}ver(o){this.subcategoriaActivaId=o.id,this.subcategoriaVer.emit(o)}openAddEditSubcategoria(o){console.log(o),this.modalService.open(dt,{data:{subcategoria:o},header:o.id===0?"Agregar Subcategor\xEDa":"Editar Subcategor\xEDa",width:"min(90vw, 720px)",maximizable:!1}).onClose.subscribe(n=>{n?.success})}static \u0275fac=function(e){return new(e||t)};static \u0275cmp=P({type:t,selectors:[["app-list-subcategoria"]],outputs:{subcategoriaVer:"subcategoriaVer"},decls:2,vars:2,consts:[["list",""],["styleClass","text-center p-4"],[1,"flex","flex-column","align-items-center","gap-3","py-4"],[1,"pi","pi-arrow-up","text-4xl","text-300"],[1,"text-500","m-0"],[1,"flex","align-items-center","justify-content-between","mb-3"],[1,"flex","align-items-center","gap-2"],[1,"pi","pi-folder-open","text-blue-800"],[1,"font-bold","text-lg","text-900"],["severity","secondary",3,"value"],["label","Agregar Subcategor\xEDa","icon","pi pi-plus",3,"onClick"],["styleClass","text-center"],[3,"value"],[1,"py-4","text-500"],[1,"pi","pi-inbox","text-3xl","mb-2","block","text-300"],[3,"value",4,"ngIf"],[1,"flex","flex-column","gap-2"],[1,"flex","align-items-center","justify-content-between","p-3","border-1","border-round","surface-border","hover:bg-blue-100","cursor-pointer","transition-colors","transition-duration-150",3,"border-primary","surface-50"],[1,"flex","align-items-center","justify-content-between","p-3","border-1","border-round","surface-border","hover:bg-blue-100","cursor-pointer","transition-colors","transition-duration-150"],[1,"flex","align-items-center","gap-3","flex-1","min-w-0"],[1,"w-2rem","h-2rem","border-circle","bg-blue-100","flex","align-items-center","justify-content-center","flex-shrink-0"],[1,"pi","pi-file","text-blue-500","text-sm"],[1,"min-w-0"],[1,"font-semibold","text-900","white-space-nowrap","overflow-hidden","text-overflow-ellipsis"],[1,"text-500","text-sm","white-space-nowrap","overflow-hidden","text-overflow-ellipsis"],[1,"flex","gap-1","flex-shrink-0","ml-2"],["icon","pi pi-eye","color","success","tooltip","Ver detalle",3,"onClick"],["icon","pi pi-pencil","color","info","tooltip","Editar"],["icon","pi pi-trash","color","danger","tooltip","Eliminar"]],template:function(e,n){e&1&&(O(0,Gr,5,0,"p-card",1),O(1,Yr,10,4,"ng-container")),e&2&&(M(n.selectCategoria().id==0?0:-1),s(),M(n.selectCategoria().id!==0?1:-1))},dependencies:[Ee,Te,Nt,Ft,me,ki,bt,A,J,ge,he],encapsulation:2})};var qi=`
    .p-timeline {
        display: flex;
        flex-grow: 1;
        flex-direction: column;
        direction: ltr;
    }

    .p-timeline-left .p-timeline-event-opposite {
        text-align: right;
    }

    .p-timeline-left .p-timeline-event-content {
        text-align: left;
    }

    .p-timeline-right .p-timeline-event {
        flex-direction: row-reverse;
    }

    .p-timeline-right .p-timeline-event-opposite {
        text-align: left;
    }

    .p-timeline-right .p-timeline-event-content {
        text-align: right;
    }

    .p-timeline-vertical.p-timeline-alternate .p-timeline-event:nth-child(even) {
        flex-direction: row-reverse;
    }

    .p-timeline-vertical.p-timeline-alternate .p-timeline-event:nth-child(odd) .p-timeline-event-opposite {
        text-align: right;
    }

    .p-timeline-vertical.p-timeline-alternate .p-timeline-event:nth-child(odd) .p-timeline-event-content {
        text-align: left;
    }

    .p-timeline-vertical.p-timeline-alternate .p-timeline-event:nth-child(even) .p-timeline-event-opposite {
        text-align: left;
    }

    .p-timeline-vertical.p-timeline-alternate .p-timeline-event:nth-child(even) .p-timeline-event-content {
        text-align: right;
    }

    .p-timeline-vertical .p-timeline-event-opposite,
    .p-timeline-vertical .p-timeline-event-content {
        padding: dt('timeline.vertical.event.content.padding');
    }

    .p-timeline-vertical .p-timeline-event-connector {
        width: dt('timeline.event.connector.size');
    }

    .p-timeline-event {
        display: flex;
        position: relative;
        min-height: dt('timeline.event.min.height');
    }

    .p-timeline-event:last-child {
        min-height: 0;
    }

    .p-timeline-event-opposite {
        flex: 1;
    }

    .p-timeline-event-content {
        flex: 1;
    }

    .p-timeline-event-separator {
        flex: 0;
        display: flex;
        align-items: center;
        flex-direction: column;
    }

    .p-timeline-event-marker {
        display: inline-flex;
        align-items: center;
        justify-content: center;
        position: relative;
        align-self: baseline;
        border-width: dt('timeline.event.marker.border.width');
        border-style: solid;
        border-color: dt('timeline.event.marker.border.color');
        border-radius: dt('timeline.event.marker.border.radius');
        width: dt('timeline.event.marker.size');
        height: dt('timeline.event.marker.size');
        background: dt('timeline.event.marker.background');
    }

    .p-timeline-event-marker::before {
        content: ' ';
        border-radius: dt('timeline.event.marker.content.border.radius');
        width: dt('timeline.event.marker.content.size');
        height: dt('timeline.event.marker.content.size');
        background: dt('timeline.event.marker.content.background');
    }

    .p-timeline-event-marker::after {
        content: ' ';
        position: absolute;
        width: 100%;
        height: 100%;
        border-radius: dt('timeline.event.marker.border.radius');
        box-shadow: dt('timeline.event.marker.content.inset.shadow');
    }

    .p-timeline-event-connector {
        flex-grow: 1;
        background: dt('timeline.event.connector.color');
    }

    .p-timeline-horizontal {
        flex-direction: row;
    }

    .p-timeline-horizontal .p-timeline-event {
        flex-direction: column;
        flex: 1;
    }

    .p-timeline-horizontal .p-timeline-event:last-child {
        flex: 0;
    }

    .p-timeline-horizontal .p-timeline-event-separator {
        flex-direction: row;
    }

    .p-timeline-horizontal .p-timeline-event-connector {
        width: 100%;
        height: dt('timeline.event.connector.size');
    }

    .p-timeline-horizontal .p-timeline-event-opposite,
    .p-timeline-horizontal .p-timeline-event-content {
        padding: dt('timeline.horizontal.event.content.padding');
    }

    .p-timeline-horizontal.p-timeline-alternate .p-timeline-event:nth-child(even) {
        flex-direction: column-reverse;
    }

    .p-timeline-bottom .p-timeline-event {
        flex-direction: column-reverse;
    }
`;var Jr=["content"],Xr=["opposite"],ea=["marker"],yt=t=>({$implicit:t});function ta(t,o){t&1&&L(0)}function ia(t,o){t&1&&L(0)}function na(t,o){if(t&1&&(R(0),g(1,ia,1,0,"ng-container",3),V()),t&2){let e=c().$implicit,n=c();s(),l("ngTemplateOutlet",n.markerTemplate||n._markerTemplate)("ngTemplateOutletContext",F(2,yt,e))}}function oa(t,o){if(t&1&&f(0,"div",2),t&2){let e=c(2);_(e.cx("eventMarker")),l("pBind",e.ptm("eventMarker"))}}function ra(t,o){if(t&1&&f(0,"div",2),t&2){let e=c(2);_(e.cx("eventConnector")),l("pBind",e.ptm("eventConnector"))}}function aa(t,o){t&1&&L(0)}function sa(t,o){if(t&1&&(d(0,"div",2)(1,"div",2),g(2,ta,1,0,"ng-container",3),p(),d(3,"div",2),g(4,na,2,4,"ng-container",4)(5,oa,1,3,"ng-template",null,0,k)(7,ra,1,3,"div",5),p(),d(8,"div",2),g(9,aa,1,0,"ng-container",3),p()()),t&2){let e=o.$implicit,n=o.last,i=_e(6),r=c();_(r.cx("event")),l("pBind",r.ptm("event")),s(),_(r.cx("eventOpposite")),l("pBind",r.ptm("eventOpposite")),s(),l("ngTemplateOutlet",r.oppositeTemplate||r._oppositeTemplate)("ngTemplateOutletContext",F(19,yt,e)),s(),_(r.cx("eventSeparator")),l("pBind",r.ptm("eventSeparator")),s(),l("ngIf",r.markerTemplate||r._markerTemplate)("ngIfElse",i),s(3),l("ngIf",!n),s(),_(r.cx("eventContent")),l("pBind",r.ptm("eventContent")),s(),l("ngTemplateOutlet",r.contentTemplate||r._contentTemplate)("ngTemplateOutletContext",F(21,yt,e))}}var la={root:({instance:t})=>["p-timeline p-component","p-timeline-"+t.align,"p-timeline-"+t.layout],event:"p-timeline-event",eventOpposite:"p-timeline-event-opposite",eventSeparator:"p-timeline-event-separator",eventMarker:"p-timeline-event-marker",eventConnector:"p-timeline-event-connector",eventContent:"p-timeline-event-content"},Qi=(()=>{class t extends X{name="timeline";style=qi;classes=la;static \u0275fac=(()=>{let e;return function(i){return(e||(e=B(t)))(i||t)}})();static \u0275prov=z({token:t,factory:t.\u0275fac})}return t})();var ji=new W("TIMELINE_INSTANCE"),wt=(()=>{class t extends Ce{bindDirectiveInstance=w(I,{self:!0});$pcTimeline=w(ji,{optional:!0,skipSelf:!0})??void 0;onAfterViewChecked(){this.bindDirectiveInstance.setAttrs(this.ptms(["host","root"]))}value;styleClass;align="left";layout="vertical";contentTemplate;oppositeTemplate;markerTemplate;templates;_contentTemplate;_oppositeTemplate;_markerTemplate;_componentStyle=w(Qi);getBlockableElement(){return this.el.nativeElement.children[0]}onAfterContentInit(){this.templates.forEach(e=>{switch(e.getType()){case"content":this._contentTemplate=e.template;break;case"opposite":this._oppositeTemplate=e.template;break;case"marker":this._markerTemplate=e.template;break}})}static \u0275fac=(()=>{let e;return function(i){return(e||(e=B(t)))(i||t)}})();static \u0275cmp=P({type:t,selectors:[["p-timeline"]],contentQueries:function(n,i,r){if(n&1&&(S(r,Jr,4),S(r,Xr,4),S(r,ea,4),S(r,ae,4)),n&2){let a;b(a=y())&&(i.contentTemplate=a.first),b(a=y())&&(i.oppositeTemplate=a.first),b(a=y())&&(i.markerTemplate=a.first),b(a=y())&&(i.templates=a)}},hostVars:2,hostBindings:function(n,i){n&2&&_(i.cn(i.cx("root"),i.styleClass))},inputs:{value:"value",styleClass:"styleClass",align:"align",layout:"layout"},features:[Y([Qi,{provide:ji,useExisting:t},{provide:ee,useExisting:t}]),Z([I]),U],decls:1,vars:1,consts:[["marker",""],[3,"pBind","class",4,"ngFor","ngForOf"],[3,"pBind"],[4,"ngTemplateOutlet","ngTemplateOutletContext"],[4,"ngIf","ngIfElse"],[3,"pBind","class",4,"ngIf"]],template:function(n,i){n&1&&g(0,sa,10,23,"div",1),n&2&&l("ngForOf",i.value)},dependencies:[A,ye,J,re,N,I],encapsulation:2,changeDetection:0})}return t})(),Gi=(()=>{class t{static \u0275fac=function(n){return new(n||t)};static \u0275mod=ne({type:t});static \u0275inj=ie({imports:[wt,N,N]})}return t})();function pa(t,o){if(t&1){let e=C();d(0,"div",13)(1,"div",14)(2,"span",15),h(3),p(),f(4,"p-tag",16),p(),d(5,"ui-icon-button",17),v("onClick",function(){u(e);let i=c();return m(i.cerrar.emit())}),p()()}if(t&2){let e=c();s(3),q(" ",e.selectSubCategoria().nombre," "),s(),l("value","S/ "+e.selectSubCategoria().costo.toFixed(2))}}function ua(t,o){t&1&&(d(0,"div",18),f(1,"i",19),p())}function ma(t,o){if(t&1&&(d(0,"div",20)(1,"div",21),h(2),p(),d(3,"small",22),h(4),p()()),t&2){let e=o.$implicit;s(2),q(" ",e.nombre," "),s(2),Re(" ",e.sla," ",e.sla===1?"d\xEDa":"d\xEDas"," ")}}function ga(t,o){t&1&&(d(0,"small",31),h(1,"Opcional"),p())}function ha(t,o){if(t&1&&(d(0,"div",27)(1,"div",28),f(2,"i",29),d(3,"div",30)(4,"span",6),h(5),p(),O(6,ga,2,0,"small",31),p()(),f(7,"p-tag",32),p()),t&2){let e=o.$implicit;s(5),H(e.nombre),s(),M(e.requerido?-1:6),s(),l("value",e.tipo)("severity",e.tipo==="PDF"?"danger":"info")}}function _a(t,o){if(t&1&&(d(0,"div",12)(1,"div",23)(2,"span",24),h(3,"Documentos Adjuntos"),p(),f(4,"p-tag",25),p(),d(5,"div",26),ze(6,ha,8,4,"div",27,Be),p()()),t&2){let e=c();s(4),l("value",e.selectSubCategoria().documentos.length+" documentos"),s(2),He(e.selectSubCategoria().documentos)}}function fa(t,o){if(t&1){let e=C();d(0,"div",33)(1,"ui-button",34),v("onClick",function(){u(e);let i=c();return m(i.cerrar.emit())}),p()()}}var ut=class t{categoriaSignal=w(te);selectSubCategoria=this.categoriaSignal.selectSubCategoria;cerrar=je();areaColors=["#4F81BD","#70AD47","#FFC000","#ED7D31","#5B9BD5","#A9D18E"];areaIcons=["pi pi-graduation-cap","pi pi-calculator","pi pi-building","pi pi-folder","pi pi-shield","pi pi-id-card"];getAreaColor(o){return this.areaColors[o%this.areaColors.length]}getAreaIcon(o){return this.areaIcons[o%this.areaIcons.length]}static \u0275fac=function(e){return new(e||t)};static \u0275cmp=P({type:t,selectors:[["app-detalle-subcategoria"]],outputs:{cerrar:"cerrar"},decls:16,vars:2,consts:[["header",""],["footer",""],["styleClass","h-full"],[1,"mb-3"],[1,"flex","align-items-center","gap-2","mb-3"],[1,"pi","pi-clock","text-blue-600"],[1,"font-bold"],["layout","horizontal","align","top","styleClass","custom-timeline",3,"value"],["pTemplate","marker"],["pTemplate","content"],["styleClass","my-4"],[1,"mb-2"],[1,"surface-50","border-round","border-1","surface-border","p-3"],[1,"flex","align-items-center","justify-content-between","px-3","pt-3"],[1,"gap-4","flex","align-items-center"],[1,"font-bold","text-lg","text-900"],["severity","success","styleClass","white-space-nowrap text-sm font-semibold",3,"value"],["icon","pi pi-times","pTooltip","Cerrar","color","danger",3,"onClick"],[1,"custom-marker"],[1,"pi","pi-file-pdf"],[1,"text-center","mt-2"],[1,"step-title"],[1,"step-sub"],[1,"flex","align-items-center","justify-content-between","mb-3"],[1,"font-bold","text-base"],["severity","info","icon","pi pi-list",3,"value"],[1,"flex","flex-column","gap-2"],[1,"flex","align-items-center","justify-content-between","p-2","border-round","hover:surface-100"],[1,"flex","align-items-center","gap-2"],[1,"pi","pi-file","text-500"],[1,"flex","flex-column"],[1,"text-400"],[3,"value","severity"],[1,"flex","gap-2","justify-content-end","pt-2"],["label","Volver","icon","pi pi-arrow-left",3,"onClick"]],template:function(e,n){e&1&&(d(0,"p-card",2),g(1,pa,6,2,"ng-template",null,0,k),d(3,"div",3)(4,"div",4),f(5,"i",5),d(6,"span",6),h(7,"Tiempos M\xE1ximos por \xC1rea"),p()(),d(8,"p-timeline",7),g(9,ua,2,0,"ng-template",8)(10,ma,5,3,"ng-template",9),p()(),f(11,"p-divider",10),d(12,"div",11),O(13,_a,8,1,"div",12),p(),g(14,fa,2,0,"ng-template",null,1,k),p()),e&2&&(s(8),l("value",n.selectSubCategoria().areas),s(5),M(n.selectSubCategoria().requiereDocumentos?13:-1))},dependencies:[Ie,it,tt,et,ae,me,Ee,Te,A,he,ge,Gi,wt],styles:['@charset "UTF-8";.custom-timeline[_ngcontent-%COMP%]   .p-timeline-event[_ngcontent-%COMP%]{flex:1}.custom-timeline[_ngcontent-%COMP%]   .p-timeline-event-connector[_ngcontent-%COMP%]{height:3px;background:linear-gradient(to right,#3b82f6,#93c5fd);border-radius:2px}.custom-timeline[_ngcontent-%COMP%]   .p-timeline-event-marker[_ngcontent-%COMP%]{width:42px!important;height:42px!important;display:flex;align-items:center;justify-content:center}.custom-marker[_ngcontent-%COMP%]{width:34px;height:34px;border-radius:50%;background:linear-gradient(135deg,#3b82f6,#2563eb);display:flex;align-items:center;justify-content:center;box-shadow:0 0 0 4px #eff6ff,0 4px 10px #3b82f64d;transition:transform .2s ease}.custom-marker[_ngcontent-%COMP%]:hover{transform:scale(1.1)}.custom-marker[_ngcontent-%COMP%]   i[_ngcontent-%COMP%]{color:#fff;font-size:14px}.step-title[_ngcontent-%COMP%]{font-weight:600;font-size:13px;color:#374151}.step-sub[_ngcontent-%COMP%]{color:#6b7280;font-size:12px}']})};function va(t,o){if(t&1){let e=C();d(0,"div",4)(1,"app-detalle-subcategoria",5),v("cerrar",function(){u(e);let i=c();return m(i.onCerrarDetalle())}),p()()}}var Ki=class t{categoriaSignal=w(te);selectCategoria=this.categoriaSignal.selectCategoria;selectSubCategoria=this.categoriaSignal.selectSubCategoria;selectSubCategoriaDefault=this.categoriaSignal.selectSubCategoriaDefault;onCategoriaSeleccionada(o){this.selectCategoria.set(o),this.selectSubCategoria.set(this.selectSubCategoriaDefault)}onVerSubcategoria(o){this.selectSubCategoria.set(o)}onCerrarDetalle(){this.selectSubCategoria.set(this.selectSubCategoriaDefault)}static \u0275fac=function(e){return new(e||t)};static \u0275cmp=P({type:t,selectors:[["app-page-categoria"]],decls:9,vars:3,consts:[[1,"font-bold","text-lg"],[1,"grid"],[1,"mt-3"],[3,"subcategoriaVer"],[1,"col-12","md:col-6","lg:col-7"],[3,"cerrar"]],template:function(e,n){e&1&&(d(0,"div",0),h(1," GESTI\xD3N DE CATEGOR\xCDAS Y SUBCATEGOR\xCDAS "),p(),f(2,"p-divider"),d(3,"div",1)(4,"div"),f(5,"app-list-categoria"),d(6,"div",2)(7,"app-list-subcategoria",3),v("subcategoriaVer",function(r){return n.onVerSubcategoria(r)}),p()()(),O(8,va,2,0,"div",4),p()),e&2&&(s(4),_(n.selectSubCategoria().id!==0?"col-12 md:col-6 lg:col-5":"col-12"),s(4),M(n.selectSubCategoria().id!==0?8:-1))},dependencies:[Ie,it,A,lt,pt,ut],encapsulation:2})};export{Ki as PageCategoria};
