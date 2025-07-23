 const translations = {
      uz: {
        title: "Xush kelibsiz!",
        description: "Eng so‘nggi kinolarni tomosha qiling."
      },
      ru: {
        title: "Добро пожаловать!",
        description: "Смотрите последние фильмы."
      },
      en: {
        title: "Welcome!",
        description: "Watch the latest movies."
      }
    };

    document.getElementById("lang").addEventListener("change", function () {
      const lang = this.value;
      document.getElementById("title").textContent = translations[lang].title;
      document.getElementById("description").textContent = translations[lang].description;
    });