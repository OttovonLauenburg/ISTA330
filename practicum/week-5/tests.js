

window.onload = () => {
    console.log(window.location.href);
    let hostname = new URL(window.location.href).hostname;
    let username = hostname.split('.')[0];
    console.log(username);
    let iframe = document.getElementById('myApplicationFrame');
    iframe.setAttribute('src', `https://${username}.github.io/imagequiz/`);
}

