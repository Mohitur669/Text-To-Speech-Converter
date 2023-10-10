import '../App.css'

const Section = ({text, setText, convertTextToSpeech}) => {

    return (
        <div className="section-container">
            <textarea
                value={text}
                style={{padding: 15}}
                placeholder='Write your text to convert. After converting click the play button below to play.'
                onChange={(e) => setText(e.target.value)}>
            </textarea>
            <button className='btn-convert' onClick={() => convertTextToSpeech()} >Convert to Speech</button>
        </div>
    )
}

export default Section