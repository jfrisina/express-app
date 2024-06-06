document.querySelector('button').addEventListener('click', function() {
	fetch('/download')
		.then(response => {
			if (response.ok) {
				return response.blob();
			}
			throw new Error('Network response was not ok.');
		})
		.then(blob => {
			const url = window.URL.createObjectURL(blob);
			const a = document.createElement('a');
			a.href = url;
			a.download = 'img.png';
			document.body.appendChild(a);
			a.click();
			window.URL.revokeObjectURL(url);
			document.body.removeChild(a);
		})
		.catch(error => {
			console.error('Error downloading image:', error);
		});
});