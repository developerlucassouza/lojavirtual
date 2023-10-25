$(document).ready(function() {

    // Chamar modal de "Adicionado ao Carrinho"
    // $("#adicionado").modal('show');

    // Variáveis
    // Valores dos Produtos
    let valorTeclado = 199;
    let valorMouse = 119;
    let valorMonitor = 1599;
    let valorI3 = 449;
    let valorI5 = 599;
    let valorI7 = 1149;

    // Carregar HTML dinâmico ------------------------------------------------------------------------

    criaTabela();
    
    // JavaScript ------------------------------------------------------------------------

    

    

    



    // Adicionar Produtos ao Carrinho
    function adicionaAoCarrinho(produto) {
        let produtoStorage = Number(localStorage.getItem(produto));
        let qtd = Number($('input.' + produto).val());

        localStorage.setItem(produto, produtoStorage + qtd);

        ppp = localStorage.getItem(produto);
        console.log(produto + ' = ' + ppp);

        $("#adicionado").modal('show');
    }

    $('button.teclado').click(function() {
        adicionaAoCarrinho('teclado');
    });

    $('button.mouse').click(function() {
        adicionaAoCarrinho('mouse');
    });

    $('button.monitor').click(function() {
        adicionaAoCarrinho('monitor');
    });

    $('button.i3').click(function() {
        adicionaAoCarrinho('i3');
    });

    $('button.i5').click(function() {
        adicionaAoCarrinho('i5');
    });

    $('button.i7').click(function() {
        adicionaAoCarrinho('i7');
    });

    



    // Esvaziar o Carrinho
    $('button#limpaCarrinho').click(function() {
        esvaziaCarrinho();
    });

    function esvaziaCarrinho() {
        localStorage.clear();
        console.log('Carrinho Esvaziado');
        alert('Carrinho Esvaziado');
        criaTabela();
        location.reload();
    }





    // Remover um Produto do Carrinho
    function removeProduto(produto) {
        localStorage.removeItem(produto);
        alert('Produto Removido');
        criaTabela();
        location.reload();
    }

    $('.removeTeclado').click(function() {
        removeProduto('teclado');
    })
    $('.removeMouse').click(function() {
        removeProduto('mouse');
    })
    $('.removeMonitor').click(function() {
        removeProduto('monitor');
    })

    $('.removeI3').click(function() {
        removeProduto('i3');
    })
    $('.removeI5').click(function() {
        removeProduto('i5');
    })
    $('.removeI7').click(function() {
        removeProduto('i7');
    })





    // Criar a Tabela
    function criaTabela() {
        // Carregar Tabela de Carrinho
        try {
            let tabelaDoCarrinho = document.getElementById('tabelaCarrinho');

            var teclado = localStorage.getItem('teclado');
            var mouse = localStorage.getItem('mouse');
            var monitor = localStorage.getItem('monitor');
            var i3 = localStorage.getItem('i3');
            var i5 = localStorage.getItem('i5');
            var i7 = localStorage.getItem('i7');

            var totalTeclado = teclado * valorTeclado;
            var totalMouse = mouse * valorMouse;
            var totalMonitor = monitor * valorMonitor;
            var totalI3 = i3 * valorI3;
            var totalI5 = i5 * valorI5;
            var totalI7 = i7 * valorI7;

            var totalAPagar =   totalTeclado + 
                                totalMouse + 
                                totalMonitor + 
                                totalI3 + 
                                totalI5 + 
                                totalI7;

            totalAPagar = totalAPagar < 0 ? 0 : totalAPagar;

            // Montar a Tabela

            // Cabeçalho
            tabelaDoCarrinho.innerHTML = `
                <tr> 
                    <th>Produto</th>
                    <th>Valor</th>
                    <th>Quantidade</th>
                    <th>Remover do Carrinho</th>
                    <th>Total</th>
                </tr>            
            `;

            // Teclado
            if (teclado != null && teclado > 0) {
                tabelaDoCarrinho.innerHTML += `
                    <tr> 
                        <td>Teclado</td>
                        <td class="valorTeclado"></td>
                        <td>${teclado}</td>
                        <td class="text-center removeTeclado"><i class="fa-solid fa-trash text-danger"></i></td>
                        <td>R$${totalTeclado.toFixed(2)}</td>
                    </tr>            
                `;
            }

            // Mouse
            if (mouse != null && mouse > 0) {
                tabelaDoCarrinho.innerHTML += `
                    <tr> 
                        <td>Mouse</td>
                        <td class="valorMouse"></td>
                        <td>${mouse}</td>
                        <td class="text-center removeMouse"><i class="fa-solid fa-trash text-danger"></i></td>
                        <td>R$${totalMouse.toFixed(2)}</td>
                    </tr>            
                `;
            }

            // Monitor
            if (monitor != null && monitor > 0) {
                tabelaDoCarrinho.innerHTML += `
                    <tr> 
                        <td>Monitor</td>
                        <td class="valorMonitor"></td>
                        <td>${monitor}</td>
                        <td class="text-center removeMonitor"><i class="fa-solid fa-trash text-danger"></i></td>
                        <td>R$${totalMonitor.toFixed(2)}</td>
                    </tr>            
                `;
            }

            // Intel i3
            if (i3 != null && i3 > 0) {
                tabelaDoCarrinho.innerHTML += `
                    <tr> 
                        <td>Intel i3</td>
                        <td class="valorI3"></td>
                        <td>${i3}</td>
                        <td class="text-center removeI3"><i class="fa-solid fa-trash text-danger"></i></td>
                        <td>R$${totalI3.toFixed(2)}</td>
                    </tr>            
                `;
            }

            // Intel i5
            if (i5 != null && i5 > 0) {
                tabelaDoCarrinho.innerHTML += `
                    <tr> 
                        <td>Intel i5</td>
                        <td class="valorI5"></td>
                        <td>${i5}</td>
                        <td class="text-center removeI5"><i class="fa-solid fa-trash text-danger"></i></td>
                        <td>R$${totalI5}</td>
                    </tr>            
                `;
            }

            // Intel i7
            if (i7 != null && i7 > 0) {
                tabelaDoCarrinho.innerHTML += `
                    <tr> 
                        <td>Intel i7</td>
                        <td class="valorI7"></td>
                        <td>${i7}</td>
                        <td class="text-center removeI7"><i class="fa-solid fa-trash text-danger"></i></td>
                        <td>R$${totalI7.toFixed(2)}</td>
                    </tr>            
                `;
            }

            // Total Final
            tabelaDoCarrinho.innerHTML += `
                <tr>
                    <th colspan="4">Total a Pagar</th>
                    <td>R$${totalAPagar.toFixed(2)}</td>
                </tr>
            `;

            valorProdutos();
        } catch (erro) {
            console.log('ERROOOOOOO');
            console.log(erro)
        }
    }



    
    
    // Colocar Valor do Produto onde for Preciso
    function valorProdutos() {
        $('.valorTeclado').html('R$' + valorTeclado.toFixed(2))
        $('.valorMouse').html('R$' + valorMouse.toFixed(2))
        $('.valorMonitor').html('R$' + valorMonitor.toFixed(2))
        $('.valorI3').html('R$' + valorI3.toFixed(2))
        $('.valorI5').html('R$' + valorI5.toFixed(2))
        $('.valorI7').html('R$' + valorI7.toFixed(2))
    }
        




































});