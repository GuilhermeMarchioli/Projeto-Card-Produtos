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

// Adiciona produtos no carrinho 
function addControle() {
    let precoControle = 253.99

    modal.innerHTML +=  `<div class="produto" id="controle">
                <section class="img" id="controle"></section>
                <section class="text">
                    <h1>PowerStick Pro</h1>
                    <h2>Valor:</h2>
                    <p>R$${precoControle}</p>
                </section>
                    <section class="remove">
                        <svg xmlns="http://www.w3.org/2000/svg" width="40" height="40" fill="currentColor" class="bi bi-trash" viewBox="0 0 16 16" onclick="removeControle()">
                            <path d="M5.5 5.5A.5.5 0 0 1 6 6v6a.5.5 0 0 1-1 0V6a.5.5 0 0 1 .5-.5m2.5 0a.5.5 0 0 1 .5.5v6a.5.5 0 0 1-1 0V6a.5.5 0 0 1 .5-.5m3 .5a.5.5 0 0 0-1 0v6a.5.5 0 0 0 1 0z"/>
                            <path d="M14.5 3a1 1 0 0 1-1 1H13v9a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V4h-.5a1 1 0 0 1-1-1V2a1 1 0 0 1 1-1H6a1 1 0 0 1 1-1h2a1 1 0 0 1 1 1h3.5a1 1 0 0 1 1 1zM4.118 4 4 4.059V13a1 1 0 0 0 1 1h6a1 1 0 0 0 1-1V4.059L11.882 4zM2.5 3h11V2h-11z"/>
                          </svg>
                </section>
            </div>`
}

function addTenis() {
    let precoTenis = 198.50

    modal.innerHTML += `<div class="produto" id="tenis">
                <section class="img" id="tenis"></section>
                <section class="text">
                    <h1>Runner Z 9000</h1>
                    <h2>Valor:</h2>
                    <p>R$${precoTenis}</p>
                </section>
                    <section class="remove">
                        <svg xmlns="http://www.w3.org/2000/svg" width="40" height="40" fill="currentColor" class="bi bi-trash" viewBox="0 0 16 16" onclick="removeTenis()">
                            <path d="M5.5 5.5A.5.5 0 0 1 6 6v6a.5.5 0 0 1-1 0V6a.5.5 0 0 1 .5-.5m2.5 0a.5.5 0 0 1 .5.5v6a.5.5 0 0 1-1 0V6a.5.5 0 0 1 .5-.5m3 .5a.5.5 0 0 0-1 0v6a.5.5 0 0 0 1 0z"/>
                            <path d="M14.5 3a1 1 0 0 1-1 1H13v9a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V4h-.5a1 1 0 0 1-1-1V2a1 1 0 0 1 1-1H6a1 1 0 0 1 1-1h2a1 1 0 0 1 1 1h3.5a1 1 0 0 1 1 1zM4.118 4 4 4.059V13a1 1 0 0 0 1 1h6a1 1 0 0 0 1-1V4.059L11.882 4zM2.5 3h11V2h-11z"/>
                          </svg>
                </section>
            </div>`
}

function addPortatil() {
    let precoConsole = 315.65

    modal.innerHTML += `<div class="produto" id="console">
                <section class="img" id="console"></section>
                <section class="text">
                    <h1>RetroBox Mini</h1>
                    <h2>Valor:</h2>
                    <p>R$${precoConsole}</p>
                </section>
                    <section class="remove">
                        <svg xmlns="http://www.w3.org/2000/svg" width="40" height="40" fill="currentColor" class="bi bi-trash" viewBox="0 0 16 16" onclick="removeConsole()">
                            <path d="M5.5 5.5A.5.5 0 0 1 6 6v6a.5.5 0 0 1-1 0V6a.5.5 0 0 1 .5-.5m2.5 0a.5.5 0 0 1 .5.5v6a.5.5 0 0 1-1 0V6a.5.5 0 0 1 .5-.5m3 .5a.5.5 0 0 0-1 0v6a.5.5 0 0 0 1 0z"/>
                            <path d="M14.5 3a1 1 0 0 1-1 1H13v9a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V4h-.5a1 1 0 0 1-1-1V2a1 1 0 0 1 1-1H6a1 1 0 0 1 1-1h2a1 1 0 0 1 1 1h3.5a1 1 0 0 1 1 1zM4.118 4 4 4.059V13a1 1 0 0 0 1 1h6a1 1 0 0 0 1-1V4.059L11.882 4zM2.5 3h11V2h-11z"/>
                          </svg>
                </section>
            </div>`
}

