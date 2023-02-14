var cart = new Array();

        function addToCart(x) {
            var boxsp = x.parentElement.children;
            var name = boxsp[0].children[0].innerText;
            var img = boxsp[1].src;
            var price = boxsp[2].children[0].innerText;
            var quantity = boxsp[3].value;
            var item = {name, img, price, quantity};
            alert("add to cart successful");
            cart.push(item);

            // console.log(cart);
            showCountItem();
            sessionStorage.setItem("cart", JSON.stringify(cart));   
        }
        function showCountItem() {
            var countsp = cart.length;
            document.getElementById("countItem").innerHTML = countsp;
        }
        function showMyCart() {
            var gh = sessionStorage.getItem("cart");
            var cart = JSON.parse(gh);
            var ttgh = ""; 
            var tong = 0;
            for(let i=0 ; i < cart.length; i++){
                let name = cart[i]["name"];
                let img = "<img src='" + cart[i]["img"] + "' width='60' height='80'>";
                let price = cart[i]["price"];
                let quantity = cart[i]["quantity"];
                let tt= price * quantity;
                tong += tt;
                ttgh += '<tr>';
                ttgh += '<td>'+name+'</td>';
                ttgh +='<td>' +img+'</td>';
                ttgh +='<td>'+price+'</td>';
                ttgh +='<td>'+quantity+'</td>';
                ttgh +='<td>';
                ttgh +='<div>' + tt + '</div>' ;
                ttgh +='</td>';
                ttgh +='</tr>';
            }
            ttgh += '<tr>';
            ttgh += '<th colspan="4">Total order</th>';
            ttgh += '<th>';
            ttgh += '<div>'+ tong +'</div>';
            ttgh += '</th>';
            ttgh += '</tr>';
            
            document.getElementById("showMyCart").innerHTML= ttgh;
        }
        showCountItem();
        showMyCart();