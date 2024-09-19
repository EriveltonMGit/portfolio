

// FUNÇÃO PARA O MENU FICAR COLADO COM O TOPO DO BODY
document.addEventListener('DOMContentLoaded', function () {
    var navbar = document.getElementById('nav_bar');

    // Verifica se o navbar foi encontrado antes de executar o restante do código
    if (navbar) {
        window.onscroll = function () {
            if (window.scrollY > 50) { // Quando rolar mais de 50px
                navbar.style.marginTop = '-3vh'; // Define a margem para -3vh px o menu esta com 3vh do topo
            } else {
                navbar.style.marginTop = '0vh'; // Restaura a margem para 1vh
            }
        };
    }
});






// FUNÇÃO PARA MUDAR A COR DO BODY
function mudarCorBody() {
    var mudarCorBody = window.document.body;

    // FUNÇÃO PARA MOSTAR O ICON DO SOL SE ESTIVER NONE 
    if (sol.style.display === 'none' || sol.style.display === '') {
        sol.style.display = 'flex'
        sol.style.color = '#fd7e14'
        lua.style.display = 'none'
        
    }
    else {
        sol.style.display = 'none'
        lua.style.display = 'flex'
       
    }
    // ---------------------------------------------------------------------
    var corAtual = window.getComputedStyle(mudarCorBody).backgroundColor;
    var corBranca = 'rgb(233, 236, 239)';
    if (corAtual === corBranca) {
        mudarCorBody.style.backgroundColor = '#0e1018'; //cor preto

        // FUNÇÃO PARA MUDAR A COR DO COS CARDS QUE TENHAM A CLASSE  ->> class="mudarCor"
        let mudarCor = document.querySelectorAll(`.mudarCor`)
        mudarCor.forEach(function(elementosCards){
            elementosCards.style.backgroundColor = ' '
            elementosCards.style.border = '1px solid #ffffffa9'
        })

       


        // FUNÇÃO PARA MUDAR A COR DOS TITULOS DOS CARDS
        let mudarCorTextos = document.querySelectorAll(`.mudarCorTextos`)
         mudarCorTextos.forEach(function(titulos){
          titulos.style.color = '#f8f9fa'
         })
          // FUNÇÃO PARA MUDAR A CORD DO BK DA IMG DO PERFIL
        let bk_img_perfil = document.querySelectorAll(`.bk_img_perfil`)
        bk_img_perfil.forEach(function(bk_img_perfil_1){
            bk_img_perfil_1.style.backgroundColor = ''
        })

    }
    else {
        mudarCorBody.style.backgroundColor = '#e9ecef'; //--bs-gray-200 

          // FUNÇÃO PARA MUDAR A COR DO COS CARDS QUE TENHAM A CLASSE  ->> class="mudarCor"
          let mudarCor = document.querySelectorAll(`.mudarCor`)
          mudarCor.forEach(function(elementosCards){
              elementosCards.style.backgroundColor = ''
               elementosCards.style.border = ''
          })
          

           // FUNÇÃO PARA MUDAR A COR DOS TITULOS DOS CARDS
        let mudarCorTextos = document.querySelectorAll(`.mudarCorTextos`)
        mudarCorTextos.forEach(function(titulos){
         titulos.style.color = ''
        })

           // FUNÇÃO PARA MUDAR A CORD DO BK DA IMG DO PERFIL
           let bk_img_perfil = document.querySelectorAll(`.bk_img_perfil`)
           bk_img_perfil.forEach(function(bk_img_perfil_1){
               bk_img_perfil_1.style.backgroundColor = ''
           })

       
    }




}



// FUNÇÃO DO BOTÃO VAMOS CONVERSAR DO MENU
function vamosConverar(){
  var msg_conversa =  confirm('Deseja conversar com o Desenvolvedor?')
  if(msg_conversa){
    location.href = 'https://wa.me/5561981579569?text=Ol%C3%A1!%20Estou%20interessado%20em%20obter%20um%20or%C3%A7amento%20para%20um%20projeto%20de%20web%20design.%20Poderia%20me%20enviar%20mais%20informa%C3%A7%C3%B5es%20sobre%20seus%20servi%C3%A7os%20e%20os%20pre%C3%A7os%3F%20Fico%20no%20aguardo%2C%20obrigado!'
  }
}



// MENU DEVICE
function abrirMenu() {
  var menu = document.getElementById('menu');

  if (menu.classList.contains('show')) {
      menu.classList.remove('show');
  } else {
      menu.classList.add('show');
  }
}
