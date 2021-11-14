window.onload = () => {
    
    let submitBtn = document.querySelector('button[type=submit]');
    let url = document.querySelector('input[name=imgUrl]');
    let localName = document.querySelector('input[name=titulo]');
    let radioBtns = document.querySelectorAll('input[name=pais]');
    let descricao = document.querySelectorAll('input[name=descricao]');

    submitBtn.addEventListener('click', event => {
        event.preventDefault();

        // criando card
        let cartao = document.createElement('div');
        cartao.className = 'card';

        // Imagem inserido no card
        let localImagem = document.createElement('div');
        localImagem.className = 'local';
        let imagem = document.createElement('img');
        imagem.setAttribute('src', url.value);
        localImagem.appendChild(imagem);
        cartao.appendChild(localImagem);

        // Titulo do local no card
        let nomeLocal = document.createElement('h3');
        nomeLocal.innerHTML += `<h3>${localName.value}</h3>`
        cartao.appendChild(nomeLocal);

        // Verificar qual radioButton foi escolhido
        let escolhido = '';
        radioBtns.forEach(selecionado => {
            (selecionado.checked) ? escolhido = selecionado: ''
        });

        cartao.innerHTML += `<h3>${radioBtns[escolhido.value]}</h3>`

        // Descrição 
        let description = document.createElement('p');
        description.innerHTML = `<p>${descricao.value}</p>`;
        cartao.appendChild(description);
        
        document.querySelector('section').appendChild(cartao);
    })
}