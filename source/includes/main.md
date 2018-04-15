# Giới thiệu

**Kites** là một **Framework** hỗ trợ xây dựng nhanh chóng các ứng dụng Web bằng cách bung nén các templates đã được xây dựng sẵn.

<aside class="notice">
Bạn có thể tạo những template như thế này một cách dễ dàng và có thể tạo PR, đóng góp cho kites lớn mạnh hơn.
</aside>


> Bạn có thể tạo nhanh chóng một ứng dụng kites bằng 1 vài dòng code như thế này:

```bash
# Sử dụng @kites/cli
kites init my-app --template express
```

```javascript
var engine = require('@kites/engine')
var kites = engine()

kites.use((kites) => {
    kites.message = 'Hello World!'
})

kites.init().then(() => {
    console.log('From kites: ', kites.message)
})
```

Các thành phần cơ bản:

* **[@kites/engine](https://npmjs.com/package/@kites/engine)**: Thành phần lõi, là engine tạo nên kites.

**Kites** có thể mở rộng một cách dễ dàng, dưới đây là những thành phần chính thức quan trọng khác để tạo nên kites template:

* **[@kites/express](https://npmjs.com/package/@kites/express)**: Thành phần xử lý các HTTP requests.
* **[@kites/cli](https://npmjs.com/package/@kites/cli)**: Thành phần hỗ trợ dòng lệnh, tạo nhanh ứng dụng mới.

# Kites cli

Đây là công cụ hỗ trợ gõ lệnh trên cửa sổ dòng lệnh

> Cài đặt kites cli sử dụng npm:

```bash
# Lưu ý trước đó bạn đã cài đặt Node.js và NPM
npm install -g @kites/cli
```

```javascript
// Lưu ý trước đó bạn đã cài đặt Node.js và NPM
npm install -g @kites/cli
```

Hiện tại kites đã cung cấp cho developer thông qua gói thư viện npm:  [npmjs.com/package/@kites/cli](https://npmjs.com/package/@kites/cli).

