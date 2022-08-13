import styles from "./styles.module.css"
import CheckBox from "../checkbox"
import {MdClear} from 'react-icons/md'
import { useRef,useContext } from "react"
import ThemeContext from '../../theme/ThemeContext'
import {MdOutlineLightMode,MdOutlineDarkMode}from 'react-icons/md'
const Tasks = ({tasks,deleteTask,addTask}) => {
    console.log(styles)
    const CheckBoxRef = useRef(null)
    const {theme, toggleTheme} = useContext(ThemeContext)

    return (
        <div className={styles.taskContainer}>
            <div className={styles.titleContainer}>
                <span className={styles.title}>TODO</span>
                <button className={styles.toggleThemeButton} onClick={toggleTheme}>
                    {theme=='dark'?<MdOutlineDarkMode/>:<MdOutlineLightMode/>}
                </button>
            </div>
            <div className={styles[`inputContainer_${theme}`]}>
                <CheckBox ref={CheckBoxRef} id="isNewTaskComplete" checked={false}/>
                <input type="text" placeholder="Type here..."  onKeyDown={(e)=>{
                    if(e.key == 'Enter') {
                        let isComplete = CheckBoxRef.current.checked
                        let text = e.target.value
                        let id = Date.now()
                        
                        addTask(id,text,isComplete)
                        e.target.value = ""
                        if(CheckBoxRef.current.checked) CheckBoxRef.current.click()
                        
                    }
                }}></input>
            </div>
            <div className={styles[`taskContent_${theme}`]}>
                <ul>
                    {tasks.map(({id,text, complete}) =>
                        <li className={styles[`li_${theme}`]}key={id}>
                        <CheckBox id={id} checked={complete}/><label className={styles[`taskText_${theme}`]}htmlFor={id}>{text}</label>
                        <span onClick={()=>{
                            deleteTask(id)
                        }}><MdClear/></span>
                    </li>
                    )}
                </ul>
            </div>
        </div>
    )
}
export default Tasks
