// It is a Glue B/w View and Model
/* Controller , Take Input from the View (UI) 
and Give it to the Model, Model gives output to 
the controller and controller will write output to the 
view.
*/

import productOperations from "../services/product-operations.js";

/*
<div class="card" style="width: 18rem;">
  <img src="..." class="card-img-top" alt="...">
  <div class="card-body">
    <h5 class="card-title">Card title</h5>
    <p class="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
    <a href="#" class="btn btn-primary">Go somewhere</a>
  </div>
</div>
*/

function showCard(product){
  const col = document.createElement('div'); //<div class="col-4">
  col.className = 'col-4';
  const cardDiv = document.createElement('div'); //<div>
  cardDiv.className = 'card';
  cardDiv.style = "width: 18rem;";
  const img = document.createElement('img');
  img.src = product.url;
  img.className = 'card-img-top';
  cardDiv.appendChild(img);
  const cardBody = document.createElement('div');
  cardBody.className = 'card-body';
  const h5 = document.createElement('h5');
  h5.className = 'card-title';
  h5.innerText = product.name + " "+" Rs"+product.price;
  const pTag = document.createElement('p');
  pTag.innerText  = product.desc;
  pTag.className = 'card-text';
  cardBody.appendChild(h5);
  cardBody.appendChild(pTag);
  cardDiv.appendChild(cardBody);
  const button = document.createElement('button');
  button.innerText = 'Add to Cart';
  button.className = 'btn btn-primary';
  cardBody.appendChild(button);
  col.appendChild(cardDiv);
  document.querySelector('#output').appendChild(col);






}

async function showProducts(){
    const products = await productOperations.readAllProducts();
    //console.log('All Products are ', products);
    for(let product of products){
      showCard(product);
    }
    
}
showProducts();