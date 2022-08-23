const d = document;
let x = 0
let y = 0;

export function moveBall (e, ball, stage){

    const $ball = d.querySelector(ball)
    const $stage = d.querySelector(stage)
    
    let limitBall = $ball.getBoundingClientRect();
    let limitStage = $stage.getBoundingClientRect();
    
    switch (e.keyCode) {
        case 37:
            e.preventDefault();
            if(limitBall.left > limitStage.left){
                x--;
            }
        break;
        case 38:
            e.preventDefault();
            if(limitBall.top > limitStage.top){
                y--;
            }
        break;
        case 39:
            e.preventDefault();
            if(limitBall.right < limitStage.right){
                x++;
            }
        break;
        case 40:
            e.preventDefault();
            if(limitBall.bottom < limitStage.bottom){
                y++;
            }
        break;
    }
    $ball.style.transform = `translate(${x *15}px, ${y*15}px)` ;
}
