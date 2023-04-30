var buttons = document.querySelectorAll('.btn-productCL');
for (var i = 0; i < buttons.length; i++) {
  buttons[i].addEventListener('click', function() {
    var productId = this.getAttribute('data-product-id');
    addToCart(productId);
    swal.fire({
      title: 'DESEJA ADICIONAR NO CARRINHO?',
      showDenyButton: true,
      showCancelButton: false,
      confirmButtonText: 'SIM',
      denyButtonText: `NÃO`,
    }).then((result) => {
      if (result.isConfirmed) {
        Swal.fire('PRODUTO ADICIONADO!', '', 'success')
      } else if (result.isDenied) {
        Swal.fire('PRODUTO NÃO ADICIONADO', '', 'warning')
        
      }
    })
  });
}

function addToCart(productId) {
  var cart = getCart();
  var productIndex = cart.findIndex(function(item) {
      return item.productId === productId;
  });
  
  if (productIndex > -1) {
      cart[productIndex].quantity++;
  } else {
      cart.push({
          productId: productId,
          quantity: 1
      });
  }
  saveCart(cart);
}

function getCart() {
  var cart = [];
  var cartCookie = document.cookie.split('; ').find(function(row) {
      return row.startsWith('cart=');
  });
  
  if (cartCookie) {
      cart = JSON.parse(cartCookie.split('=')[1]);
  }
  
  return cart;
}

function saveCart(cart) {
  document.cookie = 'cart=' + JSON.stringify(cart);
}


const links = document.querySelectorAll('a');

links.forEach(link => {
  if (link.getAttribute('href')) {
    const notification = document.createElement('span');
    notification.classList.add('notification');
    link.appendChild(notification);
  }
});


$(document).ready(function() {
  $(".scroll-link").on("click", function(event) {
    event.preventDefault();
    var target = $(this).attr("#secao00");
    $("html, body").animate({
      scrollTop: $(target).offset().top
    }, 1000);
  })
})
