//Solution1
document.querySelector(".side-bar .crayons-card .crayons-subtitle-2").innerHTML = "Hameed"
document.querySelector(".side-bar .crayons-card .color-base-70").innerHTML = "I Write Code"

//Solution2
let products = document.querySelectorAll(".row .as-imagegrid-item a span")
let arr=[]
products.forEach(function(product){if(product.innerText!="Support")if(product.innerText.includes("\n")){{arr.push(product.innerText.replace('\nSupport',''))}}})

//Solution4
document.querySelector(".customer-support a").innerText = "6361264269"

//Solution5
document.querySelector(".listing .mytabs .diwali-deals-product-sale-pro a:last-child").textContent = "Check Out"

//Solution6
document.querySelector(".searchinput-wrapper___3YrvF").addEventListener("mouseover",()=>{document.querySelector(".searchinput-wrapper___3YrvF").style.backgroundColor = "red"})