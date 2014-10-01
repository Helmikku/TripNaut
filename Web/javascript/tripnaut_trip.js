// TIMElement, MAPElement, NOTElement ?
// load trip : document.getElementById('aside') et document.getElementById('menu')

// tripnaut_maps : loadPoints et getPointById
function loadPoints(country_id) {
	var xhr = new XMLHttpRequest();
	xhr.onreadystatechange = function() {
		if (xhr.readyState == 4 && xhr.status == 200) {
			//loader.style.display = 'none';
			var response = JSON.parse(xhr.responseText);
			if (response.got) {
				console.log(response.points);
			} else {
				alert(response.error);
			}
		} else if (xhr.readyState < 4) {
			//loader.style.display = 'block';
		}
	};
	xhr.open('POST', '/api/world/get/points', true);
	xhr.setRequestHeader('Content-Type', 'application/x-www-form-urlencoded');
	xhr.send('country_id=' + country_id);
}
function searchPoints(text,block,list) {
	var xhr = new XMLHttpRequest();
	xhr.onreadystatechange = function() {
		if (xhr.readyState == 4 && xhr.status == 200) {
			//loader.style.display = 'none';
			var response = JSON.parse(xhr.responseText);
			if (response.found) {
				var points = [];
				for (var i = 0;i < response.points.length;i++) {
					points.push(new POI(response.points[i].id,response.points[i].title,response.points[i].teaser,[response.points[i].Lat,response.points[i].Lng]));
				}
				for (var i = 0;i < points.length;i++) {
					(function (i) {
						var handler = function(e) { block.addPoint(points[i]); block.showOnPanel(); };
						list.appendChild(createElement('p',[{name: 'class', value: 'point'}],[document.createTextNode(points[i].title)],true,'click',handler));
					}) (i);
				}
				list.appendChild(createElement('p',[{name: 'class', value: 'point'}],[document.createTextNode('Not in the list ?')],false));
			} else {
				alert(response.error);
			}
		} else if (xhr.readyState < 4) {
			//loader.style.display = 'block';
		}
	};
	xhr.open('POST', '/api/world/search', true);
	xhr.setRequestHeader('Content-Type', 'application/x-www-form-urlencoded');
	xhr.send('text=' + text);
}


// ------------------------------------------------- //
// ------------------- VARIABLES ------------------- //
// ------------------------------------------------- //


	// --- DIMENSIONS ---
	var dayHeight = 240;
	var dayUnits = 24;
	var unitHeight = dayHeight / dayUnits;
	var nightHeight = 40;

	// --- ANIMATIONS ---
	var currentTrip = null;
	var currentTripOffset = null;
	var currentCreatedBlock = null;
	var currentDisplacedBlock = null;
	var currentResizedBlock = null;
	var currentUnit = null;
	var handler = null;
	document.addEventListener('mouseup', function(e) {
		if (currentTrip != null) {
			currentTrip.TIMElement.removeEventListener('mousemove',handler ,false);
			currentTrip = null;
		}
		currentTripOffset = null;
		if (currentCreatedBlock != null) {
			currentCreatedBlock.select();
			currentCreatedBlock.showOnPanel();
			currentCreatedBlock = null;
		}
		currentDisplacedBlock = null;
		currentResizedBlock = null;
		currentUnit = null;
		handler = null;
	}, false);



