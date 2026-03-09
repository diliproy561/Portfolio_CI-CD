
# 🚀 Portfolio Website Deployment using CI/CD (Jenkins + Docker)

<img width="1862" height="851" alt="Screenshot 2026-03-09 225634" src="https://github.com/user-attachments/assets/5d8d6fa1-50d2-4346-9d5b-a0d74fc4c7a2" />

# 📌 Project Overview

This project demonstrates how to **automatically deploy a portfolio website using a CI/CD pipeline** with **Jenkins and Docker**. Whenever a developer pushes new code to **GitHub**, Jenkins automatically:
```
1️⃣ Clones the repository

2️⃣ Builds a Docker image

3️⃣ Stops the old container

4️⃣ Deploys a new container with the latest code
```
This process ensures **Continuous Integration and Continuous Deployment (CI/CD)**.

# 🖥 Install the jenkins  and Docker :

🔗 Jenkins Official Installation Guide

[https://www.jenkins.io/doc/book/installing/linux/](https://www.jenkins.io/doc/book/installing/linux/)

🔗 Docker Official Installation Guide

[https://docs.docker.com/engine/install/]

# 📦 Create Jenkins Pipeline Job
### Step 1 :  Open Jenkins Dashboard Then Click

```
New Item
```
### Step 2 : Enter job name

```
First-pipeline
```
### Step 3 : Select

```
Pipeline
```

### Step 4
```
Configure pipeline settings.
```
<img width="1677" height="436" alt="image" src="https://github.com/user-attachments/assets/75e448a4-4661-45b0-84d0-d3604eb06873" />

### Step 5 : Add triggers 

<img width="1703" height="432" alt="image" src="https://github.com/user-attachments/assets/cd5116e9-ea88-4699-a34d-05af5c4b8e7e" />

### Step 6 : Pipeline Script

```
pipeline {
    agent any

    stages {

        stage('Clone Repository') {
            steps {
                git branch: 'main', url: 'https://github.com/diliproy561/Portfolio_CI-CD.git'
            }
        }

        stage('Build Docker Image') {
            steps {
                sh 'docker build -t portfolio-image .'
            }
        }

        stage('Stop Old Container') {
            steps {
                sh 'docker stop portfolio-container || true'
                sh 'docker rm portfolio-container || true'
                sh 'docker image prune -f'
            }
        }

        stage('Run Docker Container') {
            steps {
                sh 'docker run -d -p 80:80 --name portfolio-container portfolio-image'
            }
        }

    }
}
```

### Workflow

```
Developer Push Code
        │
        ▼
     GitHub Repo
        │
        ▼
   GitHub Webhook
        │
        ▼
   Jenkins Pipeline
        │
        ▼
Build Docker Image
        │
        ▼
Stop Old Container
        │
        ▼
Run New Container
        │
        ▼
 Website Updated
```

Example:

```
git push origin main
```

Automatically triggers the **Jenkins pipeline**.

# ⚙️ Technologies Used

| Technology   | Purpose                |
| ------------ | ---------------------- |
| GitHub       | Source Code Management |
| Jenkins      | CI/CD Automation       |
| Docker       | Containerization       |
| Linux Server | Hosting Environment    |


## 🔗 GitHub Webhook Setup To automatically trigger Jenkins after every code push.

### Step 1 : Go to GitHub Repository

```
Settings → Webhooks
```

### Step 2 : Add a new webhook

Payload URL

```
http://YOUR_SERVER_IP:8080/github-webhook/
```

Content Type

```
application/json
```

Event Trigger

```
Just the push event
```

# 📂 Project Structure

Example repository structure:

```
Portfolio_CI-CD
│
├── Dockerfile
├── index.html
├── style.css
├── script.js
└── README.md
```

# 🌐 Deployment Result

After successful pipeline execution, the website will be available at:

```
http://YOUR_SERVER_IP
```

Example:

```
http://134.209.101.14
```

Every new commit will automatically update the website.

---

# 🎯 Key Features

✔ Automated CI/CD Deployment
✔ Docker Containerization
✔ GitHub Webhook Integration
✔ Zero Manual Deployment

---

# 👨‍💻 Author

**Dilip Kumar Roy**

