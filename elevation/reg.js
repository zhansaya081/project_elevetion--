let users2 = JSON.parse(localStorage.getItem('users2')) || [];
 

 
function register() {
    

    let low = 0, up = 0, number = 0;
    
    
    let email = document.getElementById('content3__email').value;
    let password = document.getElementById('content3__password').value;
   
let output =document.getElementById('content3__output');

    for (let i = 0; i < password.length; i++) {
        let c = password[i];
        if (c == c.toUpperCase()) {
            up = 1;
        }
        if (c == c.toLowerCase()) {
            low = 1;
        }
        if (!isNaN(c * 1))
            number = 1;
    }
    let ans = "";
    if (low == 0)
        ans += " \n";
    if (up == 0)
        ans += " \n";
    if (number == 0)
        ans += "*Пароль должен содержать цифры *\n";
    if (ans !== "")
        //alert(ans);
        output.innerHTML = ans;
        if(low==1 && up==1 && number==1 ) {
           
        alert("Вы записались на тур!!");
        

     
        document.getElementById('content3__email').value = '';
        document.getElementById('content3__password').value = '';
               

   
  const userData = {
    email: email,
    password: password,


  };   

  users2.push(userData);
  localStorage.setItem('users2', JSON.stringify(users2));
  
}
};


  let usersList = document.querySelector('.userss');

function fillUsers() {
    usersList.replaceChildren();
    let ind = 0;
    users2.forEach(element => {
        ind++;
        let block = document.createElement('div');

        let item = document.createElement('p');
        item.innerHTML = '<fieldset>Email: ' + element.email  +'</fieldset>';

        
        let operations = document.createElement('div');

       
        
        let deleteButton = document.createElement('div');
        deleteButton.innerHTML ='<button id="btn" class="delete" name="btn">Delete</button>'; 
        deleteButton.style.display='inline-block';        

        deleteButton.onclick = () => {
            onDelete(element);
        };
        
       
        operations.appendChild(deleteButton);
        
        
        block.appendChild(item);
        block.appendChild(operations);
       
        
        usersList.appendChild(block);
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

    let fInd;
    for (let i = 0; i < users2.length; i++) {
        if (users2[i].userNames == savedElement.userNames) {
            fInd = i;
            break;
        }
    }
    users2[fInd].userNames = username.value;
    users2[fInd].email = name.value;
    localStorage.setItem('users2',JSON.stringify(users2));
    
}

fillUsers();





function onDelete(element) {
 window.reload.href = "index.html";

}

function onDelete(element) {
    let fInd;
    for (let i = 0; i < users2.length; i++) {
        if (users2[i].userNames == element.userNames) {
            fInd = i;
            break;
        }
    }
    users2.splice(fInd, 1);
    localStorage.setItem('users2',JSON.stringify(users2));

    fillUsers();    
}