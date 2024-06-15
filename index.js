// const | let | ver
// const 선언과 동시 값 지정 절대불변 -> 상수선언
// let 변수 -> 같은 이름 불가
// ver 

const myname = "방보영"
let myaccount = 100;
myaccount += 1100 + 2000;
console.log("금액확인", myaccount);

myaccount += "원";
myaccount +=5000;

//console.log("단위추가", myaccount, "데이터타입은?", typeof myaccount);

const mynavi = ["네이버", "다음", "구글"];
const mynaivobj = {
    naver : "네이버",
    daum : "다음",
    goggle : "구글"
}

//console.log(mynavi[0], mynaivobj["naver"], mynaivobj.naver)

const mynaivmulti = {
    title : [],
    href : [],
    cls : []
}