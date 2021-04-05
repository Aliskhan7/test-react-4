const {useState} = require('react')


function Detective(){
    const [sherlock, setSherlock] = useState('психопат');

    return(
        <h1>Шерлок - {sherlock}</h1>
    )
}
export default Detective;