// ------------------------------------------------- //
// ------------------- FONCTIONS ------------------- //
// ------------------------------------------------- //


	function buildTrip(data,edition,time,menu,panel) {
		var nauts = {};
		for (var i = 0;i < data.nauts.length;i++) {
			nauts[data.nauts[i].id] = new Naut (data.nauts[i].id,data.nauts[i].login,data.nauts[i].role,null);
		}
		if (nauts[user.id]) { user.role = nauts[user.id].role; }
		if (user.role == 0) { edition = false; }
			user.panel.tabs.splice(1);
		
		// gestion du cache :)
		for (var i = 0;i < data.points.length;i++) {
			loadedPOIs[data.points[i].id] = new POI (data.points[i].id,data.points[i].title,data.points[i].teaser,[(data.points[i].Lat / 1000000),(data.points[i].Lng / 1000000)]);
		}
		// Fin
		
		trip = new Trip(data.id,data.title,new Date(data.start.date.slice(0,10)),data.duration,JSON.parse(data.blocks),data.locked,data.locker_id,data.creator_id,data.administration,nauts,edition,true,new Panel(panel,[[null,null,null,-200],[null,null,null,0]]));
		trip.showOnTime(time);
		trip.buildMenu(menu);
		if (user.role > 0) {
			var list = createElement('div',[{name: 'class', value: 'comments'}],[],false);
			var input = createElement('input',[{name: 'type', value: 'text'}],[],false);
			var handler = function(e) { e.preventDefault(); trip.comment(input.value,list,'loader'); input.value = ''; };
			var form = createElement('form',[],[input,createElement('input',[{name: 'type', value: 'submit'},{name: 'value', value: 'Comment'}],[],false)],true,'submit',handler);
			user.panel.addTab([form,list],document.createTextNode('C'));
			loadComments(trip,0,list);
		}
	}

	function createTrip(trip_country_id,trip_title,trip_start,trip_duration,loader,time,menu,panel) {
		var xhr = new XMLHttpRequest();
		xhr.onreadystatechange = function() {
			if (xhr.readyState == 4 && xhr.status == 200) {
				//loader.style.display = 'none';
				var response = JSON.parse(xhr.responseText);
				if (response.created) {
					loadTrip(response.trip_id,true,time,menu,panel);
				} else {
					alert(response.error);
				}
			} else if (xhr.readyState < 4) {
				//loader.style.display = 'block';
			}
		};
		xhr.open('POST', '/api/trips/create', true);
		xhr.setRequestHeader('Content-Type', 'application/x-www-form-urlencoded');
		xhr.send('trip_country_id=' + trip_country_id + '&trip_title=' + trip_title + '&trip_start=' + trip_start + '&trip_duration=' + trip_duration);
	}

	function loadComments(trip,start,list) {
		var xhr = new XMLHttpRequest();
		xhr.onreadystatechange = function() {
			if (xhr.readyState == 4 && xhr.status == 200) {
				//loader.style.display = 'none';
				var response = JSON.parse(xhr.responseText);
				if (response.got) {
					for (var i = 0;i < response.comments.length;i++) {
						var comment = new Comment (trip,response.comments[i].naut_id,response.comments[i].body,new Date(response.comments[i].post_time.date),new Date (response.comments[i].edit_time.date));
							comment.showOnList(list,false);
					}
				} else {
					alert(response.error);
				}
			} else if (xhr.readyState < 4) {
				//loader.style.display = 'block';
			}
		};
		xhr.open('POST', '/api/trips/get/comments', true);
		xhr.setRequestHeader('Content-Type', 'application/x-www-form-urlencoded');
		xhr.send('trip_id=' + trip.id + '&start=' + start);
	}

	function loadTrip(trip_id,edition,time,menu,panel) {
		var xhr = new XMLHttpRequest();
		xhr.onreadystatechange = function() {
			if (xhr.readyState == 4 && xhr.status == 200) {
				//loader.style.display = 'none';
				var response = JSON.parse(xhr.responseText);
				if (response.got) {
					buildTrip(response.trip,edition,time,menu,panel);
				} else {
					alert(response.error);
				}
			} else if (xhr.readyState < 4) {
				//loader.style.display = 'block';
			}
		};
		xhr.open('POST', '/api/trips/get/trip', true);
		xhr.setRequestHeader('Content-Type', 'application/x-www-form-urlencoded');
		xhr.send('trip_id=' + trip_id);
	}



