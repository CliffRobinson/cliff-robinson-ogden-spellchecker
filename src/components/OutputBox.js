export function OutputBox({wordArray}) {

    return (<div>
        {wordArray.map(word => {
            const styleObj = word.spelling ? {color:"black"} : {color:"red"}
            return <span style={styleObj}>{word.word} </span>
        })}
    </div>)
}