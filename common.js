window.onload = function () {
    var btns = document.querySelectorAll('.btn')

    btns.forEach(function (btn) {
        btn.addEventListener('click', function (event) {
            event.preventDefault();
        });
    })

    var btnPassView = document.querySelectorAll('#btnPassView')

    btnPassView.forEach(function (btn) {
        btn.addEventListener('click', function (e) {
            var valueBtn = e.target.innerText === "Показать" ? "Скрыть" : "Показать"
            e.target.innerText = valueBtn;

            var inputPass = document.getElementById(e.target.dataset.password)
            inputPass.type = inputPass.type === "password" ? "text" : "password"
        })
    })

    var inputEmail = document.querySelectorAll("#inputEmail")

    inputEmail.forEach(function(email){

        email.value = ""
        email.addEventListener("keyup", function(event){
            if(!isEmail(email.value)){        
                email.parentElement.classList.add('error')
            }    
            else{      
                email.parentElement.classList.remove('error')
                
            }
        })
    })
}

function openModal(id,tabName) {
    var modal = document.getElementById(id)
    var modalContainer = document.getElementById("modalContainer")

    modal.classList.toggle("close");
    modalContainer.classList.toggle("close");

    modalContainer.onclick = function (event) {

        if (event.target.id === "modalContainer") {
            modal.classList.toggle("close");
            modalContainer.classList.toggle("close");
        }
    }

    if(tabName){
        openTab(tabName)
    }
}

function isEmail(email) {
    var pattern = new RegExp(/^(("[\w-\s]+")|([\w-]+(?:\.[\w-]+)*)|("[\w-\s]+")([\w-]+(?:\.[\w-]+)*))(@((?:[\w-]+\.)*\w[\w-]{0,66})\.([a-z]{2,6}(?:\.[a-z]{2})?)$)|(@\[?((25[0-5]\.|2[0-4][0-9]\.|1[0-9]{2}\.|[0-9]{1,2}\.))((25[0-5]|2[0-4][0-9]|1[0-9]{2}|[0-9]{1,2})\.){2}(25[0-5]|2[0-4][0-9]|1[0-9]{2}|[0-9]{1,2})\]?$)/i);
    return pattern.test(email);
}

function openTab(tabName){
    var tabs = document.querySelectorAll('.modal-content')

    tabs.forEach(function(tab){
        tab.dataset.tab === tabName ? tab.classList.remove('close') : tab.classList.add('close')
    })

    var tabBtns = document.querySelectorAll('.btn-tab')
    tabBtns.forEach(function(btn){
        console.log(btn);
        
        btn.dataset.forTab === tabName ? btn.classList.add('active') : btn.classList.remove('active')
    })
}