// ------------------------------------------------- //
// --------------------- TRIP ---------------------- //
// ------------------------------------------------- //


	// --- INSTANCE ---
	function Trip (id,title,start,duration,blocks,locked,locker_id,creator_id,administration,nauts,edition,vertical,panel) {
		this.id = id;
		this.title = title;
		this.start = start;
		this.duration = duration;
		this.events = [];
		this.stays = [];
		this.locked = locked;
		this.locker_id = locker_id;
		this.creator_id = creator_id;
		this.administration = administration;
		this.nauts = nauts;
		this.edition = edition;
		this.vertical = vertical;
		this.panel = panel;
		this.currentSelectedBlock = null;
		this.nights = 0;
		this.units = [];
		this.TIMElement = null;
		this.buildBlocks(blocks);
	}

	// --- PROTOTYPE ---
	Trip.prototype.addBlock = function(block) {
		var index = 0;
		if (block.type == 'Stay') {
			this.stays.push(block);
			this.nights += block.duration;
		} else {
			while (index < this.events.length && this.events[index].start < block.start) {
				index++;
			}
			this.events.splice(index,0,block);
			this.updateUnits(block.start,(block.start + block.duration),1);
		}
	}
	
	Trip.prototype.addListeners = function() {
		var trip = this;
		trip.TIMElement.addEventListener('click', function(e) { if (trip.currentSelectedBlock != null) { trip.currentSelectedBlock.deselect(); trip.panel.hide(); } }, false);
		if (trip.edition) {
			trip.TIMElement.addEventListener('mousedown', function(e) {
				if (trip.currentSelectedBlock == null) {
					trip.lock('loader');
					if (e.target.id == 'trip') {
						currentTrip = trip;
						if (trip.vertical) {
							currentTripOffset = pageOffsetTop(currentTrip.TIMElement);
							currentUnit = Math.floor((e.pageY - currentTripOffset) / unitHeight);
							handler = function(e) {
								var target = Math.floor((e.pageY - currentTripOffset) / unitHeight);
								currentCreatedBlock.resize(currentUnit,target);
							}
						} else {
							currentTripOffset = pageOffsetLeft(currentTrip.TIMElement);
							currentUnit = Math.floor((e.pageX - currentTripOffset) / unitHeight);
							handler = function(e) {
								var target = Math.floor((e.pageX - currentTripOffset) / unitHeight);
								currentCreatedBlock.resize(currentUnit,target);
							}
						}
						if (currentTrip.units[currentUnit] == 0) {
							currentCreatedBlock = new Tour (currentTrip,currentUnit,1,'Titre','Commentaires',[]);
							currentTrip.addBlock(currentCreatedBlock);
							currentCreatedBlock.showOnTime();
							currentTrip.TIMElement.addEventListener('mousemove', handler, false);
						}
					}
				}
			}, false);
		}
	}
	
	Trip.prototype.blocksToJSON = function() {
		var blocks = [];
		for (var i = 0;i < this.events.length;i++) {
			blocks.push(this.events[i].toJSON());
		}
		for (var i = 0;i < this.stays.length;i++) {
			blocks.push(this.stays[i].toJSON());
		}
		return '[' + blocks.join(',') + ']';
	}
	
	Trip.prototype.buildBlocks = function(data) {
		var limit = this.duration * dayUnits;
		for (var i = 0;i < limit;i++) {
			this.units[i] = 0;
		}
		for (var i = 0;i < data.length;i++) {
			if (data[i].type == 'Tour') {
				var block = new Tour (this,data[i].start,data[i].duration,data[i].title,data[i].comment,data[i].points);
			} else if (data[i].type == 'Move') {
				var block = new Move (this,data[i].start,data[i].duration,data[i].transportation,data[i].timetable,data[i].comment,data[i].points);
			} else if (data[i].type == 'Stay') {
				var block = new Stay (this,data[i].start,data[i].duration,data[i].booked,data[i].comment,data[i].points);
			}
			this.addBlock(block);
		}
		while (this.nights < (this.duration - 1)) {
			this.addBlock(new Stay (this,this.stays.length,1,false,'',[]));
		}
	}
	
	Trip.prototype.buildMenu = function(menu) {
		menu.innerHTML = '';
		var trip = this;
		if (this.edition) {
			if (this.locked == 1 && this.locker_id != user.id) {
				var lock = createElement('div',[{name: 'class', value: 'lock button'}],[document.createTextNode('Locked')],false);
				menu.appendChild(lock);
			} else {
				var handler = function(e) { trip.save('loader'); }
				var save = createElement('div',[{name: 'class', value: 'save button'}],[document.createTextNode('Save')],true,'click',handler);
				menu.appendChild(save);
				var settings = createElement('div',[{name: 'class', value: 'settings button'}],[document.createTextNode('Settings')],false);
				menu.appendChild(settings);
			}
			var handler = function(e) { trip.unlock('loader'); }
			var leave = createElement('div',[{name: 'class', value: 'leave button'}],[document.createTextNode('Leave')],true,'click',handler);
			menu.appendChild(leave);
		} else {
			if (user.role == 2) {
				var handler = function(e) { trip.edition = true; trip.showOnTime(time); trip.buildMenu(menu); }
				var edit = createElement('div',[{name: 'class', value: 'save button'}],[document.createTextNode('Edit')],true,'click',handler);
				menu.appendChild(edit);
			}
		}
	}
	
	Trip.prototype.pointsToJSON = function() {
		var points = [];
		for (var i = 0;i < this.events.length;i++) {
			for (var j = 0;j < this.events[i].points.length;j++) {
				points.push(this.events[i].points[j].id);
			}
		}
		for (var i = 0;i < this.stays.length;i++) {
			for (var j = 0;j < this.stays[i].points.length;j++) {
				points.push(this.stays[i].points[j].id);
			}
		}
		return '[' + points.join(',') + ']';
	}
	
	Trip.prototype.removeBlock = function(block) {
		if (block.type == 'Stay') {
			var index = this.stays.indexOf(block);
			if (index > -1) {
				this.stays.splice(index,1);
				this.nights -= block.duration;
			}
		} else {
			var index = this.events.indexOf(block);
			if (index > -1) {
				this.events.splice(index,1);
				this.updateUnits(block.start,(block.start + block.duration),0);
			}
		}
	}
	
	Trip.prototype.showOnTime = function(time) {
		time.innerHTML = '';
		this.TIMElement = createElement('div',[{name: 'id', value: 'trip'}],null,false);
		if (this.vertical) {
			this.TIMElement.style.height = (dayHeight * this.duration) + 'px';
		} else {
			this.TIMElement.style.width = (dayHeight * this.duration) + 'px';
		}
		if (this.locked == 1 && this.locker_id != user.id) {
			this.edition = false;
		}
		this.addListeners();
		var day = new Date(this.start.getTime());;
		for (var i = 0;i < this.duration;i++) {
			day.setDate(this.start.getDate() + i);
			this.TIMElement.appendChild(createElement('div',[{name: 'class', value: 'date'},{name: 'style', value: ('top:' + (i * dayHeight) + 'px;')}],[document.createTextNode(day.toLocaleDateString())],false));
		}
		for (var i = 0;i < this.events.length;i++) {
			this.events[i].showOnTime();
		}
		for (var i = 0;i < this.stays.length;i++) {
			this.stays[i].showOnTime();
		}
		time.appendChild(this.TIMElement);
	}
	
	Trip.prototype.updateUnits = function(start,limit,value) {
		for (var i = start;i < limit;i++) {
			this.units[i] = value;
		}
	}

	// --- AJAX ---
	Trip.prototype.comment = function(body,list,loader) {
		var trip = this;
		var xhr = new XMLHttpRequest();
		xhr.onreadystatechange = function() {
			if (xhr.readyState == 4 && xhr.status == 200) {
				//loader.style.display = 'none';
				var response = JSON.parse(xhr.responseText);
				if (response.commented) {
					var comment = new Comment (trip,user.id,body,new Date(),new Date());
						comment.showOnList(list,true);
				} else {
					alert(response.error);
				}
			} else if (xhr.readyState < 4) {
				//loader.style.display = 'block';
			}
		};
		xhr.open('POST', '/api/trips/comment', true);
		xhr.setRequestHeader('Content-Type', 'application/x-www-form-urlencoded');
		xhr.send('comment_trip_id=' + this.id + '&comment_body=' + body);
	}
	
	Trip.prototype.lock = function(loader) {
		var trip = this;
		if (this.locked != 1) {
			var xhr = new XMLHttpRequest();
			xhr.onreadystatechange = function() {
				if (xhr.readyState == 4 && xhr.status == 200) {
					//loader.style.display = 'none';
					var response = JSON.parse(xhr.responseText);
					if (response.locked) {
						trip.locked = 1;
						trip.locker_id = response.locker_id;
						if (trip.locker_id != user.id) {
							alert(trip.nauts[trip.locker_id] + ' has locked this trip.');
							trip.showOnTime(time);
							trip.buildMenu(menu);
						}
					} else {
						alert(response.error);
					}
				} else if (xhr.readyState < 4) {
					//loader.style.display = 'block';
				}
			};
			xhr.open('POST', '/api/trips/lock', true);
			xhr.setRequestHeader('Content-Type', 'application/x-www-form-urlencoded');
			xhr.send('trip_id=' + this.id);
		}
	}
	
	Trip.prototype.save = function(loader) {
		var trip = this;
		var xhr = new XMLHttpRequest();
		xhr.onreadystatechange = function() {
			if (xhr.readyState == 4 && xhr.status == 200) {
				//loader.style.display = 'none';
				var response = JSON.parse(xhr.responseText);
				if (response.saved) {
					alert('Sauvegardé !');
				} else {
					alert(response.error);
				}
			} else if (xhr.readyState < 4) {
				//loader.style.display = 'block';
			}
		};
		xhr.open('POST', '/api/trips/save', true);
		xhr.setRequestHeader('Content-Type', 'application/x-www-form-urlencoded');
		xhr.send('trip_id=' + this.id + '&trip_blocks=' + this.blocksToJSON() + '&trip_points=' + this.pointsToJSON());
	}
	
	Trip.prototype.unlock = function(loader) {
		var trip = this;
		var xhr = new XMLHttpRequest();
		xhr.onreadystatechange = function() {
			if (xhr.readyState == 4 && xhr.status == 200) {
				//loader.style.display = 'none';
				var response = JSON.parse(xhr.responseText);
				if (response.unlocked) {
					trip.locked = 2;
					trip.edition = false;
					trip.showOnTime(time);
					trip.buildMenu(menu);
				} else {
					alert(response.error);
				}
			} else if (xhr.readyState < 4) {
				//loader.style.display = 'block';
			}
		};
		xhr.open('POST', '/api/trips/unlock', true);
		xhr.setRequestHeader('Content-Type', 'application/x-www-form-urlencoded');
		xhr.send('trip_id=' + this.id);
	}



