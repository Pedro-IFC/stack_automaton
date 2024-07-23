let estadoCounter = 0;
let entradaCounter = 0;
let valorPilhaCounter = 0;
let estadoAlvoCounter = 0;
let novoValorPilhaCounter = 0;

function addEstado(estadoData = {}) {
	estadoCounter++;
	const container = document.getElementById('estadosContainer');
	
	const estadoDiv = document.createElement('div');
	estadoDiv.className = 'estado-div';
	estadoDiv.id = `estado${estadoCounter}`;

	const estadoInput = document.createElement('input');
	estadoInput.type = 'text';
	estadoInput.className = 'estado';
	estadoInput.name = `estado${estadoCounter}`;
	estadoInput.placeholder = `Estado ${estadoCounter}`;
	if (estadoData.estado) {
		estadoInput.value = estadoData.estado;
	}

	const addEntradaBtn = document.createElement('button');
	addEntradaBtn.type = 'button';
	addEntradaBtn.innerText = 'Adicionar Entrada';
	addEntradaBtn.onclick = () => addEntrada(estadoDiv.id);

	const removeEstadoBtn = document.createElement('button');
	removeEstadoBtn.type = 'button';
	removeEstadoBtn.innerText = 'Remover Estado';
	removeEstadoBtn.className = 'remove-btn';
	removeEstadoBtn.onclick = () => estadoDiv.remove();

	estadoDiv.appendChild(estadoInput);
	estadoDiv.appendChild(addEntradaBtn);
	estadoDiv.appendChild(removeEstadoBtn);

	container.appendChild(estadoDiv);

	if (estadoData.entradas) {
		estadoData.entradas.forEach(entradaData => addEntrada(estadoDiv.id, entradaData));
	}
}

function addEntrada(estadoId, entradaData = {}) {
	entradaCounter++;
	const estadoDiv = document.getElementById(estadoId);

	const entradaDiv = document.createElement('div');
	entradaDiv.className = 'entrada-div';
	entradaDiv.id = `entrada${entradaCounter}`;

	const entradaInput = document.createElement('input');
	entradaInput.type = 'text';
	entradaInput.className = 'entrada';
	entradaInput.name = `entrada${entradaCounter}`;
	entradaInput.placeholder = `Entrada ${entradaCounter}`;
	if (entradaData.entrada) {
		entradaInput.value = entradaData.entrada;
	}

	const addValorPilhaBtn = document.createElement('button');
	addValorPilhaBtn.type = 'button';
	addValorPilhaBtn.innerText = 'Adicionar Valor de Pilha';
	addValorPilhaBtn.onclick = () => addValorPilha(entradaDiv.id);

	const removeEntradaBtn = document.createElement('button');
	removeEntradaBtn.type = 'button';
	removeEntradaBtn.innerText = 'Remover Entrada';
	removeEntradaBtn.className = 'remove-btn';
	removeEntradaBtn.onclick = () => entradaDiv.remove();

	entradaDiv.appendChild(entradaInput);
	entradaDiv.appendChild(addValorPilhaBtn);
	entradaDiv.appendChild(removeEntradaBtn);

	estadoDiv.appendChild(entradaDiv);

	if (entradaData.valoresPilha) {
		entradaData.valoresPilha.forEach(valorPilhaData => addValorPilha(entradaDiv.id, valorPilhaData));
	}
}

function addValorPilha(entradaId, valorPilhaData = {}) {
	valorPilhaCounter++;
	const entradaDiv = document.getElementById(entradaId);

	const valorPilhaDiv = document.createElement('div');
	valorPilhaDiv.className = 'valor-pilha-div';
	valorPilhaDiv.id = `valorPilha${valorPilhaCounter}`;

	const valorPilhaInput = document.createElement('input');
	valorPilhaInput.type = 'text';
	valorPilhaInput.className = 'valor_pilha';
	valorPilhaInput.name = `valorPilha${valorPilhaCounter}`;
	valorPilhaInput.placeholder = `Valor de Pilha ${valorPilhaCounter}`;
	if (valorPilhaData.valorPilha) {
		valorPilhaInput.value = valorPilhaData.valorPilha;
	}

	const estadoAlvoInput = document.createElement('input');
	estadoAlvoInput.type = 'text';
	estadoAlvoInput.className = 'estado_alvo';
	estadoAlvoInput.name = `estadoAlvo${valorPilhaCounter}`;
	estadoAlvoInput.placeholder = `Estado Alvo ${valorPilhaCounter}`;
	if (valorPilhaData.estadoAlvo) {
		estadoAlvoInput.value = valorPilhaData.estadoAlvo;
	}

	const addNovoValorPilhaBtn = document.createElement('button');
	addNovoValorPilhaBtn.type = 'button';
	addNovoValorPilhaBtn.innerText = 'Adicionar Novo Valor de Pilha';
	addNovoValorPilhaBtn.onclick = () => addNovoValorPilha(valorPilhaDiv.id);

	const removeValorPilhaBtn = document.createElement('button');
	removeValorPilhaBtn.type = 'button';
	removeValorPilhaBtn.innerText = 'Remover Valor de Pilha';
	removeValorPilhaBtn.className = 'remove-btn';
	removeValorPilhaBtn.onclick = () => valorPilhaDiv.remove();

	valorPilhaDiv.appendChild(valorPilhaInput);
	valorPilhaDiv.appendChild(estadoAlvoInput);
	valorPilhaDiv.appendChild(addNovoValorPilhaBtn);
	valorPilhaDiv.appendChild(removeValorPilhaBtn);

	entradaDiv.appendChild(valorPilhaDiv);

	if (valorPilhaData.novosValoresPilha) {
		valorPilhaData.novosValoresPilha.forEach(novoValorPilha => addNovoValorPilha(valorPilhaDiv.id, novoValorPilha));
	}
}

