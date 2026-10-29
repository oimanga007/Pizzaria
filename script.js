const pizzas_list = [
  // 25 PIZZAS VEGANAS
  { nome: "Pizza Vegana de Marguerita", quantidade: 0, valor: 42.9, classe1: "vegana", classe2: "todos" },
  { nome: "Pizza Vegana de Brócolis", quantidade: 0, valor: 44.9, classe1: "vegana", classe2: "todos" },
  { nome: "Pizza Vegana de Palmito", quantidade: 0, valor: 49.9, classe1: "vegana", classe2: "todos" },
  { nome: "Pizza Vegana de Rúcula", quantidade: 0, valor: 44.9, classe1: "vegana", classe2: "todos" },
  { nome: "Pizza Vegana de Abobrinha", quantidade: 0, valor: 42.9, classe1: "vegana", classe2: "todos" },
  { nome: "Pizza Vegana de Berinjela", quantidade: 0, valor: 42.9, classe1: "vegana", classe2: "todos" },
  { nome: "Pizza Vegana de Cogumelos", quantidade: 0, valor: 49.9, classe1: "vegana", classe2: "todos" },
  { nome: "Pizza Vegana de Milho", quantidade: 0, valor: 39.9, classe1: "vegana", classe2: "todos" },
  { nome: "Pizza Vegana de Escarola", quantidade: 0, valor: 42.9, classe1: "vegana", classe2: "todos" },
  { nome: "Pizza Vegana de Tomate Seco", quantidade: 0, valor: 49.9, classe1: "vegana", classe2: "todos" },
  { nome: "Pizza Vegana de Legumes", quantidade: 0, valor: 42.9, classe1: "vegana", classe2: "todos" },
  { nome: "Pizza Vegana de Cebola Caramelizada", quantidade: 0, valor: 44.9, classe1: "vegana", classe2: "todos" },
  { nome: "Pizza Vegana de Pimentão", quantidade: 0, valor: 39.9, classe1: "vegana", classe2: "todos" },
  { nome: "Pizza Vegana de Espinafre", quantidade: 0, valor: 44.9, classe1: "vegana", classe2: "todos" },
  { nome: "Pizza Vegana de Alho-Poró", quantidade: 0, valor: 44.9, classe1: "vegana", classe2: "todos" },
  { nome: "Pizza Vegana de Azeitonas", quantidade: 0, valor: 42.9, classe1: "vegana", classe2: "todos" },
  { nome: "Pizza Vegana de Tofu", quantidade: 0, valor: 49.9, classe1: "vegana", classe2: "todos" },
  { nome: "Pizza Vegana de Pesto Vegano", quantidade: 0, valor: 49.9, classe1: "vegana", classe2: "todos" },
  { nome: "Pizza Vegana de Abóbora", quantidade: 0, valor: 42.9, classe1: "vegana", classe2: "todos" },
  { nome: "Pizza Vegana de Couve-Flor", quantidade: 0, valor: 42.9, classe1: "vegana", classe2: "todos" },
  { nome: "Pizza Vegana de Shimeji", quantidade: 0, valor: 52.9, classe1: "vegana", classe2: "todos" },
  { nome: "Pizza Vegana de Champignon", quantidade: 0, valor: 49.9, classe1: "vegana", classe2: "todos" },
  { nome: "Pizza Vegana de Batata", quantidade: 0, valor: 39.9, classe1: "vegana", classe2: "todos" },
  { nome: "Pizza Vegana de Cenoura", quantidade: 0, valor: 39.9, classe1: "vegana", classe2: "todos" },
  { nome: "Pizza Vegana Especial da Casa", quantidade: 0, valor: 54.9, classe1: "vegana", classe2: "todos" },

  // 10 PIZZAS DOCES
  { nome: "Pizza de Chocolate", quantidade: 0, valor: 44.9, classe1: "doce", classe2: "todos" },
  { nome: "Pizza de Brigadeiro", quantidade: 0, valor: 47.9, classe1: "doce", classe2: "todos" },
  { nome: "Pizza de Morango com Chocolate", quantidade: 0, valor: 52.9, classe1: "doce", classe2: "todos" },
  { nome: "Pizza de Banana com Canela", quantidade: 0, valor: 39.9, classe1: "doce", classe2: "todos" },
  { nome: "Pizza de Romeu e Julieta", quantidade: 0, valor: 44.9, classe1: "doce", classe2: "todos" },
  { nome: "Pizza de Doce de Leite", quantidade: 0, valor: 44.9, classe1: "doce", classe2: "todos" },
  { nome: "Pizza de Prestígio", quantidade: 0, valor: 47.9, classe1: "doce", classe2: "todos" },
  { nome: "Pizza de Paçoca", quantidade: 0, valor: 44.9, classe1: "doce", classe2: "todos" },
  { nome: "Pizza de Nutella com Morango", quantidade: 0, valor: 59.9, classe1: "doce", classe2: "todos" },
  { nome: "Pizza de Chocolate Branco", quantidade: 0, valor: 49.9, classe1: "doce", classe2: "todos" },

  // 45 PIZZAS SALGADAS
  { nome: "Pizza de Calabresa", quantidade: 0, valor: 44.9, classe1: "salgada", classe2: "todos" },
  { nome: "Pizza de Mussarela", quantidade: 0, valor: 42.9, classe1: "salgada", classe2: "todos" },
  { nome: "Pizza Portuguesa", quantidade: 0, valor: 49.9, classe1: "salgada", classe2: "todos" },
  { nome: "Pizza de Frango com Catupiry", quantidade: 0, valor: 49.9, classe1: "salgada", classe2: "todos" },
  { nome: "Pizza de Quatro Queijos", quantidade: 0, valor: 54.9, classe1: "salgada", classe2: "todos" },
  { nome: "Pizza de Pepperoni", quantidade: 0, valor: 59.9, classe1: "salgada", classe2: "todos" },
  { nome: "Pizza de Bacon", quantidade: 0, valor: 49.9, classe1: "salgada", classe2: "todos" },
  { nome: "Pizza de Presunto e Queijo", quantidade: 0, valor: 44.9, classe1: "salgada", classe2: "todos" },
  { nome: "Pizza de Atum", quantidade: 0, valor: 49.9, classe1: "salgada", classe2: "todos" },
  { nome: "Pizza de Sardinha", quantidade: 0, valor: 44.9, classe1: "salgada", classe2: "todos" },
  { nome: "Pizza Napolitana", quantidade: 0, valor: 44.9, classe1: "salgada", classe2: "todos" },
  { nome: "Pizza Margherita", quantidade: 0, valor: 44.9, classe1: "salgada", classe2: "todos" },
  { nome: "Pizza de Lombo Canadense", quantidade: 0, valor: 54.9, classe1: "salgada", classe2: "todos" },
  { nome: "Pizza de Milho com Bacon", quantidade: 0, valor: 47.9, classe1: "salgada", classe2: "todos" },
  { nome: "Pizza de Frango com Milho", quantidade: 0, valor: 47.9, classe1: "salgada", classe2: "todos" },
  { nome: "Pizza de Carne Seca", quantidade: 0, valor: 59.9, classe1: "salgada", classe2: "todos" },
  { nome: "Pizza de Carne Moída", quantidade: 0, valor: 49.9, classe1: "salgada", classe2: "todos" },
  { nome: "Pizza de Strogonoff de Frango", quantidade: 0, valor: 54.9, classe1: "salgada", classe2: "todos" },
  { nome: "Pizza de Strogonoff de Carne", quantidade: 0, valor: 59.9, classe1: "salgada", classe2: "todos" },
  { nome: "Pizza de Camarão", quantidade: 0, valor: 74.9, classe1: "salgada", classe2: "todos" },
  { nome: "Pizza de Alho", quantidade: 0, valor: 39.9, classe1: "salgada", classe2: "todos" },
  { nome: "Pizza de Alho e Óleo", quantidade: 0, valor: 39.9, classe1: "salgada", classe2: "todos" },
  { nome: "Pizza de Palmito com Queijo", quantidade: 0, valor: 49.9, classe1: "salgada", classe2: "todos" },
  { nome: "Pizza de Escarola com Bacon", quantidade: 0, valor: 49.9, classe1: "salgada", classe2: "todos" },
  { nome: "Pizza de Rúcula com Tomate Seco", quantidade: 0, valor: 49.9, classe1: "salgada", classe2: "todos" },
  { nome: "Pizza de Champignon com Queijo", quantidade: 0, valor: 52.9, classe1: "salgada", classe2: "todos" },
  { nome: "Pizza de Cheddar com Bacon", quantidade: 0, valor: 54.9, classe1: "salgada", classe2: "todos" },
  { nome: "Pizza de Calabresa com Cebola", quantidade: 0, valor: 47.9, classe1: "salgada", classe2: "todos" },
  { nome: "Pizza de Calabresa com Catupiry", quantidade: 0, valor: 49.9, classe1: "salgada", classe2: "todos" },
  { nome: "Pizza de Frango com Cheddar", quantidade: 0, valor: 52.9, classe1: "salgada", classe2: "todos" },
  { nome: "Pizza de Frango com Bacon", quantidade: 0, valor: 52.9, classe1: "salgada", classe2: "todos" },
  { nome: "Pizza de Cinco Queijos", quantidade: 0, valor: 59.9, classe1: "salgada", classe2: "todos" },
  { nome: "Pizza de Queijo com Tomate", quantidade: 0, valor: 42.9, classe1: "salgada", classe2: "todos" },
  { nome: "Pizza de Peito de Peru", quantidade: 0, valor: 54.9, classe1: "salgada", classe2: "todos" },
  { nome: "Pizza de Pepperoni com Queijo", quantidade: 0, valor: 62.9, classe1: "salgada", classe2: "todos" },
  { nome: "Pizza de Bacon com Cheddar", quantidade: 0, valor: 54.9, classe1: "salgada", classe2: "todos" },
  { nome: "Pizza de Linguiça Toscana", quantidade: 0, valor: 49.9, classe1: "salgada", classe2: "todos" },
  { nome: "Pizza de Costela Desfiada", quantidade: 0, valor: 64.9, classe1: "salgada", classe2: "todos" },
  { nome: "Pizza de Picanha", quantidade: 0, valor: 74.9, classe1: "salgada", classe2: "todos" },
  { nome: "Pizza de Filé Mignon", quantidade: 0, valor: 74.9, classe1: "salgada", classe2: "todos" },
  { nome: "Pizza de Parmesão", quantidade: 0, valor: 49.9, classe1: "salgada", classe2: "todos" },
  { nome: "Pizza de Provolone", quantidade: 0, valor: 52.9, classe1: "salgada", classe2: "todos" },
  { nome: "Pizza de Gorgonzola", quantidade: 0, valor: 54.9, classe1: "salgada", classe2: "todos" },
  { nome: "Pizza de Brócolis com Bacon", quantidade: 0, valor: 49.9, classe1: "salgada", classe2: "todos" },
  { nome: "Pizza Especial da Casa", quantidade: 0, valor: 64.9, classe1: "salgada", classe2: "todos" },
];;
const contagem = document.querySelector(".num_carrinho");
let conta_carrinho = 0;

