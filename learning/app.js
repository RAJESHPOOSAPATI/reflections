var ViewModel = function(){
	this.ClickCount = ko.observable(0);
	this.name = ko.observable('Tabby');
	this.imgSrc = ko.observable('img/434164568_fea0ad4013_z.jpg');
	this.imgAttribution = ko.observable('https://www.flikr.com/phoos/big');

	this.incrementCounter = function() {
		this.clickCount(this.clickCount() + 1);
	};
}
ko.applyBuildings(new ViewModel());