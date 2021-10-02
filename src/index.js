
localStorage.setItem('date_save', '20220320')
const counter_save = localStorage.getItem('date_save')

let choice = `<h2>CONTADOR</h2>\n
<b class="d-block mb-3">Escolha uma opção</b>\n
<button type="button" class="btn btn-success mb-3">Continuar na ultima contagem</button>\n
<button type="button" class="btn btn-secondary mb-3">nova contagem</button>\n` 

let new_date = `<h2>CONTADOR</h2>\n
<b class="d-block">Escolha uma data</b>\n
<input type="text" name="date" id="date" class="date-form" placeholder="DD/MM/AAAA">\n
<br/>\n
<button type="submit" class="submit-button btn btn-success  mt-3">Começar</button>\n`


if (counter_save)
    $('.principal').append(choice)
else{
    $('.principal').append(new_date)
    $('document').ready(()=>{
        $('.date-form').mask('99/99/9999')
    })
}