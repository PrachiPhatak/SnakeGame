$(".modal-header").css("background-color", "#5B9930")
$(".modal-body").css("background-color", "#6BB238")

$("#board").append(addBoard());

function addBoard() {
    let board = "";
    for (let r = 0; r < 6; r++) {

        board = board + `<div class="row" style="height: 35px;">`
        for (let i = 0; i < 6; i++) {
            board = board + `<div class = "lightGreenSq col-1"></div>`
            board = board + `<div class = "greenSq col-1"></div>`
        }
        board = board + `</div>`

        board = board + `<div class="row" style="height: 35px;">`
        for (let i = 0; i < 6; i++) {
            board = board + `<div class = "greenSq col-1"></div>`
            board = board + `<div class = "lightGreenSq col-1"></div>`
        }
        board = board + `</div>`
    }
    return board;
}

function addSnake() {

}

function addFruit() {

}