function addNovoValorPilha(valorPilhaId, novoValorPilha = '') {
	novoValorPilhaCounter++;
	const valorPilhaDiv = document.getElementById(valorPilhaId);

	const novoValorPilhaInput = document.createElement('input');
	novoValorPilhaInput.type = 'text';
	novoValorPilhaInput.className = 'novo_valor_pilha';
	novoValorPilhaInput.name = `novoValorPilha${novoValorPilhaCounter}`;
	novoValorPilhaInput.placeholder = `Novo Valor de Pilha ${novoValorPilhaCounter}`;
	if (novoValorPilha) {
		novoValorPilhaInput.value = novoValorPilha;
	}

	valorPilhaDiv.appendChild(novoValorPilhaInput);
}

function getFormData() {
	const estadosContainer = document.getElementById('estadosContainer');
	const estados = estadosContainer.getElementsByClassName('estado-div');
	const data = [];

	for (let estadoDiv of estados) {
		const estadoData = {};
		estadoData.estado = estadoDiv.querySelector('.estado').value;
		estadoData.entradas = [];

		const entradas = estadoDiv.getElementsByClassName('entrada-div');
		for (let entradaDiv of entradas) {
			const entradaData = {};
			entradaData.entrada = entradaDiv.querySelector('.entrada').value;
			entradaData.valoresPilha = [];

			const valoresPilha = entradaDiv.getElementsByClassName('valor-pilha-div');
			for (let valorPilhaDiv of valoresPilha) {
				const valorPilhaData = {};
				valorPilhaData.valorPilha = valorPilhaDiv.querySelector('.valor_pilha').value;
				valorPilhaData.estadoAlvo = valorPilhaDiv.querySelector('.estado_alvo').value;
				valorPilhaData.novosValoresPilha = [];

				const novosValoresPilha = valorPilhaDiv.getElementsByClassName('novo_valor_pilha');
				for (let novoValorPilhaInput of novosValoresPilha) {
					valorPilhaData.novosValoresPilha.push(novoValorPilhaInput.value);
				}

				entradaData.valoresPilha.push(valorPilhaData);
			}

			estadoData.entradas.push(entradaData);
		}

		data.push(estadoData);
	}

	return data;  // Retorne o objeto de dados em vez de apenas fazer log
}

function saveFormData() {
	const data = getFormData();
	localStorage.setItem('formData', JSON.stringify(data));
}

function loadFormData() {
	const storedData = localStorage.getItem('formData');
	if (storedData) {
		try {
			const data = JSON.parse(storedData);
			data.forEach(estadoData => addEstado(estadoData));
		} catch (error) {
			console.error('Erro ao carregar dados salvos:', error);
		}
	}
}

function encodeFormData() {
	const estadosContainer = document.getElementById('estadosContainer');
	const estados = estadosContainer.getElementsByClassName('estado-div');
	const result = {};

	Array.from(estados).forEach((estadoDiv) => {
		const estadoName = estadoDiv.querySelector('.estado').value;
		if (!estadoName) return; // Ignora se o nome do estado estiver vazio

		const estadoData = {};

		const entradas = estadoDiv.getElementsByClassName('entrada-div');
		Array.from(entradas).forEach((entradaDiv) => {
			const entradaName = entradaDiv.querySelector('.entrada').value;
			if (!entradaName) return; // Ignora se o nome da entrada estiver vazio

			const entradaData = {};

			const valoresPilha = entradaDiv.getElementsByClassName('valor-pilha-div');
			Array.from(valoresPilha).forEach((valorPilhaDiv) => {
				const valorPilhaName = valorPilhaDiv.querySelector('.valor_pilha').value;
				if (!valorPilhaName) return; // Ignora se o nome do valor de pilha estiver vazio

				const valorPilhaValue = [];
				const estadoAlvo = valorPilhaDiv.querySelector('.estado_alvo').value;
				valorPilhaValue.push(estadoAlvo);

				const novosValoresPilha = valorPilhaDiv.getElementsByClassName('novo_valor_pilha');
				const novosValoresPilhaArray = Array.from(novosValoresPilha).map(input => input.value);
				valorPilhaValue.push(novosValoresPilhaArray);

				entradaData[valorPilhaName] = valorPilhaValue;
			});

			estadoData[entradaName] = entradaData;
		});

		result[estadoName] = estadoData;
	});
	return JSON.stringify(result, null, 2); 
}
document.addEventListener('DOMContentLoaded', (event) => {
	document.getElementById('validate').addEventListener('click', function(event) {
		fetch('./action.php', {
			method: 'POST',
			headers: {
				'Content-Type': 'application/json'
			},
			body: encodeFormData() 
		})
		.then(response => response.json())
		.then(data => {
			console.log('Sucesso:', data);
		})
		.catch((error) => {
			console.error('Erro:', error);
		});
	});
	document.querySelector('#estadosContainer button').addEventListener('click', function(event) {
		event.preventDefault();
		addEstado();
	});
	document.querySelector('#savedata').addEventListener('click', function(event) {
		event.preventDefault();
		saveFormData()
	});
	loadFormData();
});