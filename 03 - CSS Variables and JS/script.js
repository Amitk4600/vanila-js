const inputs = document.querySelectorAll('.control input')

function update(){
    const suffix = this.dataset.sizing || '';
document.documentElement.style.setProperty(`--${this.name}`,this.value + suffix)
}

inputs.forEach(input => input.addEventListener('change',update));
inputs.forEach(input => input.addEventListener('movemouse',update));