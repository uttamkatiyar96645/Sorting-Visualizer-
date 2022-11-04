const quickPartition = (low, high) => {
    let i = low + 1;
    let pivotElement = divHeights[low];     // making 1st element as pivot
    
    // color update of pivot
    divVisualise(divs[low], divs[low], compareColor);

    for (let j = low + 1; j <= high; j++) {
        // compare visualise
        divVisualise(divs[j], divs[j], compareColor);

        if (divHeights[j] < pivotElement) {
            if (i != j) {
                // misplace visualise
                divVisualise(divs[i], divs[j], misplaceColor);

                // swap
                [divHeights[i], divHeights[j]] = [divHeights[j], divHeights[i]];

                // height update of two misplaced divs
                heightUpdate(divs[i], divHeights[i], divs[j], divHeights[j]);
            }
            
            // color reset
            divVisualise(divs[i], divs[j], initialColor);

            i++;
        } else {
            // color reset
            divVisualise(divs[j], divs[j], initialColor);
        }
    }

    // misplace visualise for pivot and (i-1)-th div
    divVisualise(divs[i-1], divs[low], misplaceColor);
    
    // swap
    [divHeights[i-1], divHeights[low]] = [divHeights[low], divHeights[i-1]];

    // height update for pivot and (i-1)-th div
    heightUpdate(divs[i-1], divHeights[i-1], divs[low], divHeights[low]);

    // recursively low to i will be sorted first
    for (let k = low; k <= i && k <= high; k++) {
        divVisualise(divs[k], divs[k], sortedColor);
    }

    return i-1;
}

const quickSortUtil = (low, high) => {
    if (low < high) {
        // stores the position of pivot
        let pivot = quickPartition(low, high);

        quickSortUtil(low, pivot - 1);
        quickSortUtil(pivot + 1, high);
    }
}

const quickSort = function() {
    currDelay = 0;

    quickSortUtil(0, arraySize - 1);

    enableButtons();
}