function carrinho() {
  document.querySelector(".carrinho_aba").classList.add("active_carrinho");
  document.documentElement.classList.toggle("sem_rolagem");
}
function carrinho_delet() {
  document.querySelector(".carrinho_aba").classList.remove("active_carrinho");
  document.documentElement.classList.remove("sem_rolagem");
}

function pizzas_carrinho(botao) {
  const pizza_nome = botao.dataset.nome;
  const list = pizzas_list.find((pizzas) => pizzas.nome == pizza_nome);
  /*Criação da div no carrinho*/
  if (list) {
    if (list.quantidade == 0) {
      list.quantidade++;

      conta_carrinho++;
      contagem.innerHTML = conta_carrinho;
      const aba = document.querySelector(".compra_carrinho");

      // CARTÃO DA PIZZA
      const div_adicionado_carrinho = document.createElement("div");
      div_adicionado_carrinho.setAttribute("id", "div_adicionado_carrinho");

      // ÁREA DA FOTO E DAS INFORMAÇÕES
      const div_pai_foto = document.createElement("div");
      div_pai_foto.setAttribute("class", "div_pai_foto");

      // FOTO DA PIZZA
      const imagem_original = botao
        .closest(".card_pizzas")
        .querySelector(".img_pizzas img");
      const foto = imagem_original.cloneNode(true);
      foto.classList.add("foto_item_carrinho");

      // NOME E PREÇO
      const informacoes = document.createElement("div");
      informacoes.classList.add("informacoes_pizza");

      const nome = document.createElement("p");
      nome.classList.add("nome_item_carrinho");
      nome.textContent = list.nome;

      const preco = document.createElement("span");
      preco.classList.add("preco_item_carrinho");
      preco.textContent = `R$${list.valor.toFixed(2).replace(".", ",")}`;

      informacoes.append(nome, preco);
      div_pai_foto.append(foto, informacoes);

      // BOTÕES DE QUANTIDADE
      const div_pai_delet = document.createElement("div");
      div_pai_delet.setAttribute("class", "div_pai_delet");

      const diminuir = document.createElement("button");
      diminuir.classList.add("botao_diminuir");
      diminuir.textContent = "−";
      diminuir.type = "button";

      diminuir.onclick = function () {
        if (list.quantidade > 1) {
          list.quantidade--;
          quantidade.textContent = list.quantidade;

          let n2 = list.valor * list.quantidade;

          preco.textContent = `R$ ${n2.toFixed(2).replace(".", ",")}`;

          atualizar_preco_total();
          atualizar_pizzas();
        }
      };

      const quantidade = document.createElement("span");
      quantidade.classList.add("quantidade_item_carrinho");
      quantidade.textContent = list.quantidade;

      const adicionar = document.createElement("button");
      adicionar.classList.add("botao_adicionar");
      adicionar.textContent = "+";
      adicionar.type = "button";

      adicionar.onclick = function () {
        list.quantidade++;

        let n1 = list.valor * list.quantidade;

        quantidade.textContent = list.quantidade;
        preco.textContent = `R$ ${n1.toFixed(2).replace(".", ",")}`;

        atualizar_preco_total();
        atualizar_pizzas();
      };
      const excluir = document.createElement("button");
      excluir.classList.add("botao_excluir_pizza");
      excluir.type = "button";
      excluir.innerHTML = '<i class="fa-solid fa-trash"></i>';

      excluir.onclick = function () {
        list.quantidade = 0;
        div_adicionado_carrinho.remove();
        conta_carrinho--;
        contagem.textContent = conta_carrinho;

        atualizar_preco_total();
        atualizar_pizzas();
        atualizar_pizzas_lixo();
      };

      div_pai_delet.append(diminuir, quantidade, adicionar, excluir);

      // MONTA O CARTÃO
      div_adicionado_carrinho.append(div_pai_foto, div_pai_delet);
      aba.append(div_adicionado_carrinho);

      //PARTE DA FINALIZAÇÃO
      function atualizar_preco_total() {
        let total = 0;

        for (let pizza of pizzas_list) {
          total += pizza.valor * pizza.quantidade;
        }

        const preco_total = document.querySelector(".preco_total");

        preco_total.textContent = `${total.toLocaleString("pt-BR", {
          style: "currency",
          currency: "BRL",
        })}`;
      }
      let total = 0;

      for (let pizza of pizzas_list) {
        total += pizza.valor * pizza.quantidade;
      }

      const preco_total = document.querySelector(".preco_total");

      preco_total.textContent = `${total.toLocaleString("pt-BR", {
        style: "currency",
        currency: "BRL",
      })}`;

      //PIZZAS A SER FINALIZADAS

      const pizzas_finalizadas = document.querySelector(".pizzas_quantidade");
      const div_finalizacao = document.createElement("p");
      div_finalizacao.innerHTML = `${list.nome} x${list.quantidade}`;

      pizzas_finalizadas.append(div_finalizacao);

      function atualizar_pizzas() {
        div_finalizacao.innerHTML = `${list.nome} x${list.quantidade}`;
      }
      function atualizar_pizzas_lixo() {
        div_finalizacao.remove();
      }
    }
  }
}






