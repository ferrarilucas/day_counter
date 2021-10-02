
localStorage.setItem('date_save', '20220320')
const counter_save = localStorage.getItem('date_save')

let choice = `<h2>CONTADOR</h2>\n
<b class="d-block mb-3">Escolha uma opção</b>\n
<button type="button" class="btn btn-success mb-3">Continuar na ultima contagem</button>\n
<button type="button" class="btn btn-secondary mb-3">nova contagem</button>\n` 

let new_date = ``

if (!counter_save)
    $('.principal').append(choice)
else{
    
}
