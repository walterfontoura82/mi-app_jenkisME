pipeline{
    agent {
        docker {
            image 'node:18-alpine'
        }
    }
    stages{
        stage('Instalar depenndencias'){
            steps{
                echo 'Instalando dependencias'
                // Add build commands here
                sh 'npm ci || npm install'
                echo 'Dependencias instaladas'
            }
        }
        stage('Ejecutar pruebas'){
            steps{
                echo 'Ejecutando pruebas...'
                // Add test commands here
                sh 'npm test'
                echo 'Pruebas finalizadas'
            }
        } 
        }//end of stage
    post {
        success {
            echo 'Pipeline ejecutado con éxito'
        }
        failure {
            echo 'Pipeline fallido'
        }
    }

}// end of pipeline