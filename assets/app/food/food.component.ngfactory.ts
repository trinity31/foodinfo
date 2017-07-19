/**
 * @fileoverview This file is generated by the Angular template compiler.
 * Do not edit.
 * @suppress {suspiciousCode,uselessCode,missingProperties,missingOverride}
 */
 /* tslint:disable */


import * as i0 from '@angular/core';
import * as i1 from '@angular/router';
import * as i2 from '@angular/common';
import * as i3 from './food.component';
import * as i4 from './food.service';
import * as i5 from '../category/category.service';
import * as i6 from '@angular/platform-browser';
const styles_FoodComponent:any[] = ([] as any[]);
export const RenderType_FoodComponent:i0.RendererType2 = i0.ɵcrt({encapsulation:2,
    styles:styles_FoodComponent,data:{}});
function View_FoodComponent_1(_l:any):i0.ɵViewDefinition {
  return i0.ɵvid(0,[(_l()(),i0.ɵeld(0,(null as any),(null as any),15,'div',[['class',
      'list-group-item']],(null as any),[[(null as any),'click']],(_v,en,$event) => {
    var ad:boolean = true;
    var _co:any = _v.component;
    if (('click' === en)) {
      const pd_0:any = ((<any>i0.ɵnov(_v,1).onClick()) !== false);
      ad = (pd_0 && ad);
    }
    if (('click' === en)) {
      const pd_1:any = ((<any>_co.setCurrentFood(_v.context.$implicit)) !== false);
      ad = (pd_1 && ad);
    }
    return ad;
  },(null as any),(null as any))),i0.ɵdid(16384,(null as any),0,i1.RouterLink,[i1.Router,
      i1.ActivatedRoute,[8,(null as any)],i0.Renderer,i0.ElementRef],{routerLink:[0,
      'routerLink']},(null as any)),(_l()(),i0.ɵted((null as any),['\n            '])),
      (_l()(),i0.ɵeld(0,(null as any),(null as any),3,'div',[['class','media-left']],
          (null as any),(null as any),(null as any),(null as any),(null as any))),
      (_l()(),i0.ɵted((null as any),['\n                '])),(_l()(),i0.ɵeld(0,(null as any),
          (null as any),0,'img',[['alt','Image'],['class','media-object'],['height',
              '160px'],['width','160px']],[[8,'src',4]],(null as any),(null as any),
          (null as any),(null as any))),(_l()(),i0.ɵted((null as any),['\n            '])),
      (_l()(),i0.ɵted((null as any),['\n            '])),(_l()(),i0.ɵeld(0,(null as any),
          (null as any),6,'div',[['class','media-body']],(null as any),(null as any),
          (null as any),(null as any),(null as any))),(_l()(),i0.ɵted((null as any),
          ['\n                '])),(_l()(),i0.ɵeld(0,(null as any),(null as any),1,
          'h4',[['class','media-heading']],(null as any),(null as any),(null as any),
          (null as any),(null as any))),(_l()(),i0.ɵted((null as any),['',''])),(_l()(),
          i0.ɵted((null as any),['\n                제조사: ',' '])),(_l()(),i0.ɵeld(0,
          (null as any),(null as any),0,'br',([] as any[]),(null as any),(null as any),
          (null as any),(null as any),(null as any))),(_l()(),i0.ɵted((null as any),
          ['\n                용량: ','\n            '])),(_l()(),i0.ɵted((null as any),
          ['\n        ']))],(_ck,_v) => {
    const currVal_0:any = i0.ɵinlineInterpolate(2,'/food-detail/',_v.context.$implicit.code,
        '/',_v.context.$implicit.seq_code,'');
    _ck(_v,1,0,currVal_0);
  },(_ck,_v) => {
    const currVal_1:any = i0.ɵinlineInterpolate(1,'',_v.context.$implicit.thumb_img,
        '');
    _ck(_v,5,0,currVal_1);
    const currVal_2:any = _v.context.$implicit.food_name;
    _ck(_v,11,0,currVal_2);
    const currVal_3:any = _v.context.$implicit.sell_com;
    _ck(_v,12,0,currVal_3);
    const currVal_4:any = _v.context.$implicit.volume;
    _ck(_v,14,0,currVal_4);
  });
}
export function View_FoodComponent_0(_l:any):i0.ɵViewDefinition {
  return i0.ɵvid(0,[(_l()(),i0.ɵeld(0,(null as any),(null as any),7,'div',[['class',
      'page-header']],(null as any),(null as any),(null as any),(null as any),(null as any))),
      (_l()(),i0.ɵted((null as any),['\n  '])),(_l()(),i0.ɵeld(0,(null as any),(null as any),
          4,'h1',([] as any[]),(null as any),(null as any),(null as any),(null as any),
          (null as any))),(_l()(),i0.ɵeld(0,(null as any),(null as any),2,'a',[['routerLink',
          '/category']],[[1,'target',0],[8,'href',4]],[[(null as any),'click']],(_v,
          en,$event) => {
        var ad:boolean = true;
        if (('click' === en)) {
          const pd_0:any = ((<any>i0.ɵnov(_v,4).onClick($event.button,$event.ctrlKey,
              $event.metaKey,$event.shiftKey)) !== false);
          ad = (pd_0 && ad);
        }
        return ad;
      },(null as any),(null as any))),i0.ɵdid(671744,(null as any),0,i1.RouterLinkWithHref,
          [i1.Router,i1.ActivatedRoute,i2.LocationStrategy],{routerLink:[0,'routerLink']},
          (null as any)),(_l()(),i0.ɵeld(0,(null as any),(null as any),0,'span',[['aria-hidden',
          'true'],['class','glyphicon glyphicon-chevron-left']],(null as any),(null as any),
          (null as any),(null as any),(null as any))),(_l()(),i0.ɵted((null as any),
          [' ',''])),(_l()(),i0.ɵted((null as any),['\n'])),(_l()(),i0.ɵted((null as any),
          ['\n\n'])),(_l()(),i0.ɵted((null as any),['\n\n'])),(_l()(),i0.ɵeld(0,(null as any),
          (null as any),7,'div',[['class','row']],(null as any),(null as any),(null as any),
          (null as any),(null as any))),(_l()(),i0.ɵted((null as any),['\n    '])),
      (_l()(),i0.ɵeld(0,(null as any),(null as any),4,'div',[['class','col-md-12']],
          (null as any),(null as any),(null as any),(null as any),(null as any))),
      (_l()(),i0.ɵted((null as any),['\n        '])),(_l()(),i0.ɵand(16777216,(null as any),
          (null as any),1,(null as any),View_FoodComponent_1)),i0.ɵdid(802816,(null as any),
          0,i2.NgForOf,[i0.ViewContainerRef,i0.TemplateRef,i0.IterableDiffers],{ngForOf:[0,
              'ngForOf']},(null as any)),(_l()(),i0.ɵted((null as any),['\n    '])),
      (_l()(),i0.ɵted((null as any),['\n'])),(_l()(),i0.ɵted((null as any),['\n\n'])),
      (_l()(),i0.ɵeld(0,(null as any),(null as any),54,'nav',[['aria-label','Page navigation']],
          (null as any),(null as any),(null as any),(null as any),(null as any))),
      (_l()(),i0.ɵted((null as any),['\n  '])),(_l()(),i0.ɵeld(0,(null as any),(null as any),
          51,'ul',[['class','pagination']],(null as any),(null as any),(null as any),
          (null as any),(null as any))),(_l()(),i0.ɵted((null as any),['\n    '])),
      (_l()(),i0.ɵeld(0,(null as any),(null as any),3,'li',([] as any[]),(null as any),
          (null as any),(null as any),(null as any),(null as any))),(_l()(),i0.ɵeld(0,
          (null as any),(null as any),2,'a',([] as any[]),[[1,'target',0],[8,'href',
              4]],[[(null as any),'click']],(_v,en,$event) => {
            var ad:boolean = true;
            if (('click' === en)) {
              const pd_0:any = ((<any>i0.ɵnov(_v,25).onClick($event.button,$event.ctrlKey,
                  $event.metaKey,$event.shiftKey)) !== false);
              ad = (pd_0 && ad);
            }
            return ad;
          },(null as any),(null as any))),i0.ɵdid(671744,(null as any),0,i1.RouterLinkWithHref,
          [i1.Router,i1.ActivatedRoute,i2.LocationStrategy],{routerLink:[0,'routerLink']},
          (null as any)),(_l()(),i0.ɵted((null as any),['1'])),(_l()(),i0.ɵted((null as any),
          ['\n    '])),(_l()(),i0.ɵeld(0,(null as any),(null as any),3,'li',([] as any[]),
          (null as any),(null as any),(null as any),(null as any),(null as any))),
      (_l()(),i0.ɵeld(0,(null as any),(null as any),2,'a',([] as any[]),[[1,'target',
          0],[8,'href',4]],[[(null as any),'click']],(_v,en,$event) => {
        var ad:boolean = true;
        if (('click' === en)) {
          const pd_0:any = ((<any>i0.ɵnov(_v,30).onClick($event.button,$event.ctrlKey,
              $event.metaKey,$event.shiftKey)) !== false);
          ad = (pd_0 && ad);
        }
        return ad;
      },(null as any),(null as any))),i0.ɵdid(671744,(null as any),0,i1.RouterLinkWithHref,
          [i1.Router,i1.ActivatedRoute,i2.LocationStrategy],{routerLink:[0,'routerLink']},
          (null as any)),(_l()(),i0.ɵted((null as any),['2'])),(_l()(),i0.ɵted((null as any),
          ['\n    '])),(_l()(),i0.ɵeld(0,(null as any),(null as any),3,'li',([] as any[]),
          (null as any),(null as any),(null as any),(null as any),(null as any))),
      (_l()(),i0.ɵeld(0,(null as any),(null as any),2,'a',([] as any[]),[[1,'target',
          0],[8,'href',4]],[[(null as any),'click']],(_v,en,$event) => {
        var ad:boolean = true;
        if (('click' === en)) {
          const pd_0:any = ((<any>i0.ɵnov(_v,35).onClick($event.button,$event.ctrlKey,
              $event.metaKey,$event.shiftKey)) !== false);
          ad = (pd_0 && ad);
        }
        return ad;
      },(null as any),(null as any))),i0.ɵdid(671744,(null as any),0,i1.RouterLinkWithHref,
          [i1.Router,i1.ActivatedRoute,i2.LocationStrategy],{routerLink:[0,'routerLink']},
          (null as any)),(_l()(),i0.ɵted((null as any),['3'])),(_l()(),i0.ɵted((null as any),
          ['\n    '])),(_l()(),i0.ɵeld(0,(null as any),(null as any),3,'li',([] as any[]),
          (null as any),(null as any),(null as any),(null as any),(null as any))),
      (_l()(),i0.ɵeld(0,(null as any),(null as any),2,'a',([] as any[]),[[1,'target',
          0],[8,'href',4]],[[(null as any),'click']],(_v,en,$event) => {
        var ad:boolean = true;
        if (('click' === en)) {
          const pd_0:any = ((<any>i0.ɵnov(_v,40).onClick($event.button,$event.ctrlKey,
              $event.metaKey,$event.shiftKey)) !== false);
          ad = (pd_0 && ad);
        }
        return ad;
      },(null as any),(null as any))),i0.ɵdid(671744,(null as any),0,i1.RouterLinkWithHref,
          [i1.Router,i1.ActivatedRoute,i2.LocationStrategy],{routerLink:[0,'routerLink']},
          (null as any)),(_l()(),i0.ɵted((null as any),['4'])),(_l()(),i0.ɵted((null as any),
          ['\n    '])),(_l()(),i0.ɵeld(0,(null as any),(null as any),3,'li',([] as any[]),
          (null as any),(null as any),(null as any),(null as any),(null as any))),
      (_l()(),i0.ɵeld(0,(null as any),(null as any),2,'a',([] as any[]),[[1,'target',
          0],[8,'href',4]],[[(null as any),'click']],(_v,en,$event) => {
        var ad:boolean = true;
        if (('click' === en)) {
          const pd_0:any = ((<any>i0.ɵnov(_v,45).onClick($event.button,$event.ctrlKey,
              $event.metaKey,$event.shiftKey)) !== false);
          ad = (pd_0 && ad);
        }
        return ad;
      },(null as any),(null as any))),i0.ɵdid(671744,(null as any),0,i1.RouterLinkWithHref,
          [i1.Router,i1.ActivatedRoute,i2.LocationStrategy],{routerLink:[0,'routerLink']},
          (null as any)),(_l()(),i0.ɵted((null as any),['5'])),(_l()(),i0.ɵted((null as any),
          ['\n    '])),(_l()(),i0.ɵeld(0,(null as any),(null as any),3,'li',([] as any[]),
          (null as any),(null as any),(null as any),(null as any),(null as any))),
      (_l()(),i0.ɵeld(0,(null as any),(null as any),2,'a',([] as any[]),[[1,'target',
          0],[8,'href',4]],[[(null as any),'click']],(_v,en,$event) => {
        var ad:boolean = true;
        if (('click' === en)) {
          const pd_0:any = ((<any>i0.ɵnov(_v,50).onClick($event.button,$event.ctrlKey,
              $event.metaKey,$event.shiftKey)) !== false);
          ad = (pd_0 && ad);
        }
        return ad;
      },(null as any),(null as any))),i0.ɵdid(671744,(null as any),0,i1.RouterLinkWithHref,
          [i1.Router,i1.ActivatedRoute,i2.LocationStrategy],{routerLink:[0,'routerLink']},
          (null as any)),(_l()(),i0.ɵted((null as any),['6'])),(_l()(),i0.ɵted((null as any),
          ['\n    '])),(_l()(),i0.ɵeld(0,(null as any),(null as any),3,'li',([] as any[]),
          (null as any),(null as any),(null as any),(null as any),(null as any))),
      (_l()(),i0.ɵeld(0,(null as any),(null as any),2,'a',([] as any[]),[[1,'target',
          0],[8,'href',4]],[[(null as any),'click']],(_v,en,$event) => {
        var ad:boolean = true;
        if (('click' === en)) {
          const pd_0:any = ((<any>i0.ɵnov(_v,55).onClick($event.button,$event.ctrlKey,
              $event.metaKey,$event.shiftKey)) !== false);
          ad = (pd_0 && ad);
        }
        return ad;
      },(null as any),(null as any))),i0.ɵdid(671744,(null as any),0,i1.RouterLinkWithHref,
          [i1.Router,i1.ActivatedRoute,i2.LocationStrategy],{routerLink:[0,'routerLink']},
          (null as any)),(_l()(),i0.ɵted((null as any),['7'])),(_l()(),i0.ɵted((null as any),
          ['\n    '])),(_l()(),i0.ɵeld(0,(null as any),(null as any),3,'li',([] as any[]),
          (null as any),(null as any),(null as any),(null as any),(null as any))),
      (_l()(),i0.ɵeld(0,(null as any),(null as any),2,'a',([] as any[]),[[1,'target',
          0],[8,'href',4]],[[(null as any),'click']],(_v,en,$event) => {
        var ad:boolean = true;
        if (('click' === en)) {
          const pd_0:any = ((<any>i0.ɵnov(_v,60).onClick($event.button,$event.ctrlKey,
              $event.metaKey,$event.shiftKey)) !== false);
          ad = (pd_0 && ad);
        }
        return ad;
      },(null as any),(null as any))),i0.ɵdid(671744,(null as any),0,i1.RouterLinkWithHref,
          [i1.Router,i1.ActivatedRoute,i2.LocationStrategy],{routerLink:[0,'routerLink']},
          (null as any)),(_l()(),i0.ɵted((null as any),['8'])),(_l()(),i0.ɵted((null as any),
          ['\n    '])),(_l()(),i0.ɵeld(0,(null as any),(null as any),3,'li',([] as any[]),
          (null as any),(null as any),(null as any),(null as any),(null as any))),
      (_l()(),i0.ɵeld(0,(null as any),(null as any),2,'a',([] as any[]),[[1,'target',
          0],[8,'href',4]],[[(null as any),'click']],(_v,en,$event) => {
        var ad:boolean = true;
        if (('click' === en)) {
          const pd_0:any = ((<any>i0.ɵnov(_v,65).onClick($event.button,$event.ctrlKey,
              $event.metaKey,$event.shiftKey)) !== false);
          ad = (pd_0 && ad);
        }
        return ad;
      },(null as any),(null as any))),i0.ɵdid(671744,(null as any),0,i1.RouterLinkWithHref,
          [i1.Router,i1.ActivatedRoute,i2.LocationStrategy],{routerLink:[0,'routerLink']},
          (null as any)),(_l()(),i0.ɵted((null as any),['9'])),(_l()(),i0.ɵted((null as any),
          ['\n    '])),(_l()(),i0.ɵeld(0,(null as any),(null as any),3,'li',([] as any[]),
          (null as any),(null as any),(null as any),(null as any),(null as any))),
      (_l()(),i0.ɵeld(0,(null as any),(null as any),2,'a',([] as any[]),[[1,'target',
          0],[8,'href',4]],[[(null as any),'click']],(_v,en,$event) => {
        var ad:boolean = true;
        if (('click' === en)) {
          const pd_0:any = ((<any>i0.ɵnov(_v,70).onClick($event.button,$event.ctrlKey,
              $event.metaKey,$event.shiftKey)) !== false);
          ad = (pd_0 && ad);
        }
        return ad;
      },(null as any),(null as any))),i0.ɵdid(671744,(null as any),0,i1.RouterLinkWithHref,
          [i1.Router,i1.ActivatedRoute,i2.LocationStrategy],{routerLink:[0,'routerLink']},
          (null as any)),(_l()(),i0.ɵted((null as any),['10'])),(_l()(),i0.ɵted((null as any),
          ['\n  '])),(_l()(),i0.ɵted((null as any),['\n'])),(_l()(),i0.ɵted((null as any),
          ['\n\n\n\n']))],(_ck,_v) => {
    var _co:i3.FoodComponent = _v.component;
    const currVal_2:any = '/category';
    _ck(_v,4,0,currVal_2);
    const currVal_4:any = _co.foods;
    _ck(_v,15,0,currVal_4);
    const currVal_7:any = i0.ɵinlineInterpolate(1,'/category/',_co.current_food_code,
        '01/1');
    _ck(_v,25,0,currVal_7);
    const currVal_10:any = i0.ɵinlineInterpolate(1,'/category/',_co.current_food_code,
        '01/2');
    _ck(_v,30,0,currVal_10);
    const currVal_13:any = i0.ɵinlineInterpolate(1,'/category/',_co.current_food_code,
        '01/3');
    _ck(_v,35,0,currVal_13);
    const currVal_16:any = i0.ɵinlineInterpolate(1,'/category/',_co.current_food_code,
        '01/4');
    _ck(_v,40,0,currVal_16);
    const currVal_19:any = i0.ɵinlineInterpolate(1,'/category/',_co.current_food_code,
        '01/5');
    _ck(_v,45,0,currVal_19);
    const currVal_22:any = i0.ɵinlineInterpolate(1,'/category/',_co.current_food_code,
        '01/6');
    _ck(_v,50,0,currVal_22);
    const currVal_25:any = i0.ɵinlineInterpolate(1,'/category/',_co.current_food_code,
        '01/7');
    _ck(_v,55,0,currVal_25);
    const currVal_28:any = i0.ɵinlineInterpolate(1,'/category/',_co.current_food_code,
        '01/8');
    _ck(_v,60,0,currVal_28);
    const currVal_31:any = i0.ɵinlineInterpolate(1,'/category/',_co.current_food_code,
        '01/9');
    _ck(_v,65,0,currVal_31);
    const currVal_34:any = i0.ɵinlineInterpolate(1,'/category/',_co.current_food_code,
        '01/10');
    _ck(_v,70,0,currVal_34);
  },(_ck,_v) => {
    var _co:i3.FoodComponent = _v.component;
    const currVal_0:any = i0.ɵnov(_v,4).target;
    const currVal_1:any = i0.ɵnov(_v,4).href;
    _ck(_v,3,0,currVal_0,currVal_1);
    const currVal_3:any = _co.getCurrentCategory();
    _ck(_v,6,0,currVal_3);
    const currVal_5:any = i0.ɵnov(_v,25).target;
    const currVal_6:any = i0.ɵnov(_v,25).href;
    _ck(_v,24,0,currVal_5,currVal_6);
    const currVal_8:any = i0.ɵnov(_v,30).target;
    const currVal_9:any = i0.ɵnov(_v,30).href;
    _ck(_v,29,0,currVal_8,currVal_9);
    const currVal_11:any = i0.ɵnov(_v,35).target;
    const currVal_12:any = i0.ɵnov(_v,35).href;
    _ck(_v,34,0,currVal_11,currVal_12);
    const currVal_14:any = i0.ɵnov(_v,40).target;
    const currVal_15:any = i0.ɵnov(_v,40).href;
    _ck(_v,39,0,currVal_14,currVal_15);
    const currVal_17:any = i0.ɵnov(_v,45).target;
    const currVal_18:any = i0.ɵnov(_v,45).href;
    _ck(_v,44,0,currVal_17,currVal_18);
    const currVal_20:any = i0.ɵnov(_v,50).target;
    const currVal_21:any = i0.ɵnov(_v,50).href;
    _ck(_v,49,0,currVal_20,currVal_21);
    const currVal_23:any = i0.ɵnov(_v,55).target;
    const currVal_24:any = i0.ɵnov(_v,55).href;
    _ck(_v,54,0,currVal_23,currVal_24);
    const currVal_26:any = i0.ɵnov(_v,60).target;
    const currVal_27:any = i0.ɵnov(_v,60).href;
    _ck(_v,59,0,currVal_26,currVal_27);
    const currVal_29:any = i0.ɵnov(_v,65).target;
    const currVal_30:any = i0.ɵnov(_v,65).href;
    _ck(_v,64,0,currVal_29,currVal_30);
    const currVal_32:any = i0.ɵnov(_v,70).target;
    const currVal_33:any = i0.ɵnov(_v,70).href;
    _ck(_v,69,0,currVal_32,currVal_33);
  });
}
export function View_FoodComponent_Host_0(_l:any):i0.ɵViewDefinition {
  return i0.ɵvid(0,[(_l()(),i0.ɵeld(0,(null as any),(null as any),1,'app-food',([] as any[]),
      (null as any),(null as any),(null as any),View_FoodComponent_0,RenderType_FoodComponent)),
      i0.ɵdid(114688,(null as any),0,i3.FoodComponent,[i1.ActivatedRoute,i4.FoodService,
          i5.CategoryService,i6.DOCUMENT],(null as any),(null as any))],(_ck,_v) => {
    _ck(_v,1,0);
  },(null as any));
}
export const FoodComponentNgFactory:i0.ComponentFactory<i3.FoodComponent> = i0.ɵccf('app-food',
    i3.FoodComponent,View_FoodComponent_Host_0,{},{},([] as any[]));
