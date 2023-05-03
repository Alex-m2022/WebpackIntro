import cowlogo from './cowlogo.jpg'
const element = document.getElementById('content')

export const mainContent = () => {
    const element = document.getElementById('content')  // grabbing the content div from html which we will append everything to
    const div = document.createElement('div') 
    div.classList.add('mainContent')

    const secHalf = document.createElement('div')
    secHalf.classList.add('secHalf')

    const myImage = new Image();   // adding a background image to the secHalf div
    myImage.src = cowlogo
    myImage.classList.add('cowLogo')
    secHalf.appendChild(myImage)

    const tryFood = document.createElement('h1')
    tryFood.classList.add('tryFood')
    tryFood.textContent = 'Try Our delicious Beef Entrees'

    const orderbtn = document.createElement('button')  // creating a order button
    orderbtn.textContent = 'Order Now'
    orderbtn.classList.add('orderBtn')

    const orderCtn = document.createElement('div')
    orderCtn.classList.add('orderCtn')
    orderCtn.appendChild(tryFood)
    orderCtn.appendChild(orderbtn)
    secHalf.appendChild(orderCtn)
    div.appendChild(secHalf)
    element.appendChild(div)
}