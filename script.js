var btc = document.getElementById("bitcoin");

var settings = {
    "async": true,
    "scrossDomain": true,
    "url": "https://api.coingecko.com/api/v3/simple/price?vs_currencies=usd&ids=bitcoin&x_cg_demo_api_key=CG-vwQT38PwNQa4BFNvES1HuuNG",
    "method": "GET",
    "headers": {}
}

$.ajax(settings).done(function (response) {
    btc.innerHTML = response.bitcoin.usd;
});