<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>APS</title>
    <link rel="stylesheet" href="./style.css">
</head>
<body>
    <header>
        <div class="al-container">
            <h1>Autômatos de Pilha Determinísticos</h1>
        </div>
    </header>
    <section class="form">
        <div class="left">
            <form id="form" action="action.php" method="POST">
                <div id="estadosContainer">
                    <h2>Estados</h2>
                    <button type="button" id="addEstadoBtn">Adicionar Estado</button>
                </div>
            </form>
        </div>
        <div class="right">
            <input type="text" name="nome" id="nome" placeholder="Nome">
            <input type="text" name="string" id="string" placeholder="String">
            <input type="text" name="estado_inicial" id="estado_inicial" placeholder="Estado Inicial">
            <input type="text" name="estado_final" id="estado_final" placeholder='Estado Final separe por ","'>
            <input type="text" name="pilha_inicial" id="pilha_inicial" placeholder='Pilha Inicial (separado por ",")'>
            <input type="text" name="alfabeto" id="alfabeto" placeholder='Alfabeto (separado por ",")'>
            <input type="text" name="alfabeto_pilha" id="alfabeto_pilha" placeholder='Alfabeto de pilha (separado por ",")'>
            <button type="button" id="savedata" class="green">Salvar</button>
            <button type="submit" id="validate">Validar</button>
            <button type="button" id="gerar_ap">Gerar AP formal</button>
            <button type="button" id="gerar_diagrama">Gerar diagrama formal</button>
            <a class="btn grey" href="./" id="voltar">Voltar</a>
        </div>
    </section>
    <script src="https://cdn.jsdelivr.net/npm/sweetalert2@11.12.3/dist/sweetalert2.all.min.js"></script>
    <script type="text/javascript" src="https://unpkg.com/vis-network/standalone/umd/vis-network.min.js"></script>
    <script type="module" src="./public/js/app.js"></script>
</body>
</html>
