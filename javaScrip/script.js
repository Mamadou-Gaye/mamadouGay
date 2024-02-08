document.addEventListener("DOMContentLoaded", function () {
  const articles = document.querySelectorAll(".article1");

  articles.forEach(function (article) {
    const quantite = article.querySelector(".quantite");
    const prix = parseFloat(article.querySelector(".prix").textContent);
    const total = document.getElementById("total");

    article.querySelector(".plus").addEventListener("click", function () {
      quantite.textContent = parseInt(quantite.textContent) + 1;
      total.textContent = parseFloat(total.textContent) + prix;
    });

    article.querySelector(".minus").addEventListener("click", function () {
      if (parseInt(quantite.textContent) > 1) {
        quantite.textContent = parseInt(quantite.textContent) - 1;
        total.textContent = parseFloat(total.textContent) - prix;
      }
    });

    article.querySelector(".like").addEventListener("click", function () {
      this.classList.toggle("liked");
    });

    article.querySelector(".supprimer").addEventListener("click", function () {
      const quantiteSupprimee = parseInt(quantite.textContent);
      const prixSupprime = quantiteSupprimee * prix;
      article.remove();
      total.textContent = parseFloat(total.textContent) - prixSupprime;
    });
  });
});

document.addEventListener("DOMContentLoaded", function () {
    const articles = document.querySelectorAll(".article2");
  
    articles.forEach(function (article) {
      const quantite = article.querySelector(".quantite");
      const prix = parseFloat(article.querySelector(".prix").textContent);
      const total = document.getElementById("total");
  
      article.querySelector(".plus").addEventListener("click", function () {
        quantite.textContent = parseInt(quantite.textContent) + 1;
        total.textContent = parseFloat(total.textContent) + prix;
      });
  
      article.querySelector(".minus").addEventListener("click", function () {
        if (parseInt(quantite.textContent) > 1) {
          quantite.textContent = parseInt(quantite.textContent) - 1;
          total.textContent = parseFloat(total.textContent) - prix;
        }
      });
  
      article.querySelector(".like").addEventListener("click", function () {
        this.classList.toggle("liked");
      });
  
      article.querySelector(".supprimer").addEventListener("click", function () {
        const quantiteSupprimee = parseInt(quantite.textContent);
        const prixSupprime = quantiteSupprimee * prix;
        article.remove();
        total.textContent = parseFloat(total.textContent) - prixSupprime;
      });
    });
  });


  document.addEventListener("DOMContentLoaded", function () {
    const articles = document.querySelectorAll(".article3");
  
    articles.forEach(function (article) {
      const quantite = article.querySelector(".quantite");
      const prix = parseFloat(article.querySelector(".prix").textContent);
      const total = document.getElementById("total");
  
      article.querySelector(".plus").addEventListener("click", function () {
        quantite.textContent = parseInt(quantite.textContent) + 1;
        total.textContent = parseFloat(total.textContent) + prix;
      });
  
      article.querySelector(".minus").addEventListener("click", function () {
        if (parseInt(quantite.textContent) > 1) {
          quantite.textContent = parseInt(quantite.textContent) - 1;
          total.textContent = parseFloat(total.textContent) - prix;
        }
      });
  
      article.querySelector(".like").addEventListener("click", function () {
        this.classList.toggle("liked");
      });
  
      article.querySelector(".supprimer").addEventListener("click", function () {
        const quantiteSupprimee = parseInt(quantite.textContent);
        const prixSupprime = quantiteSupprimee * prix;
        article.remove();
        total.textContent = parseFloat(total.textContent) - prixSupprime;
      });
    });
  });
