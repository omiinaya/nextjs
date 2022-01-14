import { useState, useEffect } from 'react';
import Box from '@mui/material/Box';
import Project from '../components/Project'
import axios from 'axios';
//import VisibilitySensor from 'react-visibility-sensor';

export default function Projects() {
    const [projects, setProjects] = useState([])

    const getRepos = () => {
        axios.get(`https://api.github.com/users/omiinaya/repos?per_page=100`)
            .then(res => {
                setProjects(res.data)
            })
    }

    useEffect(() => {
        getRepos()
    }, []);

    {/*
    useEffect(() => {
        console.log(projects)
    }, [projects]);
    */}

    const pinned = ['node-sysutil', 'react-tetris', 'realtime-ocr', 'limo-app']
    const filtered = ['react-portfolio']

    return (
        <Box
            display='flex'
            justifyContent='center'
        >
            {projects.length > 0 && <Project projects={projects} pinned={pinned} filtered={filtered} />}
        </Box>
    );
}