function addBone() {
    let precoBone = 119.99

    modal.innerHTML += `<div class="produto" id="bone">
                <section class="img" id="boné"></section>
                <section class="text">
                    <h1>Boné CodeOn</h1>
                    <h2>Valor:</h2>
                    <p>R$${precoBone}</p>
                </section>
                    <section class="remove">
                        <svg xmlns="http://www.w3.org/2000/svg" width="40" height="40" fill="currentColor" class="bi bi-trash" viewBox="0 0 16 16" onclick="removeBone()">
                            <path d="M5.5 5.5A.5.5 0 0 1 6 6v6a.5.5 0 0 1-1 0V6a.5.5 0 0 1 .5-.5m2.5 0a.5.5 0 0 1 .5.5v6a.5.5 0 0 1-1 0V6a.5.5 0 0 1 .5-.5m3 .5a.5.5 0 0 0-1 0v6a.5.5 0 0 0 1 0z"/>
                            <path d="M14.5 3a1 1 0 0 1-1 1H13v9a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V4h-.5a1 1 0 0 1-1-1V2a1 1 0 0 1 1-1H6a1 1 0 0 1 1-1h2a1 1 0 0 1 1 1h3.5a1 1 0 0 1 1 1zM4.118 4 4 4.059V13a1 1 0 0 0 1 1h6a1 1 0 0 0 1-1V4.059L11.882 4zM2.5 3h11V2h-11z"/>
                          </svg>
                </section>
            </div>
`
}

function addHeadset() {
    let precoHeadset = 261.99

    modal.innerHTML += `<div class="produto" id="fone">
                <section class="img" id="fone"></section>
                <section class="text">
                    <h1>Headset Sonic Boom X1</h1>
                    <h2>Valor:</h2>
                    <p>R$${precoHeadset}</p>
                </section>
                    <section class="remove">
                        <svg xmlns="http://www.w3.org/2000/svg" width="40" height="40" fill="currentColor" class="bi bi-trash" viewBox="0 0 16 16" onclick="removeFone()">
                            <path d="M5.5 5.5A.5.5 0 0 1 6 6v6a.5.5 0 0 1-1 0V6a.5.5 0 0 1 .5-.5m2.5 0a.5.5 0 0 1 .5.5v6a.5.5 0 0 1-1 0V6a.5.5 0 0 1 .5-.5m3 .5a.5.5 0 0 0-1 0v6a.5.5 0 0 0 1 0z"/>
                            <path d="M14.5 3a1 1 0 0 1-1 1H13v9a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V4h-.5a1 1 0 0 1-1-1V2a1 1 0 0 1 1-1H6a1 1 0 0 1 1-1h2a1 1 0 0 1 1 1h3.5a1 1 0 0 1 1 1zM4.118 4 4 4.059V13a1 1 0 0 0 1 1h6a1 1 0 0 0 1-1V4.059L11.882 4zM2.5 3h11V2h-11z"/>
                          </svg>
                </section>
            </div>`
}

function addTeclado() {
    var precoTeclado = 229.99

    modal.innerHTML += `<div class="produto" id="teclado">
                <section class="img" id="teclado"></section>
                <section class="text">
                    <h1>Teclado DarkBlade</h1>
                    <h2>Valor:</h2>
                    <p>R$${precoTeclado}</p>
                </section>
                    <section class="remove">
                        <svg xmlns="http://www.w3.org/2000/svg" width="40" height="40" fill="currentColor" class="bi bi-trash" viewBox="0 0 16 16" onclick="removeTeclado()">
                            <path d="M5.5 5.5A.5.5 0 0 1 6 6v6a.5.5 0 0 1-1 0V6a.5.5 0 0 1 .5-.5m2.5 0a.5.5 0 0 1 .5.5v6a.5.5 0 0 1-1 0V6a.5.5 0 0 1 .5-.5m3 .5a.5.5 0 0 0-1 0v6a.5.5 0 0 0 1 0z"/>
                            <path d="M14.5 3a1 1 0 0 1-1 1H13v9a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V4h-.5a1 1 0 0 1-1-1V2a1 1 0 0 1 1-1H6a1 1 0 0 1 1-1h2a1 1 0 0 1 1 1h3.5a1 1 0 0 1 1 1zM4.118 4 4 4.059V13a1 1 0 0 0 1 1h6a1 1 0 0 0 1-1V4.059L11.882 4zM2.5 3h11V2h-11z"/>
                          </svg>
                </section>
            </div>`
}

