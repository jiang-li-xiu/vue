/*
 * @Descripttion: 
 * @Author: JLX
 * @Date: 2022-07-01 16:28:33
 * @LastEditors: JLX
 * @LastEditTime: 2022-07-01 16:29:55
 */
function greeter(person: String) {
  return 'hello' + person
}

let user = 'jiang'

document.body.innerHTML = greeter(user)