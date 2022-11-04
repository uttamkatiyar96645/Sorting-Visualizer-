const swap = (idx1, idx2) => {
    // misplace visualise
    divVisualise(divs[idx1], divs[idx2], misplaceColor);

    // swap
    [divHeights[idx1], divHeights[idx2]] = [divHeights[idx2], divHeights[idx1]];

    // height update after swap
    heightUpdate(divs[idx1], divHeights[idx1], divs[idx2], divHeights[idx2]);
    // color reset
    divVisualise(divs[idx1], divs[idx2], initialColor);
}

const maxHeapify = (size, idx) => {
    let largest = idx;
    let lchild = 2*idx + 1;
    let rchild = 2*idx + 2;

    if (lchild < size && divHeights[lchild] > divHeights[largest]) {
        // update largest
        largest = lchild;

        // update color of largest
        divVisualise(divs[largest], divs[largest], misplaceColor);
    }

    if (rchild < size && divHeights[rchild] > divHeights[largest]) {
        if (largest != idx) {
            // reset the color of prev largest
            divVisualise(divs[largest], divs[largest], initialColor);
        }

        // update largest
        largest = rchild;
        
        // update color of largest
        divVisualise(divs[largest], divs[largest], misplaceColor);
    }

    if (largest != idx) {
        // swap the divs of idx and largest
        swap(idx, largest);

        // heapify the bottom part of the tree
        maxHeapify(size, largest);
    }

}

const heapSortUtil = () => {
    // first heapifying the whole array
    for (let i = Math.floor(arraySize / 2) - 1; i >= 0; i--) {
        maxHeapify(arraySize, i);
    }

    // extracting max element one by one & heapifying the rest of the array
    for (let i = arraySize - 1; i > 0; i--) {
        swap(0, i);
        divVisualise(divs[i], divs[i], sortedColor);
        divVisualise(divs[i], divs[i], compareColor);
        
        maxHeapify(i, 0);

        divVisualise(divs[i], divs[i], initialColor);
        divVisualise(divs[i], divs[i], sortedColor);
    }
    // color update of the 0-th div
    divVisualise(divs[0], divs[0], sortedColor);
}

const heapSort = function() {
    currDelay = 0;

    heapSortUtil();

    enableButtons();
}