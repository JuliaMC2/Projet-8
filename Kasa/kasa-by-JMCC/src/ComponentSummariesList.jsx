import Summary from './ComponentSummary.jsx'

import jsonFile from './assets/logements.json'

export default function SummariesList() {
    const summaries = jsonFile.map(Object => <div className="summary" key={Object.id}>
        <Summary id={Object.id} title={Object.title} cover={Object.cover}/>
        </div>)
    return (
    <>
    {summaries}
    </>)
}