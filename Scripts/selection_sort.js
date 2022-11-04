const selectionSort = function() {
    currDelay = 0;

    for (let i = 0; i < arraySize - 1; i++) {
        // visualise the index that is to be sorted
        divVisualise(divs[i], divs[i], misplaceColor);
        let minIndex = i;

        for (let j = i + 1; j < arraySize; j++) {
            // compare visualise
            divVisualise(divs[j], divs[j], compareColor);

            if (divHeights[j] < divHeights[minIndex]) {
                // color update of prev minIndex
                divVisualise(divs[minIndex], divs[minIndex], initialColor);

                // update minIndex
                minIndex = j;

                // color update of new minIndex
                divVisualise(divs[minIndex], divs[minIndex], misplaceColor);
            } else {
                // color update of j-th index
                divVisualise(divs[j], divs[j], initialColor);
            }
        }

        if (i != minIndex) {
            // swap
            [divHeights[i], divHeights[minIndex]] = [divHeights[minIndex], divHeights[i]];

            // height update
            heightUpdate(divs[i], divHeights[i], divs[minIndex], divHeights[minIndex]);

            // color update of not-min-index
            divVisualise(divs[minIndex], divs[minIndex], initialColor);
        }

        // color update of i-th index
        divVisualise(divs[i], divs[i], sortedColor);
    }

    // color update of last element
    divVisualise(divs[arraySize - 1], divs[arraySize - 1], sortedColor);
    enableButtons();
}