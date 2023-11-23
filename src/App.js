import './App.css';
import Header from './components/Header';
import Section from './components/Section';
import {useState} from 'react';
import AWS from 'aws-sdk';
import {toast, Toaster} from 'react-hot-toast'; // Import toast from react-hot-toast
import AudioPlayer from './components/AudioPlayer';

AWS.config.update({
    accessKeyId: process.env.REACT_APP_CLIENTID,
    secretAccessKey: process.env.REACT_APP_SECRETKEY,
    region: process.env.REACT_APP_REGION
})

const polly = new AWS.Polly();

function App() {

    const [text, setText] = useState('');
    const [audioFile, setAudioFile] = useState();

    const convertTextToSpeech = () => {
        polly.synthesizeSpeech({
            Text: text,
            OutputFormat: 'mp3',
            VoiceId: 'Salli'
        }, (error, data) => {
            if (error) {
                //console.log(error);
                toast.error('Something went wrong!');
            } else {
                //console.log(data);
                setAudioFile(data);
                // Show toast notification on successful conversion
                toast.success('Text converted to speech successfully!');
            }
        });
    }

    return (
        <>
            <div className="container">
                <Header />
                <Section text={text} setText={setText} convertTextToSpeech={convertTextToSpeech} />
            </div>
            <Toaster
                position="top-right"
                reverseOrder={false}
            />
            <AudioPlayer audioFile={audioFile} />
        </>
    );
}

export default App;