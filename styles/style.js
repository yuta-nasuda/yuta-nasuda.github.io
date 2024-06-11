const ac = document.querySelector(".js-ac"); // js-ac要素を取得し変数に格納
  function acToggle() { // クリック時に発火する関数を作成
    const content = this.nextElementSibling; // js-ac要素の「次の要素」を取得し変数に格納 
    content.classList.toggle("is-open");　// js-ac要素の「次の要素」
    const ac = this; // js-ac要素自身を変数に格納
    ac.classList.toggle('is-open'); // js-ac要素にis-openつけ外し
  }

  ac.addEventListener("click", acToggle);// クリックイベントを登録、acToggle関数を発火
