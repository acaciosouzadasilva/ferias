const contador = document.querySelector('#contador');



const timer = ()=>{
    const second = 1000;
    const minute = second * 60;
    const hour = minute * 60;
    const day = hour * 24;

    const data = new Date('07/01/2024 00:00').getTime();
    let agora = new Date(Date.now()).getTime();
    const diff = Math.floor((data - agora)/day);
    return `Faltam ${diff+1} dias` ;
}


contador.innerText = timer();
