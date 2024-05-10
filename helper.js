class DOMHelper {
    constructor(selector) {
        this.element = document.querySelector(selector);
    }

    get html() {
        return this.element.innerHTML;
    }

    set html(content) {
        this.element.innerHTML = content;
    }

    addClass(className) {
        this.element.classList.add(className);
    }

    removeClass(className) {
        this.element.classList.remove(className);
    }

    toggleClass(className) {
        this.element.classList.toggle(className);
    }

    hasClass(className) {
        return this.element.classList.contains(className);
    }

    setText(text) {
        this.element.textContent = text;
    }

    hide() {
        this.element.style.display = 'none';
    }

    show() {
        this.element.style.display = '';
    }

    isVisible() {
        return window.getComputedStyle(this.element).display !== 'none';
    }

    setAttribute(name, value) {
        this.element.setAttribute(name, value);
    }

    getAttribute(name) {
        return this.element.getAttribute(name);
    }

    removeAttribute(name) {
        this.element.removeAttribute(name);
    }

    onClick(callback) {
        this.element.addEventListener('click', callback);
    }

    onHover(enterCallback, leaveCallback) {
        this.element.addEventListener('mouseenter', enterCallback);
        this.element.addEventListener('mouseleave', leaveCallback);
    }
    onEvent(eventType, callback) {
        this.element.addEventListener(eventType, callback);
    }

}

// get tags by class
const myElementByClass = new DOMHelper('.example');
// get tags by id
const myElementById = new DOMHelper('#example');
// get tags by name
const myElement = new DOMHelper('a');


myElement.html = '<p>New HTML content</p>';

// Add/remove/toggle classes
myElement.addClass('active');
myElement.removeClass('inactive');
myElement.toggleClass('highlight');

// Check if a class exists
console.log(myElement.hasClass('active')); // true

// Set text content
myElement.setText('New text content');

// Visibility control
myElement.hide();
myElement.show();
console.log(myElement.isVisible()); // true

// Attribute manipulation
myElement.setAttribute('data-id', '123');
console.log(myElement.getAttribute('data-id')); // 123
myElement.removeAttribute('data-id');

// Event handling
myElement.onClick(() => {
    console.log('Element clicked!');
});

myElement.onHover(
    () => {
        console.log('Mouse entered!');
    },
    () => {
        console.log('Mouse left!');
    }
);
myElement.onEvent('dblclick', () => {
    console.log('Element double-clicked!');
});