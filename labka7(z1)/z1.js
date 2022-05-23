const btnPrev = document.querySelector('.btn-prev');
const btnNext = document.querySelector('.btn-next');
let slidertrack = document.querySelector('.slider-track');
let slides = document.querySelectorAll('.slide');
let sliderWidth = document.querySelector('.slider-container').offsetWidth;
let LineWidth = 0;
let widthArray = [0];
let offset = 0;
let step = 0;
let ostatok = 0;

for(let i = 0; i < slides.length; i++)
{
    widthArray.push(slides[i].offsetWidth);
    LineWidth += slides[1].offsetWidth;
}

slidertrack.style.width = LineWidth + 'px';
btnNext.addEventListener('click',() => {
    ostatok = LineWidth - sliderWidth - (offset + widthArray[step]);
    if(ostatok >= 0){
        offset = offset + widthArray[step];
        slidertrack.style.left = -offset+'px';
        step++;
    }
    else{
        slidertrack.style.left = -(LineWidth - sliderWidth) + 'px'
    }
})
btnPrev.addEventListener('click',() => {
    offset = offset + widthArray[step];
    slidertrack.style.left = offset+'px';
    step -= 1
})

/*
    let position = 0;
    const slidesToShow = 4;
    const slidesToScroll = 2;
    const container = document.querySelector('.slider-container');
    const track = document.querySelector('.slider-track');
    const btnPrev = document.querySelector('.btn-prev');
    const btnNext = document.querySelector('.btn-next');
    const items = document.querySelectorAll('.slider-item')
    const itemsCount = items.length;
    const itemWidth = container.clientWidth / slidesToShow;
    const movePosition = slidesToScroll * itemWidth;

    console.log(items);
    items.forEach((item) =>{
        item.style.minWidth = `${itemWidth}px`
    });

    btnNext.addEventListener('click',() => {
        const itemsLeft = itemsCount - (Math.abs(position) + slidesToShow * itemWidth) / itemWidth;

        position -= itemsLeft >= slidesToScroll ? movePosition : itemsLeft * itemWidth;

        setPosition();
        checkBtns();
    });
    btnPrev.addEventListener('click',() => {
        const itemsLeft = Math.abs(position) / itemWidth;

        position += itemsLeft >= slidesToScroll ? movePosition : itemsLeft * itemWidth;

        setPosition();
        checkBtns();
    });
    const setPosition = () =>{
        track.style.transform = `translateX(${position}px)`
    };
    const checkBtns = () =>{
        btnPrev.disabled = position == 0;
        btnNext.disabled = position <= -(itemsCount - slidesToShow) * itemWidth;
    };

    checkBtns();
    */