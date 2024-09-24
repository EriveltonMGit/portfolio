


// FUNÇÃO PARA ABRIR CARD INCIO

function home() {
  let inicio = document.getElementById(`inicio`)
  let sobre = document.getElementById(`sobre`)
  let servicos = document.getElementById(`servicos`)
  let portfolio = document.getElementById(`portfolio`)
  let contato = document.getElementById(`contatos`)
  let nav_bar = document.getElementById(`nav_bar`)

  // FUNÇÃO PARA DEIXAR O BOTÃO QUE FOI CLICADO MARCADO
  let home = document.getElementById(`btn_home`)
  let btn_sobre = document.getElementById(`btn_sobre`)
  let btn_servicos = document.getElementById(`btn_servicos`)
  let btn_portfolio = document.getElementById(`btn_portfolio`)
  let btn_contato = document.getElementById(`btn_contato`)



  if (inicio.style.display === 'none' || inicio.style.display === '') {
    inicio.style.display = 'flex'
   
    // coloca o card sobre none
    sobre.style.display = 'none'
    // coloca o card serviços none
    servicos.style.display = 'none'
    // coloca o card portifolio none
    portfolio.style.display = 'none'
    // coloca o card contato none
    contato.style.display = 'none'


    // FUNÇÃO PARA MUDAR A COR DO BOTAO CLICADO NO MENU -- HOME/INICIO
    home.style.backgroundColor = 'var(--bs-gray-400)'
    btn_sobre.style.backgroundColor = ''
    btn_servicos.style.backgroundColor = ''
    btn_portfolio.style.backgroundColor = ''
    btn_contato.style.backgroundColor = ''

  }

}



// FUNÇÃO PARA ABRIR E FECHAR O CARD SOBRE 
function sobre() {
  let sobre = document.getElementById(`sobre`)
  let inicio = document.getElementById(`inicio`)
  let servicos = document.getElementById(`servicos`)
  let portfolio = document.getElementById(`portfolio`)
  let contato = document.getElementById(`contatos`)

  // FUNÇÃO PARA DEIXAR O BOTÃO QUE FOI CLICADO MARCADO
  let home = document.getElementById(`btn_home`)
  let btn_sobre = document.getElementById(`btn_sobre`)
  let btn_servicos = document.getElementById(`btn_servicos`)
  let btn_portfolio = document.getElementById(`btn_portfolio`)
  let btn_contato = document.getElementById(`btn_contato`)


  if (sobre.style.display === 'none' || sobre.style.display === '') {
    sobre.style.display = 'flex'
    // coloca o card inicio none 
    inicio.style.display = 'none'
    // coloca o card serviços none 
    servicos.style.display = 'none'
    // coloca o card portifolio none
    portfolio.style.display = 'none'
    // coloca o card portifolio none
    contato.style.display = 'none'
    // FUNÇÃO PARA MUDAR A COR DO BOTAO DO MENU INICO NONE
    btn_sobre.style.backgroundColor = 'var(--bs-gray-400)'
    home.style.backgroundColor = ''
    btn_servicos.style.backgroundColor = ''
    btn_portfolio.style.backgroundColor = ''
    btn_contato.style.backgroundColor = ''

  }
}


// FUNÇÃO PARA ABIRI O CARD O CARD SOBRE
function servicos() {
  let servicos = document.getElementById(`servicos`)
  let sobre = document.getElementById(`sobre`)
  let inicio = document.getElementById(`inicio`)
  let portfolio = document.getElementById(`portfolio`)
  let contato = document.getElementById(`contatos`)

  // FUNÇÃO PARA DEIXAR O BOTÃO QUE FOI CLICADO MARCADO
  let home = document.getElementById(`btn_home`)
  let btn_sobre = document.getElementById(`btn_sobre`)
  let btn_servicos = document.getElementById(`btn_servicos`)
  let btn_portfolio = document.getElementById(`btn_portfolio`)
  let btn_contato = document.getElementById(`btn_contato`)

  if (servicos.style.display === 'none' || servicos.style.display === '') {
    servicos.style.display = 'flex'
    // coloca o card inicio none 
    inicio.style.display = 'none'
    // coloca o card serviços none 
    sobre.style.display = 'none'
    // coloca o card portifolio none
    portfolio.style.display = 'none'
    // coloca o card contato none
    contato.style.display = 'none'

    // FUNÇÃO PARA MUDAR A COR DO BOTAO DO MENU INICO NONE
    btn_servicos.style.backgroundColor = 'var(--bs-gray-400)'
    btn_sobre.style.backgroundColor = ''
    home.style.backgroundColor = ''
    btn_portfolio.style.backgroundColor = ''
    btn_contato.style.backgroundColor = ''

  }
}


