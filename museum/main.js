const progress = document.querySelector('.progress');
const volume = document.querySelector('.volume-progress')

progress.addEventListener('input', function() {
	const value = this.value;
	this.style.background = `linear-gradient(to right, var(--dark-red) 0%, var(--dark-red) ${value}%, #c4c4c4 ${value}%, #c4c4c4 100%)`
})
volume.addEventListener('input', function() {
	const value = this.value;
	this.style.background = `linear-gradient(to right, var(--dark-red) 0%, var(--dark-red) ${value}%, #c4c4c4 ${value}%, #c4c4c4 100%)`
})