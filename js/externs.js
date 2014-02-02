var ROOT_WEB;
var ROOT;
var ROOT_ABS;
var MEDIAS;
var MEDIAS_TEMP;
var SERVICES;
var twitter_share;
var homeHtmlTitle;
var lookHtmlTitle;
var IE = false;
var LANGUAGE;

var locale_drop;
var locale_browse;
var locale_cancel;
var locale_error_minSize;
var locale_error_type;
var locale_error_maxWeight;
var locale_pushTop;
var locale_pushBottom;
var errorEmail;
var errorRequired;
var errorEqual;
var errorMinLength;
var carouselData = {};
var MarkerClusterer = {};
var InfoWindow;
var console;

var exports;
var module;
var vec3;
var mat4;
var global;

var Modernizr = {};

var $M = {};

var _tag = function() {};

window.History = {
	"Adapter": {
		"bind": function () {},
		"trigger": function () {},
		"extractEventData": function () {},
		"onDomLoad": function () {}
	},
	"getState": {
		"cleanUrl": {},
		"hash" : {}
	},
	"pushState": function () {}
}

var $f = {
	"init": function () {}
}

var Base64 = {
	"_keyStr": {},
	"encode": function () {},
	"decode": function () {},
	"_utf8_encode": function () {},
	"_utf8_decode": function () {}
};

var log = {
	"history": {
		"0": {
			"0": {}
		}
	}
};

var swfobject = {
	"registerObject": function () {},
	"getObjectById": function () {},
	"embedSWF": function () {},
	"switchOffAutoHideShow": function () {},
	"ua": {
		"w3": {},
		"pv": {
			"0": {},
			"1": {},
			"2": {}
		},
		"wk": {},
		"ie": {},
		"win": {},
		"mac": {}
	},
	"getFlashPlayerVersion": function () {},
	"hasFlashPlayerVersion": function () {},
	"createSWF": function () {},
	"showExpressInstall": function () {},
	"removeSWF": function () {},
	"createCSS": function () {},
	"addDomLoadEvent": function () {},
	"addLoadEvent": function () {},
	"getQueryParamValue": function () {},
	"expressInstallCallback": function () {}
};

var qq = {
	"extend": function () {},
	"indexOf": function () {},
	"getUniqueId": function () {},
	"attach": function () {},
	"detach": function () {},
	"preventDefault": function () {},
	"insertBefore": function () {},
	"remove": function () {},
	"contains": function () {},
	"toElement": function () {},
	"css": function () {},
	"hasClass": function () {},
	"addClass": function () {},
	"removeClass": function () {},
	"setText": function () {},
	"children": function () {},
	"getByClass": function () {},
	"obj2url": function () {},
	"FileUploaderBasic": function () {},
	"FileUploader": function () {},
	"UploadDropZone": function () {},
	"UploadButton": function () {},
	"UploadHandlerAbstract": function () {},
	"UploadHandlerForm": function () {},
	"UploadHandlerXhr": function () {}
}

