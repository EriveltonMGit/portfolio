

// FUNÇÃO PARA BAIXAR O CV
function baixarCV(){
    const alerta = confirm('Deseja baixar o Curriculo do desenvolvedor?');
    if(alerta == true){
        const link = document.createElement('a');
        link.href = 'https://drive.google.com/uc?export=download&id=1sEQiuiZWSWkV2MxaHqLsGsdw6obs8Xos';
        link.download = 'Curriculo.pdf'; // Nome sugerido para o arquivo
        document.body.appendChild(link);
        link.click();
        document.body.removeChild(link); // Remove o link após o clique
    } else {
        return;
    }
}