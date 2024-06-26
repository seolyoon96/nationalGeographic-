gsap.registerPlugin(ScrollTrigger);

const colors = ['#1b1c1e', '#1b1c1e', '#1b1c1e', '#41C9E2', '#fff', '#1b1c1e', '#1b1c1e', '#1b1c1e', '#1b1c1e'];

colors.forEach((color, index) => {
  if (index === 0) return; // Skip the first color (initial state)
  gsap.to('#main', {
    backgroundColor: color,
    scrollTrigger: {
      trigger: `.sec${index}`,
      start: 'top top',
      end: 'bottom 300px',
      scrub: true,
      markers: true,
    },
  });
});

gsap.to('.whale-sea', {
  y: 300, // y축 방향으로 이동
  duration: 0.5,
  // ease: 'power1.out',
  // yoyo: true, // 애니메이션을 왕복
  // repeat: -1, // 무한 반복
  scrollTrigger: {
    trigger: '.sec01',
    start: '0 200px',
    end: 'bottom bottom',
    scrub: 1,
  },
});
gsap.to('.bg-sea', {
  scale: 1.1,
  duration: 3,
  scrollTrigger: {
    trigger: '.sec01',
    start: 'top 335px',
    end: 'bottom bottom',
    scrub: true,
  },
});
// gsap.to('#logo', {
//     fontSize: '25px',
//     // duration: 3,
//     scrollTrigger: {
//         trigger: '#header',
//         start: 'top top',
//         end: 'bottom bottom',
//         scrub: true,
//         markers: true,
//     },
// });
// sec01


var swiper = new Swiper('.sec02-slide', {
  slidesPerView: 1, // 한 번에 보여지는 슬라이드 개수를 1로 설정
  slidesPerGroup: 1, // 한 번에 그룹으로 묶는 슬라이드 개수를 1로 설정
  centeredSlides: true,
  loop: true, // 루프 모드 활성화
  effect: 'fade',
  autoplay: {
    delay: 2000,
    disableOnInteraction: false,
  },
  pagination: {
    el: '.swiper-pagination',
    type: 'fraction',
  },
  navigation: {
    nextEl: '.swiper-button-next',
    prevEl: '.swiper-button-prev',
  },
});

var swiper = new Swiper('.sec02-slide2', {
  slidesPerView: 1, // 한 번에 보여지는 슬라이드 개수를 1로 설정
  slidesPerGroup: 1, // 한 번에 그룹으로 묶는 슬라이드 개수를 1로 설정
  centeredSlides: true,
  loop: true, // 루프 모드 활성화
  effect: 'fade',
  autoplay: {
    delay: 2500,
    disableOnInteraction: false,
  },
  pagination: {
    el: '.swiper-pagination',
    type: 'fraction',
  },
  navigation: {
    nextEl: '.swiper-button-next',
    prevEl: '.swiper-button-prev',
  },
});

gsap.to('button > img', {
  rotation: '-=360',
  duration: 30,
  repeat: -1,
  ease: 'slow(0.9, 0.9)',
});
