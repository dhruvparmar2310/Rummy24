//example of live project Rummy 24 | Yudiz Solutions Ltd.
let cards = [
    {"nLabel": "J", "nValue": 11, "eSuit": "BlackSpade", "isJoker": false, "nGroupId": 0 },
    {"nLabel": "Q", "nValue": 12, "eSuit": "BlackSpade", "isJoker": false, "nGroupId": 0},
    {"nLabel": "K", "nValue": 13, "eSuit": "BlackSpade", "isJoker": false,"nGroupId": 0},

    //group id 1 start
    {"nLabel": "J", "nValue": 11, "eSuit": "RedDiamond", "isJoker": false, "nGroupId": 1},
    {"nLabel": "Q", "nValue": 12, "eSuit": "Heart", "isJoker": false, "nGroupId": 1},
    {"nLabel": "K", "nValue": 13, "eSuit": "RedDiamond", "isJoker": false, "nGroupId": 1},
    
    //group id 2
    {"nLabel": "A", "nValue": 1, "eSuit": "BlackSpade", "isJoker": false, "nGroupId": 2},
    {"nLabel": "2", "nValue": 2, "eSuit": "BlackSpade", "isJoker": true, "nGroupId": 2},
    {"nLabel": "8", "nValue": 8, "eSuit": "BlackSpade", "isJoker": false, "nGroupId": 2},
    {"nLabel": "9", "nValue": 9,"e Suit": "BlackSpade","isJoker": false,"nGroupId": 2},

    //group id 3
    {"nLabel": "5", "nValue": 5, "eSuit": "BlackClub", "isJoker": false, "nGroupId": 3},
    {"nLabel": "6", "nValue": 6, "eSuit": "BlackClub", "isJoker": false, "nGroupId":  3},
    
    //gropup id 4
    {"nLabel": "2", "nValue": 2, "eSuit": "RedDiamond", "isJoker": true, "nGroupId":  4},
    {"nLabel": "3", "nValue": 3, "eSuit": "RedDiamond", "isJoker": false, "nGroupId":  4},
    {"nLabel": "8", "nValue": 8, "eSuit": "RedDiamond", "isJoker": false, "nGroupId":  4},

    //gropup id 5
    {"nLabel": "5", "nValue": 5, "eSuit": "Heart", "isJoker": false, "nGroupId":  5},
    {"nLabel": "6", "nValue": 6, "eSuit": "Heart", "isJoker": false, "nGroupId":  5},
    {"nLabel": "K", "nValue": 13, "eSuit": "Heart", "isJoker": false, "nGroupId":  5},

    //group id 6
    {"nLabel": "6", "nValue": 6, "eSuit": "BlackClub", "isJoker": false, "nGroupId":  6},
    {"nLabel": "8", "nValue": 8, "eSuit": "BlackSpade", "isJoker": false, "nGroupId":  6},
    {"nLabel": "7", "nValue": 7, "eSuit": "RedDiamond", "isJoker": false, "nGroupId":  6},
    {"nLabel": "10", "nValue": 10, "eSuit": "RedDiamond", "isJoker": false, "nGroupId":  6}
];

// cards.sort((a, b) => {
//     return a.nGroupId - b.nGroupId;
// });

/*-------------------------------------------------------------*/
let nCardLength = 0;
var k = 0;

while(nCardLength !== cards.length){
    
    var newArrObj = [];
    var nCardScores = 0;

    for (let i = 0; i < cards.length; i++){
        if (cards[i].nGroupId === nCardLength){ //if main array obj id is equals to "0"
            newArrObj.push(cards[i]);
            //console.log(newArrObj);
        }
    }
    
    if (newArrObj.length == 0) {
        break;
    }
    document.getElementById("output").innerHTML += `<div class="CardScores" style="color: green"></div>`;
    
    newArrObj.sort((a, b) => {
        return a.nValue - b.nValue;
    })
    
    let strSuits = newArrObj[0].eSuit;
    let nCardValue = newArrObj[0].nValue;
    let sequence = true;

    for (let i = 0; i < newArrObj.length; i++) {
        if ((strSuits !== newArrObj[i].eSuit) || (nCardValue !== newArrObj[i].nValue)) {
            sequence = false;
            break;
        }
        nCardValue++;
    }

    if (sequence === false) {
        for (let i = 0; i < newArrObj.length; i++) {
            if ((newArrObj[i].isJoker === false) && (newArrObj[i].nValue > 10 || newArrObj[i].nValue === 1)) {
                nCardScores += 10;
            }
            
            else if ((newArrObj[i].isJoker === false) && (newArrObj[i].nValue < 10) && (newArrObj[i].nValue > 1)) {
                nCardScores += newArrObj[i].nValue;
            }
            else {
                nCardScores += 0;
            }
        }
    }
    
    else {
        nCardScores += 0;
    }
    
    // console.log("Card Scores : " + nCardScores);
    // console.log(newArrObj);
    
    document.querySelectorAll(".CardScores")[document.querySelectorAll(".CardScores").length-1].innerText = `Group id ${k} --> Card Scores = ${nCardScores}`;
    
    k++;
    nCardLength++;
}

