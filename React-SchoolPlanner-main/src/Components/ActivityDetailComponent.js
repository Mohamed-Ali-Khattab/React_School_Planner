import React from 'react';
import { Link } from "react-router-dom";

function Activity(props) {
    const [groupsList, setGroups] = React.useState([]);
    const [classesList, setClasses] = React.useState([]);
    const [teachersList, setTeachers] = React.useState([]);
    const [activity, setActivity] = React.useState([]);

    const [group, setGroup] = React.useState("");
    const [clas, setClass] = React.useState("");
    const [teacher, setTeacher] = React.useState("");

    React.useEffect(() => {
        async function fetchGroupsList() {
            let response = await fetch(`/dictionaryList?dictionary=groups`)
            response = await response.json()
            setGroups(response)
        }

        async function fetchClassesList() {
            let response = await fetch(`/dictionaryList?dictionary=classes`)
            response = await response.json()
            setClasses(response)
        }

        async function fetchTeachersList() {
            let response = await fetch(`/dictionaryList?dictionary=teachers`)
            response = await response.json()
            setTeachers(response)
        }

        async function fetchActivityDetail() {
            console.log(props.location.state.slot);
            await fetch(`/activityDetail?room=${props.location.state.room}&slot=${props.location.state.slot}&day=${props.location.state.day}`)
                .then(response => response.json()).then(response => setActivity(response)).catch(error => { console.log(error) });
        }

        fetchGroupsList();
        fetchClassesList();
        fetchTeachersList();
        fetchActivityDetail();
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [])

    React.useEffect(() => {
        function setDefault() {
            console.log(activity)
            if (activity !== undefined && activity.length !== 0) {
                setGroup(activity.group);
                setClass(activity.class);
                setTeacher(activity.teacher);
            } else {
                setGroup(groupsList[0]);
                setClass(classesList[0])
                setTeacher(teachersList[0]);
            }
        }

        setDefault();
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [activity])


    const goToTimeTable = () => {
        let room = props.location.state.room;
        return { pathname: "/", state: { room } }
    }

    const unassign = async () => {
        await fetch(`/unassignEntry`, {
            method: "POST",
            headers: {
                'Accept': 'application/json',
                'Content-Type': 'application/json',
            },
            body: JSON.stringify(
                {
                    room: `${props.location.state.room}`,
                    day: `${props.location.state.day}`,
                    slot: `${props.location.state.slot}`
                }
            )
        })
        console.log("unassigned")
    }

    const saveEntry = async function (event) {
        event.preventDefault();
        var group = document.getElementById("group").value;
        var clas = document.getElementById("class").value;
        var teacher = document.getElementById("teacher").value;
        console.log("data", group, clas, teacher)
        console.log("save push", group, clas, teacher)

        console.log(props.location.state.slot)
        await fetch(`/saveActivity`, {
            method: "POST",
            headers: {
                'Accept': 'application/json',
                'Content-Type': 'application/json',
            },
            body: JSON.stringify(
                {
                    room: `${props.location.state.room}`,
                    slot: `${props.location.state.slot}`,
                    day: `${props.location.state.day}`,
                    group: `${group}`,
                    class: `${clas}`,
                    teacher: `${teacher}`
                })
        }).then(() => {
            props.history.push({ pathname: "/emploi", state: { room: props.location.state.room } });
        });
    }

    return (
        <div className="div-spaces">
            <form id="entry" onSubmit={saveEntry}>
                <table>
                    <tr>
                        <td>Salle</td>
                        <td>
                            <input className="input-data" name="room" value={props.location.state.room} readOnly />
                        </td>
                    </tr>
                    <tr>
                        <td>rang</td>
                        <td>
                            <input className="input-data" name="slot" value={props.location.state.slot} readOnly />
                        </td>
                    </tr>
                    <tr>
                        <td>Jour</td>
                        <td>
                            <input className="input-data" name="day" value={props.location.state.day} readOnly />
                        </td>
                    </tr>
                    <tr>
                        <td>Groupe</td>
                        <td>
                            <select name="group" id="group" value={group} onChange={e => setGroup(e.target.value)}>
                                {groupsList.map(r =>
                                    <option key={r} defaultValue={r}>{r}</option>
                                )}
                            </select>
                        </td>
                    </tr>
                    <tr>
                        <td>Classe</td>
                        <td>
                            <select name="class" id="class" value={clas} onChange={e => setClass(e.target.value)}>
                                {classesList.map(r =>
                                    <option key={r} defaultValue={r}>{r}</option>
                                )}
                            </select>
                        </td>
                    </tr>
                    <tr>
                        <td>Enseignant</td>
                        <td>
                            <select name="teacher" id="teacher" value={teacher} onChange={e => setTeacher(e.target.value)}>
                                {teachersList.map(r =>
                                    <option key={r} defaultValue={r}>{r}</option>
                                )}
                            </select>
                        </td>
                    </tr>
                </table>
                <button className="button1" type="submit">Enregister </button>
            </form>
            <div>
                <Link to={goToTimeTable} className="btn btn-primary">
                    <button className="button3">Annuler</button>
                </Link>
                {(activity !== undefined && activity.length !== 0) &&
                    <Link to={goToTimeTable} className="btn btn-primary">
                        <button className="button5" onClick={unassign}>Vider</button>
                    </Link>
                }
            </div>
        </div>
    )
}

export default Activity;