// selecting required element
const element = document.querySelector('.pagination ul')
let totalPages = 6
let page = 2
//calling function with passing parameters and adding inside element which is ul tag
element.innerHTML = createPagination(totalPages, page)
function createPagination(totalPages, page) {
  let liTag = ''
  let active
  let beforePage = page - 1
  let afterPage = page + 1
  if (page > 1) {
    //show the next button if the page value is greater than 1
    liTag += `<li class="btn prev" id="" onclick="createPagination(totalPages, ${
      page - 1
    })"><span><i class="fas fa-angle-left"></i> Prev</span></li>`
  }
  if (page > 2) {
    //if page value is less than 2 then add 1 after the previous button
    liTag += `<li class="first numb" onclick="createPagination(totalPages, 1)"><span>1</span></li>`
    if (page > 3) {
      //if page value is greater than 3 then add this (...) after the first li or page
      liTag += `<li class="dots"><span>...</span></li>`
    }
  }
  // how many pages or li show before the current li
  if (page == totalPages) {
    beforePage = beforePage - 2
  } else if (page == totalPages - 1) {
    beforePage = beforePage - 1
  }
  // how many pages or li show after the current li
  if (page == 1) {
    afterPage = afterPage + 2
  } else if (page == 2) {
    afterPage = afterPage + 1
  }
  for (var plength = beforePage; plength <= afterPage; plength++) {
    if (plength > totalPages) {
      //if plength is greater than totalPage length then continue
      continue
    }
    if (plength == 0) {
      //if plength is 0 than add +1 in plength value
      plength = plength + 1
    }
    if (page == plength) {
      //if page is equal to plength than assign active string in the active variable
      active = 'active'
    } else {
      //else leave empty to the active variable
      active = ''
    }
    liTag += `<li class="numb ${active}" onclick="createPagination(totalPages, ${plength})"><span>${plength}</span></li>`
  }
  if (page < totalPages - 1) {
    //if page value is less than totalPage value by -1 then show the last li or page
    if (page < totalPages - 2) {
      //if page value is less than totalPage value by -2 then add this (...) before the last li or page
      liTag += `<li class="dots"><span>...</span></li>`
    }
    liTag += `<li class="last numb" onclick="createPagination(totalPages, ${totalPages})"><span>${totalPages}</span></li>`
  }
  if (page < totalPages) {
    //show the next button if the page value is less than totalPage(20)
    liTag += `<li class="btn next" onclick="createPagination(totalPages, ${
      page + 1
    })"><span>Next <i class="fas fa-angle-right"></i></span></li>`
  }
  element.innerHTML = liTag //add li tag inside ul tag
  return liTag //reurn the li tag
}


var baseUrl = "https://quocmanh.com/Laravel-8/api/demo/restfulapi/product"
var coinsData = []
// var current_page = 1
// var records_per_page = 10;
var apiUrl = `${baseUrl}`;

const pageSize = 10;
let curPage = 1;

async function renderTable(page = 1) {
  await getData()

  if (page == 1) {
    prevButton.style.visibility = "hidden";
  } else {
    prevButton.style.visibility = "visible";
  }

  if (page == numPages()) {
    nextButton.style.visibility = "hidden";
  } else {
    nextButton.style.visibility = "visible";
  }

  // create html
  var cryptoCoin = "";
  coinsData.filter((row, index) => {
    let start = (curPage - 1) * pageSize;
    let end = curPage * pageSize;
    if (index >= start && index < end) return true;
  }).forEach(coin => {
    cryptoCoin += "<tr>";
    cryptoCoin += `<td> ${parseFloat(coin.btcPrice).toFixed(6)} </td>`;
    cryptoCoin += `<td> ${coin.rank}</td>`;
    cryptoCoin += `<td> ${coin.tier} </td>`;
    cryptoCoin += `<td> ${coin.name}</td>`;
    cryptoCoin += `<td> $${Math.round(coin.price)} Billion</td>`;
    cryptoCoin += `<td> ${coin.symbol}</td>`; "<tr>";
  });
  document.getElementById("data").innerHTML = cryptoCoin;
}

function previousPage() {
  if (curPage > 1) {
    curPage--;
    renderTable(curPage);
  }
}

function nextPage() {
  if ((curPage * pageSize) < coinsData.length) {
    curPage++;
    renderTable(curPage);
  }
}

renderTable()

function numPages() {
  return Math.ceil(coinsData.length / pageSize);
}

document.querySelector('#nextButton').addEventListener('click', nextPage, false);
document.querySelector('#prevButton').addEventListener('click', previousPage, false);
//Fetch Data from API
async function getData() {
  const response = await fetch(apiUrl)
  const coins = await response.json()
  console.log(coins)
  coinsData = coins.data.coins
}
getData()