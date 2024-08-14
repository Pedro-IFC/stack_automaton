<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>APS</title>
    <link rel="stylesheet" href="./style.css">
</head>
<body>
    <?php include "./header.php" ?>
    <?php include "./guia.php" ?>
    <section class="listagem noheight">
        <div class="al-container">
            <div class="lista-automatos">
                <h2 class="font-upper">Seus Autômatos</h2>
                <div class="controles">
                    <button href="./interna.php" class="btn green" id="add_new">Adicionar Novo</button>
                </div>
            </div>
        </div>
    </section>
    <?php include "./equipe.php" ?>
    <?php include "./footer.php" ?>
</body>
</html>
