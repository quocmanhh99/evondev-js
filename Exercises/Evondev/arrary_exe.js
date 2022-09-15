// Phần 1
// 1. Đảo ngược một chuỗi. Ví dụ: "My name is evondev" -> "evondev is name My";
// 2. Đảo ngược một chuỗi bao gôm các kí tự. Ví dụ: "i love" -> "evol i"
// 3. In hoa chữ cái đầu trong chuỗi ví dụ: "my name is evondev" -> "My Name Is Evondev"

// PHẦN 2
// 1. Cho 1 mảng gồm nhiều giá trị [1,1000, false, null, "evondev", "", undefined, "javascript", [1,2,3]]. Viết chương trình loại bỏ các giá trị là falsy ra khỏi mảng chỉ giữ lại giá trị truthy. Gợi ý giá trị falsy là 0 null undefined false "" NaN
// const complexArray = [
//     [1, 2, 3, [false, null]],
//     [1, 5, 6, ["javascript"]],
//     [888, 666, [90]],
//   ];
// 2. Cho 1 mảng phức tạp [[1,2,3, [false, null]], [1,5,6, ["javascript"]], [888,666, [90]]]. Và kết quả mong muốn là [1,2,3,false,null,1,5,6,"javascript",888,666,90]
// const array = [
//     1,
//     1000,
//     false,
//     null,
//     "evondev",
//     "",
//     undefined,
//     "javascript",
//     [1, 2, 3],
//     NaN,
//   ];
// 3. Đảo ngược số nguyên. Ví dụ 1234 -> 4321, -567 -> -765
// 4. Viết chương trình có tên là fizzBuzz với đầu vào là một số nguyên, và cho chạy từ 1 cho tới số nguyên đó rồi kiểm tra nếu có số chia hết cho 2 thì in ra chữ "Fizz", nếu chia hết cho 3 thì in ra chữ "Buzz", nếu chia hết cho 2 và 3 thì in ra "FizzBuzz"
// 5. Cho 1 chuỗi bất kỳ, đếm số lượng kí tự `vowels` có trong chuỗi.
// 6. Cho 1 mảng các giá trị số [1,2,3,1,1,1,2,2,2,5,5,5,7,7,6]. Viết một function trả về một mảng với các giá trị unique. Kết quả ở trên sẽ là [1,2,3,5,7,6];
// 7. Viết 1 function xử lý từ 1 mảng lớn thành nhiều mảng con dựa vào một số nguyên đầu vào. Ví dụ ([1,2,3,4,5], 2) -> [[1,2], [3,4], [5]]
// ([1,2,3,4,5,6], 3) -> [[1,2,3], [4,5,6]]