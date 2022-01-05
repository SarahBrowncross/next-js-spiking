function Courses({ courses }) {
    console.log(courses)
    return <div>{courses.contents.jokes[0].joke.text}</div>

}

export async function getStaticPaths() {

    const paths = [{ params: { courseName: '1' } }, { params: { courseName: '2' } }]

    return { paths, fallback: false }
}

export async function getServerSideProps() {
    const res = await fetch('https://api.jokes.one/jod')
    const courses = await res.json()

    return {
        props: { courses }
    }
}

export default Courses