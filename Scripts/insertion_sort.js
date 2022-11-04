const insertionSort = function() {
    currDelay = 0;

    for (let i = 0; i < arraySize; i++) {
        let j = i;

        for (; j > 0; j--) {
            // compare visualise
            divVisualise(divs[j], divs[j-1], compareColor);

            if (divHeights[j] < divHeights[j-1]) {
                // misplace visualise
                divVisualise(divs[j], divs[j-1], misplaceColor);

                // swap
                [divHeights[j], divHeights[j-1]] = [divHeights[j-1], divHeights[j]];

                // height update
                heightUpdate(divs[j], divHeights[j], divs[j-1], divHeights[j-1]);
                // color reset
                divVisualise(divs[j], divs[j-1], initialColor);
            } else {
                // color reset
                divVisualise(divs[j], divs[j-1], initialColor);
                break;
            }
        }

        let k = j - 1;
        if (j == 0) k = 0;

        for (; k < i; k++) {
            // sorted divs visualise
            divVisualise(divs[k], divs[k], sortedColor);
        }
    }

    // color update of last div 
    divVisualise(divs[arraySize - 1], divs[arraySize - 1], sortedColor);
    enableButtons();
}