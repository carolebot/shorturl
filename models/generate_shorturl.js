function generateShorturl(shorturls) {
  // 短網址輸出格式為 5 碼英數組合
  const UpperCase = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ'
  const LowerCase = UpperCase.toLowerCase()
  const Numbers = '123456789'

  // 材料
  let collection = []
  collection = collection.concat(UpperCase.split(''), LowerCase.split(''), Numbers.split(''))

  // 隨機變數取出對應值
  function random(collection) {
    let randomIndex = Math.floor(Math.random() * collection.length)
    return collection[randomIndex]
  }

  // 產生密碼
  let pwdlength = 5
  let shorturl = ''
  for (let i = 0; i < pwdlength; i++) {
    shorturl += random(collection)
  } 
  return (shorturl)
}

module.exports = generateShorturl