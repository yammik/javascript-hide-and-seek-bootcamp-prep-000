function getFirstSelector(selector) {
  return document.querySelector(selector);
}

function nestedTarget() {
  return document.getElementById('nested').getElementsByClassName('target')[0];
}

function increaseRankBy(n) {
  const lis = document.getElementsByClassName('ranked-list');
  for (let i = 0; i < lis.length; i++) {
    lis[i].innerHTML = toString(parseInt(lis[i]) + n);
  }
}

function deepestChild() {
  let x = document.getElementById('grand-node');
  let search = true
  while (search) {
    if (x.firstElementChild) {
      x = x.querySelector('div');
    } else {
      return x;
      search = false;
    }
  }
}
