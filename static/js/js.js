// Случайное аниме

			let urls = [
    			"./agent-vremeni.html", "./ataka.html", "./magicheskaya.html", "./vaiolet.html", "./yakusoku.html"
			];
			document.getElementById("random-link").addEventListener("click", function(){
    			let url = urls[Math.floor(Math.random()*urls.length)]
  				alert("Сейчас откроется рандомное аниме");
  				this.href = url;
			});
	

// Двигающийся Anime Love

			const text = document.getElementById('movingText');
        	text.addEventListener('click', () => {
  				const newPositionX = Math.random() * (window.innerWidth - text.offsetWidth);
  				const newPositionY = Math.random() * (window.innerHeight - text.offsetHeight);
 				text.style.position = 'absolute';
  				text.style.left = newPositionX + 'px';
  				text.style.top = newPositionY + 'px';
			});
		
//  Меняет цвет текста в index и login при нажатии

			let textElement = document.getElementById('change');
			textElement.addEventListener('click', function() {
				textElement.style.color = getRandomColor();
			});

			function getRandomColor() {
	  			let letters = '0123456789ABCDEF';
	  			let color = '#';
	  			for (let i = 0; i < 6; i++) {
					color += letters[Math.floor(Math.random() * 16)];
	  			}
	  			return color;
			}
