const sizeRange = document.querySelector('#arr_size');
const speedRange = document.querySelector('#algo_speed');
const genArrBtn = document.querySelector('#arr_generate');
const container = document.querySelector('#array_container');
const algoButtons = document.querySelectorAll('.algos button');
const sizeLabel = document.querySelector('#size_label');
const speedLabel = document.querySelector('#speed_label');

let arraySize = sizeRange.value;
let divHeights = [];
let divs = [];
let marginSize;

let speed = 1000;
let delayTime = 10000 / speed;
let currDelay = 0;

const initialColor = 'darkslateblue';
const misplaceColor = 'red';
const compareColor = 'yellow';
const sortedColor = 'green';

window.onload = updateArraySize();
genArrBtn.addEventListener('click', generateArray);
sizeRange.addEventListener('input', updateArraySize);

function generateArray() {
    currDelay = 0;
    enableButtons();
    container.innerHTML = "";
    for(let i = 0; i < arraySize; i++) {
        divHeights[i] = Math.floor(Math.random() * 0.8 * (sizeRange.max - sizeRange.min) ) + 10;
        divs[i] = document.createElement("div");
        container.append(divs[i]);
        marginSize = 0.1;
        divs[i].style=`margin: ${marginSize}%; background-color: ${initialColor}; width: ${(100/arraySize - (2*marginSize))}%; height: ${(divHeights[i])}%;`;
    }
}

function updateArraySize() {
    arraySize = sizeRange.value;
    sizeLabel.textContent = `Array Size : ${arraySize}`;
    generateArray();
}

function enableButtons() {
    setTimeout(() => {
        for (let button of algoButtons) {
            button.disabled = false;
        }
        sizeRange.disabled = false;
        speedRange.disabled = false;
    }, currDelay)
}

function disableButtons() {
    for (let button of algoButtons) {
        button.disabled = true;
    }
    sizeRange.disabled = true;
    speedRange.disabled = true;
}

for (let button of algoButtons) {
    button.addEventListener('click', runAlgo);
}

function runAlgo() {
    disableButtons();

    switch(this.innerText) {
        case 'Bubble Sort':
            addBubbleSortDescription();
            addBubbleSortPerformance();
            bubbleSort();
            break;
        case 'Selection Sort':
            addSelectionSortDescription();
            addSelectionSortPerformance();
            selectionSort();
            break;
        case 'Insertion Sort':
            addInsertionSortDescription();
            addInsertionSortPerformance();
            insertionSort();
            break;
        case 'Merge Sort':
            addMergeSortDescription();
            addMergeSortPerformance();
            mergeSort();
            break;
        case 'Quick Sort':
            addQuickSortDescription();
            addQuickSortPerformance();
            quickSort();
            break;
        case 'Heap Sort':
            addHeapSortDescription();
            addHeapSortPerformance();
            heapSort();
            break;
    }
}

const algoHeading = document.querySelector('#algo_heading');
const algoDesc = document.querySelector('#algo_description');
const wctc = document.querySelector('#wctc');
const bctc = document.querySelector('#bctc');
const atc = document.querySelector('#atc');
const sc = document.querySelector('#sc');

function addBubbleSortDescription() {
    algoHeading.textContent = 'Bubble Sort';
    algoDesc.innerHTML = `<a href="https://en.wikipedia.org/wiki/Bubble_sort">Bubble Sort</a> is a simple sorting algorithm 
                        that repeatedly steps through the list, compares adjacent elements and swaps them if they are in the 
                        wrong order.The pass through the list is repeated until the list is sorted. The algorithm, which is a 
                        comparison sort, is named for the way smaller or larger elements "bubble" to the top of the list. 
                        Although the algorithm is simple, it is too slow and impractical for most problems.`
}

function addBubbleSortPerformance() {
    wctc.innerHTML = `Worst-Case Time Complexity : O(n<sup>2</sup>)`;
    bctc.innerHTML = `Best-Case Time Complexity : O(n)`;
    atc.innerHTML = `Average Time Complexity : O(n<sup>2</sup>)`;
    sc.innerHTML = `Worst-Case Space Complexity : O(1)`;
}

function addSelectionSortDescription() {
    algoHeading.textContent = 'Selection Sort';
    algoDesc.innerHTML = `<a href="https://en.wikipedia.org/wiki/Selection_sort">Selection Sort</a> is an in-place 
                        comparison sorting algorithm that divides the input list into two parts: the sublist of items 
                        already sorted, which is built up from left to right at the front of the list, and the 
                        sublist of items remaining to be sorted that occupy the rest of the list. Initially, the sorted 
                        sublist is empty and the unsorted sublist is the entire input list. The algorithm proceeds by 
                        finding the smallest element in the unsorted sublist, swapping it with the leftmost 
                        unsorted element (putting it in sorted order), and moving the sublist boundaries one element to 
                        the right.`
}