var $ = {
	"fn": {
		"init": function () {},
		"selector": {},
		"jquery": {},
		"size": function () {},
		"get": function () {},
		"pushStack": function () {},
		"setArray": function () {},
		"each": function () {},
		"index": function () {},
		"attr": function () {},
		"css": function () {},
		"text": function () {},
		"wrapAll": function () {},
		"wrapInner": function () {},
		"wrap": function () {},
		"append": function () {},
		"prepend": function () {},
		"before": function () {},
		"after": function () {},
		"end": function () {},
		"push": function () {},
		"sort": function () {},
		"splice": function () {},
		"find": function () {},
		"clone": function () {},
		"filter": function () {},
		"closest": function () {},
		"not": function () {},
		"add": function () {},
		"is": function () {},
		"hasClass": function () {},
		"val": function () {},
		"html": function () {},
		"replaceWith": function () {},
		"eq": function () {},
		"slice": function () {},
		"map": function () {},
		"andSelf": function () {},
		"domManip": function () {},
		"extend": function () {},
		"parent": function () {},
		"parents": function () {},
		"next": function () {},
		"prev": function () {},
		"nextAll": function () {},
		"prevAll": function () {},
		"siblings": function () {},
		"children": function () {},
		"contents": function () {},
		"appendTo": function () {},
		"prependTo": function () {},
		"insertBefore": function () {},
		"insertAfter": function () {},
		"replaceAll": function () {},
		"removeAttr": function () {},
		"addClass": function () {},
		"removeClass": function () {},
		"toggleClass": function () {},
		"remove": function () {},
		"empty": function () {},
		"data": function () {},
		"removeData": function () {},
		"queue": function () {},
		"dequeue": function () {},
		"bind": function () {},
		"one": function () {},
		"unbind": function () {},
		"trigger": function () {},
		"triggerHandler": function () {},
		"toggle": function () {},
		"hover": function () {},
		"ready": function () {},
		"live": function () {},
		"die": function () {},
		"blur": function () {},
		"focus": function () {},
		"load": function () {},
		"resize": function () {},
		"scroll": function () {},
		"unload": function () {},
		"click": function () {},
		"dblclick": function () {},
		"mousedown": function () {},
		"mouseup": function () {},
		"mousemove": function () {},
		"mouseover": function () {},
		"mouseout": function () {},
		"mouseenter": function () {},
		"mouseleave": function () {},
		"change": function () {},
		"select": function () {},
		"submit": function () {},
		"keydown": function () {},
		"keypress": function () {},
		"keyup": function () {},
		"error": function () {},
		"_load": function () {},
		"serialize": function () {},
		"serializeArray": function () {},
		"ajaxStart": function () {},
		"ajaxStop": function () {},
		"ajaxComplete": function () {},
		"ajaxError": function () {},
		"ajaxSuccess": function () {},
		"ajaxSend": function () {},
		"show": function () {},
		"hide": function () {},
		"_toggle": function () {},
		"fadeTo": function () {},
		"animate": function () {},
		"stop": function () {},
		"slideDown": function () {},
		"slideUp": function () {},
		"slideToggle": function () {},
		"fadeIn": function () {},
		"fadeOut": function () {},
		"offset": function () {},
		"position": function () {},
		"offsetParent": function () {},
		"scrollLeft": function () {},
		"scrollTop": function () {},
		"innerHeight": function () {},
		"outerHeight": function () {},
		"height": function () {},
		"innerWidth": function () {},
		"outerWidth": function () {},
		"width": function () {},
		"_focus": function () {},
		"scrollParent": function () {},
		"zIndex": function () {},
		"disableSelection": function () {},
		"enableSelection": function () {},
		"ajaxSubmit": function () {},
		"ajaxForm": function () {},
		"ajaxFormUnbind": function () {},
		"formToArray": function () {},
		"formSerialize": function () {},
		"fieldSerialize": function () {},
		"fieldValue": function () {},
		"clearForm": function () {},
		"clearInputs": function () {},
		"clearFields": function () {},
		"resetForm": function () {},
		"enable": function () {},
		"selected": function () {},
		"translation": function () {},
		"mCustomScrollbar": {
			"scrollInertia": {},
			"set_height": {},
			"init": function() {},
			"update": function() {},
			"scrolling": function() {},
			"scroll": function() {},
			"scrollTo": function() {},
			"callbacks": function() {}
		},
		"validate": function () {},
		"valid": function () {},
		"removeAttrs": function () {},
		"rules": function () {},
		"validateDelegate": function () {},
		"mousewheel": function () {},
		"unmousewheel": function () {}
	},
	"extend": function () {},
	"noConflict": function () {},
	"isFunction": function () {},
	"isArray": function () {},
	"isXMLDoc": function () {},
	"globalEval": function () {},
	"nodeName": function () {},
	"each": function () {},
	"prop": function () {},
	"className": {
		"add": function () {},
		"remove": function () {},
		"has": function () {}
	},
	"swap": function () {},
	"css": function () {},
	"curCSS": function () {},
	"clean": function () {},
	"attr": function () {},
	"trim": function () {},
	"makeArray": function () {},
	"inArray": function () {},
	"merge": function () {},
	"unique": function () {},
	"grep": function () {},
	"map": function () {},
	"browser": {
		"version": {},
		"safari": {},
		"opera": {},
		"msie": {},
		"mozilla": {}
	},
	"cache": {
		"1": {
			"events": {
				"unload": {
					"1": function () {}
				},
				"load": {
					"2": function () {}
				}
			},
			"handle": function () {}
		},
		"2": {
			"events": {
				"mouseup": {
					"11": function () {}
				}
			},
			"handle": function () {}
		},
		"4": function () {},
		"5": function () {}
	},
	"data": function () {},
	"removeData": function () {},
	"queue": function () {},
	"dequeue": function () {},
	"find": function () {},
	"filter": function () {},
	"expr": {
		"order": {
			"0": {},
			"1": {},
			"2": {},
			"3": {}
		},
		"match": {
			"ID": function () {},
			"CLASS": function () {},
			"NAME": function () {},
			"ATTR": function () {},
			"TAG": function () {},
			"CHILD": function () {},
			"POS": function () {},
			"PSEUDO": function () {}
		},
		"attrMap": {
			"class": {},
			"for": {}
		},
		"attrHandle": {
			"href": function () {}
		},
		"relative": {
			"+": function () {},
			">": function () {},
			"": function () {},
			"~": function () {}
		},
		"find": {
			"ID": function () {},
			"NAME": function () {},
			"TAG": function () {},
			"CLASS": function () {}
		},
		"preFilter": {
			"CLASS": function () {},
			"ID": function () {},
			"TAG": function () {},
			"CHILD": function () {},
			"ATTR": function () {},
			"PSEUDO": function () {},
			"POS": function () {}
		},
		"filters": {
			"enabled": function () {},
			"disabled": function () {},
			"checked": function () {},
			"selected": function () {},
			"parent": function () {},
			"empty": function () {},
			"has": function () {},
			"header": function () {},
			"text": function () {},
			"radio": function () {},
			"checkbox": function () {},
			"file": function () {},
			"password": function () {},
			"submit": function () {},
			"image": function () {},
			"reset": function () {},
			"button": function () {},
			"input": function () {},
			"hidden": function () {},
			"visible": function () {},
			"animated": function () {},
			"data": function () {},
			"focusable": function () {},
			"tabbable": function () {},
			"ui-selectmenu": function () {},
			"ui-mouse": function () {},
			"ui-checkbox": function () {},
			"blank": function () {},
			"filled": function () {},
			"unchecked": function () {},
			"ui-menu": function () {}
		},
		"setFilters": {
			"first": function () {},
			"last": function () {},
			"even": function () {},
			"odd": function () {},
			"lt": function () {},
			"gt": function () {},
			"nth": function () {},
			"eq": function () {}
		},
		"filter": {
			"PSEUDO": function () {},
			"CHILD": function () {},
			"ID": function () {},
			"TAG": function () {},
			"CLASS": function () {},
			"ATTR": function () {},
			"POS": function () {}
		},
		":": {
			"enabled": function () {},
			"disabled": function () {},
			"checked": function () {},
			"selected": function () {},
			"parent": function () {},
			"empty": function () {},
			"has": function () {},
			"header": function () {},
			"text": function () {},
			"radio": function () {},
			"checkbox": function () {},
			"file": function () {},
			"password": function () {},
			"submit": function () {},
			"image": function () {},
			"reset": function () {},
			"button": function () {},
			"input": function () {},
			"hidden": function () {},
			"visible": function () {},
			"animated": function () {},
			"data": function () {},
			"focusable": function () {},
			"tabbable": function () {},
			"ui-selectmenu": function () {},
			"ui-mouse": function () {},
			"ui-checkbox": function () {},
			"blank": function () {},
			"filled": function () {},
			"unchecked": function () {},
			"ui-menu": function () {}
		}
	},
	"multiFilter": function () {},
	"dir": function () {},
	"nth": function () {},
	"sibling": function () {},
	"event": {
		"add": function () {},
		"guid": {},
		"global": {
			"unload": {},
			"load": {},
			"scriptload": {},
			"mouseup": {}
		},
		"remove": function () {},
		"trigger": function () {},
		"handle": function () {},
		"props": {
			"0": {},
			"1": {},
			"2": {},
			"3": {},
			"4": {},
			"5": {},
			"6": {},
			"7": {},
			"8": {},
			"9": {},
			"10": {},
			"11": {},
			"12": {},
			"13": {},
			"14": {},
			"15": {},
			"16": {},
			"17": {},
			"18": {},
			"19": {},
			"20": {},
			"21": {},
			"22": {},
			"23": {},
			"24": {},
			"25": {},
			"26": {},
			"27": {},
			"28": {},
			"29": {},
			"30": {},
			"31": {},
			"32": {},
			"33": {}
		},
		"fix": function () {},
		"proxy": function () {},
		"special": {
			"ready": {
				"setup": function () {},
				"teardown": function () {}
			},
			"mouseenter": {
				"setup": function () {},
				"teardown": function () {}
			},
			"mouseleave": {
				"setup": function () {},
				"teardown": function () {}
			},
			"focusin": {
				"setup": function () {},
				"teardown": function () {},
				"handler": function () {}
			},
			"focusout": {
				"setup": function () {},
				"teardown": function () {},
				"handler": function () {}
			},
			"mousewheel": {
				"setup": function () {},
				"teardown": function () {}
			}
		},
		"specialAll": {
			"live": {
				"setup": function () {},
				"teardown": function () {}
			}
		},
		"triggered": {}
	},
	"Event": function () {},
	"isReady": {},
	"readyList": function () {},
	"ready": function () {},
	"support": {
		"leadingWhitespace": {},
		"tbody": {},
		"objectAll": {},
		"htmlSerialize": {},
		"style": {},
		"hrefNormalized": {},
		"opacity": {},
		"cssFloat": {},
		"scriptEval": {},
		"noCloneEvent": {},
		"boxModel": {},
		"minHeight": {},
		"selectstart": {},
		"offsetFractions": {}
	},
	"props": {
		"for": {},
		"class": {},
		"float": {},
		"cssFloat": {},
		"styleFloat": {},
		"readonly": {},
		"maxlength": {},
		"cellspacing": {},
		"rowspan": {},
		"tabindex": {}
	},
	"get": function () {},
	"getScript": function () {},
	"getJSON": function () {},
	"post": function () {},
	"ajaxSetup": function () {},
	"ajaxSettings": {
		"url": {},
		"global": {},
		"type": {},
		"contentType": {},
		"processData": {},
		"async": {},
		"xhr": function () {},
		"accepts": {
			"xml": {},
			"html": {},
			"script": {},
			"json": {},
			"text": {},
			"_default": {}
		}
	},
	"lastModified": function () {},
	"ajax": function () {},
	"done": function () {},
	"handleError": function () {},
	"active": {},
	"httpSuccess": function () {},
	"httpNotModified": function () {},
	"httpData": function () {},
	"param": function () {},
	"speed": function () {},
	"easing": {
		"linear": function () {},
		"swing": function () {}
	},
	"timers": function () {},
	"fx": function () {},
	"offset": {
		"initialize": function () {},
		"bodyOffset": function () {}
	},
	"xLazyLoader": function () {},
	"boxModel": {},
	"toJSON": function () {},
	"evalJSON": function () {},
	"secureEvalJSON": function () {},
	"quoteString": function () {},
	"ui": {
		"version": {},
		"keyCode": {
			"ALT": {},
			"BACKSPACE": {},
			"CAPS_LOCK": {},
			"COMMA": {},
			"COMMAND": {},
			"COMMAND_LEFT": {},
			"COMMAND_RIGHT": {},
			"CONTROL": {},
			"DELETE": {},
			"DOWN": {},
			"END": {},
			"ENTER": {},
			"ESCAPE": {},
			"HOME": {},
			"INSERT": {},
			"LEFT": {},
			"MENU": {},
			"NUMPAD_ADD": {},
			"NUMPAD_DECIMAL": {},
			"NUMPAD_DIVIDE": {},
			"NUMPAD_ENTER": {},
			"NUMPAD_MULTIPLY": {},
			"NUMPAD_SUBTRACT": {},
			"PAGE_DOWN": {},
			"PAGE_UP": {},
			"PERIOD": {},
			"RIGHT": {},
			"SHIFT": {},
			"SPACE": {},
			"TAB": {},
			"UP": {},
			"WINDOWS": {}
		},
		"plugin": {
			"add": function () {},
			"call": function () {}
		},
		"hasScroll": function () {},
		"isOverAxis": function () {},
		"isOver": function () {},
		"selectmenu": function () {},
		"mouse": function () {},
		"position": {
			"fit": {
				"left": function () {},
				"top": function () {}
			},
			"flip": {
				"left": function () {},
				"top": function () {}
			},
			"flipfit": {
				"left": function () {},
				"top": function () {}
			}
		},
		"checkbox": function () {},
		"menu": function () {}
	},
	"cleanData": function () {},
	"widget": function () {},
	"Widget": {
		namespace: {},
		name: {}
	},
	"position": {
		"scrollbarWidth": function () {},
		"getScrollInfo": function () {}
	},
	"fieldValue": function () {},
	"toggle3DByDefault": function () {},
	"toggleDisabledByDefault": function () {},
	"validator": {
		"setDefaults": function() {}
	},
	"format": function () {}
};

var define = {};

var namespace = {};
var name = {};
var jQuery = {};
var JSON = {};