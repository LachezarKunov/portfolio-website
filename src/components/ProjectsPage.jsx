import React from 'react';
import './ProjectsPage.css';
import ProjectCard from './ProjectCard';

function ProjectsPage (){
    return (
        <>  
        <h2>C++ Projects</h2>
        <div className='cards-container'>
            <ProjectCard title = 'MultiSet' description='Developed a C++
            multiset that efficiently stores large sets of numbers using just 1 bit
            per element, leading to substantial memory savings, especially for large
            datasets. It uses bit operations, making it effective for applications
            with limited memory resources. This project was a homework assignment for 
            the OOP C++ course at university and received a perfect score!'
            githubURL={'https://github.com/LachezarKunov/Object-Oriented-Programming/tree/main/Homework-1'}>
            </ProjectCard>

            <ProjectCard title = 'String' description ='Developed a custom C++ string class with a focus on efficient 
            memory management and high performance. 
            The string dynamically allocates memory, resizing the buffer only when necessary to optimize performance. 
            To reduce reallocation overhead, the capacity doubles when the string exceeds its current size. 
            The class includes operations like concatenation, comparison, and different operators.'
            githubURL={'https://github.com/LachezarKunov/Object-Oriented-Programming/tree/main/String'}></ProjectCard>

            <ProjectCard title = 'StringView' description='This StringView class was developed to provide a lightweight, 
            non-owning view of a string segment by 
            using pointers to the string beginning and end. It offers functions for accessing the string’s length, indexing characters, 
            and extracting substrings while ensuring bounds checking.'
            githubURL={'https://github.com/LachezarKunov/Object-Oriented-Programming/tree/main/StringView'}
            ></ProjectCard>
        </div>

        <h2>React Projects</h2>
        <div className = 'cards-container'>
            <ProjectCard title='Portfolio Website' description = {'This portfolio project, created using React, showcases a variety of my work across multiple programming languages, including C++, HTML, CSS, and JavaScript.'} githubURL={'https://github.com/LachezarKunov/portfolio-website'}></ProjectCard>
            <ProjectCard></ProjectCard>
            <ProjectCard></ProjectCard>
        </div>

        <h2>HTML, CSS, JS Projects</h2>
        <div className = 'cards-container'>
            <ProjectCard title = 'Tic Tac Toe' description={'Developed a fully functional Tic Tac Toe web app using HTML, CSS, and JavaScript. The game allows two players to take turns marking the grid, and it dynamically checks for win conditions or ties. It features a clean, responsive design with a user-friendly interface.'} githubURL={'https://lachezarkunov.github.io/tic-tac-toe/'} demoURL={'https://lachezarkunov.github.io/tic-tac-toe/'}></ProjectCard>
            <ProjectCard title = 'Rock Paper Scissors' description={'I created a Rock-Paper-Scissors web app using HTML, CSS, and JavaScript. The game enables players to select their choice and compete against a computer opponent, with real-time score tracking and round outcomes displayed on the screen. Its simple and engaging design ensures a fun user experience while showcasing basic interactive features.'} githubURL={'https://lachezarkunov.github.io/rock-paper-scissors-2024/'} demoURL={'https://lachezarkunov.github.io/rock-paper-scissors-2024/'}></ProjectCard>
            <ProjectCard title = 'SketchPad' description={'I developed a Sketchpad web app using HTML, CSS, and JavaScript that allows users to draw freely on a customizable grid. Users can easily change the grid size, enabling various levels of detail in their artwork.'} githubURL={'https://github.com/LachezarKunov/SketchPad-Project'} demoURL={'https://lachezarkunov.github.io/SketchPad-Project/'}></ProjectCard>
        </div>
        </>
    )  
    
}

export default ProjectsPage;