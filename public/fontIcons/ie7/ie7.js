/* To avoid CSS expressions while still supporting IE 7 and IE 6, use this script */
/* The script tag referencing this file must be placed before the ending body tag. */

/* Use conditional comments in order to target IE 7 and older:
	<!--[if lt IE 8]><!-->
	<script src="ie7/ie7.js"></script>
	<!--<![endif]-->
*/

(function() {
	function addIcon(el, entity) {
		var html = el.innerHTML;
		el.innerHTML = '<span style="font-family: \'icomoon\'">' + entity + '</span>' + html;
	}
	var icons = {
		'me-menu-access': '&#xe930;',
		'me-BarChart': '&#xe92d;',
		'me-DonutChart': '&#xe92e;',
		'me-ShowChart': '&#xe92f;',
		'me-Shield': '&#xe92c;',
		'me-Arrow-Left': '&#xe92b;',
		'me-Tick-Square': '&#xe92a;',
		'me-Shield-Done': '&#xe928;',
		'me-Wallet': '&#xe929;',
		'me-Password': '&#xe927;',
		'me-Lock-outlined': '&#xe926;',
		'me-close_FILL0_wght400_GRAD0_opsz48-11': '&#xe900;',
		'me-close_FILL0_wght400_GRAD0_opsz48-21': '&#xe901;',
		'me-done_white_18dp-2': '&#xe902;',
		'me-error': '&#xe903;',
		'me-refresh_black_24dp-2': '&#xe905;',
		'me-warning': '&#xe906;',
		'me-Eye': '&#xe908;',
		'me-Eye-closed': '&#xe909;',
		'me-Caret-down': '&#xe90a;',
		'me-Calendar': '&#xe90b;',
		'me-Chat': '&#xe90c;',
		'me-Delete': '&#xe90d;',
		'me-Edit': '&#xe90e;',
		'me-Filter-3': '&#xe90f;',
		'me-Filter': '&#xe910;',
		'me-Paper-Fail': '&#xe911;',
		'me-Paper-Negative': '&#xe912;',
		'me-Paper-Plus': '&#xe913;',
		'me-Paper': '&#xe914;',
		'me-Search': '&#xe915;',
		'me-Compress': '&#xe916;',
		'me-expand-right': '&#xe917;',
		'me-expand': '&#xe918;',
		'me-resize': '&#xe919;',
		'me-lock': '&#xe91a;',
		'me-search': '&#xe91b;',
		'me-trash': '&#xe91c;',
		'me-user': '&#xe91d;',
		'me-download': '&#xe91e;',
		'me-exclamation-circle': '&#xe91f;',
		'me-info-circle': '&#xe920;',
		'me-minus-square': '&#xe921;',
		'me-plus-square': '&#xe922;',
		'me-settings': '&#xe923;',
		'me-times-square': '&#xe924;',
		'me-upload': '&#xe925;',
		'0': 0
		},
		els = document.getElementsByTagName('*'),
		i, c, el;
	for (i = 0; ; i += 1) {
		el = els[i];
		if(!el) {
			break;
		}
		c = el.className;
		c = c.match(/me-[^\s'"]+/);
		if (c && icons[c[0]]) {
			addIcon(el, icons[c[0]]);
		}
	}
}());
