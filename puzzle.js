var wrapper = document.querySelector('.puzzle-wrapper');
var cons = document.querySelector('.logger .log-wrapper');

var source = [];
var custom = [];
function initGrid () {
	/*for (var i = 0; i < 9; i++) {
		source[i] = [];
		for (var j = 0; j < 9; j++) {
			source[i][j] = 0;
		}
	}*/
	// source = puzzlefy(source);

	// Sample Sudoku board
	// Easy 
	/*source[0] = [0, 6, 0, 3, 0, 0, 4, 1, 0];
	source[1] = [1, 8, 5, 0, 2, 0, 7, 0, 3];
	source[2] = [0, 0, 0, 5, 0, 0, 9, 2, 8];
	source[3] = [0, 9, 6, 8, 0, 2, 0, 5, 7];
	source[4] = [2, 1, 0, 0, 4, 0, 3, 0, 0];
	source[5] = [0, 5, 0, 0, 0, 6, 0, 8, 4];
	source[6] = [5, 0, 0, 0, 0, 4, 6, 0, 0];
	source[7] = [0, 0, 0, 6, 1, 3, 5, 4, 0];
	source[8] = [0, 0, 9, 0, 0, 7, 0, 0, 0];*/
	// Medium 
	/*source[0] = [6, 0, 9, 0, 0, 8, 3, 0, 2];
	source[1] = [0, 5, 0, 6, 2, 0, 7, 0, 0];
	source[2] = [0, 0, 7, 9, 0, 0, 0, 0, 0];
	source[3] = [5, 0, 0, 0, 1, 0, 2, 6, 0];
	source[4] = [0, 6, 0, 0, 0, 5, 0, 0, 0];
	source[5] = [7, 0, 0, 0, 0, 2, 0, 0, 0];
	source[6] = [9, 7, 6, 0, 0, 0, 0, 0, 1];
	source[7] = [4, 1, 5, 0, 0, 0, 6, 3, 7];
	source[8] = [2, 0, 0, 0, 0, 0, 5, 9, 4];*/
	// Hard
	/*source[0] = [4, 0, 0, 3, 1, 9, 0, 0, 6];
	source[1] = [0, 0, 1, 0, 0, 0, 9, 0, 0];
	source[2] = [0, 6, 7, 4, 0, 0, 0, 2, 1];
	source[3] = [7, 0, 0, 0, 5, 0, 0, 0, 4];
	source[4] = [0, 0, 0, 1, 4, 2, 0, 0, 0];
	source[5] = [2, 0, 0, 0, 7, 0, 0, 0, 8];
	source[6] = [0, 2, 0, 0, 0, 0, 0, 6, 0];
	source[7] = [0, 0, 4, 0, 0, 0, 8, 0, 0];
	source[8] = [1, 0, 0, 5, 0, 8, 0, 0, 7];*/
	// Advanced
	/*source[0] = [5, 0, 2, 0, 0, 9, 0, 0, 0];
	source[1] = [3, 0, 0, 0, 0, 0, 0, 0, 7];
	source[2] = [0, 0, 0, 2, 6, 0, 0, 0, 0];
	source[3] = [7, 0, 0, 5, 0, 6, 0, 0, 0];
	source[4] = [0, 0, 0, 0, 0, 0, 1, 0, 0];
	source[5] = [0, 0, 0, 0, 2, 8, 0, 0, 9];
	source[6] = [0, 0, 0, 0, 0, 0, 0, 4, 0];
	source[7] = [0, 6, 0, 4, 0, 5, 3, 0, 0];
	source[8] = [0, 1, 0, 0, 3, 0, 6, 2, 0];*/
	// Expert
	/*source[0] = [1, 0, 0, 0, 2, 0, 0, 0, 3];
	source[1] = [0, 2, 0, 4, 0, 0, 0, 5, 0];
	source[2] = [0, 0, 5, 0, 0, 0, 6, 0, 0];
	source[3] = [0, 0, 0, 0, 0, 0, 0, 7, 0];
	source[4] = [3, 0, 0, 0, 6, 0, 0, 0, 1];
	source[5] = [0, 8, 0, 0, 0, 0, 0, 0, 0];
	source[6] = [0, 0, 8, 0, 0, 0, 2, 0, 0];
	source[7] = [0, 7, 0, 0, 0, 1, 0, 4, 0];
	source[8] = [6, 0, 0, 0, 3, 0, 0, 0, 9];*/
	// Master
	source[0] = [5, 0, 0, 2, 0, 0, 0, 4, 0];
	source[1] = [0, 0, 0, 6, 0, 3, 0, 0, 0];
	source[2] = [0, 3, 0, 0, 0, 9, 0, 0, 7];
	source[3] = [0, 0, 3, 0, 0, 7, 0, 0, 0];
	source[4] = [0, 0, 7, 0, 0, 8, 0, 0, 0];
	source[5] = [6, 0, 0, 0, 0, 0, 0, 2, 0];
	source[6] = [0, 8, 0, 0, 0, 0, 0, 0, 3];
	source[7] = [0, 0, 0, 4, 0, 0, 6, 0, 0];
	source[8] = [0, 0, 0, 1, 0, 0, 5, 0, 0];
	for (var i = 0; i < 9; i++) {
		custom[i] = [];
		for (var j = 0; j < 9; j++) {
			custom[i][j] = source[i][j];
		}
	}
}

