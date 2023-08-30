import React from "react";
import './About.css';




function About(props){
        console.log(props);
    return (
                <div className="about__container">
                    <span>
                        "Freedom is the freedom to say that two plus two make four.
                        If that is granted, all else
                        follows."
                    </span>
                    <span>- George Orwell, 1984</span>
                </div>
        
        
                // <div className="about__container">
                //     <span>
                //         개발자는 어떻게 성장해야 할까?
                //     </span>
                //     <span>"의식적연습 -피드백 -교정 - 의식적연습 반복"</span>
                // </div>
    );


}
export default About;