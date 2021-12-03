const header = document.getElementsByClassName('header')[0];

header.addEventListener('click', (event) => {
    const target = event.target;
    const body = document.getElementsByTagName('body')[0];
    const btnBurger = document.getElementsByClassName('header-burger')[0];

    if (target.classList.contains('header-burger')) {
        btnBurger.classList.toggle('active');
        header.classList.toggle('active');
        body.classList.toggle('lock')
    }
});


const gallery = document.querySelectorAll(".image"),
    previewBox = document.querySelector(".preview-box"),
    previewImg = previewBox.querySelector("img"),
    closeIcon = previewBox.querySelector(".icon"),
    currentImg = previewBox.querySelector(".current-img"),
    totalImg = previewBox.querySelector(".total-img"),
    shadow = document.querySelector(".shadow");


    for (let i = 0; i < gallery.length; i++) {
        totalImg.textContent = gallery.length;
        let newIndex = i;
        let clickedImgIndex;
        gallery[i].onclick = () => {
            clickedImgIndex = i;

            function preview() {
                currentImg.textContent = newIndex + 1;
                previewImg.src = gallery[newIndex].querySelector("img").src;
            }

            preview();
            const prevBtn = document.querySelector(".prev");
            const nextBtn = document.querySelector(".next");
            if (newIndex === 0) {
                prevBtn.style.display = "none";
            }
            if (newIndex >= gallery.length - 1) {
                nextBtn.style.display = "none";
            }
            prevBtn.onclick = () => {
                newIndex--;
                if (newIndex === 0) {
                    preview();
                    prevBtn.style.display = "none";
                } else {
                    preview();
                    nextBtn.style.display = "block";
                }
            }
            nextBtn.onclick = () => {
                newIndex++;
                if (newIndex >= gallery.length - 1) {
                    preview();
                    nextBtn.style.display = "none";
                } else {
                    preview();
                    prevBtn.style.display = "block";
                }
            }
            document.querySelector("body").style.overflow = "hidden";
            previewBox.classList.add("show");
            shadow.style.display = "block";
            closeIcon.onclick = () => {
                newIndex = clickedImgIndex;
                prevBtn.style.display = "block";
                nextBtn.style.display = "block";
                previewBox.classList.remove("show");
                shadow.style.display = "none";
                document.querySelector("body").style.overflow = "scroll";
            }
        }
    }



