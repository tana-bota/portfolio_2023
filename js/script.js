// JavaScript
console.log('Hello world!');

//画面が読み込まれたら animation を呼び出す
window.addEventListener('load', animation);

// 定数の定義
const loading = document.getElementById('loading');

// cssクラスを追加する関数
function animation() {
  loading.classList.add('loaded');
}

$(function () {
  // #で始まるアンカーをクリックした場合に処理
  $('a[href^=#]').click(function () {
    // スクロールの速度
    var speed = 400; // ミリ秒
    // アンカーの値取得
    var href = $(this).attr("href");
    // 移動先を取得
    var target = $(href == "#" || href == "" ? 'html' : href);
    // 移動先を数値で取得
    var position = target.offset().top;
    // スムーススクロール
    $('body,html').animate({ scrollTop: position }, speed, 'swing');
    return false;
  });
});


const items = document.querySelectorAll('.img-item');
//console.log(items);
console.log(items.length);

// for文
for (let i = 0; i < items.length; i++) {

  const keyframes = {
    opacity: [0, 1],
    translate: ['0 50px', 0],
    filter: ['blur(10px)', 'blur(0)'],
  };

  const options = {
    duration: 600,
    fill: 'forwards',
    delay: (i +2) * 400,
  };

  items[i].animate(keyframes, options);
}

jQuery(function() {
  var appear = false;
  var pagetop = $('#page_top');
  $(window).scroll(function () {
    if ($(this).scrollTop() > 200) {  //200pxスクロールしたら
      if (appear == false) {
        appear = true;
        pagetop.stop().animate({
          'bottom': '60px' //下から60pxの位置に
        }, 300); //0.3秒かけて現れる
      }
    } else {
      if (appear) {
        appear = false;
        pagetop.stop().animate({
          'bottom': '-60px' //下から-60pxの位置に
        }, 300); //0.3秒かけて隠れる
      }
    }
  });
  pagetop.click(function () {
    $('body, html').animate({ scrollTop: 0 }, 500); //0.5秒かけてトップへ戻る
    return false;
  });
});





Resources

// const show = (entries, obs) => {
//   entries.forEach((entry) => {
//     if (entry.isIntersecting) {
//       const keyframes = {
//         opacity: [0, 1],
//         translate: ['200px 0', 0]
//       }
//       entry.target.animate(keyframes, 600);

//       //一度表示されたら止める
//       obs.unobserve(entry.target);
//     }
//   });
// }

// const observer = new IntersectionObserver(show);
// //監視対象
// const images = document.querySelectorAll('.img01');
// images.forEach(img => {
//   observer.observe(img);
// });

// const show2 = (entries, obs) => {
//   entries.forEach((entry) => {
//     if (entry.isIntersecting) {
//       const keyframes = {
//         opacity: [0, 1],
//         translate: ['-200px 0', 0]
//       }
//       entry.target.animate(keyframes, 600);

//       //一度表示されたら止める
//       obs.unobserve(entry.target);
//     }
//   });
// }
// const observer2 = new IntersectionObserver(show2);
// observer2.observe(document.querySelector('.img02'));

// const show3 = (entries, obs) => {
//   entries.forEach((entry) => {
//     if (entry.isIntersecting) {
//       const keyframes = {
//         opacity: [0, 1],
//         translate: ['0 200px', 0]
//       }
//       entry.target.animate(keyframes, 600);

//       //一度表示されたら止める
//       obs.unobserve(entry.target);
//     }
//   });
// }

// const observer3 = new IntersectionObserver(show3);
// observer3.observe(document.querySelector('.img03'));