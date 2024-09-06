# Mentor-Student Management API

This API allows for managing mentors and students, including creating mentors and students, assigning students to mentors, and viewing previously assigned mentors.

## Endpoints

### 1. Create a Mentor

- URL: `/mentors`
- Method: `POST`
- Description: Creates one or multiple mentors.
- Request Body:
    ```json
  [
  
    {
      "name": "John Doe",
      "email": "john.doe@example.com",
      "expertise": "Software Development",
      "years_of_experience": 10
    },
    {
      "name": "Michal",
      "email": "michal.doe@example.com",
      "expertise": "UI Development",
      "years_of_experience": 6
    },
    {
      "name": "Peter",
      "email": "peter.doe@example.com",
      "expertise": "Full stack Development",
      "years_of_experience": 4
    }
  ]
    ```
- Response:
    ```json
    {
    "message": "Mentor created successfully",
    "mentor": [
        {
            "name": "John Doe",
            "email": "john.doe@example.com",
            "expertise": "Software Development",
            "years_of_experience": 10,
            "students": [],
            "_id": "66db34a2f367618dfbb6f8d7",
            "createdAt": "2024-09-06T16:58:10.712Z",
            "updatedAt": "2024-09-06T16:58:10.712Z",
            "__v": 0
        },
        {
            "name": "Michal",
            "email": "michal.doe@example.com",
            "expertise": "UI Development",
            "years_of_experience": 6,
            "students": [],
            "_id": "66db34a2f367618dfbb6f8d8",
            "createdAt": "2024-09-06T16:58:10.713Z",
            "updatedAt": "2024-09-06T16:58:10.713Z",
            "__v": 0
        },
        {
            "name": "Peter",
            "email": "peter.doe@example.com",
            "expertise": "Full stack Development",
            "years_of_experience": 4,
            "students": [],
            "_id": "66db34a2f367618dfbb6f8d9",
            "createdAt": "2024-09-06T16:58:10.713Z",
            "updatedAt": "2024-09-06T16:58:10.713Z",
            "__v": 0
        }
    ]
  }
    ```

### 2. Create a Student

- URL: `/students`
- Method: `POST`
- Description: Creates one or multiple students.
- Request Body:
    ```json
  [
    {
      "name": "Alice Johnson",
      "email": "alice.johnson@example.com",
      "major": "Software Engineering",
      "year_of_study": 2
    },
    {
      "name": "Bob Brown",
      "email": "bob.brown@example.com",
      "major": "Embedded Engineering",
      "year_of_study": 3
    }
  ]

    ```
- Response:
    ```json
    {
    "message": "Students created successfully",
    "students": [
        {
            "name": "Alice Johnson",
            "email": "alice.johnson@example.com",
            "major": "Software Engineering",
            "year_of_study": 2,
            "previousMentors": [],
            "_id": "66db355ef367618dfbb6f8dc",
            "createdAt": "2024-09-06T17:01:18.381Z",
            "updatedAt": "2024-09-06T17:01:18.381Z",
            "__v": 0
        },
        {
            "name": "Bob Brown",
            "email": "bob.brown@example.com",
            "major": "Embedded Engineering",
            "year_of_study": 3,
            "previousMentors": [],
            "_id": "66db355ef367618dfbb6f8dd",
            "createdAt": "2024-09-06T17:01:18.381Z",
            "updatedAt": "2024-09-06T17:01:18.381Z",
            "__v": 0
        }
    ]
  }
    ```

### 3. Assign Multiple Students to a Mentor

- URL: `/students/mentors/mentorId`
- Method: `POST`
- Description: Assigns multiple students to a specific mentor.
- URL Params:
  - `mentorId` - The ID of the mentor to whom students will be assigned.
- Request Body:
    ```json
  [
    {
      "name": "Abarna",
      "email": "abarana.johnson@example.com",
      "major": "Computer science Engineering",
      "year_of_study": 1.5
    },
    {
      "name": "Kiran",
      "email": "kiran.brown@example.com",
      "major": "Information Technology",
      "year_of_study": 3
    }
  ]

    ```
- Response:
    ```json
    {
    "message": "Students created successfully",
    "students": [
        {
            "name": "Abarna",
            "email": "abarana.johnson@example.com",
            "major": "Computer science Engineering",
            "year_of_study": 1.5,
            "mentorId": "66db34a2f367618dfbb6f8d8",
            "previousMentors": [],
            "_id": "66db3685f367618dfbb6f8df",
            "createdAt": "2024-09-06T17:06:13.171Z",
            "updatedAt": "2024-09-06T17:06:13.171Z",
            "__v": 0
        },
        {
            "name": "Kiran",
            "email": "kiran.brown@example.com",
            "major": "Information Technology",
            "year_of_study": 3,
            "mentorId": "66db34a2f367618dfbb6f8d8",
            "previousMentors": [],
            "_id": "66db3685f367618dfbb6f8e0",
            "createdAt": "2024-09-06T17:06:13.171Z",
            "updatedAt": "2024-09-06T17:06:13.171Z",
            "__v": 0
        }
    ]
  }
    ```

