var ModalInit = (function () {
	return function(){
		var MenuModalButton = document.querySelector('.menu-btn');
		MenuModalButton.onclick = function(){
			var ModalObject = document
				.querySelector(this.dataset.target)

			ModalObject.classList.add('is-active')

			document.getElementsByTagName('html')[0]
				.style.overflowY = "hidden";

			ModalObject.onclick = function(){
				this.classList.remove('is-active');
			}

			var closeBtn = ModalObject.querySelector('.close-btn');
			if (!!closeBtn)
				closeBtn.onclick = function(){
					ModalObject.classList.remove('is-active');

					document.getElementsByTagName('html')[0]
						.style.overflowY = "unset";
				}
		}
	}
})();

window.onload = function(){
	var Modals = new ModalInit();
}