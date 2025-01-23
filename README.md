# Todo-App API

## Description
This is a **Todo Application API** built with **Node.js** and **Express.js**. The API allows users to perform CRUD operations on todo tasks and categories, with secure user authentication and authorization. It uses **JWT** for authentication, **bcrypt** and **argon2** for password encryption, and **Multer** for file uploads.

## Features
- **User Authentication**: Users can sign up and log in securely.
- **Task Management**: Perform CRUD operations on todo tasks and categories.
- **File Uploads**: Supports uploading user profile images.
- **Security**: Passwords are securely encrypted with **bcrypt** and **argon2**.

## Technologies Used
- **Node.js**
- **Express.js**
- **JWT (JSON Web Tokens)**
- **bcrypt** & **argon2** for password encryption
- **Multer** for file uploads
- **MongoDB** & **MySQL** for database management
- **CORS** for cross-origin requests
- **dotenv** for environment variables
- **Mongoose** & **MySQL2** for database interactions

## Installation

1. Clone the repository:
   ```bash
   git clone https://github.com/Bhavy0606/todo-app-backend.git



Here's the provided information formatted in markdown for the README.md:

## API Routes

### 1. Signup
- **Route**: `POST http://localhost:3020/api/user/signup`
- **Headers**:
  - Authorization: No Authorization for signup
- **Sample Body JSON**:
  ```json
  {
    "first_name": "abhi",
    "last_name": "Patel",
    "email": "abhi@gmail.com",
    "password": "123",
    "confirm_password": "123"
  }

### 2. Signin
- **Route**: `POST http://localhost:3020/api/user/signin`
- **Headers**:
  - Authorization: No Authorization for signup
- **Sample Body JSON**:
  ```json
  {
    "first_name": "abhi",
    "last_name": "Patel",
    "email": "abhi@gmail.com",
    "password": "123",
    "confirm_password": "123"
  }
- **Sample Response**:
  ```json
  {
    "success": true,
    "message": "Authenticated successfully.",
    "token": "A token will be generated."
  }

### 3. Create a todo category or list
- **Route**: `POST http://localhost:3020/api/categories/create`
- **Headers**:
  - Authorization: `Bearer <token>`
- **Sample Body JSON**:
  ```json
  {
    "name":"asdadad"
  }
- **Sample Response**:
  ```json
  {
    "success": true,
    "message": "Category created successfully"
  }

### 4. Get all categories or list
- **Route**: `GET http://localhost:3020/api/categories/get-all-categories`
- **Headers**:
  - Authorization: `Bearer <token>`
- **Sample Body JSON**: No data required for request
- **Sample Response**:
  ```json
  {
    "success": true,
    "message": "Categories fetched.",
    "data": {
        "categories": [
            {
                "id": 1,
                "user_id": 8,
                "name": "morning workout",
                "created_at": "2024-12-16T17:53:00.000Z",
                "updated_at": "2024-12-16T19:54:15.000Z",
                "deleted_at": null,
                "is_deleted": 0
            },
            {
                "id": 2,
                "user_id": 8,
                "name": "dinner",
                "created_at": "2024-12-16T17:54:32.000Z",
                "updated_at": "2024-12-16T19:58:32.000Z",
                "deleted_at": null,
                "is_deleted": 0
            },
            {
                "id": 3,
                "user_id": 8,
                "name": "workout",
                "created_at": "2024-12-16T17:54:42.000Z",
                "updated_at": "2024-12-16T17:54:42.000Z",
                "deleted_at": null,
                "is_deleted": 0
            },
            {
                "id": 6,
                "user_id": 8,
                "name": "play games",
                "created_at": "2024-12-26T17:51:49.000Z",
                "updated_at": "2024-12-26T17:52:27.000Z",
                "deleted_at": null,
                "is_deleted": 0
            },
            {
                "id": 7,
                "user_id": 8,
                "name": "cleaning",
                "created_at": "2024-12-26T17:54:55.000Z",
                "updated_at": "2024-12-26T17:54:55.000Z",
                "deleted_at": null,
                "is_deleted": 0
            },
            {
                "id": 8,
                "user_id": 8,
                "name": "asdadad",
                "created_at": "2024-12-28T17:53:25.000Z",
                "updated_at": "2024-12-28T17:53:25.000Z",
                "deleted_at": null,
                "is_deleted": 0
            },
            {
                "id": 9,
                "user_id": 8,
                "name": "asdadad",
                "created_at": "2025-01-22T21:24:07.000Z",
                "updated_at": "2025-01-22T21:24:07.000Z",
                "deleted_at": null,
                "is_deleted": 0
            },
            {
                "id": 10,
                "user_id": 8,
                "name": "asdadad",
                "created_at": "2025-01-22T21:24:37.000Z",
                "updated_at": "2025-01-22T21:24:37.000Z",
                "deleted_at": null,
                "is_deleted": 0
            }
        ]
    }
  }
### 5. Get all default categories or list
- **Route**: `GET http://localhost:3020/api/categories/get-all-default-categories`
- **Headers**:
  - Authorization: `Bearer <token>`
