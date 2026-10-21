/* Navegação de uma semana: mostra um dia por vez e guarda no aparelho o que já foi lido.
   Cada página de semana tem <body data-semana="NN"> e um <article class="dia" data-n="1..7"> por dia. */
(function () {
  var SEMANA = document.body.dataset.semana || "0";
  function ler(k) { try { return localStorage.getItem(k); } catch (e) { return null; } }
  function gravar(k, v) { try { localStorage.setItem(k, v); } catch (e) {} }
  function chave(k) { return "s" + SEMANA + "-lido-" + k; }

  var artigos = Array.prototype.slice.call(document.querySelectorAll("article.dia"));
  artigos.sort(function (a, b) { return a.dataset.n - b.dataset.n; });
  var dias = artigos.map(function (a) { return Number(a.dataset.n); });
  var TOTAL = dias.length;

  // Abre no primeiro dia ainda não lido por completo, ou no dia pedido no endereço (#d3).
  function diaCompleto(n) {
    return ["manha", "tarde", "noite"].every(function (j) { return ler(chave(n + "-" + j)) === "1"; });
  }
  var atual = dias.filter(function (n) { return !diaCompleto(n); })[0] || dias[dias.length - 1];
  var m = /^#d(\d+)/.exec(location.hash || "");
  if (m && dias.indexOf(Number(m[1])) !== -1) atual = Number(m[1]);

  function mostrar(n, rolar) {
    atual = n;
    artigos.forEach(function (a) { a.hidden = Number(a.dataset.n) !== n; });
    document.getElementById("contador").textContent = "Dia " + n + " de " + TOTAL;
    var i = dias.indexOf(n);
    document.getElementById("ant").disabled = i <= 0;
    document.getElementById("prox").disabled = i >= dias.length - 1;
    montarLista();
    if (rolar) window.scrollTo(0, 0);
  }

  function montarLista() {
    var html = "<ol>";
    artigos.forEach(function (a) {
      var n = Number(a.dataset.n);
      var ref = a.querySelector(".ref").textContent.trim();
      var cls = n === atual ? ' class="atual"' : "";
      var estado = n === atual ? "lendo" : (diaCompleto(n) ? "lido ✓" : "");
      html += "<li" + cls + '><span class="n">Dia ' + n + '</span><a href="#d' + n + '" data-ir="' + n + '">' + ref + '</a><span class="estado">' + estado + "</span></li>";
    });
    document.getElementById("lista").innerHTML = html + "</ol>";
  }

  document.getElementById("ant").addEventListener("click", function () {
    var i = dias.indexOf(atual); if (i > 0) mostrar(dias[i - 1], true);
  });
  document.getElementById("prox").addEventListener("click", function () {
    var i = dias.indexOf(atual); if (i < dias.length - 1) mostrar(dias[i + 1], true);
  });
  document.getElementById("lista").addEventListener("click", function (e) {
    var a = e.target.closest("[data-ir]");
    if (!a) return;
    e.preventDefault();
    mostrar(Number(a.dataset.ir), true);
  });

  function pintarLido(k) {
    var on = ler(chave(k)) === "1";
    document.querySelectorAll('[data-lido="' + k + '"]').forEach(function (b) {
      b.setAttribute("aria-pressed", on ? "true" : "false");
      b.textContent = on ? "Lido ✓" : "Marcar como lido";
    });
    document.querySelectorAll('[data-feito="' + k + '"]').forEach(function (s) { s.textContent = on ? "✓" : ""; });
  }
  document.querySelectorAll("[data-lido]").forEach(function (b) {
    var k = b.dataset.lido;
    pintarLido(k);
    b.addEventListener("click", function () {
      gravar(chave(k), ler(chave(k)) === "1" ? "0" : "1");
      pintarLido(k);
      montarLista();
    });
  });

  mostrar(atual, false);
})();