//# sourceMappingURL=data:application/json;base64,eyJmaWxlIjoiQzovVXNlcnMvVHJpbml0eS9TdHVkaWVzL0FuZ3VsYXIgMiBhbmQgTm9kZUpTL0Zvb2RJbmZvL2Fzc2V0cy9hcHAvZm9vZC9mb29kLmNvbXBvbmVudC5uZ2ZhY3RvcnkudHMiLCJ2ZXJzaW9uIjozLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyJuZzovLy9DOi9Vc2Vycy9UcmluaXR5L1N0dWRpZXMvQW5ndWxhciAyIGFuZCBOb2RlSlMvRm9vZEluZm8vYXNzZXRzL2FwcC9mb29kL2Zvb2QuY29tcG9uZW50LnRzIiwibmc6Ly8vQzovVXNlcnMvVHJpbml0eS9TdHVkaWVzL0FuZ3VsYXIgMiBhbmQgTm9kZUpTL0Zvb2RJbmZvL2Fzc2V0cy9hcHAvZm9vZC9mb29kLmNvbXBvbmVudC5odG1sIiwibmc6Ly8vQzovVXNlcnMvVHJpbml0eS9TdHVkaWVzL0FuZ3VsYXIgMiBhbmQgTm9kZUpTL0Zvb2RJbmZvL2Fzc2V0cy9hcHAvZm9vZC9mb29kLmNvbXBvbmVudC50cy5Gb29kQ29tcG9uZW50X0hvc3QuaHRtbCJdLCJzb3VyY2VzQ29udGVudCI6WyIgIiwiPGRpdiBjbGFzcz1cInBhZ2UtaGVhZGVyXCI+XHJcbiAgPGgxPjxhIHJvdXRlckxpbms9XCIvY2F0ZWdvcnlcIj48c3BhbiBjbGFzcz1cImdseXBoaWNvbiBnbHlwaGljb24tY2hldnJvbi1sZWZ0XCIgYXJpYS1oaWRkZW49XCJ0cnVlXCI+PC9zcGFuPjwvYT4ge3tnZXRDdXJyZW50Q2F0ZWdvcnkoKX19PC9oMT5cclxuPC9kaXY+XHJcblxyXG48IS0tPGRpdiBjbGFzcz1cImxpc3QtZ3JvdXBcIj5cclxuICA8YSAqbmdGb3I9XCJsZXQgZm9vZCBvZiBmb29kc1wiIHJvdXRlckxpbms9XCIvY2F0ZWdvcnkve3tmb29kLnNlcV9jb2RlfX1cIiBjbGFzcz1cImxpc3QtZ3JvdXAtaXRlbVwiPnt7Zm9vZC5mb29kX25hbWV9fTwvYT5cclxuPC9kaXY+LS0+XHJcblxyXG48ZGl2IGNsYXNzPVwicm93XCI+XHJcbiAgICA8ZGl2IGNsYXNzPVwiY29sLW1kLTEyXCI+XHJcbiAgICAgICAgPGRpdiBjbGFzcz1cIm1lZGlhXCIgKm5nRm9yPVwibGV0IGZvb2Qgb2YgZm9vZHNcIiByb3V0ZXJMaW5rPVwiL2Zvb2QtZGV0YWlsL3t7Zm9vZC5jb2RlfX0ve3tmb29kLnNlcV9jb2RlfX1cIiAoY2xpY2spPVwic2V0Q3VycmVudEZvb2QoZm9vZClcIiBjbGFzcz1cImxpc3QtZ3JvdXAtaXRlbVwiPlxyXG4gICAgICAgICAgICA8ZGl2IGNsYXNzPVwibWVkaWEtbGVmdFwiPlxyXG4gICAgICAgICAgICAgICAgPGltZyBjbGFzcz1cIm1lZGlhLW9iamVjdFwiIHNyYz1cInt7Zm9vZC50aHVtYl9pbWd9fVwiIHdpZHRoPVwiMTYwcHhcIiBoZWlnaHQ9XCIxNjBweFwiIGFsdD1cIkltYWdlXCI+XHJcbiAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICA8ZGl2IGNsYXNzPVwibWVkaWEtYm9keVwiPlxyXG4gICAgICAgICAgICAgICAgPGg0IGNsYXNzPVwibWVkaWEtaGVhZGluZ1wiPnt7Zm9vZC5mb29kX25hbWV9fTwvaDQ+XHJcbiAgICAgICAgICAgICAgICDsoJzsobDsgqw6IHt7Zm9vZC5zZWxsX2NvbX19IDxicj5cclxuICAgICAgICAgICAgICAgIOyaqeufiToge3tmb29kLnZvbHVtZX19XHJcbiAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgIDwvZGl2PlxyXG4gICAgPC9kaXY+XHJcbjwvZGl2PlxyXG5cclxuPG5hdiBhcmlhLWxhYmVsPVwiUGFnZSBuYXZpZ2F0aW9uXCI+XHJcbiAgPHVsIGNsYXNzPVwicGFnaW5hdGlvblwiPlxyXG4gICAgPGxpPjxhIHJvdXRlckxpbms9XCIvY2F0ZWdvcnkve3tjdXJyZW50X2Zvb2RfY29kZX19MDEvMVwiPjE8L2E+PC9saT5cclxuICAgIDxsaT48YSByb3V0ZXJMaW5rPVwiL2NhdGVnb3J5L3t7Y3VycmVudF9mb29kX2NvZGV9fTAxLzJcIj4yPC9hPjwvbGk+XHJcbiAgICA8bGk+PGEgcm91dGVyTGluaz1cIi9jYXRlZ29yeS97e2N1cnJlbnRfZm9vZF9jb2RlfX0wMS8zXCI+MzwvYT48L2xpPlxyXG4gICAgPGxpPjxhIHJvdXRlckxpbms9XCIvY2F0ZWdvcnkve3tjdXJyZW50X2Zvb2RfY29kZX19MDEvNFwiPjQ8L2E+PC9saT5cclxuICAgIDxsaT48YSByb3V0ZXJMaW5rPVwiL2NhdGVnb3J5L3t7Y3VycmVudF9mb29kX2NvZGV9fTAxLzVcIj41PC9hPjwvbGk+XHJcbiAgICA8bGk+PGEgcm91dGVyTGluaz1cIi9jYXRlZ29yeS97e2N1cnJlbnRfZm9vZF9jb2RlfX0wMS82XCI+NjwvYT48L2xpPlxyXG4gICAgPGxpPjxhIHJvdXRlckxpbms9XCIvY2F0ZWdvcnkve3tjdXJyZW50X2Zvb2RfY29kZX19MDEvN1wiPjc8L2E+PC9saT5cclxuICAgIDxsaT48YSByb3V0ZXJMaW5rPVwiL2NhdGVnb3J5L3t7Y3VycmVudF9mb29kX2NvZGV9fTAxLzhcIj44PC9hPjwvbGk+XHJcbiAgICA8bGk+PGEgcm91dGVyTGluaz1cIi9jYXRlZ29yeS97e2N1cnJlbnRfZm9vZF9jb2RlfX0wMS85XCI+OTwvYT48L2xpPlxyXG4gICAgPGxpPjxhIHJvdXRlckxpbms9XCIvY2F0ZWdvcnkve3tjdXJyZW50X2Zvb2RfY29kZX19MDEvMTBcIj4xMDwvYT48L2xpPlxyXG4gIDwvdWw+XHJcbjwvbmF2PlxyXG5cclxuXHJcblxyXG4iLCI8YXBwLWZvb2Q+PC9hcHAtZm9vZD4iXSwibWFwcGluZ3MiOiJBQUFBOzs7Ozs7Ozs7Ozs7Ozs7Ozs7O29CQ1VRO01BQUE7SUFBQTtJQUFBO0lBQUE7TUFBQTtNQUFBO0lBQUE7SUFBd0c7TUFBQTtNQUFBO0lBQUE7SUFBeEc7RUFBQSx1Q0FBQTt3QkFBQTtNQUFBLDhCQUErSjtNQUMzSjtVQUFBO01BQXdCLHVEQUNwQjtVQUFBO2NBQUE7VUFBQSw4QkFBNEY7TUFDMUYsbURBQ047VUFBQTtVQUFBLDRDQUF3QjtVQUFBLHlCQUNwQjtVQUFBO1VBQUEsOEJBQTBCLHdDQUF1QjtpQkFBQSxpREFDMUI7VUFBQTtVQUFBLDRDQUFJO1VBQUEsOENBRXpCO1VBQUE7SUFSb0M7UUFBQTtJQUE5QyxXQUE4QyxTQUE5Qzs7SUFFa0M7UUFBQTtJQUExQixXQUEwQixTQUExQjtJQUcwQjtJQUFBO0lBQXVCO0lBQUE7SUFDdEI7SUFBQTs7OztvQkFoQjNDO01BQUE7TUFBeUIseUNBQ3ZCO1VBQUE7VUFBQSxnQkFBSTtVQUFBO21CQUFBO1FBQUE7UUFBQTtVQUFBO2NBQUE7VUFBQTtRQUFBO1FBQUE7TUFBQSx1Q0FBQTtVQUFBO1VBQUEsZUFBMEI7VUFBQTtVQUFBLDRDQUE2RTtVQUFBLFdBQThCLHVDQUNySTtVQUFBLFdBSUcseUNBRVQ7VUFBQTtVQUFBLDhCQUFpQjtNQUNiO1VBQUE7TUFBdUIsK0NBQ25CO1VBQUEsNERBQUE7VUFBQTtjQUFBLDJCQVNNO01BQ0osdUNBQ0o7TUFFTjtVQUFBO01BQWtDLHlDQUNoQztVQUFBO1VBQUEsOEJBQXVCO01BQ3JCO1VBQUEsMERBQUk7VUFBQTtjQUFBO1lBQUE7WUFBQTtjQUFBO2tCQUFBO2NBQUE7WUFBQTtZQUFBO1VBQUEsdUNBQUE7VUFBQTtVQUFBLGVBQW9ELHNDQUFVO1VBQUEsYUFDbEU7VUFBQTtNQUFJO1VBQUE7UUFBQTtRQUFBO1VBQUE7Y0FBQTtVQUFBO1FBQUE7UUFBQTtNQUFBLHVDQUFBO1VBQUE7VUFBQSxlQUFvRCxzQ0FBVTtVQUFBLGFBQ2xFO1VBQUE7TUFBSTtVQUFBO1FBQUE7UUFBQTtVQUFBO2NBQUE7VUFBQTtRQUFBO1FBQUE7TUFBQSx1Q0FBQTtVQUFBO1VBQUEsZUFBb0Qsc0NBQVU7VUFBQSxhQUNsRTtVQUFBO01BQUk7VUFBQTtRQUFBO1FBQUE7VUFBQTtjQUFBO1VBQUE7UUFBQTtRQUFBO01BQUEsdUNBQUE7VUFBQTtVQUFBLGVBQW9ELHNDQUFVO1VBQUEsYUFDbEU7VUFBQTtNQUFJO1VBQUE7UUFBQTtRQUFBO1VBQUE7Y0FBQTtVQUFBO1FBQUE7UUFBQTtNQUFBLHVDQUFBO1VBQUE7VUFBQSxlQUFvRCxzQ0FBVTtVQUFBLGFBQ2xFO1VBQUE7TUFBSTtVQUFBO1FBQUE7UUFBQTtVQUFBO2NBQUE7VUFBQTtRQUFBO1FBQUE7TUFBQSx1Q0FBQTtVQUFBO1VBQUEsZUFBb0Qsc0NBQVU7VUFBQSxhQUNsRTtVQUFBO01BQUk7VUFBQTtRQUFBO1FBQUE7VUFBQTtjQUFBO1VBQUE7UUFBQTtRQUFBO01BQUEsdUNBQUE7VUFBQTtVQUFBLGVBQW9ELHNDQUFVO1VBQUEsYUFDbEU7VUFBQTtNQUFJO1VBQUE7UUFBQTtRQUFBO1VBQUE7Y0FBQTtVQUFBO1FBQUE7UUFBQTtNQUFBLHVDQUFBO1VBQUE7VUFBQSxlQUFvRCxzQ0FBVTtVQUFBLGFBQ2xFO1VBQUE7TUFBSTtVQUFBO1FBQUE7UUFBQTtVQUFBO2NBQUE7VUFBQTtRQUFBO1FBQUE7TUFBQSx1Q0FBQTtVQUFBO1VBQUEsZUFBb0Qsc0NBQVU7VUFBQSxhQUNsRTtVQUFBO01BQUk7VUFBQTtRQUFBO1FBQUE7VUFBQTtjQUFBO1VBQUE7UUFBQTtRQUFBO01BQUEsdUNBQUE7VUFBQTtVQUFBLGVBQXFELHVDQUFXO1VBQUEsV0FDakUsdUNBQ0Q7VUFBQTs7SUFuQ0c7SUFBSCxXQUFHLFNBQUg7SUFTcUI7SUFBbkIsWUFBbUIsU0FBbkI7SUFlRztRQUFBO0lBQUgsWUFBRyxTQUFIO0lBQ0c7UUFBQTtJQUFILFlBQUcsVUFBSDtJQUNHO1FBQUE7SUFBSCxZQUFHLFVBQUg7SUFDRztRQUFBO0lBQUgsWUFBRyxVQUFIO0lBQ0c7UUFBQTtJQUFILFlBQUcsVUFBSDtJQUNHO1FBQUE7SUFBSCxZQUFHLFVBQUg7SUFDRztRQUFBO0lBQUgsWUFBRyxVQUFIO0lBQ0c7UUFBQTtJQUFILFlBQUcsVUFBSDtJQUNHO1FBQUE7SUFBSCxZQUFHLFVBQUg7SUFDRztRQUFBO0lBQUgsWUFBRyxVQUFIOzs7SUFqQ0Y7SUFBQTtJQUFBLFdBQUEsbUJBQUE7SUFBdUc7SUFBQTtJQXdCckc7SUFBQTtJQUFBLFlBQUEsbUJBQUE7SUFDQTtJQUFBO0lBQUEsWUFBQSxtQkFBQTtJQUNBO0lBQUE7SUFBQSxZQUFBLHFCQUFBO0lBQ0E7SUFBQTtJQUFBLFlBQUEscUJBQUE7SUFDQTtJQUFBO0lBQUEsWUFBQSxxQkFBQTtJQUNBO0lBQUE7SUFBQSxZQUFBLHFCQUFBO0lBQ0E7SUFBQTtJQUFBLFlBQUEscUJBQUE7SUFDQTtJQUFBO0lBQUEsWUFBQSxxQkFBQTtJQUNBO0lBQUE7SUFBQSxZQUFBLHFCQUFBO0lBQ0E7SUFBQTtJQUFBLFlBQUEscUJBQUE7Ozs7b0JDbENSO01BQUE7YUFBQTt3Q0FBQTtJQUFBOzs7OyJ9
