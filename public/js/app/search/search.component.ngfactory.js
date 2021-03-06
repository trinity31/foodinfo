/**
 * @fileoverview This file is generated by the Angular template compiler.
 * Do not edit.
 * @suppress {suspiciousCode,uselessCode,missingProperties,missingOverride}
 */
/* tslint:disable */
import * as i0 from '@angular/core';
import * as i1 from '@angular/router';
import * as i2 from './search.component';
import * as i3 from '@angular/forms';
import * as i4 from '@angular/common';
import * as i5 from '../food/food.service';
import * as i6 from './search.service';
var styles_SearchComponent = [];
export var RenderType_SearchComponent = i0.ɵcrt({ encapsulation: 2,
    styles: styles_SearchComponent, data: {} });
function View_SearchComponent_1(_l) {
    return i0.ɵvid(0, [(_l()(), i0.ɵeld(0, null, null, 15, 'div', [['class',
                'list-group-item']], null, [[null, 'click']], function (_v, en, $event) {
            var ad = true;
            var _co = _v.component;
            if (('click' === en)) {
                var pd_0 = (i0.ɵnov(_v, 1).onClick() !== false);
                ad = (pd_0 && ad);
            }
            if (('click' === en)) {
                var pd_1 = (_co.setCurrentFood(_v.context.$implicit) !== false);
                ad = (pd_1 && ad);
            }
            return ad;
        }, null, null)), i0.ɵdid(16384, null, 0, i1.RouterLink, [i1.Router,
            i1.ActivatedRoute, [8, null], i0.Renderer, i0.ElementRef], { routerLink: [0,
                'routerLink'] }, null), (_l()(), i0.ɵted(null, ['\n                '])),
        (_l()(), i0.ɵeld(0, null, null, 3, 'div', [['class', 'media-left']], null, null, null, null, null)),
        (_l()(), i0.ɵted(null, ['\n                    '])), (_l()(), i0.ɵeld(0, null, null, 0, 'img', [['alt', 'Image'], ['class', 'media-object'],
            ['height', '160px'], ['width', '160px']], [[8, 'src', 4]], null, null, null, null)), (_l()(), i0.ɵted(null, ['\n                '])),
        (_l()(), i0.ɵted(null, ['\n                '])), (_l()(), i0.ɵeld(0, null, null, 6, 'div', [['class', 'media-body']], null, null, null, null, null)), (_l()(), i0.ɵted(null, ['\n                    '])), (_l()(), i0.ɵeld(0, null, null, 1, 'h4', [['class', 'media-heading']], null, null, null, null, null)), (_l()(), i0.ɵted(null, ['', ''])), (_l()(),
            i0.ɵted(null, ['\n                    제조사: ', ' '])), (_l()(), i0.ɵeld(0, null, null, 0, 'br', [], null, null, null, null, null)), (_l()(), i0.ɵted(null, ['\n                    용량: ', '\n                '])), (_l()(), i0.ɵted(null, ['\n            ']))], function (_ck, _v) {
        var currVal_0 = i0.ɵinlineInterpolate(2, '/food-detail/', _v.context.$implicit.code, '/', _v.context.$implicit.seq_code, '');
        _ck(_v, 1, 0, currVal_0);
    }, function (_ck, _v) {
        var currVal_1 = i0.ɵinlineInterpolate(1, '', _v.context.$implicit.thumb_img, '');
        _ck(_v, 5, 0, currVal_1);
        var currVal_2 = _v.context.$implicit.food_name;
        _ck(_v, 11, 0, currVal_2);
        var currVal_3 = _v.context.$implicit.sell_com;
        _ck(_v, 12, 0, currVal_3);
        var currVal_4 = _v.context.$implicit.volume;
        _ck(_v, 14, 0, currVal_4);
    });
}
export function View_SearchComponent_0(_l) {
    return i0.ɵvid(0, [(_l()(), i0.ɵeld(0, null, null, 36, 'div', [['class',
                'col-md-8 col-md-offset-2']], null, null, null, null, null)), (_l()(), i0.ɵted(null, ['\n    '])), (_l()(), i0.ɵeld(0, null, null, 22, 'form', [['ngNativeValidate', '']], [[2, 'ng-untouched',
                null], [2, 'ng-touched', null], [2, 'ng-pristine', null],
            [2, 'ng-dirty', null], [2, 'ng-valid', null], [2, 'ng-invalid',
                null], [2, 'ng-pending', null]], [[null, 'ngSubmit'],
            [null, 'submit'], [null, 'reset']], function (_v, en, $event) {
            var ad = true;
            var _co = _v.component;
            if (('submit' === en)) {
                var pd_0 = (i0.ɵnov(_v, 3).onSubmit($event) !== false);
                ad = (pd_0 && ad);
            }
            if (('reset' === en)) {
                var pd_1 = (i0.ɵnov(_v, 3).onReset() !== false);
                ad = (pd_1 && ad);
            }
            if (('ngSubmit' === en)) {
                var pd_2 = (_co.onSubmit(i0.ɵnov(_v, 3)) !== false);
                ad = (pd_2 && ad);
            }
            return ad;
        }, null, null)), i0.ɵdid(16384, [['f', 4]], 0, i3.NgForm, [[8, null],
            [8, null]], null, { ngSubmit: 'ngSubmit' }), i0.ɵprd(2048, null, i3.ControlContainer, null, [i3.NgForm]), i0.ɵdid(16384, null, 0, i3.NgControlStatusGroup, [i3.ControlContainer], null, null), (_l()(),
            i0.ɵted(null, ['\n        '])), (_l()(), i0.ɵeld(0, null, null, 13, 'div', [['class', 'form-group']], null, null, null, null, null)), (_l()(), i0.ɵted(null, ['\n            '])),
        (_l()(), i0.ɵeld(0, null, null, 1, 'label', [['for', 'content']], null, null, null, null, null)),
        (_l()(), i0.ɵted(null, ['검색어를 입력하세요'])), (_l()(), i0.ɵted(null, ['\n            '])), (_l()(), i0.ɵeld(0, [['input', 1]], null, 7, 'input', [['class', 'form-control'], ['id', 'content'], ['name', 'content'], ['ngModel',
                ''], ['required', ''], ['type', 'text']], [[1, 'required', 0], [2, 'ng-untouched',
                null], [2, 'ng-touched', null], [2, 'ng-pristine', null],
            [2, 'ng-dirty', null], [2, 'ng-valid', null], [2, 'ng-invalid',
                null], [2, 'ng-pending', null]], [[null, 'input'],
            [null, 'blur'], [null, 'compositionstart'], [null,
                'compositionend']], function (_v, en, $event) {
            var ad = true;
            if (('input' === en)) {
                var pd_0 = (i0.ɵnov(_v, 13)._handleInput($event.target.value) !== false);
                ad = (pd_0 && ad);
            }
            if (('blur' === en)) {
                var pd_1 = (i0.ɵnov(_v, 13).onTouched() !== false);
                ad = (pd_1 && ad);
            }
            if (('compositionstart' === en)) {
                var pd_2 = (i0.ɵnov(_v, 13)._compositionStart() !== false);
                ad = (pd_2 && ad);
            }
            if (('compositionend' === en)) {
                var pd_3 = (i0.ɵnov(_v, 13)._compositionEnd($event.target.value) !== false);
                ad = (pd_3 && ad);
            }
            return ad;
        }, null, null)), i0.ɵdid(16384, null, 0, i3.DefaultValueAccessor, [i0.Renderer, i0.ElementRef, [2, i3.COMPOSITION_BUFFER_MODE]], null, null), i0.ɵdid(16384, null, 0, i3.RequiredValidator, [], { required: [0, 'required'] }, null), i0.ɵprd(1024, null, i3.NG_VALIDATORS, function (p0_0) {
            return [p0_0];
        }, [i3.RequiredValidator]), i0.ɵprd(1024, null, i3.NG_VALUE_ACCESSOR, function (p0_0) {
            return [p0_0];
        }, [i3.DefaultValueAccessor]), i0.ɵdid(671744, null, 0, i3.NgModel, [[2,
                i3.ControlContainer], [2, i3.NG_VALIDATORS], [8, null], [2, i3.NG_VALUE_ACCESSOR]], { name: [0, 'name'], model: [1, 'model'] }, null), i0.ɵprd(2048, null, i3.NgControl, null, [i3.NgModel]), i0.ɵdid(16384, null, 0, i3.NgControlStatus, [i3.NgControl], null, null), (_l()(), i0.ɵted(null, ['\n        '])), (_l()(), i0.ɵted(null, ['\n        '])), (_l()(),
            i0.ɵeld(0, null, null, 1, 'button', [['class', 'btn btn-primary'],
                ['type', 'submit']], null, null, null, null, null)), (_l()(), i0.ɵted(null, ['Find'])), (_l()(), i0.ɵted(null, ['\n    '])), (_l()(), i0.ɵted(null, ['\n    '])), (_l()(), i0.ɵeld(0, null, null, 0, 'hr', [], null, null, null, null, null)), (_l()(), i0.ɵted(null, ['\n    '])), (_l()(), i0.ɵeld(0, null, null, 7, 'div', [['class',
                'row']], null, null, null, null, null)),
        (_l()(), i0.ɵted(null, ['\n        '])), (_l()(), i0.ɵeld(0, null, null, 4, 'div', [['class', 'col-md-12']], null, null, null, null, null)), (_l()(), i0.ɵted(null, ['\n            '])), (_l()(), i0.ɵand(16777216, null, null, 1, null, View_SearchComponent_1)), i0.ɵdid(802816, null, 0, i4.NgForOf, [i0.ViewContainerRef, i0.TemplateRef, i0.IterableDiffers], { ngForOf: [0,
                'ngForOf'] }, null), (_l()(), i0.ɵted(null, ['\n        '])),
        (_l()(), i0.ɵted(null, ['\n    '])), (_l()(), i0.ɵted(null, ['\n']))], function (_ck, _v) {
        var _co = _v.component;
        var currVal_15 = '';
        _ck(_v, 14, 0, currVal_15);
        var currVal_16 = 'content';
        var currVal_17 = '';
        _ck(_v, 17, 0, currVal_16, currVal_17);
        var currVal_18 = _co.foods;
        _ck(_v, 33, 0, currVal_18);
    }, function (_ck, _v) {
        var currVal_0 = i0.ɵnov(_v, 5).ngClassUntouched;
        var currVal_1 = i0.ɵnov(_v, 5).ngClassTouched;
        var currVal_2 = i0.ɵnov(_v, 5).ngClassPristine;
        var currVal_3 = i0.ɵnov(_v, 5).ngClassDirty;
        var currVal_4 = i0.ɵnov(_v, 5).ngClassValid;
        var currVal_5 = i0.ɵnov(_v, 5).ngClassInvalid;
        var currVal_6 = i0.ɵnov(_v, 5).ngClassPending;
        _ck(_v, 2, 0, currVal_0, currVal_1, currVal_2, currVal_3, currVal_4, currVal_5, currVal_6);
        var currVal_7 = (i0.ɵnov(_v, 14).required ? '' : null);
        var currVal_8 = i0.ɵnov(_v, 19).ngClassUntouched;
        var currVal_9 = i0.ɵnov(_v, 19).ngClassTouched;
        var currVal_10 = i0.ɵnov(_v, 19).ngClassPristine;
        var currVal_11 = i0.ɵnov(_v, 19).ngClassDirty;
        var currVal_12 = i0.ɵnov(_v, 19).ngClassValid;
        var currVal_13 = i0.ɵnov(_v, 19).ngClassInvalid;
        var currVal_14 = i0.ɵnov(_v, 19).ngClassPending;
        _ck(_v, 12, 0, currVal_7, currVal_8, currVal_9, currVal_10, currVal_11, currVal_12, currVal_13, currVal_14);
    });
}
export function View_SearchComponent_Host_0(_l) {
    return i0.ɵvid(0, [(_l()(), i0.ɵeld(0, null, null, 1, 'app-search', [], null, null, null, View_SearchComponent_0, RenderType_SearchComponent)),
        i0.ɵdid(49152, null, 0, i2.SearchComponent, [i1.ActivatedRoute, i5.FoodService,
            i6.SearchService], null, null)], null, null);
}
export var SearchComponentNgFactory = i0.ɵccf('app-search', i2.SearchComponent, View_SearchComponent_Host_0, {}, {}, []);
