
# Christmas Game 2023

Esse foi um projeto bem simples, um joguinho usando um pouco dos meus conhecimentos, apenas para deixar essa data marcada!
## Desafios

Alguns dos meus desafios foram:
- Sortear uma X e um Y dinâmicosa para a posição do X na qual será levado o presente;
- Criar um timer regressivo;
- E o mais diferente e que já tinha pretenção de usar em algum projeto a um bom tempo: a API Nativa "navigator.share", para compartilhar o resultado.
## Aprendizados

Por final aprendi algumas coisas interessantes como: 

### Sorteio de Posições Dinâmico
No trecho abaixo ao mouse adentrar adentrar dentro do X, ocorre: 
- Criação de um eventListener, para justamento fazer essa verifição de quando o mouse adentra o X;

- A soma de +1 no "count" variável que armazena a quantidade total de presentes e implementação disso no HTML; 

- O chamado da função sortearPosicao(), que sorteia um valor entre 0 e 92 (92 ao invés de 100 para garantir que o tamanho da imagem não passasse) e o concatena com o caractere "%" para garantir a responsividade do game.
```js
let count = 0

function sortearPosicao() {
    let xValue = Math.floor(Math.random() * 92)
    let yValue = Math.floor(Math.random() * 92)
    x.style.top = `${yValue}%`
    x.style.left = `${xValue}%`
}

x.addEventListener("mouseenter", (e) => {
    count++;
    statsPresents.innerText = `Presentes ${count}`
    sortearPosicao()
})
```

### Criação do Timer
Funcionamento: 

- Para inicia-lo basta chama-lo uma vez em algum outro trecho do código;

- Verifição do que deve ser feito, diminuir os minutos ou diminuir os segundos apenas ou ainda finalizar o game;

- Chamar novamente a si próprio, depois de um segundo;

- Em caso de minutos serem == 0 e segundos também serem == 0, chamar função endGame para, como o próprio nome diz, finalizar o jogo.
```js

let min = 1;
let sec = 0;

function timer() {
    if (sec == 0 && min > 0) {
        min--;
        sec = 59;
        statsTimer.innerText = `${min}:${sec < 10 ? "0" + sec : sec}`
        setTimeout(() => {
            timer()
        }, 1000)
    } else if (sec > 0) {
        sec--
        statsTimer.innerText = `${min}:${sec < 10 ? "0" + sec : sec}`
        setTimeout(() => {
            timer()
        }, 1000)
    } if (sec == 0 && min == 0) {
        statsTimer.innerText = `${min}:${sec < 10 ? "0" + sec : sec}`

        endGame()
    }
}

timer()
```

### Share 
Código bem fácil, por conta de ser tudo nativo, o único "valor externo" nesse caso é o count.
Vale lembrar que o usuário precisa autorizar esse compartilhamento, ele não é automático.

```js

let count; 

async function share(){
    const data = {

        title: 'Feliz Natal!',
        text: `Consegui salvar o Natal de ${count} famílias! Será que você consegue me superar? Clique no link abaixo, jogue e descubra!`,
        url: 'https://react-dev-victor-landing-page.netlify.app/'

    }

    if(navigator.canShare && navigator.canShare(data)){

        await navigator.share(data);

    }
}
```
# Resultado

![](https://raw.githubusercontent.com/Victor-Lis/Christmas-Game-2023/main/Images/Tela%20Start.png)

![](https://raw.githubusercontent.com/Victor-Lis/Christmas-Game-2023/main/Images/Game1.png)

![](https://raw.githubusercontent.com/Victor-Lis/Christmas-Game-2023/main/Images/Game2.png)

![](https://raw.githubusercontent.com/Victor-Lis/Christmas-Game-2023/main/Images/Game3.png)

![](https://raw.githubusercontent.com/Victor-Lis/Christmas-Game-2023/main/Images/Tela%20End.png)
## Autores

- [@Victor-Lis](https://github.com/Victor-Lis)
