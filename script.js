// 1. При изменении значения в input с id="from", значение содержащееся в нем должно моментально отображаться в span. То есть при печати в input'е тег span также должен меняться.
window.addEventListener("load", function (e) {
  let FieldsInp = document.querySelector("#from");
  let FieldsInpSP = document.querySelector("span");

  FieldsInp.addEventListener("change", function (e) {
    FieldsInpSP.textContent = FieldsInp.value;
  });
});
// 2. При клике на кнопку с классом messageBtn необходимо элементу с классом message:
// - добавить два класса: animate_animated и animate_fadeInLeftBig
// - поставить данному элементу стиль visibility в значение 'visible'.
window.addEventListener("load", function (e) {
  let FieldsmessageBtn = document.querySelector(".messageBtn");

  FieldsmessageBtn.addEventListener("click", function (e) {
    let Fieldsmessage = document.querySelector(".message");
    Fieldsmessage.classList.add("animate_animated", "baanimate_fadeInLeftBigr");
    Fieldsmessage.style.cssText = "visibility: visible";
  });
});
// 3. Необходимо при отправке формы проверить, заполнены ли все поля в этой форме. Если какое-либо поле не заполнено, форма не должна отправляться, также должны быть подсвечены незаполненные поля (необходимо поставить класс error незаполненным полям). Как только пользователь начинает заполнять какое-либо поле, необходимо, при вводе в данное поле, произвести проверку:
// - Если поле пустое, необходимо данное поле подсветить (поставить класс error данному полю).
// - Если поле было чем-либо заполнено, подсветку (класс error) необходимо убрать.
window.addEventListener("load", function (e) {
  let Fieldsbut = document.querySelector("#btn");

  Fieldsbut.addEventListener("click", function (e) {
    let FieldsInp1 = document.querySelector("#from");
    let Fieldsform = document.querySelectorAll(".form-control");
    if (!FieldsInp1.value) {
      FieldsInp1.classList.add("error");
    } else {
      FieldsInp1.classList.remove("error");
      e.preventDefault();
    }
    if (!Fieldsform.value) {
      Fieldsform.classList.add("error");
    } else {
      Fieldsform.classList.remove("error");
      e.preventDefault();
    }
  });
});
