//함수란 특정 작업을 수행하는 코드 블록
function myF() {
    const demo = document.querySelector('.demo')

    //document.getElementById('demo').innerHTML = 'hello javascript!!'
    demo.innerHTML = 'hello javascript!!'
    demo.style.color = 'red'
    demo.style.fontSize = '30px'
    demo.style.backgroundColor = 'yellow'
    demo.style.transform = 'translate(100px, 210px) rotate(45deg) scale(1.5)'
}

//변수
//변수란 데이터를 저장하는 공간
//변수 선언(let, const, var)

let a = 20
a = 10
console.log(a)

const b = 30
//b = 40
console.log(b)

//데이터 타입
//숫자(number)

let num1 = 1
let num2 = 2
console.log(num1 + num2)

//문자열(string)

let str1 = '1'
let str2 = '2'

console.log(str1 + str2)

//불린(boolean)
const isTrue = true
const isFalse = false
console.log(isTrue, isFalse)

//객체(object)
const post = {
    img: 'https://cdn.themission.co.kr/news/photo/202404/73207_95929_5504.jpg',
    title: '차노을',
}
console.log(post)
console.log(post.img)
console.log(post.title)

//배열(array)
//순서가 있는 리스트
const arr = [1, 2, 3, 4, 5]
console.log(arr)
console.log(arr[0])

const users = [
    { name: '홍길동', age: 20 },
    { name: '김철수', age: 30 },
    { name: '이영희', age: 40 },
]

console.log(`${users[1].name} 님 안녕하세요`)

//함수(function)
//기명함수
function 함수이름() {}
함수이름()

//익명함수
const fun1 = function () {
    console.log('fun1')
}
//화살표 함수
const fun2 = () => {
    console.log('fun2')
}
fun2()

//조건문
//if문
const apple = 1

if (apple === 1) {
    console.log('apple은 1개다.')
} else if (apple === 2) {
    console.log('apple은 2개다.')
} else {
    console.log('apple은 1개도 2개도 아닙니다.')
}

//slide
let current = 0
const lstSlide = document.querySelector('.slide ul')
const slideCount = document.querySelectorAll('.slide li').length

//3초마다 슬라이드가 넘어가도록
//setInterval(함수, 시간)
setInterval(function () {
    slide() //슬라이드 함수 호출
}, 3000)

//슬라이드 함수 정의
function slide() {
    //current 0, 1, 2
    // 0 * -100% = 0
    // 1 * -100% = -100% (left: -100%)
    // 2 * -100% = -200% (left: -200%)
    current = (current + 1) % slideCount
    lstSlide.style.left = current * -100 + '%'
}
