const Lists = document.querySelectorAll('.faq-list-item');
const answers = document.querySelectorAll('.faq-ans')
const tabContentItems = document.querySelectorAll('.tab-content-item');

// Select tab content item
function displayAns(e) {
    console.log("bab");
	
	// Remove all open from others
    if (this.classList.contains('opened')) {
        console.log('cont');
        this.classList.remove('opened');
    } else{
        this.classList.add('opened')
    }
	// removeOpen();

    
	// Grab content item from DOM
	// const tabContentItem = document.querySelector(`#${this.id}-content`);
	// // Add show class
	// tabContentItem.classList.add('show');
}

// Remove bottom borders from all tab items
function removeBorder() {
	tabItems.forEach(item => {
		item.classList.remove('tab-border');
	});
}

// Remove show class from all content items
function removeOpen() {
	Lists.forEach(list => {
		list.classList.remove('opened');
	});
}

// Listen for click
Lists.forEach(list => {
	list.addEventListener('click', displayAns);
});
