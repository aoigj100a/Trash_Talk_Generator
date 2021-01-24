//隨機產生index 並回傳結果
function pickRandom(array){
    const index = Math.floor(Math.random() * array.length)
    return array[index]
}

function talkShit(options) {
    let phrase = ['很簡單', '很容易', '很快', '很正常']
    let collection = []
    let result 

    if(!options.jobs){
        result = "不要旋轉我！選個職業來！"
        return result
    }

    if(options.jobs ==="工程師"){
        collection = ['加個按鈕', '加新功能', '切個版', '改一點 code']
        collection = pickRandom(collection)

    }else if(options.jobs ==="設計師"){
        collection = ['畫一張圖', '改個 logo', '順便幫忙設計一下', '隨便換個設計']
        collection = pickRandom(collection)

    }else if(options.jobs ==="創業家"){
        collection = ['週末加班', '要能賺錢', '想個 business model', '找 VC 募錢']
        collection = pickRandom(collection)
    }

    phrase = pickRandom(phrase)
    result = `身為一個${options.jobs}，${collection}，${phrase}吧！`
    
    return result
}

module.exports = talkShit