$(document).ready(function() {
    fetch("http://spartacodingclub.shop/sparta_api/weather/seoul").then(res => res.json()).then(data => {

    let temp = data['temp']

    $('#temp').text(temp)
})
})