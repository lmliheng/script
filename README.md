### 脚本API
1. 获取脚本
请求方法：`GET`
请求路径：`/scripts`
请求参数：`无`
响应：
状态码：`200 OK`
响应体：JSON数组，包含所有脚本的详细信息。
示例响应：
```json
[
  {
    "id": 1,
    "title": "Learn Express",
    "description": "Learn how to use Express.js to build web applications"
  },
  {
    "id": 2,
    "title": "Build a Todo App",
    "description": "Build a simple todo app using Express and a frontend framework"
  },
  {
    "id": 3,
    "title": "Learn Express",
    "description": "Learn how to use Express.js to build web applications"
  }
]
```
2. 添加待办事项
请求方法：`POST`
请求路径：`/scripts`
请求头：`Content-Type: application/json`
请求体：`JSON对象`，包含待办事项的详细信息。
示例请求体：
```json
{

  "title": "New scripts",
  "description": "This is a new todo item"
}
```
响应：
状态码：`201 Created`
响应体：JSON对象，包含新创建的脚本的详细信息。
示例响应：
```json
{
  "id": 4,
  "title": "New scripts",
  "description": "This is a new scripts item"
}
```
3. 删除脚本
请求方法：`DELETE`
请求路径：`/scripts/:id`
请求参数：
id：要删除的脚本的ID。
响应：
状态码：`200 OK`
响应体：JSON对象，包含删除操作的消息。
示例响应：
```json
{
  "message": "scripts deleted successfully"
}
```