function addSelectionSortPerformance() {
    wctc.innerHTML = `Worst-Case Time Complexity : O(n<sup>2</sup>)`;
    bctc.innerHTML = `Best-Case Time Complexity : O(n<sup>2</sup>)`;
    atc.innerHTML = `Average Time Complexity : O(n<sup>2</sup>)`;
    sc.innerHTML = `Worst-Case Space Complexity : O(1)`;
}

function addInsertionSortDescription() {
    algoHeading.textContent = 'Insertion Sort';
    algoDesc.innerHTML = `<a href="https://en.wikipedia.org/wiki/Insertion_sort">Insertion Sort</a> is a simple 
                        sorting algorithm that iterates through an array and at each iteration it removes one 
                        element from the array, finds the location it belongs to in the sorted list and inserts 
                        it there, repeating until no elements remain in the unsorted list. It is an in-place, 
                        stable sorting algorithm that is inefficient on large input arrays but works well for data 
                        sets that are almost sorted. It is more efficient in practice compared to other quadratic 
                        sorting algorithms like bubble sort and selection sort.`
}

function addInsertionSortPerformance() {
    wctc.innerHTML = `Worst-Case Time Complexity : O(n<sup>2</sup>)`;
    bctc.innerHTML = `Best-Case Time Complexity : O(n)`;
    atc.innerHTML = `Average Time Complexity : O(n<sup>2</sup>)`;
    sc.innerHTML = `Worst-Case Space Complexity : O(1)`;
}

function addMergeSortDescription() {
    algoHeading.textContent = 'Merge Sort';
    algoDesc.innerHTML = `<a href="https://en.wikipedia.org/wiki/Merge_sort">Merge Sort</a> is an efficient, 
                        stable sorting algorith that makes use of the divide and conquer strategy. Conceptually 
                        the algorithm works as follows: <ul> <li>Divide the unsorted list into n sublists, each 
                        containing one element(a list of one element is considered sorted)</li> 
                        <li>Repeatedly merge sublists to produce new sorted sublists until there is only one 
                        sublist remaining. This will be the sorted list.</li></ul>`
}

function addMergeSortPerformance() {
    wctc.innerHTML = `Worst-Case Time Complexity : O(nlogn)`;
    bctc.innerHTML = `Best-Case Time Complexity : O(nlogn)`;
    atc.innerHTML = `Average Time Complexity : O(nlogn)`;
    sc.innerHTML = `Worst-Case Space Complexity : O(n)`;
}

function addQuickSortDescription() {
    algoHeading.textContent = 'Quick Sort';
    algoDesc.innerHTML = `<a href="https://en.wikipedia.org/wiki/Quicksort">Quick Sort</a> 
                            is an efficient, in-place sorting algorithm that in practice is faster than 
                            MergeSort and HeapSort. However, it is not a stable sorting algorithm, meaning 
                            that the relative positioning of equal sort items is not preserved. Quicksort 
                            is a divide and conquer algorithm. Quicksort first divides a large array into 
                            two smaller sub-arrays: the low elements and the high elements. Quicksort can 
                            then recursively sort the sub-arrays.`
}

function addQuickSortPerformance() {
    wctc.innerHTML = `Worst-Case Time Complexity : O(n<sup>2</sup>)`;
    bctc.innerHTML = `Best-Case Time Complexity : O(nlogn)`;
    atc.innerHTML = `Average Time Complexity : O(nlogn)`;
    sc.innerHTML = `Worst-Case Space Complexity : O(logn)`;
}

function addHeapSortDescription() {
    algoHeading.textContent = 'Heap Sort';
    algoDesc.innerHTML = `<a href="https://en.wikipedia.org/wiki/Heapsort">Heap Sort</a> 
                        can be thought of as an improved selection sort that uses the heap data structure to find the 
                        maximum or minimum element.
                        In the first step, a heap is built out of the data. The heap is often placed in an array with the 
                        layout of a complete binary tree. In the second step, a sorted array is created by repeatedly 
                        removing the largest element from the heap (the root of the heap), and inserting it into the array. 
                        The heap is updated after each removal to maintain the heap property. Once all objects have been 
                        removed from the heap, the result is a sorted array.`

}

function addHeapSortPerformance() {
    wctc.innerHTML = `Worst-Case Time Complexity : O(nlogn)`;
    bctc.innerHTML = `Best-Case Time Complexity : O(nlogn)`;
    atc.innerHTML = `Average Time Complexity : O(nlogn)`;
    sc.innerHTML = `Worst-Case Space Complexity : O(1)`;
}