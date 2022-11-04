const bubbleSort = function() {
    currDelay = 0;

    for (let i = 0; i < arraySize - 1; i++) {
        let j = 0;

        for (; j < arraySize - 1 - i; j++) {
            // compare visualise
            divVisualise(divs[j], divs[j+1], compareColor);
            
            if (divHeights[j] > divHeights[j+1]) {
                // misplace visualise
                divVisualise(divs[j], divs[j+1], misplaceColor);

                // swapping two divHeights
                [divHeights[j], divHeights[j+1]] = [divHeights[j+1], divHeights[j]];

                // height update
                heightUpdate(divs[j], divHeights[j], divs[j+1], divHeights[j+1]);
            }
            
            // reset color
            divVisualise(divs[j], divs[j+1], initialColor);
        }

        // color update
        divVisualise(divs[j], divs[j], sortedColor);
    }
    
    // color update of 0-th index
    divVisualise(divs[0], divs[0], sortedColor);
    enableButtons();
}