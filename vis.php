<!DOCTYPE html>
<html>
<head>
  <title>Diagrama de Autômato</title>
  <script type="text/javascript" src="https://unpkg.com/vis-network/standalone/umd/vis-network.min.js"></script>
  <style type="text/css">
    #mynetwork {
      width: 100vw;
      height: 100vh;
    }
  </style>
</head>
<body>
  <div id="mynetwork"></div>
  <script type="text/javascript">
    var nodes = new vis.DataSet([
      {id: 1, label: 'q0'},
      {id: 2, label: 'q1'},
      {id: 3, label: 'q2'}
    ]);
    var edges = new vis.DataSet([
      {from: 1, to: 2, label: 'a'},
      {from: 2, to: 3, label: 'b'},
      {from: 3, to: 1, label: 'c'}
    ]);
    var container = document.getElementById('mynetwork');
    var data = {
      nodes: nodes,
      edges: edges
    };
    var options = {};
    var network = new vis.Network(container, data, options);
  </script>
</body>
</html>
