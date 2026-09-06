export type Difficulty = "Easy" | "Medium" | "Hard";

export type TestCase = { input: string; output: string; explanation?: string };

export type Problem = {
  id: string;
  title: string;
  difficulty: Difficulty;
  topic: string;
  acceptance: string;
  solved: boolean;
  description: string;
  inputFormat: string;
  outputFormat: string;
  constraints: string[];
  examples: TestCase[];
  starter: Record<Language, string>;
  sampleRun: string;
};

export type Language = "c" | "cpp" | "python" | "java";

export const languages: { id: Language; label: string }[] = [
  { id: "c", label: "C" },
  { id: "cpp", label: "C++" },
  { id: "python", label: "Python" },
  { id: "java", label: "Java" },
];

const cMain = (body: string) => `#include <stdio.h>\n\nint main(void) {\n${body}\n    return 0;\n}\n`;
const cppMain = (body: string) =>
  `#include <bits/stdc++.h>\nusing namespace std;\n\nint main() {\n${body}\n    return 0;\n}\n`;
const javaMain = (body: string) =>
  `import java.util.*;\n\npublic class Main {\n    public static void main(String[] args) {\n${body}\n    }\n}\n`;

export const problems: Problem[] = [
  {
    id: "reverse-a-number",
    title: "Reverse a Number",
    difficulty: "Easy",
    topic: "Maths",
    acceptance: "78%",
    solved: true,
    description:
      "Given a non-negative integer N, print the number formed by reversing its digits. Leading zeros in the reversed number should not be printed — reversing 1200 gives 21.",
    inputFormat: "A single line containing one integer N.",
    outputFormat: "A single line containing the digits of N in reverse order.",
    constraints: ["0 <= N <= 1000000000", "N fits in a 32-bit signed integer", "Time limit: 1 second"],
    examples: [
      { input: "12345", output: "54321", explanation: "The digits are printed back to front." },
      { input: "1200", output: "21", explanation: "Trailing zeros disappear after reversing." },
    ],
    starter: {
      c: cMain("    int n;\n    scanf(\"%d\", &n);\n    // your code here"),
      cpp: cppMain("    int n;\n    cin >> n;\n    // your code here"),
      python: "n = int(input())\n# your code here\n",
      java: javaMain("        Scanner sc = new Scanner(System.in);\n        int n = sc.nextInt();\n        // your code here"),
    },
    sampleRun: "54321",
  },
  {
    id: "find-the-largest-element",
    title: "Find the Largest Element",
    difficulty: "Easy",
    topic: "Arrays",
    acceptance: "84%",
    solved: true,
    description:
      "You are given an array of N integers. Print the largest element in the array. The array may contain negative numbers.",
    inputFormat:
      "The first line contains the integer N. The second line contains N space-separated integers.",
    outputFormat: "A single line containing the largest element.",
    constraints: ["1 <= N <= 100000", "-1000000 <= A[i] <= 1000000", "Time limit: 1 second"],
    examples: [
      { input: "5\n3 19 7 1 12", output: "19" },
      { input: "4\n-8 -3 -21 -5", output: "-3", explanation: "All values are negative, so -3 is the maximum." },
    ],
    starter: {
      c: cMain("    int n;\n    scanf(\"%d\", &n);\n    // read the array and track the maximum"),
      cpp: cppMain("    int n;\n    cin >> n;\n    vector<int> a(n);\n    // your code here"),
      python: "n = int(input())\na = list(map(int, input().split()))\n# your code here\n",
      java: javaMain("        Scanner sc = new Scanner(System.in);\n        int n = sc.nextInt();\n        // your code here"),
    },
    sampleRun: "19",
  },
  {
    id: "palindrome-checker",
    title: "Palindrome Checker",
    difficulty: "Easy",
    topic: "Strings",
    acceptance: "71%",
    solved: false,
    description:
      "Given a string S, decide whether it reads the same forwards and backwards. Ignore spaces and letter case, and consider only letters and digits.",
    inputFormat: "A single line containing the string S.",
    outputFormat: 'Print "YES" if S is a palindrome, otherwise print "NO".',
    constraints: ["1 <= |S| <= 10000", "S contains printable ASCII characters", "Time limit: 1 second"],
    examples: [
      { input: "Never odd or even", output: "YES", explanation: "After cleaning: neveroddoreven." },
      { input: "EduSpark", output: "NO" },
    ],
    starter: {
      c: cMain("    char s[10005];\n    fgets(s, sizeof(s), stdin);\n    // your code here"),
      cpp: cppMain("    string s;\n    getline(cin, s);\n    // your code here"),
      python: "s = input()\n# your code here\n",
      java: javaMain("        Scanner sc = new Scanner(System.in);\n        String s = sc.nextLine();\n        // your code here"),
    },
    sampleRun: "YES",
  },
  {
    id: "two-sum",
    title: "Two Sum",
    difficulty: "Medium",
    topic: "Hashing",
    acceptance: "56%",
    solved: false,
    description:
      "Given an array of N integers and a target value T, print the 0-based indices of the two numbers that add up to T. Exactly one valid pair exists. Print the smaller index first.",
    inputFormat:
      "The first line contains N and T. The second line contains N space-separated integers.",
    outputFormat: "Two space-separated indices i and j such that A[i] + A[j] = T.",
    constraints: [
      "2 <= N <= 100000",
      "-1000000000 <= A[i], T <= 1000000000",
      "Exactly one valid answer exists",
    ],
    examples: [
      { input: "4 9\n2 7 11 15", output: "0 1", explanation: "2 + 7 = 9." },
      { input: "3 6\n3 2 4", output: "1 2" },
    ],
    starter: {
      c: cMain("    int n; long long t;\n    scanf(\"%d %lld\", &n, &t);\n    // your code here"),
      cpp: cppMain("    int n; long long t;\n    cin >> n >> t;\n    // use an unordered_map for O(n)"),
      python: "n, t = map(int, input().split())\na = list(map(int, input().split()))\n# your code here\n",
      java: javaMain("        Scanner sc = new Scanner(System.in);\n        int n = sc.nextInt();\n        long t = sc.nextLong();\n        // your code here"),
    },
    sampleRun: "0 1",
  },
  {
    id: "valid-parentheses",
    title: "Valid Parentheses",
    difficulty: "Medium",
    topic: "Stack",
    acceptance: "49%",
    solved: false,
    description:
      "Given a string containing only the characters ( ) [ ] { }, determine whether every bracket is closed by the same type in the correct order.",
    inputFormat: "A single line containing the bracket string S.",
    outputFormat: 'Print "VALID" if the string is balanced, otherwise print "INVALID".',
    constraints: ["1 <= |S| <= 100000", "S contains only bracket characters", "Time limit: 1 second"],
    examples: [
      { input: "{[()]}", output: "VALID" },
      { input: "([)]", output: "INVALID", explanation: "The square bracket closes before the round one." },
    ],
    starter: {
      c: cMain("    char s[100005];\n    scanf(\"%s\", s);\n    // use an array as a stack"),
      cpp: cppMain("    string s;\n    cin >> s;\n    stack<char> st;\n    // your code here"),
      python: "s = input()\nstack = []\n# your code here\n",
      java: javaMain("        Scanner sc = new Scanner(System.in);\n        String s = sc.next();\n        Deque<Character> st = new ArrayDeque<>();\n        // your code here"),
    },
    sampleRun: "VALID",
  },
  {
    id: "longest-substring-unique",
    title: "Longest Unique Substring",
    difficulty: "Hard",
    topic: "Sliding Window",
    acceptance: "34%",
    solved: false,
    description:
      "Given a string S, print the length of the longest substring that contains no repeated character.",
    inputFormat: "A single line containing the string S.",
    outputFormat: "A single integer — the length of the longest substring without repeats.",
    constraints: ["1 <= |S| <= 200000", "S contains lowercase English letters", "Time limit: 2 seconds"],
    examples: [
      { input: "abcabcbb", output: "3", explanation: "abc is the longest window without repeats." },
      { input: "bbbbb", output: "1" },
    ],
    starter: {
      c: cMain("    char s[200005];\n    scanf(\"%s\", s);\n    // sliding window with a seen[] array"),
      cpp: cppMain("    string s;\n    cin >> s;\n    // sliding window\n"),
      python: "s = input()\n# sliding window\n",
      java: javaMain("        Scanner sc = new Scanner(System.in);\n        String s = sc.next();\n        // sliding window"),
    },
    sampleRun: "3",
  },
  {
    id: "matrix-spiral-sum",
    title: "Spiral Matrix Traversal",
    difficulty: "Hard",
    topic: "Matrix",
    acceptance: "31%",
    solved: false,
    description:
      "Given an R x C matrix of integers, print its elements in clockwise spiral order starting from the top-left corner.",
    inputFormat:
      "The first line contains R and C. The next R lines each contain C space-separated integers.",
    outputFormat: "A single line with all R*C values in spiral order, separated by spaces.",
    constraints: ["1 <= R, C <= 500", "-100000 <= value <= 100000", "Time limit: 2 seconds"],
    examples: [
      { input: "3 3\n1 2 3\n4 5 6\n7 8 9", output: "1 2 3 6 9 8 7 4 5" },
      { input: "2 2\n1 2\n3 4", output: "1 2 4 3" },
    ],
    starter: {
      c: cMain("    int r, c;\n    scanf(\"%d %d\", &r, &c);\n    // track four boundaries"),
      cpp: cppMain("    int r, c;\n    cin >> r >> c;\n    // track top, bottom, left, right"),
      python: "r, c = map(int, input().split())\ngrid = [list(map(int, input().split())) for _ in range(r)]\n# your code here\n",
      java: javaMain("        Scanner sc = new Scanner(System.in);\n        int r = sc.nextInt(), c = sc.nextInt();\n        // your code here"),
    },
    sampleRun: "1 2 3 6 9 8 7 4 5",
  },
];

export const codingProgress = {
  streak: 12,
  totalByDifficulty: { Easy: 60, Medium: 45, Hard: 25 } as Record<Difficulty, number>,
  solvedByDifficulty: { Easy: 41, Medium: 18, Hard: 5 } as Record<Difficulty, number>,
};
