import React, {useState} from "react";
import WelcomeBox from "./blocks_learniac/WelcomeBox";
import PointWelcome from "./blocks_learniac/PointWelcome";
import PointCourse from "./blocks_learniac/PointCourse";
import PointLearning from "./blocks_learniac/PointLearning";
import PointInfo from "./blocks_learniac/PointInfo";
import Contacts from "./blocks_learniac/Contacts";
import PointUnits from "./blocks_learniac/PointUnits";
function Editor3 ()
{
    const [showWelcomeBox, setShowWelcomeBox] = useState(false);
    const [showPointWelcome, setShowPointWelcome] = useState(false);
    const [showPointCourse, setShowPointCourse] = useState(false);
    const [showPointUnits, setShowPointUnits] = useState(false);
    const [showPointLearning, setShowPointLearning] = useState(false);
    const [showPointInfo, setShowPointInfo] = useState(false);
    const [showContacts, setShowContacts] = useState(false);

    return (
        <nav className="editor-navbar">
            <ul>
                <li>
                    <button className={`editor-button ${showWelcomeBox ? 'active' : ''}`} onClick={() => setShowWelcomeBox(!showWelcomeBox)}>WelcomeBox</button>
                    {showWelcomeBox && <WelcomeBox /> }
                </li>
                <li>
                    <button className={`editor-button ${showPointWelcome ? 'active' : ''}`} onClick={() => setShowPointWelcome(!showPointWelcome)}>Willkommen im Kurs</button>
                    {showPointWelcome && <PointWelcome/>}
                </li>
                <li>
                    <button className={`editor-button ${showPointCourse ? 'active' : ''}`} onClick={() => setShowPointCourse(!showPointCourse)}>Kursablauf</button>
                    {showPointCourse && <PointCourse/>}
                </li>
                <li>
                    <button className={`editor-button ${showPointUnits ? 'active' : ''}`} onClick={() => setShowPointUnits(!showPointUnits)}>Deine E-Learning Einheiten</button>
                    {showPointUnits && <PointUnits/>}
                </li>
                <li>
                    <button className={`editor-button ${showPointLearning ? 'active' : ''}`} onClick={() => setShowPointLearning(!showPointLearning)}>Mit E-Learnings lernen</button>
                    {showPointLearning && <PointLearning/>}
                </li>
                <li>
                    <button className={`editor-button ${showPointInfo ? 'active' : ''}`} onClick={() => setShowPointInfo(!showPointInfo)}>Wissenswertes</button>
                    {showPointInfo && <PointInfo/>}
                </li>
                <li>
                    <button className={`editor-button ${showContacts ? 'active' : ''}`} onClick={() => setShowContacts(!showContacts)}>Ansprechperson</button>
                    {showContacts && <Contacts/>}
                </li>
            </ul>
        </nav>
    );
}
export default Editor3;