// ------------------------------------------------- //
// --------------------- BLOCK --------------------- //
// ------------------------------------------------- //


	// --- INSTANCE ---
	function Block () {}


	// --- PROPTOTYPE ---
	Block.prototype.addPoint = function(point) {
		this.points.push(point);
	}
	
	Block.prototype.buildPanelCloseButton = function() {
		var block = this;
		var handler = function(e) { block.deselect(); block.trip.panel.hide(); }
		return createElement('div',[{name: 'class', value: 'close button'}],[document.createTextNode('X')],true,'click',handler);
	}
	
	Block.prototype.buildPanelCommentForm = function() {
		var block = this;
		if (block.trip.edition) {
			var comment = createElement('textarea',[{name: 'class', value: 'comment'}],[document.createTextNode(block.comment)],false);
				comment.addEventListener('change', function(e) {
					block.trip.lock('loader');
					block.comment = comment.value;
				}, false);
			return comment;
		} else {
			return createElement('p',[{name: 'class', value: 'comment'}],[document.createTextNode(this.comment)],false);
		}
	}
	
	Block.prototype.buildPanelPointsList = function() {
		var block = this;
		var list = createElement('div',[{name: 'class', value: 'points list'}],[],false);
		if (block.trip.edition) {
			for (var i = 0;i < block.points.length;i++) {
				(function (i) {
					var showHandler = function(e) { block.points[i].showOnPanel(); }
					var eraseHandler = function(e) { block.removePoint(block.points[i]); block.showOnPanel(); }
					list.appendChild(createElement('p',[{name: 'class', value: 'point'}],[createElement('span',[{name: 'class', value: 'title'}],[document.createTextNode(block.points[i].title)],true,'click',showHandler),createElement('span',[{name: 'class', value: 'eraser'}],[document.createTextNode('Delete')],true,'click',eraseHandler)],false));
				}) (i);
			}
		} else {
			for (var i = 0;i < block.points.length;i++) {
				(function (i) {
					var handler = function(e) { block.points[i].showOnPanel(); }
					list.appendChild(createElement('p',[{name: 'class', value: 'point'}],[createElement('span',[{name: 'class', value: 'title'}],[document.createTextNode(block.points[i].title)],true,'click',handler)],false));
				}) (i);
			}
		}
		return list;
	}
	
	Block.prototype.buildPanelPointsSearch = function() {
		var block = this;
		var search = createElement('div',[{name: 'class', value: 'points search'}],[],false);
		if (block.trip.edition) {
			var result = createElement('div',[{name: 'class', value: 'result'}],[],false);
			var input = createElement('input',[{name: 'type', value: 'text'},{name: 'value', value: 'Add an point'}],[],false);
				input.addEventListener('input', function(e) {
					block.trip.lock('loader');
					result.innerHTML = '';
					if (input.value.length > 1) {
						searchPoints(input.value,block,result);
					}
				}, false);
			search.appendChild(input);
			search.appendChild(result);
		}
		return search;
	}
	
	Block.prototype.buildPanelNextButton = function(list) {
		var index = list.indexOf(this);
		if (index < (list.length - 1)) {
			var handler = function(e) { list[index + 1].select(); list[index + 1].showOnPanel(); }
			return createElement('div',[{name: 'class', value: 'next button'}],[document.createTextNode('>')],true,'click',handler);
		} else {
			return createElement('div',[{name: 'class', value: 'next button disabled'}],[document.createTextNode('>')],false);
		}
	}
	
	Block.prototype.buildPanelPreviousButton = function(list) {
		var index = list.indexOf(this);
		if (index > 0) {
			var handler = function(e) { list[index - 1].select(); list[index - 1].showOnPanel(); }
			return createElement('div',[{name: 'class', value: 'previous button'}],[document.createTextNode('<')],true,'click',handler);
		} else {
			return createElement('div',[{name: 'class', value: 'previous button disabled'}],[document.createTextNode('<')],false);
		}
	}
	
	Block.prototype.buildPoints = function(data) {
		for (var i = 0;i < data.length;i++) {
			this.points.push(getPointById(data[i].id));
		}
	}
	
	Block.prototype.deselect = function() {
		if (this.trip.currentSelectedBlock != null) {
			this.trip.currentSelectedBlock.TIMElement.classList.remove('selected');
			this.trip.currentSelectedBlock = null;
		}
	}
	
	Block.prototype.removePoint = function(point) {
		var index = this.points.indexOf(point);
		if (index > -1) {
			this.points.splice(index,1);
		}
	}
	
	Block.prototype.select = function() {
		if (this.trip.currentSelectedBlock != null) {
			this.trip.currentSelectedBlock.TIMElement.classList.remove('selected');
		}
		this.trip.currentSelectedBlock = this;
		this.trip.currentSelectedBlock.TIMElement.classList.add('selected');
	}



