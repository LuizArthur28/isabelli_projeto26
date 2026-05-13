function isabelli(){
       fetch('dados.json')
            .then(response =>response.json())
            .then(dadosana =>{
                 tablet = document.getElementById('destino');

                 dadosana.foreach(pessoa => {
                 

                    let linha = document.createElement('tr');

                        linha.innerHTML = 
                        "<td>" + pessoa.nome + "</td>" +
                        "<td>" + pessoa.idade + "</td>" +
                        "<td>" + pessoa.altura + "</td>" +
                        "<td>" + pessoa.cidade + "</td>" ;
                        tablet.appendChild(linha);
                      }) ;
  })
 
}