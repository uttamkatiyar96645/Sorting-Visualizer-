const merge = (low, mid, high) => {
    let i = low;
    let j = mid + 1;
    let arr = [];
    let k = 0;

    while (i <= mid || j <= high) {
        if (i > mid) {
            arr[k++] = divHeights[j++];
            // color update of the curr div
            divVisualise(divs[j-1], divs[j-1], misplaceColor);
        } else if (j > high) {
            arr[k++] = divHeights[i++];
            // color update of the curr div
            divVisualise(divs[i-1], divs[i-1], misplaceColor);
        } else if (divHeights[i] < divHeights[j]) {
            arr[k++] = divHeights[i++];
            // color update of the curr div
            divVisualise(divs[i-1], divs[i-1], misplaceColor);
        } else {
            arr[k++] = divHeights[j++];
            // color update of the curr div
            divVisualise(divs[j-1], divs[j-1], misplaceColor);
        }
    }

    for (let idx = 0; idx < k; idx++) {
        divHeights[low++] = arr[idx];
        // height update of the divs in range
        heightUpdate(divs[low - 1], divHeights[low - 1], divs[low - 1], divHeights[low - 1]);
        // color update of the divs in range
        divVisualise(divs[low - 1], divs[low - 1], sortedColor);
    }
}

const mergePartition = (low, high) => {
    if (low < high) {
        let mid = low + Math.floor((high - low) / 2);
        
        // mid div visualise
        divVisualise(divs[mid], divs[mid], compareColor);
        
        mergePartition(low, mid);
        mergePartition(mid + 1, high);

        merge(low, mid, high);
    }
}

const mergeSort = function() {
    currDelay = 0;

    mergePartition(0, arraySize - 1);

    enableButtons();
}