// ------------------------------------------------- //
// ----------------- BLOCK > EVENT ----------------- //
// ------------------------------------------------- //


	// --- INSTANCE ---
	function Event () {}


	// --- PROPTOTYPE ---
	Event.prototype = Object.create(Block.prototype);
	
	Event.prototype.addListeners = function(event) {
		event.TIMElement.addEventListener('click', function(e) { e.stopPropagation(); event.select(); event.showOnPanel(); }, false);
		if (event.trip.edition) {
			event.TIMElement.addEventListener('mousedown', function(e) {
				if (currentCreatedBlock == null && currentResizedBlock == null) {
					e.stopPropagation();
					currentTrip = event.trip;
					currentTrip.lock('loader');
					if (event.trip.vertical) {
						currentTripOffset = pageOffsetTop(currentTrip.TIMElement);
						handler = function(e) {
							var target = Math.floor((e.pageY - currentTripOffset) / unitHeight);
							if (target >= 0) {
								currentDisplacedBlock.move(target);
							}
						}
					} else {
						currentTripOffset = pageOffsetLeft(currentTrip.TIMElement);
						handler = function(e) {
							var target = Math.floor((e.pageX - currentTripOffset) / unitHeight);
							if (target >= 0) {
								currentDisplacedBlock.move(target);
							}
						}
					}
					currentDisplacedBlock = event;
					currentTrip.TIMElement.addEventListener('mousemove', handler, false);
				}
			}, false);
			var topresizer = createElement('div',[{name: 'class', value: 'resizer top'}],null,false);
				topresizer.addEventListener('mousedown', function(e) {
					e.stopPropagation();
					currentTrip = event.trip;
					currentTrip.lock('loader');
					if (event.trip.vertical) {
						currentTripOffset = pageOffsetTop(currentTrip.TIMElement);
						handler = function(e) {
							var target = Math.floor((e.pageY - currentTripOffset) / unitHeight);
							currentResizedBlock.resize(currentUnit,target);
						}
					} else {
						currentTripOffset = pageOffsetLeft(currentTrip.TIMElement);
						handler = function(e) {
							var target = Math.floor((e.pageX - currentTripOffset) / unitHeight);
							currentResizedBlock.resize(currentUnit,target);
						}

					}
					currentUnit = event.start + event.duration - 1;
					currentResizedBlock = event;
					currentTrip.TIMElement.addEventListener('mousemove', handler, false);
				}, false);
			event.TIMElement.appendChild(topresizer);
			var downresizer = createElement('div',[{name: 'class', value: 'resizer down'}],null,false);
				downresizer.addEventListener('mousedown', function(e) {
					e.stopPropagation();
					currentTrip = event.trip;
					currentTrip.lock('loader');
					if (event.trip.vertical) {
						currentTripOffset = pageOffsetTop(currentTrip.TIMElement);
						handler = function(e) {
							var target = Math.floor((e.pageY - currentTripOffset) / unitHeight);
							currentResizedBlock.resize(currentUnit,target);
						}

					} else {
						currentTripOffset = pageOffsetLeft(currentTrip.TIMElement);
						handler = function(e) {
							var target = Math.floor((e.pageX - currentTripOffset) / unitHeight);
							currentResizedBlock.resize(currentUnit,target);
						}
					}
					currentUnit = event.start;
					currentResizedBlock = event;
					currentTrip.TIMElement.addEventListener('mousemove', handler, false);
				}, false);
			event.TIMElement.appendChild(downresizer);
			var eraser = createElement('div',[{name: 'class', value: 'eraser'}],[document.createTextNode('X')],false);
				eraser.addEventListener('click', function(e) {
					e.stopPropagation();
					if (confirm('Are you sure you want to delete this event ?')) {
						event.erase();
						event.trip.panel.hide();
					}
				}, false);
			event.TIMElement.appendChild(eraser);
		}
	}
	Event.prototype.buildPanelTypeSelect = function() {
		var event = this;
		var type = createElement('div',[{name: 'class', value: 'type'}],[],false);
		if (event.trip.edition) {
			var types = ['Tour','Plane','Train','Car','Boat'];
			var options = [];
			for (var i = 0;i < types.length;i++) {
				var option = createElement('option',[{name: 'value', value: types[i]}],[document.createTextNode(types[i])],false);
				if (event.type == 'Move' && event.transportation == types[i]) {
					option.selected = true;
				}
				options.push(option);
			}
			var select = createElement('select',[],options,false);
				select.addEventListener('change', function(e) {
					event.erase();
					if (select.options[select.selectedIndex].value == 'Tour') {
						var tour = new Tour(event.trip,event.start,event.duration,'Title',event.comment,event.points);
						tour.trip.addBlock(tour);
						tour.showOnTime();
						tour.select();
						tour.showOnPanel();
					} else {
						var move = new Move(event.trip,event.start,event.duration,select.options[select.selectedIndex].value,['',''],event.comment,event.points);
						move.trip.addBlock(move);
						move.showOnTime();
						move.select();
						move.showOnPanel();
					}
				}, false);
			type.appendChild(select);
		}
		return type;
	}
	Event.prototype.erase = function() {
		this.deselect();
		this.trip.removeBlock(this);
		this.TIMElement.parentNode.removeChild(this.TIMElement);
	}
	Event.prototype.move = function(target) {
		if (target + this.duration <= this.trip.units.length) {
			this.trip.removeBlock(this);
			var empty = true;
			var cursor = 0;
			while (empty && cursor < this.duration) {
				if (this.trip.units[target + cursor] == 1) {empty = false;}
				else {cursor++;}
			}
			if (empty) {
				this.start = target;
				this.updateTIMElement();
			}
			this.trip.addBlock(this);
		}
	}
	Event.prototype.resize = function(origin,target) {
		this.trip.removeBlock(this);
		var start = origin;
		var end = origin;
		if (origin < target) {
			while (this.trip.units[end + 1] == 0 && end < target) {
				end++;
			}
		} else {
			while (this.trip.units[start - 1] == 0 && start > target) {
				start--;
			}
		}
		this.start = start;
		this.duration = end-start+1;
		this.trip.addBlock(this);
		this.updateTIMElement();
	}
	Event.prototype.updateTIMElement = function() {
		if (this.trip.vertical) {
			this.TIMElement.style.height = (this.duration * unitHeight - 1) + 'px';
			this.TIMElement.style.top = (unitHeight * this.start) + 'px';
		} else {
			this.TIMElement.style.width = (this.duration * unitHeight - 1) + 'px';
			this.TIMElement.style.left = (unitHeight * this.start) + 'px';
		}
		this.trip.TIMElement.appendChild(this.TIMElement);
	}



