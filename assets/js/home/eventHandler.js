const findAppear = (type, name, name_replace) => {
    if (Array.isArray(type)) {
        const list = type.filter(e => e.className.includes(name));
        list[0].className = list[0].className.replace(name, name_replace)
    }
    else {
        type.className = type.className.replace(name, name_replace)
    }
}

const handleChangeSlide = (dot) => {
    if (dot.className.includes('solid'));
    else {
        findAppear([...$$('.icon-dot')], 'solid', 'regular');
        findAppear([...$$('.slider-imgs')], 'active', '');
        findAppear(dot, 'regular', 'solid');
        $$('.slider-imgs')[+dot.id.slice(4,5)].classList.add('active');
    }
}