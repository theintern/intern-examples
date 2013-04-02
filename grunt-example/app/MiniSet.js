var MiniSet = function (items) {
	items = items || [];
	this.exSet = new Set(items);
};

MiniSet.prototype.has = function (item) {
	return this.exSet.has(item);
};

MiniSet.prototype.add = function (item) {
	return this.exSet.add(item);
};

MiniSet.prototype.getSize = function () {
	return this.exSet.size;
};
