# Queue trong Java

## 1. Queue là gì?

`Queue` là một cấu trúc dữ liệu hoạt động theo nguyên tắc **FIFO** (_First In First Out_), nghĩa là phần tử nào vào trước sẽ được xử lý trước.

## 2. Các loại Queue trong Java

Queue trong Java là một interface trong `java.util`. Các lớp phổ biến triển khai `Queue` gồm:

- `LinkedList` (Hàng đợi thông thường)
- `PriorityQueue` (Hàng đợi ưu tiên)
- `ArrayDeque` (Hàng đợi hai đầu - Deque)
- `ConcurrentLinkedQueue` (Hàng đợi cho đa luồng)
- `BlockingQueue` (Hàng đợi đồng bộ) với các lớp con:
  - `ArrayBlockingQueue`
  - `LinkedBlockingQueue`
  - `PriorityBlockingQueue`
  - `DelayQueue`
  - `SynchronousQueue`
  - `LinkedTransferQueue`

## 3. Các phương thức chính của Queue

### Phương thức từ interface `Queue<E>`

| **Phương thức**      | **Mô tả**                                                                    |
| -------------------- | ---------------------------------------------------------------------------- |
| `add(E e)`           | Thêm phần tử vào hàng đợi, ném `IllegalStateException` nếu không thể thêm.   |
| `offer(E e)`         | Thêm phần tử vào hàng đợi, trả về `false` nếu không thể thêm.                |
| `remove()`           | Lấy và xóa phần tử đầu tiên, ném `NoSuchElementException` nếu rỗng.          |
| `poll()`             | Lấy và xóa phần tử đầu tiên, trả về `null` nếu rỗng.                         |
| `element()`          | Trả về phần tử đầu tiên mà không xóa, ném `NoSuchElementException` nếu rỗng. |
| `peek()`             | Trả về phần tử đầu tiên mà không xóa, trả về `null` nếu rỗng.                |
| `size()`             | Trả về số phần tử trong hàng đợi.                                            |
| `isEmpty()`          | Kiểm tra xem hàng đợi có rỗng không.                                         |
| `clear()`            | Xóa toàn bộ phần tử trong hàng đợi.                                          |
| `contains(Object o)` | Kiểm tra xem hàng đợi có chứa phần tử hay không.                             |

### Phương thức đặc biệt của từng loại Queue

#### `LinkedList<E>`

###### `Queue` với `LinkedList`

```java
Queue<String> queue = new LinkedList<>();
queue.offer("A");
queue.offer("B");
System.out.println(queue.poll()); // A
```

| **Phương thức**                     | **Mô tả**                                                               |
| ----------------------------------- | ----------------------------------------------------------------------- |
| `addFirst(E e)`, `addLast(E e)`     | Thêm phần tử vào đầu/cuối danh sách.                                    |
| `offerFirst(E e)`, `offerLast(E e)` | Thêm phần tử vào đầu/cuối danh sách, trả về `false` nếu không thể thêm. |
| `removeFirst()`, `removeLast()`     | Xóa phần tử đầu/cuối danh sách.                                         |
| `pollFirst()`, `pollLast()`         | Xóa phần tử đầu/cuối danh sách, trả về `null` nếu rỗng.                 |
| `getFirst()`, `getLast()`           | Lấy phần tử đầu/cuối mà không xóa.                                      |
| `peekFirst()`, `peekLast()`         | Lấy phần tử đầu/cuối mà không xóa, trả về `null` nếu rỗng.              |

#### `PriorityQueue<E>`

###### `PriorityQueue` - Hàng đợi ưu tiên

```java
Queue<Integer> pq = new PriorityQueue<>();
pq.offer(30);
pq.offer(10);
System.out.println(pq.poll()); // 10
```

| **Phương thức**    | **Mô tả**                                                      |
| ------------------ | -------------------------------------------------------------- |
| `comparator()`     | Trả về bộ so sánh nếu có hoặc `null` nếu dùng thứ tự tự nhiên. |
| `toArray()`        | Chuyển hàng đợi thành mảng.                                    |
| `remove(Object o)` | Xóa một phần tử cụ thể khỏi hàng đợi.                          |
| `iterator()`       | Trả về một `Iterator` để duyệt hàng đợi.                       |

#### `ArrayDeque<E>`

###### `ArrayDeque` - Hàng đợi hai đầu

```java
Deque<String> deque = new ArrayDeque<>();
deque.offerFirst("A");
deque.offerLast("B");
System.out.println(deque.pollFirst()); // A
```

| **Phương thức**                     | **Mô tả**                                                  |
| ----------------------------------- | ---------------------------------------------------------- |
| `addFirst(E e)`, `addLast(E e)`     | Thêm phần tử vào đầu/cuối deque.                           |
| `offerFirst(E e)`, `offerLast(E e)` | Thêm phần tử vào đầu/cuối, trả về `false` nếu thất bại.    |
| `removeFirst()`, `removeLast()`     | Xóa phần tử đầu/cuối deque.                                |
| `pollFirst()`, `pollLast()`         | Xóa phần tử đầu/cuối, trả về `null` nếu rỗng.              |
| `getFirst()`, `getLast()`           | Lấy phần tử đầu/cuối mà không xóa.                         |
| `peekFirst()`, `peekLast()`         | Lấy phần tử đầu/cuối mà không xóa, trả về `null` nếu rỗng. |

#### `ConcurrentLinkedQueue<E>`

| **Phương thức**    | **Mô tả**                                    |
| ------------------ | -------------------------------------------- |
| `spliterator()`    | Trả về `Spliterator` hỗ trợ xử lý song song. |
| `iterator()`       | Trả về `Iterator` để duyệt phần tử.          |
| `remove(Object o)` | Xóa một phần tử cụ thể khỏi hàng đợi.        |

#### `BlockingQueue<E>`

| **Phương thức**                           | **Mô tả**                                                    |
| ----------------------------------------- | ------------------------------------------------------------ |
| `put(E e)`                                | Thêm phần tử vào hàng đợi, chờ nếu đầy.                      |
| `take()`                                  | Lấy phần tử khỏi hàng đợi, chờ nếu rỗng.                     |
| `offer(E e, long timeout, TimeUnit unit)` | Thêm phần tử với thời gian chờ nếu đầy.                      |
| `poll(long timeout, TimeUnit unit)`       | Lấy phần tử với thời gian chờ nếu rỗng.                      |
| `drainTo(Collection<? super E> c)`        | Di chuyển tất cả phần tử từ hàng đợi sang `Collection` khác. |

## 4. So sánh các loại Queue trong Java

| **Loại Queue**          | **Đặc điểm**                                  | **Khi nào dùng?**                                |
| ----------------------- | --------------------------------------------- | ------------------------------------------------ |
| `LinkedList`            | Hỗ trợ Queue và Deque, chậm hơn `ArrayDeque`. | Khi cần danh sách liên kết và không cần ưu tiên. |
| `PriorityQueue`         | Sắp xếp phần tử theo thứ tự ưu tiên.          | Khi cần xử lý theo mức độ quan trọng.            |
| `ArrayDeque`            | Hàng đợi hai đầu, nhanh hơn `LinkedList`.     | Khi cần thêm/xóa ở cả hai đầu.                   |
| `ConcurrentLinkedQueue` | Hàng đợi thread-safe (đa luồng).              | Khi làm việc với môi trường đa luồng.            |
| `BlockingQueue`         | Hỗ trợ chặn khi rỗng hoặc đầy.                | Khi cần giao tiếp giữa các luồng.                |
