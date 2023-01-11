const mario = document.querySelector('.mario'); /*Obtendo imagem do mario*/
const pipe = document.querySelector('.pipe'); /*Obtendo imagem do cano*/

const jump = () => {
    mario.classList.add('jump'); /*Adicionando a classe css*/

    setTimeout(()=>{
        mario.classList.remove('jump');
    }, 500)
}

const loop = setInterval(()=>{ //()=> referece a uma função
    const pipePosition = pipe.offsetLeft;
    const marioPosition = +window.getComputedStyle(mario).bottom.replace('px',''); //Obtendo a propriedade Bottom

    if (pipePosition <= 120 && pipePosition > 0 && marioPosition < 80){
        pipe.style.animation = 'none';
        pipe.style.left = `${pipePosition}px` //passando a propria posição do pipePosition para para o jogo
        
        mario.style.animation = 'none';
        mario.style.bottom = `${marioPosition}px`;

        mario.src= "./images/game-over.png";
        mario.style.width = '75px';
        mario.style.marginLeft = '50px';

        clearInterval(loop);
    }
}, 10) // Segundo paramentro referese ao tempo

document.addEventListener('keydown', jump);