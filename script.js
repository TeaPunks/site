const delay = ms => new Promise(res => setTimeout(res, ms));

const doanswer = async () => {
    let ans = document.querySelector('input[name="dance"]:checked');
    if (ans) ans = ans.id;
    if (ans == "yes") {
        alert("Ура, танцуй с нами!")
    }
    else if (ans == "no") {
        let askblock = document.querySelector('#ask')
        let newdiv = document.createElement('div',id='sad');
        newdiv.innerHTML = "<div><p>Очень жаль :с</p></div>"
        askblock.appendChild(newdiv);
        await delay(5000);
        askblock.removeChild(newdiv);
    }
    else alert("Эй, ты не ответил!")
}