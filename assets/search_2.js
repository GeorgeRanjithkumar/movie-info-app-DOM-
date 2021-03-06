function SearchFunc_2() {
  let num = 0;

  var searchInput = document.querySelector(".searchInput");
  let filter = searchInput.value.toUpperCase();
  let movieCard = document.getElementsByClassName("movieCard"); // search field

  let movieTitle = document.querySelectorAll("strong");
  let sepi = document.querySelectorAll(".sepi"); // sepi is seasons & episodes short's form...
  let movieDisc = document.querySelectorAll(".movieDisc"); // movie discription
  let airTime = document.querySelectorAll(".airTime");

  for (let i = 0; i < movieCard.length || showCard.length; i++) {
    //  let titleValue = movieTitle[i].innerText; // i am just short this code...

    let [titleValue, sepiValue, discValue, dateValue] = [
      movieTitle[i].innerText,
      sepi[i].innerHTML,
      movieDisc[i].innerHTML,
      airTime[i].innerHTML,
    ];
    const hasFilter = [titleValue, sepiValue, discValue, dateValue].find(
      item => item.toUpperCase().indexOf(filter) > -1
    );

    movieCard[i].style.display = hasFilter ? "" : "none";

    //  get visible  element length

    if (isHidden(movieCard[i]) === false) {
      num = num + 1;
      let displayElements = document.querySelector(".display");
      num < 2
        ? (displayElements.innerHTML = `Displaying ${num} Episode`)
        : (displayElements.innerHTML = `Displaying ${num} Episodes`);
    }
  }
}
