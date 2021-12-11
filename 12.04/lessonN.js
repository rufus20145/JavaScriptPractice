c("message 1");
let p = new Promise(executor);
// p.then(good, bad);
let p1 = new Promise(executor1);
// p1.then(good, bad);
let p2 = new Promise(executor2);
// p2.then(good, bad);
// Promise.all([p.then(good, bad), p1.then(good, bad), p2.then(good, bad)]).then(e);
Promise.race([p.then(good, bad), p1.then(good, bad), p2.then(good, bad)]).then(e);

c("message 2");

function e(g, b) {
  c("123");
}

function good(v) {
  c("good", v);
  return true;
}
function bad(v) {
  c("bad", v);
  return false;
}

function executor(g, b) {
  if (r(1, 10) <= 3) {
    setTimeout(b, r(1000, 3000), 0);
  } else {
    setTimeout(g, r(1000, 3000), 0);
  }
}
function executor1(g, b) {
  if (r(1, 10) <= 3) {
    setTimeout(b, r(1000, 3000), 1);
  } else {
    setTimeout(g, r(1000, 3000), 1);
  }
}
function executor2(g, b) {
  if (r(1, 10) <= 3) {
    setTimeout(b, r(1000, 3000), 2);
  } else {
    setTimeout(g, r(1000, 3000), 2);
  }
}
