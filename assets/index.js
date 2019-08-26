const alertMessage = () => {
    confirm('Thank you for your outreach, we will get to you shortly')
}
const form = document.getElementById('submitform')
form.addEventListener('click',alertMessage)

const pictures = () => {
    alert('unfortunanely we are able to fulfill your request at this moment pls try again later')
}

const button = document.querySelector('.button').addEventListener('click', pictures)