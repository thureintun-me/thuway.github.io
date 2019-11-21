let myHeading = document.querySelector('h1');


let myButton = document.querySelector('button');

function setUserName() {
    let myName = prompt('Please enter your name.');
    if(!myName || myName === null) {
      setUserName();
    } else {
      localStorage.setItem('name', myName);
      myHeading.innerHTML = 'Mozilla is cool, ' + myName;
    }
  }

  myButton.onclick = function(){
      setUserName();
  }