let progression=0
let hohos=[]
let formButtons=[
    document.getElementById('NameBtn'),
    document.getElementById('LastnameBtn'),
    document.getElementById('EmailBtn'),
    document.getElementById('BirthdateBtn'),
    document.getElementById('PhoneBtn'),
    document.getElementById('AddressBtn'),
    document.getElementById('ColorBtn'),
    document.getElementById('QiBtn'),
    document.getElementById('LavaboBtn'),
    document.getElementById('PasswordBtn')
]
let formElements=[
    document.getElementById('Name'),
    document.getElementById('Lastname'),
    document.getElementById('Email'),
    document.getElementById('Birthdate'),
    document.getElementById('Phone'),
    document.getElementById('Address'),
    document.getElementById('Color'),
    document.getElementById('Qi'),
    document.getElementById('Lavabo'),
    document.getElementById('Password')
]
for(let i=0; i<=15; i++){
    hohos[i]=document.getElementById(`haha${i}`)
}
drawProgression()
showElement()

formButtons.forEach(function(button){
    button.addEventListener('click', function(){
        console.log(progression)
        hideElement()
        progression = progression+1
        showElement()
        console.log(progression)
        drawProgression()
    })
})

function showElement(){
    console.log(formElements[progression].style.display)
    formElements[progression].style.display="block";
    formButtons[progression].style.display="block";
}

function hideElement(){
    formElements[progression].style.display="none";
    formButtons[progression].style.display="none";
}

function drawProgression(){
    for(let i=5; i<=5+progression; i++){
        hohos[i].style.background="#4eb3e6"
    }
}