'https://api.jsonbin.io/v3/b/6446b2ef8e4aa6225e9019c0'


const products = document.getElementsByClassName('products');
const filterButton = document.getElementsByClassName('filter-button');


function filterProduct(){
    fetch('https://api.jsonbin.io/v3/b/6446b2ef8e4aa6225e9019c0')
        .then(result => result.json())
            .then(products => {

                const intensityHigh = products.filter(perfume =>{
                    return perfume.intensity == "High";
                })

                products.innerHTML =    `<div class="product">
                                        <img src="${item.image}">
                                        <h4>${item.name}</h4>
                                        <h5>${item.intensity}</h5>
                                            <div class="cart">
                                                <a href="#"><i class='bx bxs-heart'></i></a>
                                            </div>
                                        </div>`
        })
}



/*const names = products.map(products => {
    return products.intensity;
});

const intensityHigh = products.filter(perfume => {
    return perfume.intensity == "High";
}).map(perfume => {
    return perfume.name;
});


const totalItems = products.reduce((total, perfume) => {
    return total + 1;
}, 0);
*/