### 4. Assign or Change Mentor for a Particular Student

- URL: `/mentors/students/:studentId`
- Method: `POST`
- Description: Assigns or changes a mentor for a specific student.
- URL Params:
  - `students` - The ID of the student.
- Response:
    ```json
    {
    "message": "Student assigned to mentor successfully",
    "mentor": {
        "_id": "66db34a2f367618dfbb6f8d7",
        "name": "John Doe",
        "email": "john.doe@example.com",
        "expertise": "Software Development",
        "years_of_experience": 10,
        "students": [
            "66db355ef367618dfbb6f8dd"
        ],
        "createdAt": "2024-09-06T16:58:10.712Z",
        "updatedAt": "2024-09-06T16:58:10.712Z",
        "__v": 1
    },
    "student": {
        "_id": "66db355ef367618dfbb6f8dd",
        "name": "Bob Brown",
        "email": "bob.brown@example.com",
        "major": "Embedded Engineering",
        "year_of_study": 3,
        "previousMentors": [],
        "createdAt": "2024-09-06T17:01:18.381Z",
        "updatedAt": "2024-09-06T17:01:18.381Z",
        "__v": 0,
        "mentorId": "66db34a2f367618dfbb6f8d7"
    }
  }
    ```

### 5. Show All Students for a Particular Mentor

- URL: `/mentors/:mentorId/students`
- Method: `GET`
- Description: Retrieves all students assigned to a specific mentor.
- URL Params:
  - `mentorId` - The ID of the mentor.
- Response:
    ```json
    {
    "students": [
        {
            "_id": "66db3685f367618dfbb6f8df",
            "name": "Abarna",
            "email": "abarana.johnson@example.com",
            "major": "Computer science Engineering",
            "year_of_study": 1.5,
            "mentorId": "66db34a2f367618dfbb6f8d8",
            "previousMentors": [],
            "createdAt": "2024-09-06T17:06:13.171Z",
            "updatedAt": "2024-09-06T17:06:13.171Z",
            "__v": 0
        },
        {
            "_id": "66db3685f367618dfbb6f8e0",
            "name": "Kiran",
            "email": "kiran.brown@example.com",
            "major": "Information Technology",
            "year_of_study": 3,
            "mentorId": "66db34a2f367618dfbb6f8d8",
            "previousMentors": [],
            "createdAt": "2024-09-06T17:06:13.171Z",
            "updatedAt": "2024-09-06T17:06:13.171Z",
            "__v": 0
        }
    ]
  }
    ```

### 6. Show Previously Assigned Mentors for a Particular Student

- **URL:** `/students/:studentId/previousMentors`
- **Method:** `GET`
- **Description:** Retrieves the list of previously assigned mentors for a specific student.
- **URL Params:**
  - `students` - The ID of the student.
- **Response:**
    ```json
  {
    "previousMentors": []
  }
    ```

### 7. List Students without a Mentor

- URL: `/students/list`
- Method: `GET`
- Description: Lists all students who do not currently have a mentor assigned.
- Response:
    ```json
    {
    "message": "Students created successfully",
    "students": [
        {
            "_id": "66db355ef367618dfbb6f8dc",
            "name": "Alice Johnson",
            "email": "alice.johnson@example.com",
            "major": "Software Engineering",
            "year_of_study": 2,
            "previousMentors": [],
            "createdAt": "2024-09-06T17:01:18.381Z",
            "updatedAt": "2024-09-06T17:01:18.381Z",
            "__v": 0
        },
        {
            "_id": "66db355ef367618dfbb6f8dd",
            "name": "Bob Brown",
            "email": "bob.brown@example.com",
            "major": "Embedded Engineering",
            "year_of_study": 3,
            "previousMentors": [],
            "createdAt": "2024-09-06T17:01:18.381Z",
            "updatedAt": "2024-09-06T17:01:18.381Z",
            "__v": 0
        }
    ]
  }
    ```

## Models

### Mentor Model
- `name`: String
- `email`: String
- `expertise`: String
- `students`: Array of student IDs

### Student Model
- `name`: String
- `email`: String
- `major`: String
- `year_of_study`: Number
- `mentorId`: Mentor ID reference
- `previousMentors`: Array of previous mentor IDs
