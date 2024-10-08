function checkwindowssize() {
    let height = (window.screen.availHeight)
    let width = (window.screen.availWidth)

    if (height > width) {
        alert("Page only case access on desktop device , do you to responsiveness ")
        alert('Redirect to google')
        window.location.replace('https://www.google.com')
    }
}


checkwindowssize()

document.addEventListener("DOMContentLoaded", () => {
    alert(
        "This link will deactivate with in few days , do not share this link"
    );
});
function showAlert() {
    alert("Soft copy link will be set when all question are done ... ");
}