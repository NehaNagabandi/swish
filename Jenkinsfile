pipeline {
    agent { 
        label 'neha'
    }
    stages {
        stage ("docker build") {
            steps {
                sh "docker build -t frontend ."
            }
            
        }
    }
}