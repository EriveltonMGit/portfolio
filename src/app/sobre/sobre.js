


function abrirCard() {
    var card_flu_certificado_1 = document.getElementById(`card_flu_certificado_1`)

    if (card_flu_certificado_1.style.display === 'none' || card_flu_certificado_1.style.display === '') {
        card_flu_certificado_1.style.display = 'flex'
    }
    else {
        card_flu_certificado_1.style.display = 'none'
    }


}
// FUNÇÃO PARA FECHAR O CARD 2
function abrirCard_2() {
    var card_flu_certificado_2 = document.getElementById(`card_flu_certificado_2`)
    if (card_flu_certificado_2.style.display === 'none' || card_flu_certificado_2.style.display === '') {
        card_flu_certificado_2.style.display = 'flex'
    }
    else {
        card_flu_certificado_2.style.display = 'none'
    }

}

function abrirCard_3() {
    var card_flu_certificado_3 = document.getElementById(`card_flu_certificado_3`)
    if (card_flu_certificado_3.style.display === 'none' || card_flu_certificado_3.style.display === '') {
        card_flu_certificado_3.style.display = 'flex'
    }
    else {
        card_flu_certificado_3.style.display = 'none'
    }
}
function abrirCard_4() {
    var card_flu_certificado_4 = document.getElementById(`card_flu_certificado_4`)
    if (card_flu_certificado_4.style.display === 'none' || card_flu_certificado_4.style.display === '') {
        card_flu_certificado_4.style.display = 'flex'
    }
    else {
        card_flu_certificado_4.style.display = 'none'
    }
}
function abrirCard_5() {
    var card_flu_certificado_5 = document.getElementById(`card_flu_certificado_5`)
    if (card_flu_certificado_5.style.display === 'none' || card_flu_certificado_5.style.display === '') {
        card_flu_certificado_5.style.display = 'flex'
    }
    else {
        card_flu_certificado_5.style.display = 'none'
    }
}
function abrirCard_6() {
    var card_flu_certificado_6 = document.getElementById(`card_flu_certificado_6`)
    if (card_flu_certificado_6.style.display === 'none' || card_flu_certificado_6.style.display === '') {
        card_flu_certificado_6.style.display = 'flex'
    }
    else {
        card_flu_certificado_6.style.display = 'none'
    }
}

// FUNÇÃO PARA FECHAR O CARD 1
function fecharCard() {
    var card_flu_certificado_1 = document.getElementById(`card_flu_certificado_1`).style.direction = 'none'
    var card_flu_certificado_2 = document.getElementById(`card_flu_certificado_2`).style.display = 'none'
    var card_flu_certificado_3 = document.getElementById(`card_flu_certificado_3`).style.display = 'none'
    var card_flu_certificado_4 = document.getElementById(`card_flu_certificado_4`).style.display = 'none'
    var card_flu_certificado_5 = document.getElementById(`card_flu_certificado_5`).style.display = 'none'
    var card_flu_certificado_5 = document.getElementById(`card_flu_certificado_6`).style.display = 'nonw'
}





// ANIMAÇÃO SCROLL CARDS
document.addEventListener("DOMContentLoaded", function() {
    const cards = document.querySelectorAll('#animation_text'); // Seleciona todos os cards
    const visibleCards = new Set(); // Conjunto para manter o controle dos cards visíveis
    let lastScrollY = window.scrollY; // Armazena a última posição do scroll
  
    const observer = new IntersectionObserver((entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          entry.target.classList.add('visible'); // Adiciona a classe quando o card está visível
          visibleCards.add(entry.target); // Adiciona o card ao conjunto se estiver visível
        } 
      });
    }, {
      threshold: 0.1 // O card aparecerá quando 10% dele estiver na viewport
    });
  
    cards.forEach(card => observer.observe(card)); // Começa a observar cada card
  
    window.addEventListener('scroll', () => {
      const currentScrollY = window.scrollY;
  
      if (currentScrollY < lastScrollY) { // Se rolando para cima
        visibleCards.forEach(card => {
          const rect = card.getBoundingClientRect(); // Obtém as dimensões do card
          if (rect.bottom < 0) { // Se o card saiu da viewport
            card.classList.remove('visible'); // Remove a classe do card
            visibleCards.delete(card); // Remove o card do conjunto
          }
        });
      }
  
      lastScrollY = currentScrollY; // Atualiza a última posição do scroll
    });
  });