- **Sample Body JSON**:
  ```json
  {
    }
- **Sample Response**:
  ```json
  {
    "success": true,
    "message": "Categories fetched.",
    "data": {
        "defaultCategories": [
            {
                "id": 1,
                "name": "general",
                "created_at": "2024-12-14T18:15:54.000Z",
                "updated_at": "2024-12-14T18:15:54.000Z"
            },
            {
                "id": 2,
                "name": "personal",
                "created_at": "2024-12-14T18:15:54.000Z",
                "updated_at": "2024-12-14T18:15:54.000Z"
            },
            {
                "id": 3,
                "name": "study",
                "created_at": "2024-12-14T18:15:54.000Z",
                "updated_at": "2024-12-14T18:15:54.000Z"
            },
            {
                "id": 4,
                "name": "work",
                "created_at": "2024-12-14T18:15:54.000Z",
                "updated_at": "2024-12-14T18:15:54.000Z"
            }
        ]
    }
  }

### 6. Update Category or list name
- **Route**: `POST http://localhost:3020/api/categories/update`
- **Headers**:
  - Authorization: `Bearer <token>`
- **Sample Body JSON**:
  ```json
  {
    "id": "6",   // category id
    "name":"play games"   // new category or list name
  }
- **Sample Response**:
  ```json
  {
    "success": true,
    "message": "Category updated successfully."
  }
### 7. Delete category or list
- **Route**: `DELETE http://localhost:3020/api/categories/delete`
- **Headers**:
  - Authorization: `Bearer <token>`
- **Sample Body JSON**:
  ```json
  {
    "id": "4"   // category or list id
  }
- **Sample Response**:
  ```json
  {
    "success": true,
    "message": "Category updated deleted."
  }

### 8. Get All Todos
- **Route**: `GET http://localhost:3020/api/todos/`
- **Headers**:
  - Authorization: `Bearer <token>`
- **Sample Body JSON**:
  ```json
  {
  }
- **Sample Response**:
  ```json
  {
    "message": "Success",
    "data": [
        {
            "id": 6,
            "user_id": 8,
            "title": "Call Mamma",
            "description": "Call mom and ask her grocery shopping list",
            "status": "pending",
            "priority": "high",
            "due_date": "2024-12-26T21:30:00.000Z",
            "created_at": "2024-12-26T19:27:03.000Z",
            "updated_at": "2024-12-26T19:27:03.000Z",
            "is_deleted": 0,
            "deleted_at": null,
            "category_id": 1,
            "category_name": "general"
        },
        {
            "id": 7,
            "user_id": 8,
            "title": "Call Mamma",
            "description": "Call mom and ask her grocery shopping list",
            "status": "pending",
            "priority": "high",
            "due_date": "2024-12-26T21:30:00.000Z",
            "created_at": "2024-12-26T19:27:48.000Z",
            "updated_at": "2024-12-26T19:27:48.000Z",
            "is_deleted": 0,
            "deleted_at": null,
            "category_id": 1,
            "category_name": "general"
        },
        {
            "id": 8,
            "user_id": 8,
            "title": "Call Mamma",
            "description": "Call mom and ask her grocery shopping list",
            "status": "pending",
            "priority": "high",
            "due_date": "2024-12-26T21:30:00.000Z",
            "created_at": "2024-12-26T19:28:44.000Z",
            "updated_at": "2024-12-26T19:28:44.000Z",
            "is_deleted": 0,
            "deleted_at": null,
            "category_id": 1,
            "category_name": "general"
        },
        {
            "id": 9,
            "user_id": 8,
            "title": "Call Mamma",
            "description": "Call mom and ask her grocery shopping list",
            "status": "pending",
            "priority": "high",
            "due_date": "2024-12-26T21:30:00.000Z",
            "created_at": "2024-12-28T17:54:09.000Z",
            "updated_at": "2024-12-28T17:54:09.000Z",
            "is_deleted": 0,
            "deleted_at": null,
            "category_id": 1,
            "category_name": "general"
        },
        {
            "id": 10,
            "user_id": 8,
            "title": "Call Mamma",
            "description": "Call mom and ask her grocery shopping list",
            "status": "pending",
            "priority": "high",
            "due_date": "2024-12-26T21:30:00.000Z",
            "created_at": "2024-12-31T20:36:26.000Z",
            "updated_at": "2024-12-31T20:36:26.000Z",
            "is_deleted": 0,
            "deleted_at": null,
            "category_id": 1,
            "category_name": "general"
        },
        {
            "id": 11,
            "user_id": 8,
            "title": "Call Papa",
            "description": "Call papa and ask him agro shopping",
            "status": "pending",
            "priority": "high",
            "due_date": "2024-12-26T21:30:00.000Z",
            "created_at": "2025-01-05T18:30:41.000Z",
            "updated_at": "2025-01-05T18:30:41.000Z",
            "is_deleted": 0,
            "deleted_at": null,
            "category_id": 3,
            "category_name": "workout"
        },
        {
            "id": 13,
            "user_id": 8,
            "title": "watch Kalki movie",
            "description": "description",
            "status": "completed",
            "priority": "high",
            "due_date": "2025-01-27T04:30:00.000Z",
            "created_at": "2025-01-05T18:31:17.000Z",
            "updated_at": "2025-01-07T17:54:38.000Z",
            "is_deleted": 0,
            "deleted_at": null,
            "category_id": 5,
            "category_name": "workout"
        }
    ]
  }

