import { useState, useEffect } from 'react';
import Box from '@mui/material/Box';
import Project from '../components/Project'
import axios from 'axios';
//import VisibilitySensor from 'react-visibility-sensor';

export default function Projects() {
    const [pinned, setPinned] = useState([])
    const [projects, setProjects] = useState([])

    const pin = ['node-sysutil', 'react-tetris', 'realtime-ocr', 'limo-app']
    const filtered = ['react-portfolio', 'omiinaya']

    const getRepos = () => {
        axios.get(`https://api.github.com/users/omiinaya/repos?per_page=100`)
            .then(res => {
                var data = res.data
                var repos = data.filter(repo => !filtered.includes(repo.name))
                var favorites = data.filter(repo => pin.includes(repo.name))
                setPinned(favorites)
                setProjects(repos)
            })
    }

    useEffect(() => {
        getRepos()
    }, []);
    
    useEffect(() => {
        console.log(pinned)
    }, [pinned]);

    return (
        <Box>
            <Box
                justifyContent='center'
                sx={{
                    display: { xs: 'none', sm: 'none', md: 'flex', lg: 'flex', xl: 'flex' },
                }}
            >
                {projects.length > 0 &&
                    <Project
                        projects={projects}
                        pinned={pinned}
                        filtered={filtered}
                        mobile={false}
                    />
                }
            </Box>
            <Box
                justifyContent='center'
                sx={{
                    display: { xs: 'flex', sm: 'flex', md: 'none', lg: 'none', xl: 'none' },
                }}
            >
                {projects.length > 0 &&
                    <Project
                        projects={projects}
                        pinned={pinned}
                        filtered={filtered}
                        mobile={true}
                    />
                }
            </Box>
        </Box>
    );
}
