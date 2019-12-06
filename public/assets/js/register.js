let progression=0
let range=document.getElementById('formControlRange')
let phone=document.getElementById('phone')
let color=document.getElementById('ColorImg')
let colorPrev=document.getElementById('colorPrev')
let r=document.getElementById('r')
let g=document.getElementById('g')
let b=document.getElementById('b')
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
    document.getElementById('PasswordBtn'),
    document.getElementById('SubmitBtn')
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
    document.getElementById('Password'),
    document.getElementById('Siege')
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
    if(progression==3 || progression==6){
        formElements[progression].style.display="grid";
    } else {
        formElements[progression].style.display="block";
    }
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

range.addEventListener('input', function(){
    phone.value='0'+event.target.value
})

color.addEventListener('click', function(){
    let R = (Math.floor(Math.random() * (255 - 0)) + 0 )% 255
    let G = (Math.floor(Math.random() * (255 - 0)) + 0 )% 255
    let B = (Math.floor(Math.random() * (255 - 0)) + 0 )% 255
    r.value='R: '+R;
    g.value='G: '+G;
    b.value='B: '+B;
    colorPrev.style.background=`rgb(${R},${G},${B})`
})