### 9. Get a todo
- **Route**: `POST http://localhost:3020/api/todos/:id`
   - **id:** replace id with todo-id in order to fetch particular todo data
- **Headers**:
  - Authorization: `Bearer <token>`
- **Sample Body JSON**:
  ```json
  {
  }
- **Sample Response**:
  ```json
  {
    "success": true,
    "message": "Successfully fetched todo data.",
    "data": [
        {
            "id": 13,
            "user_id": 8,
            "title": "watch Kalki movie",
            "description": "description",
            "status": "completed",
            "priority": "high",
            "due_date": "2025-01-27T04:30:00.000Z",
            "created_at": "2025-01-05T18:31:17.000Z",
            "updated_at": "2025-01-07T17:54:38.000Z",
            "is_deleted": 0,
            "deleted_at": null,
            "category_id": 5,
            "category_name": "workout"
        }
    ]
  }


### 10. Create a todo
- **Route**: `POST http://localhost:3020/api/todos/create`
- **Headers**:
  - Authorization: `Bearer <token>`
- **Sample Body JSON**:
  ```json
  {
    "category_id": "5",   // a category or a default category id
    "is_category_default": false,   // boolean flag if category is default or not
    "title": "watch wicked",   // title for todo
    "description":"description",   //description for todo
    "status":"pending",   // status 'pending' or 'completed'
    "priority":"high",    // priority can be 'low', 'medium' or 'high'
    "due_date":"2024-12-26 14:30:00"    // due date for todo
  }
- **Sample Response**:
  ```json
  {
    "success": true,
    "message": "Successfully todo created."
  }

### 11. Update a todo
- **Route**: `POST http://localhost:3020/api/todos/update`
- **Headers**:
  - Authorization: `Bearer <token>`
- **Sample Body JSON**:
  ```json
  {
    "id": 13,   // todo id
    "title": "watch Kalki movie",  // title for todo
    "description": "description",  // description for todo
    "status": "completed",   // todo status
    "priority": "high",   // todo priority
    "due_date": "2025-01-26T21:30:00.000Z",    // todo due date
    "category_id": 5,   // todo category id from categories or default_categories
    "is_category_default": false   // boolean if category is from default_category or not
  }

- **Sample Response**:
  ```json
  {
    "success": true,
    "message": "ToDo Updated successfully.",
    "data": {
        "toDo": {
            "id": 13
        }
    }
  }

### 12. Delete a todo
- **Route**: `POST http://localhost:3020/api/todos/delete/:id`
  - **id:** replace id with todo-id in order to delete a particular todo 
- **Headers**:
  - Authorization: `Bearer <token>`
- **Sample Body JSON**:
  ```json
  {
   
  }

- **Sample Response**:
  ```json
  {
    "success": true,
    "message": "ToDo Updated successfully.",
    "data": {
        "toDo": {
            "id": 13
        }
    }
  

