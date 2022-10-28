let button = document.createElement('button');
button.innerHTML = 'Click Me';
document.body.append(button);
button.style.display = 'block';
button.style.margin = '0 auto';
button.style.fontWeight = '600';
button.style.borderRadius = '25px';
button.style.marginTop = '20px';
button.style.boxShadow = '5px 5px 5px grey'



//store list items into array
//create click event to randomize 
function pickTask() {
    let selected = document.querySelector('.selected');
    if(selected) {
        selected.classList.remove('selected')
    }
    let items = [...document.getElementsByClassName('back')];
    let randomItem = items[Math.floor(Math.random() * items.length)];
    console.log(randomItem);
    randomItem.classList.add('selected')
    return randomItem;
// highlight results
    // function results(randomItem) {
    //     li.style.backgroundColor = 'yellow';
    // }; results(randomItem);
};
// function showOptions(){
//     let hover = document.querySelectorAll('.flip-card-inner:hover');
//     if(hover) {
//         hover.classList.remove('flip-card-inner:hover')
//     }
//     this.classList.toggle('flip-card-inner:hover')
// };
button.addEventListener('click', pickTask);