// Deixa o botão Todos selecionado inicialmente
const os_filtros = document.querySelector("#todos");
os_filtros.style.background = "red";
os_filtros.style.color = "#fff";

// Seleciona Todos, muda as cores e mostra todas as pizzas
function todos() {
  const os_filtros = document.querySelector("#todos");
  os_filtros.style.background = "red";
  os_filtros.style.color = "#fff";

  desativar_cor1();
  desativar_cor2();
  desativar_cor3();

  for (let pizza of pizzas_list) {
    const botao = document.querySelector(
      `[data-nome="${pizza.nome}"]`
    );
    const card = botao.closest(".card_pizzas");

    if (pizza.classe2 == "todos") {
      card.style.display = "";
    }
  }
}

// Remove a cor do filtro Vegana
function desativar_cor1() {
  const vegana = document.querySelector("#vegana");
  vegana.style.background = "";
  vegana.style.color = "";
}

// Remove a cor do filtro Pizza Doce
function desativar_cor2() {
  const doce = document.querySelector("#Pizza_Doce");
  doce.style.background = "";
  doce.style.color = "";
}

// Remove a cor do filtro Pizza Salgada
function desativar_cor3() {
  const salgada = document.querySelector("#Pizza_Salgada");
  salgada.style.background = "";
  salgada.style.color = "";
}

