/* change dark mode to light mode */

function toggleMode() {
    const html = document.documentElement

    // if(html.classList.contains('light')){
    //     html.classList.remove('light')
    // } else {
    //     html.classList.add('light')
    // }
    
    html.classList.toggle('light')
}