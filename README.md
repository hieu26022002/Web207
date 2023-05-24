# Quy chuẩn đặt tên của commit code: 
    1. feat: ................ (Feature: Tính năng. Dùng khi commit của mình có thêm chức năng mới).
    
    2. fix: ................ (Fix: Sửa. Dùng khi mình commit của mình sửa code trong file nào đó - hay gặp khi fix bug)

    3. refactor: ................ (refactor: Thay đổi. Dùng khi commit thay đổi nhỏ trong code.)

## API?:

    1. Khái niệm: API có thể hiểu như phương thức mà client gửi lên cho db có thể là object có thể là 1 function,..... và db sẽ trả lại kết quả cho phía client thông qua dạng JSON/XML 
    
    2. Các method của API: 
       a. GET: Sử dụng để lấy thông tin từ server theo URI đã cung cấp.
       b. POST: Gửi thông tin(dữ liệu) tới sever thông qua các parameters HTTP.
       c. PUT: Ghi đè (Sửa) tất cả thông tin(dữ liệu 1) của đối tượng với những gì được gửi lên (dữ liệu 2).
       d. PATCH: Ghi đè (Sửa) các thông tin (các trường của dữ liệu) được thay đổi của đối tượng.
       e. DELETE: Xóa resource trên server.
    . Sự khác nhau giữa PUT và PATCH:
        PUT sửa tất cả dữ liệu: PUT sẽ sửa hết các còn Patch sẽ chỉ sửa trường nhất định nào đó của đối tượng đã có trong DB.
    JSON: 
        {
            "users": [
                {
                "name": "1231231312313111111111123123",
                "id": 7
                }
            ],
            "products": [],
            "profile": {
                "id": 1,
                "name": "Nqduy1CMC"
            }
        }