function puzzlefy (matrix) {
	var size = 9;
	var mize = 3;
	var options = [1, 2, 3, 4, 5, 6, 7, 8, 9];
	var all = [];
	for (var q = 0; q < size*size; q++) {
		all[q] = q+1;
	}
	for (var p = 0; p < options.length; p++) {
		var n = options[p];
		
	}
	/*for (var i = 0; i < 9; i++) {
		for (var j = 0; j < 9; j++) {
			var temp = [];
			for (var z = 0; z < options.length; z++) {
				temp[z] = options[z];
			}
			var can = false;
			var value = temp[0];
			console.log(`Row: ${i}, Column ${j}`);
			do {
				var r = Math.floor(Math.random() * temp.length);
				value = temp[r];
				var found = false;

				// Searches for an equal value on this column, row, if it finds, removes the value from the possible values
				// Row
				if (!found)
				for (var a = 0; a < 9; a++) {
					if (value == matrix[a][j]) {
						found = true;
						temp.splice(r, 1);
						console.log(temp);
					}
				}
				// Column
				if (!found)
				for (var b = 0; b < 9; b++) {
					if (value == matrix[i][b]) {
						found = true;
						temp.splice(r, 1);
						console.log(temp);
					}
				}

				if (!found || temp.length == 0) {
					can = true;
					console.log(value);
				}
			} while (!can);

			matrix[i][j] = value;
		}
	}*/
	return matrix;
}

function renderGrid (element, matrix, candidacy) {
	initGrid();
	var grid = document.createElement('table');
	grid.className = 'sudoku-grid';
	for (var i = 0; i < 3; i++) {
		var row = document.createElement('tr');
		for (var j = 0; j < 3; j++) {

			var boxtd = document.createElement('td');
			var box = document.createElement('table');
			boxtd.className = 'sudoku-box';
			for (var x = 0; x < 3; x++) {
				var line = document.createElement('tr');
				for (var y = 0; y < 3; y++) {
					var cell = document.createElement('td');
					var ro = i*3 + x;
					var co = j*3 + y;
					if (candidacy) {
						cell.title = candidacy[ro][co];
					}
					var inside = document.createElement(matrix[ro][co] == 0 ? 'input' : 'span');
					inside.className = matrix[ro][co] == 0 ? 'cell-input' : 'cell-span';
					inside.innerHTML = matrix[ro][co] == 0 ? '' : matrix[ro][co];
					inside.type = 'number';
					inside.maxLength = '1';
					inside.min = '1';
					inside.max = '9';
					cell.appendChild(inside);
					line.appendChild(cell);
				}
				box.appendChild(line);
			}
			boxtd.appendChild(box);
			row.appendChild(boxtd);

		}
		grid.appendChild(row);
	}
	element.appendChild(grid);

}
renderGrid(wrapper, source);


