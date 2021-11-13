window.onload = () => {
    let submitBtn = document.querySelector('button[type=submit]');
    let url = document.querySelector('input[name=imgUrl]');
    let localName = document.querySelector('input[name=titulo]');
    let radioBtns = document.querySelectorAll('input[name=pais]');
    let descricao = document.querySelectorAll('input[name=descricao]');

    // criando card
    let cartao = document.createElement('div');
    cartao.className = 'card';
    let main = document.querySelector('main');
    main.appendChild(cartao);

    submitBtn.addEventListener('click', event => {
        event.preventDefault();

        // Imagem inserido no card
        let localImagem = document.createElement('div');
        localImagem.className = 'local';
        let imagem = document.createElement('img');
        imagem.setAttribute('src', url.value);
        localImagem.appendChild(imagem);
        cartao.appendChild(localImagem);

        // Titulo do local no card
        let nomeLocal = document.createElement('h3');
        nomeLocal.innerHTML = `<h3>${localName.value}</h3>`
        cartao.appendChild(nomeLocal);

        // Verificar qual radioButton foi escolhido
        let escolhido = '';
        radioBtns.map(selecionado => {
            (selecionado.checked) ? escolhido = selecionado: ''
        });

        // Região inserida no card
        let regiao = document.createElement('h4');
        regiao.innerHTML = `<h4>Região: ${radioBtns[escolhido.value]}</h4>`
        cartao.appendChild(regiao);

        // Descrição 
        let description = document.createElement('p');
        description.innerHTML = `<p>${descricao.value}</p>`;
        cartao.appendChild(description);
    };
}