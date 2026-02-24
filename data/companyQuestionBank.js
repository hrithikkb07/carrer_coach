export const COMPANY_QUESTION_BANK = {
  adobe: {

    Arrays: [
      {
        title: "Concatenation of Array",
        difficulty: "Easy",
        link: "https://leetcode.com/problems/concatenation-of-array/",
        notes: "Create array of size 2n and copy using modulo index"
      },
      {
        title: "Build Array from Permutation",
        difficulty: "Easy",
        link: "https://leetcode.com/problems/build-array-from-permutation/",
        notes: "nums[i] = old nums[nums[i]]; can encode in-place"
      },
      {
        title: "Maximum Subarray",
        difficulty: "Medium",
        link: "https://leetcode.com/problems/maximum-subarray/",
        notes: "Kadane’s algorithm with running sum reset"
      },
      {
        title: "Product of Array Except Self",
        difficulty: "Medium",
        link: "https://leetcode.com/problems/product-of-array-except-self/",
        notes: "Prefix and suffix products without division"
      },
      {
        title: "Merge Intervals",
        difficulty: "Medium",
        link: "https://leetcode.com/problems/merge-intervals/",
        notes: "Sort intervals and merge overlapping ranges"
      },
      {
        title: "Container With Most Water",
        difficulty: "Medium",
        link: "https://leetcode.com/problems/container-with-most-water/",
        notes: "Two pointers shrinking from both ends"
      },
      {
        title: "Best Time to Buy and Sell Stock",
        difficulty: "Easy",
        link: "https://leetcode.com/problems/best-time-to-buy-and-sell-stock/",
        notes: "Track minimum price and max profit"
      },
      {
        title: "First Missing Positive",
        difficulty: "Hard",
        link: "https://leetcode.com/problems/first-missing-positive/",
        notes: "Place elements at correct index using swaps"
      },
      {
        title: "Find Minimum in Rotated Sorted Array",
        difficulty: "Medium",
        link: "https://leetcode.com/problems/find-minimum-in-rotated-sorted-array/",
        notes: "Binary search on rotated array"
      },
      {
        title: "Search in Rotated Sorted Array",
        difficulty: "Medium",
        link: "https://leetcode.com/problems/search-in-rotated-sorted-array/",
        notes: "Binary search with sorted half detection"
      }
    ],

    /* ===================== STRINGS ===================== */
    Strings: [
      {
        title: "Sorting the Sentence",
        difficulty: "Easy",
        link: "https://leetcode.com/problems/sorting-the-sentence/",
        notes: "Split words and reorder by digit index"
      },
      {
        title: "Replace All Digits with Characters",
        difficulty: "Easy",
        link: "https://leetcode.com/problems/replace-all-digits-with-characters/",
        notes: "Shift previous character using digit offset"
      },
      {
        title: "Roman to Integer",
        difficulty: "Easy",
        link: "https://leetcode.com/problems/roman-to-integer/",
        notes: "Subtract when smaller value precedes larger"
      },
      {
        title: "Longest Substring Without Repeating Characters",
        difficulty: "Medium",
        link: "https://leetcode.com/problems/longest-substring-without-repeating-characters/",
        notes: "Sliding window with last seen index"
      },
      {
        title: "Minimum Window Substring",
        difficulty: "Hard",
        link: "https://leetcode.com/problems/minimum-window-substring/",
        notes: "Sliding window with frequency requirements"
      },
      {
        title: "Valid Palindrome",
        difficulty: "Easy",
        link: "https://leetcode.com/problems/valid-palindrome/",
        notes: "Two pointers skipping non-alphanumeric"
      },
        {
        title: "Sorting the Sentence",
        difficulty: "Easy",
        link: "https://leetcode.com/problems/sorting-the-sentence/",
        notes: "Split words and reorder by trailing digit"
      },
      {
        title: "Replace All Digits with Characters",
        difficulty: "Easy",
        link: "https://leetcode.com/problems/replace-all-digits-with-characters/",
        notes: "Shift previous character using digit value"
      },
      {
        title: "Make The String Great",
        difficulty: "Easy",
        link: "https://leetcode.com/problems/make-the-string-great/",
        notes: "Stack-based adjacent case comparison"
      },
      {
        title: "Split a String in Balanced Strings",
        difficulty: "Easy",
        link: "https://leetcode.com/problems/split-a-string-in-balanced-strings/",
        notes: "Greedy balance counter"
      },
      {
        title: "Maximum Number of Balloons",
        difficulty: "Easy",
        link: "https://leetcode.com/problems/maximum-number-of-balloons/",
        notes: "Character frequency comparison"
      },
      {
        title: "Jewels and Stones",
        difficulty: "Easy",
        link: "https://leetcode.com/problems/jewels-and-stones/",
        notes: "HashSet lookup"
      },
      {
        title: "Valid Palindrome",
        difficulty: "Easy",
        link: "https://leetcode.com/problems/valid-palindrome/",
        notes: "Two pointers skipping non-alphanumeric"
      },
      {
        title: "Word Pattern",
        difficulty: "Easy",
        link: "https://leetcode.com/problems/word-pattern/",
        notes: "Bidirectional hashmap mapping"
      },
      {
        title: "Longest Common Prefix",
        difficulty: "Easy",
        link: "https://leetcode.com/problems/longest-common-prefix/",
        notes: "Horizontal scanning"
      },
      {
        title: "Roman to Integer",
        difficulty: "Easy",
        link: "https://leetcode.com/problems/roman-to-integer/",
        notes: "Subtract smaller value before larger"
      }
    ],

    /* ===================== DYNAMIC PROGRAMMING ===================== */
    DynamicProgramming: [
      {
        title: "Climbing Stairs",
        difficulty: "Easy",
        link: "https://leetcode.com/problems/climbing-stairs/",
        notes: "Fibonacci-style DP"
      },
      {
        title: "House Robber",
        difficulty: "Medium",
        link: "https://leetcode.com/problems/house-robber/",
        notes: "DP with include/exclude state"
      },
      {
        title: "House Robber III",
        difficulty: "Medium",
        link: "https://leetcode.com/problems/house-robber-iii/",
        notes: "Tree DP with take/skip states"
      },
      {
        title: "Word Break",
        difficulty: "Medium",
        link: "https://leetcode.com/problems/word-break/",
        notes: "DP on prefixes using dictionary lookup"
      },
      {
        title: "Word Break II",
        difficulty: "Hard",
        link: "https://leetcode.com/problems/word-break-ii/",
        notes: "DP + backtracking for sentence reconstruction"
      },
      {
        title: "Trapping Rain Water",
        difficulty: "Hard",
        link: "https://leetcode.com/problems/trapping-rain-water/",
        notes: "Two pointers or monotonic stack"
      }
    ],

    /* ===================== TREES ===================== */
    Trees: [
      {
        title: "Binary Tree Inorder Traversal",
        difficulty: "Easy",
        link: "https://leetcode.com/problems/binary-tree-inorder-traversal/",
        notes: "DFS recursion or stack simulation"
      },
      {
        title: "Binary Tree Preorder Traversal",
        difficulty: "Easy",
        link: "https://leetcode.com/problems/binary-tree-preorder-traversal/",
        notes: "Root-left-right DFS traversal"
      },
      {
        title: "Validate Binary Search Tree",
        difficulty: "Medium",
        link: "https://leetcode.com/problems/validate-binary-search-tree/",
        notes: "Inorder traversal with value bounds"
      },
      {
        title: "Binary Tree Maximum Path Sum",
        difficulty: "Hard",
        link: "https://leetcode.com/problems/binary-tree-maximum-path-sum/",
        notes: "Postorder traversal with global max"
      },
      {
        title: "Balanced Binary Tree",
        difficulty: "Easy",
        link: "https://leetcode.com/problems/balanced-binary-tree/",
        notes: "Check height difference recursively"
      }
    ],

    /* ===================== GRAPHS ===================== */
    Graphs: [
      {
        title: "Number of Islands",
        difficulty: "Medium",
        link: "https://leetcode.com/problems/number-of-islands/",
        notes: "DFS/BFS on grid marking visited cells"
      },
      {
        title: "Word Ladder",
        difficulty: "Hard",
        link: "https://leetcode.com/problems/word-ladder/",
        notes: "BFS with intermediate word patterns"
      },
      {
        title: "Evaluate Division",
        difficulty: "Medium",
        link: "https://leetcode.com/problems/evaluate-division/",
        notes: "Graph with weighted edges and DFS/BFS"
      }
    ],

    /* ===================== HASHMAP ===================== */
    HashMap: [
      {
        title: "Two Sum",
        difficulty: "Easy",
        link: "https://leetcode.com/problems/two-sum/",
        notes: "Store complement in hash map"
      },
      {
        title: "Group Anagrams",
        difficulty: "Medium",
        link: "https://leetcode.com/problems/group-anagrams/",
        notes: "Hash by sorted string or frequency vector"
      },
      {
        title: "Top K Frequent Elements",
        difficulty: "Medium",
        link: "https://leetcode.com/problems/top-k-frequent-elements/",
        notes: "Bucket sort or min heap"
      },
      {
        title: "Subarray Sum Equals K",
        difficulty: "Medium",
        link: "https://leetcode.com/problems/subarray-sum-equals-k/",
        notes: "Prefix sum with frequency map"
      }
    ],

    /* ===================== STACKS ===================== */
    Stacks: [
      {
        title: "Valid Parentheses",
        difficulty: "Easy",
        link: "https://leetcode.com/problems/valid-parentheses/",
        notes: "Stack matching opening and closing brackets"
      },
      {
        title: "Min Stack",
        difficulty: "Medium",
        link: "https://leetcode.com/problems/min-stack/",
        notes: "Maintain auxiliary stack for minimums"
      },
      {
        title: "Largest Rectangle in Histogram",
        difficulty: "Hard",
        link: "https://leetcode.com/problems/largest-rectangle-in-histogram/",
        notes: "Monotonic increasing stack"
      }
    ],

    /* ===================== QUEUE ===================== */
    Queue: [
      {
        title: "Sliding Window Maximum",
        difficulty: "Hard",
        link: "https://leetcode.com/problems/sliding-window-maximum/",
        notes: "Monotonic deque maintaining max"
      },
      {
        title: "Shortest Path in Binary Matrix",
        difficulty: "Medium",
        link: "https://leetcode.com/problems/shortest-path-in-binary-matrix/",
        notes: "BFS in 8 directions"
      }
    ],

    /* ===================== RECURSION ===================== */
    Recursion: [
      {
        title: "Subsets",
        difficulty: "Medium",
        link: "https://leetcode.com/problems/subsets/",
        notes: "Backtracking generating all combinations"
      },
      {
        title: "Subsets II",
        difficulty: "Medium",
        link: "https://leetcode.com/problems/subsets-ii/",
        notes: "Backtracking with duplicate skip"
      },
      {
        title: "Permutations",
        difficulty: "Medium",
        link: "https://leetcode.com/problems/permutations/",
        notes: "Swap-based backtracking"
      },
      {
        title: "N-Queens",
        difficulty: "Hard",
        link: "https://leetcode.com/problems/n-queens/",
        notes: "Backtracking with column and diagonal checks"
      }
    ],

    SlidingWindow: [
      {
        title: "Longest Substring Without Repeating Characters",
        difficulty: "Medium",
        link: "https://leetcode.com/problems/longest-substring-without-repeating-characters/",
        notes: "Sliding window with last index map"
      },
      {
        title: "Longest Repeating Character Replacement",
        difficulty: "Medium",
        link: "https://leetcode.com/problems/longest-repeating-character-replacement/",
        notes: "Window with max frequency tracking"
      },
      {
        title: "Number of Substrings Containing All Three Characters",
        difficulty: "Medium",
        link: "https://leetcode.com/problems/number-of-substrings-containing-all-three-characters/",
        notes: "Two pointers and count tracking"
      },
      {
        title: "Minimum Window Substring",
        difficulty: "Hard",
        link: "https://leetcode.com/problems/minimum-window-substring/",
        notes: "Sliding window with required frequency map"
      }
    ],
      Matrix: [
      {
        title: "Determine Whether Matrix Can Be Obtained By Rotation",
        difficulty: "Easy",
        link: "https://leetcode.com/problems/determine-whether-matrix-can-be-obtained-by-rotation/",
        notes: "Rotate matrix 90° and compare"
      },
      {
        title: "01 Matrix",
        difficulty: "Medium",
        link: "https://leetcode.com/problems/01-matrix/",
        notes: "Multi-source BFS from zero cells"
      },
      {
        title: "Spiral Matrix",
        difficulty: "Medium",
        link: "https://leetcode.com/problems/spiral-matrix/",
        notes: "Boundary simulation"
      },
      {
        title: "Search a 2D Matrix",
        difficulty: "Medium",
        link: "https://leetcode.com/problems/search-a-2d-matrix/",
        notes: "Binary search on flattened matrix"
      },
      {
        title: "Rotate Image",
        difficulty: "Medium",
        link: "https://leetcode.com/problems/rotate-image/",
        notes: "Transpose then reverse rows"
      }
    ]
  },


  amazon: {


    Arrays: [
      {
        title: "Sum of All Odd Length Subarrays",
        difficulty: "Easy",
        link: "https://leetcode.com/problems/sum-of-all-odd-length-subarrays/",
        notes: "Contribution technique over subarray lengths"
      },
      {
        title: "Shortest Subarray to be Removed to Make Array Sorted",
        difficulty: "Medium",
        link: "https://leetcode.com/problems/shortest-subarray-to-be-removed-to-make-array-sorted/",
        notes: "Two pointers on prefix and suffix"
      },
      {
        title: "Shuffle the Array",
        difficulty: "Easy",
        link: "https://leetcode.com/problems/shuffle-the-array/",
        notes: "Index mapping with extra array"
      },
      {
        title: "Kids With the Greatest Number of Candies",
        difficulty: "Easy",
        link: "https://leetcode.com/problems/kids-with-the-greatest-number-of-candies/",
        notes: "Compare with current maximum"
      },
      {
        title: "Create Target Array in the Given Order",
        difficulty: "Easy",
        link: "https://leetcode.com/problems/create-target-array-in-the-given-order/",
        notes: "Simulate insertion by index"
      },
      {
        title: "How Many Numbers Are Smaller Than the Current Number",
        difficulty: "Easy",
        link: "https://leetcode.com/problems/how-many-numbers-are-smaller-than-the-current-number/",
        notes: "Counting or sorting based rank"
      },
      {
        title: "Reduce Array Size to The Half",
        difficulty: "Medium",
        link: "https://leetcode.com/problems/reduce-array-size-to-the-half/",
        notes: "Frequency count and greedy removal"
      },
      {
        title: "Decompress Run-Length Encoded List",
        difficulty: "Easy",
        link: "https://leetcode.com/problems/decompress-run-length-encoded-list/",
        notes: "Expand frequency-value pairs"
      },
      {
        title: "Find Numbers with Even Number of Digits",
        difficulty: "Easy",
        link: "https://leetcode.com/problems/find-numbers-with-even-number-of-digits/",
        notes: "Digit count per number"
      },
      {
        title: "Squares of a Sorted Array",
        difficulty: "Easy",
        link: "https://leetcode.com/problems/squares-of-a-sorted-array/",
        notes: "Two pointers from ends"
      },
      {
        title: "Product of Array Except Self",
        difficulty: "Medium",
        link: "https://leetcode.com/problems/product-of-array-except-self/",
        notes: "Prefix and suffix products"
      },
      {
        title: "Move Zeroes",
        difficulty: "Easy",
        link: "https://leetcode.com/problems/move-zeroes/",
        notes: "Two-pointer compaction"
      },
      {
        title: "Rotate Array",
        difficulty: "Medium",
        link: "https://leetcode.com/problems/rotate-array/",
        notes: "Reverse segments"
      },
      {
        title: "Find All Numbers Disappeared in an Array",
        difficulty: "Easy",
        link: "https://leetcode.com/problems/find-all-numbers-disappeared-in-an-array/",
        notes: "Index marking technique"
      },
      {
        title: "Find All Duplicates in an Array",
        difficulty: "Medium",
        link: "https://leetcode.com/problems/find-all-duplicates-in-an-array/",
        notes: "Sign marking trick"
      },
      {
        title: "Third Maximum Number",
        difficulty: "Easy",
        link: "https://leetcode.com/problems/third-maximum-number/",
        notes: "Track top three uniques"
      }
    ],
    Strings: [
      {
        title: "Number of Good Ways to Split a String",
        difficulty: "Medium",
        link: "https://leetcode.com/problems/number-of-good-ways-to-split-a-string/",
        notes: "Prefix and suffix distinct counts"
      },
      {
        title: "Check If a Word Occurs As a Prefix of Any Word in a Sentence",
        difficulty: "Easy",
        link: "https://leetcode.com/problems/check-if-a-word-occurs-as-a-prefix-of-any-word-in-a-sentence/",
        notes: "Split sentence and prefix check"
      },
      {
        title: "Rearrange Words in a Sentence",
        difficulty: "Medium",
        link: "https://leetcode.com/problems/rearrange-words-in-a-sentence/",
        notes: "Sort by word length"
      },
      {
        title: "Increasing Decreasing String",
        difficulty: "Easy",
        link: "https://leetcode.com/problems/increasing-decreasing-string/",
        notes: "Frequency array with two passes"
      },
      {
        title: "Remove Vowels from a String",
        difficulty: "Easy",
        link: "https://leetcode.com/problems/remove-vowels-from-a-string/",
        notes: "Filter characters by vowel set"
      },
      {
        title: "Defanging an IP Address",
        difficulty: "Easy",
        link: "https://leetcode.com/problems/defanging-an-ip-address/",
        notes: "String replace operation"
      },
      {
        title: "Reverse Only Letters",
        difficulty: "Easy",
        link: "https://leetcode.com/problems/reverse-only-letters/",
        notes: "Two pointers skipping non-letters"
      },
      {
        title: "To Lower Case",
        difficulty: "Easy",
        link: "https://leetcode.com/problems/to-lower-case/",
        notes: "Character ASCII conversion"
      },
      {
        title: "Valid Palindrome II",
        difficulty: "Easy",
        link: "https://leetcode.com/problems/valid-palindrome-ii/",
        notes: "Two pointers with one deletion allowed"
      },
      {
        title: "Validate IP Address",
        difficulty: "Medium",
        link: "https://leetcode.com/problems/validate-ip-address/",
        notes: "Parse IPv4 vs IPv6 rules"
      },
      {
        title: "String Compression",
        difficulty: "Medium",
        link: "https://leetcode.com/problems/string-compression/",
        notes: "Two pointers write index"
      },
      {
        title: "Add Strings",
        difficulty: "Easy",
        link: "https://leetcode.com/problems/add-strings/",
        notes: "Digit-wise addition"
      },
      {
        title: "Reverse String",
        difficulty: "Easy",
        link: "https://leetcode.com/problems/reverse-string/",
        notes: "Two-pointer swap"
      },
      {
        title: "Isomorphic Strings",
        difficulty: "Easy",
        link: "https://leetcode.com/problems/isomorphic-strings/",
        notes: "Bidirectional character mapping"
      },
      {
        title: "Reverse Words in a String",
        difficulty: "Medium",
        link: "https://leetcode.com/problems/reverse-words-in-a-string/",
        notes: "Split and rebuild"
      }
    ],
    HashMap: [
      {
        title: "Number of Good Pairs",
        difficulty: "Easy",
        link: "https://leetcode.com/problems/number-of-good-pairs/",
        notes: "Frequency map combinations"
      },
      {
        title: "Unique Number of Occurrences",
        difficulty: "Easy",
        link: "https://leetcode.com/problems/unique-number-of-occurrences/",
        notes: "Map values uniqueness check"
      },
      {
        title: "Most Common Word",
        difficulty: "Easy",
        link: "https://leetcode.com/problems/most-common-word/",
        notes: "Frequency map with banned set"
      },
      {
        title: "Jewels and Stones",
        difficulty: "Easy",
        link: "https://leetcode.com/problems/jewels-and-stones/",
        notes: "Set lookup per character"
      },
      {
        title: "Find the Town Judge",
        difficulty: "Easy",
        link: "https://leetcode.com/problems/find-the-town-judge/",
        notes: "In-degree and out-degree count"
      },
       {
        title: "4Sum II",
        difficulty: "Medium",
        link: "https://leetcode.com/problems/4sum-ii/",
        notes: "Pair sum frequency map"
      },
      {
        title: "Top K Frequent Elements",
        difficulty: "Medium",
        link: "https://leetcode.com/problems/top-k-frequent-elements/",
        notes: "Bucket sort or heap"
      },
      {
        title: "Intersection of Two Arrays",
        difficulty: "Easy",
        link: "https://leetcode.com/problems/intersection-of-two-arrays/",
        notes: "Set-based intersection"
      },
      {
        title: "Intersection of Two Arrays II",
        difficulty: "Easy",
        link: "https://leetcode.com/problems/intersection-of-two-arrays-ii/",
        notes: "Frequency map intersection"
      },
      {
        title: "Valid Anagram",
        difficulty: "Easy",
        link: "https://leetcode.com/problems/valid-anagram/",
        notes: "Character frequency comparison"
      },
      {
        title: "Majority Element",
        difficulty: "Easy",
        link: "https://leetcode.com/problems/majority-element/",
        notes: "Boyer-Moore voting"
      },
      {
        title: "Majority Element II",
        difficulty: "Medium",
        link: "https://leetcode.com/problems/majority-element-ii/",
        notes: "Extended Boyer-Moore"
      }
    ],
    SlidingWindow: [
         {
        title: "Find All Anagrams in a String",
        difficulty: "Medium",
        link: "https://leetcode.com/problems/find-all-anagrams-in-a-string/",
        notes: "Fixed window frequency match"
      },
      {
        title: "Longest Repeating Character Replacement",
        difficulty: "Medium",
        link: "https://leetcode.com/problems/longest-repeating-character-replacement/",
        notes: "Window with max frequency tracking"
      },
      {
        title: "Longest Substring with At Most K Distinct Characters",
        difficulty: "Medium",
        link: "https://leetcode.com/problems/longest-substring-with-at-most-k-distinct-characters/",
        notes: "Variable window with hashmap"
      },
      {
        title: "Sliding Window Maximum",
        difficulty: "Hard",
        link: "https://leetcode.com/problems/sliding-window-maximum/",
        notes: "Monotonic deque"
      },
      {
        title: "Minimum Size Subarray Sum",
        difficulty: "Medium",
        link: "https://leetcode.com/problems/minimum-size-subarray-sum/",
        notes: "Shrinkable sliding window"
      },
      {
        title: "Maximum Number of Vowels in a Substring of Given Length",
        difficulty: "Medium",
        link: "https://leetcode.com/problems/maximum-number-of-vowels-in-a-substring-of-given-length/",
        notes: "Fixed-size sliding window"
      },
      {
        title: "Maximum Points You Can Obtain from Cards",
        difficulty: "Medium",
        link: "https://leetcode.com/problems/maximum-points-you-can-obtain-from-cards/",
        notes: "Window on remaining middle segment"
      },
      {
        title: "Fruit Into Baskets",
        difficulty: "Medium",
        link: "https://leetcode.com/problems/fruit-into-baskets/",
        notes: "At most two distinct elements window"
      },
      {
        title: "Subarray Product Less Than K",
        difficulty: "Medium",
        link: "https://leetcode.com/problems/subarray-product-less-than-k/",
        notes: "Variable window with product constraint"
      }
    ],
    Stacks: [
      {
        title: "Final Prices With a Special Discount in a Shop",
        difficulty: "Easy",
        link: "https://leetcode.com/problems/final-prices-with-a-special-discount-in-a-shop/",
        notes: "Monotonic stack next smaller element"
      },
      {
        title: "Minimum Remove to Make Valid Parentheses",
        difficulty: "Medium",
        link: "https://leetcode.com/problems/minimum-remove-to-make-valid-parentheses/",
        notes: "Stack or balance counter"
      },
      {
        title: "Remove All Adjacent Duplicates In String",
        difficulty: "Easy",
        link: "https://leetcode.com/problems/remove-all-adjacent-duplicates-in-string/",
        notes: "Stack-based character removal"
      },
      {
        title: "Daily Temperatures",
        difficulty: "Medium",
        link: "https://leetcode.com/problems/daily-temperatures/",
        notes: "Monotonic decreasing stack"
      }
    ],
    Queue: [
      {
        title: "Design Circular Queue",
        difficulty: "Medium",
        link: "https://leetcode.com/problems/design-circular-queue/",
        notes: "Fixed-size circular buffer"
      }
    ],
    LinkedList: [
      {
        title: "Middle of the Linked List",
        difficulty: "Easy",
        link: "https://leetcode.com/problems/middle-of-the-linked-list/",
        notes: "Fast and slow pointers"
      },
      {
        title: "Convert Binary Number in a Linked List to Integer",
        difficulty: "Easy",
        link: "https://leetcode.com/problems/convert-binary-number-in-a-linked-list-to-integer/",
        notes: "Bit accumulation while traversing"
      },
      {
        title: "Split Linked List in Parts",
        difficulty: "Medium",
        link: "https://leetcode.com/problems/split-linked-list-in-parts/",
        notes: "Length calculation and partitioning"
      }
    ],
    Trees: [
      {
        title: "Cousins in Binary Tree",
        difficulty: "Easy",
        link: "https://leetcode.com/problems/cousins-in-binary-tree/",
        notes: "Level order with parent tracking"
      },
      {
        title: "Maximum Width of Binary Tree",
        difficulty: "Medium",
        link: "https://leetcode.com/problems/maximum-width-of-binary-tree/",
        notes: "Index-based BFS"
      },
      {
        title: "Range Sum of BST",
        difficulty: "Easy",
        link: "https://leetcode.com/problems/range-sum-of-bst/",
        notes: "DFS with range pruning"
      },
      {
        title: "Average of Levels in Binary Tree",
        difficulty: "Easy",
        link: "https://leetcode.com/problems/average-of-levels-in-binary-tree/",
        notes: "Level order sum and count"
      }
    ],
    Graphs: [
      {
        title: "Keys and Rooms",
        difficulty: "Medium",
        link: "https://leetcode.com/problems/keys-and-rooms/",
        notes: "DFS or BFS reachability"
      },
      {
        title: "Rotting Oranges",
        difficulty: "Medium",
        link: "https://leetcode.com/problems/rotting-oranges/",
        notes: "Multi-source BFS"
      },
      {
        title: "Network Delay Time",
        difficulty: "Medium",
        link: "https://leetcode.com/problems/network-delay-time/",
        notes: "Dijkstra shortest paths"
      }
    ],
    Greedy: [
      {
        title: "Lemonade Change",
        difficulty: "Easy",
        link: "https://leetcode.com/problems/lemonade-change/",
        notes: "Greedy bill management"
      },
      {
        title: "Boats to Save People",
        difficulty: "Medium",
        link: "https://leetcode.com/problems/boats-to-save-people/",
        notes: "Two pointers after sorting"
      }
    ],
    BinarySearch: [
      {
        title: "Binary Search",
        difficulty: "Easy",
        link: "https://leetcode.com/problems/binary-search/",
        notes: "Classic divide search"
      },
      {
        title: "Peak Index in a Mountain Array",
        difficulty: "Easy",
        link: "https://leetcode.com/problems/peak-index-in-a-mountain-array/",
        notes: "Binary search on slope"
      }
    ],
    Heap: [
      {
        title: "Last Stone Weight",
        difficulty: "Easy",
        link: "https://leetcode.com/problems/last-stone-weight/",
        notes: "Max heap simulation"
      },
      {
        title: "K Closest Points to Origin",
        difficulty: "Medium",
        link: "https://leetcode.com/problems/k-closest-points-to-origin/",
        notes: "Heap or quickselect"
      }
    ],
    DynamicProgramming: [
      {
        title: "Min Cost Climbing Stairs",
        difficulty: "Easy",
        link: "https://leetcode.com/problems/min-cost-climbing-stairs/",
        notes: "Bottom-up DP on steps"
      },
      {
        title: "Delete and Earn",
        difficulty: "Medium",
        link: "https://leetcode.com/problems/delete-and-earn/",
        notes: "House robber style DP"
      },
      {
        title: "Stone Game",
        difficulty: "Medium",
        link: "https://leetcode.com/problems/stone-game/",
        notes: "Game DP with optimal play"
      }
    ],
    Design: [
      {
        title: "Design Browser History",
        difficulty: "Medium",
        link: "https://leetcode.com/problems/design-browser-history/",
        notes: "Doubly linked list simulation"
      },
      {
        title: "Design HashMap",
        difficulty: "Easy",
        link: "https://leetcode.com/problems/design-hashmap/",
        notes: "Array of buckets chaining"
      },
      {
        title: "Design HashSet",
        difficulty: "Easy",
        link: "https://leetcode.com/problems/design-hashset/",
        notes: "Boolean buckets or chaining"
      },
       {
        title: "LFU Cache",
        difficulty: "Hard",
        link: "https://leetcode.com/problems/lfu-cache/",
        notes: "Frequency buckets with O(1) updates"
      },
      {
        title: "LRU Cache",
        difficulty: "Medium",
        link: "https://leetcode.com/problems/lru-cache/",
        notes: "HashMap + doubly linked list"
      },
      {
        title: "Insert Delete GetRandom O(1)",
        difficulty: "Medium",
        link: "https://leetcode.com/problems/insert-delete-getrandom-o1/",
        notes: "Array + hashmap index mapping"
      },
      {
        title: "Design Twitter",
        difficulty: "Medium",
        link: "https://leetcode.com/problems/design-twitter/",
        notes: "Heap merge of tweet streams"
      },
      {
        title: "Design Hit Counter",
        difficulty: "Medium",
        link: "https://leetcode.com/problems/design-hit-counter/",
        notes: "Sliding window timestamps"
      },
      {
        title: "Design Phone Directory",
        difficulty: "Medium",
        link: "https://leetcode.com/problems/design-phone-directory/",
        notes: "Queue of available numbers"
      },
      {
        title: "Design Tic-Tac-Toe",
        difficulty: "Medium",
        link: "https://leetcode.com/problems/design-tic-tac-toe/",
        notes: "Row, column, diagonal counters"
      },
      {
        title: "Design Snake Game",
        difficulty: "Medium",
        link: "https://leetcode.com/problems/design-snake-game/",
        notes: "Deque for body + set for collision"
      }
    ],
},
  apple: {
    Arrays: [
      {
        title: "Two Sum",
        difficulty: "Easy",
        link: "https://leetcode.com/problems/two-sum/",
        notes: "HashMap for complement lookup"
      },
      {
        title: "Product of Array Except Self",
        difficulty: "Medium",
        link: "https://leetcode.com/problems/product-of-array-except-self/",
        notes: "Prefix and suffix products"
      },
      {
        title: "Move Zeroes",
        difficulty: "Easy",
        link: "https://leetcode.com/problems/move-zeroes/",
        notes: "Two-pointer compaction"
      },
      {
        title: "Rotate Array",
        difficulty: "Medium",
        link: "https://leetcode.com/problems/rotate-array/",
        notes: "Reverse array segments"
      },
      {
        title: "Find Pivot Index",
        difficulty: "Easy",
        link: "https://leetcode.com/problems/find-pivot-index/",
        notes: "Prefix sum balance"
      },
      {
        title: "Array Partition I",
        difficulty: "Easy",
        link: "https://leetcode.com/problems/array-partition-i/",
        notes: "Sort and sum pairs"
      },
      {
        title: "Third Maximum Number",
        difficulty: "Easy",
        link: "https://leetcode.com/problems/third-maximum-number/",
        notes: "Track top three uniques"
      },
      {
        title: "Merge Sorted Array",
        difficulty: "Easy",
        link: "https://leetcode.com/problems/merge-sorted-array/",
        notes: "Two pointers from end"
      },
      {
        title: "Maximum Product Subarray",
        difficulty: "Medium",
        link: "https://leetcode.com/problems/maximum-product-subarray/",
        notes: "Track max and min product"
      },
      {
        title: "Longest Consecutive Sequence",
        difficulty: "Medium",
        link: "https://leetcode.com/problems/longest-consecutive-sequence/",
        notes: "HashSet sequence expansion"
      },
      {
        title: "K-diff Pairs in an Array",
        difficulty: "Medium",
        link: "https://leetcode.com/problems/k-diff-pairs-in-an-array/",
        notes: "HashMap or two pointers"
      },
      {
        title: "Array Nesting",
        difficulty: "Medium",
        link: "https://leetcode.com/problems/array-nesting/",
        notes: "Cycle detection in index graph"
      }
    ],

    Strings: [
      {
        title: "Valid Anagram",
        difficulty: "Easy",
        link: "https://leetcode.com/problems/valid-anagram/",
        notes: "Character frequency comparison"
      },
      {
        title: "Reverse String",
        difficulty: "Easy",
        link: "https://leetcode.com/problems/reverse-string/",
        notes: "Two-pointer swap"
      },
      {
        title: "Reverse Words in a String",
        difficulty: "Medium",
        link: "https://leetcode.com/problems/reverse-words-in-a-string/",
        notes: "Split, reverse, and rebuild"
      },
      {
        title: "Add Strings",
        difficulty: "Easy",
        link: "https://leetcode.com/problems/add-strings/",
        notes: "Digit-wise addition"
      },
      {
        title: "String Compression",
        difficulty: "Medium",
        link: "https://leetcode.com/problems/string-compression/",
        notes: "Two pointers with write index"
      },
      {
        title: "Find the Difference",
        difficulty: "Easy",
        link: "https://leetcode.com/problems/find-the-difference/",
        notes: "XOR or frequency map"
      },
      {
        title: "Longest Common Prefix",
        difficulty: "Easy",
        link: "https://leetcode.com/problems/longest-common-prefix/",
        notes: "Horizontal scanning"
      },
      {
        title: "Group Anagrams",
        difficulty: "Medium",
        link: "https://leetcode.com/problems/group-anagrams/",
        notes: "Sorted string as key"
      },
      {
        title: "Valid Palindrome",
        difficulty: "Easy",
        link: "https://leetcode.com/problems/valid-palindrome/",
        notes: "Two pointers with filtering"
      },
      {
        title: "Valid Palindrome II",
        difficulty: "Easy",
        link: "https://leetcode.com/problems/valid-palindrome-ii/",
        notes: "Two pointers with one deletion allowed"
      },
      {
        title: "Backspace String Compare",
        difficulty: "Easy",
        link: "https://leetcode.com/problems/backspace-string-compare/",
        notes: "Two pointers skipping backspaces"
      },
      {
        title: "Shortest Distance to a Character",
        difficulty: "Easy",
        link: "https://leetcode.com/problems/shortest-distance-to-a-character/",
        notes: "Two-pass distance tracking"
      },
      {
        title: "Rotate String",
        difficulty: "Easy",
        link: "https://leetcode.com/problems/rotate-string/",
        notes: "Check substring in doubled string"
      },
      {
        title: "Number of Segments in a String",
        difficulty: "Easy",
        link: "https://leetcode.com/problems/number-of-segments-in-a-string/",
        notes: "Whitespace boundary counting"
      },
      {
        title: "Ransom Note",
        difficulty: "Easy",
        link: "https://leetcode.com/problems/ransom-note/",
        notes: "Character frequency subtraction"
      },
      {
        title: "Palindrome Pairs",
        difficulty: "Hard",
        link: "https://leetcode.com/problems/palindrome-pairs/",
        notes: "HashMap + prefix/suffix checks"
      },
      {
        title: "Shortest Palindrome",
        difficulty: "Hard",
        link: "https://leetcode.com/problems/shortest-palindrome/",
        notes: "KMP prefix function"
      },
      {
        title: "Longest Uncommon Subsequence II",
        difficulty: "Medium",
        link: "https://leetcode.com/problems/longest-uncommon-subsequence-ii/",
        notes: "Check subsequence uniqueness"
      },
      {
        title: "Unique Substrings in Wraparound String",
        difficulty: "Medium",
        link: "https://leetcode.com/problems/unique-substrings-in-wraparound-string/",
        notes: "DP on consecutive characters"
      },
      {
        title: "Remove Duplicate Letters",
        difficulty: "Medium",
        link: "https://leetcode.com/problems/remove-duplicate-letters/",
        notes: "Monotonic stack + last occurrence"
      }
    ],

    HashMap: [
      {
        title: "Contains Duplicate",
        difficulty: "Easy",
        link: "https://leetcode.com/problems/contains-duplicate/",
        notes: "Set size check"
      },
      {
        title: "Intersection of Two Arrays",
        difficulty: "Easy",
        link: "https://leetcode.com/problems/intersection-of-two-arrays/",
        notes: "Set intersection"
      },
      {
        title: "Top K Frequent Elements",
        difficulty: "Medium",
        link: "https://leetcode.com/problems/top-k-frequent-elements/",
        notes: "Bucket sort or heap"
      },
      {
        title: "Subarray Sum Equals K",
        difficulty: "Medium",
        link: "https://leetcode.com/problems/subarray-sum-equals-k/",
        notes: "Prefix sum frequency map"
      },
      {
        title: "Contiguous Array",
        difficulty: "Medium",
        link: "https://leetcode.com/problems/contiguous-array/",
        notes: "Prefix sum with index map"
      },
      {
        title: "Continuous Subarray Sum",
        difficulty: "Medium",
        link: "https://leetcode.com/problems/continuous-subarray-sum/",
        notes: "Prefix sum modulo k"
      },
      {
        title: "Find Duplicate File in System",
        difficulty: "Medium",
        link: "https://leetcode.com/problems/find-duplicate-file-in-system/",
        notes: "Content-based hashing"
      }
    ],

    SlidingWindow: [
      {
        title: "Longest Substring Without Repeating Characters",
        difficulty: "Medium",
        link: "https://leetcode.com/problems/longest-substring-without-repeating-characters/",
        notes: "Sliding window with last index"
      },
      {
        title: "Max Consecutive Ones III",
        difficulty: "Medium",
        link: "https://leetcode.com/problems/max-consecutive-ones-iii/",
        notes: "Window with at most k zeros"
      }
    ],

    LinkedList: [
      {
        title: "Reverse Linked List",
        difficulty: "Easy",
        link: "https://leetcode.com/problems/reverse-linked-list/",
        notes: "Iterative pointer reversal"
      },
      {
        title: "Middle of the Linked List",
        difficulty: "Easy",
        link: "https://leetcode.com/problems/middle-of-the-linked-list/",
        notes: "Fast and slow pointers"
      },
      {
        title: "Reverse Linked List II",
        difficulty: "Medium",
        link: "https://leetcode.com/problems/reverse-linked-list-ii/",
        notes: "Reverse sublist by position"
      },
      {
        title: "Palindrome Linked List",
        difficulty: "Easy",
        link: "https://leetcode.com/problems/palindrome-linked-list/",
        notes: "Reverse second half"
      },
      {
        title: "Remove Nth Node From End of List",
        difficulty: "Medium",
        link: "https://leetcode.com/problems/remove-nth-node-from-end-of-list/",
        notes: "Two pointers with gap"
      },
      {
        title: "Swap Nodes in Pairs",
        difficulty: "Medium",
        link: "https://leetcode.com/problems/swap-nodes-in-pairs/",
        notes: "Pointer re-wiring"
      },
      {
        title: "Merge k Sorted Lists",
        difficulty: "Hard",
        link: "https://leetcode.com/problems/merge-k-sorted-lists/",
        notes: "Heap or divide and conquer"
      },
      {
        title: "Palindrome Linked List",
        difficulty: "Easy",
        link: "https://leetcode.com/problems/palindrome-linked-list/",
        notes: "Reverse second half"
      },
      {
        title: "Copy List with Random Pointer",
        difficulty: "Medium",
        link: "https://leetcode.com/problems/copy-list-with-random-pointer/",
        notes: "HashMap or interleaving nodes"
      },
      {
        title: "Sort List",
        difficulty: "Medium",
        link: "https://leetcode.com/problems/sort-list/",
        notes: "Merge sort on linked list"
      }
    ],

    BinarySearch: [
      {
        title: "Binary Search",
        difficulty: "Easy",
        link: "https://leetcode.com/problems/binary-search/",
        notes: "Classic divide and conquer"
      },
      {
        title: "Search Insert Position",
        difficulty: "Easy",
        link: "https://leetcode.com/problems/search-insert-position/",
        notes: "Lower bound binary search"
      },
      {
        title: "Find Peak Element",
        difficulty: "Medium",
        link: "https://leetcode.com/problems/find-peak-element/",
        notes: "Binary search on slope"
      },
      {
        title: "Find Minimum in Rotated Sorted Array",
        difficulty: "Medium",
        link: "https://leetcode.com/problems/find-minimum-in-rotated-sorted-array/",
        notes: "Binary search with rotation"
      },
      {
        title: "Single Element in a Sorted Array",
        difficulty: "Medium",
        link: "https://leetcode.com/problems/single-element-in-a-sorted-array/",
        notes: "Binary search on index parity"
      },
      {
        title: "Search in Rotated Sorted Array",
        difficulty: "Medium",
        link: "https://leetcode.com/problems/search-in-rotated-sorted-array/",
        notes: "Binary search with pivot logic"
      }
    ],

    Greedy: [
      {
        title: "Lemonade Change",
        difficulty: "Easy",
        link: "https://leetcode.com/problems/lemonade-change/",
        notes: "Greedy bill handling"
      },
      {
        title: "Assign Cookies",
        difficulty: "Easy",
        link: "https://leetcode.com/problems/assign-cookies/",
        notes: "Sort greed factors"
      },
      {
        title: "Assign Cookies",
        difficulty: "Easy",
        link: "https://leetcode.com/problems/assign-cookies/",
        notes: "Sort greed factors"
      },
      {
        title: "Candy",
        difficulty: "Hard",
        link: "https://leetcode.com/problems/candy/",
        notes: "Two-pass greedy distribution"
      }
    ],
      Trees: [
      {
        title: "Maximum Depth of Binary Tree",
        difficulty: "Easy",
        link: "https://leetcode.com/problems/maximum-depth-of-binary-tree/",
        notes: "DFS height calculation"
      },
      {
        title: "Same Tree",
        difficulty: "Easy",
        link: "https://leetcode.com/problems/same-tree/",
        notes: "Recursive structural comparison"
      },
      {
        title: "Invert Binary Tree",
        difficulty: "Easy",
        link: "https://leetcode.com/problems/invert-binary-tree/",
        notes: "Swap left and right recursively"
      },
      {
        title: "Binary Tree Level Order Traversal",
        difficulty: "Medium",
        link: "https://leetcode.com/problems/binary-tree-level-order-traversal/",
        notes: "BFS with queue"
      },
      {
        title: "Binary Tree Zigzag Level Order Traversal",
        difficulty: "Medium",
        link: "https://leetcode.com/problems/binary-tree-zigzag-level-order-traversal/",
        notes: "Level order with direction toggle"
      },
      {
        title: "Binary Tree Right Side View",
        difficulty: "Medium",
        link: "https://leetcode.com/problems/binary-tree-right-side-view/",
        notes: "Rightmost node per level"
      },
      {
        title: "Lowest Common Ancestor of a Binary Tree",
        difficulty: "Medium",
        link: "https://leetcode.com/problems/lowest-common-ancestor-of-a-binary-tree/",
        notes: "Postorder DFS"
      },
       {
        title: "Path Sum",
        difficulty: "Easy",
        link: "https://leetcode.com/problems/path-sum/",
        notes: "DFS accumulating sum"
      },
      {
        title: "Path Sum II",
        difficulty: "Medium",
        link: "https://leetcode.com/problems/path-sum-ii/",
        notes: "DFS with backtracking"
      },
      {
        title: "Sum Root to Leaf Numbers",
        difficulty: "Medium",
        link: "https://leetcode.com/problems/sum-root-to-leaf-numbers/",
        notes: "DFS numeric accumulation"
      },
      {
        title: "Flatten Binary Tree to Linked List",
        difficulty: "Medium",
        link: "https://leetcode.com/problems/flatten-binary-tree-to-linked-list/",
        notes: "Postorder pointer rewiring"
      },
      {
        title: "Binary Tree Maximum Path Sum",
        difficulty: "Hard",
        link: "https://leetcode.com/problems/binary-tree-maximum-path-sum/",
        notes: "Postorder max gain"
      }
    ],

    Graphs: [
      {
        title: "Number of Islands",
        difficulty: "Medium",
        link: "https://leetcode.com/problems/number-of-islands/",
        notes: "DFS/BFS on grid"
      },
      {
        title: "Max Area of Island",
        difficulty: "Medium",
        link: "https://leetcode.com/problems/max-area-of-island/",
        notes: "DFS area counting"
      },
      {
        title: "Friend Circles",
        difficulty: "Medium",
        link: "https://leetcode.com/problems/friend-circles/",
        notes: "Connected components"
      },
      {
        title: "Course Schedule",
        difficulty: "Medium",
        link: "https://leetcode.com/problems/course-schedule/",
        notes: "Cycle detection in DAG"
      },
      {
        title: "Course Schedule II",
        difficulty: "Medium",
        link: "https://leetcode.com/problems/course-schedule-ii/",
        notes: "Topological sorting"
      },
        {
        title: "Graph Valid Tree",
        difficulty: "Medium",
        link: "https://leetcode.com/problems/graph-valid-tree/",
        notes: "Union-Find or DFS cycle check"
      },
      {
        title: "Alien Dictionary",
        difficulty: "Hard",
        link: "https://leetcode.com/problems/alien-dictionary/",
        notes: "Topological sort with constraints"
      },
      {
        title: "Evaluate Division",
        difficulty: "Medium",
        link: "https://leetcode.com/problems/evaluate-division/",
        notes: "Graph with weighted edges"
      },
      {
        title: "Number of Connected Components in an Undirected Graph",
        difficulty: "Medium",
        link: "https://leetcode.com/problems/number-of-connected-components-in-an-undirected-graph/",
        notes: "Union-Find components"
      },
       {
        title: "Cut Off Trees for Golf Event",
        difficulty: "Hard",
        link: "https://leetcode.com/problems/cut-off-trees-for-golf-event/",
        notes: "Repeated BFS shortest paths"
      },
      {
        title: "Employee Importance",
        difficulty: "Easy",
        link: "https://leetcode.com/problems/employee-importance/",
        notes: "DFS on employee graph"
      }
    ],

    DynamicProgramming: [
      {
        title: "House Robber",
        difficulty: "Medium",
        link: "https://leetcode.com/problems/house-robber/",
        notes: "DP on linear houses"
      },
      {
        title: "Coin Change",
        difficulty: "Medium",
        link: "https://leetcode.com/problems/coin-change/",
        notes: "Unbounded knapsack DP"
      },
      {
        title: "Perfect Squares",
        difficulty: "Medium",
        link: "https://leetcode.com/problems/perfect-squares/",
        notes: "DP with square numbers"
      },
      {
        title: "Decode Ways",
        difficulty: "Medium",
        link: "https://leetcode.com/problems/decode-ways/",
        notes: "DP on string decoding"
      },
      {
        title: "Partition Equal Subset Sum",
        difficulty: "Medium",
        link: "https://leetcode.com/problems/partition-equal-subset-sum/",
        notes: "Subset sum DP"
      },
       {
        title: "Maximum Subarray",
        difficulty: "Medium",
        link: "https://leetcode.com/problems/maximum-subarray/",
        notes: "Kadane’s algorithm"
      },
      {
        title: "Longest Palindromic Subsequence",
        difficulty: "Medium",
        link: "https://leetcode.com/problems/longest-palindromic-subsequence/",
        notes: "DP on intervals"
      },
      {
        title: "Edit Distance",
        difficulty: "Hard",
        link: "https://leetcode.com/problems/edit-distance/",
        notes: "2D DP on prefixes"
      },
      {
        title: "Minimum Path Sum",
        difficulty: "Medium",
        link: "https://leetcode.com/problems/minimum-path-sum/",
        notes: "Grid DP accumulation"
      },
      {
        title: "Unique Paths",
        difficulty: "Medium",
        link: "https://leetcode.com/problems/unique-paths/",
        notes: "Combinatorics or DP"
      },
      {
        title: "Coin Change 2",
        difficulty: "Medium",
        link: "https://leetcode.com/problems/coin-change-2/",
        notes: "Unbounded knapsack DP"
      },
      {
        title: "Longest Palindromic Substring",
        difficulty: "Medium",
        link: "https://leetcode.com/problems/longest-palindromic-substring/",
        notes: "Expand around center"
      },
      {
        title: "House Robber II",
        difficulty: "Medium",
        link: "https://leetcode.com/problems/house-robber-ii/",
        notes: "DP with circular constraint"
      },
      {
        title: "Best Time to Buy and Sell Stock",
        difficulty: "Easy",
        link: "https://leetcode.com/problems/best-time-to-buy-and-sell-stock/",
        notes: "Track minimum price so far"
      },
      {
        title: "Best Time to Buy and Sell Stock II",
        difficulty: "Medium",
        link: "https://leetcode.com/problems/best-time-to-buy-and-sell-stock-ii/",
        notes: "Sum all increasing differences"
      },
      {
        title: "Best Time to Buy and Sell Stock III",
        difficulty: "Hard",
        link: "https://leetcode.com/problems/best-time-to-buy-and-sell-stock-iii/",
        notes: "DP with limited transactions"
      },
      {
        title: "Best Time to Buy and Sell Stock IV",
        difficulty: "Hard",
        link: "https://leetcode.com/problems/best-time-to-buy-and-sell-stock-iv/",
        notes: "DP with k transactions"
      },
      {
        title: "Distinct Subsequences",
        difficulty: "Hard",
        link: "https://leetcode.com/problems/distinct-subsequences/",
        notes: "DP on string prefixes"
      },
      {
        title: "Interleaving String",
        difficulty: "Medium",
        link: "https://leetcode.com/problems/interleaving-string/",
        notes: "2D DP over indices"
      },
      {
        title: "Ones and Zeroes",
        difficulty: "Medium",
        link: "https://leetcode.com/problems/ones-and-zeroes/",
        notes: "0/1 knapsack DP"
      },
      {
        title: "Unique Binary Search Trees",
        difficulty: "Medium",
        link: "https://leetcode.com/problems/unique-binary-search-trees/",
        notes: "Catalan number DP"
      }
    ],
     Interval: [
      {
        title: "Merge Intervals",
        difficulty: "Medium",
        link: "https://leetcode.com/problems/merge-intervals/",
        notes: "Sort and merge overlaps"
      },
      {
        title: "Meeting Rooms",
        difficulty: "Easy",
        link: "https://leetcode.com/problems/meeting-rooms/",
        notes: "Sort by start time"
      },
      {
        title: "Meeting Rooms II",
        difficulty: "Medium",
        link: "https://leetcode.com/problems/meeting-rooms-ii/",
        notes: "Min heap of end times"
      },
      {
        title: "Non-overlapping Intervals",
        difficulty: "Medium",
        link: "https://leetcode.com/problems/non-overlapping-intervals/",
        notes: "Greedy by end time"
      }
    ],
     Backtracking: [
      {
        title: "Permutations",
        difficulty: "Medium",
        link: "https://leetcode.com/problems/permutations/",
        notes: "DFS with used flags"
      },
      {
        title: "Subsets",
        difficulty: "Medium",
        link: "https://leetcode.com/problems/subsets/",
        notes: "Include/exclude recursion"
      },
      {
        title: "Combination Sum",
        difficulty: "Medium",
        link: "https://leetcode.com/problems/combination-sum/",
        notes: "DFS with pruning"
      },
      {
        title: "Generate Parentheses",
        difficulty: "Medium",
        link: "https://leetcode.com/problems/generate-parentheses/",
        notes: "Backtracking with balance"
      }
    ],
    Trie: [
      {
        title: "Implement Trie",
        difficulty: "Medium",
        link: "https://leetcode.com/problems/implement-trie-prefix-tree/",
        notes: "Trie nodes with children map"
      },
      {
        title: "Add and Search Word - Data structure design",
        difficulty: "Medium",
        link: "https://leetcode.com/problems/add-and-search-word-data-structure-design/",
        notes: "Trie with wildcard DFS"
      },
      {
        title: "Word Search II",
        difficulty: "Hard",
        link: "https://leetcode.com/problems/word-search-ii/",
        notes: "Trie + DFS on board"
      },
       {
        title: "Insert Delete GetRandom O(1)",
        difficulty: "Medium",
        link: "https://leetcode.com/problems/insert-delete-getrandom-o1/",
        notes: "Array + hashmap index tracking"
      },
      {
        title: "Design Twitter",
        difficulty: "Medium",
        link: "https://leetcode.com/problems/design-twitter/",
        notes: "Heap merge of tweet streams"
      },
      {
        title: "Peeking Iterator",
        difficulty: "Medium",
        link: "https://leetcode.com/problems/peeking-iterator/",
        notes: "Cache next element"
      }
    ],

    Stacks: [
      {
        title: "Valid Parentheses",
        difficulty: "Easy",
        link: "https://leetcode.com/problems/valid-parentheses/",
        notes: "Stack matching"
      },
      {
        title: "Decode String",
        difficulty: "Medium",
        link: "https://leetcode.com/problems/decode-string/",
        notes: "Stack with counts and strings"
      },
      {
        title: "Basic Calculator II",
        difficulty: "Medium",
        link: "https://leetcode.com/problems/basic-calculator-ii/",
        notes: "Stack or running evaluation"
      }
    ],

    Queue: [
      {
        title: "Design Circular Queue",
        difficulty: "Medium",
        link: "https://leetcode.com/problems/design-circular-queue/",
        notes: "Fixed-size circular buffer"
      }
    ],

    Matrix: [
      {
        title: "Set Matrix Zeroes",
        difficulty: "Medium",
        link: "https://leetcode.com/problems/set-matrix-zeroes/",
        notes: "Marker rows and columns"
      },
      {
        title: "Spiral Matrix",
        difficulty: "Medium",
        link: "https://leetcode.com/problems/spiral-matrix/",
        notes: "Boundary simulation"
      },
      {
        title: "Rotate Image",
        difficulty: "Medium",
        link: "https://leetcode.com/problems/rotate-image/",
        notes: "Transpose + reverse rows"
      }
    ],

    BitManipulation: [
      {
        title: "Complement of Base 10 Integer",
        difficulty: "Easy",
        link: "https://leetcode.com/problems/complement-of-base-10-integer/",
        notes: "Flip bits until MSB"
      },
      {
        title: "Missing Number",
        difficulty: "Easy",
        link: "https://leetcode.com/problems/missing-number/",
        notes: "XOR or sum formula"
      }
    ],

    Math: [
      {
        title: "Fizz Buzz",
        difficulty: "Easy",
        link: "https://leetcode.com/problems/fizz-buzz/",
        notes: "Modulo conditions"
      },
      {
        title: "Happy Number",
        difficulty: "Easy",
        link: "https://leetcode.com/problems/happy-number/",
        notes: "Cycle detection on digit sums"
      },
      {
        title: "Integer to Roman",
        difficulty: "Medium",
        link: "https://leetcode.com/problems/integer-to-roman/",
        notes: "Greedy value subtraction"
      },
      {
        title: "Roman to Integer",
        difficulty: "Easy",
        link: "https://leetcode.com/problems/roman-to-integer/",
        notes: "Scan with subtractive cases"
      },
      {
        title: "Plus One",
        difficulty: "Easy",
        link: "https://leetcode.com/problems/plus-one/",
        notes: "Carry propagation"
      },
      {
        title: "Count Primes",
        difficulty: "Medium",
        link: "https://leetcode.com/problems/count-primes/",
        notes: "Sieve of Eratosthenes"
      },
      {
        title: "Rectangle Area",
        difficulty: "Medium",
        link: "https://leetcode.com/problems/rectangle-area/",
        notes: "Area sum minus overlap"
      }
    ],

    Design: [
      {
        title: "LRU Cache",
        difficulty: "Medium",
        link: "https://leetcode.com/problems/lru-cache/",
        notes: "HashMap + doubly linked list"
      },
      {
        title: "Design HashMap",
        difficulty: "Easy",
        link: "https://leetcode.com/problems/design-hashmap/",
        notes: "Bucketed hashing"
      },
       {
        title: "LFU Cache",
        difficulty: "Hard",
        link: "https://leetcode.com/problems/lfu-cache/",
        notes: "Frequency buckets + hashmap"
      },
      {
        title: "Design Hit Counter",
        difficulty: "Medium",
        link: "https://leetcode.com/problems/design-hit-counter/",
        notes: "Timestamp sliding window"
      }
    ],
    Heap: [
      {
        title: "Kth Largest Element in an Array",
        difficulty: "Medium",
        link: "https://leetcode.com/problems/kth-largest-element-in-an-array/",
        notes: "Min heap of size k"
      },
      {
        title: "Top K Frequent Words",
        difficulty: "Medium",
        link: "https://leetcode.com/problems/top-k-frequent-words/",
        notes: "Heap with custom comparator"
      },
      {
        title: "Find K Pairs with Smallest Sums",
        difficulty: "Medium",
        link: "https://leetcode.com/problems/find-k-pairs-with-smallest-sums/",
        notes: "Heap on pair sums"
      }
    ],
    
  }
};