// Seleciona Vegana e mostra somente pizzas veganas
function pizza_vegana() {
  const vegana = document.querySelector("#vegana");
  vegana.style.background = "red";
  vegana.style.color = "#fff";

  desativar_cor4();
  desativar_cor2();
  desativar_cor3();

  for (let pizza of pizzas_list) {
    const botao = document.querySelector(
      `[data-nome="${pizza.nome}"]`
    );
    const card = botao.closest(".card_pizzas");

    if (pizza.classe1 == "vegana") {
      card.style.display = "";
    } else {
      card.style.display = "none";
    }
  }
}

// Seleciona Pizza Doce e mostra somente pizzas doces
function pizza_doce() {
  const doce = document.querySelector("#Pizza_Doce");
  doce.style.background = "red";
  doce.style.color = "#fff";

  desativar_cor1();
  desativar_cor4();
  desativar_cor3();

  for (let pizza of pizzas_list) {
    const botao = document.querySelector(
      `[data-nome="${pizza.nome}"]`
    );
    const card = botao.closest(".card_pizzas");

    if (pizza.classe1 == "doce") {
      card.style.display = "";
    } else {
      card.style.display = "none";
    }
  }
}

// Seleciona Pizza Salgada e mostra somente pizzas salgadas
function pizza_salgada() {
  const salgada = document.querySelector("#Pizza_Salgada");
  salgada.style.background = "red";
  salgada.style.color = "#fff";

  desativar_cor1();
  desativar_cor2();
  desativar_cor4();

  for (let pizza of pizzas_list) {
    const botao = document.querySelector(
      `[data-nome="${pizza.nome}"]`
    );
    const card = botao.closest(".card_pizzas");

    if (pizza.classe1 == "salgada") {
      card.style.display = "";
    } else {
      card.style.display = "none";
    }
  }
}

// Remove a cor do filtro Todos
function desativar_cor4() {
  const todos = document.querySelector("#todos");
  todos.style.background = "";
  todos.style.color = "";
}


const pesquisa = document.querySelector(".procura");

pesquisa.addEventListener("input", function() {
  const texto = pesquisa.value.toLowerCase();

  for (let pizza of pizzas_list) {
    const botao = document.querySelector(
      `[data-nome="${pizza.nome}"]`
    );

    const card = botao.closest(".card_pizzas");

    if (pizza.nome.toLowerCase().includes(texto)) {
      card.style.display = "";
    } else {
      card.style.display = "none";
    }
  }
});