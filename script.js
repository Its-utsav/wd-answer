function checkwindowssize() {
    let height = (window.screen.availHeight)
    let width = (window.screen.availWidth)

    if (height > width) {
        alert("Page only case access on desktop device , do you to responsiveness issue")
        alert('Redirect to google')
        window.location.replace('https://www.google.com')
    }
}

checkwindowssize()