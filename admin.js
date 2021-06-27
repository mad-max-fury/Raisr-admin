
//formatting date
var currentTime = new Date().getTime();
var currentYear = new Date().getFullYear();
var currentMonth = new Date().getMonth();
var currentDay = new Date().getDay();
var date = new Date()
const months = ['Jan', 'Feb', 'March', 'April', 'May', 'June', 'July', 'Aug', 'Sept', 'Oct', 'Nov', 'Dec']
const monthIndex = date.getMonth()
const monthName = months[monthIndex]
document.getElementById("day").innerHTML = date.getDate();
document.getElementById("month").innerHTML = monthName;
document.getElementById("year").innerHTML = currentYear;

//switch display from approval to security

const approval = document.getElementById('Approval')
const security = document.getElementById('Security')
const innerItemApproval = document.getElementsByClassName('inner-item-container')
const innerItemSecurity = document.getElementsByClassName('inner-item-security')



approval.addEventListener('click', () => {
  console.log('clicked');
  Array.from(innerItemApproval).forEach(elem => {
    elem.style.display = 'block'
    approval.classList.add('active')
    console.log(elem.classList);
  })
  Array.from(innerItemSecurity).forEach(elem => {
    elem.style.display = 'none'
    security.classList.remove('active')
  })
})

security.addEventListener('click', () => {
  console.log('clicked');
  Array.from(innerItemApproval).forEach(elem => {
    elem.style.display = 'none'
    approval.classList.remove('active')
  })
  Array.from(innerItemSecurity).forEach(elem => {
    elem.style.display = 'block'
    security.classList.add('active')
  })
})


//getting fundRaiser accounts
let options = {
  method: 'GET',
  headers: {
    'Content-Type': 'application/json',
    'Authorization': 'Token 4e2c738adbb16733ec6db3f01eee4da990c0d5ac'

  }
}
let url = 'https://raisr.herokuapp.com/api/v1/adminportal/'
const tableBody = document.getElementById('table-body')
async function getAccounts() {
  const res = await fetch(url, options);
  let data = await res.json();
  data.forEach(a => {
    console.log(a);
    let newResult = "";
    newResult += `<div class="body-item1">
                    <div>${a.name}</div>
                    <div>${a.campaign_category}</div>
                    <div>${a.amount}</div>
                    <div>${a.start_date}</div>
                    <div>${a.end_date}</div>
                    <div><button class="disable" id="${a.id}">Disable</button><button class="enable"
                        id="${a.id}">Enable</button></div>
                  </div>
                    
                    
                    `;
    tableBody.innerHTML += newResult;
  })
}
getAccounts();
