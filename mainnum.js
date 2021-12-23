(function () {
  let startBtn = $('.startBtn');
  let mainInput = $('.main-input');
  let allLines = $('.line');
  let allText = [];
  let score = 0;
  let displayResult = $('.display-result');

startBtn.on('click',startGame);
// pauseBtn.on('click',pauseGame);

function startGame() {
  $(this).hide();
  mainInput.focus();
  let speed = 1;
  let textLength = 1;
  let typingNumbers = numbers.filter(number => number.length == textLength);
  let lvl = 5;

  let speedUp = setInterval(function () {
    textLength++;
    typingNumbers = numbers.filter(number => number.length == textLength);
  },10000)

  mainInput.on('keyup',checkInputTyping);
  function checkInputTyping() {
    let inputVal = $(this).val();
    let self = $(this);
    if(allText.includes(inputVal)){
    let index = allText.indexOf(inputVal);
    allText.splice(index,1);
    $('span').filter(function () {

    return $(this).text() == inputVal;
  }).css('background','blue').fadeOut(100,function () {
    $(this).remove();
  })
  self.val("");
  score++;
  displayResult.html(score)
    }
  }

  function insertSpans() {
    for (var i = 0; i < allLines.length; i++) {
      let rand = Math.floor(Math.random() * 15);
      if(rand <= lvl){
        let text = chooseText()
        allText.push(text);
        $(allLines[i]).append(`<span>${text}</span>`)
      }
    }
    setTimeout(insertSpans,7000)
  }
  insertSpans();

  function chooseText() {
    let rand = Math.floor(Math.random() * typingNumbers.length);
    let savedText = typingNumbers[rand];
    typingNumbers.splice(rand,1);

    return savedText;
  }
   let moveAll = setInterval(function () {
     let allSpans = $('span');
     allSpans.css({
       left : '+='+speed
     })
     $.each(allSpans,(index,el)=>{
       let position = $(el).position().left;
       function checkMediaQuery() {
        if (window.innerWidth > 1200) {
            $.each(allSpans, (index, el) => {
                let position = $(el).position().left;
                if (position > 850) {
                    clearAllIntervals()
                } else if (position > 700 && position < 710) {
                    $(el).addClass('danger');
                }
            })
        } else if (window.innerWidth < 1200 && window.innerWidth > 992) {
          $.each(allSpans, (index, el) => {
              let position = $(el).position().left;
              if (position > 720) {
                  clearAllIntervals()
              } else if (position > 570 && position < 580) {
                  $(el).addClass('danger');
              }
          })
      }else if (window.innerWidth < 992 && window.innerWidth > 768) {
            $.each(allSpans, (index, el) => {
                let position = $(el).position().left;
                if (position > 630) {
                    clearAllIntervals()
                } else if (position > 510 && position < 520) {
                    $(el).addClass('danger');
                }
            })
        } else if (window.innerWidth < 768 && window.innerWidth > 600) {
          $.each(allSpans, (index, el) => {
              let position = $(el).position().left;
              if (position > 480) {
                  clearAllIntervals()
              } else if (position > 350 && position < 360) {
                  $(el).addClass('danger');
              }
          })
      }else if (window.innerWidth < 600 && window.innerWidth > 500) {
        $.each(allSpans, (index, el) => {
            let position = $(el).position().left;
            if (position > 370) {
                clearAllIntervals()
            } else if (position > 280 && position < 290) {
                $(el).addClass('danger');
            }
        })
    }else if (window.innerWidth < 500 && window.innerWidth > 320) {
      $.each(allSpans, (index, el) => {
          let position = $(el).position().left;
          if (position > 245) {
              clearAllIntervals()
          } else if (position > 180 && position < 190) {
              $(el).addClass('danger');
          }
      })
  }
      }
      checkMediaQuery();
      
      window.addEventListener('resize', checkMediaQuery);
     })

   },50)

    function clearAllIntervals() {
    clearInterval(moveAll);
  }
}

})()


// var pause = document.querySelector('.pauseBtn');
// var line = document.querySelector('.line');

// pause.addEventListener('click', function pauseGame(e){
//   line.style.background = "purple";
// })
// var line = document.querySelector('.line');
// line.addEventListener('click',function (e) {
//   if (e.altKey === true) {
//     this.style.background = "tomato";
//   }else {
//     this.style.background = "cadetblue";
//   }
// })


