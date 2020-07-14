function createItem(id, name, price, img) {
            return { id, name, price, img }
        }

function initNewCatalog(settings) {
	const element = {
		items: [],

		ids: settings.ids,
		names: settings.names,
		prices: settings.prices,
		imgs: settings.imgs,
		container: settings.container,
		template: settings.template,

		init() {
			this._initCatalog();
			this._render();
		},

		_initCatalog() {
			this.items = this.names.map((name, index) => createItem(this.ids[index], name, this.prices[index], this.imgs[index]));
		},

		_render() {
			let str = '';
			this.items.forEach((el) => {
				str += this.template(el.name, el.price, el.img);
			});
			document.querySelector(this.container).innerHTML = str;
		}
	}
	element.init();
	return element;
}