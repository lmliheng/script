待办事项API
1. 获取待办事项列表
请求方法：`GET`
请求路径：`/todos`
请求参数：`无`
响应：
状态码：`200 OK`
响应体：JSON数组，包含所有待办事项的详细信息。
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
请求路径：`/todos`
请求头：`Content-Type: application/json`
请求体：`JSON对象`，包含待办事项的详细信息。
示例请求体：
```json
{
  "title": "New Todo",
  "description": "This is a new todo item"
}
```
响应：
状态码：`201 Created`
响应体：JSON对象，包含新创建的待办事项的详细信息。
示例响应：
```json
{
  "id": 4,
  "title": "New Todo",
  "description": "This is a new todo item"
}
```
3. 删除待办事项
请求方法：`DELETE`
请求路径：`/todos/:id`
请求参数：
id：要删除的待办事项的ID。
响应：
状态码：`200 OK`
响应体：JSON对象，包含删除操作的消息。
示例响应：
```json
{
  "message": "Todo deleted successfully"
}
```
