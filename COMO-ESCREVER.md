# Como escrever uma semana

Guia para quem gera as semanas (a rotina do Claude ou você, à mão).

## Tom
- Português do Brasil. Tradução bíblica: NVI. Cite a passagem inteira do dia, não só o versículo famoso.
- Sem bajulação e sem autoajuda. A Palavra é confronto e reconciliação: cada dia expõe algo e depois mostra o que Deus oferece.
- Textos curtos, mas profundos. Contexto histórico coerente; quando algo for discutido entre estudiosos, diga isso na seção "Para conferir".

## Quando a semana vem de um culto
- Cada dia pega UM ponto ou UMA referência da pregação. Não resuma as anotações.
- Complemente: traga outros textos, personagens e conexões bíblicas que iluminem aquele ponto (ex.: Gideão chamado de "poderoso guerreiro" enquanto se escondia).
- Quando algo da pregação precisar de ajuste à luz do texto, diga com respeito e mostre a base.
- Revise listas e números ("cinco desculpas" precisa listar cinco) e só ponha entre aspas o que for citação exata da NVI.

## Estrutura de cada dia (cerca de 3 minutos por janela, 400-480 palavras cada)
1. **Manhã · Ler e situar**: o texto na NVI, um subtítulo, o contexto e uma pergunta "Para carregar hoje".
2. **Tarde · Confronto**: um subtítulo, outras passagens que expõem a minha desconfiança, controle ou orgulho, e um exercício curto.
3. **Noite · Reconciliação**: um subtítulo, o que Deus oferece ali, apontando para Cristo, e uma oração com lacuna para preencher.
4. **Para conferir**: 2 ou 3 notas de fontes, datas ou questões de tradução.

## Como publicar uma semana nova
1. Copie `semanas/01.html` para `semanas/NN.html` (NN com dois dígitos), troque o `<title>`, o `data-semana="NN"` do `<body>` e os 7 `<article class="dia" data-n="1..7">`.
2. Mantenha os ids no padrão `d{n}-manha`, `d{n}-tarde`, `d{n}-noite` e os botões `data-lido="{n}-manha"` etc.
3. Em `index.html`, inclua a semana logo abaixo do marcador `PROXIMA-SEMANA` e passe a classe `atual` para ela.
4. Em `temas.md`, mova o tema de "Próximos" para "Publicados".
