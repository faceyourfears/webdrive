let http = new XMLHttpRequest();

http.open('get', 'products.json', true);

http.send();

http.onload = function(){

    if(this.readyState == 4 && this.status == 200){
        let products = JSON.parse(this.responseText)

        let output = "";

        for(let item of products){
            output += `
                <div class="product">
                    <img src="${item.image}">
                    <h4>${item.name}</h4>
                    <h5>${item.intensity}</h5>
                        <div class="cart">
                            <a href="#"><i class='bx bxs-heart'></i></a>
                        </div>
                </div>
            `;
        }
        document.querySelector(".products").innerHTML = output;
    }
}