// ------------------------------------------------- //
// -------------- BLOCK > EVENT > MOVE ------------- //
// ------------------------------------------------- //


	// --- INSTANCE ---
	function Move (trip,start,duration,transportation,timetable,comment,points) {
		this.trip = trip;
		this.type = 'Move';
		this.start = start;
		this.duration = duration;
		this.transportation = transportation;
		this.timetable = timetable;
		this.comment = comment;
		this.points = [];
		this.TIMElement = null;
		this.NOTElement = null;
		this.buildPoints(points);
	}


	// --- PROPTOTYPE ---
	Move.prototype = Object.create(Event.prototype);
	
	Move.prototype.buildPanelTimetableForm = function() {
		if (this.trip.edition) {
			var move = this;
			var departure = createElement('input',[{name: 'type', value: 'text'},{name: 'value', value: move.timetable[0]}],[],false);
				departure.addEventListener('input', function(e) {
					move.trip.lock('loader');
					move.timetable[0] = departure.value;
					move.updateNOTElement();
				}, false);
			var arrival = createElement('input',[{name: 'type', value: 'text'},{name: 'value', value: move.timetable[1]}],[],false);
				arrival.addEventListener('input', function(e) {
					move.trip.lock('loader');
					move.timetable[1] = arrival.value;
					move.updateNOTElement();
				}, false);
		} else {
			var departure = createElement('p',[],[document.createTextNode(this.timetable[0])],false);
			var arrival = createElement('p',[],[document.createTextNode(this.timetable[1])],false);
		}
		return createElement('div',[{name: 'class', value: 'timetable'}],[departure,arrival],false);
	}
	
	Move.prototype.showOnMap = function() {
		
	}
	
	Move.prototype.showOnPanel = function() {
		var children = [
			this.buildPanelCloseButton(),
			this.buildPanelPreviousButton(this.trip.events),
			this.buildPanelNextButton(this.trip.events),
			this.buildPanelTypeSelect(),
			this.buildPanelTimetableForm(),
			this.buildPanelCommentForm(),
			this.buildPanelPointsSearch(),
			this.buildPanelPointsList()
		];
		this.trip.panel.clearTabs();
		this.trip.panel.addTab(children,null);
		this.trip.panel.show();
	}
	
	Move.prototype.showOnTime = function() {
		this.NOTElement = createElement('div',[{name: 'class', value: 'summary'}],[createElement('p',null,[document.createTextNode(this.timetable[0] + ' > ' + this.timetable[1])],false)],false);
		this.TIMElement = createElement('div',[{name: 'class', value: ('block event move ' + this.transportation.toLowerCase())}],[this.NOTElement],false);
		if (this.trip.vertical) {
			this.TIMElement.style.height = (this.duration * unitHeight - 1) + 'px';
			this.TIMElement.style.top = (unitHeight * this.start) +'px';
		} else {
			this.TIMElement.style.width = (this.duration * unitHeight - 1) + 'px';
			this.TIMElement.style.left = (unitHeight * this.start) + 'px';
		}
		this.addListeners(this);
		this.trip.TIMElement.appendChild(this.TIMElement);
	}
	
	Move.prototype.toJSON = function() {
		var points = [];
		for (var i = 0;i < this.points.length;i++) {
			points.push(this.points[i].toJSON());
		}
		return '{"type":' + JSON.stringify(this.type) + ',"start":' + this.start + ',"duration":' + this.duration + ',"transportation":' + JSON.stringify(this.transportation) + ',"timetable":' + JSON.stringify(this.timetable) + ',"comment":' + JSON.stringify(this.comment) + ',"points":[' + points.join(',') + ']}';
	}
	Move.prototype.updateNOTElement = function() {
		this.NOTElement.innerHTML = '';
		this.NOTElement.appendChild(createElement('p',null,[document.createTextNode(this.timetable[0] + ' > ' + this.timetable[1])],false));
	}



