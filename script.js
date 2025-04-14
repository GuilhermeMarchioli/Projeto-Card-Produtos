// Aumenta número no carrinho
var carrinhoProdutos = document.getElementById('quant')
var quantidadeCarrinho = 0
carrinhoProdutos.innerHTML = `<p>${quantidadeCarrinho}</p>`

function comprar() {
    quantidadeCarrinho++
    carrinhoProdutos.innerHTML = `<p>${quantidadeCarrinho}</p>`
}

// Modal
const modal = document.getElementById('modal')

function mostraModal() {
    modal.showModal()
}

function fechaModal () {
    modal.close()
}