function solve () {
	console.log('Testing it!');
	cons.innerHTML = " ";
	log('Starting validity test', '');
	var current = [];
	for (var i = 0; i < 9; i++) {
		current[i] = [];
		for (var j = 0; j < 9; j++) {
			current[i][j] = source[i][j];
		}
	}
	// Sets all possible candidate for each cell
	var candidacy = [];
	for (var i = 0; i < 9; i++) {
		candidacy[i] = [];
		for (var j = 0; j < 9; j++) {
			candidacy[i][j] = [];
			if ( source[i][j] == 0 ) {
				candidacy[i][j] = [1, 2, 3, 4, 5, 6, 7, 8, 9]
			} else {
				candidacy[i][j][0] = source[i][j];
			}
		}
	}
	var stop = false;
	var icandidacy = [];
	do {
		for (var i = 0; i < 9; i++) {
			icandidacy[i] = [];
			for (var j = 0; j < 9; j++) {
				icandidacy[i][j] = [];
				for (var c = 0; c < candidacy[i][j].length; c++) {
					icandidacy[i][j][c] = candidacy[i][j][c];
				}
			}
		}
		//console.log('Will now prune Candidacy');
		candidacy = pruneCandidacy(current, candidacy);
		//console.log('Will now linear Candidacy');
		candidacy = linearCandidacy(current, candidacy);
		candidacy = uniqueLinearity(current, candidacy);
		candidacy = mutualExclusivity(current, candidacy);
		//console.log(candidacy);
		//console.log('Will now unique');
		current = unique(current, candidacy);
		//console.log('Will now sole Candidate');
		current = soleCandidate(current, candidacy);
		stop = isSolved(current) || icandidacy.equals(candidacy);
		console.log(stop);
	} while(!stop)
	if (isSolved(current)) {
		if (isValid(current)) {
			log('Complete. This is a valid board!', 'ok');
		} else {
			log('Complete. This is an invalid board!', 'fail');
		}
		log('See filled board below', 'normal');
	} else {
		log('Could not solve this board.', 'fail');
	}
	renderGrid(cons, current, candidacy);
	log('Finished validity test', '');
	console.log(candidacy);
	console.log(current);
}
function isSolved (matrix) {
	for (var i = 0; i < 9; i++) {
		for (var j = 0; j < 9; j++) {
			if (matrix[i][j] == 0) {
				return false
			}
		}
	}
	return true;
}
function isValid (matrix) {
	for (var n = 1; n <= 9; n++) {
		//Check if there's only one instance of n per row
		for (var i = 0; i < 9; i++) {
			var count = 0;
			for (var j = 0; j < 9; j++) {
				if (matrix[i][j] == n) {
					count++;
				}
			}
			if (count != 1) {
				return false
			}
		}
		for (var j = 0; j < 9; j++) {
			var count = 0;
			for (var i = 0; i < 9; i++) {
				if (matrix[i][j] == n) {
					count++;
				}
			}
			if (count != 1) {
				return false
			}
		}
	}
	return true;
}
function pruneCandidacy (matrix, candidacy) {
	for (var i = 0; i < 9; i++) {
		for (var j = 0; j < 9; j++) {
			//if (candidacy[i][j].length > 0)
			for (var c = 0; c < candidacy[i][j].length; c++) {
				//Prune by Row
				//Run through the row to see if there's any candidates to be removed
				var candidate = candidacy[i][j][c];
				for (var y = 0; y < 9; y++) {
					if (y != i) {
						if (candidate == matrix[y][j] && candidate == candidacy[i][j][c]) {
							candidacy[i][j].splice(c, 1);
							c--;
						}
					}
				}
				//Prune by Column
				for (var x = 0; x < 9; x++) {
					if (x != j) {
						if (candidate == matrix[i][x] && candidate == candidacy[i][j][c]) {
							candidacy[i][j].splice(c, 1);
							c--;
						}
					}
				}
				//Prune by Box
				var boxy = Math.floor(i/3)*3;
				var boxx = Math.floor(j/3)*3;
				for (var y = boxy; y < boxy+3; y++) {
					for (var x = boxx; x < boxx+3; x++) {
						if (x != j && y != i) {
							if (candidate == matrix[y][x] && candidate == candidacy[i][j][c]) {
								candidacy[i][j].splice(c, 1);
								c--;
							}
						}
					}
				}
			}
		}
	}
	return candidacy;
}
function unique (matrix, candidacy) {
	for (var i = 0; i < 9; i++) {
		for (var j = 0; j < 9; j++) {
			if (candidacy[i][j].length == 1) {
				matrix[i][j] = candidacy[i][j][0];
			}
		}
	}
	return matrix;
}
function soleCandidate (matrix, candidacy) {
	var options = [1, 2, 3, 4, 5, 6, 7, 8, 9]

	for (var n = 0; n < options.length; n++) {
		//Checks row by row if a candidacy is the only possible one in its row
		for (var i = 0; i < 9; i++) {
			var count = 0;
			var where = 0;
			for (var j = 0; j < 9; j++) {
				if (candidacy[i][j].includes(n)) {
					count++;
					where = j;
				}
			}
			if (count == 1 && mayLay(matrix, i, where, n)) {
				//console.log(`row[${i}], column[${where}] is the only candidate in its row that can be a ${n}`);
				candidacy[i][where] = [];
				candidacy[i][where][0] = n;
				matrix[i][where] = n;
			}
		}
		//Checks column by column if a candidacy is the only possible one in its column
		for (var j = 0; j < 9; j++) {
			var count = 0;
			var where = 0;
			for (var i = 0; i < 9; i++) {
				if (candidacy[i][j].includes(n)) {
					count++;
					where = i;
				}
			}
			if (count == 1 && mayLay(matrix, where, j, n)) {
				//console.log(`row[${i}], column[${where}] is the only candidate in its row that can be a ${n}`);
				candidacy[where][j] = [];
				candidacy[where][j][0] = n;
				matrix[where][j] = n;
			}
		}
		//Checks box by box if a candidacy is the only possible one in its box
		//Box by Box
		for (var i = 0; i < 9; i+=3) {
			for (var j = 0; j < 9; j+=3) {
				var count = 0;
				var wherx = 0;
				var whery = 0;
				// console.log(`Checking from x: ${j}~${j+3},  y: ${i}~${i+3}`)
				for (var y = i; y < i+3; y++) {
					for (var x = j; x < j+3; x++) {
						if (candidacy[y][x].includes(n)) {
							count++;
							whery = y;
							wherx = x;
						}
					}
				}
				if (count == 1 && mayLay(matrix, whery, wherx, n)) {
					//console.log(`row[${i}], column[${where}] is the only candidate in its row that can be a ${n}`);
					candidacy[whery][wherx] = [];
					candidacy[whery][wherx][0] = n;
					matrix[whery][wherx] = n;
				}
			}
		}
	}
	return matrix;
}
function linearCandidacy (matrix, candidacy) {
	var options = [1, 2, 3, 4, 5, 6, 7, 8, 9]

	for (var n = 1; n <= options.length; n++) {
		for (var i = 0; i < 9; i+=3) {
			for (var j = 0; j < 9; j+=3) {
				var ally = [];
				var allx = [];
				var count = 0;
				var can = true;
				for (var y = i; y < i+3; y++) {
					for (var x = j; x < j+3; x++) {
						if (candidacy[y][x].length == 1 && candidacy[y][x][0] == n) {
							can = false;
						}
						else if (candidacy[y][x].length > 1 && candidacy[y][x].includes(n)) {
							ally[count] = y;
							allx[count] = x;
							count++;
						}
					}
				}
				if (can && count > 1) {
					var lirow = ally.homogeneous();
					var licol = allx.homogeneous();
					// Check if all the n candidates are in the same column
					if (licol) {
						//console.log(`Column ${allx[0]+1} can only hold a ${n} in: r${ally[0]+1}c${allx[0]+1} and r${ally[1]+1}c${allx[1]+1}`);
						//console.log(`Found a (column) linear candidacy in: r${ally[0]}c${allx[0]} and r${ally[1]}c${allx[1]} for ${n} `);
						var col = allx[0];
						for (var y = 0; y < 9; y++) {
							var canexpel = true;
							for (var a = 0; a < count; a++) {
								if ( allx[a] == col && ally[a] == y) {
									canexpel = false;
								}
							}
							if (canexpel) {
								candidacy[y][col].expel(n);
							}
						}
					}
					// Check if all the n candidates are in the same row
					if (lirow) {
						//console.log(`Row ${ally[0]+1} can only hold a ${n} in: r${ally[0]+1}c${allx[0]+1} and r${ally[1]+1}c${allx[1]+1}`);
						//console.log(`Found a (row) linear candidacy in: r${ally[0]}c${allx[0]} and r${ally[1]}c${allx[1]} for ${n} `);
						var row = ally[0];
						for (var x = 0; x < 9; x++) {
							var canexpel = true;
							for (var a = 0; a < count; a++) {
								if ( ally[a] == row && allx[a] == x) {
									canexpel = false;
								}
							}
							if (canexpel) {
								candidacy[row][x].expel(n);
							}
						}
					}
					if (licol || lirow) {
						for (var y = i; y < i+3; y++) {
							for (var x = j; x < j+3; x++) {
								var canexpel = true;
								for (var a = 0; a < count; a++) {
									if ( allx[a] == x && ally[a] == y) {
										canexpel = false;
									}
								}
								if (canexpel) {
									candidacy[y][x].expel(n);
								}
							}
						}
					}
				}
			}
		}
	}
	return candidacy;
}
function mutualExclusivity (matrix, candidacy) {
	///Hidden and naked pairs
	//Loop by option [1-9]
	//Loop by set(row, column, box)
	//When find an appearance of n on a cell's candidacy, store its position
	//For each n, loop through the remaining n's for this set, and check if their possible positions are equal to this one's
	//If so, create a match
	//Now, for each matched cell, expel all options that aren't n's matches
	//And for each cell from the set, that isn't this match, expel the options present on match
	var options = [1, 2, 3, 4, 5, 6, 7, 8, 9]

	//Row by row
	for (var i = 0; i < 9; i++) {
		var appearance = [];
		for (var n = 1; n <= options.length; n++) {
			var count = 0;
			appearance[n] = [];
			for (var j = 0; j < 9; j++) {
				if (candidacy[i][j].includes(n)) {
					appearance[n][count] = {};
					appearance[n][count].y = i;
					appearance[n][count].x = j;
					count++;
				}
			}
		}
		var match = [];
		var at = 0;
		for (var n = 1; n < options.length; n++) {
			match[at] = [];
			match[at][0] = n;
			var matched = false;
			for (var o = n+1; o < 9; o++) {
				var canmatch = true;
				if (appearance[n].length > 1) {
					for (var a = 0; a < appearance[n].length; a++) {
						if ( appearance[n].length == appearance[o].length
						  && appearance[n][a].y == appearance[o][a].y && appearance[n][a].x == appearance[o][a].x ) { }
						else {
							canmatch = false;
						}
					}
					if (canmatch) {
						matched = true;
						match[at].push(o);
					}
				}
			}
			if (matched) {
				at++;
			}
		}
		for (var e = 0; e < match.length; e++) {
			if (match[e].length > 1 && match[e].length == appearance[match[e][0]].length) {
				console.log(match[e]);
				for (var j = 0; j < 9; j++) {
					var isPair = true;
					for (var u = 0; u < match[e].length; u++) {
						if (!candidacy[i][j].includes(match[e][u])) {
							isPair = false;
						}
					}
					if (isPair) {
						//console.log(`pair found at r${i+1}c${j+1}`);
						for (var n = 1; n <= options.length; n++) {
							if (!match[e].includes(n)) {
								candidacy[i][j].expel(n);
							}
						}
					} else {
						//console.log(`pair not found at r${i+1}c${j+1}`);
						for (var u = 0; u < match[e].length; u++) {
							candidacy[i][j].expel(match[e][u]);
						}
						//console.log(candidacy[i][j]);
					}
				}
			}
		}
	}

	//Column by column
	for (var j = 0; j < 9; j++) {
		var appearance = [];
		for (var n = 1; n <= options.length; n++) {
			var count = 0;
			appearance[n] = [];
			for (var i = 0; i < 9; i++) {
				if (candidacy[i][j].includes(n)) {
					appearance[n][count] = {};
					appearance[n][count].y = i;
					appearance[n][count].x = j;
					count++;
				}
			}
		}
		var match = [];
		var at = 0;
		for (var n = 1; n < options.length; n++) {
			match[at] = [];
			match[at][0] = n;
			var matched = false;
			for (var o = n+1; o < 9; o++) {
				var canmatch = true;
				if (appearance[n].length > 1) {
					for (var a = 0; a < appearance[n].length; a++) {
						if ( appearance[n].length == appearance[o].length
						  && appearance[n][a].y == appearance[o][a].y && appearance[n][a].x == appearance[o][a].x ) { }
						else {
							canmatch = false;
						}
					}
					if (canmatch) {
						matched = true;
						match[at].push(o);
					}
				}
			}
			if (matched) {
				at++;
			}
		}
		for (var e = 0; e < match.length; e++) {
			if (match[e].length > 1 && match[e].length == appearance[match[e][0]].length) {
				console.log(match[e]);
				for (var i = 0; i < 9; i++) {
					var isPair = true;
					for (var u = 0; u < match[e].length; u++) {
						if (!candidacy[i][j].includes(match[e][u])) {
							isPair = false;
						}
					}
					if (isPair) {
						//console.log(`pair found at r${i+1}c${j+1}`);
						for (var n = 1; n <= options.length; n++) {
							if (!match[e].includes(n)) {
								candidacy[i][j].expel(n);
							}
						}
					} else {
						//console.log(`pair not found at r${i+1}c${j+1}`);
						for (var u = 0; u < match[e].length; u++) {
							candidacy[i][j].expel(match[e][u]);
						}
						//console.log(candidacy[i][j]);
					}
				}
			}
		}
	}

	//Box by Box
	for (var i = 0; i < 9; i+=3) {
		for (var j = 0; j < 9; j+=3) {
			var appearance = [];
			for (var n = 1; n <= options.length; n++) {
				var count = 0;
				appearance[n] = [];
				for (var y = i; y < i+3; y++) {
					for (var x = j; x < j+3; x++) {
						if (candidacy[y][x].includes(n)) {
							appearance[n][count] = {};
							appearance[n][count].y = y;
							appearance[n][count].x = x;
							count++;
						}
					}
				}
			}
			var match = [];
			var at = 0;
			for (var n = 1; n < options.length; n++) {
				match[at] = [];
				match[at][0] = n;
				var matched = false;
				for (var o = n+1; o < 9; o++) {
					var canmatch = true;
					if (appearance[n].length > 1) {
						for (var a = 0; a < appearance[n].length; a++) {
							if ( appearance[n].length == appearance[o].length
							  && appearance[n][a].y == appearance[o][a].y && appearance[n][a].x == appearance[o][a].x ) { }
							else {
								canmatch = false;
							}
						}
						if (canmatch) {
							matched = true;
							match[at].push(o);
						}
					}
				}
				if (matched) {
					at++;
				}
			}
			for (var e = 0; e < match.length; e++) {
				if (match[e].length > 1 && match[e].length == appearance[match[e][0]].length) {
					console.log(match[e]);
					for (var y = i; y < i+3; y++) {
						for (var x = j; x < j+3; x++) {
							var isPair = true;
							for (var u = 0; u < match[e].length; u++) {
								if (!candidacy[y][x].includes(match[e][u])) {
									isPair = false;
								}
							}
							if (isPair) {
								//console.log(`pair found at r${y+1}c${x+1}`);
								for (var n = 1; n <= options.length; n++) {
									if (!match[e].includes(n)) {
										candidacy[y][x].expel(n);
									}
								}
							} else {
								//console.log(`pair not found at r${y+1}c${x+1}`);
								for (var u = 0; u < match[e].length; u++) {
									candidacy[y][x].expel(match[e][u]);
								}
								//console.log(candidacy[i][j]);
							}
						}
					}
				}
			}
		}
	}
	return candidacy;
}
function uniqueLinearity (matrix, candidacy) {
	//Checks on a row or column, if the only candidates of that case are from the same box
	var options = [1, 2, 3, 4, 5, 6, 7, 8, 9]

	for (var n = 1; n <= options.length; n++) {
		for (var i = 0; i < 9; i++) {
			var markx = [];
			var marky = [];
			var count = 0;
			for (var j = 0; j < 9; j++) {
				if (candidacy[i][j].includes(n)) {
					marky[count] = i;
					markx[count] = j;
					count++;
				}
			}
			if (markx.length > 0 && markx.samebox()) {
				console.log(`Found a unique linearity for '${n}' on row ${i+1} on positions ${markx[0]+1},  ${markx[1]+1}`);
				var boxro = i.box();
				var boxco = markx[0].box();
				for (var y = boxro; y < boxro+3; y++) {
					for (var x = boxco; x < boxco+3; x++) {
						var canexpel = true;
						for (var a = 0; a < count; a++) {
							if ( markx[a] == x && marky[a] == y) {
								canexpel = false;
							}
						}
						if (canexpel) {
							candidacy[y][x].expel(n);
						}
					}
				}
			}
		}
		for (var j = 0; j < 9; j++) {
			var markx = [];
			var marky = [];
			var count = 0;
			for (var i = 0; i < 9; i++) {
				if (candidacy[i][j].includes(n)) {
					marky[count] = i;
					markx[count] = j;
					count++;
				}
			}
			if (marky.length > 0 && marky.samebox()) {
				console.log(`Found a unique linearity for '${n}' on column ${j+1} on positions ${marky[0]+1},  ${marky[1]+1}`);
				var boxro = marky[0].box();
				var boxco = j.box();
				for (var y = boxro; y < boxro+3; y++) {
					for (var x = boxco; x < boxco+3; x++) {
						var canexpel = true;
						for (var a = 0; a < count; a++) {
							if ( markx[a] == x && marky[a] == y) {
								canexpel = false;
							}
						}
						if (canexpel) {
							candidacy[y][x].expel(n);
						}
					}
				}
			}
		}
	}
	return candidacy;
}

