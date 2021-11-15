



// Menu 
((document) => {
  const $menu = document.getElementById('menu'),
  $bars = document.querySelector('.menu-bars'),
  $close = document.querySelector('.menu-close');

  $bars.addEventListener("click", () => {
    $menu.classList.toggle('menu-isActive')
    $close.classList.toggle('d-flex')
    $bars.classList.toggle('d-none')
  } )
  $close.addEventListener("click", () => {
    $menu.classList.toggle('menu-isActive')
    $close.classList.toggle('d-flex')
    $bars.classList.toggle('d-none')
  } )
  document.addEventListener('click', (e) => {
    if(e.target.matches(".menu a")){
      $menu.classList.remove('menu-isActive')
      $close.classList.remove('d-flex')
      $bars.classList.remove('d-none')
    }
  })
})(document);


// Form contacto

((d) => {
  const $form = d.querySelector('#contact-form'),
    $loader = d.querySelector('#contact-loader'),
    $responseModal = d.querySelector('#response-modal')

  $form.addEventListener("submit", (e) => {
    e.preventDefault()
    $loader.classList.remove('d-none')
    fetch('https://formsubmit.co/jacksonguerrerovega2@gmail.com',{
      method: "POST",
      body: new  FormData(e.target),
    })
      .then((res) => (res.ok ? res : Promise.reject(res)))
      .then((res)=> {
        location.hash= '#modal-gracias'
        $loader.classList.add('d-none')
        $form.reset()
      })
      .catch((err) => {
        let message = err.statusText || 'Ocurrion un error, intenta nuevamente';
        $responseModal.textContent = `Error ${err.status}: ${message}`
      })
      .finally(() => {
        setTimeout(() => {
          location.hash = '#close'
        }, 3000)
      })
  })
})(document);