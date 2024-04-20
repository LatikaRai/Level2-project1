var products = [
    {name: "Black Chair", headline: "Perfect Chair for Every Space!", price: "3,000", image: "https://images.unsplash.com/photo-1581539250439-c96689b516dd?q=80&w=1965&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"},
    {name: "White Chair", headline: "Minimalist Chair Design", price: "2,000", image: "https://images.unsplash.com/photo-1554104707-a76b270e4bbb?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3Dixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"},
    {name: "Wooden Chair", headline: "Timeless Elegance", price: "1,700", image: "https://images.unsplash.com/photo-1506439773649-6e0eb8cfb237?q=80&w=1974&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"},
];
var cart = [];
var popular = [
    {name: "Red Chair", headline: "Painted blod red", price: "4,000", image: "https://images.unsplash.com/photo-1583161904954-d292590713e7?q=80&w=2028&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"},
    {name: "White Chair", headline: "Minimalist Chair Design: Discover the Beauty of Simplicity!", price: "2,000", image: "https://images.unsplash.com/photo-1554104707-a76b270e4bbb?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3Dixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"},
    {name: "Wooden Chair", headline: "Timeless Elegance: Experience the Craftsmanship of our Wooden Chair Collection!", price: "1,700", image: "https://images.unsplash.com/photo-1506439773649-6e0eb8cfb237?q=80&w=1974&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"},

];

function addProduct(){
    var clutter = "";
    products.forEach(function(product, index){
        clutter += `<div class="product w-fit rounded-xl p-2 bg-white">
        <div class="image w-[14rem] h-[13rem] bg-zinc-200 rounded-xl overflow-hidden" >
        <img class="w-full h-full object-cover" src="${product.image}"/>
        </div>
        <div class="data w-full px-2 py-5">
        <h1 class="font-semibold text-xl leading-none tracking-tight">${product.name}</h1>
        <div class="flex justify-between w-full items-center mt-2">
        <div class="w-1/2">
        <h3 class="font-semibold opacity-20">${product.headline}</h3>
        <h4 class="font-semibold mt-2">&#8377;${product.price}</h4>
        </div>
        <button data-index="${index}" class="add w-10 h-10 rounded-full bg-[#4A4563] text-yellow-400"><i data-index="${index}"
        class="ri-add-line"></i></button>
        </div>
        </div>
        </div>`;
    })
    document.querySelector(".products").innerHTML = clutter;
}
function addPopularProducts(){
    var clutter = "";
    popular.forEach(function(product){
        clutter+= `<div class="popular bg-white p-2 rounded-2xl flex items-start gap-3 w-[60%] flex-shrink-0">
        <div class="w-20 h-20 bg-red-500 flex-shrink-0 rounded-2xl border-4 border-white overflow-hidden">
        <img class="w-full h-full object-cover"
        src="${product.image}"
        alt="">
        </div>
        <div class="data py-2 w-full">
        <h1 class="leading-none font-semibold">${product.name}</h1>
        <h4 class="leading-none mt-2 text-sm font-semibold opacity-20">${product.headline}</h4>
        <h4 class="mt-3 font-semibold text-zinc-500">&#8377;${product.price}</h4>
        </div>
        </div>`;
    });
    document.querySelector(".populars").innerHTML = clutter;
}
function addToCart(){
    document.querySelector(".products")
    .addEventListener("click", function(details){
        // alert("Product added");
        if(details.target.classList.contains('add')){
            cart.push(products[details.target.dataset.index])
            console.log(cart)
        }
    })
}
function showCart(){
    document.querySelector(".carticon").addEventListener("click", function(){
        document.querySelector(".cartexpnd").style.display = "block";
        var clutter = "";
        cart.forEach(function(prod, index){
            clutter+= `<div class="flex gap-2 bg-white p-2 rounded-lg">
            <div class="w-10 h-10 flex-shrink-0 rounded-lg overflow-hidde ">
                <img class ="w-full h-full object-cover src = "${prod.image}"/>
            </div>
                <div>
                    <h3 class="font-semibold">${prod.name}</h3>
                    <h5 class="text-sm font-semibold opacity-80">${prod.price}</h5>
                </div>
        </div>`;
        })
        document.querySelector(".cartexpnd").innerHTML = clutter;
    })
}
showCart();
addToCart();
addProduct();
addPopularProducts();
