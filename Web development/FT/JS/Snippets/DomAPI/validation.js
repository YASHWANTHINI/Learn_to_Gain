const container = document.getElementById('container');
const list = document.getElementById('list');
let itemCount = 1; 

function createNewItem(text = '') {
    const newItem = document.createElement('li');
    newItem.textContent = text || `New Item ${itemCount++}`;
    return newItem;
}

document.getElementById('addItem').addEventListener('click', () => {
    const newItem = createNewItem();
    list.appendChild(newItem);
});

document.getElementById('removeItem').addEventListener('click', () => {
    const lastItem = list.lastElementChild; 
    if (lastItem) {
        list.removeChild(lastItem);
        if (itemCount > 1) itemCount--; 
    }
});

document.getElementById('insertBefore').addEventListener('click', () => {
    const newItem = createNewItem('Inserted Before Item 2');
    const item2 = list.children[1]; 
    if (item2) {
        list.insertBefore(newItem, item2);
    } else {
        list.appendChild(newItem);
    }
});

