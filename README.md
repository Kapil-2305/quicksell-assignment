# QuickSell Assignment for Frontend role - [Link](https://quicksell-assignment-kapil-paliwal.vercel.app/)

![QuickSell-Assignment-Page](https://res.cloudinary.com/dgpkeaffc/image/upload/v1726202630/Screenshot_2024-09-13_at_10.13.02_AM_v7cmry.png)

# API
They have given an [api](https://api.quicksell.co/v1/internal/frontend-assignment) to fetch data and show it on our kanban board.

`API = "https://api.quicksell.co/v1/internal/frontend-assignment"`

# Flow of data in components
At the starting we fetch data in App.js file and then with the help of props we will send this data to Grid.js --> Column.js --> Card.js

[View on Eraser![](https://app.eraser.io/workspace/UmKsJq9DDyjzlXqF6MSu/preview?elements=sOcd2eogzgXf8J6TT0ZnyA&type=embed)](https://app.eraser.io/workspace/UmKsJq9DDyjzlXqF6MSu?elements=sOcd2eogzgXf8J6TT0ZnyA)

Here is the breakdown of the flow of data.
![data-flow-diagram](https://res.cloudinary.com/dgpkeaffc/image/upload/v1726205319/Screenshot_2024-09-13_at_10.58.15_AM_vvmohw.png)

# Documentation

**The application is offering three distinct ways to group the data:**

- **By Status**: Group tickets based on their current status.
- **By User**: Arrange tickets according to the assigned user.
- **By Priority**: Group tickets based on their priority level.

**Users can also be able to sort the displayed tickets in two ways:**

- **Priority**: Arrange tickets in descending order of priority.
- **Title**: Sort tickets in ascending order based on their title.

The Kanban is responsive and visually appealing, with a design similar to the provided screenshots. 

**The priority levels for the tickets are as follows:**

- Urgent (Priority level 4)
- High (Priority level 3)
- Medium (Priority level 2)
- Low (Priority level 1)
- No priority (Priority level 0)

**Priority levels: (This values you will receive in the api)**

- 4 - Urgent
- 3 - High
- 2 - Medium
- 1 - Low
- 0 - No priority

## Run Locally

Clone the project

```bash
  git clone https://github.com/Kapil-2305/quicksell-assignment.git
```

Go to the project directory

```bash
  cd my-project
```

Install dependencies

```bash
  npm install
```

Start the server

```bash
  npm run start
```

## Environment Variables

To run this project, you will need to add the following environment variables to your .env file

`REACT_APP_API_URL`

And the value of this environment variable is the api provided above.