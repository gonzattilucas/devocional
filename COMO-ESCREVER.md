# Como escrever uma semana

Guia para quem gera as semanas (a rotina do Claude ou você, à mão).

## Tom
- Português do Brasil. Tradução bíblica: NVI. Cite a passagem inteira do dia, não só o versículo famoso.
- Sem bajulação e sem autoajuda. A Palavra é confronto e reconciliação: cada dia expõe algo e depois mostra o que Deus oferece.
- Textos curtos, mas profundos. Contexto histórico coerente; quando algo for discutido entre estudiosos, diga isso na seção "Para conferir".

## Estrutura de cada dia (cerca de 10 minutos no total)
1. **Manhã · Ler e situar** (4 min): o texto na NVI, "O que estava acontecendo" (autor, destinatários, situação) e uma pergunta "Para carregar hoje".
2. **Tarde · Confronto** (3 min): onde o texto expõe a minha desconfiança, controle ou orgulho, com um exercício curto.
3. **Noite · Reconciliação** (3 min): o que Deus oferece ali, apontando para Cristo, e uma oração com lacuna para preencher.
4. **Para conferir**: 2 ou 3 notas de fontes, datas ou questões de tradução.

## Como publicar uma semana nova
1. Copie `semanas/01.html` para `semanas/NN.html` (NN com dois dígitos), troque o `<title>`, o `data-semana="NN"` do `<body>` e os 7 `<article class="dia" data-n="1..7">`.
2. Mantenha os ids no padrão `d{n}-manha`, `d{n}-tarde`, `d{n}-noite` e os botões `data-lido="{n}-manha"` etc.
3. Em `index.html`, inclua a semana logo abaixo do marcador `PROXIMA-SEMANA` e passe a classe `atual` para ela.
4. Em `temas.md`, mova o tema de "Próximos" para "Publicados".
