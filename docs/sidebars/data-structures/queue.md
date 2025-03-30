# Queue trong Java

## 1. Queue là gì?

`Queue` là một cấu trúc dữ liệu hoạt động theo nguyên tắc **FIFO** (_First In First Out_), nghĩa là phần tử nào vào trước sẽ được xử lý trước.

## 2. Các loại Queue trong Java

Queue trong Java là một interface trong `java.util`. Các lớp phổ biến triển khai `Queue` gồm:

- **`LinkedList`** (Hàng đợi thông thường)
- **`PriorityQueue`** (Hàng đợi ưu tiên)
- **`ArrayDeque`** (Hàng đợi hai đầu - Deque)
- **`ConcurrentLinkedQueue`** (Hàng đợi cho đa luồng)

---

## 3. Các phương thức chính của `Queue`

| **Phương thức**      | **Mô tả**                                                                     |
| -------------------- | ----------------------------------------------------------------------------- |
| `add(E e)`           | Thêm phần tử vào cuối hàng đợi, ném `IllegalStateException` nếu hàng đợi đầy. |
| `offer(E e)`         | Thêm phần tử vào cuối hàng đợi, trả về `false` nếu thất bại.                  |
| `remove()`           | Xóa phần tử đầu tiên, ném `NoSuchElementException` nếu rỗng.                  |
| `poll()`             | Xóa và trả về phần tử đầu tiên, trả về `null` nếu rỗng.                       |
| `element()`          | Trả về phần tử đầu tiên mà không xóa, ném `NoSuchElementException` nếu rỗng.  |
| `peek()`             | Trả về phần tử đầu tiên mà không xóa, trả về `null` nếu rỗng.                 |
| `size()`             | Trả về số phần tử trong hàng đợi.                                             |
| `isEmpty()`          | Kiểm tra xem hàng đợi có rỗng không.                                          |
| `clear()`            | Xóa toàn bộ phần tử trong hàng đợi.                                           |
| `contains(Object o)` | Kiểm tra xem phần tử có tồn tại không.                                        |

---

## 4. Ví dụ về Queue trong Java

### **Queue với `LinkedList`**

```java
Queue<String> queue = new LinkedList<>();
queue.offer("A");
queue.offer("B");
System.out.println(queue.poll()); // A
```

### **`PriorityQueue` - Hàng đợi ưu tiên**

```java
Queue<Integer> pq = new PriorityQueue<>();
pq.offer(30);
pq.offer(10);
System.out.println(pq.poll()); // 10
```

### **`ArrayDeque` - Hàng đợi hai đầu**

```java
Deque<String> deque = new ArrayDeque<>();
deque.offerFirst("A");
deque.offerLast("B");
System.out.println(deque.pollFirst()); // A
```

---

## 5. So sánh các loại Queue trong Java

| **Loại Queue**          | **Đặc điểm**                                      | **Khi nào dùng?**                                |
| ----------------------- | ------------------------------------------------- | ------------------------------------------------ |
| `LinkedList`            | Hỗ trợ `Queue` và `Deque`, chậm hơn `ArrayDeque`. | Khi cần danh sách liên kết và không cần ưu tiên. |
| `PriorityQueue`         | Sắp xếp phần tử theo thứ tự ưu tiên.              | Khi cần xử lý theo mức độ quan trọng.            |
| `ArrayDeque`            | Hàng đợi hai đầu, nhanh hơn `LinkedList`.         | Khi cần thêm/xóa ở cả hai đầu.                   |
| `ConcurrentLinkedQueue` | Hàng đợi thread-safe (đa luồng).                  | Khi làm việc với môi trường đa luồng.            |

---
