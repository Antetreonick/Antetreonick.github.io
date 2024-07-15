function power(a, b) {
    let o = BigInt(1);

    for (let i = 0; i < b; i++) {
        o *= BigInt(a)
    }
    return o.toString();
}
let w = document.getElementById('l');
let b = document.getElementById('r');
let m = document.getElementById('p');


window.onkeydown = (event) => {
    if (event.key == 'Enter') {
      try {
        let o = eval(w.value + b.value);
            if (typeof o !== 'undefined') {
                m.innerText = power(w.value, b.value);
            }
      } catch (err) { console.error('the value must not be a string!')}
    }
}
