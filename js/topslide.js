//テキストのカウントアップの設定
var bar = new ProgressBar.Line(splash_text, {
  strokeWidth: 0,
  duration: 1000,
  trailWidth: 0,
  text: {
    style: {
      position:'absolute',
      left:'50%',
      top:'50%',
      padding:'0',
      margin:'0',
      transform:'translate(-50%,-50%)',
      'font-size':'5rem',
      color:'#fff',
    },
    autoStyleContainer: false 
  },
  step: function(state, bar) {
    bar.setText(Math.round(bar.value() * 100) + ' %'); 
  }
});

//アニメーションスタート
bar.animate(1.0, function () {
  $("#splash").delay(500).fadeOut(800);
});  