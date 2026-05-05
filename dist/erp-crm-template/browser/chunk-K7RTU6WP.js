import{a as ct}from"./chunk-PJ3LFPE7.js";import{a as xi,b as Ti}from"./chunk-RG32Y6DV.js";import{a as Si,b as Ct}from"./chunk-XZME5SKP.js";import{a as Qe,b as Ge}from"./chunk-JNAZBEMY.js";import{a as wi,b as _t}from"./chunk-PGXXDG4P.js";import{a as bt}from"./chunk-U3POAI2G.js";import{a as Ce,b as ve}from"./chunk-XUSIVCUM.js";import{a as ae}from"./chunk-4JMRNBBO.js";import{b as qe,c as je}from"./chunk-5PWJC6AB.js";import"./chunk-CTZETMTO.js";import{a as be}from"./chunk-AXY6V6M5.js";import{a as ft,b as ze,c as ht,h as $e,i as Ii}from"./chunk-HRC5X5HW.js";import"./chunk-HZD52SDO.js";import{a as he,b as _e}from"./chunk-F6MFSAAP.js";import{a as ci,f as bi,g as Ci,k as vi,l as yi}from"./chunk-THCK4QJC.js";import{a as hi,b as _i}from"./chunk-LFEFVXO4.js";import"./chunk-Q6DAP57P.js";import{$ as se,$a as k,$c as pe,$d as st,Ab as xe,Ac as me,Bb as tt,Bc as ti,Be as pt,Cb as Yt,Cc as ee,Ce as ui,Db as Ee,Dd as ni,De as T,Ea as D,Eb as h,Fa as Zt,Fb as b,Fd as ai,Fe as ge,Gb as B,Gc as ii,Gd as ri,Ge as Fe,Hb as $,Hc as F,Hd as li,Id as te,Ie as ne,Ja as Pt,Jb as Se,Jd as Q,Je as V,Kb as Te,Kd as De,Ke as dt,Lb as Ie,Ld as ie,Le as Pe,N as Ye,Nb as Y,Ne,O as I,Oa as L,Ob as ue,Od as oe,Oe as mi,P as le,Pa as ce,Pb as R,Pd as Le,Pe as gi,Qb as it,Qe as Be,R as W,Ra as J,Rb as Nt,Re as fi,Sa as Z,Se as ut,T as g,Ta as f,Te as jt,Ud as rt,Ue as fe,Vd as O,Ve as Re,Wb as Bt,Wd as lt,Xe as mt,Yd as si,Ye as gt,Z as u,Za as A,Zb as Rt,_ as m,_a as E,_b as N,_c as at,a as Ht,ab as Xt,ae as pi,b as Wt,bc as ke,be as di,cb as ye,cc as ei,db as we,eb as l,ec as Ve,fb as p,fc as ot,fe as Ae,ga as K,gb as d,hb as C,ka as U,lb as q,lc as x,mb as j,mc as G,nb as P,ob as S,od as zt,qb as _,qd as Ze,rb as c,rd as de,sb as et,sd as Me,tb as Je,ub as w,vb as X,vd as qt,wa as Jt,wb as v,xb as y,xc as Oe,yd as oi,za as s,zc as nt}from"./chunk-63UDFC7H.js";var Ei=`
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
`;var Yi=["removeicon"],eo=["*"];function to(t,n){if(t&1){let e=S();p(0,"img",4),_("error",function(o){u(e);let a=c();return m(a.imageError(o))}),d()}if(t&2){let e=c();h(e.cx("image")),l("pBind",e.ptm("image"))("src",e.image,Jt)("alt",e.alt)}}function io(t,n){if(t&1&&C(0,"span",6),t&2){let e=c(2);h(e.icon),l("pBind",e.ptm("icon"))("ngClass",e.cx("icon"))}}function oo(t,n){if(t&1&&f(0,io,1,4,"span",5),t&2){let e=c();l("ngIf",e.icon)}}function no(t,n){if(t&1&&(p(0,"div",7),b(1),d()),t&2){let e=c();h(e.cx("label")),l("pBind",e.ptm("label")),s(),B(e.label)}}function ao(t,n){if(t&1){let e=S();p(0,"span",11),_("click",function(o){u(e);let a=c(3);return m(a.close(o))})("keydown",function(o){u(e);let a=c(3);return m(a.onKeydown(o))}),d()}if(t&2){let e=c(3);h(e.removeIcon),l("pBind",e.ptm("removeIcon"))("ngClass",e.cx("removeIcon")),A("tabindex",e.disabled?-1:0)("aria-label",e.removeAriaLabel)}}function ro(t,n){if(t&1){let e=S();se(),p(0,"svg",12),_("click",function(o){u(e);let a=c(3);return m(a.close(o))})("keydown",function(o){u(e);let a=c(3);return m(a.onKeydown(o))}),d()}if(t&2){let e=c(3);h(e.cx("removeIcon")),l("pBind",e.ptm("removeIcon")),A("tabindex",e.disabled?-1:0)("aria-label",e.removeAriaLabel)}}function lo(t,n){if(t&1&&(q(0),f(1,ao,1,6,"span",9)(2,ro,1,5,"svg",10),j()),t&2){let e=c(2);s(),l("ngIf",e.removeIcon),s(),l("ngIf",!e.removeIcon)}}function so(t,n){}function co(t,n){t&1&&f(0,so,0,0,"ng-template")}function po(t,n){if(t&1){let e=S();p(0,"span",13),_("click",function(o){u(e);let a=c(2);return m(a.close(o))})("keydown",function(o){u(e);let a=c(2);return m(a.onKeydown(o))}),f(1,co,1,0,null,14),d()}if(t&2){let e=c(2);h(e.cx("removeIcon")),l("pBind",e.ptm("removeIcon")),A("tabindex",e.disabled?-1:0)("aria-label",e.removeAriaLabel),s(),l("ngTemplateOutlet",e.removeIconTemplate||e._removeIconTemplate)}}function uo(t,n){if(t&1&&(q(0),f(1,lo,3,2,"ng-container",3)(2,po,2,6,"span",8),j()),t&2){let e=c();s(),l("ngIf",!e.removeIconTemplate&&!e._removeIconTemplate),s(),l("ngIf",e.removeIconTemplate||e._removeIconTemplate)}}var mo={root:({instance:t})=>["p-chip p-component",{"p-disabled":t.disabled}],image:"p-chip-image",icon:"p-chip-icon",label:"p-chip-label",removeIcon:"p-chip-remove-icon"},ki=(()=>{class t extends ie{name="chip";style=Ei;classes=mo;static \u0275fac=(()=>{let e;return function(o){return(e||(e=U(t)))(o||t)}})();static \u0275prov=I({token:t,factory:t.\u0275fac})}return t})();var Vi=new W("CHIP_INSTANCE"),Oi=(()=>{class t extends Le{$pcChip=g(Vi,{optional:!0,skipSelf:!0})??void 0;bindDirectiveInstance=g(O,{self:!0});onAfterViewChecked(){this.bindDirectiveInstance.setAttrs(this.ptms(["host","root"]))}label;icon;image;alt;styleClass;disabled=!1;removable=!1;removeIcon;onRemove=new D;onImageError=new D;visible=!0;get removeAriaLabel(){return this.config.getTranslation(De.ARIA).removeLabel}get chipProps(){return this._chipProps}set chipProps(e){this._chipProps=e,e&&typeof e=="object"&&Object.entries(e).forEach(([i,o])=>this[`_${i}`]!==o&&(this[`_${i}`]=o))}_chipProps;_componentStyle=g(ki);removeIconTemplate;templates;_removeIconTemplate;onAfterContentInit(){this.templates.forEach(e=>{switch(e.getType()){case"removeicon":this._removeIconTemplate=e.template;break;default:this._removeIconTemplate=e.template;break}})}onChanges(e){if(e.chipProps&&e.chipProps.currentValue){let{currentValue:i}=e.chipProps;i.label!==void 0&&(this.label=i.label),i.icon!==void 0&&(this.icon=i.icon),i.image!==void 0&&(this.image=i.image),i.alt!==void 0&&(this.alt=i.alt),i.styleClass!==void 0&&(this.styleClass=i.styleClass),i.removable!==void 0&&(this.removable=i.removable),i.removeIcon!==void 0&&(this.removeIcon=i.removeIcon)}}close(e){this.visible=!1,this.onRemove.emit(e)}onKeydown(e){(e.key==="Enter"||e.key==="Backspace")&&this.close(e)}imageError(e){this.onImageError.emit(e)}static \u0275fac=(()=>{let e;return function(o){return(e||(e=U(t)))(o||t)}})();static \u0275cmp=L({type:t,selectors:[["p-chip"]],contentQueries:function(i,o,a){if(i&1&&(w(a,Yi,4),w(a,te,4)),i&2){let r;v(r=y())&&(o.removeIconTemplate=r.first),v(r=y())&&(o.templates=r)}},hostVars:5,hostBindings:function(i,o){i&2&&(A("aria-label",o.label),h(o.cn(o.cx("root"),o.styleClass)),tt("display",!o.visible&&"none"))},inputs:{label:"label",icon:"icon",image:"image",alt:"alt",styleClass:"styleClass",disabled:[2,"disabled","disabled",x],removable:[2,"removable","removable",x],removeIcon:"removeIcon",chipProps:"chipProps"},outputs:{onRemove:"onRemove",onImageError:"onImageError"},features:[Y([ki,{provide:Vi,useExisting:t},{provide:oe,useExisting:t}]),Z([O]),J],ngContentSelectors:eo,decls:6,vars:4,consts:[["iconTemplate",""],[3,"pBind","class","src","alt","error",4,"ngIf","ngIfElse"],[3,"pBind","class",4,"ngIf"],[4,"ngIf"],[3,"error","pBind","src","alt"],[3,"pBind","class","ngClass",4,"ngIf"],[3,"pBind","ngClass"],[3,"pBind"],["role","button",3,"pBind","class","click","keydown",4,"ngIf"],["role","button",3,"pBind","class","ngClass","click","keydown",4,"ngIf"],["data-p-icon","times-circle","role","button",3,"pBind","class","click","keydown",4,"ngIf"],["role","button",3,"click","keydown","pBind","ngClass"],["data-p-icon","times-circle","role","button",3,"click","keydown","pBind"],["role","button",3,"click","keydown","pBind"],[4,"ngTemplateOutlet"]],template:function(i,o){if(i&1&&(et(),Je(0),f(1,to,1,5,"img",1)(2,oo,1,1,"ng-template",null,0,N)(4,no,2,4,"div",2)(5,uo,3,2,"ng-container",3)),i&2){let a=xe(3);s(),l("ngIf",o.image)("ngIfElse",a),s(3),l("ngIf",o.label),s(),l("ngIf",o.removable)}},dependencies:[F,Oe,me,ee,ct,Q,O],encapsulation:2,changeDetection:0})}return t})();var Mi=`
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
`;var fo=["item"],ho=["empty"],_o=["header"],bo=["footer"],Co=["selecteditem"],vo=["group"],yo=["loader"],wo=["removeicon"],xo=["loadingicon"],So=["clearicon"],To=["dropdownicon"],Io=["focusInput"],Eo=["multiIn"],ko=["multiContainer"],Vo=["ddBtn"],Oo=["items"],Mo=["scroller"],Do=["overlay"],Lo=t=>({i:t}),Ai=t=>({$implicit:t}),Ao=(t,n,e)=>({removeCallback:t,index:n,class:e}),yt=t=>({height:t}),Fi=(t,n)=>({$implicit:t,options:n}),Fo=t=>({options:t}),Po=()=>({}),No=(t,n,e)=>({option:t,i:n,scrollerOptions:e}),Bo=(t,n)=>({$implicit:t,index:n});function Ro(t,n){if(t&1){let e=S();p(0,"input",18,2),_("input",function(o){u(e);let a=c();return m(a.onInput(o))})("keydown",function(o){u(e);let a=c();return m(a.onKeyDown(o))})("change",function(o){u(e);let a=c();return m(a.onInputChange(o))})("focus",function(o){u(e);let a=c();return m(a.onInputFocus(o))})("blur",function(o){u(e);let a=c();return m(a.onInputBlur(o))})("paste",function(o){u(e);let a=c();return m(a.onInputPaste(o))})("keyup",function(o){u(e);let a=c();return m(a.onInputKeyUp(o))}),d()}if(t&2){let e=c();h(e.cn(e.cx("pcInputText"),e.inputStyleClass)),l("pAutoFocus",e.autofocus)("pt",e.ptm("pcInputText"))("ngStyle",e.inputStyle)("variant",e.$variant())("invalid",e.invalid())("pSize",e.size())("fluid",e.hasFluid),A("type",e.type)("value",e.inputValue())("id",e.inputId)("autocomplete",e.autocomplete)("placeholder",e.placeholder)("name",e.name())("minlength",e.minlength())("min",e.min())("max",e.max())("pattern",e.pattern())("size",e.inputSize())("maxlength",e.maxlength())("tabindex",e.$disabled()?-1:e.tabindex)("required",e.required()?"":void 0)("readonly",e.readonly?"":void 0)("disabled",e.$disabled()?"":void 0)("aria-label",e.ariaLabel)("aria-labelledby",e.ariaLabelledBy)("aria-required",e.required())("aria-expanded",e.overlayVisible??!1)("aria-controls",e.overlayVisible?e.id+"_list":null)("aria-activedescendant",e.focused?e.focusedOptionId:void 0)}}function zo(t,n){if(t&1){let e=S();se(),p(0,"svg",21),_("click",function(){u(e);let o=c(2);return m(o.clear())}),d()}if(t&2){let e=c(2);h(e.cx("clearIcon")),l("pBind",e.ptm("clearIcon")),A("aria-hidden",!0)}}function qo(t,n){}function jo(t,n){t&1&&f(0,qo,0,0,"ng-template")}function $o(t,n){if(t&1){let e=S();p(0,"span",22),_("click",function(){u(e);let o=c(2);return m(o.clear())}),f(1,jo,1,0,null,23),d()}if(t&2){let e=c(2);h(e.cx("clearIcon")),l("pBind",e.ptm("clearIcon")),A("aria-hidden",!0),s(),l("ngTemplateOutlet",e.clearIconTemplate||e._clearIconTemplate)}}function Qo(t,n){if(t&1&&(q(0),f(1,zo,1,4,"svg",19)(2,$o,2,5,"span",20),j()),t&2){let e=c();s(),l("ngIf",!e.clearIconTemplate&&!e._clearIconTemplate),s(),l("ngIf",e.clearIconTemplate||e._clearIconTemplate)}}function Go(t,n){t&1&&P(0)}function Uo(t,n){if(t&1){let e=S();p(0,"span",22),_("click",function(o){u(e);let a=c(2).index,r=c(2);return m(!r.readonly&&!r.$disabled()?r.removeOption(o,a):"")}),se(),C(1,"svg",31),d()}if(t&2){let e=c(4);h(e.cx("chipIcon")),l("pBind",e.ptm("chipIcon")),s(),h(e.cx("chipIcon")),A("aria-hidden",!0)}}function Ko(t,n){}function Ho(t,n){t&1&&f(0,Ko,0,0,"ng-template")}function Wo(t,n){if(t&1&&(p(0,"span",32),f(1,Ho,1,0,null,29),d()),t&2){let e=c(2).index,i=c(2);l("pBind",i.ptm("chipIcon")),A("aria-hidden",!0),s(),l("ngTemplateOutlet",i.removeIconTemplate||i._removeIconTemplate)("ngTemplateOutletContext",Nt(4,Ao,i.removeOption.bind(i),e,i.cx("chipIcon")))}}function Jo(t,n){if(t&1&&f(0,Uo,2,6,"span",20)(1,Wo,2,8,"span",30),t&2){let e=c(3);l("ngIf",!e.removeIconTemplate&&!e._removeIconTemplate),s(),l("ngIf",e.removeIconTemplate||e._removeIconTemplate)}}function Zo(t,n){if(t&1){let e=S();p(0,"li",26,5)(2,"p-chip",28),_("onRemove",function(o){let a=u(e).index,r=c(2);return m(r.readonly?"":r.removeOption(o,a))}),f(3,Go,1,0,"ng-container",29)(4,Jo,2,2,"ng-template",null,6,N),d()()}if(t&2){let e=n.$implicit,i=n.index,o=c(2);h(o.cx("chipItem",R(16,Lo,i))),l("pBind",o.ptm("chipItem")),A("id",o.id+"_multiple_option_"+i)("aria-label",o.getOptionLabel(e))("aria-setsize",o.modelValue().length)("aria-posinset",i+1)("aria-selected",!0),s(2),h(o.cx("pcChip")),l("pt",o.ptm("pcChip"))("label",!o.selectedItemTemplate&&!o._selectedItemTemplate&&o.getOptionLabel(e))("disabled",o.$disabled())("removable",!0),s(),l("ngTemplateOutlet",o.selectedItemTemplate||o._selectedItemTemplate)("ngTemplateOutletContext",R(18,Ai,e))}}function Xo(t,n){if(t&1){let e=S();p(0,"ul",24,3),_("focus",function(o){u(e);let a=c();return m(a.onMultipleContainerFocus(o))})("blur",function(o){u(e);let a=c();return m(a.onMultipleContainerBlur(o))})("keydown",function(o){u(e);let a=c();return m(a.onMultipleContainerKeyDown(o))}),f(2,Zo,6,20,"li",25),p(3,"li",26)(4,"input",27,4),_("input",function(o){u(e);let a=c();return m(a.onInput(o))})("keydown",function(o){u(e);let a=c();return m(a.onKeyDown(o))})("change",function(o){u(e);let a=c();return m(a.onInputChange(o))})("focus",function(o){u(e);let a=c();return m(a.onInputFocus(o))})("blur",function(o){u(e);let a=c();return m(a.onInputBlur(o))})("paste",function(o){u(e);let a=c();return m(a.onInputPaste(o))})("keyup",function(o){u(e);let a=c();return m(a.onInputKeyUp(o))}),d()()()}if(t&2){let e=c();h(e.cx("inputMultiple")),l("pBind",e.ptm("inputMultiple"))("tabindex",-1),A("aria-orientation","horizontal")("aria-activedescendant",e.focused?e.focusedMultipleOptionId:void 0),s(2),l("ngForOf",e.modelValue()),s(),h(e.cx("inputChip")),l("pBind",e.ptm("inputChip")),s(),h(e.cx("pcInputText")),l("pAutoFocus",e.autofocus)("pBind",e.ptm("input"))("ngStyle",e.inputStyle),A("type",e.type)("id",e.inputId)("autocomplete",e.autocomplete)("name",e.name())("minlength",e.minlength())("maxlength",e.maxlength())("size",e.size())("min",e.min())("max",e.max())("pattern",e.pattern())("placeholder",e.$filled()?null:e.placeholder)("tabindex",e.$disabled()?-1:e.tabindex)("required",e.required()?"":void 0)("readonly",e.readonly?"":void 0)("disabled",e.$disabled()?"":void 0)("aria-label",e.ariaLabel)("aria-labelledby",e.ariaLabelledBy)("aria-required",e.required())("aria-expanded",e.overlayVisible??!1)("aria-controls",e.overlayVisible?e.id+"_list":null)("aria-activedescendant",e.focused?e.focusedOptionId:void 0)}}function Yo(t,n){if(t&1&&(se(),C(0,"svg",35)),t&2){let e=c(2);h(e.cx("loader")),l("pBind",e.ptm("loader"))("spin",!0),A("aria-hidden",!0)}}function en(t,n){}function tn(t,n){t&1&&f(0,en,0,0,"ng-template")}function on(t,n){if(t&1&&(p(0,"span",32),f(1,tn,1,0,null,23),d()),t&2){let e=c(2);h(e.cx("loader")),l("pBind",e.ptm("loader")),A("aria-hidden",!0),s(),l("ngTemplateOutlet",e.loadingIconTemplate||e._loadingIconTemplate)}}function nn(t,n){if(t&1&&(q(0),f(1,Yo,1,5,"svg",33)(2,on,2,5,"span",34),j()),t&2){let e=c();s(),l("ngIf",!e.loadingIconTemplate&&!e._loadingIconTemplate),s(),l("ngIf",e.loadingIconTemplate||e._loadingIconTemplate)}}function an(t,n){if(t&1&&C(0,"span",38),t&2){let e=c(2);l("ngClass",e.dropdownIcon),A("aria-hidden",!0)}}function rn(t,n){if(t&1&&(se(),C(0,"svg",40)),t&2){let e=c(3);l("pBind",e.ptm("dropdown"))}}function ln(t,n){}function sn(t,n){t&1&&f(0,ln,0,0,"ng-template")}function cn(t,n){if(t&1&&(q(0),f(1,rn,1,1,"svg",39)(2,sn,1,0,null,23),j()),t&2){let e=c(2);s(),l("ngIf",!e.dropdownIconTemplate&&!e._dropdownIconTemplate),s(),l("ngTemplateOutlet",e.dropdownIconTemplate||e._dropdownIconTemplate)}}function pn(t,n){if(t&1){let e=S();p(0,"button",36,7),_("click",function(o){u(e);let a=c();return m(a.handleDropdownClick(o))}),f(2,an,1,2,"span",37)(3,cn,3,2,"ng-container",14),d()}if(t&2){let e=c();h(e.cx("dropdown")),l("pBind",e.ptm("dropdown"))("disabled",e.$disabled()),A("aria-label",e.dropdownAriaLabel)("tabindex",e.tabindex),s(2),l("ngIf",e.dropdownIcon),s(),l("ngIf",!e.dropdownIcon)}}function dn(t,n){t&1&&P(0)}function un(t,n){t&1&&P(0)}function mn(t,n){if(t&1&&f(0,un,1,0,"ng-container",29),t&2){let e=n.$implicit,i=n.options;c(2);let o=xe(6);l("ngTemplateOutlet",o)("ngTemplateOutletContext",it(2,Fi,e,i))}}function gn(t,n){t&1&&P(0)}function fn(t,n){if(t&1&&f(0,gn,1,0,"ng-container",29),t&2){let e=n.options,i=c(4);l("ngTemplateOutlet",i.loaderTemplate||i._loaderTemplate)("ngTemplateOutletContext",R(2,Fo,e))}}function hn(t,n){t&1&&(q(0),f(1,fn,1,4,"ng-template",null,10,N),j())}function _n(t,n){if(t&1){let e=S();p(0,"p-scroller",45,9),_("onLazyLoad",function(o){u(e);let a=c(2);return m(a.onLazyLoad.emit(o))}),f(2,mn,1,5,"ng-template",null,1,N)(4,hn,3,0,"ng-container",14),d()}if(t&2){let e=c(2);Ee(R(9,yt,e.scrollHeight)),l("pt",e.ptm("virtualScroller"))("items",e.visibleOptions())("itemSize",e.virtualScrollItemSize)("autoSize",!0)("lazy",e.lazy)("options",e.virtualScrollOptions),s(4),l("ngIf",e.loaderTemplate||e._loaderTemplate)}}function bn(t,n){t&1&&P(0)}function Cn(t,n){if(t&1&&(q(0),f(1,bn,1,0,"ng-container",29),j()),t&2){c();let e=xe(6),i=c();s(),l("ngTemplateOutlet",e)("ngTemplateOutletContext",it(3,Fi,i.visibleOptions(),ue(2,Po)))}}function vn(t,n){if(t&1&&(p(0,"span"),b(1),d()),t&2){let e=c(2).$implicit,i=c(3);s(),B(i.getOptionGroupLabel(e.optionGroup))}}function yn(t,n){t&1&&P(0)}function wn(t,n){if(t&1&&(q(0),p(1,"li",49),f(2,vn,2,1,"span",14)(3,yn,1,0,"ng-container",29),d(),j()),t&2){let e=c(),i=e.$implicit,o=e.index,a=c().options,r=c(2);s(),h(r.cx("optionGroup")),l("pBind",r.ptm("optionGroup"))("ngStyle",R(8,yt,a.itemSize+"px")),A("id",r.id+"_"+r.getOptionIndex(o,a)),s(),l("ngIf",!r.groupTemplate),s(),l("ngTemplateOutlet",r.groupTemplate)("ngTemplateOutletContext",R(10,Ai,i.optionGroup))}}function xn(t,n){if(t&1&&(p(0,"span"),b(1),d()),t&2){let e=c(2).$implicit,i=c(3);s(),B(i.getOptionLabel(e))}}function Sn(t,n){t&1&&P(0)}function Tn(t,n){if(t&1){let e=S();q(0),p(1,"li",50),_("click",function(o){u(e);let a=c().$implicit,r=c(3);return m(r.onOptionSelect(o,a))})("mouseenter",function(o){u(e);let a=c().index,r=c().options,M=c(2);return m(M.onOptionMouseEnter(o,M.getOptionIndex(a,r)))}),f(2,xn,2,1,"span",14)(3,Sn,1,0,"ng-container",29),d(),j()}if(t&2){let e=c(),i=e.$implicit,o=e.index,a=c().options,r=c(2);s(),h(r.cx("option",Nt(14,No,i,o,a))),l("pBind",r.getPTOptions(i,a,o,"option"))("ngStyle",R(18,yt,a.itemSize+"px")),A("id",r.id+"_"+r.getOptionIndex(o,a))("aria-label",r.getOptionLabel(i))("aria-selected",r.isSelected(i))("aria-disabled",r.isOptionDisabled(i))("data-p-focused",r.focusedOptionIndex()===r.getOptionIndex(o,a))("aria-setsize",r.ariaSetSize)("aria-posinset",r.getAriaPosInset(r.getOptionIndex(o,a))),s(),l("ngIf",!r.itemTemplate&&!r._itemTemplate),s(),l("ngTemplateOutlet",r.itemTemplate||r._itemTemplate)("ngTemplateOutletContext",it(20,Bo,i,a.getOptions?a.getOptions(o):o))}}function In(t,n){if(t&1&&f(0,wn,4,12,"ng-container",14)(1,Tn,4,23,"ng-container",14),t&2){let e=n.$implicit,i=c(3);l("ngIf",i.isOptionGroup(e)),s(),l("ngIf",!i.isOptionGroup(e))}}function En(t,n){if(t&1&&(q(0),b(1),j()),t&2){let e=c(4);s(),$(" ",e.searchResultMessageText," ")}}function kn(t,n){t&1&&P(0,null,12)}function Vn(t,n){if(t&1&&(p(0,"li",49),f(1,En,2,1,"ng-container",51)(2,kn,2,0,"ng-container",23),d()),t&2){let e=c().options,i=c(2);h(i.cx("emptyMessage")),l("pBind",i.ptm("emptyMessage"))("ngStyle",R(7,yt,e.itemSize+"px")),s(),l("ngIf",!i.emptyTemplate&&!i._emptyTemplate)("ngIfElse",i.empty),s(),l("ngTemplateOutlet",i.emptyTemplate||i._emptyTemplate)}}function On(t,n){if(t&1&&(p(0,"ul",46,11),f(2,In,2,2,"ng-template",47)(3,Vn,3,9,"li",48),d()),t&2){let e=n.$implicit,i=n.options,o=c(2);Ee(i.contentStyle),h(o.cn(o.cx("list"),i.contentStyleClass)),l("pBind",o.ptm("list")),A("id",o.id+"_list")("aria-label",o.listLabel),s(2),l("ngForOf",e),s(),l("ngIf",!e||e&&e.length===0&&o.showEmptyMessage)}}function Mn(t,n){t&1&&P(0)}function Dn(t,n){if(t&1&&(p(0,"div",41),f(1,dn,1,0,"ng-container",23),p(2,"div",42),f(3,_n,5,11,"p-scroller",43)(4,Cn,2,6,"ng-container",14),d(),f(5,On,4,9,"ng-template",null,8,N)(7,Mn,1,0,"ng-container",23),d(),p(8,"span",44),b(9),d()),t&2){let e=c();h(e.cn(e.cx("overlay"),e.panelStyleClass)),l("pBind",e.ptm("overlay"))("ngStyle",e.panelStyle),s(),l("ngTemplateOutlet",e.headerTemplate||e._headerTemplate),s(),h(e.cx("listContainer")),tt("max-height",e.virtualScroll?"auto":e.scrollHeight),l("pBind",e.ptm("listContainer"))("tabindex",-1),s(),l("ngIf",e.virtualScroll),s(),l("ngIf",!e.virtualScroll),s(3),l("ngTemplateOutlet",e.footerTemplate||e._footerTemplate),s(2),$(" ",e.selectedMessageText," ")}}var Ln=`
    ${Mi}

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
`,An={root:{position:"relative"}},Fn={root:({instance:t})=>["p-autocomplete p-component p-inputwrapper",{"p-invalid":t.invalid(),"p-focus":t.focused,"p-inputwrapper-filled":t.$filled(),"p-inputwrapper-focus":t.focused&&!t.$disabled()||t.autofocus||t.overlayVisible,"p-autocomplete-open":t.overlayVisible,"p-autocomplete-clearable":t.showClear&&!t.$disabled(),"p-autocomplete-fluid":t.hasFluid}],pcInputText:"p-autocomplete-input",inputMultiple:({instance:t})=>["p-autocomplete-input-multiple",{"p-disabled":t.$disabled(),"p-variant-filled":t.$variant()==="filled"}],chipItem:({instance:t,i:n})=>["p-autocomplete-chip-item",{"p-focus":t.focusedMultipleOptionIndex()===n}],pcChip:"p-autocomplete-chip",chipIcon:"p-autocomplete-chip-icon",inputChip:"p-autocomplete-input-chip",loader:"p-autocomplete-loader",dropdown:"p-autocomplete-dropdown",overlay:({instance:t})=>["p-autocomplete-overlay p-component-overlay p-component",{"p-input-filled":t.$variant()==="filled","p-ripple-disabled":t.config.ripple()===!1}],listContainer:"p-autocomplete-list-container",list:"p-autocomplete-list",optionGroup:"p-autocomplete-option-group",option:({instance:t,option:n,i:e,scrollerOptions:i})=>({"p-autocomplete-option":!0,"p-autocomplete-option-selected":t.isSelected(n),"p-focus":t.focusedOptionIndex()===t.getOptionIndex(e,i),"p-disabled":t.isOptionDisabled(n)}),emptyMessage:"p-autocomplete-empty-message",clearIcon:"p-autocomplete-clear-icon"},Di=(()=>{class t extends ie{name="autocomplete";style=Ln;classes=Fn;inlineStyles=An;static \u0275fac=(()=>{let e;return function(o){return(e||(e=U(t)))(o||t)}})();static \u0275prov=I({token:t,factory:t.\u0275fac})}return t})();var Li=new W("AUTOCOMPLETE_INSTANCE"),Pn={provide:pt,useExisting:Ye(()=>Ue),multi:!0},Ue=(()=>{class t extends _i{overlayService;zone;$pcAutoComplete=g(Li,{optional:!0,skipSelf:!0})??void 0;bindDirectiveInstance=g(O,{self:!0});minLength=1;minQueryLength;delay=300;panelStyle;styleClass;panelStyleClass;inputStyle;inputId;inputStyleClass;placeholder;readonly;scrollHeight="200px";lazy=!1;virtualScroll;virtualScrollItemSize;virtualScrollOptions;autoHighlight;forceSelection;type="text";autoZIndex=!0;baseZIndex=0;ariaLabel;dropdownAriaLabel;ariaLabelledBy;dropdownIcon;unique=!0;group;completeOnFocus=!1;showClear=!1;dropdown;showEmptyMessage=!0;dropdownMode="blank";multiple;addOnTab=!1;tabindex;dataKey;emptyMessage;showTransitionOptions=".12s cubic-bezier(0, 0, 0.2, 1)";hideTransitionOptions=".1s linear";autofocus;autocomplete="off";optionGroupChildren="items";optionGroupLabel="label";overlayOptions;get suggestions(){return this._suggestions()}set suggestions(e){this._suggestions.set(e),this.handleSuggestionsChange()}optionLabel;optionValue;id;searchMessage;emptySelectionMessage;selectionMessage;autoOptionFocus=!1;selectOnFocus;searchLocale;optionDisabled;focusOnHover=!0;typeahead=!0;addOnBlur=!1;separator;appendTo=ot(void 0);completeMethod=new D;onSelect=new D;onUnselect=new D;onAdd=new D;onFocus=new D;onBlur=new D;onDropdownClick=new D;onClear=new D;onInputKeydown=new D;onKeyUp=new D;onShow=new D;onHide=new D;onLazyLoad=new D;inputEL;multiInputEl;multiContainerEL;dropdownButton;itemsViewChild;scroller;overlayViewChild;itemsWrapper;itemTemplate;emptyTemplate;headerTemplate;footerTemplate;selectedItemTemplate;groupTemplate;loaderTemplate;removeIconTemplate;loadingIconTemplate;clearIconTemplate;dropdownIconTemplate;onHostClick(e){this.onContainerClick(e)}value;_suggestions=K(null);timeout;overlayVisible;suggestionsUpdated;highlightOption;highlightOptionChanged;focused=!1;loading;scrollHandler;listId;searchTimeout;dirty=!1;_itemTemplate;_groupTemplate;_selectedItemTemplate;_headerTemplate;_emptyTemplate;_footerTemplate;_loaderTemplate;_removeIconTemplate;_loadingIconTemplate;_clearIconTemplate;_dropdownIconTemplate;focusedMultipleOptionIndex=K(-1);focusedOptionIndex=K(-1);_componentStyle=g(Di);$appendTo=ke(()=>this.appendTo()||this.config.overlayAppendTo());visibleOptions=ke(()=>this.group?this.flatOptions(this._suggestions()):this._suggestions()||[]);inputValue=ke(()=>{let e=this.modelValue(),i=this.optionValueSelected?(this.suggestions||[]).find(o=>Me(o,e,this.equalityKey())):e;if(Ze(e))if(typeof e=="object"||this.optionValueSelected){let o=this.getOptionLabel(i);return o??e}else return e;else return""});get focusedMultipleOptionId(){return this.focusedMultipleOptionIndex()!==-1?`${this.id}_multiple_option_${this.focusedMultipleOptionIndex()}`:null}get focusedOptionId(){return this.focusedOptionIndex()!==-1?`${this.id}_${this.focusedOptionIndex()}`:null}get searchResultMessageText(){return Ze(this.visibleOptions())&&this.overlayVisible?this.searchMessageText.replaceAll("{0}",this.visibleOptions().length):this.emptySearchMessageText}get searchMessageText(){return this.searchMessage||this.config.translation.searchMessage||""}get emptySearchMessageText(){return this.emptyMessage||this.config.translation.emptySearchMessage||""}get selectionMessageText(){return this.selectionMessage||this.config.translation.selectionMessage||""}get emptySelectionMessageText(){return this.emptySelectionMessage||this.config.translation.emptySelectionMessage||""}get selectedMessageText(){return this.hasSelectedOption()?this.selectionMessageText.replaceAll("{0}",this.multiple?this.modelValue()?.length:"1"):this.emptySelectionMessageText}get ariaSetSize(){return this.visibleOptions().filter(e=>!this.isOptionGroup(e)).length}get listLabel(){return this.config.getTranslation(De.ARIA).listLabel}get virtualScrollerDisabled(){return!this.virtualScroll}get optionValueSelected(){return typeof this.modelValue()=="string"&&this.optionValue}chipItemClass(e){return this._componentStyle.classes.chipItem({instance:this,i:e})}constructor(e,i){super(),this.overlayService=e,this.zone=i}onInit(){this.id=this.id||oi("pn_id_"),this.cd.detectChanges()}templates;onAfterContentInit(){this.templates.forEach(e=>{switch(e.getType()){case"item":this._itemTemplate=e.template;break;case"group":this._groupTemplate=e.template;break;case"selecteditem":this._selectedItemTemplate=e.template;break;case"selectedItem":this._selectedItemTemplate=e.template;break;case"header":this._headerTemplate=e.template;break;case"empty":this._emptyTemplate=e.template;break;case"footer":this._footerTemplate=e.template;break;case"loader":this._loaderTemplate=e.template;break;case"removetokenicon":this._removeIconTemplate=e.template;break;case"loadingicon":this._loadingIconTemplate=e.template;break;case"clearicon":this._clearIconTemplate=e.template;break;case"dropdownicon":this._dropdownIconTemplate=e.template;break;default:this._itemTemplate=e.template;break}})}onAfterViewChecked(){this.bindDirectiveInstance.setAttrs(this.ptms(["host","root"])),this.suggestionsUpdated&&this.overlayViewChild&&this.zone.runOutsideAngular(()=>{setTimeout(()=>{this.overlayViewChild&&this.overlayViewChild.alignOverlay()},1),this.suggestionsUpdated=!1})}handleSuggestionsChange(){if(this.loading){this._suggestions()?.length>0||this.showEmptyMessage||this.emptyTemplate?this.show():this.hide();let e=this.overlayVisible&&this.autoOptionFocus?this.findFirstFocusedOptionIndex():-1;this.focusedOptionIndex.set(e),this.suggestionsUpdated=!0,this.loading=!1,this.cd.markForCheck()}}flatOptions(e){return(e||[]).reduce((i,o,a)=>{i.push({optionGroup:o,group:!0,index:a});let r=this.getOptionGroupChildren(o);return r&&r.forEach(M=>i.push(M)),i},[])}isOptionGroup(e){return this.optionGroupLabel&&e.optionGroup&&e.group}findFirstOptionIndex(){return this.visibleOptions().findIndex(e=>this.isValidOption(e))}findLastOptionIndex(){return qt(this.visibleOptions(),e=>this.isValidOption(e))}findFirstFocusedOptionIndex(){let e=this.findSelectedOptionIndex();return e<0?this.findFirstOptionIndex():e}findLastFocusedOptionIndex(){let e=this.findSelectedOptionIndex();return e<0?this.findLastOptionIndex():e}findSelectedOptionIndex(){return this.hasSelectedOption()?this.visibleOptions().findIndex(e=>this.isValidSelectedOption(e)):-1}findNextOptionIndex(e){let i=e<this.visibleOptions().length-1?this.visibleOptions().slice(e+1).findIndex(o=>this.isValidOption(o)):-1;return i>-1?i+e+1:e}findPrevOptionIndex(e){let i=e>0?qt(this.visibleOptions().slice(0,e),o=>this.isValidOption(o)):-1;return i>-1?i:e}isValidSelectedOption(e){return this.isValidOption(e)&&this.isSelected(e)}isValidOption(e){return e&&!(this.isOptionDisabled(e)||this.isOptionGroup(e))}isOptionDisabled(e){return this.optionDisabled?de(e,this.optionDisabled):!1}isSelected(e){return this.multiple?this.unique?this.modelValue()?.some(i=>Me(i,e,this.equalityKey())):!1:Me(this.modelValue(),e,this.equalityKey())}isOptionMatched(e,i){return this.isValidOption(e)&&this.getOptionLabel(e).toLocaleLowerCase(this.searchLocale)===i.toLocaleLowerCase(this.searchLocale)}isInputClicked(e){return e.target===this.inputEL?.nativeElement}isDropdownClicked(e){return this.dropdownButton?.nativeElement?e.target===this.dropdownButton.nativeElement||this.dropdownButton.nativeElement.contains(e.target):!1}equalityKey(){return this.optionValue?void 0:this.dataKey}onContainerClick(e){this.$disabled()||this.loading||this.isInputClicked(e)||this.isDropdownClicked(e)||(!this.overlayViewChild||!this.overlayViewChild.overlayViewChild?.nativeElement.contains(e.target))&&pe(this.inputEL?.nativeElement)}handleDropdownClick(e){let i;this.overlayVisible?this.hide(!0):(pe(this.inputEL?.nativeElement),i=this.inputEL?.nativeElement?.value,this.dropdownMode==="blank"?this.search(e,"","dropdown"):this.dropdownMode==="current"&&this.search(e,i,"dropdown")),this.onDropdownClick.emit({originalEvent:e,query:i})}onInput(e){if(this.typeahead){let i=this.minQueryLength||this.minLength;this.searchTimeout&&clearTimeout(this.searchTimeout);let o=e.target.value;this.maxlength()!==null&&(o=o.split("").slice(0,this.maxlength()).join("")),!this.multiple&&!this.forceSelection&&this.updateModel(o),o.length===0&&!this.multiple?(this.onClear.emit(),setTimeout(()=>{this.hide()},this.delay/2)):o.length>=i?(this.focusedOptionIndex.set(-1),this.searchTimeout=setTimeout(()=>{this.search(e,o,"input")},this.delay)):this.hide()}}onInputChange(e){if(this.forceSelection){let i=!1;if(this.visibleOptions()){let o=this.visibleOptions().find(a=>this.isOptionMatched(a,this.inputEL?.nativeElement?.value||""));o!==void 0&&(i=!0,!this.isSelected(o)&&this.onOptionSelect(e,o))}i||(this.inputEL?.nativeElement&&(this.inputEL.nativeElement.value=""),!this.multiple&&this.updateModel(null))}}onInputFocus(e){if(this.$disabled())return;!this.dirty&&this.completeOnFocus&&this.search(e,e.target.value,"focus"),this.dirty=!0,this.focused=!0;let i=this.focusedOptionIndex()!==-1?this.focusedOptionIndex():this.overlayVisible&&this.autoOptionFocus?this.findFirstFocusedOptionIndex():-1;this.focusedOptionIndex.set(i),this.overlayVisible&&this.scrollInView(this.focusedOptionIndex()),this.onFocus.emit(e)}onMultipleContainerFocus(e){this.$disabled()||(this.focused=!0)}onMultipleContainerBlur(e){this.focusedMultipleOptionIndex.set(-1),this.focused=!1}onMultipleContainerKeyDown(e){if(this.$disabled()){e.preventDefault();return}switch(e.code){case"ArrowLeft":this.onArrowLeftKeyOnMultiple(e);break;case"ArrowRight":this.onArrowRightKeyOnMultiple(e);break;case"Backspace":this.onBackspaceKeyOnMultiple(e);break;default:break}}onInputBlur(e){if(this.dirty=!1,this.focused=!1,this.focusedOptionIndex.set(-1),this.addOnBlur&&this.multiple&&!this.typeahead){let i=(this.multiInputEl?.nativeElement?.value||e.target.value||"").trim();i&&!this.isSelected(i)&&(this.updateModel([...this.modelValue()||[],i]),this.onAdd.emit({originalEvent:e,value:i}),this.multiInputEl?.nativeElement?this.multiInputEl.nativeElement.value="":e.target.value="")}this.onModelTouched(),this.onBlur.emit(e)}onInputPaste(e){if(this.separator&&this.multiple&&!this.typeahead){let i=(e.clipboardData||window.clipboardData)?.getData("Text");if(i){let o=i.split(this.separator),a=[...this.modelValue()||[]];if(o.forEach(r=>{let M=r.trim();M&&!this.isSelected(M)&&a.push(M)}),a.length>(this.modelValue()||[]).length){let r=a.slice((this.modelValue()||[]).length);this.updateModel(a),r.forEach(M=>{this.onAdd.emit({originalEvent:e,value:M})}),this.multiInputEl?.nativeElement?this.multiInputEl.nativeElement.value="":e.target.value="",e.preventDefault()}}}else this.onKeyDown(e)}onInputKeyUp(e){this.onKeyUp.emit(e)}onKeyDown(e){if(this.$disabled()){e.preventDefault();return}switch(this.onInputKeydown.emit(e),e.code){case"ArrowDown":this.onArrowDownKey(e);break;case"ArrowUp":this.onArrowUpKey(e);break;case"ArrowLeft":this.onArrowLeftKey(e);break;case"ArrowRight":this.onArrowRightKey(e);break;case"Home":this.onHomeKey(e);break;case"End":this.onEndKey(e);break;case"PageDown":this.onPageDownKey(e);break;case"PageUp":this.onPageUpKey(e);break;case"Enter":case"NumpadEnter":this.onEnterKey(e);break;case"Escape":this.onEscapeKey(e);break;case"Tab":this.onTabKey(e);break;case"Backspace":this.onBackspaceKey(e);break;case"ShiftLeft":case"ShiftRight":break;default:this.handleSeparatorKey(e);break}}handleSeparatorKey(e){if(this.separator&&this.multiple&&!this.typeahead&&(this.separator===e.key||typeof this.separator=="string"&&e.key===this.separator||this.separator instanceof RegExp&&e.key.match(this.separator))){let i=(this.multiInputEl?.nativeElement?.value||e.target.value||"").trim();i&&!this.isSelected(i)&&(this.updateModel([...this.modelValue()||[],i]),this.onAdd.emit({originalEvent:e,value:i}),this.multiInputEl?.nativeElement?this.multiInputEl.nativeElement.value="":e.target.value="",e.preventDefault())}}onArrowDownKey(e){if(!this.overlayVisible)return;let i=this.focusedOptionIndex()!==-1?this.findNextOptionIndex(this.focusedOptionIndex()):this.findFirstFocusedOptionIndex();this.changeFocusedOptionIndex(e,i),e.preventDefault(),e.stopPropagation()}onArrowUpKey(e){if(this.overlayVisible)if(e.altKey)this.focusedOptionIndex()!==-1&&this.onOptionSelect(e,this.visibleOptions()[this.focusedOptionIndex()]),this.overlayVisible&&this.hide(),e.preventDefault();else{let i=this.focusedOptionIndex()!==-1?this.findPrevOptionIndex(this.focusedOptionIndex()):this.findLastFocusedOptionIndex();this.changeFocusedOptionIndex(e,i),e.preventDefault(),e.stopPropagation()}}onArrowLeftKey(e){let i=e.currentTarget;this.focusedOptionIndex.set(-1),this.multiple&&(zt(i.value)&&this.hasSelectedOption()?(pe(this.multiContainerEL?.nativeElement),this.focusedMultipleOptionIndex.set(this.modelValue().length)):e.stopPropagation())}onArrowRightKey(e){this.focusedOptionIndex.set(-1),this.multiple&&e.stopPropagation()}onHomeKey(e){let{currentTarget:i}=e,o=i.value.length;i.setSelectionRange(0,e.shiftKey?o:0),this.focusedOptionIndex.set(-1),e.preventDefault()}onEndKey(e){let{currentTarget:i}=e,o=i.value.length;i.setSelectionRange(e.shiftKey?0:o,o),this.focusedOptionIndex.set(-1),e.preventDefault()}onPageDownKey(e){this.scrollInView(this.visibleOptions().length-1),e.preventDefault()}onPageUpKey(e){this.scrollInView(0),e.preventDefault()}onEnterKey(e){if(!this.typeahead&&!this.forceSelection&&this.multiple){let i=e.target.value?.trim();i&&!this.isSelected(i)&&(this.updateModel([...this.modelValue()||[],i]),this.inputEL?.nativeElement&&(this.inputEL.nativeElement.value=""))}if(this.overlayVisible)this.focusedOptionIndex()!==-1&&this.onOptionSelect(e,this.visibleOptions()[this.focusedOptionIndex()]),this.hide();else return;e.preventDefault()}onEscapeKey(e){this.overlayVisible&&this.hide(!0),e.preventDefault()}onTabKey(e){if(this.focusedOptionIndex()!==-1){this.onOptionSelect(e,this.visibleOptions()[this.focusedOptionIndex()]);return}if(this.multiple&&!this.typeahead){let i=(this.multiInputEl?.nativeElement?.value||this.inputEL?.nativeElement?.value||"").trim();if(this.addOnTab&&i&&!this.isSelected(i)){this.updateModel([...this.modelValue()||[],i]),this.onAdd.emit({originalEvent:e,value:i}),this.multiInputEl?.nativeElement?this.multiInputEl.nativeElement.value="":this.inputEL?.nativeElement&&(this.inputEL.nativeElement.value=""),this.updateInputValue(),e.preventDefault(),this.overlayVisible&&this.hide();return}}this.overlayVisible&&this.hide()}onBackspaceKey(e){if(this.multiple){if(Ze(this.modelValue())&&!this.inputEL?.nativeElement?.value){let i=this.modelValue()[this.modelValue().length-1],o=this.modelValue().slice(0,-1);this.updateModel(o),this.onUnselect.emit({originalEvent:e,value:i})}e.stopPropagation()}}onArrowLeftKeyOnMultiple(e){let i=this.focusedMultipleOptionIndex()<1?0:this.focusedMultipleOptionIndex()-1;this.focusedMultipleOptionIndex.set(i)}onArrowRightKeyOnMultiple(e){let i=this.focusedMultipleOptionIndex();i++,this.focusedMultipleOptionIndex.set(i),i>this.modelValue().length-1&&(this.focusedMultipleOptionIndex.set(-1),pe(this.inputEL?.nativeElement))}onBackspaceKeyOnMultiple(e){this.focusedMultipleOptionIndex()!==-1&&this.removeOption(e,this.focusedMultipleOptionIndex())}onOptionSelect(e,i,o=!0){this.multiple?(this.inputEL?.nativeElement&&(this.inputEL.nativeElement.value=""),this.isSelected(i)||this.updateModel([...this.modelValue()||[],i])):this.updateModel(i),this.onSelect.emit({originalEvent:e,value:i}),o&&this.hide(!0)}onOptionMouseEnter(e,i){this.focusOnHover&&this.changeFocusedOptionIndex(e,i)}search(e,i,o){i!=null&&(o==="input"&&i.trim().length===0||(this.loading=!0,this.completeMethod.emit({originalEvent:e,query:i})))}removeOption(e,i){e.stopPropagation();let o=this.modelValue()[i],a=this.modelValue().filter((r,M)=>M!==i);this.updateModel(a),this.onUnselect.emit({originalEvent:e,value:o}),pe(this.inputEL?.nativeElement)}updateModel(e){let i=null;e&&(i=this.multiple?e.map(o=>this.getOptionValue(o)):this.getOptionValue(e)),this.value=i,this.writeModelValue(e),this.onModelChange(i),this.updateInputValue(),this.cd.markForCheck()}updateInputValue(){this.inputEL&&this.inputEL.nativeElement&&(this.multiple?this.inputEL.nativeElement.value="":this.inputEL.nativeElement.value=this.inputValue())}autoUpdateModel(){if((this.selectOnFocus||this.autoHighlight)&&this.autoOptionFocus&&!this.hasSelectedOption()){let e=this.findFirstFocusedOptionIndex();this.focusedOptionIndex.set(e),this.onOptionSelect(null,this.visibleOptions()[this.focusedOptionIndex()],!1)}}scrollInView(e=-1){let i=e!==-1?`${this.id}_${e}`:this.focusedOptionId;if(this.itemsViewChild&&this.itemsViewChild.nativeElement){let o=at(this.itemsViewChild.nativeElement,`li[id="${i}"]`);o?o.scrollIntoView&&o.scrollIntoView({block:"nearest",inline:"nearest"}):this.virtualScrollerDisabled||setTimeout(()=>{this.virtualScroll&&this.scroller?.scrollToIndex(e!==-1?e:this.focusedOptionIndex())},0)}}changeFocusedOptionIndex(e,i){this.focusedOptionIndex()!==i&&(this.focusedOptionIndex.set(i),this.scrollInView(),this.selectOnFocus&&this.onOptionSelect(e,this.visibleOptions()[i],!1))}show(e=!1){this.dirty=!0,this.overlayVisible=!0;let i=this.focusedOptionIndex()!==-1?this.focusedOptionIndex():this.autoOptionFocus?this.findFirstFocusedOptionIndex():-1;this.focusedOptionIndex.set(i),e&&pe(this.inputEL?.nativeElement),e&&pe(this.inputEL?.nativeElement),this.onShow.emit(),this.cd.markForCheck()}hide(e=!1){let i=()=>{this.dirty=e,this.overlayVisible=!1,this.focusedOptionIndex.set(-1),e&&pe(this.inputEL?.nativeElement),this.onHide.emit(),this.cd.markForCheck()};setTimeout(()=>{i()},0)}clear(){this.updateModel(null),this.inputEL?.nativeElement&&(this.inputEL.nativeElement.value=""),this.onClear.emit()}hasSelectedOption(){return Ze(this.modelValue())}getAriaPosInset(e){return(this.optionGroupLabel?e-this.visibleOptions().slice(0,e).filter(i=>this.isOptionGroup(i)).length:e)+1}getOptionLabel(e){return this.optionLabel?de(e,this.optionLabel):e&&e.label!=null?e.label:e}getOptionValue(e){return this.optionValue?de(e,this.optionValue):e&&e.value!=null?e.value:e}getOptionIndex(e,i){return this.virtualScrollerDisabled?e:i&&i.getItemOptions(e).index}getOptionGroupLabel(e){return this.optionGroupLabel?de(e,this.optionGroupLabel):e&&e.label!=null?e.label:e}getOptionGroupChildren(e){return this.optionGroupChildren?de(e,this.optionGroupChildren):e.items}getPTOptions(e,i,o,a){return this.ptm(a,{context:{option:e,index:this.getOptionIndex(o,i),selected:this.isSelected(e),focused:this.focusedOptionIndex()===this.getOptionIndex(o,i),disabled:this.isOptionDisabled(e)}})}onOverlayAnimationStart(e){if(e.toState==="visible"&&(this.itemsWrapper=at(this.overlayViewChild.overlayViewChild?.nativeElement,this.virtualScroll?".p-scroller":".p-autocomplete-panel"),this.virtualScroll&&(this.scroller?.setContentEl(this.itemsViewChild?.nativeElement),this.scroller?.viewInit()),this.visibleOptions()&&this.visibleOptions().length))if(this.virtualScroll){let i=this.modelValue()?this.focusedOptionIndex():-1;i!==-1&&this.scroller?.scrollToIndex(i)}else{let i=at(this.itemsWrapper,".p-autocomplete-item.p-highlight");i&&i.scrollIntoView({block:"nearest",inline:"center"})}}writeControlValue(e,i){let o=this.multiple?this.visibleOptions().filter(a=>e?.some(r=>Me(r,a,this.equalityKey()))):this.visibleOptions().find(a=>Me(e,a,this.equalityKey()));this.value=e,i(zt(o)?e:o),this.updateInputValue(),this.cd.markForCheck()}onDestroy(){this.scrollHandler&&(this.scrollHandler.destroy(),this.scrollHandler=null)}static \u0275fac=function(i){return new(i||t)(Pt(ai),Pt(Zt))};static \u0275cmp=L({type:t,selectors:[["p-autoComplete"],["p-autocomplete"],["p-auto-complete"]],contentQueries:function(i,o,a){if(i&1&&(w(a,fo,5),w(a,ho,5),w(a,_o,5),w(a,bo,5),w(a,Co,5),w(a,vo,5),w(a,yo,5),w(a,wo,5),w(a,xo,5),w(a,So,5),w(a,To,5),w(a,te,4)),i&2){let r;v(r=y())&&(o.itemTemplate=r.first),v(r=y())&&(o.emptyTemplate=r.first),v(r=y())&&(o.headerTemplate=r.first),v(r=y())&&(o.footerTemplate=r.first),v(r=y())&&(o.selectedItemTemplate=r.first),v(r=y())&&(o.groupTemplate=r.first),v(r=y())&&(o.loaderTemplate=r.first),v(r=y())&&(o.removeIconTemplate=r.first),v(r=y())&&(o.loadingIconTemplate=r.first),v(r=y())&&(o.clearIconTemplate=r.first),v(r=y())&&(o.dropdownIconTemplate=r.first),v(r=y())&&(o.templates=r)}},viewQuery:function(i,o){if(i&1&&(X(Io,5),X(Eo,5),X(ko,5),X(Vo,5),X(Oo,5),X(Mo,5),X(Do,5)),i&2){let a;v(a=y())&&(o.inputEL=a.first),v(a=y())&&(o.multiInputEl=a.first),v(a=y())&&(o.multiContainerEL=a.first),v(a=y())&&(o.dropdownButton=a.first),v(a=y())&&(o.itemsViewChild=a.first),v(a=y())&&(o.scroller=a.first),v(a=y())&&(o.overlayViewChild=a.first)}},hostVars:4,hostBindings:function(i,o){i&1&&_("click",function(r){return o.onHostClick(r)}),i&2&&(Ee(o.sx("root")),h(o.cn(o.cx("root"),o.styleClass)))},inputs:{minLength:[2,"minLength","minLength",G],minQueryLength:[2,"minQueryLength","minQueryLength",G],delay:[2,"delay","delay",G],panelStyle:"panelStyle",styleClass:"styleClass",panelStyleClass:"panelStyleClass",inputStyle:"inputStyle",inputId:"inputId",inputStyleClass:"inputStyleClass",placeholder:"placeholder",readonly:[2,"readonly","readonly",x],scrollHeight:"scrollHeight",lazy:[2,"lazy","lazy",x],virtualScroll:[2,"virtualScroll","virtualScroll",x],virtualScrollItemSize:[2,"virtualScrollItemSize","virtualScrollItemSize",G],virtualScrollOptions:"virtualScrollOptions",autoHighlight:[2,"autoHighlight","autoHighlight",x],forceSelection:[2,"forceSelection","forceSelection",x],type:"type",autoZIndex:[2,"autoZIndex","autoZIndex",x],baseZIndex:[2,"baseZIndex","baseZIndex",G],ariaLabel:"ariaLabel",dropdownAriaLabel:"dropdownAriaLabel",ariaLabelledBy:"ariaLabelledBy",dropdownIcon:"dropdownIcon",unique:[2,"unique","unique",x],group:[2,"group","group",x],completeOnFocus:[2,"completeOnFocus","completeOnFocus",x],showClear:[2,"showClear","showClear",x],dropdown:[2,"dropdown","dropdown",x],showEmptyMessage:[2,"showEmptyMessage","showEmptyMessage",x],dropdownMode:"dropdownMode",multiple:[2,"multiple","multiple",x],addOnTab:[2,"addOnTab","addOnTab",x],tabindex:[2,"tabindex","tabindex",G],dataKey:"dataKey",emptyMessage:"emptyMessage",showTransitionOptions:"showTransitionOptions",hideTransitionOptions:"hideTransitionOptions",autofocus:[2,"autofocus","autofocus",x],autocomplete:"autocomplete",optionGroupChildren:"optionGroupChildren",optionGroupLabel:"optionGroupLabel",overlayOptions:"overlayOptions",suggestions:"suggestions",optionLabel:"optionLabel",optionValue:"optionValue",id:"id",searchMessage:"searchMessage",emptySelectionMessage:"emptySelectionMessage",selectionMessage:"selectionMessage",autoOptionFocus:[2,"autoOptionFocus","autoOptionFocus",x],selectOnFocus:[2,"selectOnFocus","selectOnFocus",x],searchLocale:[2,"searchLocale","searchLocale",x],optionDisabled:"optionDisabled",focusOnHover:[2,"focusOnHover","focusOnHover",x],typeahead:[2,"typeahead","typeahead",x],addOnBlur:[2,"addOnBlur","addOnBlur",x],separator:"separator",appendTo:[1,"appendTo"]},outputs:{completeMethod:"completeMethod",onSelect:"onSelect",onUnselect:"onUnselect",onAdd:"onAdd",onFocus:"onFocus",onBlur:"onBlur",onDropdownClick:"onDropdownClick",onClear:"onClear",onInputKeydown:"onInputKeydown",onKeyUp:"onKeyUp",onShow:"onShow",onHide:"onHide",onLazyLoad:"onLazyLoad"},features:[Y([Pn,Di,{provide:Li,useExisting:t},{provide:oe,useExisting:t}]),Z([O]),J],decls:9,vars:13,consts:[["overlay",""],["content",""],["focusInput",""],["multiContainer",""],["focusInput","","multiIn",""],["token",""],["removeicon",""],["ddBtn",""],["buildInItems",""],["scroller",""],["loader",""],["items",""],["empty",""],["pInputText","","aria-autocomplete","list","role","combobox",3,"pAutoFocus","pt","class","ngStyle","variant","invalid","pSize","fluid","input","keydown","change","focus","blur","paste","keyup",4,"ngIf"],[4,"ngIf"],["role","listbox",3,"pBind","class","tabindex","focus","blur","keydown",4,"ngIf"],["type","button","pRipple","",3,"pBind","class","disabled","click",4,"ngIf"],[3,"visibleChange","onAnimationStart","onHide","pt","hostAttrSelector","visible","options","target","appendTo","showTransitionOptions","hideTransitionOptions"],["pInputText","","aria-autocomplete","list","role","combobox",3,"input","keydown","change","focus","blur","paste","keyup","pAutoFocus","pt","ngStyle","variant","invalid","pSize","fluid"],["data-p-icon","times",3,"pBind","class","click",4,"ngIf"],[3,"pBind","class","click",4,"ngIf"],["data-p-icon","times",3,"click","pBind"],[3,"click","pBind"],[4,"ngTemplateOutlet"],["role","listbox",3,"focus","blur","keydown","pBind","tabindex"],["role","option",3,"pBind","class",4,"ngFor","ngForOf"],["role","option",3,"pBind"],["role","combobox","aria-autocomplete","list",3,"input","keydown","change","focus","blur","paste","keyup","pAutoFocus","pBind","ngStyle"],[3,"onRemove","pt","label","disabled","removable"],[4,"ngTemplateOutlet","ngTemplateOutletContext"],[3,"pBind",4,"ngIf"],["data-p-icon","times-circle"],[3,"pBind"],["data-p-icon","spinner",3,"pBind","class","spin",4,"ngIf"],[3,"pBind","class",4,"ngIf"],["data-p-icon","spinner",3,"pBind","spin"],["type","button","pRipple","",3,"click","pBind","disabled"],[3,"ngClass",4,"ngIf"],[3,"ngClass"],["data-p-icon","chevron-down",3,"pBind",4,"ngIf"],["data-p-icon","chevron-down",3,"pBind"],[3,"pBind","ngStyle"],[3,"pBind","tabindex"],[3,"pt","items","style","itemSize","autoSize","lazy","options","onLazyLoad",4,"ngIf"],["role","status","aria-live","polite",1,"p-hidden-accessible"],[3,"onLazyLoad","pt","items","itemSize","autoSize","lazy","options"],["role","listbox",3,"pBind"],["ngFor","",3,"ngForOf"],["role","option",3,"pBind","class","ngStyle",4,"ngIf"],["role","option",3,"pBind","ngStyle"],["pRipple","","role","option",3,"click","mouseenter","pBind","ngStyle"],[4,"ngIf","ngIfElse"]],template:function(i,o){if(i&1){let a=S();f(0,Ro,2,31,"input",13)(1,Qo,3,2,"ng-container",14)(2,Xo,7,36,"ul",15)(3,nn,3,2,"ng-container",14)(4,pn,4,8,"button",16),p(5,"p-overlay",17,0),Ie("visibleChange",function(M){return u(a),Te(o.overlayVisible,M)||(o.overlayVisible=M),m(M)}),_("onAnimationStart",function(M){return u(a),m(o.onOverlayAnimationStart(M))})("onHide",function(){return u(a),m(o.hide())}),f(7,Dn,10,15,"ng-template",null,1,N),d()}i&2&&(l("ngIf",!o.multiple),s(),l("ngIf",o.$filled()&&!o.$disabled()&&o.showClear&&!o.loading),s(),l("ngIf",o.multiple),s(),l("ngIf",o.loading),s(),l("ngIf",o.dropdown),s(),l("pt",o.ptm("pcOverlay"))("hostAttrSelector",o.$attrSelector),Se("visible",o.overlayVisible),l("options",o.overlayOptions)("target","@parent")("appendTo",o.$appendTo())("showTransitionOptions",o.showTransitionOptions)("hideTransitionOptions",o.hideTransitionOptions))},dependencies:[F,Oe,nt,me,ee,ti,bi,mt,di,Ci,rt,ct,st,ci,Oi,Q,pi,lt,O],encapsulation:2,changeDetection:0})}return t})(),wt=(()=>{class t{static \u0275fac=function(i){return new(i||t)};static \u0275mod=ce({type:t});static \u0275inj=le({imports:[Ue,Q,Q]})}return t})();var H=class t{selectCategoriaDefault={idCategoriaTramite:0,nombre:"",descripcion:""};selectCategoria=K(this.selectCategoriaDefault);listCategoria=K([]);loading=K(!1);static \u0275fac=function(e){return new(e||t)};static \u0275prov=I({token:t,factory:t.\u0275fac,providedIn:"root"})};var xt=class t{maxLengthNombre=100;maxLengthDescripcion=255;minLengthNombre=3;minLengthDescripcion=5;expReg=/^[a-zA-Z0-9áÁéÉíÍóÓúÚ\u00C0-\u017F][a-zA-Z0-9áÁéÉíÍóÓúÚ\u00C0-\u017F\s.-]*[a-zA-Z0-9áÁéÉíÍóÓúÚ\u00C0-\u017F.-]$/;expLockInputNombre=/[^a-zA-ZáéíóúÁÉÍÓÚüÜñÑ ]/g;expLockInputDescripcion=/[^a-zA-ZáéíóúÁÉÍÓÚüÜñÑ ,.-]/g;static \u0275fac=function(e){return new(e||t)};static \u0275prov=I({token:t,factory:t.\u0275fac,providedIn:"root"})};var St=class t{repository=g(Qe);execute(n){return this.repository.crearCategoria(n)}static \u0275fac=function(e){return new(e||t)};static \u0275prov=I({token:t,factory:t.\u0275fac,providedIn:"root"})};var Tt=class t{repository=g(Qe);execute(n){return this.repository.editarCategoria(n)}static \u0275fac=function(e){return new(e||t)};static \u0275prov=I({token:t,factory:t.\u0275fac,providedIn:"root"})};var Ni=`
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
`;var Nn=["handle"],Bn=["input"],Rn=t=>({checked:t});function zn(t,n){t&1&&P(0)}function qn(t,n){if(t&1&&f(0,zn,1,0,"ng-container",3),t&2){let e=c();l("ngTemplateOutlet",e.handleTemplate||e._handleTemplate)("ngTemplateOutletContext",R(2,Rn,e.checked()))}}var jn=`
    ${Ni}

    p-toggleswitch.ng-invalid.ng-dirty > .p-toggleswitch-slider {
        border-color: dt('toggleswitch.invalid.border.color');
    }
`,$n={root:{position:"relative"}},Qn={root:({instance:t})=>["p-toggleswitch p-component",{"p-toggleswitch p-component":!0,"p-toggleswitch-checked":t.checked(),"p-disabled":t.$disabled(),"p-invalid":t.invalid()}],input:"p-toggleswitch-input",slider:"p-toggleswitch-slider",handle:"p-toggleswitch-handle"},Bi=(()=>{class t extends ie{name="toggleswitch";style=jn;classes=Qn;inlineStyles=$n;static \u0275fac=(()=>{let e;return function(o){return(e||(e=U(t)))(o||t)}})();static \u0275prov=I({token:t,factory:t.\u0275fac})}return t})();var Ri=new W("TOGGLESWITCH_INSTANCE"),Gn={provide:pt,useExisting:Ye(()=>Ke),multi:!0},Ke=(()=>{class t extends hi{$pcToggleSwitch=g(Ri,{optional:!0,skipSelf:!0})??void 0;bindDirectiveInstance=g(O,{self:!0});onAfterViewChecked(){this.bindDirectiveInstance.setAttrs(this.ptms(["host","root"]))}styleClass;tabindex;inputId;readonly;trueValue=!0;falseValue=!1;ariaLabel;size=ot();ariaLabelledBy;autofocus;onChange=new D;input;handleTemplate;_handleTemplate;focused=!1;_componentStyle=g(Bi);templates;onHostClick(e){this.onClick(e)}onAfterContentInit(){this.templates.forEach(e=>{switch(e.getType()){case"handle":this._handleTemplate=e.template;break;default:this._handleTemplate=e.template;break}})}onClick(e){!this.$disabled()&&!this.readonly&&(this.writeModelValue(this.checked()?this.falseValue:this.trueValue),this.onModelChange(this.modelValue()),this.onChange.emit({originalEvent:e,checked:this.modelValue()}),this.input.nativeElement.focus())}onFocus(){this.focused=!0}onBlur(){this.focused=!1,this.onModelTouched()}checked(){return this.modelValue()===this.trueValue}writeControlValue(e,i){i(e),this.cd.markForCheck()}static \u0275fac=(()=>{let e;return function(o){return(e||(e=U(t)))(o||t)}})();static \u0275cmp=L({type:t,selectors:[["p-toggleswitch"],["p-toggleSwitch"],["p-toggle-switch"]],contentQueries:function(i,o,a){if(i&1&&(w(a,Nn,4),w(a,te,4)),i&2){let r;v(r=y())&&(o.handleTemplate=r.first),v(r=y())&&(o.templates=r)}},viewQuery:function(i,o){if(i&1&&X(Bn,5),i&2){let a;v(a=y())&&(o.input=a.first)}},hostVars:5,hostBindings:function(i,o){i&1&&_("click",function(r){return o.onHostClick(r)}),i&2&&(A("data-pc-name","toggleswitch"),Ee(o.sx("root")),h(o.cn(o.cx("root"),o.styleClass)))},inputs:{styleClass:"styleClass",tabindex:[2,"tabindex","tabindex",G],inputId:"inputId",readonly:[2,"readonly","readonly",x],trueValue:"trueValue",falseValue:"falseValue",ariaLabel:"ariaLabel",size:[1,"size"],ariaLabelledBy:"ariaLabelledBy",autofocus:[2,"autofocus","autofocus",x]},outputs:{onChange:"onChange"},features:[Y([Gn,Bi,{provide:Ri,useExisting:t},{provide:oe,useExisting:t}]),Z([O]),J],decls:5,vars:20,consts:[["input",""],["type","checkbox","role","switch",3,"focus","blur","checked","pAutoFocus","pBind"],[3,"pBind"],[4,"ngTemplateOutlet","ngTemplateOutletContext"]],template:function(i,o){if(i&1){let a=S();p(0,"input",1,0),_("focus",function(){return u(a),m(o.onFocus())})("blur",function(){return u(a),m(o.onBlur())}),d(),p(2,"div",2)(3,"div",2),E(4,qn,1,4,"ng-container"),d()()}i&2&&(h(o.cx("input")),l("checked",o.checked())("pAutoFocus",o.autofocus)("pBind",o.ptm("input")),A("id",o.inputId)("required",o.required()?"":void 0)("disabled",o.$disabled()?"":void 0)("aria-checked",o.checked())("aria-labelledby",o.ariaLabelledBy)("aria-label",o.ariaLabel)("name",o.name())("tabindex",o.tabindex),s(2),h(o.cx("slider")),l("pBind",o.ptm("slider")),s(),h(o.cx("handle")),l("pBind",o.ptm("handle")),s(),k(o.handleTemplate||o._handleTemplate?4:-1))},dependencies:[F,ee,rt,Q,lt,O],encapsulation:2,changeDetection:0})}return t})(),It=(()=>{class t{static \u0275fac=function(i){return new(i||t)};static \u0275mod=ce({type:t});static \u0275inj=le({imports:[Ke,Q,Q]})}return t})();var qi=()=>({standalone:!0}),Un=(t,n)=>n.controls.nombreArea.value,Kn=(t,n)=>n.controls.nombreDocumento.value;function Hn(t,n){if(t&1){let e=S();p(0,"div",11)(1,"ui-input",25),_("onInputEvent",function(o){u(e);let a=c();return m(a.onCostoInput(o))}),d()()}t&2&&(s(),l("min",1)("useExternalLabel",!0)("upperCase",!1)("patternErrorMessage","Ingresa un valor numerico valido (hasta 2 decimales)."))}function Wn(t,n){t&1&&(p(0,"small",12),b(1,"Costo configurado en 0.00 automaticamente."),d())}function Jn(t,n){if(t&1&&(p(0,"div",26)(1,"span",27),b(2),d(),p(3,"small",28),b(4),d()()),t&2){let e=n.$implicit;s(2),B(e.nombre),s(2),$("Responsable: ",e.responsable)}}function Zn(t,n){t&1&&(p(0,"small",18),b(1,"Debes agregar al menos un area al flujo."),d())}function Xn(t,n){if(t&1){let e=S();p(0,"article",20)(1,"div",29)(2,"div",30)(3,"span",31),b(4),d(),p(5,"div",32)(6,"p",33),b(7),d(),p(8,"small",34),b(9),d()()(),p(10,"div",35)(11,"ui-icon-button",36),_("onClick",function(){let o=u(e).$index,a=c();return m(a.subirArea(o))}),d(),p(12,"ui-icon-button",37),_("onClick",function(){let o=u(e).$index,a=c();return m(a.bajarArea(o))}),d(),p(13,"ui-icon-button",38),_("onClick",function(){let o=u(e).$index,a=c();return m(a.eliminarArea(o))}),d()()(),p(14,"div",39)(15,"div",40),C(16,"ui-input",41),d(),p(17,"div",42)(18,"label",43),b(19,"Accion del area"),d(),C(20,"input",44),p(21,"small",28),b(22),d()()()()}if(t&2){let e=n.$implicit,i=n.$index,o=c();l("formGroupName",i),s(4),B(i+1),s(3),B(e.controls.nombreArea.value),s(2),$("Responsable: ",e.controls.responsable.value),s(2),l("disabled",i===0),s(),l("disabled",i===o.etapasProceso.length-1),s(4),l("min",1)("useExternalLabel",!0)("upperCase",!1)("patternErrorMessage","Ingresa solo numeros."),s(6),$("",e.controls.observaciones.value.length||0," / 180")}}function Yn(t,n){if(t&1&&(p(0,"div",26)(1,"span",27),b(2),d(),p(3,"small",28),b(4),d()()),t&2){let e=n.$implicit;s(2),B(e.nombre),s(2),B(e.tipos.join(" / "))}}function ea(t,n){t&1&&(p(0,"small",18),b(1,"Debes agregar al menos un documento."),d())}function ta(t,n){if(t&1){let e=S();p(0,"div",24)(1,"article",45)(2,"div",32)(3,"p",33),b(4),d(),p(5,"small",34),b(6),d()(),p(7,"ui-icon-button",46),_("onClick",function(){let o=u(e).$index,a=c();return m(a.eliminarDocumento(o))}),d()()()}if(t&2){let e=n.$implicit,i=n.$index;l("formGroupName",i),s(4),B(e.controls.nombreDocumento.value),s(2),$("Tipo: ",e.controls.tipos.value)}}var He=class t{ref=g(je);config=g(qe);notificationService=g(ae);subCategoria=null;submitted=!1;selectedAreaModel=null;selectedDocumentoModel=null;areaSuggestions=[];documentoSuggestions=[];areasDisponibles=[{id:1,nombre:"Mesa de Partes",responsable:"Coordinador de Mesa de Partes"},{id:2,nombre:"Gerencia Tecnica",responsable:"Jefe de Gerencia Tecnica"},{id:3,nombre:"Gerencia General",responsable:"Gerente General"},{id:4,nombre:"Asesoria Legal",responsable:"Asesor Legal"},{id:5,nombre:"Control Interno",responsable:"Especialista de Control Interno"},{id:6,nombre:"Registros Academicos",responsable:"Jefe de Registros Academicos"}];documentosDisponibles=[{id:1,nombre:"Solicitud simple",tipos:["PDF"]},{id:2,nombre:"DNI escaneado",tipos:["PDF","JPG","PNG"]},{id:3,nombre:"Plano firmado",tipos:["PDF"]},{id:4,nombre:"Documento tecnico",tipos:["DOCX","PDF"]},{id:5,nombre:"Declaracion jurada",tipos:["PDF"]}];formConfiguracion=new ne({requiereCosto:new V(!1,{nonNullable:!0}),costo:new V(0,{nonNullable:!0,validators:[T.required,T.min(1),T.pattern(/^\d+(\.\d{1,2})?$/)]}),etapasProceso:new jt([]),archivosRequeridos:new jt([])});get modalPrimaryLabel(){return"Guardar Configuracion"}get modalPrimaryDisabled(){return this.formConfiguracion.invalid||this.etapasProceso.length===0||this.archivosRequeridos.length===0}get etapasProceso(){return this.formConfiguracion.controls.etapasProceso}get archivosRequeridos(){return this.formConfiguracion.controls.archivosRequeridos}ngOnInit(){let n=this.config?.data?.payload??{};this.subCategoria=n.subCategoria??null;let e=(this.subCategoria?.detalle?.costo??null)!==null&&(this.subCategoria?.detalle?.costo??0)>0;this.formConfiguracion.controls.requiereCosto.setValue(e),e?(this.formConfiguracion.controls.costo.enable({emitEvent:!1}),this.formConfiguracion.controls.costo.setValue(this.subCategoria?.detalle?.costo??0)):(this.formConfiguracion.controls.costo.setValue(0,{emitEvent:!1}),this.formConfiguracion.controls.costo.disable({emitEvent:!1})),this.formConfiguracion.controls.requiereCosto.valueChanges.subscribe(i=>{if(i){this.formConfiguracion.controls.costo.enable(),this.formConfiguracion.controls.costo.value<=0&&this.formConfiguracion.controls.costo.setValue(1);return}this.formConfiguracion.controls.costo.setValue(0),this.formConfiguracion.controls.costo.disable()}),this.precargarDetalle(this.subCategoria?.detalle)}cancelar(){this.ref.close(null)}guardar(){if(this.submitted=!0,this.formConfiguracion.markAllAsTouched(),this.modalPrimaryDisabled)return;let n={costo:this.formConfiguracion.controls.requiereCosto.value?Number(this.formConfiguracion.controls.costo.value):null,tiempoEstimadoTotalDias:this.etapasProceso.controls.reduce((e,i)=>e+Number(i.controls.diasEstimados.value),0),etapasProceso:this.etapasProceso.controls.map((e,i)=>({orden:i+1,nombreArea:e.controls.nombreArea.value,responsable:e.controls.responsable.value,diasEstimados:Number(e.controls.diasEstimados.value),estado:"pendiente",observaciones:e.controls.observaciones.value})),archivosRequeridos:this.archivosRequeridos.controls.map(e=>({nombreDocumento:e.controls.nombreDocumento.value,obligatorio:!0,formatosPermitidos:e.controls.tipos.value.split("/").map(i=>i.trim()).filter(Boolean),tamanoMaximoMb:0}))};this.notificationService.success("Configuracion de subcategoria guardada correctamente"),this.ref.close({success:!0,detalle:n})}onCostoInput(n){let o=(n.target.value??"").replace(/[^\d.]/g,""),a=o.split("."),r=a.length>2?`${a[0]}.${a.slice(1).join("")}`:o,M=r.includes(".")?`${r.split(".")[0]}.${r.split(".")[1].slice(0,2)}`:r,Xi=Number(M||0);this.formConfiguracion.controls.costo.setValue(Xi,{emitEvent:!1})}completarAreas(n){let e=(n.query??"").trim().toLowerCase();this.areaSuggestions=this.areasDisponibles.filter(i=>!this.etapasProceso.controls.some(o=>o.controls.areaId.value===i.id)).filter(i=>i.nombre.toLowerCase().includes(e)||i.responsable.toLowerCase().includes(e))}agregarAreaDesdeEvento(n){this.agregarArea(n.value)}agregarArea(n){this.etapasProceso.controls.some(i=>i.controls.areaId.value===n.id)||(this.etapasProceso.push(this.createEtapaForm(n)),this.selectedAreaModel=null,this.actualizarOrdenEtapas())}eliminarArea(n){this.etapasProceso.removeAt(n),this.actualizarOrdenEtapas()}subirArea(n){if(n<=0)return;let e=this.etapasProceso.at(n),i=this.etapasProceso.at(n-1);this.etapasProceso.setControl(n-1,e),this.etapasProceso.setControl(n,i),this.actualizarOrdenEtapas()}bajarArea(n){if(n>=this.etapasProceso.length-1)return;let e=this.etapasProceso.at(n),i=this.etapasProceso.at(n+1);this.etapasProceso.setControl(n+1,e),this.etapasProceso.setControl(n,i),this.actualizarOrdenEtapas()}completarDocumentos(n){let e=(n.query??"").trim().toLowerCase();this.documentoSuggestions=this.documentosDisponibles.filter(i=>!this.archivosRequeridos.controls.some(o=>o.controls.documentoId.value===i.id)).filter(i=>i.nombre.toLowerCase().includes(e))}agregarDocumentoDesdeEvento(n){let e=n.value;this.archivosRequeridos.controls.some(o=>o.controls.documentoId.value===e.id)||(this.archivosRequeridos.push(new ne({documentoId:new V(e.id,{nonNullable:!0}),nombreDocumento:new V(e.nombre,{nonNullable:!0}),tipos:new V(e.tipos.join(" / "),{nonNullable:!0})})),this.selectedDocumentoModel=null)}eliminarDocumento(n){this.archivosRequeridos.removeAt(n)}createEtapaForm(n){return new ne({areaId:new V(n.id,{nonNullable:!0}),nombreArea:new V(n.nombre,{nonNullable:!0}),responsable:new V(n.responsable,{nonNullable:!0}),diasEstimados:new V(1,{nonNullable:!0,validators:[T.required,T.min(1),T.max(365)]}),observaciones:new V("Accion principal del area en esta etapa.",{nonNullable:!0,validators:[T.required,T.minLength(5),T.maxLength(180)]})})}actualizarOrdenEtapas(){this.etapasProceso.updateValueAndValidity({emitEvent:!1})}precargarDetalle(n){n&&((n.etapasProceso??[]).forEach(e=>{this.etapasProceso.push(new ne({areaId:new V(e.orden,{nonNullable:!0}),nombreArea:new V(e.nombreArea,{nonNullable:!0}),responsable:new V(e.responsable??e.nombreArea,{nonNullable:!0}),diasEstimados:new V(e.diasEstimados,{nonNullable:!0,validators:[T.required,T.min(1),T.max(365)]}),observaciones:new V(e.observaciones??"Accion principal del area en esta etapa.",{nonNullable:!0,validators:[T.required,T.minLength(5),T.maxLength(180)]})}))}),(n.archivosRequeridos??[]).forEach((e,i)=>{this.archivosRequeridos.push(new ne({documentoId:new V(i+1,{nonNullable:!0}),nombreDocumento:new V(e.nombreDocumento,{nonNullable:!0}),tipos:new V(e.formatosPermitidos.join(" / "),{nonNullable:!0})}))}))}static \u0275fac=function(e){return new(e||t)};static \u0275cmp=L({type:t,selectors:[["app-add-edit-configuracion-subcategoria"]],decls:47,vars:22,consts:[["item",""],[1,"flex","flex-column","gap-4",3,"formGroup"],[1,"surface-card","border-1","surface-border","border-round","p-3","md:p-4"],[1,"flex","flex-column","gap-2"],[1,"m-0","text-900","text-base","md:text-lg","font-semibold"],[1,"m-0","text-600","text-sm"],[1,"mt-3","flex","flex-column","md:flex-row","md:align-items-center","md:justify-content-between","gap-3"],[1,"flex","align-items-center","gap-2"],["formControlName","requiereCosto"],[1,"text-900","font-medium"],[3,"value","severity"],[1,"mt-3","max-w-20rem"],[1,"text-500","mt-2","block"],[1,"flex","flex-column","md:flex-row","md:align-items-center","md:justify-content-between","gap-2"],[1,"m-0","text-600","text-sm","mt-1"],["severity","info",3,"value"],[1,"mt-3","max-w-full","md:max-w-30rem"],["optionLabel","nombre","placeholder","Buscar y agregar area","styleClass","w-full","inputStyleClass","w-full","appendTo","body",3,"ngModelChange","completeMethod","onSelect","ngModel","ngModelOptions","suggestions","dropdown","forceSelection","showClear"],[1,"text-red-500","block","mt-2"],["formArrayName","etapasProceso",1,"mt-3","flex","flex-column","gap-3"],[1,"border-1","surface-border","border-round","p-3",3,"formGroupName"],["severity","contrast",3,"value"],["optionLabel","nombre","placeholder","Buscar y agregar documento","styleClass","w-full","inputStyleClass","w-full","appendTo","body",3,"ngModelChange","completeMethod","onSelect","ngModel","ngModelOptions","suggestions","dropdown","forceSelection","showClear"],["formArrayName","archivosRequeridos",1,"grid","mt-2"],[1,"col-12","md:col-6",3,"formGroupName"],["label","Costo","type","number","formControlName","costo",3,"onInputEvent","min","useExternalLabel","upperCase","patternErrorMessage"],[1,"flex","flex-column"],[1,"font-medium"],[1,"text-500"],[1,"flex","align-items-start","justify-content-between","gap-2","flex-wrap"],[1,"flex","align-items-center","gap-2","min-w-0"],[1,"inline-flex","align-items-center","justify-content-center","w-2rem","h-2rem","border-circle","bg-primary-50","text-primary-700","font-bold"],[1,"min-w-0"],[1,"m-0","text-900","font-semibold","white-space-nowrap","overflow-hidden","text-overflow-ellipsis"],[1,"text-600"],[1,"flex","align-items-center","gap-1"],["icon","pi pi-arrow-up","color","secondary","tooltip","Subir",3,"onClick","disabled"],["icon","pi pi-arrow-down","color","secondary","tooltip","Bajar",3,"onClick","disabled"],["icon","pi pi-trash","color","danger","tooltip","Eliminar",3,"onClick"],[1,"grid","mt-2"],[1,"col-12","md:col-3"],["label","Dias","type","number","formControlName","diasEstimados",3,"min","useExternalLabel","upperCase","patternErrorMessage"],[1,"col-12","md:col-9"],[1,"block","text-sm","font-medium","mb-2"],["pInputText","","type","text","formControlName","observaciones","maxlength","180","placeholder","Describe brevemente que hara esta area en esta etapa",1,"w-full"],[1,"border-1","surface-border","border-round","p-3","h-full","flex","align-items-start","justify-content-between","gap-2"],["icon","pi pi-trash","color","danger","tooltip","Eliminar documento",3,"onClick"]],template:function(e,i){if(e&1){let o=S();p(0,"form",1)(1,"section",2)(2,"div",3)(3,"h3",4),b(4,"Configuracion de costo del tramite"),d(),p(5,"p",5),b(6,"Define si el tramite requiere pago para su atencion."),d()(),p(7,"div",6)(8,"div",7),C(9,"p-toggleswitch",8),p(10,"span",9),b(11,"Este tramite requiere costo"),d()(),C(12,"p-tag",10),d(),E(13,Hn,2,4,"div",11)(14,Wn,2,0,"small",12),d(),p(15,"section",2)(16,"div",13)(17,"div")(18,"h3",4),b(19,"Flujo de areas del tramite"),d(),p(20,"p",14),b(21,"Selecciona areas y organiza el orden del proceso institucional."),d()(),C(22,"p-tag",15),d(),p(23,"div",16)(24,"p-autoComplete",17),Ie("ngModelChange",function(r){return u(o),Te(i.selectedAreaModel,r)||(i.selectedAreaModel=r),m(r)}),_("completeMethod",function(r){return u(o),m(i.completarAreas(r))})("onSelect",function(r){return u(o),m(i.agregarAreaDesdeEvento(r))}),f(25,Jn,5,2,"ng-template",null,0,N),d()(),E(27,Zn,2,0,"small",18),p(28,"div",19),ye(29,Xn,23,11,"article",20,Un),d()(),p(31,"section",2)(32,"div",13)(33,"div")(34,"h3",4),b(35,"Documentos requeridos"),d(),p(36,"p",14),b(37,"Agrega los documentos necesarios para iniciar el tramite."),d()(),C(38,"p-tag",21),d(),p(39,"div",16)(40,"p-autoComplete",22),Ie("ngModelChange",function(r){return u(o),Te(i.selectedDocumentoModel,r)||(i.selectedDocumentoModel=r),m(r)}),_("completeMethod",function(r){return u(o),m(i.completarDocumentos(r))})("onSelect",function(r){return u(o),m(i.agregarDocumentoDesdeEvento(r))}),f(41,Yn,5,2,"ng-template",null,0,N),d()(),E(43,ea,2,0,"small",18),p(44,"div",23),ye(45,ta,8,3,"div",24,Kn),d()()()}e&2&&(l("formGroup",i.formConfiguracion),s(12),l("value",i.formConfiguracion.controls.requiereCosto.value?"Con costo":"Sin costo")("severity",i.formConfiguracion.controls.requiereCosto.value?"success":"info"),s(),k(i.formConfiguracion.controls.requiereCosto.value?13:14),s(9),l("value",i.etapasProceso.length+" area(s)"),s(2),Se("ngModel",i.selectedAreaModel),l("ngModelOptions",ue(20,qi))("suggestions",i.areaSuggestions)("dropdown",!0)("forceSelection",!0)("showClear",!0),s(3),k(i.etapasProceso.length===0&&i.submitted?27:-1),s(2),we(i.etapasProceso.controls),s(9),l("value",i.archivosRequeridos.length+" documento(s)"),s(2),Se("ngModel",i.selectedDocumentoModel),l("ngModelOptions",ue(21,qi))("suggestions",i.documentoSuggestions)("dropdown",!0)("forceSelection",!0)("showClear",!0),s(3),k(i.archivosRequeridos.length===0&&i.submitted?43:-1),s(2),we(i.archivosRequeridos.controls))},dependencies:[F,Re,Pe,ui,ge,Fe,ut,Ne,Be,mi,gi,fe,dt,wt,Ue,ze,It,Ke,gt,mt,_e,he,$e,be],styles:["[_nghost-%COMP%]{display:block}@media (max-width: 768px){[_nghost-%COMP%]     ui-icon-button .p-button{min-width:2.25rem;min-height:2.25rem}}"]})};var Et=class t{ref=g(je);config=g(qe);categoriaSignal=g(H);loading=this.categoriaSignal.loading;formCategoria;categoria;prefillNombre="";notificationService=g(ae);confirmDialogService=g(ve);categoriaValidations=g(xt);maxLengthNombre=this.categoriaValidations.maxLengthNombre;maxLengthDescripcion=this.categoriaValidations.maxLengthDescripcion;minLengthNombre=this.categoriaValidations.minLengthNombre;minLengthDescripcion=this.categoriaValidations.minLengthDescripcion;expReg=this.categoriaValidations.expReg;expLockInputNombre=this.categoriaValidations.expLockInputNombre;expLockInputDescripcion=this.categoriaValidations.expLockInputDescripcion;editarCategoriaUseCase=g(Tt);crearCategoriaUseCase=g(St);modalService=g(Ce);constructor(){this.formCategoria=new ne({nombre:new V("",[T.required,T.minLength(this.minLengthNombre),T.maxLength(this.maxLengthNombre),T.pattern(this.expReg)]),descripcion:new V("",[T.required,T.minLength(this.minLengthDescripcion),T.maxLength(this.maxLengthDescripcion),T.pattern(this.expReg)])})}ngOnInit(){let n=this.config?.data?.payload??{};this.categoria=n.categoria??this.categoriaSignal.selectCategoriaDefault,this.prefillNombre=n.prefillNombre?.trim()??"",this.categoria.idCategoriaTramite!==0?this.patchValue():this.prefillNombre&&this.formCategoria.patchValue({nombre:this.prefillNombre})}get modalPrimaryLabel(){return this.categoria.idCategoriaTramite!==0?"Actualizar Categoria":"Crear Categoria"}get modalPrimaryDisabled(){return this.formCategoria.invalid}guardar(){if(this.formCategoria.invalid)return;let n=this.categoria.idCategoriaTramite===0?"Crear":"Editar";this.confirmDialogService.open({type:"question",title:`${n} Categor\xEDa`,message:`\xBFEst\xE1s seguro que deseas ${n.toLowerCase()} la categor\xEDa?`,onAccept:()=>{if(this.loading.set(!0),console.log(n),n==="Crear"){let e={nombre:this.formCategoria.value.nombre,descripcion:this.formCategoria.value.descripcion};this.crearCategoria(e)}else{let e={idCategoriaTramite:this.categoria.idCategoriaTramite,nombre:this.formCategoria.value.nombre,descripcion:this.formCategoria.value.descripcion};this.editarCategoria(e)}}})}crearCategoria(n){this.crearCategoriaUseCase.execute(n).subscribe({next:e=>{this.notificationService.success(`${e.message}, categor\xEDa creada correctamente`),this.loading.set(!1),this.ref.close({success:!0})},error:e=>{this.loading.set(!1),this.notificationService.error("No se pudo crear la categor\xEDa")}})}editarCategoria(n){this.editarCategoriaUseCase.execute(n).subscribe({next:e=>{this.notificationService.success(`${e.message}, categor\xEDa editada correctamente`),this.loading.set(!1),this.ref.close({success:!0})},error:e=>{this.loading.set(!1),this.notificationService.error("No se pudo editar la categor\xEDa")}})}patchValue(){this.formCategoria.patchValue({nombre:this.categoria.nombre,descripcion:this.categoria.descripcion})}cancelar(){this.ref.close(null)}openAddEditSubCategoria(n){this.modalService.open(He,{data:{subCategoria:n},header:n.idCategoriaTramite===0?"Agregar Configuraci\xF3n de Subcategor\xEDa":"Editar Configuraci\xF3n de Subcategor\xEDa",width:"min(90vw, 720px)",maximizable:!1}).onClose.subscribe(i=>{i?.success})}static \u0275fac=function(e){return new(e||t)};static \u0275cmp=L({type:t,selectors:[["app-add-edit-categoria"]],decls:4,vars:9,consts:[[3,"formGroup"],[1,"flex","flex-column","gap-4","flex-1","min-h-0","w-full"],["label","Nombre","formControlName","nombre",3,"maxlength","minlength","expReg","patternErrorMessage"],["label","Descripci\xF3n","formControlName","descripcion",3,"maxlength","minlength","expReg","patternErrorMessage"]],template:function(e,i){e&1&&(p(0,"form",0)(1,"div",1),C(2,"ui-input",2)(3,"ui-text-area",3),d()()),e&2&&(l("formGroup",i.formCategoria),s(2),l("maxlength",i.maxLengthNombre)("minlength",i.minLengthNombre)("expReg",i.expLockInputNombre)("patternErrorMessage","No debe incluir espacios al final de la palabra"),s(),l("maxlength",i.maxLengthDescripcion)("minlength",i.minLengthDescripcion)("expReg",i.expLockInputDescripcion)("patternErrorMessage","No debe incluir espacios al final de la palabra"))},dependencies:[Re,Pe,ge,Fe,fi,ut,Ne,Be,fe,$e,F,_t],encapsulation:2})};var kt=class t{repository=g(Qe);execute(n){return this.repository.eliminarCategoria(n)}static \u0275fac=function(e){return new(e||t)};static \u0275prov=I({token:t,factory:t.\u0275fac,providedIn:"root"})};var re=class t{listSubCategoria=K([]);selectSubCategoriaDefault={idSubCategoriaTramite:0,idCategoriaTramite:0,nombre:"",montoTramite:"",descripcion:""};selectSubCategoria=K(this.selectSubCategoriaDefault);loading=K(!1);static \u0275fac=function(e){return new(e||t)};static \u0275prov=I({token:t,factory:t.\u0275fac,providedIn:"root"})};function ia(t,n){t&1&&C(0,"app-ui-loading")}function oa(t,n){if(t&1){let e=S();p(0,"div",6)(1,"div",7)(2,"div",8),b(3),d(),p(4,"div",9),b(5),d()(),p(6,"div",10),_("click",function(o){return u(e),m(o.stopPropagation())}),p(7,"ui-icon-button",11),_("onClick",function(){let o=u(e).$implicit,a=c(2);return m(a.openAddEditCategoria(o))}),d(),p(8,"ui-icon-button",12),_("onClick",function(){let o=u(e).$implicit,a=c(2);return m(a.eliminarCategoria(o))}),d()()()}if(t&2){let e=n.$implicit;s(3),B(e.nombre),s(2),$(" ",e.descripcion||"Sin descripci\xF3n"," ")}}function na(t,n){if(t&1){let e=S();p(0,"div",1)(1,"span",2)(2,"p-autoComplete",3),Ie("ngModelChange",function(o){u(e);let a=c();return Te(a.categoriaSeleccionada,o)||(a.categoriaSeleccionada=o),m(o)}),_("completeMethod",function(o){u(e);let a=c();return m(a.filtrarCategorias(o))})("onSelect",function(o){u(e);let a=c();return m(a.seleccionar(o))})("onClear",function(){u(e);let o=c();return m(o.limpiarCategoria())})("onDropdownClick",function(){u(e);let o=c();return m(o.completarConDropdown())})("ngModelChange",function(o){u(e);let a=c();return m(a.onModelChange(o))}),f(3,oa,9,2,"ng-template",null,0,N),d()(),p(5,"div",4)(6,"ui-button",5),_("onClick",function(){u(e);let o=c();return m(o.openCrearCategoria())}),d()()()}if(t&2){let e=c();s(2),Se("ngModel",e.categoriaSeleccionada),l("dropdown",!0)("suggestions",e.sugerencias)("showClear",!0)}}var Vt=class t{categoriaSignal=g(H);subCategoriaSignal=g(re);categoriaSeleccionada=null;terminoCategoria="";categoriaSeleccionadaChange=Ve();selectCategoria=this.categoriaSignal.selectCategoria;selectCategoriaDefault=this.categoriaSignal.selectCategoriaDefault;listCategoria=this.categoriaSignal.listCategoria;loading=this.categoriaSignal.loading;sugerencias=[];modalService=g(Ce);notificationService=g(ae);confirmDialogService=g(ve);obtenerCategoriaUseCase=g(xi);eliminarCategoriaUseCase=g(kt);constructor(){}ngOnInit(){this.obtenerCategorias()}obtenerCategorias(){this.loading.set(!0),this.obtenerCategoriaUseCase.execute().subscribe({next:n=>{this.listCategoria.set(n.data);let e=this.selectCategoria(),i=n.data.some(o=>o.idCategoriaTramite===e.idCategoriaTramite);if(this.loading.set(!1),!i)this.resetCategoriaSeleccionada();else if(e.idCategoriaTramite>0){let o=n.data.find(a=>a.idCategoriaTramite===e.idCategoriaTramite)??e;this.setCategoriaSeleccionada(o)}},error:()=>{this.notificationService.error("No se pudieron cargar las categor\xEDas"),this.loading.set(!1)}})}filtrarCategorias(n){this.terminoCategoria=n.query??"";let e=this.terminoCategoria.trim().toLowerCase();this.sugerencias=this.listCategoria().filter(i=>i.nombre.toLowerCase().includes(e)||i.descripcion.toLowerCase().includes(e))}seleccionar(n){this.setCategoriaSeleccionada(n.value)}onModelChange(n){if(typeof n=="string"){this.terminoCategoria=n,this.categoriaSeleccionada&&n!==this.categoriaSeleccionada.nombre&&this.clearCategoriaSeleccionadaState();return}n||this.resetCategoriaSeleccionada()}limpiarCategoria(){this.resetCategoriaSeleccionada()}completarConDropdown(){this.sugerencias=[...this.listCategoria()]}openCrearCategoria(){this.openAddEditCategoria(this.selectCategoriaDefault,this.resolveCreatePrefillNombre())}openAddEditCategoria(n,e=""){this.modalService.open(Et,{data:{categoria:n,prefillNombre:e},header:n.idCategoriaTramite===0?"Agregar Categor\xEDa":"Editar Categor\xEDa",width:"min(90vw, 720px)",maximizable:!1}).onClose.subscribe(o=>{o?.success&&this.obtenerCategorias()})}eliminarCategoria(n){this.confirmDialogService.open({type:"question",title:"Eliminar categor\xEDa",message:`Se eliminar\xE1 la categor\xEDa "${n.nombre}" y su informaci\xF3n relacionada. Esta acci\xF3n no se puede deshacer.`,acceptLabel:"S\xED, eliminar",rejectLabel:"Cancelar",onAccept:()=>{this.loading.set(!0);let e={idCategoriaTramite:n.idCategoriaTramite};this.eliminarCategoriaUseCase.execute(e).subscribe({next:i=>{this.loading.set(!1),this.selectCategoria().idCategoriaTramite===n.idCategoriaTramite&&this.resetCategoriaSeleccionada(),this.notificationService.success(`${i.message}, categor\xEDa eliminada correctamente`),this.obtenerCategorias()},error:()=>{this.loading.set(!1),this.notificationService.error("No se pudo eliminar la categor\xEDa")}})},onReject:()=>{this.loading.set(!1)}})}setCategoriaSeleccionada(n){this.categoriaSeleccionada=n,this.selectCategoria.set(n),this.terminoCategoria=n.nombre,this.categoriaSeleccionadaChange.emit(n)}resetCategoriaSeleccionada(){this.clearCategoriaSeleccionadaState(),this.terminoCategoria="",this.sugerencias=[...this.listCategoria()]}clearCategoriaSeleccionadaState(){this.categoriaSeleccionada=null,this.selectCategoria.set(this.selectCategoriaDefault),this.subCategoriaSignal.listSubCategoria.set([]),this.subCategoriaSignal.selectSubCategoria.set(this.subCategoriaSignal.selectSubCategoriaDefault),this.categoriaSeleccionadaChange.emit(this.selectCategoriaDefault)}resolveCreatePrefillNombre(){let n=this.terminoCategoria.trim();return n?this.listCategoria().some(i=>i.nombre.trim().toLowerCase()===n.toLowerCase())?"":n:""}static \u0275fac=function(e){return new(e||t)};static \u0275cmp=L({type:t,selectors:[["app-list-categoria"]],outputs:{categoriaSeleccionadaChange:"categoriaSeleccionadaChange"},decls:2,vars:1,consts:[["item",""],[1,"flex","flex-column","sm:flex-row","align-items-stretch","sm:align-items-center","gap-2"],[1,"p-input-icon-left","flex-1"],["optionLabel","nombre","placeholder","Buscar categor\xEDas...","styleClass","w-full","inputStyleClass","w-full","appendTo","body",3,"ngModelChange","completeMethod","onSelect","onClear","onDropdownClick","ngModel","dropdown","suggestions","showClear"],[1,"w-full","sm:w-auto"],["styleClass","w-full sm:w-auto","label","Agregar Categor\xEDa","icon","pi pi-plus",3,"onClick"],[1,"flex","flex-column","sm:flex-row","sm:align-items-center","justify-content-between","w-full","gap-2","py-1"],[1,"min-w-0","flex-1"],[1,"font-medium","white-space-nowrap","overflow-hidden","text-overflow-ellipsis"],[1,"text-500","text-sm","white-space-nowrap","overflow-hidden","text-overflow-ellipsis"],[1,"flex","gap-1","justify-content-end","flex-shrink-0",3,"click"],["icon","pi pi-pencil","color","info","tooltip","Editar",3,"onClick"],["icon","pi pi-trash","color","danger","tooltip","Eliminar",3,"onClick"]],template:function(e,i){e&1&&E(0,ia,1,0,"app-ui-loading")(1,na,7,4,"div",1),e&2&&k(i.loading()?0:1)},dependencies:[Ae,wt,Ue,fe,ge,dt,F,ht,be,bt],styles:["[_nghost-%COMP%]     ui-icon-button .p-button{min-width:2.25rem;min-height:2.25rem}"]})};var ji=`
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
`;var aa=["list"],ra=["grid"],la=["header"],sa=["emptymessage"],ca=["footer"],pa=["paginatorleft"],da=["paginatorright"],ua=["paginatordropdownitem"],ma=["loadingicon"],ga=["listicon"],fa=["gridicon"],ha=[[["p-header"]],[["p-footer"]]],_a=["p-header","p-footer"],ba=()=>({position:"top"}),Gi=t=>({$implicit:t}),Ca=()=>({position:"bottom"});function va(t,n){if(t&1&&C(0,"i"),t&2){let e=c(2);h(e.cn(e.cx("loadingIcon"),"pi-spin"+e.loadingIcon))}}function ya(t,n){}function wa(t,n){t&1&&f(0,ya,0,0,"ng-template")}function xa(t,n){if(t&1&&(q(0),se(),C(1,"svg",5),f(2,wa,1,0,null,6),j()),t&2){let e=c(2);s(),h(e.cx("loadingIcon")),l("pBind",e.ptm("loadingIcon"))("spin",!0),s(),l("ngTemplateOutlet",e.loadingicon)}}function Sa(t,n){if(t&1&&(p(0,"div",3)(1,"div",3),E(2,va,1,2,"i",4)(3,xa,3,5,"ng-container"),d()()),t&2){let e=c();h(e.cx("loading")),l("pBind",e.ptm("loading")),s(),h(e.cx("loadingOverlay")),l("pBind",e.ptm("loadingOverlay")),s(),k(e.loadingIcon?2:3)}}function Ta(t,n){t&1&&P(0)}function Ia(t,n){if(t&1&&(p(0,"div",3),Je(1),f(2,Ta,1,0,"ng-container",6),d()),t&2){let e=c();h(e.cx("header")),l("pBind",e.ptm("header")),s(2),l("ngTemplateOutlet",e.headerTemplate)}}function Ea(t,n){if(t&1){let e=S();p(0,"p-paginator",7),_("onPageChange",function(o){u(e);let a=c();return m(a.paginate(o))}),d()}if(t&2){let e=c();l("rows",e.rows)("first",e.first)("totalRecords",e.totalRecords)("pageLinkSize",e.pageLinks)("alwaysShow",e.alwaysShowPaginator)("rowsPerPageOptions",e.rowsPerPageOptions)("appendTo",e.paginatorDropdownAppendTo)("dropdownScrollHeight",e.paginatorDropdownScrollHeight)("templateLeft",e.paginatorleft)("templateRight",e.paginatorright)("currentPageReportTemplate",e.currentPageReportTemplate)("showFirstLastIcon",e.showFirstLastIcon)("dropdownItemTemplate",e.paginatordropdownitem)("showCurrentPageReport",e.showCurrentPageReport)("showJumpToPageDropdown",e.showJumpToPageDropdown)("showPageLinks",e.showPageLinks)("styleClass",e.cn(e.cx("pcPaginator",ue(18,ba)),e.paginatorStyleClass))("pt",e.ptm("pcPaginator"))}}function ka(t,n){t&1&&P(0)}function Va(t,n){if(t&1&&(f(0,ka,1,0,"ng-container",8),Bt(1,"slice")),t&2){let e=c();l("ngTemplateOutlet",e.listTemplate)("ngTemplateOutletContext",R(6,Gi,e.paginator?Rt(1,2,e.filteredValue||e.value,e.lazy?0:e.first,(e.lazy?0:e.first)+e.rows):e.filteredValue||e.value))}}function Oa(t,n){t&1&&P(0)}function Ma(t,n){if(t&1&&(f(0,Oa,1,0,"ng-container",8),Bt(1,"slice")),t&2){let e=c();l("ngTemplateOutlet",e.gridTemplate)("ngTemplateOutletContext",R(6,Gi,e.paginator?Rt(1,2,e.filteredValue||e.value,e.lazy?0:e.first,(e.lazy?0:e.first)+e.rows):e.filteredValue||e.value))}}function Da(t,n){if(t&1&&(q(0),b(1),j()),t&2){let e=c(2);s(),$(" ",e.emptyMessageLabel," ")}}function La(t,n){t&1&&P(0,null,0)}function Aa(t,n){if(t&1&&(p(0,"div",3),f(1,Da,2,1,"ng-container",9)(2,La,2,0,"ng-container",6),d()),t&2){let e=c();h(e.cx("emptyMessage")),l("pBind",e.ptm("emptyMessage")),s(),l("ngIf",!e.emptymessageTemplate)("ngIfElse",e.empty),s(),l("ngTemplateOutlet",e.emptymessageTemplate)}}function Fa(t,n){if(t&1){let e=S();p(0,"p-paginator",7),_("onPageChange",function(o){u(e);let a=c();return m(a.paginate(o))}),d()}if(t&2){let e=c();l("rows",e.rows)("first",e.first)("totalRecords",e.totalRecords)("pageLinkSize",e.pageLinks)("alwaysShow",e.alwaysShowPaginator)("rowsPerPageOptions",e.rowsPerPageOptions)("appendTo",e.paginatorDropdownAppendTo)("dropdownScrollHeight",e.paginatorDropdownScrollHeight)("templateLeft",e.paginatorleft)("templateRight",e.paginatorright)("currentPageReportTemplate",e.currentPageReportTemplate)("showFirstLastIcon",e.showFirstLastIcon)("dropdownItemTemplate",e.paginatordropdownitem)("showCurrentPageReport",e.showCurrentPageReport)("showJumpToPageDropdown",e.showJumpToPageDropdown)("showPageLinks",e.showPageLinks)("styleClass",e.cn(e.cx("pcPaginator",ue(18,Ca)),e.paginatorStyleClass))("pt",e.ptm("pcPaginator"))}}function Pa(t,n){t&1&&P(0)}function Na(t,n){if(t&1&&(p(0,"div",3),Je(1,1),f(2,Pa,1,0,"ng-container",6),d()),t&2){let e=c();h(e.cx("footer")),l("pBind",e.ptm("footer")),s(2),l("ngTemplateOutlet",e.footerTemplate)}}var Ba={root:({instance:t})=>["p-dataview p-component",{"p-dataview-list":t.layout==="list","p-dataview-grid":t.layout==="grid"}],header:"p-dataview-header",loading:"p-dataview-loading",loadingOverlay:"p-dataview-loading-overlay p-overlay-mask",loadingIcon:"p-dataview-loading-icon",pcPaginator:({position:t})=>"p-dataview-paginator-"+t,content:"p-dataview-content",emptyMessage:"p-dataview-empty-message",footer:"p-dataview-footer"},$i=(()=>{class t extends ie{name="dataview";style=ji;classes=Ba;static \u0275fac=(()=>{let e;return function(o){return(e||(e=U(t)))(o||t)}})();static \u0275prov=I({token:t,factory:t.\u0275fac})}return t})();var Qi=new W("DATAVIEW_INSTANCE"),Gt=(()=>{class t extends Le{bindDirectiveInstance=g(O,{self:!0});$pcDataView=g(Qi,{optional:!0,skipSelf:!0})??void 0;onAfterViewChecked(){this.bindDirectiveInstance.setAttrs(this.ptms(["host","root"]))}paginator;rows;totalRecords;pageLinks=5;rowsPerPageOptions;paginatorPosition="bottom";paginatorStyleClass;alwaysShowPaginator=!0;paginatorDropdownAppendTo;paginatorDropdownScrollHeight="200px";currentPageReportTemplate="{currentPage} of {totalPages}";showCurrentPageReport;showJumpToPageDropdown;showFirstLastIcon=!0;showPageLinks=!0;lazy;lazyLoadOnInit=!0;emptyMessage="";styleClass;gridStyleClass="";trackBy=(e,i)=>i;filterBy;filterLocale;loading;loadingIcon;first=0;sortField;sortOrder;value;layout="list";onLazyLoad=new D;onPage=new D;onSort=new D;onChangeLayout=new D;listTemplate;gridTemplate;headerTemplate;emptymessageTemplate;footerTemplate;paginatorleft;paginatorright;paginatordropdownitem;loadingicon;listicon;gridicon;header;footer;_value;filteredValue;filterValue;initialized;_layout="list";translationSubscription;_componentStyle=g($i);get emptyMessageLabel(){return this.emptyMessage||this.config.getTranslation(De.EMPTY_MESSAGE)}filterService=g(ni);onInit(){this.lazy&&this.lazyLoadOnInit&&this.onLazyLoad.emit(this.createLazyLoadMetadata()),this.translationSubscription=this.config.translationObserver.subscribe(()=>{this.cd.markForCheck()}),this.initialized=!0}onAfterViewInit(){}onChanges(e){e.layout&&!e.layout.firstChange&&this.onChangeLayout.emit({layout:e.layout.currentValue}),e.value&&(this._value=e.value.currentValue,this.updateTotalRecords(),!this.lazy&&this.hasFilter()&&this.filter(this.filterValue)),(e.sortField||e.sortOrder)&&(!this.lazy||this.initialized)&&this.sort()}updateTotalRecords(){this.totalRecords=this.lazy?this.totalRecords:this._value?this._value.length:0}paginate(e){this.first=e.first,this.rows=e.rows,this.lazy&&this.onLazyLoad.emit(this.createLazyLoadMetadata()),this.onPage.emit({first:this.first,rows:this.rows})}sort(){this.first=0,this.lazy?this.onLazyLoad.emit(this.createLazyLoadMetadata()):this.value&&(this.value.sort((e,i)=>{let o=de(e,this.sortField),a=de(i,this.sortField),r;return o==null&&a!=null?r=-1:o!=null&&a==null?r=1:o==null&&a==null?r=0:typeof o=="string"&&typeof a=="string"?r=o.localeCompare(a):r=o<a?-1:o>a?1:0,this.sortOrder*r}),this.hasFilter()&&this.filter(this.filterValue)),this.onSort.emit({sortField:this.sortField,sortOrder:this.sortOrder})}isEmpty(){let e=this.filteredValue||this.value;return e==null||e.length==0}createLazyLoadMetadata(){return{first:this.first,rows:this.rows,sortField:this.sortField,sortOrder:this.sortOrder}}getBlockableElement(){return this.el.nativeElement.children[0]}filter(e,i="contains"){if(this.filterValue=e,this.value&&this.value.length){let o=this.filterBy.split(",");this.filteredValue=this.filterService.filter(this.value,o,e,i,this.filterLocale),this.filteredValue.length===this.value.length&&(this.filteredValue=null),this.paginator&&(this.first=0,this.totalRecords=this.filteredValue?this.filteredValue.length:this.value?this.value.length:0),this.cd.markForCheck()}}hasFilter(){return this.filterValue&&this.filterValue.trim().length>0}onDestroy(){this.translationSubscription&&this.translationSubscription.unsubscribe()}static \u0275fac=(()=>{let e;return function(o){return(e||(e=U(t)))(o||t)}})();static \u0275cmp=L({type:t,selectors:[["p-dataView"],["p-dataview"],["p-data-view"]],contentQueries:function(i,o,a){if(i&1&&(w(a,aa,5),w(a,ra,5),w(a,la,5),w(a,sa,5),w(a,ca,5),w(a,pa,5),w(a,da,5),w(a,ua,5),w(a,ma,5),w(a,ga,5),w(a,fa,5),w(a,ri,5),w(a,li,5)),i&2){let r;v(r=y())&&(o.listTemplate=r.first),v(r=y())&&(o.gridTemplate=r.first),v(r=y())&&(o.headerTemplate=r.first),v(r=y())&&(o.emptymessageTemplate=r.first),v(r=y())&&(o.footerTemplate=r.first),v(r=y())&&(o.paginatorleft=r.first),v(r=y())&&(o.paginatorright=r.first),v(r=y())&&(o.paginatordropdownitem=r.first),v(r=y())&&(o.loadingicon=r.first),v(r=y())&&(o.listicon=r.first),v(r=y())&&(o.gridicon=r.first),v(r=y())&&(o.header=r.first),v(r=y())&&(o.footer=r.first)}},hostVars:2,hostBindings:function(i,o){i&2&&h(o.cn(o.cx("root"),o.styleClass))},inputs:{paginator:[2,"paginator","paginator",x],rows:[2,"rows","rows",G],totalRecords:[2,"totalRecords","totalRecords",G],pageLinks:[2,"pageLinks","pageLinks",G],rowsPerPageOptions:"rowsPerPageOptions",paginatorPosition:"paginatorPosition",paginatorStyleClass:"paginatorStyleClass",alwaysShowPaginator:[2,"alwaysShowPaginator","alwaysShowPaginator",x],paginatorDropdownAppendTo:"paginatorDropdownAppendTo",paginatorDropdownScrollHeight:"paginatorDropdownScrollHeight",currentPageReportTemplate:"currentPageReportTemplate",showCurrentPageReport:[2,"showCurrentPageReport","showCurrentPageReport",x],showJumpToPageDropdown:[2,"showJumpToPageDropdown","showJumpToPageDropdown",x],showFirstLastIcon:[2,"showFirstLastIcon","showFirstLastIcon",x],showPageLinks:[2,"showPageLinks","showPageLinks",x],lazy:[2,"lazy","lazy",x],lazyLoadOnInit:[2,"lazyLoadOnInit","lazyLoadOnInit",x],emptyMessage:"emptyMessage",styleClass:"styleClass",gridStyleClass:"gridStyleClass",trackBy:"trackBy",filterBy:"filterBy",filterLocale:"filterLocale",loading:[2,"loading","loading",x],loadingIcon:"loadingIcon",first:[2,"first","first",G],sortField:"sortField",sortOrder:[2,"sortOrder","sortOrder",G],value:"value",layout:"layout"},outputs:{onLazyLoad:"onLazyLoad",onPage:"onPage",onSort:"onSort",onChangeLayout:"onChangeLayout"},features:[Y([$i,{provide:Qi,useExisting:t},{provide:oe,useExisting:t}]),Z([O]),J],ngContentSelectors:_a,decls:9,vars:11,consts:[["empty",""],[3,"pBind","class"],[3,"rows","first","totalRecords","pageLinkSize","alwaysShow","rowsPerPageOptions","appendTo","dropdownScrollHeight","templateLeft","templateRight","currentPageReportTemplate","showFirstLastIcon","dropdownItemTemplate","showCurrentPageReport","showJumpToPageDropdown","showPageLinks","styleClass","pt"],[3,"pBind"],[3,"class"],["data-p-icon","spinner",3,"pBind","spin"],[4,"ngTemplateOutlet"],[3,"onPageChange","rows","first","totalRecords","pageLinkSize","alwaysShow","rowsPerPageOptions","appendTo","dropdownScrollHeight","templateLeft","templateRight","currentPageReportTemplate","showFirstLastIcon","dropdownItemTemplate","showCurrentPageReport","showJumpToPageDropdown","showPageLinks","styleClass","pt"],[4,"ngTemplateOutlet","ngTemplateOutletContext"],[4,"ngIf","ngIfElse"]],template:function(i,o){i&1&&(et(ha),E(0,Sa,4,7,"div",1),E(1,Ia,3,4,"div",1),E(2,Ea,1,19,"p-paginator",2),p(3,"div",3),E(4,Va,2,8,"ng-container"),E(5,Ma,2,8,"ng-container"),E(6,Aa,3,6,"div",1),d(),E(7,Fa,1,19,"p-paginator",2),E(8,Na,3,4,"div",1)),i&2&&(k(o.loading?0:-1),s(),k(o.header||o.headerTemplate?1:-1),s(),k(o.paginator&&(o.paginatorPosition==="top"||o.paginatorPosition=="both")?2:-1),s(),h(o.cx("content")),l("pBind",o.ptm("content")),s(),k(o.layout==="list"?4:-1),s(),k(o.layout==="grid"?5:-1),s(),k(o.isEmpty()&&!o.loading?6:-1),s(),k(o.paginator&&(o.paginatorPosition==="bottom"||o.paginatorPosition=="both")?7:-1),s(),k(o.footer||o.footerTemplate?8:-1))},dependencies:[F,me,ee,yi,vi,st,Q,O,ii],encapsulation:2,changeDetection:0})}return t})(),Ui=(()=>{class t{static \u0275fac=function(i){return new(i||t)};static \u0275mod=ce({type:t});static \u0275inj=le({imports:[Gt,Q,Q]})}return t})();var Ot=class t{repository=g(Ge);execute(n){return this.repository.crearSubCategoria(n)}static \u0275fac=function(e){return new(e||t)};static \u0275prov=I({token:t,factory:t.\u0275fac,providedIn:"root"})};var Mt=class t{repository=g(Ge);execute(n){return this.repository.editarSubCategoria(n)}static \u0275fac=function(e){return new(e||t)};static \u0275prov=I({token:t,factory:t.\u0275fac,providedIn:"root"})};var za=t=>["!text-lg","pi",t];function qa(t,n){if(t&1&&C(0,"i",10),t&2){let e=n.checked;l("ngClass",R(1,za,e?"pi-check":"pi-times"))}}function ja(t,n){t&1&&(p(0,"div",6),C(1,"ui-input",11),d()),t&2&&(s(),l("min",0)("patternErrorMessage","Ingresa un monto v\xE1lido (ej: 10.50)"))}var Dt=class t{ref=g(je);config=g(qe);notificationService=g(ae);confirmDialogService=g(ve);crearSubCategoriaUseCase=g(Ot);editarSubCategoriaUseCase=g(Mt);categoriaSignal=g(H);subcategoria=null;categoriaId=0;formSubCategoria=new ne({nombre:new V("",{nonNullable:!0,validators:[T.required,T.minLength(3),T.maxLength(100)]}),descripcion:new V("",{nonNullable:!0,validators:[T.required,T.minLength(5),T.maxLength(255)]}),montoTramite:new V(0,{nonNullable:!0,validators:[T.min(0)]}),requiereCosto:new V(!1,{nonNullable:!0})});get modalPrimaryLabel(){return this.modoEdicion?"Actualizar Subcategor\xEDa":"Crear Subcategor\xEDa"}get modalPrimaryDisabled(){return this.formSubCategoria.invalid}get modoEdicion(){return!!this.subcategoria&&this.subcategoria.idSubCategoriaTramite>0}ngOnInit(){let n=this.config?.data?.payload??{};this.subcategoria=n.subcategoria??null,this.categoriaId=Number(n.categoriaId??this.categoriaSignal.selectCategoria().idCategoriaTramite??0),this.subcategoria&&this.formSubCategoria.patchValue({nombre:this.subcategoria.nombre,descripcion:this.subcategoria.descripcion})}guardar(){this.formSubCategoria.invalid||this.confirmDialogService.open({type:"question",title:this.modoEdicion?"Actualizar subcategor\xEDa":"Crear subcategor\xEDa",message:this.modoEdicion?"\xBFDeseas guardar los cambios de esta subcategor\xEDa?":"\xBFDeseas crear esta subcategor\xEDa para la categor\xEDa seleccionada?",acceptLabel:this.modoEdicion?"Actualizar":"Crear",rejectLabel:"Cancelar",onAccept:()=>this.persistirSubCategoria()})}cancelar(){this.ref.close(null)}persistirSubCategoria(){let n=this.formSubCategoria.controls.nombre.value.trim(),e=this.formSubCategoria.controls.descripcion.value.trim(),i=this.formSubCategoria.controls.requiereCosto.value?String(this.formSubCategoria.controls.montoTramite.value):"0";if(this.modoEdicion&&this.subcategoria){let a={idSubCategoriaTramite:this.subcategoria.idSubCategoriaTramite,idCategoriaTramite:this.categoriaId,montoTramite:i,nombre:n,descripcion:e};console.log(a),this.editarSubCategoriaUseCase.execute(a).subscribe({next:r=>{this.notificationService.success(`${r.message}, subcategor\xEDa actualizada correctamente`),this.ref.close({success:!0})},error:r=>{this.notificationService.error("No se pudo actualizar la subcategor\xEDa")}});return}let o={idCategoriaTramite:this.categoriaId,nombre:n,descripcion:e,montoTramite:i};console.log(o),this.crearSubCategoriaUseCase.execute(o).subscribe({next:a=>{this.notificationService.success(`${a.message}, subcategor\xEDa creada correctamente`),this.ref.close({success:!0})},error:()=>{this.notificationService.error("No se pudo crear la subcategor\xEDa")}})}patchValue(){this.formSubCategoria.patchValue({nombre:this.subcategoria?.nombre,descripcion:this.subcategoria?.descripcion})}static \u0275fac=function(e){return new(e||t)};static \u0275cmp=L({type:t,selectors:[["app-add-edit-subcategoria"]],decls:11,vars:6,consts:[["handle",""],[3,"formGroup"],[1,"flex","align-items-center","gap-4","w-full","flex-wrap","mb-4"],[1,"toggle-large"],["formControlName","requiereCosto"],[3,"value","severity"],[1,"flex-1","w-full",2,"min-width","250px"],[1,"flex","flex-column","gap-4","flex-1","min-h-0","w-full"],["label","Nombre","formControlName","nombre",3,"patternErrorMessage"],["label","Descripci\xF3n","formControlName","descripcion",3,"patternErrorMessage"],[3,"ngClass"],["label","Monto (S/)","formControlName","montoTramite","type","decimal",3,"min","patternErrorMessage"]],template:function(e,i){e&1&&(p(0,"form",1)(1,"div",2)(2,"div",3)(3,"p-toggleswitch",4),f(4,qa,1,3,"ng-template",null,0,N),d()(),C(6,"p-tag",5),E(7,ja,2,2,"div",6),d(),p(8,"div",7),C(9,"ui-input",8)(10,"ui-text-area",9),d()()),e&2&&(l("formGroup",i.formSubCategoria),s(6),l("value",i.formSubCategoria.controls.requiereCosto.value?"Con costo":"Sin costo")("severity",i.formSubCategoria.controls.montoTramite.value>0?"info":"danger"),s(),k(i.formSubCategoria.controls.requiereCosto.value?7:-1),s(2),l("patternErrorMessage","No debe incluir espacios al final de la palabra"),s(),l("patternErrorMessage","No debe incluir espacios al final de la palabra"))},dependencies:[fe,Pe,ge,Fe,F,Oe,Re,Ne,Be,gt,wi,$e,_t,It,Ke,_e,he],styles:["[_nghost-%COMP%]{display:block;width:100%}"]})};var Lt=class t{repository=g(Ge);execute(n){return this.repository.eliminarSubCategoria(n)}static \u0275fac=function(e){return new(e||t)};static \u0275prov=I({token:t,factory:t.\u0275fac,providedIn:"root"})};var $a=(t,n)=>n.idSubCategoriaTramite;function Qa(t,n){t&1&&C(0,"app-ui-loading")}function Ga(t,n){t&1&&C(0,"app-ui-card-no-items",1)}function Ua(t,n){if(t&1){let e=S();p(0,"app-ui-card-no-items",10),_("onClick",function(){u(e);let o=c(3);return m(o.openAddEditSubcategoria(o.selectSubCategoriaDefault))}),d()}if(t&2){let e=c(3);l("message",e.selectCategoria().nombre+" no tiene subcategor\xEDas a\xFAn")}}function Ka(t,n){if(t&1){let e=S();p(0,"div",13)(1,"div",14),_("click",function(){let o=u(e).$implicit,a=c(5);return m(a.ver(o))}),p(2,"div",15),C(3,"i",16),d(),p(4,"div",17)(5,"div",3)(6,"div",18),b(7),d(),C(8,"p-tag",19),d(),p(9,"div",20),b(10),d()()(),p(11,"div",21),_("click",function(o){return u(e),m(o.stopPropagation())}),p(12,"ui-icon-button",22),_("onClick",function(){let o=u(e).$implicit,a=c(5);return m(a.ver(o))}),d(),p(13,"ui-icon-button",23),_("onClick",function(){let o=u(e).$implicit,a=c(5);return m(a.openAddEditSubcategoria(o))}),d(),p(14,"ui-icon-button",24),_("onClick",function(){let o=u(e).$implicit,a=c(5);return m(a.eliminarSubCategoria(o))}),d()()()}if(t&2){let e=n.$implicit,i=c(5);Yt("bg-blue-50",i.subcategoriaActivaId===e.idSubCategoriaTramite)("blue-500",i.subcategoriaActivaId===e.idSubCategoriaTramite),s(7),$(" ",e.nombre," "),s(),l("value",e.montoTramite>0?"S/ "+e.montoTramite:"Sin Costo")("severity",e.montoTramite>0?"info":"danger"),s(2),$(" ",e.descripcion||"Sin descripci\xF3n"," ")}}function Ha(t,n){if(t&1&&(p(0,"div",11),ye(1,Ka,15,8,"div",12,$a),d()),t&2){let e=n.$implicit;s(),we(e)}}function Wa(t,n){if(t&1&&(p(0,"p-dataView",9),f(1,Ha,3,0,"ng-template",null,0,N),d()),t&2){let e=c(3);l("value",e.listSubCategoria())}}function Ja(t,n){if(t&1){let e=S();q(0),p(1,"div",2)(2,"div",3),C(3,"p-tag",4),p(4,"span",5),b(5),d()(),p(6,"div",6)(7,"ui-button",7),_("onClick",function(){u(e);let o=c(2);return m(o.openAddEditSubcategoria(o.selectSubCategoriaDefault))}),d()()(),E(8,Ua,1,1,"app-ui-card-no-items",8)(9,Wa,3,1,"p-dataView",9),j()}if(t&2){let e=c(2);s(3),l("value",e.listSubCategoria().length+" Subcategor\xEDas")("rounded",!0),s(2),B(e.selectCategoria().nombre),s(3),k(e.listSubCategoria().length===0?8:9)}}function Za(t,n){if(t&1&&(E(0,Ga,1,0,"app-ui-card-no-items",1),E(1,Ja,10,4,"ng-container")),t&2){let e=c();k(e.selectCategoria().idCategoriaTramite==0?0:-1),s(),k(e.selectCategoria().idCategoriaTramite!==0?1:-1)}}var At=class t{categoriaSignal=g(H);subCategoriaSignal=g(re);selectCategoria=this.categoriaSignal.selectCategoria;selectSubCategoria=this.subCategoriaSignal.selectSubCategoria;selectSubCategoriaDefault=this.subCategoriaSignal.selectSubCategoriaDefault;listSubCategoria=this.subCategoriaSignal.listSubCategoria;loading=this.subCategoriaSignal.loading;subcategoriaVer=Ve();modalService=g(Ce);notificationService=g(ae);confirmDialogService=g(ve);subcategoriaActivaId=null;obtenerSubCategoriaPorCategoriaUseCase=g(Ti);eliminarSubCategoriaUseCase=g(Lt);constructor(){ei(()=>{let n=this.selectCategoria().idCategoriaTramite;if(n<=0){this.subCategoriaSignal.listSubCategoria.set([]),this.subCategoriaSignal.selectSubCategoria.set(this.selectSubCategoriaDefault),this.subcategoriaActivaId=null;return}this.obtenerSubCategoria(n)})}ver(n){this.subcategoriaActivaId=n.idSubCategoriaTramite,this.selectSubCategoria.set(n),this.subcategoriaVer.emit(n)}obtenerSubCategoria(n){this.loading.set(!0),this.obtenerSubCategoriaPorCategoriaUseCase.execute(n).subscribe({next:e=>{this.subCategoriaSignal.listSubCategoria.set(e.data),this.subcategoriaActivaId=null,this.loading.set(!1)},error:e=>{console.log(e),this.loading.set(!1),this.notificationService.error("Error al cargar subcategor\xEDas")}})}openAddEditSubcategoria(n){let e=this.selectCategoria().idCategoriaTramite;if(e<=0){this.notificationService.warn("Selecciona una categor\xEDa antes de gestionar subcategor\xEDas");return}this.modalService.open(Dt,{data:{subcategoria:n.idSubCategoriaTramite===0?null:n,categoriaId:e},header:n.idSubCategoriaTramite===0?"Agregar Subcategor\xEDa":"Editar Subcategor\xEDa",width:"min(90vw, 760px)",maximizable:!1}).onClose.subscribe(o=>{o?.success&&this.obtenerSubCategoria(e)})}eliminarSubCategoria(n){this.confirmDialogService.open({type:"question",title:"Eliminar subcategor\xEDa",message:`Se eliminar\xE1 la subcategor\xEDa "${n.nombre}". \xBFDeseas continuar?`,acceptLabel:"S\xED, eliminar",rejectLabel:"Cancelar",onAccept:()=>{this.loading.set(!0),this.eliminarSubCategoriaUseCase.execute({idSubCategoriaTramite:n.idSubCategoriaTramite}).subscribe({next:e=>{this.loading.set(!1),this.selectSubCategoria().idSubCategoriaTramite===n.idSubCategoriaTramite&&(this.selectSubCategoria.set(this.selectSubCategoriaDefault),this.subcategoriaActivaId=null),this.notificationService.success(`${e.message}, subcategor\xEDa eliminada correctamente`),this.obtenerSubCategoria(this.selectCategoria().idCategoriaTramite)},error:()=>{this.loading.set(!1),this.notificationService.error("No se pudo eliminar la subcategor\xEDa")}})}})}static \u0275fac=function(e){return new(e||t)};static \u0275cmp=L({type:t,selectors:[["app-list-subcategoria"]],outputs:{subcategoriaVer:"subcategoriaVer"},decls:2,vars:1,consts:[["list",""],["message","Selecciona una categor\xEDa para ver sus subcategor\xEDas"],[1,"flex","flex-column","sm:flex-row","sm:align-items-center","justify-content-between","mb-3","gap-2"],[1,"flex","align-items-center","gap-2","flex-wrap"],["severity","info","icon","pi pi-list",1,"whitespace-nowrap",3,"value","rounded"],[1,"font-bold","text-base","md:text-lg","text-900"],[1,"w-full","sm:w-auto"],["styleClass","w-full sm:w-auto","label","Agregar Subcategor\xEDa","icon","pi pi-plus",3,"onClick"],["buttonText","Crear SubCategoria","buttonIcon","pi pi-plus",3,"message"],[3,"value"],["buttonText","Crear SubCategoria","buttonIcon","pi pi-plus",3,"onClick","message"],[1,"flex","flex-column","gap-2"],[1,"flex","flex-column","md:flex-row","md:align-items-center","justify-content-between","p-3","border-1","border-round","surface-border","hover:bg-blue-50","cursor-pointer","transition-colors","transition-duration-150","gap-2",3,"bg-blue-50","blue-500"],[1,"flex","flex-column","md:flex-row","md:align-items-center","justify-content-between","p-3","border-1","border-round","surface-border","hover:bg-blue-50","cursor-pointer","transition-colors","transition-duration-150","gap-2"],[1,"flex","align-items-center","gap-3","flex-1","min-w-0",3,"click"],[1,"w-2rem","h-2rem","border-circle","bg-blue-100","flex","align-items-center","justify-content-center","flex-shrink-0"],[1,"pi","pi-file","text-blue-500","text-sm"],[1,"min-w-0","flex-1"],[1,"font-semibold","text-900","white-space-nowrap","overflow-hidden","text-overflow-ellipsis"],["styleClass","text-base px-3 py-2 font-semibold",3,"value","severity"],[1,"text-500","text-sm","white-space-nowrap","overflow-hidden","text-overflow-ellipsis"],[1,"flex","gap-1","flex-shrink-0","md:ml-2","align-self-end","md:align-self-center",3,"click"],["icon","pi pi-eye","color","success","tooltip","Ver detalle",3,"onClick"],["icon","pi pi-pencil","color","info","tooltip","Editar",3,"onClick"],["icon","pi pi-trash","color","danger","tooltip","Eliminar",3,"onClick"]],template:function(e,i){e&1&&E(0,Qa,1,0,"app-ui-loading")(1,Za,2,2),e&2&&k(i.loading()?0:1)},dependencies:[Ct,si,Ae,Ui,Gt,F,bt,be,ht,Ii,_e,he],styles:["[_nghost-%COMP%]     ui-icon-button .p-button{min-width:2.25rem;min-height:2.25rem}"]})};var Ki=`
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
`;var Xa=["content"],Ya=["opposite"],er=["marker"],Ut=t=>({$implicit:t});function tr(t,n){t&1&&P(0)}function ir(t,n){t&1&&P(0)}function or(t,n){if(t&1&&(q(0),f(1,ir,1,0,"ng-container",3),j()),t&2){let e=c().$implicit,i=c();s(),l("ngTemplateOutlet",i.markerTemplate||i._markerTemplate)("ngTemplateOutletContext",R(2,Ut,e))}}function nr(t,n){if(t&1&&C(0,"div",2),t&2){let e=c(2);h(e.cx("eventMarker")),l("pBind",e.ptm("eventMarker"))}}function ar(t,n){if(t&1&&C(0,"div",2),t&2){let e=c(2);h(e.cx("eventConnector")),l("pBind",e.ptm("eventConnector"))}}function rr(t,n){t&1&&P(0)}function lr(t,n){if(t&1&&(p(0,"div",2)(1,"div",2),f(2,tr,1,0,"ng-container",3),d(),p(3,"div",2),f(4,or,2,4,"ng-container",4)(5,nr,1,3,"ng-template",null,0,N)(7,ar,1,3,"div",5),d(),p(8,"div",2),f(9,rr,1,0,"ng-container",3),d()()),t&2){let e=n.$implicit,i=n.last,o=xe(6),a=c();h(a.cx("event")),l("pBind",a.ptm("event")),s(),h(a.cx("eventOpposite")),l("pBind",a.ptm("eventOpposite")),s(),l("ngTemplateOutlet",a.oppositeTemplate||a._oppositeTemplate)("ngTemplateOutletContext",R(19,Ut,e)),s(),h(a.cx("eventSeparator")),l("pBind",a.ptm("eventSeparator")),s(),l("ngIf",a.markerTemplate||a._markerTemplate)("ngIfElse",o),s(3),l("ngIf",!i),s(),h(a.cx("eventContent")),l("pBind",a.ptm("eventContent")),s(),l("ngTemplateOutlet",a.contentTemplate||a._contentTemplate)("ngTemplateOutletContext",R(21,Ut,e))}}var sr={root:({instance:t})=>["p-timeline p-component","p-timeline-"+t.align,"p-timeline-"+t.layout],event:"p-timeline-event",eventOpposite:"p-timeline-event-opposite",eventSeparator:"p-timeline-event-separator",eventMarker:"p-timeline-event-marker",eventConnector:"p-timeline-event-connector",eventContent:"p-timeline-event-content"},Hi=(()=>{class t extends ie{name="timeline";style=Ki;classes=sr;static \u0275fac=(()=>{let e;return function(o){return(e||(e=U(t)))(o||t)}})();static \u0275prov=I({token:t,factory:t.\u0275fac})}return t})();var Wi=new W("TIMELINE_INSTANCE"),Kt=(()=>{class t extends Le{bindDirectiveInstance=g(O,{self:!0});$pcTimeline=g(Wi,{optional:!0,skipSelf:!0})??void 0;onAfterViewChecked(){this.bindDirectiveInstance.setAttrs(this.ptms(["host","root"]))}value;styleClass;align="left";layout="vertical";contentTemplate;oppositeTemplate;markerTemplate;templates;_contentTemplate;_oppositeTemplate;_markerTemplate;_componentStyle=g(Hi);getBlockableElement(){return this.el.nativeElement.children[0]}onAfterContentInit(){this.templates.forEach(e=>{switch(e.getType()){case"content":this._contentTemplate=e.template;break;case"opposite":this._oppositeTemplate=e.template;break;case"marker":this._markerTemplate=e.template;break}})}static \u0275fac=(()=>{let e;return function(o){return(e||(e=U(t)))(o||t)}})();static \u0275cmp=L({type:t,selectors:[["p-timeline"]],contentQueries:function(i,o,a){if(i&1&&(w(a,Xa,4),w(a,Ya,4),w(a,er,4),w(a,te,4)),i&2){let r;v(r=y())&&(o.contentTemplate=r.first),v(r=y())&&(o.oppositeTemplate=r.first),v(r=y())&&(o.markerTemplate=r.first),v(r=y())&&(o.templates=r)}},hostVars:2,hostBindings:function(i,o){i&2&&h(o.cn(o.cx("root"),o.styleClass))},inputs:{value:"value",styleClass:"styleClass",align:"align",layout:"layout"},features:[Y([Hi,{provide:Wi,useExisting:t},{provide:oe,useExisting:t}]),Z([O]),J],decls:1,vars:1,consts:[["marker",""],[3,"pBind","class",4,"ngFor","ngForOf"],[3,"pBind"],[4,"ngTemplateOutlet","ngTemplateOutletContext"],[4,"ngIf","ngIfElse"],[3,"pBind","class",4,"ngIf"]],template:function(i,o){i&1&&f(0,lr,10,23,"div",1),i&2&&l("ngForOf",o.value)},dependencies:[F,nt,me,ee,Q,O],encapsulation:2,changeDetection:0})}return t})(),Ji=(()=>{class t{static \u0275fac=function(i){return new(i||t)};static \u0275mod=ce({type:t});static \u0275inj=le({imports:[Kt,Q,Q]})}return t})();function dr(t,n){if(t&1){let e=S();p(0,"div",17)(1,"div",18)(2,"div",19)(3,"h2",20),b(4),d(),p(5,"div",21),C(6,"p-tag",22),d()(),p(7,"div",23)(8,"ui-icon-button",24),_("onClick",function(){u(e);let o=c();return m(o.abrirConfiguracion())}),d(),p(9,"ui-icon-button",25),_("onClick",function(){u(e);let o=c();return m(o.cerrar.emit())}),d()()()()}if(t&2){let e=c();s(4),$(" ",e.selectSubCategoria().nombre," "),s(2),l("value","Costo: "+e.costoLabel(e.detalle().costo))("severity",e.detalle().costo===null?"info":"success")}}function ur(t,n){if(t&1&&(p(0,"span",26),b(1),d()),t&2){let e=n.$implicit;s(),$(" ",e.orden," ")}}function mr(t,n){if(t&1&&(p(0,"article",27)(1,"div",28)(2,"h4",29),b(3),d(),C(4,"p-tag",8),d(),p(5,"p",30),b(6),d(),p(7,"p",31),b(8),d()()),t&2){let e=n.$implicit;s(3),B(e.nombreArea),s(),l("value",e.diasEstimados+" dia(s)"),s(2),B(e.responsable||e.nombreArea),s(2),$(" ",e.observaciones||"Sin accion definida para esta area."," ")}}function gr(t,n){if(t&1&&(p(0,"div",16)(1,"article",32)(2,"div",33)(3,"h4",34),b(4),d(),C(5,"p-tag",35),d()()()),t&2){let e=n.$implicit,i=c();s(4),B(e.nombreDocumento),s(),l("value",i.formatosLabel(e))}}var Ft=class t{subCategoriaSignal=g(re);modalService=g(Ce);selectSubCategoria=this.subCategoriaSignal.selectSubCategoria;cerrar=Ve();detalle=ke(()=>{let n=this.selectSubCategoria(),e=n.detalle,i=(e?.etapasProceso?.length?e.etapasProceso:this.getEtapasDefault()).sort((r,M)=>r.orden-M.orden),o=e?.archivosRequeridos?.length?e.archivosRequeridos:this.getArchivosDefault(),a=e?.tiempoEstimadoTotalDias??i.reduce((r,M)=>r+M.diasEstimados,0);return{descripcion:n.descripcion||"Sin descripcion registrada para este tramite.",tiempoEstimadoTotalDias:a,costo:e?.costo??null,etapasProceso:i,archivosRequeridos:o}});formatosLabel(n){return n.formatosPermitidos.join(" / ")}costoLabel(n){return n==null?"No aplica":`S/ ${n.toFixed(2)}`}abrirConfiguracion(){let n=this.selectSubCategoria();if(!n||n.idSubCategoriaTramite<=0)return;this.modalService.open(He,{header:`Configuracion de ${n.nombre}`,width:"min(95vw, 980px)",data:{subCategoria:n},maximizable:!0}).onClose.subscribe(i=>{if(!i?.success||!i.detalle)return;let o=Wt(Ht({},n),{detalle:i.detalle});this.subCategoriaSignal.selectSubCategoria.set(o),this.subCategoriaSignal.listSubCategoria.update(a=>a.map(r=>r.idSubCategoriaTramite===o.idSubCategoriaTramite?o:r))})}getEtapasDefault(){return[{orden:1,nombreArea:"Oficina Central de Tr\xE1mites y Documentos Administrativos",responsable:"Jefe de OCTDA",diasEstimados:1,estado:"pendiente",observaciones:"Recepcion y verificacion inicial del expediente."},{orden:2,nombreArea:"Decanatura de FICA",responsable:"Decano de FICA",diasEstimados:2,estado:"pendiente",observaciones:"Revision de requisitos formales y documentacion base."},{orden:3,nombreArea:"Direcci\xF3n de Escuela de Ingenier\xEDa de Sistemas",responsable:"Director de Escuela de Ingenier\xEDa de Sistemas",diasEstimados:3,estado:"pendiente",observaciones:"Evaluacion tecnica segun criterios del tramite."},{orden:4,nombreArea:"Registros Acad\xE9micos",responsable:"Jefe de Registros Acad\xE9micos",diasEstimados:2,estado:"pendiente",observaciones:"Validacion final para autorizacion institucional."}]}getArchivosDefault(){return[{nombreDocumento:"Solicitud simple",obligatorio:!0,formatosPermitidos:["PDF"],tamanoMaximoMb:8,observaciones:"Firmada por el solicitante o representante legal."},{nombreDocumento:"DNI escaneado",obligatorio:!0,formatosPermitidos:["PDF","JPG","PNG"],tamanoMaximoMb:5,observaciones:"Debe ser legible por ambos lados."},{nombreDocumento:"Plano firmado",obligatorio:!1,formatosPermitidos:["PDF"],tamanoMaximoMb:15,observaciones:"Adjuntar solo cuando aplique al tipo de tramite.",ejemploVisual:"Ejemplo: plano-ubicacion-vigente.pdf"},{nombreDocumento:"Documento tecnico",obligatorio:!0,formatosPermitidos:["DOCX","PDF"],tamanoMaximoMb:12,observaciones:"Incluir sustento tecnico y conclusiones."}]}static \u0275fac=function(e){return new(e||t)};static \u0275cmp=L({type:t,selectors:[["app-detalle-subcategoria"]],outputs:{cerrar:"cerrar"},decls:22,vars:2,consts:[["header",""],["styleClass","h-full detalle-subcategoria-card"],[1,"px-3","md:px-4","pb-4"],["styleClass",""],[1,"flex","align-items-center","justify-content-between","gap-2","mb-3","flex-wrap"],[1,"flex","align-items-center","gap-2"],[1,"pi","pi-sitemap","text-brand"],[1,"m-0","text-900","text-base","font-semibold"],["severity","info",3,"value"],["styleClass","tramite-timeline",3,"value"],["pTemplate","marker"],["pTemplate","content"],["styleClass","my-3"],[1,"flex","align-items-center","gap-2","mb-3"],[1,"pi","pi-file","text-brand"],[1,"grid"],[1,"col-12","md:col-6"],[1,"p-2"],[1,"flex","align-items-start","justify-content-between","gap-2"],[1,"min-w-0"],[1,"m-0","text-lg","text-900","font-semibold","white-space-nowrap","overflow-hidden","text-overflow-ellipsis"],[1,"mt-2"],[3,"value","severity"],[1,"flex","align-items-center","gap-1"],["icon","pi pi-cog","pTooltip","Configurar subcategoria","color","info",3,"onClick"],["icon","pi pi-times","pTooltip","Cerrar","color","danger",3,"onClick"],[1,"inline-flex","align-items-center","justify-content-center","w-2rem","h-2rem","border-circle","border-1","border-blue-200","bg-blue-50","text-blue-700","text-sm","font-bold"],[1,"border-1","surface-border","border-round","p-3","mb-3","bg-white"],[1,"flex","align-items-center","justify-content-between","gap-2","flex-wrap"],[1,"m-0","text-900","font-semibold"],[1,"m-0","mt-2","text-900","font-semibold","text-sm"],[1,"m-0","mt-1","text-600","text-sm","line-height-3"],[1,"border-1","surface-border","border-round","p-3","h-full","bg-white"],[1,"flex","align-items-start","justify-content-between","gap-3"],[1,"m-0","text-900"],["severity","secondary",3,"value"]],template:function(e,i){e&1&&(p(0,"p-card",1),f(1,dr,10,3,"ng-template",null,0,N),p(3,"div",2),C(4,"p-divider",3),p(5,"div",4)(6,"div",5),C(7,"i",6),p(8,"h3",7),b(9,"Areas asignadas del tramite"),d()(),C(10,"p-tag",8),d(),p(11,"p-timeline",9),f(12,ur,2,1,"ng-template",10)(13,mr,9,4,"ng-template",11),d(),C(14,"p-divider",12),p(15,"div",13),C(16,"i",14),p(17,"h3",7),b(18,"Archivos requeridos"),d()(),p(19,"div",15),ye(20,gr,6,2,"div",16,Xt),d()()()),e&2&&(s(10),l("value","Tiempo estimado: "+i.detalle().tiempoEstimadoTotalDias+" dias"),s(),l("value",i.detalle().etapasProceso),s(9),we(i.detalle().archivosRequeridos))},dependencies:[ze,ft,_e,he,te,Ae,Ct,Si,F,be,Ji,Kt],styles:["[_nghost-%COMP%]{display:block}[_nghost-%COMP%]     .tramite-timeline .p-timeline-event-opposite{display:none}[_nghost-%COMP%]     .tramite-timeline .p-timeline-event-connector{background:linear-gradient(to bottom,#60a5fa,#c7d2fe);width:2px}@media (max-width: 576px){[_nghost-%COMP%]     .tramite-timeline .p-timeline-event-content{padding-left:.5rem}}"]})};function fr(t,n){if(t&1){let e=S();p(0,"div",4)(1,"app-detalle-subcategoria",5),_("cerrar",function(){u(e);let o=c();return m(o.onCerrarDetalle())}),d()()}}var Zi=class t{categoriaSignal=g(H);subCategoriaSignal=g(re);selectCategoria=this.categoriaSignal.selectCategoria;selectSubCategoria=this.subCategoriaSignal.selectSubCategoria;selectSubCategoriaDefault=this.subCategoriaSignal.selectSubCategoriaDefault;onCategoriaSeleccionada(n){this.selectCategoria.set(n),this.selectSubCategoria.set(this.selectSubCategoriaDefault)}onVerSubcategoria(n){this.selectSubCategoria.set(n)}onCerrarDetalle(){this.selectSubCategoria.set(this.selectSubCategoriaDefault)}static \u0275fac=function(e){return new(e||t)};static \u0275cmp=L({type:t,selectors:[["app-page-categoria"]],decls:9,vars:3,consts:[[1,"font-bold","text-lg","md:text-xl"],[1,"grid","align-items-start","categoria-layout"],[1,"mt-3"],[3,"subcategoriaVer"],[1,"col-12","lg:col-5","order-1","lg:order-2","mb-3","lg:mb-0"],[3,"cerrar"]],template:function(e,i){e&1&&(p(0,"div",0),b(1,"GESTION DE CATEGORIAS Y SUBCATEGORIAS"),d(),C(2,"p-divider"),p(3,"div",1)(4,"div"),C(5,"app-list-categoria"),p(6,"div",2)(7,"app-list-subcategoria",3),_("subcategoriaVer",function(a){return i.onVerSubcategoria(a)}),d()()(),E(8,fr,2,0,"div",4),d()),e&2&&(s(4),h(i.selectSubCategoria().idSubCategoriaTramite!==0?"col-12 lg:col-7 order-2 lg:order-1":"col-12 order-1"),s(4),k(i.selectSubCategoria().idSubCategoriaTramite>0?8:-1))},dependencies:[ze,ft,F,Vt,At,Ft],styles:["@media (max-width: 991px){.categoria-layout[_ngcontent-%COMP%]{row-gap:.75rem}}"]})};export{Zi as PageCategoria};
