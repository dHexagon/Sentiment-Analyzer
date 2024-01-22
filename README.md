# Sentiment Analysis for Call Centers
Our project is a comprehensive solution designed for sentiment analysis of incoming calls in helpdesks, call centers, and customer services. Leveraging machine learning in the backend, our full-stack web application enables businesses to gain valuable insights into customer sentiments during phone conversations.

## Instructions to set-up and run
        Follow instructions given in each folder's README file (client, server, and model), to set up the application. 

## Key Features


#### User Authentication
1. Admins and employees have secure log-in credentials.
2. Admin-only sign-up allows for controlled access. (Meaning only admins can sign up and create accounts on their own, for employees, an admin has to create said employee's account)

#### Admin Dashboard
1. Admins can create employee profiles for tracking purposes.
2. Admins can view their top 3 employees based on their ratings.

#### Employee Dashboard
1. Employees can log in to view their individual ratings based on call sentiment analysis.

#### Audio Processing
1. Admins can input audio files associated with specific employees.
2. Machine learning models in the backend analyze the audio content.
3. Results from sentiment analysis are stored in a database under the respective employee's name.
4. There are two audio input methods available
    a) Record live audio (for testing purposes, to check if the model gives proper output), whose output will be displayed as soon it is processed by the ML model. 
    b) Upload a audio file, with a employee name/ID, to analyze the audio and store the results. 


#### Call Details 
###### Clicking on a specific call in the frontend provides:
1. Call rating.
2. Emotional variation graph of the customer along the duration of the call.
3. Identification of potential issues.

#### Benefits
1. Gain insights into customer satisfaction.
2. Identify potential issues and areas for improvement.
3. Efficiently track and evaluate employee performance in handling calls.

Made with <3 by dHexagon