// ------------------------------------------------- //
// -------------- BLOCK > EVENT > TOUR ------------- //
// ------------------------------------------------- //

	// --- INSTANCE ---
	function Tour (trip,start,duration,title,comment,points) {
		this.trip = trip;
		this.type = 'Tour';
		this.start = start;
		this.duration = duration;
		this.title = title;
		this.comment = comment;
		this.points = [];
		this.TIMElement = null;
		this.NOTElement = null;
		this.buildPoints(points);
	}

	// --- PROPTOTYPE ---
	Tour.prototype = Object.create(Event.prototype);
	
	Tour.prototype.buildPanelTitleForm = function() {
		if (this.trip.edition) {
			var tour = this;
			var title = createElement('input',[{name: 'type', value: 'text'},{name: 'value', value: tour.title}],[],false);
				title.addEventListener('input', function(e) {
					tour.trip.lock('loader');
					tour.title = title.value;
					tour.updateNOTElement();
				}, false);
			return title;
		} else {
			return createElement('h2',[],[document.createTextNode(this.title)],false);
		}
	}
	
	Tour.prototype.showOnMap = function() {
		
	}
	
	Tour.prototype.showOnPanel = function() {
		var children = [
			this.buildPanelCloseButton(),
			this.buildPanelPreviousButton(this.trip.events),
			this.buildPanelNextButton(this.trip.events),
			this.buildPanelTypeSelect(),
			this.buildPanelTitleForm(),
			this.buildPanelCommentForm(),
			this.buildPanelPointsSearch(),
			this.buildPanelPointsList()
		];
		this.trip.panel.clearTabs();
		this.trip.panel.addTab(children,null);
		this.trip.panel.show();
	}
	
	Tour.prototype.showOnTime = function() {
		this.NOTElement = createElement('div',[{name: 'class', value: 'summary'}],[createElement('p',null,[document.createTextNode(this.title+' ('+this.points.length+' points, '+(this.duration * 24 / dayUnits)+' hours)')],false)],false);
		this.TIMElement = createElement('div',[{name: 'class', value: 'block event tour'}],[this.NOTElement],false);
		if (this.trip.vertical) {
			this.TIMElement.style.height = (this.duration * unitHeight - 1) + 'px';
			this.TIMElement.style.top = (unitHeight * this.start) +'px';
		} else {
			this.TIMElement.style.width = (this.duration * unitHeight - 1) + 'px';
			this.TIMElement.style.left = (unitHeight * this.start) + 'px';
		}
		this.addListeners(this);
		this.trip.TIMElement.appendChild(this.TIMElement);
	}
	
	Tour.prototype.toJSON = function() {
		var points = [];
		for (var i = 0;i < this.points.length;i++) {
			points.push(this.points[i].toJSON());
		}
		return '{"type":' + JSON.stringify(this.type) + ',"start":' + this.start + ',"duration":' + this.duration + ',"title":' + JSON.stringify(this.title) + ',"comment":' + JSON.stringify(this.comment) + ',"points":[' + points.join(',') + ']}';
	}
	
	Tour.prototype.updateNOTElement = function() {
		this.NOTElement.innerHTML = '';
		this.NOTElement.appendChild(createElement('p',null,[document.createTextNode(this.title+' ('+this.points.length+' points, '+(this.duration * 24 / dayUnits)+' hours)')],false));
	}



