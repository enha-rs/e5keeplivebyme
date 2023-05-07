function countingSort(arr, max) {
  const counts = new Array(max + 1).fill(0);
  const result = new Array(arr.length);

  for (let i = 0; i < arr.length; i++) {
    counts[arr[i]]++;
  }

  for (let i = 1; i < counts.length; i++) {
    counts[i] += counts[i - 1];
  }

  for (let i = arr.length - 1; i >= 0; i--) {
    result[counts[arr[i]] - 1] = arr[i];
    counts[arr[i]]--;
  }

  return result;
}
// 这个实现中，countingSort 接受两个参数：要排序的数组 arr 和数组中最大的数 max。它使用了两个辅助数组，counts 和 result，以及三个循环来完成排序过程。

// 第一个循环遍历数组 arr，对每个元素的出现次数进行计数。这个过程使用了 counts 数组来存储每个数字出现的次数。

// 第二个循环遍历 counts 数组，对每个数字出现的次数进行累加。这个过程使得 counts 数组中的每个位置都变成了原数组中小于或等于该数字的数的总数。

// 第三个循环倒序遍历原数组 arr，将每个元素放到它在排序结果中的正确位置。这个过程使用了 counts 数组来确定每个元素在排序结果中的位置。

// 最后返回排序后的结果数组 result。