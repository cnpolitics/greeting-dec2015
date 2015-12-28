(function() {
	'use strict';
	
	
	
	class Addressee {
		/* Public properties */
		laFirsName: string;
		laLastName: string;
		zhFullName: string;
		
		/* Contructor */
		constructor(urlQuery: string) {
			this.laFirsName = this.getValueByKey(urlQuery, 'laf');
			this.laLastName = this.getValueByKey(urlQuery, 'lal');
			this.zhFullName = this.getValueByKey(urlQuery, 'zhn');
			
			// console.log(this.laFirsName);
			// console.log(this.laLastName);
			// console.log(this.zhFullName);
		}
		
		/* Private methods */
		private getValueByKey(str: string, key: string) {
			let matches = str.match(new RegExp(key+'=([^&]*)'));
			return matches ? matches[1] : null;
		}
		
		/* Public methods */
		fillSalu(name: string, nodeID: string) {
			let $laSalu = document.getElementById(nodeID);
			$laSalu.innerHTML = name;
		}
	}
	
	
	
	let laSalu = '',
	    zhSalu = '';
	
	var urlQuery = window.location.search;
	urlQuery = decodeURIComponent(urlQuery);
	// console.log(urlQuery);
	
	var addr = new Addressee(urlQuery);
	// console.log(addr.laFirsName);
	// console.log(addr.laLastName);
	// console.log(addr.zhFullName);
	
	if (addr.laFirsName) laSalu = ' ' + addr.laFirsName;
	if (addr.laLastName) laSalu = ' ' + addr.laLastName;
	if (addr.zhFullName) zhSalu = addr.zhFullName;
	
	addr.fillSalu(laSalu, 'la-salu');
	addr.fillSalu(zhSalu, 'zh-salu');

})();