// ------------------------------------------------- //
// ----------------- BLOCK > STAY ------------------ //
// ------------------------------------------------- //

	// --- INSTANCE ---
	function Stay (trip,start,duration,booked,comment,points) {
		this.trip = trip;
		this.type = 'Stay';
		this.start = start;
		this.duration = duration;
		this.booked = booked;
		this.comment = comment;
		this.points = [];
		this.TIMElement = null;
		this.NOTElement = null;
		this.buildPoints(points);
	}

	// --- PROPTOTYPE ---
	Stay.prototype = Object.create(Block.prototype);
	
	Stay.prototype.addListeners = function(stay) {
		stay.TIMElement.addEventListener('click', function(e) { e.stopPropagation(); stay.select(); stay.showOnPanel(); }, false);
	}
	
	Stay.prototype.buildPanelDurationSelect = function() {
		var stay = this;
		var duration = createElement('div',[{name: 'class', value: 'duration'}],[],false);
		if (stay.trip.edition) {
			var limit = stay.trip.duration - stay.start;
			var options = [];
			for (var i = 1;i < limit;i++) {
				var option = createElement('option',[{name: 'value', value: i}],[document.createTextNode(i)],false);
				if (stay.duration == i) {
					option.selected = true;
				}
				options.push(option);
			}
			var select = createElement('select',[],options,false);
				select.addEventListener('change', function(e) {
					stay.setDuration(select.options[select.selectedIndex].value);
				}, false);
			duration.appendChild(select);
		}
		return duration;
	}
	
	Stay.prototype.erase = function() {
		var index = this.trip.stays.indexOf(this);
		this.deselect();
		this.trip.removeBlock(this);
		this.TIMElement.parentNode.removeChild(this.TIMElement);
		for (var i = index;i < this.trip.stays.length;i++) {
			this.trip.stays[i].move(- this.duration);
		}
		while (this.trip.nights < (this.trip.duration - 1)) {
			var stay = new Stay (this.trip,this.trip.stays.length,1,false,'',[]);
			this.trip.addBlock(stay);
			stay.showOnTime();
		}
	}
	
	Stay.prototype.move = function(days) {
		var stays = this.TIMElement.childNodes;
		for (var i = 0;i < stays.length;i++) {
			if (this.trip.vertical) {
				var origin = parseInt(stays[i].style.top);
				var target = origin + (days * dayHeight);
				stays[i].style.top = target + 'px';
			} else {
				var origin = parseInt(stays[i].style.left);
				var target = origin + (days * dayHeight);
				stays[i].style.left = target + 'px';
			}
		}
		this.start += days;
	}
	
	Stay.prototype.setDuration = function(duration) {
		var index = this.trip.stays.indexOf(this) + 1;
		for (var i = index;i < this.trip.stays.length;i++) {
			this.trip.stays[i].move((duration - this.duration));
		}
		this.duration = duration;
		this.updateTIMElement();
	}
	
	Stay.prototype.showOnMap = function() {
		
	}
	
	Stay.prototype.showOnPanel = function() {
		var children = [
			this.buildPanelCloseButton(),
			this.buildPanelPreviousButton(this.trip.stays),
			this.buildPanelNextButton(this.trip.stays),
			this.buildPanelDurationSelect(),
			this.buildPanelCommentForm(),
			this.buildPanelPointsSearch(),
			this.buildPanelPointsList()
		];
		this.trip.panel.clearTabs();
		this.trip.panel.addTab(children,null);
		this.trip.panel.show();
	}
	
	Stay.prototype.showOnTime = function() {
		this.TIMElement = createElement('div',[{name: 'class', value: 'block stay'}],[],false);
		for (var i = 0;i < this.duration;i++) {
			var night = createElement('div',[{name: 'class', value: 'night'}],[],false);
			if (this.trip.vertical) {
				night.style.top = ((dayHeight * (this.start + 1 + i)) - (nightHeight / 2)) +'px';
			} else {
				night.style.left = ((dayHeight * (this.start + 1 + i)) - (nightHeight / 2)) + 'px';
			}
			this.TIMElement.appendChild(night);
		}
		this.addListeners(this);
		this.trip.TIMElement.appendChild(this.TIMElement);
	}
	
	Stay.prototype.toJSON = function() {
		var points = [];
		for (var i = 0;i < this.points.length;i++) {
			points.push(this.points[i].toJSON());
		}
		return '{"type":' + JSON.stringify(this.type) + ',"start":' + this.start + ',"duration":' + this.duration + ',"booked":' + JSON.stringify(this.booked) + ',"comment":' + JSON.stringify(this.comment) + ',"points":[' + points.join(',') + ']}';
	}
	
	Stay.prototype.updateTIMElement = function() {
		this.TIMElement.innerHTML = '';
		for (var i = 0;i < this.duration;i++) {
			var night = createElement('div',[{name: 'class', value: 'night'}],[],false);
			if (this.trip.vertical) {
				night.style.top = ((dayHeight * (this.start + 1 + i)) - (nightHeight / 2)) +'px';
			} else {
				night.style.left = ((dayHeight * (this.start + 1 + i)) - (nightHeight / 2)) + 'px';
			}
			this.TIMElement.appendChild(night);
		}
	}
	
	Stay.prototype.updateNOTElement = function() {
		
	}



// ------------------------------------------------- //
// -------------------- COMMENT -------------------- //
// ------------------------------------------------- //

	// --- INSTANCE ---
	function Comment (trip,naut_id,body,post_time,edit_time) {
		this.trip = trip;
		this.naut_id = naut_id;
		this.body = body;
		this.post_time = post_time;
		this.edit_time = edit_time;
	}

	// --- PROPTOTYPE ---
	Comment.prototype.showOnList = function(list,beginning) {
		var comment = createElement('p',[{name: 'class', value: 'comment'}],[document.createTextNode(this.trip.nauts[this.naut_id].login + ': ' + this.body)],false);
		if (beginning) {
			list.insertBefore(comment,list.childNodes[0]);
		} else {
			list.appendChild(comment);
		}
	}