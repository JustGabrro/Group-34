function fade() {
    const box = document.getElementById('fadeBox');
    box.style.transition = 'opacity 1s';
    box.style.opacity = box.style.opacity === '0' ? '1' : '0';
  }
  
  function slide() {
    const box = document.getElementById('slideBox');
    box.style.transition = 'transform 1s';
    box.style.transform = box.style.transform === 'translateX(300px)' ? 'translateX(0)' : 'translateX(300px)';
  }
  
  function moveBall() {
    const ball = document.getElementById('ball');
    ball.style.transition = 'transform 0.5s';
    ball.style.transform = 'translateX(200px)';
    
    setTimeout(() => {
      ball.style.transform = 'translateX(0)';
    }, 500);
  }
  
  function resizeText() {
    const text = document.getElementById('text');
    text.style.transition = 'font-size 1s';
    text.style.fontSize = text.style.fontSize === '32px' ? '16px' : '32px';
  }
  
  function rotate() {
    const box = document.getElementById('rotateBox');
    box.style.transition = 'transform 1s';
    box.style.transform = box.style.transform === 'rotate(360deg)' ? 'rotate(0deg)' : 'rotate(360deg)';
  }
  