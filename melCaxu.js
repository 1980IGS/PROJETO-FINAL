
        const items = [
            {
                    id: 0,
                    nome: "MEL AROEIRA",
                    img: "./img/MEL 0.jpg",
                    quantidade: 0,
                    preco: 40.00
                },
                {
                    id: 1,
                    nome: "MEL DE CIPÓ TIMBÓ",
                    img: "./img/MEL1.jpg",
                    quantidade: 0,
                    preco: 30.0 
                },
                {
                    id: 2,
                    nome: "MEL DE JUREMA",
                    img: "./img/MEL2.jpg",
                    quantidade: 0,
                    preco: 30.0 
                },
                {
                    id: 3,
                    nome: "MEL DE EUCALIPTO",
                    img: "./img/MEL3.jpg",
                    quantidade: 0,
                    preco: 20.0 
                },
                {
                    id: 4,
                    nome: "MEL SILVESTRE",
                    img: "./img/MEL4.jpg",
                    quantidade: 0,
                    preco: 20.0 
                },
                
                
    
                
    
            ]
              //mudar para função dps
        
              function inicializarLoja() {
                var containerprodutos = document.getElementById("produtos");
               // percorrer os itens da array com for
                items.map((val) => {
                    containerprodutos.innerHTML += `
    
    
                    <div class = "mel-single">
                        <img src= "`+ val.img+`" />
                        <p> `+val.nome+`</p>
                        <p> Valor: R$ `+val.preco+`,00</p>
                        <a key="`+val.id+`" href="#">Adicionar ao Carrinho</a>
                    </div>        
                    
                    
                    
                    ` ;
                })
            }
            
            inicializarLoja();
    
    
            // depois trocar por orcamento
            atualizarCarrinho = () => { 
                document.getElementById("limpartudo").style = ""
                document.getElementById("btn-total").style = ""
                var containerCarrinho = document.getElementById('carrinho');
                containerCarrinho.innerHTML = "";
                items.map((val) => {
                    if(val.quantidade > 0){
                    containerCarrinho.innerHTML += `
    
                    <p>`+val.nome+` | quantidade: `+val.quantidade+` | preço: `+val.preco*val.quantidade+`</p>
                  
                    
                    
                    
                    ` ;
                      }
                })
    
            }
            var links = document.getElementsByTagName('a');
    
            for(var i = 0; i < links.length; i++){
                links[i].addEventListener("click", function(){
                    let key = this.getAttribute('key');
                    items[key].quantidade++;
                    atualizarCarrinho();
                    return false;
                })
            }
            var valor= null
            function total() {
                for (let i = 0; i < items.length; i++) {
                    if (items[i].quantidade > 0) {
                        valor += items[i].preco*items[i].quantidade
            
                    }
            
            
                } document.getElementById("text-total").style = ""
                
                document.getElementById('total').innerText =  "R$"+valor +",00"
    
            }
     