import styles from "./styles.module.css"
import Tasks from "../../components/tasks"
import { useContext, useState } from "react"
import ThemeContext from "../../theme/ThemeContext"
import {} from './styles'




const Home = () => {
    
    const [tasks,setTasks] = useState([
        { id: 1, text: "Jog around the park", complete: true },
        { id: 2, text: "Drink water", complete: true },
        { id: 3, text: "Finish this todo app", complete: false },
        { id: 4, text: "Learn Reactjs", complete: false },
    ])
    const { theme: theme, toggleTheme: toggleTheme } = useContext(ThemeContext)

    function deleteTask(id){
        console.log(tasks)
        setTasks(currentValue => {
            let newTasks = currentValue.filter((task => task.id != id))

            return newTasks
        })
        console.log(tasks)
    }
    function addTask(id,text,complete){
        setTasks([...tasks,{id,text,complete}])
    }

    return (
        <div className={styles.container}>
            <div className={styles[`header_${theme}`]}> </div>
            <div className={styles[`content_${theme}`]}>
                <Tasks deleteTask={deleteTask} addTask={addTask}tasks={tasks} />
            </div>
        </div>


    )
}
export default Home
