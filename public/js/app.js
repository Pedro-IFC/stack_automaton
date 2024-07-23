/******/ (() => { // webpackBootstrap
/******/ 	var __webpack_modules__ = ({

/***/ "./assets/js/app.js":
/*!**************************!*\
  !*** ./assets/js/app.js ***!
  \**************************/
/***/ (() => {



/***/ }),

/***/ "./assets/js/theme/functions.js":
/*!**************************************!*\
  !*** ./assets/js/theme/functions.js ***!
  \**************************************/
/***/ (() => {

function _createForOfIteratorHelper(r, e) { var t = "undefined" != typeof Symbol && r[Symbol.iterator] || r["@@iterator"]; if (!t) { if (Array.isArray(r) || (t = _unsupportedIterableToArray(r)) || e && r && "number" == typeof r.length) { t && (r = t); var _n = 0, F = function F() {}; return { s: F, n: function n() { return _n >= r.length ? { done: !0 } : { done: !1, value: r[_n++] }; }, e: function e(r) { throw r; }, f: F }; } throw new TypeError("Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); } var o, a = !0, u = !1; return { s: function s() { t = t.call(r); }, n: function n() { var r = t.next(); return a = r.done, r; }, e: function e(r) { u = !0, o = r; }, f: function f() { try { a || null == t["return"] || t["return"](); } finally { if (u) throw o; } } }; }
function _unsupportedIterableToArray(r, a) { if (r) { if ("string" == typeof r) return _arrayLikeToArray(r, a); var t = {}.toString.call(r).slice(8, -1); return "Object" === t && r.constructor && (t = r.constructor.name), "Map" === t || "Set" === t ? Array.from(r) : "Arguments" === t || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(t) ? _arrayLikeToArray(r, a) : void 0; } }
function _arrayLikeToArray(r, a) { (null == a || a > r.length) && (a = r.length); for (var e = 0, n = Array(a); e < a; e++) n[e] = r[e]; return n; }
var estadoCounter = 0;
var entradaCounter = 0;
var valorPilhaCounter = 0;
var estadoAlvoCounter = 0;
var novoValorPilhaCounter = 0;
function addEstado() {
  var estadoData = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};
  estadoCounter++;
  var container = document.getElementById('estadosContainer');
  var estadoDiv = document.createElement('div');
  estadoDiv.className = 'estado-div';
  estadoDiv.id = "estado".concat(estadoCounter);
  var estadoInput = document.createElement('input');
  estadoInput.type = 'text';
  estadoInput.className = 'estado';
  estadoInput.name = "estado".concat(estadoCounter);
  estadoInput.placeholder = "Estado ".concat(estadoCounter);
  if (estadoData.estado) {
    estadoInput.value = estadoData.estado;
  }
  var addEntradaBtn = document.createElement('button');
  addEntradaBtn.type = 'button';
  addEntradaBtn.innerText = 'Adicionar Entrada';
  addEntradaBtn.onclick = function () {
    return addEntrada(estadoDiv.id);
  };
  var removeEstadoBtn = document.createElement('button');
  removeEstadoBtn.type = 'button';
  removeEstadoBtn.innerText = 'Remover Estado';
  removeEstadoBtn.className = 'remove-btn';
  removeEstadoBtn.onclick = function () {
    return estadoDiv.remove();
  };
  estadoDiv.appendChild(estadoInput);
  estadoDiv.appendChild(addEntradaBtn);
  estadoDiv.appendChild(removeEstadoBtn);
  container.appendChild(estadoDiv);
  if (estadoData.entradas) {
    estadoData.entradas.forEach(function (entradaData) {
      return addEntrada(estadoDiv.id, entradaData);
    });
  }
}
function addEntrada(estadoId) {
  var entradaData = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {};
  entradaCounter++;
  var estadoDiv = document.getElementById(estadoId);
  var entradaDiv = document.createElement('div');
  entradaDiv.className = 'entrada-div';
  entradaDiv.id = "entrada".concat(entradaCounter);
  var entradaInput = document.createElement('input');
  entradaInput.type = 'text';
  entradaInput.className = 'entrada';
  entradaInput.name = "entrada".concat(entradaCounter);
  entradaInput.placeholder = "Entrada ".concat(entradaCounter);
  if (entradaData.entrada) {
    entradaInput.value = entradaData.entrada;
  }
  var addValorPilhaBtn = document.createElement('button');
  addValorPilhaBtn.type = 'button';
  addValorPilhaBtn.innerText = 'Adicionar Valor de Pilha';
  addValorPilhaBtn.onclick = function () {
    return addValorPilha(entradaDiv.id);
  };
  var removeEntradaBtn = document.createElement('button');
  removeEntradaBtn.type = 'button';
  removeEntradaBtn.innerText = 'Remover Entrada';
  removeEntradaBtn.className = 'remove-btn';
  removeEntradaBtn.onclick = function () {
    return entradaDiv.remove();
  };
  entradaDiv.appendChild(entradaInput);
  entradaDiv.appendChild(addValorPilhaBtn);
  entradaDiv.appendChild(removeEntradaBtn);
  estadoDiv.appendChild(entradaDiv);
  if (entradaData.valoresPilha) {
    entradaData.valoresPilha.forEach(function (valorPilhaData) {
      return addValorPilha(entradaDiv.id, valorPilhaData);
    });
  }
}
function addValorPilha(entradaId) {
  var valorPilhaData = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {};
  valorPilhaCounter++;
  var entradaDiv = document.getElementById(entradaId);
  var valorPilhaDiv = document.createElement('div');
  valorPilhaDiv.className = 'valor-pilha-div';
  valorPilhaDiv.id = "valorPilha".concat(valorPilhaCounter);
  var valorPilhaInput = document.createElement('input');
  valorPilhaInput.type = 'text';
  valorPilhaInput.className = 'valor_pilha';
  valorPilhaInput.name = "valorPilha".concat(valorPilhaCounter);
  valorPilhaInput.placeholder = "Valor de Pilha ".concat(valorPilhaCounter);
  if (valorPilhaData.valorPilha) {
    valorPilhaInput.value = valorPilhaData.valorPilha;
  }
  var estadoAlvoInput = document.createElement('input');
  estadoAlvoInput.type = 'text';
  estadoAlvoInput.className = 'estado_alvo';
  estadoAlvoInput.name = "estadoAlvo".concat(valorPilhaCounter);
  estadoAlvoInput.placeholder = "Estado Alvo ".concat(valorPilhaCounter);
  if (valorPilhaData.estadoAlvo) {
    estadoAlvoInput.value = valorPilhaData.estadoAlvo;
  }
  var addNovoValorPilhaBtn = document.createElement('button');
  addNovoValorPilhaBtn.type = 'button';
  addNovoValorPilhaBtn.innerText = 'Adicionar Novo Valor de Pilha';
  addNovoValorPilhaBtn.onclick = function () {
    return addNovoValorPilha(valorPilhaDiv.id);
  };
  var removeValorPilhaBtn = document.createElement('button');
  removeValorPilhaBtn.type = 'button';
  removeValorPilhaBtn.innerText = 'Remover Valor de Pilha';
  removeValorPilhaBtn.className = 'remove-btn';
  removeValorPilhaBtn.onclick = function () {
    return valorPilhaDiv.remove();
  };
  valorPilhaDiv.appendChild(valorPilhaInput);
  valorPilhaDiv.appendChild(estadoAlvoInput);
  valorPilhaDiv.appendChild(addNovoValorPilhaBtn);
  valorPilhaDiv.appendChild(removeValorPilhaBtn);
  entradaDiv.appendChild(valorPilhaDiv);
  if (valorPilhaData.novosValoresPilha) {
    valorPilhaData.novosValoresPilha.forEach(function (novoValorPilha) {
      return addNovoValorPilha(valorPilhaDiv.id, novoValorPilha);
    });
  }
}
function addNovoValorPilha(valorPilhaId) {
  var novoValorPilha = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : '';
  novoValorPilhaCounter++;
  var valorPilhaDiv = document.getElementById(valorPilhaId);
  var novoValorPilhaInput = document.createElement('input');
  novoValorPilhaInput.type = 'text';
  novoValorPilhaInput.className = 'novo_valor_pilha';
  novoValorPilhaInput.name = "novoValorPilha".concat(novoValorPilhaCounter);
  novoValorPilhaInput.placeholder = "Novo Valor de Pilha ".concat(novoValorPilhaCounter);
  if (novoValorPilha) {
    novoValorPilhaInput.value = novoValorPilha;
  }
  valorPilhaDiv.appendChild(novoValorPilhaInput);
}
function getFormData() {
  var estadosContainer = document.getElementById('estadosContainer');
  var estados = estadosContainer.getElementsByClassName('estado-div');
  var data = [];
  var _iterator = _createForOfIteratorHelper(estados),
    _step;
  try {
    for (_iterator.s(); !(_step = _iterator.n()).done;) {
      var estadoDiv = _step.value;
      var estadoData = {};
      estadoData.estado = estadoDiv.querySelector('.estado').value;
      estadoData.entradas = [];
      var entradas = estadoDiv.getElementsByClassName('entrada-div');
      var _iterator2 = _createForOfIteratorHelper(entradas),
        _step2;
      try {
        for (_iterator2.s(); !(_step2 = _iterator2.n()).done;) {
          var entradaDiv = _step2.value;
          var entradaData = {};
          entradaData.entrada = entradaDiv.querySelector('.entrada').value;
          entradaData.valoresPilha = [];
          var valoresPilha = entradaDiv.getElementsByClassName('valor-pilha-div');
          var _iterator3 = _createForOfIteratorHelper(valoresPilha),
            _step3;
          try {
            for (_iterator3.s(); !(_step3 = _iterator3.n()).done;) {
              var valorPilhaDiv = _step3.value;
              var valorPilhaData = {};
              valorPilhaData.valorPilha = valorPilhaDiv.querySelector('.valor_pilha').value;
              valorPilhaData.estadoAlvo = valorPilhaDiv.querySelector('.estado_alvo').value;
              valorPilhaData.novosValoresPilha = [];
              var novosValoresPilha = valorPilhaDiv.getElementsByClassName('novo_valor_pilha');
              var _iterator4 = _createForOfIteratorHelper(novosValoresPilha),
                _step4;
              try {
                for (_iterator4.s(); !(_step4 = _iterator4.n()).done;) {
                  var novoValorPilhaInput = _step4.value;
                  valorPilhaData.novosValoresPilha.push(novoValorPilhaInput.value);
                }
              } catch (err) {
                _iterator4.e(err);
              } finally {
                _iterator4.f();
              }
              entradaData.valoresPilha.push(valorPilhaData);
            }
          } catch (err) {
            _iterator3.e(err);
          } finally {
            _iterator3.f();
          }
          estadoData.entradas.push(entradaData);
        }
      } catch (err) {
        _iterator2.e(err);
      } finally {
        _iterator2.f();
      }
      data.push(estadoData);
    }
  } catch (err) {
    _iterator.e(err);
  } finally {
    _iterator.f();
  }
  return data; // Retorne o objeto de dados em vez de apenas fazer log
}
function saveFormData() {
  var data = getFormData();
  localStorage.setItem('formData', JSON.stringify(data));
}
function loadFormData() {
  var storedData = localStorage.getItem('formData');
  if (storedData) {
    try {
      var data = JSON.parse(storedData);
      data.forEach(function (estadoData) {
        return addEstado(estadoData);
      });
    } catch (error) {
      console.error('Erro ao carregar dados salvos:', error);
    }
  }
}
function encodeFormData() {
  var estadosContainer = document.getElementById('estadosContainer');
  var estados = estadosContainer.getElementsByClassName('estado-div');
  var result = {};
  Array.from(estados).forEach(function (estadoDiv) {
    var estadoName = estadoDiv.querySelector('.estado').value;
    if (!estadoName) return; // Ignora se o nome do estado estiver vazio

    var estadoData = {};
    var entradas = estadoDiv.getElementsByClassName('entrada-div');
    Array.from(entradas).forEach(function (entradaDiv) {
      var entradaName = entradaDiv.querySelector('.entrada').value;
      if (!entradaName) return; // Ignora se o nome da entrada estiver vazio

      var entradaData = {};
      var valoresPilha = entradaDiv.getElementsByClassName('valor-pilha-div');
      Array.from(valoresPilha).forEach(function (valorPilhaDiv) {
        var valorPilhaName = valorPilhaDiv.querySelector('.valor_pilha').value;
        if (!valorPilhaName) return; // Ignora se o nome do valor de pilha estiver vazio

        var valorPilhaValue = [];
        var estadoAlvo = valorPilhaDiv.querySelector('.estado_alvo').value;
        valorPilhaValue.push(estadoAlvo);
        var novosValoresPilha = valorPilhaDiv.getElementsByClassName('novo_valor_pilha');
        var novosValoresPilhaArray = Array.from(novosValoresPilha).map(function (input) {
          return input.value;
        });
        valorPilhaValue.push(novosValoresPilhaArray);
        entradaData[valorPilhaName] = valorPilhaValue;
      });
      estadoData[entradaName] = entradaData;
    });
    result[estadoName] = estadoData;
  });
  return JSON.stringify(result, null, 2);
}
document.addEventListener('DOMContentLoaded', function (event) {
  document.getElementById('validate').addEventListener('click', function (event) {
    fetch('./action.php', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: encodeFormData()
    }).then(function (response) {
      return response.json();
    }).then(function (data) {
      console.log('Sucesso:', data);
    })["catch"](function (error) {
      console.error('Erro:', error);
    });
  });
  document.querySelector('#estadosContainer button').addEventListener('click', function (event) {
    event.preventDefault();
    addEstado();
  });
  document.querySelector('#savedata').addEventListener('click', function (event) {
    event.preventDefault();
    saveFormData();
  });
  loadFormData();
});

/***/ }),

/***/ "./assets/scss/index.scss":
/*!********************************!*\
  !*** ./assets/scss/index.scss ***!
  \********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
// extracted by mini-css-extract-plugin


/***/ })

/******/ 	});
/************************************************************************/
/******/ 	// The module cache
/******/ 	var __webpack_module_cache__ = {};
/******/ 	
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/ 		// Check if module is in cache
/******/ 		var cachedModule = __webpack_module_cache__[moduleId];
/******/ 		if (cachedModule !== undefined) {
/******/ 			return cachedModule.exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = __webpack_module_cache__[moduleId] = {
/******/ 			// no module.id needed
/******/ 			// no module.loaded needed
/******/ 			exports: {}
/******/ 		};
/******/ 	
/******/ 		// Execute the module function
/******/ 		__webpack_modules__[moduleId](module, module.exports, __webpack_require__);
/******/ 	
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/ 	
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = __webpack_modules__;
/******/ 	
/************************************************************************/
/******/ 	/* webpack/runtime/chunk loaded */
/******/ 	(() => {
/******/ 		var deferred = [];
/******/ 		__webpack_require__.O = (result, chunkIds, fn, priority) => {
/******/ 			if(chunkIds) {
/******/ 				priority = priority || 0;
/******/ 				for(var i = deferred.length; i > 0 && deferred[i - 1][2] > priority; i--) deferred[i] = deferred[i - 1];
/******/ 				deferred[i] = [chunkIds, fn, priority];
/******/ 				return;
/******/ 			}
/******/ 			var notFulfilled = Infinity;
/******/ 			for (var i = 0; i < deferred.length; i++) {
/******/ 				var [chunkIds, fn, priority] = deferred[i];
/******/ 				var fulfilled = true;
/******/ 				for (var j = 0; j < chunkIds.length; j++) {
/******/ 					if ((priority & 1 === 0 || notFulfilled >= priority) && Object.keys(__webpack_require__.O).every((key) => (__webpack_require__.O[key](chunkIds[j])))) {
/******/ 						chunkIds.splice(j--, 1);
/******/ 					} else {
/******/ 						fulfilled = false;
/******/ 						if(priority < notFulfilled) notFulfilled = priority;
/******/ 					}
/******/ 				}
/******/ 				if(fulfilled) {
/******/ 					deferred.splice(i--, 1)
/******/ 					var r = fn();
/******/ 					if (r !== undefined) result = r;
/******/ 				}
/******/ 			}
/******/ 			return result;
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/hasOwnProperty shorthand */
/******/ 	(() => {
/******/ 		__webpack_require__.o = (obj, prop) => (Object.prototype.hasOwnProperty.call(obj, prop))
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/make namespace object */
/******/ 	(() => {
/******/ 		// define __esModule on exports
/******/ 		__webpack_require__.r = (exports) => {
/******/ 			if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 				Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 			}
/******/ 			Object.defineProperty(exports, '__esModule', { value: true });
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/jsonp chunk loading */
/******/ 	(() => {
/******/ 		// no baseURI
/******/ 		
/******/ 		// object to store loaded and loading chunks
/******/ 		// undefined = chunk not loaded, null = chunk preloaded/prefetched
/******/ 		// [resolve, reject, Promise] = chunk loading, 0 = chunk loaded
/******/ 		var installedChunks = {
/******/ 			"/public/js/app": 0,
/******/ 			"style": 0
/******/ 		};
/******/ 		
/******/ 		// no chunk on demand loading
/******/ 		
/******/ 		// no prefetching
/******/ 		
/******/ 		// no preloaded
/******/ 		
/******/ 		// no HMR
/******/ 		
/******/ 		// no HMR manifest
/******/ 		
/******/ 		__webpack_require__.O.j = (chunkId) => (installedChunks[chunkId] === 0);
/******/ 		
/******/ 		// install a JSONP callback for chunk loading
/******/ 		var webpackJsonpCallback = (parentChunkLoadingFunction, data) => {
/******/ 			var [chunkIds, moreModules, runtime] = data;
/******/ 			// add "moreModules" to the modules object,
/******/ 			// then flag all "chunkIds" as loaded and fire callback
/******/ 			var moduleId, chunkId, i = 0;
/******/ 			if(chunkIds.some((id) => (installedChunks[id] !== 0))) {
/******/ 				for(moduleId in moreModules) {
/******/ 					if(__webpack_require__.o(moreModules, moduleId)) {
/******/ 						__webpack_require__.m[moduleId] = moreModules[moduleId];
/******/ 					}
/******/ 				}
/******/ 				if(runtime) var result = runtime(__webpack_require__);
/******/ 			}
/******/ 			if(parentChunkLoadingFunction) parentChunkLoadingFunction(data);
/******/ 			for(;i < chunkIds.length; i++) {
/******/ 				chunkId = chunkIds[i];
/******/ 				if(__webpack_require__.o(installedChunks, chunkId) && installedChunks[chunkId]) {
/******/ 					installedChunks[chunkId][0]();
/******/ 				}
/******/ 				installedChunks[chunkId] = 0;
/******/ 			}
/******/ 			return __webpack_require__.O(result);
/******/ 		}
/******/ 		
/******/ 		var chunkLoadingGlobal = self["webpackChunkestrutura_basica"] = self["webpackChunkestrutura_basica"] || [];
/******/ 		chunkLoadingGlobal.forEach(webpackJsonpCallback.bind(null, 0));
/******/ 		chunkLoadingGlobal.push = webpackJsonpCallback.bind(null, chunkLoadingGlobal.push.bind(chunkLoadingGlobal));
/******/ 	})();
/******/ 	
/************************************************************************/
/******/ 	
/******/ 	// startup
/******/ 	// Load entry module and return exports
/******/ 	// This entry module depends on other loaded chunks and execution need to be delayed
/******/ 	__webpack_require__.O(undefined, ["style"], () => (__webpack_require__("./assets/js/app.js")))
/******/ 	__webpack_require__.O(undefined, ["style"], () => (__webpack_require__("./assets/js/theme/functions.js")))
/******/ 	var __webpack_exports__ = __webpack_require__.O(undefined, ["style"], () => (__webpack_require__("./assets/scss/index.scss")))
/******/ 	__webpack_exports__ = __webpack_require__.O(__webpack_exports__);
/******/ 	
/******/ })()
;