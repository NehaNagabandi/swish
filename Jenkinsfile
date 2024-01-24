pipeline {
    agent { 
        label 'neha'
    }
    stages {
        stage ('docker build') {
            sh "docker build -t frontend ."
        }
    }
}