// FUNÇÃO PARA ABRIR O CARD PORTIFOLIO
function portifolio() {
  let portfolio = document.getElementById(`portfolio`)
  let servicos = document.getElementById(`servicos`)
  let sobre = document.getElementById(`sobre`)
  let inicio = document.getElementById(`inicio`)
  let contato = document.getElementById(`contatos`)


  // FUNÇÃO PARA DEIXAR O BOTÃO QUE FOI CLICADO MARCADO
  let home = document.getElementById(`btn_home`)
  let btn_sobre = document.getElementById(`btn_sobre`)
  let btn_servicos = document.getElementById(`btn_servicos`)
  let btn_portfolio = document.getElementById(`btn_portfolio`)
  let btn_contato = document.getElementById(`btn_contato`)

  if (portfolio.style.display === 'none' || portfolio.style.display === '') {
    portfolio.style.display = 'flex'
    // coloca o card inicio none 
    inicio.style.display = 'none'
    // coloca o card sobre none 
    sobre.style.display = 'none'
    // coloca o card servicos none
    servicos.style.display = 'none'
    // coloca o card contato none
    contato.style.display = 'none'

    // FUNÇÃO PARA MUDAR A COR DO BOTAO DO MENU INICO NONE
    btn_portfolio.style.backgroundColor = 'var(--bs-gray-400)'
    btn_sobre.style.backgroundColor = ''
    home.style.backgroundColor = ''
    btn_servicos.style.backgroundColor = ''
    btn_contato.style.backgroundColor = ''
  }
}




// FUNÇÃO PARA ABRIR O CARD CONTATO
function contato() {
  let portfolio = document.getElementById(`portfolio`)
  let servicos = document.getElementById(`servicos`)
  let sobre = document.getElementById(`sobre`)
  let inicio = document.getElementById(`inicio`)
  let contato = document.getElementById(`contatos`)


  // FUNÇÃO PARA DEIXAR O BOTÃO QUE FOI CLICADO MARCADO
  let home = document.getElementById(`btn_home`)
  let btn_sobre = document.getElementById(`btn_sobre`)
  let btn_servicos = document.getElementById(`btn_servicos`)
  let btn_portfolio = document.getElementById(`btn_portfolio`)
  let btn_contato = document.getElementById(`btn_contato`)

  if (contato.style.display === 'none' || contato.style.display === '') {
    contato.style.display = 'flex'
    // coloca o card inicio none 
    inicio.style.display = 'none'
    // coloca o card sobre none 
    sobre.style.display = 'none'
    // coloca o card servicos none
    servicos.style.display = 'none'
    // coloca o card portifolio none
    portfolio.style.display = 'none'

    // FUNÇÃO PARA MUDAR A COR DO BOTAO DO MENU INICO NONE
    btn_contato.style.backgroundColor = 'var(--bs-gray-400)'
    btn_sobre.style.backgroundColor = ''
    home.style.backgroundColor = ''
    btn_servicos.style.backgroundColor = ''
    btn_portfolio.style.backgroundColor = ''
    
  }
}







// FUNÇÃO PARA ABRIR O SITE DO DESENVOLVEDOR
function site() {
  let msg = confirm('Deseja abrir o site do desenvolvedor??')

  if (msg) {
    location.href = 'https://web-desing-page.netlify.app/'
  }
  else {
    return
  }
}



/* Configuração básica do Particles.js */
particlesJS('particles-js',
  {
    "particles": {
      "number": {
        "value": 80,
        "density": {
          "enable": true,
          "value_area": 800
        }
      },
      "color": {
        "value": "#ffffff"
      },
      "shape": {
        "type": "circle",
        "stroke": {
          "width": 0,
          "color": "#000000"
        },
        "polygon": {
          "nb_sides": 5
        }
      },
      "opacity": {
        "value": 0.5,
        "random": false,
        "anim": {
          "enable": false,
          "speed": 1,
          "opacity_min": 0.1,
          "sync": false
        }
      },
      "size": {
        "value": 3,
        "random": true,
        "anim": {
          "enable": false,
          "speed": 40,
          "size_min": 0.1,
          "sync": false
        }
      },
      "line_linked": {
        "enable": true,
        "distance": 100,//esse valor altera o tamanho das moleculas 150
        "color": "#ffffff",
        "opacity": 0.4,
        "width": 1
      },
      "move": {
        "enable": true,
        "speed": 6,
        "direction": "none",
        "random": false,
        "straight": false,
        "out_mode": "out",
        "bounce": false,
        "attract": {
          "enable": false,
          "rotateX": 600,
          "rotateY": 900//1500
        }
      }
    },
    "interactivity": {
      "detect_on": "canvas",
      "events": {
        "onhover": {
          "enable": true,
          "mode": "repulse"
        },
        "onclick": {
          "enable": true,
          "mode": "push"
        },
        "resize": true
      },
      "modes": {
        "grab": {
          "distance": 400,
          "line_linked": {
            "opacity": 1
          }
        },
        "bubble": {
          "distance": 400,
          "size": 40,
          "duration": 2,
          "opacity": 8,
          "speed": 3
        },
        "repulse": {
          "distance": 200,
          "duration": 0.4
        },
        "push": {
          "particles_nb": 4
        },
        "remove": {
          "particles_nb": 2
        }
      }
    },
    "retina_detect": true
  }
);
