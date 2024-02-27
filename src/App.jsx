import './assets/css/index.css'
import Header from "./components/Header.jsx";
import CourseItem from "./components/CourseItem.jsx";

function App() {

    return (
        <>
            <Header/>
            <section>
                <CourseItem
                    image="https://img-c.udemycdn.com/course/240x135/1589248_f533_5.jpg"
                    title="İngilizce"
                    price="₺139,99"
                />
            </section>
        </>
    )
}

export default App
