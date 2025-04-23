# Astrologer User Assignment System

This project involves creating an API to assign users to astrologers. The backend is built using Node.js and Express. The goal is to handle user requests and assign them to astrologers based on certain criteria.

## Project Setup

### Prerequisites
- Node.js
- Express.js
- Postman (for API testing)
- A database (if applicable, for storing user assignments)

### Installation
1. Clone the repository:
   ```bash
   git clone <repository_url>
   ```
2. Navigate to the project directory:
   ```bash
   cd <project_directory>
   ```
3. Install the dependencies:
   ```bash
   npm install
   ```
4. Start the server:
   ```bash
   npm start
   ```
   The server will run at `http://localhost:3000`.

## API Endpoint

### `POST /api/astrologers/assign-user`

This endpoint assigns a user to an astrologer.

**Request Body**:
```json
{
  "userId": "u1",
  "userName": "User One"
}
```

**Response** (Success):
```json
{
  "message": "User successfully assigned to an astrologer."
}
```

**Response** (Error):
```json
{
  "error": "Details about the error."
}
```

## Testing the API

To test the API, we use **Postman**:

1. Set the HTTP method to `POST`.
2. Enter the URL: `http://localhost:3000/api/astrologers/assign-user`.
3. Set the body to `raw` and select `JSON` format.
4. Paste the following JSON into the body:
   ```json
   {
     "userId": "u1",
     "userName": "User One"
   }
   ```
5. Click `Send` to send the request.

