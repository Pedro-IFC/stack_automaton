const { error } = require("laravel-mix/src/Log");

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

	return data;
}

function saveFormData() {
	const data = getFormData();
	let form = {
		dados: data,
		nome: document.querySelector('input[name="nome"]').value,
		string: document.querySelector('input[name="string"]').value,
		estado_inicial: document.querySelector('input[name="estado_inicial"]').value,
		estado_final: document.querySelector('input[name="estado_final"]').value.split(","),
		pilha_inicial: document.querySelector('input[name="pilha_inicial"]').value.split(","),
		alfabeto: document.querySelector('input[name="alfabeto"]').value.split(","),
		alfabeto_pilha: document.querySelector('input[name="alfabeto_pilha"]').value.split(",")
	};
	let forms = JSON.parse(localStorage.getItem('forms'))
	let id = localStorage.getItem('atual')?? 0;
	if(forms){
		forms[id]=form;
	}else{
		forms = new Array(form);
		localStorage.setItem("atual", id);
	}
	localStorage.setItem('forms', JSON.stringify(forms));
}
function notEncodedFormData() {
	const estadosContainer = document.getElementById('estadosContainer');
	const estados = estadosContainer.getElementsByClassName('estado-div');
	const result = {};
	Array.from(estados).forEach((estadoDiv) => {
		const estadoName = estadoDiv.querySelector('.estado').value;
		if (!estadoName) return; 

		const estadoData = {};

		const entradas = estadoDiv.getElementsByClassName('entrada-div');
		Array.from(entradas).forEach((entradaDiv) => {
			const entradaName = entradaDiv.querySelector('.entrada').value;
			if (!entradaName) return;

			const entradaData = {};

			const valoresPilha = entradaDiv.getElementsByClassName('valor-pilha-div');
			Array.from(valoresPilha).forEach((valorPilhaDiv) => {
				const valorPilhaName = valorPilhaDiv.querySelector('.valor_pilha').value;
				if (!valorPilhaName) return;

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
	return result; 
}
function loadFormData() {
	const storedData = localStorage.getItem('forms');
	if (storedData) {
		try {
			const forms = JSON.parse(storedData);
			let id = localStorage.getItem('atual')?? 0;
			if(forms[id]){
				forms[id].dados.forEach(estadoData => addEstado(estadoData));
				document.querySelector('input[name="nome"]').value = forms[id].nome;
				document.querySelector('input[name="string"]').value = forms[id].string;
				document.querySelector('input[name="estado_inicial"]').value = forms[id].estado_inicial;
				document.querySelector('input[name="estado_final"]').value = forms[id].estado_final;
				document.querySelector('input[name="pilha_inicial"]').value = forms[id].pilha_inicial;
				document.querySelector('input[name="alfabeto"]').value=forms[id].alfabeto;
				document.querySelector('input[name="alfabeto_pilha"]').value=forms[id].alfabeto_pilha;
			}
		} catch (error) {
			console.error('Erro ao carregar dados salvos:', error);
		}
	}
}
function gerarTransicoes(dados) {
    let transicoes = '';
    dados.forEach(estadoObj => {
        const estado = estadoObj.estado;
        estadoObj.entradas.forEach(entradaObj => {
            const entrada = entradaObj.entrada;
            entradaObj.valoresPilha.forEach(pilhaObj => {
                const valorPilha = pilhaObj.valorPilha;
                const estadoAlvo = pilhaObj.estadoAlvo;
                const novosValoresPilha = pilhaObj.novosValoresPilha.join('');

                transicoes += `δ(${estado}, ${entrada}, ${valorPilha}) = (${estadoAlvo}, ${novosValoresPilha})<br>`;
            });
        });
    });
    return transicoes.trim();
}
function gerarAp() {
	let forms = JSON.parse(localStorage.getItem('forms'))
	let id = localStorage.getItem('atual')?? 0;
	let form = forms[id];
	let estados = "";
	console.log()
	form.dados.forEach(element => {
		if(estados==""){
			estados+=element.estado;
		}else{
			estados+=", " + element.estado;
		}
	});
	Swal.fire({
		icon: "success",
		title: "Definição formal do Autômato",
		html:  `Q: ` + estados + ` <hr>
				Σ: ` + form.alfabeto + ` <hr>
				Γ: ` + form.alfabeto_pilha + ` <hr>
				δ: ` + gerarTransicoes(form.dados) + `<hr>
				q0: ` + form.estado_inicial + ` <hr>
				z0: ` + form.pilha_inicial + ` <hr>
				F: ` + form.estado_final + ` <hr>`,
		showCloseButton: true,
	});
}
document.addEventListener('DOMContentLoaded', (event) => {
	if(document.getElementById('validate')){
		document.getElementById('validate').addEventListener('click', function(event) {
			saveFormData();
			let forms = JSON.parse(localStorage.getItem('forms'))
			let id = localStorage.getItem('atual')?? 0;
			forms[id].delta=notEncodedFormData();
			fetch('./action.php', {
				method: 'POST',
				headers: {
					'Content-Type': 'application/json'
				},
				body: JSON.stringify(forms[id])
			})
			.then(response => response.json())
			.then(data => {
				Swal.fire({
					icon: data[0].status?"success":"error",
					title: data[0].status?"Faz parte da linguagem!":"Não faz parte da linguagem",
					html: `Confira os passos da solução: <br>` + data[0].stepby,
					showCloseButton: true,
				});
			})
		});
	}
	if(document.querySelector('#estadosContainer button')){
		document.querySelector('#estadosContainer button').addEventListener('click', function(event) {
			event.preventDefault();
			addEstado();
		});
	}
	if(document.querySelector('#savedata')){
		document.querySelector('#savedata').addEventListener('click', function(event) {
			event.preventDefault();
			saveFormData()
		});
	}
	if(document.querySelector('#gerar_ap')){
		document.querySelector('#gerar_ap').addEventListener('click', function(event) {
			event.preventDefault();
			gerarAp();
		});
	}
	if(document.getElementById('validate')){
		loadFormData();
	}
	if(document.querySelector('.lista-automatos')){
		let forms = JSON.parse(localStorage.getItem('forms'));
		if(forms){
			let container = document.querySelector('.lista-automatos');
			let table = document.createElement('table');
			table.classList.add("table")
			table.classList.add("table-striped")
			let tbody = document.createElement('tbody');
			table.appendChild(tbody);
			forms.forEach((element, index) => {
				let row = document.createElement('tr');
				let cellName = document.createElement('td');
				cellName.textContent = element.nome;
				cellName.classList.add("col-10")
				row.appendChild(cellName);
				let cellView = document.createElement('td');
				cellView.classList.add("col-1")
				let viewButton = document.createElement('button');
				viewButton.innerHTML = '<i class="fa-regular fa-pen-to-square"></i>';
				viewButton.addEventListener('click', function() {
					localStorage.setItem('atual', index);
					window.location.href = "./interna.php";
				});
				cellView.appendChild(viewButton);
				row.appendChild(cellView);
				let cellDelete = document.createElement('td');
				cellDelete.classList.add("col-1")
				let deleteButton = document.createElement('button');
				deleteButton.innerHTML = '<i class="fa-solid fa-trash"></i>';
				deleteButton.addEventListener('click', function() {
					forms.splice(index, 1);
					localStorage.setItem('forms', JSON.stringify(forms));
					Swal.fire({
						icon:"success",
						title: "Linguagem Deletada",
						showCloseButton: true,
					}).then(function () {
						location.reload();
					});
				});
				cellDelete.appendChild(deleteButton);
				row.appendChild(cellDelete);
				tbody.appendChild(row);
			});
			container.appendChild(table);
		}
	}
	if(document.querySelector('#add_new')){
		document.querySelector('#add_new').addEventListener("click", () => {
			localStorage.setItem('atual', JSON.parse(localStorage.getItem('forms'))?JSON.parse(localStorage.getItem('forms')).length:0);
			window.location.href="./interna.php";
		})
	}
});