import React from 'react';
import Header from '../header/Header';
import '../MesStyles/Memoires.css'

function Memory () {
    return (
        <>
            <Header />
            <br></br>
            <div className='srch'>
                <input type='text' name='srch' placeholder='Recherchez ici' />
            </div>
            <br />

            <div className='cards'>
                <div class="card">
                    <div class="card-image">
                        <img src='https://img.freepik.com/free-photo/people-office-during-work-day_23-2150690154.jpg?w=1060&t=st=1703894141~exp=1703894741~hmac=2eb27ddfa91d89ed4796f2bc1459d4edd7c531c40dab17672a6f6adae5fddc84' />
                    </div>
                    <div class="category"> L'IA en Afrique </div>
                    <div class="heading">
                        <p>blablablablabl</p>
                        </div>
                </div>

                {/* --------------------------------- */}

                <div class="card">
                    <div class="card-image">
                        <img src='https://img.freepik.com/free-photo/people-office-during-work-day_23-2150690154.jpg?w=1060&t=st=1703894141~exp=1703894741~hmac=2eb27ddfa91d89ed4796f2bc1459d4edd7c531c40dab17672a6f6adae5fddc84' />
                    </div>
                    <div class="category"> L'IA en Afrique </div>
                    <div class="heading">
                        <p>blablablablabl</p>
                        </div>
                </div>

                {/* ---------------------------------- */}

                <div class="card">
                    <div class="card-image">
                        <img src='https://img.freepik.com/free-photo/people-office-during-work-day_23-2150690154.jpg?w=1060&t=st=1703894141~exp=1703894741~hmac=2eb27ddfa91d89ed4796f2bc1459d4edd7c531c40dab17672a6f6adae5fddc84' />
                    </div>
                    <div class="category"> L'IA en Afrique </div>
                    <div class="heading">
                        <p>blablablablabl</p>
                        </div>
                </div>

                {/* ---------------------------------- */}

                <div class="card">
                    <div class="card-image">
                        <img src='https://img.freepik.com/free-photo/people-office-during-work-day_23-2150690154.jpg?w=1060&t=st=1703894141~exp=1703894741~hmac=2eb27ddfa91d89ed4796f2bc1459d4edd7c531c40dab17672a6f6adae5fddc84' />
                    </div>
                    <div class="category"> L'IA en Afrique </div>
                    <div class="heading">
                        <p>blablablablabl</p>
                        </div>
                </div>
            </div>
        </>
    )
}

export default Memory