### Example Screenshots
## POST
- **Postman Request Screenshot Assign User**:
  ![Postman Request](<https://github.com/Anshika-1311/Flow-Distribution-Algo/blob/main/implementation%20results/Screenshot%20(181).png>)

- **API Response Screenshot**:
  ![API Response](<https://github.com/Anshika-1311/Flow-Distribution-Algo/blob/main/implementation%20results/Screenshot%20(188).png>)
## PUT
- **Screenshot of UPDATING BOOST FACTOR**:
  ![Postman Request](<https://github.com/Anshika-1311/Flow-Distribution-Algo/blob/main/implementation%20results/Screenshot%20(181).png>)

Awesome! Here's the **Markdown section** you can copy into your `README.md` to document the **Flow Distribution Algorithm implementation** — including a place to add your **screenshot**.

## ✅ Flow Distribution Algorithm Implementation

### 🔍 Overview
Implemented a smart algorithm to fairly assign users to astrologers, ensuring:
- Even distribution based on current load
- Higher assignment probability for top astrologers using a weight system

### 🧠 Logic
Each astrologer has:
- `currentLoad`: Number of users currently assigned
- `isTopAstrologer`: Flag to give higher priority
- `weight`: (Default 1) Increased weight boosts selection chance

The assignment logic:
1. Builds a **weighted pool** based on top astrologers' status
2. Sorts the pool by `currentLoad`
3. Assigns the user to the astrologer with the **lowest load**

### 🚀 API Endpoint
**POST** `/api/astrologers/assign-user`

**Request Body**
```json
{
  "userId": "u1",
  "userName": "User One"
}
```

**Sample Response**
```json
{
  "message": "User assigned to astrologer Astro Two",
  "astrologer": {
    "id": "a2",
    "name": "Astro Two",
    "currentLoad": 1,
    "isTopAstrologer": true,
    "weight": 2
  }
}
```

### 📸 Screenshot
# Flow Distribution
![Result](https://github.com/Anshika-1311/Flow-Distribution-Algo/blob/main/implementation%20results/Screenshot%20(191).png)

![Result](https://github.com/Anshika-1311/Flow-Distribution-Algo/blob/main/implementation%20results/Screenshot%20(192).png)

Here's the **README** file in markdown format for the "Goal" section, which explains the task and the functionality we have implemented for toggling the `isTopAstrologer` status by ID.

### README (Goal Section)

# Flow Distribution API Documentation

## Goal: Create an API to toggle `isTopAstrologer` for any astrologer by ID.

### Overview
In this section, we have implemented an API that allows you to toggle the `isTopAstrologer` status for an astrologer. This functionality is useful to dynamically manage astrologers and adjust their prominence based on their boost factor or other criteria.

### Features
- **Toggle `isTopAstrologer`**: This feature allows you to toggle the status of an astrologer as a "top astrologer" based on their ID.
- **PUT Request**: The API uses a `PUT` method to update the `isTopAstrologer` status.
- **Validation**: The system checks for the existence of the astrologer by their ID and ensures that the update is performed correctly.

### API Endpoint

#### `PUT /api/astrologers/:id/boost`

- **Description**: Updates the boost factor for an astrologer and toggles their `isTopAstrologer` status based on the new boost factor.
- **URL Parameters**:
  - `id`: The ID of the astrologer whose `isTopAstrologer` status you want to toggle.
  
- **Request Body**:
  ```json
  {
    "boostFactor": <newBoostFactor>  // The new boost factor to be applied to the astrologer
  }
  ```

- **Response**:
  ```json
  {
    "message": "Boost factor updated",
    "astrologer": {
      "id": "astrologerId",
      "name": "Astrologer Name",
      "boostFactor": <newBoostFactor>,
      "isTopAstrologer": <true/false>  // Whether the astrologer is a top astrologer or not
    }
  }
  ```

### Example Request:

#### Update Boost Factor for Astrologer ID `a1`:

**Request**:
```bash
PUT http://localhost:3000/api/astrologers/a1/boost
```

**Request Body**:
```json
{
  "boostFactor": 2
}
```

**Response**:
```json
{
  "message": "Boost factor updated",
  "astrologer": {
    "id": "a1",
    "name": "Astrologer One",
    "boostFactor": 2,
    "isTopAstrologer": true
  }
}
```

### How It Works:

- The API receives a `PUT` request at `/api/astrologers/:id/boost` with a new `boostFactor` in the request body.
- The astrologer is fetched by the provided `id`. If the astrologer is found, the `boostFactor` is updated.
- The `isTopAstrologer` status is toggled based on the new `boostFactor`:
  - If the `boostFactor` is greater than 1, the astrologer is marked as a "Top Astrologer."
  - If the `boostFactor` is 1 or lower, the astrologer is marked as a regular astrologer.

### Benefits:
- **Dynamic Management**: This functionality allows admins to dynamically manage the status of astrologers without needing to manually update the data.
- **Efficient Handling**: The `PUT` request ensures that the system is efficient and can handle updates to the astrologer’s status and boost factor in a single API call.

---

This concludes the implementation of the toggle `isTopAstrologer` API. It enhances the flexibility of the system by allowing easy management of astrologer statuses based on business requirements.

### 📸 Screenshot
# isTopAstrologer
![Result](https://github.com/Anshika-1311/Flow-Distribution-Algo/blob/main/implementation%20results/Screenshot%20(193).png)

# Flow Distribution Backend - Scalability & Performance

## Goal:
The goal of this section was to improve the **Scalability** and **Performance** of the flow distribution system. We have implemented optimizations to efficiently handle the expected load of 2000-3000 users per day and 500 astrologers.

---

## 1. **Optimizations using Heaps/Priority Queues**

### Why Heaps/Priority Queues?

- **Problem**: The system needs to efficiently assign users to astrologers. Previously, we sorted the entire list of astrologers every time a user needed to be assigned, which could become inefficient as the number of astrologers grows.
  
- **Solution**: We used **Heaps/Priority Queues** to optimize the process of finding the best astrologer. This allows us to efficiently get the astrologer with the least number of effective connections without needing to sort the entire list.

### Implementation

- We replaced the sorting mechanism with a **min-heap** that always provides the astrologer with the least number of current connections.
  
- This ensures that the algorithm operates with a time complexity of **O(log n)** for each insertion and removal, compared to the **O(n log n)** complexity for sorting.

#### Example Code:
```javascript
const Heap = require('heap-js');  // Import the heap library

exports.assignUserToAstrologer = (user) => {
  // Create a heap based on effectiveConnections
  let heap = new Heap((a, b) => a.effectiveConnections - b.effectiveConnections);

  // Add astrologers to the heap
  astrologers.forEach(astro => heap.push(astro));

  // Get the astrologer with the least effective connections
  const assignedAstrologer = heap.pop();
  assignedAstrologer.currentConnections += 1;

  return assignedAstrologer;
};
```

---

## 2. **Caching with Redis**

### Why Caching?

- **Problem**: Frequently accessed data like astrologer assignments were recalculated every time a request was made. This caused unnecessary computations and increased response times.
  
- **Solution**: We introduced **Redis caching** to store frequently accessed data like astrologer assignments. By doing this, we reduce redundant database calls and improve the performance.

### Implementation

- We used **Redis** to cache astrologer assignments for a fixed period (e.g., 1 hour) to reduce repeated database queries.
  
- When an assignment request is made, we first check if the result is cached. If it is, we serve the cached data. Otherwise, we calculate the assignment, cache it, and return the result.

#### Example Code:
```javascript
const redis = require('redis');
const client = redis.createClient();

// Cache user assignments to astrologers
exports.cacheAssignment = (cacheKey, astrologer) => {
  client.setex(cacheKey, 3600, JSON.stringify(astrologer)); // Cache for 1 hour
};

exports.getCachedAssignment = (cacheKey, callback) => {
  client.get(cacheKey, (err, result) => {
    if (result) {
      callback(JSON.parse(result)); // Return cached data
    } else {
      callback(null); // No cached data
    }
  });
};
```

---

## 3. **Database Query Optimization**

### Why Database Optimization?

- **Problem**: As the number of astrologers and users grows, querying the database for assignments can become slow if the database is not optimized.
  
- **Solution**: We optimized database queries by adding **indexes** on frequently queried fields like `boostFactor` and `isTopAstrologer`. This helps the database quickly retrieve the necessary rows without having to scan the entire table.

### Implementation

- We added **indexes** in the database schema to improve the speed of querying for astrologers based on `boostFactor` and `isTopAstrologer`.

#### Example Code:
```sql
CREATE INDEX idx_boost_factor ON astrologers(boostFactor);
CREATE INDEX idx_is_top_astrologer ON astrologers(isTopAstrologer);
```

- **Pagination**: We also implemented pagination in our queries to load data in smaller chunks, which prevents loading the entire list of astrologers at once.

---

## 4. **Stress Testing**

### Why Stress Testing?

- **Problem**: To ensure the system can handle the expected user load (2000-3000 users/day), we need to simulate high traffic and test how the system performs under load.
  
- **Solution**: We used **Artillery** to simulate a large number of users interacting with the system and measure how well it performs.

### Implementation

- We created a **performance test** using Artillery, simulating a load of 100 users per second for 60 seconds.

#### Example Artillery Test:
```yaml
config:
  target: 'http://localhost:3000'
  phases:
    - duration: 60
      arrivalRate: 100  # Simulate 100 users per second

scenarios:
  - flow:
      - get:
          url: "/api/astrologers/assign-user"
          json:
            userId: "u1"
            userName: "User One"
```

- To run the test, use the command:
  ```bash
  artillery run tests/performanceTest.yml
  ```

---

## Conclusion

By implementing **heaps/priority queues**, **caching with Redis**, **database optimizations**, and conducting **stress testing**, we have significantly improved the **scalability** and **performance** of the system, allowing it to handle a high user load efficiently.

### Next Steps:

- **Monitor the system**: Continuously monitor the system’s performance under real-world usage to detect any potential bottlenecks.
- **Refinement**: Based on the performance test results, further optimize specific areas of the code if necessary.


### How to use:
1. **Heap/Priority Queue**: We've replaced the sorting mechanism with a heap to improve performance for user assignment.
2. **Redis Caching**: We've integrated Redis to cache astrologer assignments to speed up responses.
3. **Database Optimization**: We added indexing and pagination in the database to speed up queries.
4. **Stress Testing**: We've used Artillery to simulate high traffic and tested how the system handles heavy loads.


  
## Contributing

1. Fork the repository.
2. Create your feature branch (`git checkout -b feature-name`).
3. Commit your changes (`git commit -am 'Add feature'`).
4. Push to the branch (`git push origin feature-name`).
5. Open a pull request.

## License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.
