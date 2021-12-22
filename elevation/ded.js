let locusers = JSON.parse(localStorage.getItem('locusers')) || [];

function reg() {
    

    let letter1 = 0,
    letter2 = 0,
    number = 0;
    
    let nickname = document.getElementById('nickname').value;
    let email = document.getElementById('email').value;
    let password = document.getElementById('password').value;
   
let text =document.getElementById('text');

    for (let i = 0; i < password.length; i++) {
        let a  = password[i];
        if (a == a.toUpperCase()) {
            letter2 = 1;
        }
        if (a == a.toLowerCase()) {
            letter1 = 1;
        }
        if (!isNaN(a * 1))
            number = 1;
    }
    let ex = "";
    if (letter1 == 0)
        ex += " \n";
    if (letter2 == 0)
        ex += "  \n";
    if (number == 0)
        ex += "Пароль должен содержать цифры также \n";
    if (ex !== "")
        text.innerHTML = ex;
        if(letter1==1 && letter2==1 && number==1 ) {
           
        alert("Вы успешно зарегистрировались!!!");
        

        document.getElementById('nickname').value = '';
        document.getElementById('email').value = '';
        document.getElementById('password').value = '';
               
    
  const Data = {
    userNames: nickname,
    email: email,
    password: password,


  };   
  locusers.push(Data);
  localStorage.setItem('locusers', JSON.stringify(locusers));
  
}
};



 function log(){
    let email = document.getElementById('email').value;
    let password = document.getElementById('password').value;
    let adminemail= "user@gmail.com";
   let admin = "user";
   let adminpass='123';
    let usermemor;
    for (let i = 0; i < locusers.length; i++ ) {
        if (locusers[i].password == password && (!(locusers[i].password==adminpass))) {
    
            window.location.href = 'userspage.html';
           
            break;         
        }
        else if (password==adminpass && (!(password === '')) && adminemail==email){
            window.location.href = 'admin.html';
            
            break;
        }
        else {
            let j = i;
            if (j === locusers.length-1) {
              alert('Введены неверные данные, или пользователь не существует');
              break;
            }
          }      
    }
  };



  let locusersList = document.querySelector('.listsort');

function pushlocusers() {
    locusersList.replaceChildren();
    let ind = 0;
    locusers.forEach(element => {
        ind++;
        let block = document.createElement('div');
        let item = document.createElement('p');
        item.innerHTML = '<fieldset>username: ' + element.userNames + ', email: ' + element.email+ '</fieldset>';
        let operations = document.createElement('div');
        let changeButton = document.createElement('div');
        changeButton.style.display='inline-block';
        changeButton.innerHTML = '<button id="btn" class="delete"  name="btn">Change user</button>'; 
        changeButton.onclick = () => {
            changeOpen(element);
        };
        let deleteButton = document.createElement('div');
        deleteButton.style.display='inline-block';
        deleteButton.innerHTML = '<button id="btn" class="delete"  name="btn">Delete user</button>'; 
        deleteButton.onclick = () => {
            Delete(element);
        };
        operations.appendChild(changeButton);
        operations.appendChild(deleteButton);    
        block.appendChild(item);
        block.appendChild(operations);
        locusersList.appendChild(block);
    });
}

let savedElement;
function changeOpen(element) {
    let form = document.getElementById('change');
    form.style.display = "block";
    let username = document.getElementById('change-username');
    let name = document.getElementById('change-name');
    username.setAttribute('value', element.userNames);
    name.setAttribute('value', element.email);
    savedElement = element;
}
function onSave() {
    let form = document.getElementById('change');
    form.style.display = "none";
    
    let username = document.getElementById('change-username');
    let name = document.getElementById('change-name');

    let usermemor;
    for (let i = 0; i < locusers.length; i++) {
        if (locusers[i].userNames == savedElement.userNames) {
            usermemor = i;
            break;
        }
    }
    locusers[usermemor].userNames = username.value;
    locusers[usermemor].email = name.value;
    localStorage.setItem('locusers',JSON.stringify(locusers));
    
}

pushlocusers();

function Delete(element) {
 window.reload.href = "index.html";

}

function Delete(element) {
    let usermemor;
    for (let i = 0; i < locusers.length; i++) {
        if (locusers[i].userNames == element.userNames) {
            usermemor = i;
            break;
        }
    }
    locusers.splice(usermemor, 1);
    localStorage.setItem('locusers',JSON.stringify(locusers));

    pushlocusers();    
}
function addnewuser(){
    let addinguser = document.getElementById('add');
    addinguser.style.display = "block";
}

function adduser() {
    let addinguser = document.getElementById('add');
    addinguser.style.display = "none";
    let username = document.getElementById('add-username').value;
    let name = document.getElementById('add-name').value;
    document.getElementById('add-username').value = '';
    document.getElementById('add-name').value = '';
    
    if (name !== '' && username !== ''){
        locusers.push({userNames: username, email: name}), pushlocusers();
        localStorage.setItem('locusers',JSON.stringify(locusers));
    }
    else
        alert('Введите все данные');
}