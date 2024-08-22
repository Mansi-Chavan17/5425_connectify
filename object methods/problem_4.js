const calculateSalesTotals = function(array){
    
    let arr = []
    for(let i=0;i<array.length;i++){
        let discount = array[i].discount || 0
        let sale = array[i].original * (1-discount);
        let total = array[i].original * discount * array[i].stock;
        array[i]["sale"]=sale
        array[i]["total"]=total
    }
}

var sales = [
  { item: 'PS4 Pro', stock: 3, original: 399.99 },
  { item: 'Xbox One X', stock: 1, original: 499.99, discount: 0.1 },
  { item: 'Nintendo Switch', stock: 4, original: 299.99 },
  { item: 'PS2 Console', stock: 1, original: 299.99, discount: 0.8 },
  { item: 'Nintendo 64', stock: 2, original: 199.99, discount: 0.65 }
];

calculateSalesTotals(sales)
console.log(sales)