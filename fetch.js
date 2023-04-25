const products = [
    {
        "image": "images/joy.webp",
        "name": "Joy",
        "intensity": "High"
    }, 
    {
        "image": "images/dune.webp",
        "name": "Dune",
        "intensity": "Low"
    },
    {
        "image": "images/poison.webp",
        "name": "Poison",
        "intensity": "High"
    },
    {
        "image": "images/gris_dior.webp",
        "name": "Gris Dior",
        "intensity": "Low"
    },
    {
        "image": "images/miss_dior.webp",
        "name": "Miss Dior",
        "intensity": "High"
    },
    {
        "image": "images/jadore.webp",
        "name": "J'adore",
        "intensity": "High"
    }
]

    let output = "";

    for(let item of products){
        output += `<div class="product">
                        <img src="${item.image}">
                        <h4>${item.name}</h4>
                        <h5>${item.intensity}</h5>
                            <div class="cart">
                                <a href="#"><i class='bx bxs-heart'></i></a>
                            </div>
                    </div>`;
    }

document.querySelector(".products").innerHTML = output;