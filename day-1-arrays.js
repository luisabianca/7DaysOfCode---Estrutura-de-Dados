const buyList = {
  quantidade: [],
  items: []
}

const addItems = (name, quantity) => {
    buyList.quantidade.push(quantity);
    buyList.items.push(name);
}

const removeItems = (name) => {
    const index = buyList.items.indexOf(name);

    buyList.items.splice(index, 1);
    buyList.quantidade.splice(index, 1)
}

const itemList = () => {
    console.log('Minha lista de compras tem:'); buyList.quantidade.forEach((item, index) => {console.log(item, buyList.items[index])})
}
