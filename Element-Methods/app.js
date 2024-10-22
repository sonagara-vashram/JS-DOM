// JavaScript code for different DOM methods examples

// getElementById()
const element = document.getElementById('myDiv');
document.write(element.innerHTML);

// getElementsByClassName()
const elements = document.getElementsByClassName('greeting');
console.log(elements[0].innerHTML);

// getElementsByTagName()
const paragraphs = document.getElementsByTagName('p');
console.log(paragraphs[1].innerHTML);

// getElementsByName()
const inputs = document.getElementsByName('username');
console.log(inputs[0].value);

// querySelector()
const queryElement = document.querySelector('.container .text');
console.log(queryElement.innerHTML);

// querySelectorAll()
const allElements = document.querySelectorAll('.text');
console.log(allElements[1].innerHTML);

// createElement()
const newDiv = document.createElement('div');
newDiv.innerHTML = 'I am new!';
document.body.appendChild(newDiv);

// createTextNode()
const text = document.createTextNode('This is a text node');
document.body.appendChild(text);

// appendChild()
const parent = document.getElementById('parentDiv');
const child = document.createElement('p');
child.innerHTML = 'New Paragraph';
parent.appendChild(child);

// insertBefore()
const newElement = document.createElement('p');
newElement.innerHTML = 'Inserted Paragraph';
const reference = parent.firstChild;
parent.insertBefore(newElement, reference);

// removeChild()
const removeChild = parent.firstElementChild;
parent.removeChild(removeChild);

// replaceChild()
const replaceElement = document.createElement('p');
replaceElement.innerHTML = 'Replaced Paragraph';
const oldElement = parent.firstElementChild;
parent.replaceChild(replaceElement, oldElement);

// cloneNode()
const original = document.getElementById('myDiv');
const clone = original.cloneNode(true);
document.body.appendChild(clone);

// hasChildNodes()
console.log(parent.hasChildNodes());

// parentNode
const childDiv = document.getElementById('childDiv');
console.log(childDiv.parentNode.id);

// childNodes
console.log(parent.childNodes);

// firstChild
console.log(parent.firstChild);

// lastChild
console.log(parent.lastChild);

// nextSibling
const firstDiv = document.getElementById('firstDiv');
console.log(firstDiv.nextSibling);

// previousSibling
const secondDiv = document.getElementById('secondDiv');
console.log(secondDiv.previousSibling);

// children
console.log(parent.children);

// firstElementChild
console.log(parent.firstElementChild);

// lastElementChild
console.log(parent.lastElementChild);

// nextElementSibling
console.log(firstDiv.nextElementSibling);

// previousElementSibling
console.log(secondDiv.previousElementSibling);

// parentElement
console.log(childDiv.parentElement.id);
