window.addEventListener('load', () => {
    console.log("こんドル");
    document.querySelector('.a').addEventListener('click',() =>{
        cp();
    })
})

// function ss(){
//     var Jdata ={
//         data1: "赤",
//         data2: "うううううううううううううう"
//     };
//     localStorage.setItem("deku" , JSON.stringify(Jdata));
//     console.log("保存されたよ");

// }
function cp() {
    let col = kazuki.rows[3].cells.length;
    console.log(kazuki.rows[1].cells);
    console.log(kazuki.rows[3].cells.length);
    console.log(col);

    //document.querySelector('#tma').appendChild(col);
    console.log("処理できたよ");
}