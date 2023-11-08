window.addEventListener("load", function(){

    //プラグインを定義
    gsap.registerPlugin(ScrollTrigger);
    
    const area  = document.querySelector(".js-area");
    const wrap  = document.querySelector(".js-wrap");
    const items = document.querySelectorAll(".js-item");
    const num   = items.length;
    
    //横幅を指定
    gsap.set(wrap,  { width: num * 100 + "%" });
    gsap.set(items, { width: 100 / num + "%" });
    
    gsap.to(items, {
      xPercent: -100 * ( num - 1 ), //x方向に移動させる
      ease: "none",
      scrollTrigger: {
        trigger: area, //トリガー
        start: "top top", //開始位置
        end: "+=4000", //終了位置 スクロール量の調整
        pin: true, //ピン留め
        scrub: true, //スクロール量に応じて動かす
      }
    });
});

window.addEventListener("load", function(){

  //プラグインを定義
  gsap.registerPlugin(ScrollTrigger);
  
  const text = document.querySelectorAll(".js-text");

  gsap.to(text, {
  delay: 1, //アニメーションの初期遅延（アニメーションが開始されるまでの指定）
  duration: 1, //アニメーションの時間の設定
  opacity: 1, //表示状態の指定
  y: 0, //cssでY軸-20pxから完了時0pxへの指定

  scrollTrigger: {
  trigger: text,
  start: "top center",
  end: "bottom center",
  scrub: 1,

   },
  });
  });