let emoji =[ 
    {
        mood:"Cool",
        url:"https://i.pinimg.com/originals/66/12/e2/6612e2d02db90bfa78fd4afb2e2dc15c.jpg"
    },
    {
        mood:"Сумний",
        url:"https://w7.pngwing.com/pngs/222/140/png-transparent-sad-emoticon-iphone-emoji-sadness-smiley-emoticon-emoji-face-electronics-face-emoji-face-thumbnail.png"
    },
    {
        mood:"Сміх",
        url: "https://e7.pngegg.com/pngimages/568/387/png-clipart-emojipedia-whatsapp-text-messaging-cross-eye-smiley-apple-color-emoji.png"
    },
    {
        mood:"Закоханий",
        url:"https://i.pinimg.com/originals/df/bd/21/dfbd2107610da3e4cb4873853579ae25.png"
    },
    {
        mood:"Dude",
        url:"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSgk0lQuebQVG8DrlQlRiT_7ELmbQEI86SMhw&usqp=CAU.png"
    },
    {
        mood:"Kitty",
        url:"https://smile-emoji.ru/wp-content/uploads/site-images/discord/e504b712f65369b68d88f3f1900f7ff7.png"
    }
    ] 
    document.getElementById("mood").onchange = () =>
    {
        let numberEmotion = document.getElementById("mood").value
        document.getElementById("img").innerHTML = 
        `
        <p>${emoji[numberEmotion-1].mood}</p>
        <img src="${emoji[numberEmotion-1].url}">
        `
    }