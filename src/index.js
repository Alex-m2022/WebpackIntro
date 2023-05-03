import './style.css'
import { heading } from "./header";
import { mainContent } from './mainPage';

function component() {
    let element = document.getElementById('content');

    heading()
    return element;
}

component()
mainContent()
