import React, { useEffect, useState } from 'react';
import { styled } from '@material-ui/core/styles';
import useHeight from './hooks/useHeight/useHeight';
import { useParams } from 'react-router-dom';
import './App.css';


const Container = styled('div')({
    display: 'grid',
    gridTemplateRows: 'auto 1fr',
});

const Main = styled('main')({
    overflow: 'hidden',
});

function App() {
    const height = useHeight();
    let { URLRoomName, UserName } = useParams();
    const [roomName, setRoomName] = useState(URLRoomName);
    const [userName, setUserName] = useState(UserName);


    const [hasStarted, setHasStarted] = useState(false);
    const [isStarting, setIsStarting] = useState(false);



    return (
        <Container style={{ height }}>
            <Main>

                )
            </Main>
        </Container>
}


export default App;