function addMouse() {
    var precoMouse = 119.99

    modal.innerHTML += `<div class="produto" id="mouse">
                <section class="img" id="mouse"></section>
                <section class="text">
                    <h1>Mouse AimMaster V2</h1>
                    <h2>Valor:</h2>
                    <p>R$${precoMouse}</p>
                </section>
                    <section class="remove">
                        <svg xmlns="http://www.w3.org/2000/svg" width="40" height="40" fill="currentColor" class="bi bi-trash" viewBox="0 0 16 16" onclick="removeMouse()">
                            <path d="M5.5 5.5A.5.5 0 0 1 6 6v6a.5.5 0 0 1-1 0V6a.5.5 0 0 1 .5-.5m2.5 0a.5.5 0 0 1 .5.5v6a.5.5 0 0 1-1 0V6a.5.5 0 0 1 .5-.5m3 .5a.5.5 0 0 0-1 0v6a.5.5 0 0 0 1 0z"/>
                            <path d="M14.5 3a1 1 0 0 1-1 1H13v9a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V4h-.5a1 1 0 0 1-1-1V2a1 1 0 0 1 1-1H6a1 1 0 0 1 1-1h2a1 1 0 0 1 1 1h3.5a1 1 0 0 1 1 1zM4.118 4 4 4.059V13a1 1 0 0 0 1 1h6a1 1 0 0 0 1-1V4.059L11.882 4zM2.5 3h11V2h-11z"/>
                          </svg>
                </section>
            </div>`
}

function addNotebook() {
    var precoNotebook = 1459.99

    modal.innerHTML += `<div class="produto" id="notebook">
                <section class="img" id="pc"></section>
                <section class="text">
                    <h1>Notebook FlashNot</h1>
                    <h2>Valor:</h2>
                    <p>R$${precoNotebook}</p>
                </section>
                    <section class="remove">
                        <svg xmlns="http://www.w3.org/2000/svg" width="40" height="40" fill="currentColor" class="bi bi-trash" viewBox="0 0 16 16" onclick="removeNotebook()">
                            <path d="M5.5 5.5A.5.5 0 0 1 6 6v6a.5.5 0 0 1-1 0V6a.5.5 0 0 1 .5-.5m2.5 0a.5.5 0 0 1 .5.5v6a.5.5 0 0 1-1 0V6a.5.5 0 0 1 .5-.5m3 .5a.5.5 0 0 0-1 0v6a.5.5 0 0 0 1 0z"/>
                            <path d="M14.5 3a1 1 0 0 1-1 1H13v9a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V4h-.5a1 1 0 0 1-1-1V2a1 1 0 0 1 1-1H6a1 1 0 0 1 1-1h2a1 1 0 0 1 1 1h3.5a1 1 0 0 1 1 1zM4.118 4 4 4.059V13a1 1 0 0 0 1 1h6a1 1 0 0 0 1-1V4.059L11.882 4zM2.5 3h11V2h-11z"/>
                          </svg>
                </section>
            </div>`
}

// Remover cards
function removeControle() {
 var controle = document.getElementById('controle')
 controle.style.display = "none"
}

function removeConsole() {
    var console = document.getElementById('console')
    console.style.display = "none"
}

function removeTenis() {
    var tenis = document.getElementById('tenis')
    tenis.style.display = "none"
}

function removeBone() {
    var bone = document.getElementById('bone')
    bone.style.display = "none"
}

function removeFone() {
    var fone = document.getElementById('fone')
    fone.style.display = "none"
}

function removeTeclado() {
    var teclado = document.getElementById('teclado')
    teclado.style.display = "none"
}

function removeMouse() {
    var mouse = document.getElementById('mouse')
    mouse.style.display = "none"
}

function removeNotebook() {
    var notebook = document.getElementById('notebook')
    notebook.style.display = "none"
}