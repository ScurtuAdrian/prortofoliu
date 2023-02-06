function collect_ratings() {
    const ratings = {
      count: 0,
      sum: 0,
      average: 0
    };
    let rating = 0;
  
    const elements = document.querySelectorAll(".rating");
  
    elements.forEach(element => {
      rating = parseInt(element.id.replace("star", ""));
      ratings.count += parseInt(element.value);
      ratings.sum += parseInt(element.value) * rating;
    });
  
    if (ratings.count !== 0) {
      ratings.average = ratings.sum / ratings.count;
    }
  
    return ratings;
  }
  
  document.addEventListener("change", () => {
    const ratings = collect_ratings();
    document.querySelector("#average").value = ratings.average.toFixed(2);
  });
//   Acest cod definește o funcție numită collect_ratings() care colectează valorile rating-urilor din formularul HTML. Funcția creează un obiect ratings cu trei proprietăți - count, sum și average, toate setate la 0. Variabila rating este inițializată cu 0 și se folosește pentru a stoca valoarea rating-ului actual în timpul iterării prin elementele formularului.

// Metoda querySelectorAll este utilizată pentru a selecta toate elementele care au clasa "rating" și sunt stocate într-un array numit elements. O buclă forEach este utilizată pentru a itera prin fiecare element și a calcula valorile count, sum și average ale rating-urilor.

// În final, dacă numărul de rating-uri este diferit de 0, media este calculată ca fiind suma împărțită la numărul de rating-uri. Obiec ratings este întors la sfârșitul funcției.

// Un event listener este adăugat la document care ascultă pentru evenimentul change și apoi apelează funcția collect_ratings. Valoarea media a rating-urilor este setată ca valoarea proprietății value a elementului cu id-ul "average".