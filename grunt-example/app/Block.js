(function (global) {
	var Block = function (items) {
		items = items || [];
		this.contrainer = items;
	};

	Block.prototype.has = function (item) {
		return this.contrainer.indexOf(item) != -1;
	};

	Block.prototype.add = function (item) {
		return this.contrainer.push(item);
	};

	Block.prototype.getSize = function () {
		return this.contrainer.length;
	};

	global.Block = Block;
})(typeof window === 'undefined' ? global : window);
