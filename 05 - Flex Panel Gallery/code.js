// select each "panel" class
const panels = document.querySelectorAll('.panel');


function toggleOpen() {
    console.log('toggleOpen');
    this.classList.toggle('open');
}

// In the CSS ".panel" we use "flex 0.7s cubic-bezier(0.61,-0.19, 0.7,-0.11)," 
// some browsers use flex-grow and some use just flex
// This we need to use the String.prototype.includes() method performs a case-sensitive search to determine whether one string may be found within another string, returning true or false
function toggleActive(e) {
    console.log(e.propertyName);
    if(e.propertyName.includes('flex')) {
        this.classList.toggle('open-active');
    }
}

// when the panel is clicked class open is added to panel class then transitionend is triggered adding the class open-active
/// CSS is applied and when clicked again it converts back to original state with CSS applied as open and open-active are removed
panels.forEach(panel => panel.addEventListener('click', toggleOpen));

panels.forEach(panel => panel.addEventListener('transitionend', toggleActive));