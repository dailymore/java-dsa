# Mảng trong Java - Toàn diện và Chi tiết

## 1. Mảng là gì?

Mảng (Array) trong Java là tập hợp các phần tử cùng kiểu dữ liệu, được lưu trữ trong bộ nhớ liên tiếp.

### Đặc điểm:

- Có kích thước cố định khi khai báo.
- Chỉ chứa các phần tử cùng kiểu dữ liệu.
- Truy cập phần tử bằng chỉ số (**index**), bắt đầu từ 0.

---

## 2. Khai báo mảng trong Java

### **Khai báo mảng 1 chiều**

```java
int[] numbers = new int[5]; // Mảng gồm 5 phần tử
int[] nums = {1, 2, 3, 4, 5}; // Khai báo và khởi tạo
```

### **Khai báo mảng 2 chiều (Ma trận)**

```java
int[][] matrix = new int[3][3]; // Ma trận 3x3
int[][] table = {{1, 2}, {3, 4}, {5, 6}}; // Khai báo và khởi tạo
```

### **Duyệt mảng 2 chiều**

- Vòng lặp đầu tiên sẽ duyệt qua hàng trước, sau đó sẽ duyệt đến cột

```java
for (int i = 0; i < matrix.length; i++) {
    for (int j = 0; j < matrix[i].length; j++) {
        System.out.print(matrix[i][j] + " ");
    }
    System.out.println();
}
```

### **Sửa đổi phần tử trong mảng 2 chiều**

```java
matrix[1][2] = 10; // Gán giá trị 10 vào hàng 1, cột 2
```

### **Tính tổng các phần tử trong mảng 2 chiều**

```java
int sum = 0;
for (int[] row : matrix) {
    for (int num : row) {
        sum += num;
    }
}
System.out.println("Tổng: " + sum);
```

---

## 3. Các phương thức hữu ích khi làm việc với mảng

### **3.1. Tính kích thước mảng**

```java
int[] arr = {1, 2, 3, 4, 5};
System.out.println("Độ dài mảng: " + arr.length); // 5
```

### **3.2. Duyệt qua mảng**

```java
for (int i = 0; i < arr.length; i++) {
    System.out.println(arr[i]);
}
// Hoặc dùng for-each
for (int num : arr) {
    System.out.println(num);
}
```

### **3.3. Sắp xếp mảng**

```java
import java.util.Arrays;
int[] numbers = {5, 2, 8, 3};
Arrays.sort(numbers);
System.out.println(Arrays.toString(numbers)); // [2, 3, 5, 8]
```

### **3.4. Tìm kiếm trong mảng**

```java
int index = Arrays.binarySearch(numbers, 5); // Tìm số 5 trong mảng
System.out.println("Vị trí: " + index);
```

### **3.5. Sao chép mảng**

```java
int[] copy = Arrays.copyOf(numbers, numbers.length);
System.out.println(Arrays.toString(copy));
```

### **3.6. So sánh hai mảng**

```java
int[] a = {1, 2, 3};
int[] b = {1, 2, 3};
System.out.println(Arrays.equals(a, b)); // true
```

---

## 4. Một số bài toán với mảng

### **4.1. Tìm phần tử lớn nhất và nhỏ nhất**

```java
int max = Arrays.stream(numbers).max().getAsInt();
int min = Arrays.stream(numbers).min().getAsInt();
```

### **4.2. Tính tổng các phần tử**

```java
int sum = Arrays.stream(numbers).sum();
```

### **4.3. Đảo ngược mảng**

```java
for (int i = 0; i < numbers.length / 2; i++) {
    int temp = numbers[i];
    numbers[i] = numbers[numbers.length - 1 - i];
    numbers[numbers.length - 1 - i] = temp;
}
```

---

## 5. Kết luận

- Mảng là một cách hiệu quả để lưu trữ và xử lý dữ liệu.
- Dùng `Arrays` để hỗ trợ thao tác nhanh chóng.
- Hạn chế: kích thước cố định. Dùng `ArrayList` nếu cần mảng linh hoạt.

---
