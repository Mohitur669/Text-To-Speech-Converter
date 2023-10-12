# SpeakIT: A Text to Speech Converter using AWS Polly

This is text-to-speech converter using [AWS Polly](https://aws.amazon.com/polly/) service. It is a simple web application that takes text as input and converts it to speech.

## Live Site

The project is hosted on Netlify and can be accessed [here](https://mohitur-text-to-speech.netlify.app/).

## Features

- Text to speech conversion
- Listen to the audio directly
- Download the speech as an audio file
- Progress bar to show the audio playing progress

## Tech Stack

- React.js
- AWS Polly

## Prerequisites

- AWS Account
- AWS IAM user with a access key and secret key
- AWS `AmazonPollyFullAccess` policy granted to the IAM user

Don't worry AWS free tier grants 5 million characters per month (for using AWS Polly) for the first 12 months.

## Local Setup

- Clone the repository
- Install node modules using `npm install`
- Create a `.env` file in the root directory and add the following environment variables:

```
REACT_APP_CLIENTID=<your_aws_access_key_id>
REACT_APP_SECRETKEY=<your_aws_secret_access_key>
REACT_APP_REGION=<your_aws_region>
```

## Run Locally

- Run the application using `npm start`
- Open [http://localhost:3000](http://localhost:3000) to view it in the browser.

## Connect with me
- [LinkedIn](https://www.linkedin.com/in/mohitur02/)
