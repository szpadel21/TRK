
export function getProduct (productId) {
  let matchingProduct;
    products.forEach(Product => {
      if (product1.id === productId) {
        matchingProduct = product
       };

    });
    return matchingProduct
}

const uid = function(){
  return Date.now().toString(36) + Math.random().toString(36).substr(2);
}

console.log(uid())



class Product {
  id;
  image;
  name;
  priceCents;

  constructor (productDetails) {
      this.id = productDetails.id
      this.image = productDetails.image
      this.name = productDetails.name
      this.priceCents = productDetails.priceCents
  }
}

class Jewlery extends Product {
  karats;

  constructor (productDetails) {
    super(productDetails)
    this.karats = productDetails.karats
  }
 }

 const product1 = new Product ({
  
 })















 export let products = [{
  id: "as9d8f7-a9s8dyfh-klj23h41-f9as8d7f-4klj12bh34",
  image: '../images/productimages/naszyjnik1.jpg',
  name: "Gold necklace with pearl and diamonds",
  priceCents: 699900,
  karats: '24',
  },{
    id: "kj1234hn-bl15io9-a098sdyrh-23i4hgvbo-8ffsekmhw",
    image: '../images/productimages/naszyjnik1.jpg',
    name: "Gold necklace with pearl and diamonds",
    priceCents: 699900,
    karats: '24',
  },{
    id: "as9d8f7-a9s8dyfh-klj23h41-f9as8d7f-4klj12bh34",
    image: '../images/productimages/naszyjnik1.jpg',
    name: "Gold necklace with pearl and diamonds",
    priceCents: 699900,
    karats: '24',
  },{
    id: "as9d8f7-a9s8dyfh-klj23h41-f9as8d7f-4klj12bh34",
    image: '../images/productimages/naszyjnik1.jpg',
    name: "Gold necklace with pearl and diamonds",
    priceCents: 699900,
    karats: '24',
  }]