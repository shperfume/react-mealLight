import React, { useEffect, useState } from 'react'
import { CircleChevronLeft, CircleChevronRight } from 'lucide-react'

/* 
1. 슬라이드에 들어갈 사진 3장 + alt로 이미지 제목
2. 지금 몇 번째 이미지인지 순서를 기억 -> slideIndex(변수) /  setSlideIndex(index번호를 업데이트해주는 함수) => useState
3. 3초마다 다음 사진으로 바뀜 -> timer
4. < > 또는 인디케이터를 클릭해도 사진이 바뀜
*/

const slides = [
    {
        id: 1,
        image: "https://images.unsplash.com/photo-1512621776951-a57141f2eefd?q=80&w=1170",
        alt: "병아리콩 샐러드"
    },
    {
        id: 1,
        image: "https://images.unsplash.com/photo-1600289031464-74d374b64991?q=80&w=1075",
        alt: "야채 샐러드"
    },
    {
        id: 1,
        image: "https://images.unsplash.com/photo-1604908176997-125f25cc6f3d?q=80&w=1013",
        alt: "닭가슴살 볶음"
    }
]
console.log(slides)
slides.map((img) => {
    console.log('img', img)
})

function HeroSlider() {
    const [slideIndex, setSlideIndex] = useState(0);

    useEffect(() => {
        const timer = setInterval(() => {
            //초기변수 slideIndex = 0이 저장
            //setSlideIndex라는 함수를 실행하면 매개변수명 currentIndex에 0이 전달되서 실행
            setSlideIndex((currentIndex) => {
                console.log("currentIndex:", currentIndex);
                return (currentIndex + 1) % slides.length;
            });
        }, 3000);
        return () => clearInterval(timer); //화면을 다른 페이지로 이동했을 때 적용
    }, []);

    const prevSlider = () => { setSlideIndex((currentIndex) => (currentIndex - 1 + slides.length) % slides.length) }
    /* 
        현재 인덱스  =>  currentIndex -1 + 3 / 3 =
            0               0       -1 + 3 / 3 = 2
            1               1       -1 + 3 / 3 = 1
            2               2       -1 + 3 / 3 = 0
    */


    const nextSlider = () => { setSlideIndex((currentIndex) => (currentIndex + 1) % slides.length) }
    /* 
    현재 인덱스  =>  currentIndex +1 / 3 =
        0               0       +1  / 3 = 1
        1               1       +1  / 3 = 2
        2               2       +1  / 3 = 0
    */


    return (
        <div className="hero-slide">
            <img src={slides[slideIndex].image} alt={slides[slideIndex].alt} />

            <button className="slide-btn prev" onClick={prevSlider} aria-label='이전이미지'><CircleChevronLeft size={44} color='rgba(255,255,255,0.8)' /></button>
            <button className="slide-btn next" onClick={nextSlider} aria-label='다음이미지'><CircleChevronRight size={44} color='rgba(255,255,255,0.8)' /></button>

            <div className="slide-dots">
                {
                    slides.map((slide, index) => (
                        <button key={index} className={index === slideIndex ? 'on' : ''} onClick={() => setSlideIndex(index)} aria-label={`${index + 1}번 이미지`}></button>
                    ))
                }
            </div>
        </div >
    )
}


export default HeroSlider