const messages = [
    "Are You Ready To Become Fascist?",
    "You Have To Believe In Hitler",
    "Can't Hear You!",
    "HAIL HITLER",
    "Congralations, You Are Real Fascist Now."
  ];
  let currentIndex = 0;

  function changeParagraphText() {
    const paragraph = document.getElementById('myParagraph');
    paragraph.textContent = messages[currentIndex]; 
    currentIndex = (currentIndex + 1) % messages.length; 
  }

  setInterval(changeParagraphText, 5000);