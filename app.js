'use strict';
// variebles
let liItem = document.createElement('li');
let labelItem = document.createElement('label');
let spanItemOne = document.createElement('span');
let spanItemTwo = document.createElement('span');
let inpItem = document.createElement('input');
let ulListItem = document.querySelector('.list');
let currentForm = document.querySelector('.form');

// Убираем обновление формы 
currentForm.onsubmit = function (e) {
  e.preventDefault();
}

// classroom practick
liItem.appendChild(labelItem);
labelItem.setAttribute('for', 'box-next');
inpItem.setAttribute('type', 'checkbox');
inpItem.setAttribute('id', 'box-next');
spanItemOne.textContent = 'New Year';
spanItemTwo.textContent = 'buy tangerines';
spanItemTwo.setAttribute('class', 'span-group');
labelItem.appendChild(inpItem);
labelItem.appendChild(spanItemOne);
labelItem.appendChild(spanItemTwo);
ulListItem.appendChild(liItem);
let allElemLabel = document.querySelectorAll('label');
let form = document.createElement('form');
form.classList.add('new-form');
let inpElem = document.createElement('input');
inpElem.setAttribute('type', 'text');
inpElem.setAttribute('class', 'form-inp');
let btnForForm = document.createElement('button');
btnForForm.textContent = 'add';
form.appendChild(inpElem);
form.appendChild(btnForForm);
let firstForm = document.querySelector('.form');
firstForm.insertAdjacentElement('afterEnd', form);
form.style.display = 'flex';
form.style.justifyContent = 'center';

// создаем цикл с добавлением кнопки
for (let i = 0; i < allElemLabel.length; i++) {
  let btnForLi = document.createElement('button');
  btnForLi.textContent = 'delete';
  btnForLi.classList.add('del');
  btnForLi.style.marginLeft = 'auto';
  allElemLabel[i].appendChild(btnForLi);
  allElemLabel[i].style.display = 'flex';
}



// по нажатию кнопки добавляем еще один список с значением инпута
btnForForm.onclick = function (event) {
  event.preventDefault();
  let liItemSecond = document.createElement('li');
  let labelItemSecond = document.createElement('label');
  let spanItemOneSecond = document.createElement('span');
  let spanItemTwoSecond = document.createElement('span');
  let inpItemSecond = document.createElement('input');
  let ulListItemSecond = document.querySelector('.list');
  liItemSecond.appendChild(labelItemSecond);
  labelItemSecond.setAttribute('for', 'box-next');
  inpItemSecond.setAttribute('type', 'checkbox');
  inpItemSecond.setAttribute('id', 'box-next');
  spanItemTwo.setAttribute('class', 'span-group');
  labelItemSecond.appendChild(inpItemSecond);
  labelItemSecond.appendChild(spanItemOneSecond);
  labelItemSecond.appendChild(spanItemTwoSecond);
  ulListItemSecond.appendChild(liItemSecond);
  let btnForLi = document.createElement('button');
  btnForLi.classList.add('del');
  btnForLi.textContent = 'delete';
  btnForLi.style.marginLeft = 'auto';
  labelItemSecond.style.display = 'flex';
  labelItemSecond.appendChild(btnForLi);

  if (inpElem.value === '') {
    ulListItemSecond.removeChild(liItemSecond);
  } else {
    spanItemOneSecond.innerText = inpElem.value;
    event.preventDefault;
  }
}
let allLiHover = document.querySelectorAll('li');

for (let i = 0; i < allLiHover.length; i++) {
  allLiHover[i].onmousemove = function () {
    this.classList.add('item--hover');
  }
  allLiHover[i].onmouseleave = function () {
    this.classList.remove('item--hover');
  }
}




// удаление едемента ли по нажатию кнопки
let removeBtn = document.querySelectorAll('.del');

document.body.onclick = function (e) {
  if (e.target.classList.contains('del')) {
    e.target.closest('li').remove();
  }
}
