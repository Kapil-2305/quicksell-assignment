import './App.css';
import { useCallback, useEffect, useState } from 'react';
import { loadGrid, mapUsersByUserId } from './utils';
import Header from './components/Header';
import Loader from './components/Loader';
import Grid from './components/Grid';

const GET_TICKETS_URL = process.env.REACT_APP_API_URL;

function App() {
    console.log(GET_TICKETS_URL);
    const [tickets, setTickets] = useState([]);
    const [userData, setUserData] = useState({});
    const [gridData, setGridData] = useState({});

    const [grouping, setGrouping] = useState("status");
    const [ordering, setOrdering] = useState("priority");

    const [loading, setLoading] = useState(true);

    useEffect(() => {
        const fetchData = async () => {
            try {
                loadSettings();

                if (!GET_TICKETS_URL) {
                    throw new Error('API URL not defined');
                }
    
                const response = await fetch(GET_TICKETS_URL);
                
                if (!response.ok) {
                    throw new Error(`Error fetching data: ${response.status} - ${response.statusText}`);
                }
    
                const res = await response.json();
    
                if (!res.tickets || !res.users) {
                    throw new Error("Malformed response data");
                }

                setTickets(res.tickets);
                setUserData(mapUsersByUserId(res.users));
            } catch (error) {
                console.error(error.message);
            } finally {
                setLoading(false);
            }
        };
    
        fetchData();
    }, []);

    useEffect(() => {
        if (!tickets.length) 
            return;
        
        setGridData(loadGrid(tickets, grouping, ordering));
        setLoading(false);
    }, [grouping, ordering, tickets]);

    const onSetGrouping = useCallback((value) => {
        setLoading(true);
        setGrouping(value);
        saveSettings({ grouping: value });
    }, []);

    const onSetOrdering = useCallback((value) => {
        setLoading(true);
        setOrdering(value);
        saveSettings({ ordering: value });
    }, []);

    const saveSettings = useCallback((data) => {
        for (let key in data) {
            localStorage.setItem(key, data[key]);
        }
    }, []);

    const loadSettings = useCallback(() => {
        const storedGrouping = localStorage.getItem("grouping");
        const storedOrdering = localStorage.getItem("ordering");
        setGrouping(storedGrouping || "status");
        setOrdering(storedOrdering || "priority");
    }, []);

    return (
        <div className="App">
            <Header grouping={grouping} setGrouping={onSetGrouping} ordering={ordering} setOrdering={onSetOrdering} />
            {loading ? <Loader /> :
                <Grid gridData={gridData} grouping={grouping} userIdToData={userData} />
            }
        </div>
    );
}

export default App;