function mayLay (matrix, row, col, value) {
	//Checks if this row doesn't already have this value
	for (var j = 0; j < 9; j++) {
		if ( j !=col && matrix[row][j] == value) {
			return false;
		}
	}
	//Checks if this column doesn't already have this value
	for (var i = 0; i < 9; i++) {
		if ( i !=row && matrix[i][col] == value)
			return false;
	}
	return true;
}
function log(message, type) {
	var item = document.createElement('div');
	item.className = `log-item ${type}`;
	item.innerHTML = message;
	cons.appendChild(item);
}

Array.prototype.expel = function (n) {
	if (this.includes(n)) {
		for (var a = 0; a < this.length; a++) {
			if (this[a] == n) {
				this.splice(a, 1);
			}
		}
	}
}
Array.prototype.homogeneous = function () {
	for (var a = 0; a < this.length; a++) {
		if (this[a] != this[0]) {
			return false
		}
	}
	return true;
}
Array.prototype.samebox = function () {
	if (this.length <= 1) {
		return false
	}
	for (var a = 0; a < this.length; a++) {
		if (this[a].box() != this[0].box()) {
			return false
		}
	}
	return true;
}
Number.prototype.box = function () {
	return  Math.floor(this/3)*3;
}
// Warn if overriding existing method
if(Array.prototype.equals)
    console.warn("Overriding existing Array.prototype.equals. Possible causes: New API defines the method, there's a framework conflict or you've got double inclusions in your code.");
// attach the .equals method to Array's prototype to call it on any array
Array.prototype.equals = function (array) {
    // if the other array is a falsy value, return
    if (!array)
        return false;

    // compare lengths - can save a lot of time 
    if (this.length != array.length)
        return false;

    for (var i = 0, l=this.length; i < l; i++) {
        // Check if we have nested arrays
        if (this[i] instanceof Array && array[i] instanceof Array) {
            // recurse into the nested arrays
            if (!this[i].equals(array[i]))
                return false;       
        }           
        else if (this[i] != array[i]) { 
            // Warning - two different object instances will never be equal: {x:20} != {x:20}
            return false;   
        }           
    }       
    return true;
}
// Hide method from for-in loops
Object.defineProperty(Array.prototype, "equals", {enumerable: false});