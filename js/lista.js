const listaDeCarros = [
    {
        tipo: "Carro",
        marca: "Volkswagen",
        nome: "Golf",
        ano: "2005",
        cor: "Prata",
        placa: "ABC-1222",
        diaria: "R$170,00"
    },
    {
        tipo: "Carro",
        marca: "Chevrolet",
        nome: "Ômega",
        ano: "1998",
        cor: "Preto",
        placa: "DBC-1422",
        diaria: "R$120,00"
    },
    {
        tipo: "Carro",
        marca: "Volkswagen",
        nome: "Gol Bolinha	",
        ano: "2000",
        cor: "Prata",
        placa: "ABC-1222",
        diaria: "R$140,00"
    },
    {
        tipo: "Carro",
        marca: "Volkswagen",
        nome: "Logus",
        ano: "1999",
        cor: "Branco",
        placa: "DBC-1422",
        diaria: "R$110,00"
    },
];

document.addEventListener("DOMContentLoaded", function () {
    const tbody = document.getElementById("corpo-tabela");
    for (i=0; i < listaDeCarros.length; i++) {
        const linhaAtual = document.createElement("tr");
        linhaAtual.innerHTML = `<td>${listaDeCarros[i].tipo}</td><td>${listaDeCarros[i].marca}</td><td>${listaDeCarros[i].nome}</td><td>${listaDeCarros[i].ano}</td><td>${listaDeCarros[i].cor}</td><td>${listaDeCarros[i].placa}</td><td>${listaDeCarros[i].diaria}</td>`;
        tbody.appendChild(linhaAtual);
    }
});

/*
function table(tableCarros) {
    let tabela = document.createElement("table");
    let thead = document.createElement("thead");
    let tbody=document.createElement("tbody");
    let thd=function(i){return (i==0)?"th":"td";};
    for (let i=0;i<tableLivros.length;i++) {
      let tr = document.createElement("tr");
      for(let o=0;o<tableLivros[i].length;o++){
        let t = document.createElement(thd(i));
        let texto=document.createTextNode(tableLivros[i][o]);
        t.appendChild(texto);
        tr.appendChild(t);
      }
      (i==0)?thead.appendChild(tr):tbody.appendChild(tr);
    }
    tabela.appendChild(thead);
    tabela.appendChild(tbody);
    return tabela;
  }
  document.getElementById("display").appendChild(table([
    ["autor", "nomeLivro", "categoria", "editora", "edicao", "qtdPaginas", "reservado"],
    [1,    "matheus",  16],
    [2,    "cristian", 16],
    [3,    "pedro",    10],
    [4,    "henrique", 10]
  ]));
  */