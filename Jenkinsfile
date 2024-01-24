pipeline {
    agent { 
        label 'neha'
    }
    environment {
        DOCKER_TAG = "${currentBuild.number}"
        PROJECT = "frontend"
    }
    stages {
        stage ("docker build") {
            steps {
                sh "docker build -t ${PROJECT}-${DOCKER_TAG} ."
            }
            
        }
        stage ("docker push") {
            steps {
                sh "aws ecr get-login-password --region us-east-1 | docker login --username AWS --password-stdin 851725544977.dkr.ecr.us-east-1.amazonaws.com"
                sh "docker tag ${PROJECT}-${DOCKER_TAG} 851725544977.dkr.ecr.us-east-1.amazonaws.com/${PROJECT}-${DOCKER_TAG}"
                sh "docker push 851725544977.dkr.ecr.us-east-1.amazonaws.com/${PROJECT}-${DOCKER_TAG}"
                sh "docker system prune -af"
            }
        }
    }
}