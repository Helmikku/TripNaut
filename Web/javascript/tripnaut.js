// ------------------------------------------------- //
// ------------------- FONCTIONS ------------------- //
// ------------------------------------------------- //


	function createElement(tag,attributes,children,interactive,event,handler) {
		var element = document.createElement(tag);
		if (attributes != null) {
			for (var i = 0;i < attributes.length;i++) {
				element.setAttribute(attributes[i].name, attributes[i].value);
			}
		}
		if (children != null) {
			for (var i = 0;i < children.length;i++) {
				element.appendChild(children[i]);
			}
		}
		if (interactive) {
			element.addEventListener(event, handler, false);
		}
		return element;
	}

	function pageOffsetTop(element) {
		var pageOffsetTop = element.offsetTop;
		while (element.offsetParent != null) {
			element = element.offsetParent;
			pageOffsetTop += element.offsetTop - element.scrollTop;
		}
		return pageOffsetTop;
	}

	function pageOffsetLeft(element) {
		var pageOffsetLeft = element.offsetLeft;
		while (element.offsetParent != null) {
			element = element.offsetParent;
			pageOffsetLeft += element.offsetLeft - element.scrollLeft;
		}
		return pageOffsetLeft;
	}



// ------------------------------------------------- //
// --------------------- PANEL --------------------- //
// ------------------------------------------------- //


	// --- INSTANCE ---
	function Panel (element,positions) {
		this.tabs = [];
		this.currentSelectedTab = null;
		this.hidden = true;
		this.DOMElement = element;
		this.DOMPositions = positions;
	}

	// --- PROPTOTYPE ---
	Panel.prototype.addTab = function (children,nav) {
		var tab = new Tab(this,this.tabs.length,children,nav);
		this.tabs.push(tab);
		this.DOMElement.appendChild(tab.DOMElement);
	}
	
	Panel.prototype.clearTabs = function () {
		this.tabs = [];
		this.DOMElement.innerHTML = '';
	}
	
	Panel.prototype.hide = function () {
		if (!this.hidden) {
			this.move(this.DOMPositions[0][0],this.DOMPositions[0][1],this.DOMPositions[0][2],this.DOMPositions[0][3]);
			this.hidden = true;
		}
	}
	
	Panel.prototype.move = function(top,right,bottom,left) {
		if (top != null) {
			this.DOMElement.style.top = top + 'px';
		}
		if (right != null) {
			this.DOMElement.style.right = right + 'px';
		}
		if (bottom != null) {
			this.DOMElement.style.bottom = bottom + 'px';
		}
		if (left != null) {
			this.DOMElement.style.left = left + 'px';
		}
	}
	
	Panel.prototype.show = function() {
		if (this.hidden) {
			this.move(this.DOMPositions[1][0],this.DOMPositions[1][1],this.DOMPositions[1][2],this.DOMPositions[1][3]);
			this.hidden = false;
		}
	}



// ------------------------------------------------- //
// ---------------------- TAB ---------------------- //
// ------------------------------------------------- //


	// --- INSTANCE ---
	function Tab (panel,index,children,nav) {
		this.panel = panel;
		this.index = index;
		if (nav != null) {
			var tab = this;
			var handler = function(e) {
				if (tab.panel.hidden) {
					tab.select();
					tab.panel.show();
				} else if (tab.panel.currentSelectedTab != tab) {
					tab.select();
				} else {
					tab.panel.hide();
				}
			}
			var child = createElement('div',[{name: 'class', value: 'nav'}],[nav],true,'click',handler);
			children.push(child);
		}
		this.DOMElement = createElement('div',[{name: 'class', value: ('tab n'+index)}],children,false);
	}

	// --- PROPTOTYPE ---
	Tab.prototype.select = function () {
		if (this.panel.currentSelectedTab != null) {
			this.panel.currentSelectedTab.DOMElement.style.zIndex = 0;
		}
		this.panel.currentSelectedTab = this;
		this.panel.currentSelectedTab.DOMElement.style.zIndex = 1;
	}