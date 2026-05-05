import{a as de,b as se}from"./chunk-CEN425H6.js";import{$ as S,Ab as O,Ac as Z,Bc as ee,Cc as te,Ea as C,Eb as c,Fb as U,Gb as W,Hc as ne,Id as oe,Jd as E,Ld as le,Nb as X,O as R,Oa as G,Od as ae,P as q,Pa as K,Pb as y,Pd as re,R as $,Ra as z,Sa as H,T as v,Ta as p,Vd as T,Wd as F,Z as I,Za as b,_ as x,_b as Y,eb as i,fb as g,gb as f,hb as M,ie as ce,je as V,ka as k,lb as B,lc as Q,le as j,mb as w,me as P,nb as m,ne as L,ob as D,qb as A,rb as s,sb as J,tb as N,ub as _,wb as u,xb as h,yd as ie,za as o}from"./chunk-63UDFC7H.js";var pe=`
    .p-fieldset {
        background: dt('fieldset.background');
        border: 1px solid dt('fieldset.border.color');
        border-radius: dt('fieldset.border.radius');
        color: dt('fieldset.color');
        padding: dt('fieldset.padding');
        margin: 0;
    }

    .p-fieldset-legend {
        background: dt('fieldset.legend.background');
        border-radius: dt('fieldset.legend.border.radius');
        border-width: dt('fieldset.legend.border.width');
        border-style: solid;
        border-color: dt('fieldset.legend.border.color');
        padding: dt('fieldset.legend.padding');
        transition:
            background dt('fieldset.transition.duration'),
            color dt('fieldset.transition.duration'),
            outline-color dt('fieldset.transition.duration'),
            box-shadow dt('fieldset.transition.duration');
    }

    .p-fieldset-toggleable > .p-fieldset-legend {
        padding: 0;
    }

    .p-fieldset-toggle-button {
        cursor: pointer;
        user-select: none;
        overflow: hidden;
        position: relative;
        text-decoration: none;
        display: flex;
        gap: dt('fieldset.legend.gap');
        align-items: center;
        justify-content: center;
        padding: dt('fieldset.legend.padding');
        background: transparent;
        border: 0 none;
        border-radius: dt('fieldset.legend.border.radius');
        transition:
            background dt('fieldset.transition.duration'),
            color dt('fieldset.transition.duration'),
            outline-color dt('fieldset.transition.duration'),
            box-shadow dt('fieldset.transition.duration');
        outline-color: transparent;
    }

    .p-fieldset-legend-label {
        font-weight: dt('fieldset.legend.font.weight');
    }

    .p-fieldset-toggle-button:focus-visible {
        box-shadow: dt('fieldset.legend.focus.ring.shadow');
        outline: dt('fieldset.legend.focus.ring.width') dt('fieldset.legend.focus.ring.style') dt('fieldset.legend.focus.ring.color');
        outline-offset: dt('fieldset.legend.focus.ring.offset');
    }

    .p-fieldset-toggleable > .p-fieldset-legend:hover {
        color: dt('fieldset.legend.hover.color');
        background: dt('fieldset.legend.hover.background');
    }

    .p-fieldset-toggle-icon {
        color: dt('fieldset.toggle.icon.color');
        transition: color dt('fieldset.transition.duration');
    }

    .p-fieldset-toggleable > .p-fieldset-legend:hover .p-fieldset-toggle-icon {
        color: dt('fieldset.toggle.icon.hover.color');
    }

    .p-fieldset .p-fieldset-content {
        padding: dt('fieldset.content.padding');
    }
`;var me=["header"],_e=["expandicon"],ue=["collapseicon"],he=["content"],be=["*",[["p-header"]]],ye=["*","p-header"],Te=t=>({transitionParams:t,height:"0"}),ve=t=>({value:"hidden",params:t}),Ie=t=>({transitionParams:t,height:"*"}),xe=t=>({value:"visible",params:t});function Ce(t,r){if(t&1&&(S(),M(0,"svg",10)),t&2){let e=s(3);c(e.cx("toggleIcon")),i("pBind",e.ptm("toggleIcon"))}}function Be(t,r){t&1&&m(0)}function we(t,r){if(t&1&&(g(0,"span",2),p(1,Be,1,0,"ng-container",5),f()),t&2){let e=s(3);c(e.cx("toggleIcon")),i("pBind",e.ptm("toggleIcon")),o(),i("ngTemplateOutlet",e.expandIconTemplate||e._expandIconTemplate)}}function Ee(t,r){if(t&1&&(B(0),p(1,Ce,1,3,"svg",8)(2,we,2,4,"span",9),w()),t&2){let e=s(2);o(),i("ngIf",!e.expandIconTemplate&&!e._expandIconTemplate),o(),i("ngIf",e.expandIconTemplate||e._expandIconTemplate)}}function Fe(t,r){if(t&1&&(S(),M(0,"svg",12)),t&2){let e=s(3);c(e.cx("toggleIcon")),i("pBind",e.ptm("toggleIcon")),b("aria-hidden",!0)}}function Se(t,r){t&1&&m(0)}function ke(t,r){if(t&1&&(g(0,"span",2),p(1,Se,1,0,"ng-container",5),f()),t&2){let e=s(3);c(e.cx("toggleIcon")),i("pBind",e.ptm("toggleIcon")),o(),i("ngTemplateOutlet",e.collapseIconTemplate||e._collapseIconTemplate)}}function Me(t,r){if(t&1&&(B(0),p(1,Fe,1,4,"svg",11)(2,ke,2,4,"span",9),w()),t&2){let e=s(2);o(),i("ngIf",!e.collapseIconTemplate&&!e._collapseIconTemplate),o(),i("ngIf",e.collapseIconTemplate||e._collapseIconTemplate)}}function De(t,r){t&1&&m(0)}function Ae(t,r){if(t&1){let e=D();B(0),g(1,"button",6),A("click",function(n){I(e);let a=s();return x(a.toggle(n))})("keydown",function(n){I(e);let a=s();return x(a.onKeyDown(n))}),p(2,Ee,3,2,"ng-container",7)(3,Me,3,2,"ng-container",7)(4,De,1,0,"ng-container",5),f(),w()}if(t&2){let e=s(),l=O(4);o(),c(e.cx("toggleButton")),i("pBind",e.ptm("toggleButton")),b("id",e.id+"_header")("aria-controls",e.id+"_content")("aria-expanded",!e.collapsed)("aria-label",e.buttonAriaLabel),o(),i("ngIf",e.collapsed),o(),i("ngIf",!e.collapsed),o(),i("ngTemplateOutlet",l)}}function Ne(t,r){t&1&&m(0)}function Oe(t,r){if(t&1&&(g(0,"span",2),U(1),f(),N(2,1),p(3,Ne,1,0,"ng-container",5)),t&2){let e=s();c(e.cx("legendLabel")),i("pBind",e.ptm("legendLabel")),o(),W(e.legend),o(2),i("ngTemplateOutlet",e.headerTemplate||e._headerTemplate)}}function Qe(t,r){t&1&&m(0)}var Ve=`
    ${pe}

    /* For PrimeNG */
    .p-fieldset-collapsed > .p-fieldset-content-container,
    .p-fieldset-content-container.ng-animating {
        overflow: hidden;
    }
`,je={root:({instance:t})=>["p-fieldset p-component",{"p-fieldset-toggleable":t.toggleable,"p-fieldset-collapsed":t.collapsed&&t.toggleable}],legend:"p-fieldset-legend",legendLabel:"p-fieldset-legend-label",toggleButton:"p-fieldset-toggle-button",toggleIcon:"p-fieldset-toggle-icon",contentContainer:"p-fieldset-content-container",content:"p-fieldset-content"},ge=(()=>{class t extends le{name="fieldset";style=Ve;classes=je;static \u0275fac=(()=>{let e;return function(n){return(e||(e=k(t)))(n||t)}})();static \u0275prov=R({token:t,factory:t.\u0275fac})}return t})();var fe=new $("FIELDSET_INSTANCE"),Pe=(()=>{class t extends re{$pcFieldset=v(fe,{optional:!0,skipSelf:!0})??void 0;_componentStyle=v(ge);bindDirectiveInstance=v(T,{self:!0});onAfterViewChecked(){this.bindDirectiveInstance.setAttrs(this.ptm("host"))}get dataP(){return this.cn({toggleable:this.toggleable})}legend;toggleable;collapsed=!1;style;styleClass;transitionOptions="400ms cubic-bezier(0.86, 0, 0.07, 1)";collapsedChange=new C;onBeforeToggle=new C;onAfterToggle=new C;_id=ie("pn_id_");get id(){return this._id}get buttonAriaLabel(){return this.legend}animating;headerTemplate;expandIconTemplate;collapseIconTemplate;contentTemplate;toggle(e){if(this.animating)return!1;this.animating=!0,this.onBeforeToggle.emit({originalEvent:e,collapsed:this.collapsed}),this.collapsed?this.expand():this.collapse(),this.onAfterToggle.emit({originalEvent:e,collapsed:this.collapsed}),e.preventDefault()}onKeyDown(e){(e.code==="Enter"||e.code==="Space")&&(this.toggle(e),e.preventDefault())}expand(){this.collapsed=!1,this.collapsedChange.emit(this.collapsed)}collapse(){this.collapsed=!0,this.collapsedChange.emit(this.collapsed)}getBlockableElement(){return this.el.nativeElement.children[0]}onToggleDone(){this.animating=!1}_headerTemplate;_expandIconTemplate;_collapseIconTemplate;_contentTemplate;templates;onAfterContentInit(){this.templates.forEach(e=>{switch(e.getType()){case"header":this._headerTemplate=e.template;break;case"expandicon":this._expandIconTemplate=e.template;break;case"collapseicon":this._collapseIconTemplate=e.template;break;case"content":this._contentTemplate=e.template;break}})}static \u0275fac=(()=>{let e;return function(n){return(e||(e=k(t)))(n||t)}})();static \u0275cmp=G({type:t,selectors:[["p-fieldset"]],contentQueries:function(l,n,a){if(l&1&&(_(a,me,4),_(a,_e,4),_(a,ue,4),_(a,he,4),_(a,oe,4)),l&2){let d;u(d=h())&&(n.headerTemplate=d.first),u(d=h())&&(n.expandIconTemplate=d.first),u(d=h())&&(n.collapseIconTemplate=d.first),u(d=h())&&(n.contentTemplate=d.first),u(d=h())&&(n.templates=d)}},inputs:{legend:"legend",toggleable:[2,"toggleable","toggleable",Q],collapsed:[2,"collapsed","collapsed",Q],style:"style",styleClass:"styleClass",transitionOptions:"transitionOptions"},outputs:{collapsedChange:"collapsedChange",onBeforeToggle:"onBeforeToggle",onAfterToggle:"onAfterToggle"},features:[X([ge,{provide:fe,useExisting:t},{provide:ae,useExisting:t}]),H([T]),z],ngContentSelectors:ye,decls:9,vars:30,consts:[["legendContent",""],[3,"ngStyle","pBind"],[3,"pBind"],[4,"ngIf","ngIfElse"],["role","region",3,"pBind"],[4,"ngTemplateOutlet"],["tabindex","0","role","button",3,"click","keydown","pBind"],[4,"ngIf"],["data-p-icon","plus",3,"class","pBind",4,"ngIf"],[3,"class","pBind",4,"ngIf"],["data-p-icon","plus",3,"pBind"],["data-p-icon","minus",3,"class","pBind",4,"ngIf"],["data-p-icon","minus",3,"pBind"]],template:function(l,n){if(l&1){let a=D();J(be),g(0,"fieldset",1)(1,"legend",2),p(2,Ae,5,10,"ng-container",3)(3,Oe,4,5,"ng-template",null,0,Y),f(),g(5,"div",4),A("@fieldsetContent.done",function(){return I(a),x(n.onToggleDone())}),g(6,"div",2),N(7),p(8,Qe,1,0,"ng-container",5),f()()()}if(l&2){let a=O(4);c(n.cn(n.cx("root"),n.styleClass)),i("ngStyle",n.style)("pBind",n.ptm("root")),b("id",n.id)("data-p",n.dataP),o(),c(n.cx("legend")),i("pBind",n.ptm("legend")),o(),i("ngIf",n.toggleable)("ngIfElse",a),o(3),c(n.cx("contentContainer")),i("pBind",n.ptm("contentContainer"))("@fieldsetContent",n.collapsed?y(24,ve,y(22,Te,n.transitionOptions)):y(28,xe,y(26,Ie,n.animating?n.transitionOptions:"0ms"))),b("id",n.id+"_content")("aria-labelledby",n.id+"_header")("aria-hidden",n.collapsed),o(),c(n.cx("content")),i("pBind",n.ptm("content")),o(2),i("ngTemplateOutlet",n.contentTemplate||n._contentTemplate)}},dependencies:[ne,Z,te,ee,de,se,E,F,T],encapsulation:2,data:{animation:[ce("fieldsetContent",[P("hidden",j({height:"0"})),P("visible",j({height:"*"})),L("visible <=> hidden",[V("{{transitionParams}}")]),L("void => *",V(0))])]},changeDetection:0})}return t})(),st=(()=>{class t{static \u0275fac=function(l){return new(l||t)};static \u0275mod=K({type:t});static \u0275inj=q({imports:[Pe,E,F,E,F]})}return t})();export{Pe as a,st as b};
