import Catalogue from './Catalogue.js';
import Product from './Product.js';
import Products from './Products.js';
import Carousel from './Carousel3.js';

(function() {

    let pathname = window.location.pathname;
    
    if (pathname == "/catalogue.html") new Catalogue();
    else if (pathname == "/product.html") new Product();
    else {
        let params = {featured:'true'}
        new Products(params);
        //new Carousel();
    }
    
})();