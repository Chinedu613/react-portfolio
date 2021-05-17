import React from 'react'
import budgetTrack from './../../img/BudgetTrack.png'
import employeeDirectory from './../../img/EmployeeDirectory.png'
import mealMentor from './../../img/mealMentor.png'
import techBlog from './../../img/Tech-Blog.png'
import workOutLogger from './../../img/Workout-Logger.png'
import movieRoulette from './../../img/movie-roulette.png'

function MyWork() {
    return (
        <section className="my-work" id="work">
        <h2 className="section__title--work">My work</h2>
        <p className="section__subtitle section__subtitle--work">A Selection of My Work</p>
        
        <div className="portfolio">
                        
       {/*  <!-- Portfolio item 01 --> */}
                <a href="vast-gorge-08911.herokuapp.com/" class="portfolio__item">
                    <img src={budgetTrack} alt="budget Track" class="portfolio__img" />
                </a>
                
                {/* <!-- Portfolio item 02 --> */}
                <a href="https://chinedu613.github.io/Employee-Directory/" class="portfolio__item">
                    <img src={employeeDirectory} alt="employee directory" class="portfolio__img" />
                </a>
                
                {/* <!-- Portfolio item 03 --> */}
                <a href="https://github.com/Chinedu613/the_meal_mentor" class="portfolio__item">
                    <img src={mealMentor} alt="application" class="portfolio__img" />
                </a>
                
                {/* <!-- Portfolio item 04 --> */}
                <a href="https://github.com/Chinedu613/handlebars_techblog" class="portfolio__item">
                    <img src={techBlog} alt="application" class="portfolio__img" />
                </a>
                
                {/* <!-- Portfolio item 05 --> */}
                <a href="https://github.com/Chinedu613/Fitness-Logger" class="portfolio__item">
                    <img src={workOutLogger} alt="application" class="portfolio__img" />
                </a>
                
                {/* <!-- Portfolio item 06 --> */}
                <a href="https://github.com/Chinedu613/Movie-Roulette" class="portfolio__item">
                    <img src={movieRoulette} alt="application" class="portfolio__img" />
                </a>

        </div>
    </section>
    );
};

export default MyWork;