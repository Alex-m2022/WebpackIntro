import { displayMenu } from "./menu"
import { mainContent } from "./mainPage"


export const heading = () => {
    const content = document.getElementById("content")  // empty div in our index.html,
    const header = document.createElement('header')     // header we will be appending everything to 
    let title = document.createElement('h1')
    title.textContent = 'Beef Fil A'
    const linkContainer = document.createElement('div')
    const ul = document.createElement('ul')

    // creating 3 anchor tag elements and appending them into li 

    const firstli = document.createElement('li')
    const menu = document.createElement('a')
    menu.setAttribute('href', '#')
    menu.textContent = 'menu'
    menu.addEventListener('click', displayMenu)
    firstli.appendChild(menu)

    const secondli = document.createElement('li')
    const careers = document.createElement('a')
    careers.setAttribute('href', '#')
    careers.textContent = 'Home'
    careers.addEventListener('click', mainContent)
    secondli.appendChild(careers)

    const thirdli = document.createElement('li')
    const aboutUs = document.createElement('a')
    aboutUs.setAttribute('href', '#')
    aboutUs.textContent = 'Contact Us'
    thirdli.appendChild(aboutUs)

    const findRestaurant = document.createElement('P')
    findRestaurant.textContent = "Find a restaurant"
    findRestaurant.classList.add('restText')

    ul.appendChild(firstli)
    ul.appendChild(secondli)
    ul.appendChild(thirdli)
    linkContainer.appendChild(ul)

    const contentContainer = document.createElement('div')
    contentContainer.classList.add('headerContent')
    contentContainer.appendChild(title)
    contentContainer.appendChild(linkContainer)
    contentContainer.appendChild(findRestaurant)
    header.appendChild(contentContainer)
    content.appendChild(header)

    header.classList.add('header')
    linkContainer.classList.add('lists')
}