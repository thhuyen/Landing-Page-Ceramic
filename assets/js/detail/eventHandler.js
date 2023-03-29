$('.increase_volume').onclick = function() {
    $('.volume').innerText = +$('.volume').innerText + 1;
}
$('.decrease_volume').onclick = function() {
    let volume = +$('.volume').innerText;
    if (volume > 1)
        $('.volume').innerText = volume - 1;
}

