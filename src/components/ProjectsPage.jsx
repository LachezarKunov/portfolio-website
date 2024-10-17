import React from 'react';
import './ProjectsPage.css';
import ProjectCard from './ProjectCard';
import SectionTitle from './SectionTitle';
import CardContainer from './CardContainer';

function ProjectsPage (){
    return (
        <>  
        <h1>Personal Projects</h1>

        <SectionTitle imgSrc='../../public/assets/cpp-logo.png' title = 'Projects'></SectionTitle>

        <p className = 'technology-paragraph'>I appreciate C++ for its speed and efficient memory management. Starting at university, I gained a deep understanding of its core principles and advanced features. This strong foundation not only allows me to handle complex projects but also broadens my understanding of concepts in other programming languages.
        </p>

        <CardContainer>
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
        </CardContainer>

        
        <SectionTitle imgSrc='../../public/assets/react-logo.png' title = 'Projects'></SectionTitle>

        <p className = 'technology-paragraph'>
            React is a dynamic and versatile JavaScript library that I have grown enthusiastic about throughout my learning journey. I initially began teaching myself React, 
            driven by a passion for building interactive user interfaces, 
            before formalizing my knowledge through an elective course at university.
        </p>

        <CardContainer>
            <ProjectCard title='Portfolio Website' description = {'This portfolio project, created using React, showcases a variety of my work across multiple programming languages, including C++, HTML, CSS, JavaScript and React.'} githubURL={'https://github.com/LachezarKunov/portfolio-website'}></ProjectCard>
            <ProjectCard></ProjectCard>
            <ProjectCard></ProjectCard>

            <ProjectCard></ProjectCard>
            <ProjectCard></ProjectCard>
            <ProjectCard></ProjectCard>
        </CardContainer>

        
        <SectionTitle imgSrc = '../../public/assets/htmlcssjs-logo.png' title = 'Projects'></SectionTitle>

        <p className = 'technology-paragraph'>
        Working with HTML, CSS, and JavaScript has shaped my web development skills and fueled my passion for building websites. 
        These core technologies provided a solid foundation that helped me understand React’s component-based structure and 
        dynamic behavior.
        </p>

        <CardContainer>
            <ProjectCard title = 'Tic Tac Toe' description={'Developed a fully functional Tic Tac Toe web app using HTML, CSS, and JavaScript. The game allows two players to take turns marking the grid, and it dynamically checks for win conditions or ties. It features a clean, responsive design with a user-friendly interface.'} githubURL={'https://github.com/LachezarKunov/tic-tac-toe'} demoURL={'https://lachezarkunov.github.io/tic-tac-toe/'}></ProjectCard>
            <ProjectCard title = 'Rock Paper Scissors' description={'I created a Rock-Paper-Scissors web app using HTML, CSS, and JavaScript. The game enables players to select their choice and compete against a computer opponent, with real-time score tracking and round outcomes displayed on the screen. Its simple and engaging design ensures a fun user experience while showcasing basic interactive features.'} githubURL={'https://github.com/LachezarKunov/rock-paper-scissors-2024'} demoURL={'https://lachezarkunov.github.io/rock-paper-scissors-2024/'}></ProjectCard>
            <ProjectCard title = 'SketchPad' description={'I developed a Sketchpad web app using HTML, CSS, and JavaScript that allows users to draw freely on a customizable grid. Users can easily change the grid size, enabling various levels of detail in their artwork.'} githubURL={'https://github.com/LachezarKunov/SketchPad-Project'} demoURL={'https://lachezarkunov.github.io/SketchPad-Project/'}></ProjectCard>
        </CardContainer>
        </>
    )  
    
}

export default ProjectsPage;